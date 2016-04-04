var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Signin = React.createClass({
  render: function() {
    return (
      <div className="user-form">
        <form className="signin-form">
          <h2 className="form-heading"> Sign In </h2>
          <button className="btn btn-lg btn-info btn-block" type="button"> Sign In with Facebook </button>
          <p> Or sign in with Email </p>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="inputPassword" placeholder="Email" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-success btn-block" type="submit">Sign in</button>
          <p> Agree with the terms of service </p>
        </form>
        <div className="user-center">
          <Link to="/user/signup"> Sign Up </Link> |
          <Link to="/user/new-password"> Forgot Password ? </Link>
        </div>
      </div>
    );
  }
});

module.exports = Signin;
