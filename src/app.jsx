var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list.jsx');

var ele = React.createElement(List);
ReactDOM.render(ele, document.querySelector('.row'));
