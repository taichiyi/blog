# react 知识点

## JSX

实际上，JSX 仅仅只是 `React.createElement(component, props, ...children)` 函数的语法糖。

不是必须的，如果要使用JSX的话，必须要通过babel。

每个 JSX 元素只是调用 React.createElement(component, props, ...children) 的语法糖。因此，使用 JSX 可以完成的任何事情都可以通过纯 JavaScript 完成。

如果你想了解更多 JSX 转换为 JavaScript 的示例，可以尝试使用 [在线 Babel 编译器](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)。

使用JSX↓

``` javascript
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

ReactDOM.render(
  <Hello toWhat="World" />,
  document.getElementById('root')
);
```

不使用JSX↓

``` javascript
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('root')
);
```

## Context

> 背景在React应用中数据是通过props由上至下(父->子)传递的，最上层需要向最下层传递数据时，需要显示的层层传递，当存在多个组件嵌套时，这种方式非常繁琐。

## Code Splitting

## react 生命周期 -start-

react已组件的形式来实现模块化。所以组件这个概念在react中非常重要，需要深入了解。

生命周期又是组件的一个重要概念。

在 React.Component 的子类中有个必须定义的 render() 函数。本章节介绍其他方法均为可选。

[生命周期图谱原网站](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### 生命周期图谱(React version 16.3)

![生命周期图谱16.3](https://oss.taichiyi.com/markdown/QQ20190507-115428%402x.jpg)

### 生命周期图谱(React version 16.4)

![生命周期图谱16.4](https://oss.taichiyi.com/markdown/QQ20190507-120903%402x.jpg)

### React version 16.3 变动

#### 把以下3个生命周期改为不安全的生命周期

17.0版本后会移除以下3个生命周期

- componentWillMount -> UNSAFE_componentWillMount
- componentWillReceiveProps -> UNSAFE_componentWillReceiveProps
- componentWillUpdate -> UNSAFE_componentWillUpdate

#### 新增2个生命周期

- static getDerivedStateFromProps
- getSnapshotBeforeUpdate

#### 为什么16.3去掉了3个生命周期函数，新增了2个生命周期函数

官方说：去掉的那3个生命周期往往会鼓励不安全的编码实践。这些生命周期方法经常被误解和巧妙地误用; 此外，我们预计，对于异步渲染，它们的潜在误用可能会更成问题。

### React.PureComponent

React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。

如果赋予 React 组件相同的 props 和 state，render() 函数会渲染相同的内容，那么在某些情况下使用 React.PureComponent 可提高性能。

> 注意
>
> React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的 props 和 state 较为简单时，才使用 React.PureComponent，或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。你也可以考虑使用 immutable 对象加速嵌套数据的比较。
>
> 此外，React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件。

### React.memo

``` JavaScript
const MyComponent = React.memo(function MyComponent(props) {
  /* 使用 props 渲染 */
});
```

React.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。

如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。

默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现。

``` JavaScript
function MyComponent(props) {
  /* 使用 props 渲染 */
}
function areEqual(prevProps, nextProps) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
}
export default React.memo(MyComponent, areEqual);
```

此方法仅作为性能优化的方式而存在。但请不要依赖它来“阻止”渲染，因为这会产生 bug。

>注意
>
>与 class 组件中 shouldComponentUpdate() 方法不同的是，如果 props 相等，areEqual 会返回 true；如果 props 不相等，则返回 false。这与 shouldComponentUpdate 方法的返回值相反。

## react 生命周期 -end-
