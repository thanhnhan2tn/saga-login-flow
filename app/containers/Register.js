import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './../components/Form';

import {registerRequest} from '../actions';

class Register extends Component {
  constructor (props) {
    super(props);

    this._register = this._register.bind(this);
  }
  _register (username, password) {
    this.props.dispatch(registerRequest({username, password}))
  }
  render () {
    const {dispatch, data, history} = this.props;
    const {formState, currentlySending, error} = data;

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>Register</h2>
          </div>
          <Form
            data={formState}
            dispatch={dispatch}
            history={history}
            onSubmit={this._register}
            btnText={'Register'}
            error={error}
            currentlySending={currentlySending}
          />
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function mapStateToProps (state) {
  return {
    data: state
  };
}

export default connect(mapStateToProps)(Register);
