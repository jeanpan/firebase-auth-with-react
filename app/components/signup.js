var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Link = ReactRouter.Link;

var firebaseAuth = require('../utils/firebaseAuth');
var firebaseUser = require('../utils/firebaseUser');

var Signup = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      msg: ''
    };
  },

  handleEmailInput: function(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordInput: function(event) {
    this.setState({ password: event.target.value });
  },

  handleConfirmPasswordInput: function(event) {
    this.setState({ confirmPassword: event.target.value });
  },

  handleSubmit: function(event) {

    event.preventDefault();

    var email = this.state.email;
    var password = this.state.password;
    var confirmPassword = this.state.confirmPassword;

    if (!email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    firebaseAuth.register({
      email: email,
      password: password
    }, function(error, authData){
      if (error) {
        switch (error.code) {
          case "EMAIL_TAKEN":
            this.setState({
              msg: "The new user account cannot be created because the email is already in use."
            });
            console.log("The new user account cannot be created because the email is already in use.");
            break;
          case "INVALID_EMAIL":
            this.setState({
              msg: "The specified email is not a valid email."
            });
            console.log("The specified email is not a valid email.");
            break;
          default:
            this.setState({
              msg: "Error creating user:"
            });
            console.log("Error creating user:", error);
        }
      } else {
        console.log("Successfully created user account with uid:", authData);
        browserHistory.push('/auth/signin');
        // firebaseUser.createUserData(authData);
      }
    }.bind(this));

    this.setState({
      email: '',
      password: '',
      confirmPassword: ''
    });

  },

  render: function() {
    return (
      <div className="user-form">
        <div className="auth-msg">
          <p>{this.state.msg}</p>
        </div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2 className="form-heading"> Sign Up </h2>
          <button className="btn btn-lg btn-info btn-block" type="button"> Sign Up with Facebook </button>
          <p> Or sign up with Email </p>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              ref="email"
              value={this.state.email}
              onChange={this.handleEmailInput}
              />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              ref="password"
              value={this.state.password}
              onChange={this.handlePasswordInput}
              />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              ref="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordInput}
              />
          </div>
          <button className="btn btn-lg btn-success btn-block" type="submit">Sign Up</button>
          <p> Agree with the terms of service </p>
        </form>
        <div className="auth-center">
          <Link to="/auth/signin"> Sign In </Link> |
          <Link to="/auth/new-password"> Forgot Password ? </Link>
        </div>
      </div>
    );
  }
});

module.exports = Signup;
