var React = require('react');
var ReactDOM = require('react-dom');
var ListItem = require('./listitem.jsx');
var $ = require('jquery');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      filmObjects: []
    };
  },
  componentWillMount: function() {

  },
  render: function() {
    return (
      <div>
        <table className="table">
          {this.tableHeader()}
          {this.tableBody()}
        </table>
      </div>
    );
  },
  tableHeader: function() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Gender</th>
        </tr>
      </thead>
    )
  },
  tableBody: function() {
    var self = this;
    return (
      <tbody>
          {
              self.state.filmObjects.map(function(filmobj,index) {
                return (
                    <ListItem filmobj= {filmobj} counter={index} key={index}/>
                  )
              })
          }
      </tbody>
    );
  },
  componentDidMount: function() {
    let self = this;
    $.ajax({
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      url: 'http://swapi.co/api/people',
      success: function(data) {
        self.setState({
          filmObjects: data.results
        })
      },
      error: function(xhr, status, error) {
        console.error(xhr, status, error);
      }
    });
  }
});
