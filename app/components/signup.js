var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Signup = React.createClass({
  render: function() {
    return (
      <div className="user-form">
        <form className="signup-form">
          <h2 className="form-heading"> Sign Up </h2>
          <button className="btn btn-lg btn-info btn-block" type="button"> Sign Up with Facebook </button>
          <p> Or sign up with Email </p>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" id="inputEmail" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="hello@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="inputPassword" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" id="inputPassword" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
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
