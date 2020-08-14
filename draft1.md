<!-- markdownlint-disable -->
# 草稿

# 为什么列表组件要加 key ?
key 帮助 React 识别哪些元素改变了，比如被添加或删除。注意不能识别修改。

# 列表组件不加 key 会怎样?
你对A元素修改可能作用在其他元素上。key 默认为 null。

# react class组件的生命周期函数有哪些？生命周期分为几个阶段？分别属于哪个阶段？

![生命周期图谱16.4](https://oss.taichiyi.com/markdown/os96fh8k.jpg)

# shouldComponentUpdate 、React.PureComponent 和 React.memo 之间的关系。

上面 3 个东西都和提高组件的性能有关。

shouldComponentUpdate 、React.PureComponent 只适用于 ClassComponent；
React.memo 只适用于 FunctionComponent。

## ClassComponent

ClassComponent 的内容由 State 和 Props 决定。

如果有些场景下想根据 State 和 Props 的值，判断是否需要重新渲染(re-render)组件。可以使用生命周期函数 shouldComponentUpdate。

shouldUpdate 的值为：

1. 如果 ClassComponent 定义了生命周期函数 shouldComponentUpdate ，则 shouldUpdate 的值等于该函数的返回值。
2. 如果 ClassComponent 继承了 PureComponent ，则 oldProps, newProps 、oldState, newState 进行浅层比较，只要其中一组不相等则 shouldUpdate 为 false。

如果 shouldUpdate 为 false ：
- 不会调用 componentDidUpdate 和 getSnapshotBeforeUpdate 生命周期函数。
- 不执行生命周期函数 render。

如果 shouldUpdate 为 true ：
一定调用 componentDidUpdate 和 getSnapshotBeforeUpdate 生命周期函数

不论 shouldUpdate 的值为什么，“ClassConponent 实例” 和 fiber 的 state 和 props 都会更新。

## FunctionComponent

memo 是一个 HOC 组件，通过劫持 props 判断组件是否需要重新渲染， shallowEqual(prevProps, nextProps) ，如果为真则复用 current fiber 

如果你的 FunctionComponent 在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。

## 什么是受控(controlled component)和非受控？

受控和非受控是相对与表单元素而言的，受控是指元素的值与对应 state 绑定(实际上是输入后的值是被覆盖还原的)。change event 被触发后被覆盖

在 React 中如果表单元素的 props 中有 value 和 onChange 两个属性，则这个组件是受控组件。

## React中的合成事件是什么？

SyntheticEvent 实例将被传递给你的事件处理函数，它是浏览器的原生事件的跨浏览器包装器。除兼容所有浏览器外，它还拥有和浏览器原生事件相同的接口。

SyntheticEvent 是一个包装器。

SyntheticEvent 是合并而来。

## redux
