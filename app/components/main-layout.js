var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;

var firebaseAuth = require('../utils/firebaseAuth');

var MainLayout = React.createClass({
  getInitialState: function() {
    return {
      isLoggedInUser: false
    };
  },

  componentWillMount: function() {
    // TODO: pass props to child component to check is login or logout state

    firebaseAuth.checkLoginState(function(authData){
      if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        this.setState({
          isLoggedInUser: true
        });
      } else {
        console.log("User is log out");
        this.setState({
          isLoggedInUser: false
        });
      }
    }.bind(this));

  },

  handleSignoutClick: function() {
    firebaseAuth.logout(function(authData) {
      console.log('Logout');
      browserHistory.push('/');
    });
  },

  render: function() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">Project Name</Link>
            </div>

            <ul className="nav navbar-nav navbar-right">
              {this.state.isLoggedInUser ?
                <li><a onClick={this.handleSignoutClick}>Logout</a></li>
                :
                <li><Link to="/auth/signin">Login</Link></li>
              }
            </ul>

          </div>
        </nav>

        <div className="container">
          {this.props.children}
        </div>

      </div>
    );
  }
});

module.exports = MainLayout;
