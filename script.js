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

var MyNewComponent = React.createClass({
    render: function() {
        console.log(this.props.name);
        return (
            <h1>Hello, {this.props.name}!</h1>
        );
    },
    componentWillMount: function() {
        console.log('this should come first');
    },
    componentDidMount: function() {
        console.log('this should come after render');
    }
});

React.render(
    <MyNewComponent name="Handsome"/>,
    document.getElementById('myDiv3')
);
