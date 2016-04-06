var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NewPassword = React.createClass({
  render: function() {
    return (
      <div className="user-form">
        <form className="new-password-form">
          <h2 className="form-heading"> Forgot Password ? </h2>
          <div className="form-group">
            <label>Please enter your email to reset password</label>
            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
          <button className="btn btn-lg btn-warning btn-block" type="submit">Reset Password</button>
        </form>
        <div className="auth-center">
          <Link to="/auth/signin"> Sign In </Link> |
          <Link to="/auth/signup"> Sign Up </Link>
        </div>
      </div>
    );
  }
});

module.exports = NewPassword;
