var React = require('react');


var ObjectRow = React.createClass({
    render: function() {
        return (
            <img src="static/bananas.png"></img>
        )
    }
});

var BananaComponent = React.createClass({
    render: function() {
        var rows = [];
        for (var i=0; i < this.props.number; i++) {
            rows.push(<ObjectRow />);
        }
        return (<tbody>{rows}</tbody>);
    }
});

var AppleComponent = React.createClass({
    render: function() {
        return (
            <img src="static/apple.png"></img>
        )
    }
});



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


