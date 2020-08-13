# React首次渲染主要流程

例子：

``` js
// <div id="root"></div>
class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return [
      React.createElement(
        'div',
        {
          className: 'click-counter',
          key: '1',
        },
        React.createElement(
          'span',
          {
            key: '1',
          },
          'Count',
        ),
        React.createElement(
          'span',
          {
            key: '2',
          },
          ' : ',
        ),
        React.createElement(
          'span',
          {
            key: '3',
          },
          this.state.count,
        ),
      ),
      React.createElement(
        'button',
        {
          key: '2',
          onClick: this.handleAdd,
        },
        'Add',
      ),
    ]
  }
};

class AppHeader extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
    return undefined;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }
  
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  
  render() {
    return React.createElement(
      'div',
      {
        className: 'app-header',
      },
      React.createElement(
        'div',
        {
          className: 'app-header-m',
        },
        this.props.title,
      ),
    );
  }
};

const AppFooter = () => {
  const [text, setText] = React.useState('琼公网安备 xxxxxxxxxxxxxx 号');
  return React.createElement(
    'div',
    {
      className: 'footer',
    },
    text,
  );
}

class App extends React.Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'app',
      },
      React.createElement(AppHeader, {
        title: '计数器',
      }),
      React.createElement(ClickCounter),
      React.createElement(AppFooter),
    );
  }
};


const element = React.createElement(App);

const rootIns = ReactDOM.render(
  element,
  document.querySelector('#root'),
  function (fiberRoot) {
    console.log(this);
    console.log(fiberRoot);
    console.dir(document.querySelector('#root'));
  }
);
```
