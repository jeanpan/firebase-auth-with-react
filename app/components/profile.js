var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var firebaseAuth = require('../utils/firebaseAuth');
var firebaseUser = require('../utils/firebaseUser');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      username: ''
    };
  },

  componentWillMount: function() {
    console.log("profile");
    firebaseAuth.checkLoginState(function(authData){
      if (authData) {
        
        firebaseUser.getUserData(authData, function(snapshot) {
          this.setState({
            username: snapshot.child("name").val()
          });

        }.bind(this));

      } else {
        // Not logged in user, redirect to login page.
        browserHistory.push('/auth/signin');
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div className="home-page">
        <h1>Welcome Back, {this.state.username} !</h1>
      </div>
    );
  }
});

module.exports = Profile;
