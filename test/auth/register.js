import test from 'ava'
import auth from '../../app/utils/auth'

test('registers when given good data', t => {
  auth.register('jennifer', 'password')
    .then(response => {
      t.true(response)
      t.true(auth.loggedIn())
    })
})

test('returns error when given existing user', t => {
  t.throws(auth.register('juan', 'password', 'Username already in use'))
})
