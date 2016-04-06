var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;

// Layouts
var MainLayout = require('./components/main-layout');

// Pages
var Home = require('./components/home');

// User Pages
var Signin = require('./components/signin');
var Signup = require('./components/signup');
var NewPassword= require('./components/new-password');

var Profile = require('./components/profile');

module.exports = (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="auth">
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="new-password" component={NewPassword} />
      </Route>

      <Route path="/profile" component={Profile} />

    </Route>
  </Router>
);
