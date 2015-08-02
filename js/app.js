var React = require('react');
require('./components/Fruit.react');

var FruitComponent = React.createClass({
    render: function() {
        return (
            <div>
                <p><BananaComponent number={this.props.number}/></p>
                <p><AppleComponent /></p>
            </div>
        )
    }
});

React.render(
    <FruitComponent number='3'/>,
    document.getElementById('fruit')
);


