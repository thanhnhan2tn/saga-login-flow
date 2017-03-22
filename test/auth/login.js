import test from 'ava'
import auth from '../../app/utils/auth'

import {hashSync} from 'bcryptjs'
import genSalt from '../../app/utils/auth/salt'

test('returns true on correct login', t => {
  let salt = genSalt('juan')
  let hash = hashSync('password', salt)

  auth.login('juan', hash)
    .then(response => {
      t.true(response)
    })
})

test('returns error on wrong password', t => {
  t.throws(auth.login('juan', 'wrong'), 'Wrong password')
})

test('returns error on inexistent user', t => {
  t.throws(auth.login('banana', 'wrong'), 'User doesn\'t exist')
})

test('stays logged in until log out', t => {
  let salt = genSalt('juan')
  let hash = hashSync('password', salt)

  auth.login('juan', hash)
    .then(() => {
      t.true(auth.loggedIn())
      auth.logout(() => {
        t.false(auth.loggedIn())
      })
    })
})
