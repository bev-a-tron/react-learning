var BananaComponent = React.createClass({
    render: function() {
        return (
            <img src="static/bananas.png"></img>
        );
    }
});

React.render(
    <BananaComponent />,
    document.getElementById('bananas')
);


