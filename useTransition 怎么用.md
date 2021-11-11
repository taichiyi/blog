# useTransition 和 startTransition 怎么用

<!-- 

目的
- useTransition 和 startTransition 区别？
- 什么时候使用 startTransition ？
  - 和防抖有什么区别？
  - 和 setTimeout 有什么区别？
- 怎么用 startTransition ？
- update 优先级
- 过渡中的 update 是怎么被覆盖掉的？
- 时间分片 和 transition 是什么关系？
- 
 -->

## useTransition 和 startTransition 区别

1. useTransition 封装了 startTransition

    在函数组件中，useTransition 伪代码：

    ``` javascript
    const useTransition=(callback)=>{
      const [isPending, setIsPending]=useState(false)
      setIsPending(true)
      startTransition(()=>{
        setIsPending(false)
        callback()
      })
      return [isPending, useTransition]
    }
    ```

2. 使用范围：

   - useTransition 只能值函数组件中使用。

   - startTransition 可以在类组件和函数组件中使用。

## 什么时候使用 startTransition

startTransition 主要有两个使用场景

1. CPU 密集型场景：有个计算量比较大的组件，并且依赖于用户的输入内容，当用户输入比较频繁的时候，会导致页面卡顿。

- 没有使用 startTransition 时：

  在 [codesandbox](https://codesandbox.io/s/cpu-bound-before-lanes-67wx1?file=/src/App.js) 中体验。

  ![没有使用 startTransition 时](https://oss.taichiyi.com/markdown/cpu-bound-before-lanes.gif)

- 使用 startTransition 时：

  在 [codesandbox](https://codesandbox.io/s/cpu-bound-after-lanes-gl62u?file=/src/App.js) 中体验。

  ![使用 startTransition 时](https://oss.taichiyi.com/markdown/cpu-bound-after-lanes.gif)

2. IO 密集型场景：
