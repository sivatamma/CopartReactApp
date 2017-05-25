var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      filmobj: {}
    };
  },
  componentWillMount: function() {
    this.state.filmobj = this.props.filmobj;
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
