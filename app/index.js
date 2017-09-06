var React = require('react');
var ReactDOM = require('react-dom');
var Admin = require('./components/Admin');
var schedule = require('json!./schedule2017.json');

ReactDOM.render(
  <Admin data={schedule} />,
  document.getElementById('app')
);
