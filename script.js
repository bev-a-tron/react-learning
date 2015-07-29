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

function getState() {
    return {
        one: 'test'
        , two: 'test2'
        , three: 'test3'
    }
}

var MyNewComponent = React.createClass({
    render: function() {
        console.log(this.props.name);
        console.log(this.state.one);
        console.log(this.state.two);
        console.log(this.state.three);
        return (
            <h1>Hello, {this.props.name}!</h1>
        );
    },
    componentWillMount: function() {
        console.log('this should come first');
    },
    componentDidMount: function() {
        console.log('this should come after render');
    },
    getInitialState: function() {
        return getState();
    }
});

React.render(
    <MyNewComponent name="Handsome"/>,
    document.getElementById('myDiv3')
);
