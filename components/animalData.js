var React = require('react');

var AnimalData = React.createClass({
  render: function(){
    return(
      <div id="silly">
        <h1>My name is: {this.props.name} </h1>
        <h2>My species is: {this.props.species} </h2>
        <h2>My habitat is: {this.props.habitat} </h2>
        <h2>My diet is : { this.props.diet}</h2>
      </div> )
  }
});

module.exports = AnimalData;
