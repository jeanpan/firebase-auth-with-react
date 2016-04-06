var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var firebaseAuth = require('../utils/firebaseAuth');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      account: ''
    };
  },

  render: function() {
    return (
      <div className="home-page">
        <h1>Welcome Back</h1>
      </div>
    );
  }
});

module.exports = Profile;
