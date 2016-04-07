var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Link = ReactRouter.Link;

var firebaseAuth = require('../utils/firebaseAuth');
var firebaseUser = require('../utils/firebaseUser');

var Signin = React.createClass({
  getInitialState: function() {
    return {
      email: '',
      password: '',
      isRemember: false,
      error: false,
      msg: ''
    };
  },

  handleEmailInput: function(event) {
    this.setState({ email: event.target.value });
  },

  handlePasswordInput: function(event) {
    this.setState({ password: event.target.value });
  },

  handleRemeberCheck: function(event) {
    console.log(event);
  },

  handleSubmit: function(event) {

    event.preventDefault();

    var email = this.state.email;
    var password = this.state.password;

    if (!email || !password) {
      return;
    }

    firebaseAuth.login({
      email: email,
      password: password
    }, function(error, authData) {
      if (error) {
        this.setState({
          error: true,
          msg: 'Login Failed'
        });
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        // firebaseUser.createUserData(authData);
        browserHistory.push('/profile');
      }
    });

    this.setState({email: '', password: ''});
  },

  render: function() {
    return (
      <div className="user-form">
        <div className="auth-msg">
          <p>{this.state.msg}</p>
        </div>
        <form className="signin-form" onSubmit={this.handleSubmit}>
          <h2 className="form-heading"> Sign In </h2>
          <button className="btn btn-lg btn-info btn-block" type="button"> Sign In with Facebook </button>
          <p> Or sign in with Email </p>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
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
              placeholder="Password"
              ref="password"
              value={this.state.password}
              onChange={this.handlePasswordInput}
            />
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                className="form-control"
                id="checkRemeber"
                ref="remeber"
                value={this.state.isRemember}
                onChange={this.handleRemeberCheck}
              /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
          <p> Agree with the terms of service </p>
        </form>
        <div className="auth-center">
          <Link to="/auth/signup"> Sign Up </Link> |
          <Link to="/auth/new-password"> Forgot Password ? </Link>
        </div>
      </div>
    );
  }
});

module.exports = Signin;
