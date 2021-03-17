<!-- markdownlint-disable MD033 -->
# react 知识点

## JSX

实际上，JSX 仅仅只是 `React.createElement(component, props, ...children)` 函数的语法糖。

不是必须的，如果要使用JSX的话，必须要通过babel。

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

## react和vue区别

数据流：

- react: 单向数据流

- vue: 双向数据流(也就是典型的MVVM模式)，不过用vuex也能redux的单向数据流。

页面渲染：

- react: 根据两个虚拟DOM树的差，来修改DOM树。
- vue: 通过监听数据变化，来修改DOM树。

模板:

- react: 通过原生JS实现模板中的常见语法，比如插值，条件，循环等
- vue: 通过拓展的HTML语法（如v-html, v-if, v-for）来实现模板的常见语法

## React的新功能Time Slice 和Suspense

### Time Slicing

- 时间分片

- 简单的来说，react的异步渲染其实就是拉长了render的时间，一次跑一点，所以机器性能很差的，会看到react渲染时有稍微的延迟，但是不是卡顿。

### Suspense

- 主要解决的就是网络IO问题。网络IO问题其实就是我们现在用Redux+saga等等一系列乱七八糟的库来解决的「副作用」问题。

- 引入新的api，可以使得任何state更新暂停，直到条件满足时，再渲染（像async/await）

## PureComponent和FunctionComponent区别

Functional Component

- 对于不需要内部状态，且用不到生命周期函数的组件，我们可以使用这种方式定义组件，比如展示性的列表组件，可以将列表项定义为Stateless Functional Component。

pureComponent

- PureComponent的自动为我们添加的shouldComponentUpate函数，只是对props和state进行浅比较(shadow comparison)

## 虚拟DOM

- 与直接频繁的操作DOM相比，虚拟DOM可以最小化地操作DOM。

- 而且和DOM操作比起来，js 计算是非常便宜的。

- 虚拟DOM，才催生出了RN。也应证了 Learn Once, Write Anywhere 这句口号。

diff算法: 两个树的完全的diff算法是一个时间复杂度为 O(n3) 的问题。 但是在前端中，你会很少跨层地移动DOM元素，所以真实的DOM算法会对同一个层级的元素进行对比。

## 什么是“横切关注点”？React 中的解决方案有哪些？举出优缺点

如果不同的组件有相似的功能，就会产生“横切关注点（cross-cutting concerns）”问题。

| - | Mixin | render prop | HOC | HOOK |
| -   | -     | -            | -   | -    |
| 缺点 | 1. Mixin 可能会相互依赖，相互耦合，不利于代码维护。<br /> 2. 不同的Mixin中的名称可能会冲突。 | 1. 层层嵌套 <br /> 2. 需要修改组件结构 | 1. 层层嵌套 <br /> 2. 需要修改组件结构 <br /> 3. 不遵守约定会降低HOC灵活性以及复用性 | 暂无
| 优点 | 解决了“横切关注点”问题 | 耦合不严重 | 耦合不严重  | 1. 不用修改组件结构 <br /> 2. 状态组件的颗粒度更小

