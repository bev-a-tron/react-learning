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
        one: 1
        , two: 2
        , three: 3
    }
}

var MyNewComponent = React.createClass({
    render: function() {
        console.log(this.props.name);
        console.log(this.state.one);
        console.log(this.state.two);
        console.log(this.state.three);
        return (
            <div>
            <h1>Hello, {this.props.name}!</h1>
                <h2>{this.state.one}</h2>
                <h3>{this.state.two}</h3>
                <p>{5 * 3}</p>
                <button onClick={this.updateState}>Click me</button>
            </div>
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
    },
    getDefaultProps: function() {
        return {
            name: 'Beautiful'
        }
    },
    updateState: function() {
        this.setState({
            one: this.state.one + 1
        });
    }
});

React.render(
    <MyNewComponent name="Handsome"/>,
    document.getElementById('myDiv3')
);

React.render(
    <MyNewComponent />,
    document.getElementById('myDiv4')
);

var MyComponent2 = React.createClass({
    getInitialState: function() {
        return {
            count: 5
        }
    },
    render: function() {
        return (
            <h1>{this.state.count}</h1>
        )
    }
});

React.render(
    <MyComponent2 />,
    document.getElementById('myDiv5')
);

var CommentBox = React.createClass({displayName: 'Comment Box',
render: function () {
    return (
        React.createElement('div', {className: "commentBox"},
            React.createElement('p', {className: "koalaBear"},
            "Hello, I'm a comment box"),
        "And this is my assistant")
    )
}});

React.render(
    React.createElement(CommentBox, null),
    document.getElementById('myDiv')
);

React.render(
    React.createElement('p', [], ['layer1','layer2','layer3']),  // why are these children all <span>?
    document.getElementById('myDiv2')
);

var List = React.createClass({
    render: function() {
        return (
            <ol type='I'>
                {
                    this.props.items.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
        )
    }
});

React.render(
    <List items={['apples','bananas','pineapples']}/>,
    document.getElementById('listStuff')
);