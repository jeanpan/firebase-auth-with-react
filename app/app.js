var React = require('react');
var ReactDOM = require('react-dom');

var Routes = require('./routes');

// import React from 'react';
// import ReactDOM from 'react-dom';

// Notice that we've organized all of our routes into a separate file.
// import Router from './router';

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Routes, document.getElementById('app'));
