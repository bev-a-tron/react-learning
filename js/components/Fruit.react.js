var ObjectRow = React.createClass({
    render: function() {
        return (
            <img src="static/banana.png"></img>
        )
    }
});


var AppleComponent = React.createClass({
    render: function() {
        return (
            <img src="static/apple.png"></img>
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

module.exports = BananaComponent;
module.exports = AppleComponent;
