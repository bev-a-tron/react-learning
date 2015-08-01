var FruitComponent = React.createClass({
    render: function() {
        return (
            <div>
                <BananaComponent />
                <AppleComponent />
            </div>
        )
    }
});

var BananaComponent = React.createClass({
    render: function() {
        return (
            <img src="static/bananas.png"></img>
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

React.render(
    <FruitComponent />,
    document.getElementById('fruit')
);


