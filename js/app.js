var React = require('react');
var BananaComponent = require('./components/Banana.react');
var AppleComponent = require('./components/Apple.react');

var FruitComponent = React.createClass({
    render: function() {
        return (
            <div>
                <p><BananaComponent number={this.props.number}/></p>
                <p><AppleComponent number={this.props.number}/></p>
            </div>
        )
    }
});

React.render(
    <FruitComponent number='3'/>,
    document.getElementById('fruit')
);


