var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MainLayout = React.createClass({
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
              <li><Link to="/user/signin">Login</Link></li>
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
