# 什么是受控组件 ControlledComponent

为了更好的理解什么是受控组件，需要先理清一些概念

React 中组件有哪些？

- 类组件(Class Component)
- 函数组件(Function Component)
- 宿主组件(Host Component) 例如： div、span、input

哪种类型的组件`可能`是受控组件？

- 宿主组件

为什么是`可能`？

- 因为有些宿主组件肯定不是受控组件，例如：div、span

哪些宿主组件`可能`是受控组件？

- input
- textarea
- select

为什么是又`可能`？

- 因为 input、textarea、select 要想成为受控组件是有条件的

什么条件？

- 拥有属性 `value` 和 `checked` 中的至少一个
- 例如
  - &lt;input value={val} /&gt;
  - &lt;input type="checkbox" checked={isChecked} /&gt;

为了条件中没有 `onChange`？

- onChange 不是必要条件，但是一般受控组件都会添加 onChange 属性，不然受控组件的值在其生命周期内是“无法改变”(`视觉上没有改变`)的。
- 例如
  - &lt;input value={val} onChange={handle} &gt;

为什么没说是`视觉上没有改变`？

- 结论：当你在 input 输入框中输入了字母，字母会添加到输入框中，但是如果 React 判定它是受控组件，则会恢复原来的值，由于恢复的速度很快，所以你感觉值没有改变过。

- 证明：
  
``` javascript
<input
  value="abc123"
  onChange={e => {
    console.log(
      '此时值已被修改',
      e.target.value
    );

    setTimeout(() => {
      console.log(
        '此时值已被恢复',
        e.target.value,
      );
    }, 0);
  }}
/>
```

为什么会有受控组件？

- 要从 React 的一个理念说起，`UI = f(state)`
- 但是一些表单元素(e.g. `input` `textarea`)破坏了这个理念，所以宿主组件有了`受控`和`非受控`这一说。
