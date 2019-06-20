import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-input-wrapper">
          <input type="text" maxLength="7" />
        </div>
        <button
          type="submit"
          className="login-btn"
          onClick={() => {
            this.props.login();
            console.log(this.props);
          }}
        >
          Login
        </button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authenticated: state.loginReducer.authenticated,
  };
}
const mapDispatchToProps = {
  login,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
Login.propTypes = {
  login: PropTypes.func,
};
