/** @jsx React.DOM */
React.render(
    <h1>Hello, world!</h1>,
    document.getElementById('myDiv')
);


var MyComponent = React.createClass({
    render: function() {
        return (
            <h1>Hello, world, again!</h1>
        );
    }
});

React.render(
    <MyComponent/>,
    document.getElementById('myDiv2')
);