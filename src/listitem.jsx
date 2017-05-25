var React = require('react');
var ReactDOM = require('react-dom');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      filmobj: this.props.filmobj
    };
  },
  componentWillMount: function() {

  },
  render: function() {
    return (
      <tr key= {this.props.counter}>
        <td>{this.props.counter+1}</td>
        <td>{this.state.filmobj.name}</td>
        <td>{this.state.filmobj.birth_year}</td>
        <td>{this.state.filmobj.gender}</td>
      </tr>
    )
  }
});
