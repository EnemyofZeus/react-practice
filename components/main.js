var React = require('react');
var Link = require('react-router').Link;

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron">
					<h2 className="theTitle">Animals, animals</h2>
					<p> And we're lucky</p>


					<Link to='/'>
						<button className="btn btn-info">Home</button>
					</Link>
					<Link to='about'>
						<button className="btn btn-info">About</button>
					</Link>
					<Link to="animals">
						<button className="btn btn-info">Animals</button>
					</Link>
					{this.props.children}
				</div>
			</div>
			)
	}
});

module.exports = Main;
