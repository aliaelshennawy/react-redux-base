import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import currentWeek from '../components/app/currentWeek';

class addUser extends Component {
  render() {
    return (
      <div className="add-user-wrapper">
        <currentWeek />
      </div>
    );
  }
}
function mapStateToProps(state) {
  // const { user_details: userData } = state.loggedIn;
  return {};
}
const mapDispatchToProps = {
  // login,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(addUser);
