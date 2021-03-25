# 通过 React.memo 来优化函数组件

## 是什么？

memo 是一个可以优化组件性能的高阶组件。

## 为什么有？

大家都知道，对于函数组件来说，只要函数被调用就意味着这个函数组件会被重新渲染。

有的人就会说了，能不能像纯类组件(PureComponent)一样，先判断 state 和 props 是否改变，再决定是否重新渲染（调用 render 方法）。

为了优化函数组件的性能，React 提供了 memo 高阶组件。

## 有什么用？

高阶组件的第一个参数是函数组件。

高阶组件接受到的属性（props）都会原样传给函数组件。

渲染时，高阶组件会根据 [shallowEqual](https://github.com/facebook/react/blob/72434a7686035b4af766ee7d06c070d7f5d6a5f2/packages/shared/shallowEqual.js) 算法(如果想自定义相等算法，可以通过第二个参数传进来)判断 Props 是否相等。

如果相等，且 ref 没变，则不重新渲染函数组件。
