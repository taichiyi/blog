<!-- markdownlint-disable -->
# 草稿

# 为什么列表组件要加 key ?
key 帮助 React 识别哪些元素改变了，比如被添加或删除。注意不能识别修改。

# 列表组件不加 key 会怎样?
你对A元素修改可能作用在其他元素上。

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
