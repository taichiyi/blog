<!-- markdownlint-disable -->
<!--
上标字符
ᵃ ᵇ ᶜ ᵈ ᵉ ᵍ ʰ ⁱ ʲ ᵏ ˡ ᵐ ⁿ ᵒ ᵖ ᵒ⃒ ʳ ˢ ᵗ ᵘ ᵛ ʷ ˣ ʸ ᙆ ᴬ ᴮ ᒼ ᴰ ᴱ ᴳ ᴴ ᴵ ᴶ ᴷ ᴸ ᴹ ᴺ ᴼ ᴾ ᴼ̴ ᴿ ˢ ᵀ ᵁ ᵂ ˣ ᵞ ᙆ ꝰ ˀ ˁ ˤ ꟸ ꭜ ʱ ꭝ ꭞ ʴ ʵ ʶ ꭟ ˠ ꟹ ᴭ ᴯ ᴲ ᴻ ᴽ ᵄ ᵅ ᵆ ᵊ ᵋ ᵌ ᵑ ᵓ ᵚ ᵝ ᵞ ᵟ ᵠ ᵡ ᵎ ᵔ ᵕ ᵙ ᵜ ᶛ ᶜ ᶝ ᶞ ᶟ ᶡ ᶣ ᶤ ᶥ ᶦ ᶧ ᶨ ᶩ ᶪ ᶫ ᶬ ᶭ ᶮ ᶯ ᶰ ᶱ ᶲ ᶳ ᶴ ᶵ ᶶ ᶷ ᶸ ᶹ ᶺ ᶼ ᶽ ᶾ ᶿ ꚜ ꚝ ჼ ᒃ ᕻ ᑦ ᒄ ᕪ ᑋ ᑊ ᔿ ᐢ ᣕ ᐤ ᣖ ᣴ ᣗ ᔆ ᙚ ᐡ ᘁ ᐜ ᕽ ᙆ ᙇ ᒼ ᣳ ᒢ ᒻ ᔿ ᐤ ᣖ ᣵ ᙚ ᐪ ᓑ ᘁ ᐜ ᕽ ᙆ ᙇ ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁺ ⁻ ⁼ ˂ ˃ ⁽ ⁾ ˙ * º

下标字符
ₐ ₔ ₑ ₕ ᵢ ⱼ ₖ ₗ ₘ ₙ ₒ ₚ ᵣ ₛ ₜ ᵤ ᵥ ₓ ᙮ ᵤ ᵩ ᵦ ₗ ˪ ៳ ៷ ₒ ᵨ ₛ ៴ ᵤ ᵪ ᵧ

-->
# 草稿

## Redux

## React-Redux 中，Store 变化时，是怎么触发 React 重新渲染的？

## Redux 、Mobx 和 Flux 区别
 
Redux 和 Flux
相同：都是单向数据流
不同：
  Redux 的数据更新逻辑是在 reducer ，Flux 是在 store ；
  Redux 状态对象不可变(Immutable)，Flux 的可变(Mutable)；
  Redux 只有一个 store ，Flux 可以有多个 store ；

Redux 和 Mobx
不同：
  Redux 只有一个 store ，Flux 可以有多个 Mobx ；
  Redux 偏向函数式编程，Mobx 偏向面向对象编程；
  Redux 单向数据流，Mobx 双向数据流；
  Redux 状态对象不可变(Immutable)，Mobx 的可变(Mutable)；

特点：
  - Redux
    - 模板代码较多，每次都要创建 action、reducer 和 中间件(saga／thunk)
    - 大型复杂项目可维护性、拓展性更好
  - Mobx 
    - 模板代码少，比较自由，开发快
    - 更适合中小型项目

# JavaScript 的垃圾回收（garbage-collection）

垃圾回收有两种算法，其中一种是引用计数算法。但是这个算法有循环引用问题。
为了解决这个问题，推出了扫描标记算法。从全局对象开始查找所有对象，那些访问不到的对象，都会被回收。

# 执行上下文



# 算法总结

列出一些有代表性的输入值

|数据结构\值的类型|数组|单链表|
|-|-|-|
|-|求子集|去重[字典]|
|-|求某一项[有规律]|删除中间节点|
|-|根据指定规则修改项，求修改后的数组|返回倒数第 k 个节点[链表]|
|-|求两个项的下标[字典]|求和|
|-|求布尔值|回文|
|-|两个求布尔值|
|-|操作二维数组的项[O(n^2)]|
|-|求回文子串[从中间向两边]]|
|-|求两正序数组的中位数|

数据结构分析逻辑：有序或无序 -> 唯一或不唯一 -> 确定具体数据结构

数组：项之间是否有规律

是否有解?
适合用什么方法解？
    定义域是什么数据类型，值域是什么数据类型?
    递推、枚举、动态规划(贪心)?

用动态规划来解：
  第 1 步：定义状态(一般求什么就把什么定义为状态)
      把“最长上升子序列的长度”，定义为状态。
      所以 “最长上升子序列的长度”=dp(i)，其中 i 为阶段，dp(i) 为状态
  第 2 步：“状态转移方程”(对题目分析可得)
      dp(i)= max{dp(j)} + 1，0<=j<i && nums[j]<nums[i]
  第 3 步：根据“状态转移方程”实现代码


# redux 测试检验

- Redux 的中间件是什么？用过哪些？redux-thunk，redux-saga 和 redux-observable 的优缺点？
  - thunk：对于复杂的同步逻辑（特别是需要访问整个Redux存储状态的代码）和简单的异步逻辑（例如基本的AJAX调用），Thunk最合适。通过使用async/await，对于一些更复杂的基于promise的逻辑也可以使用thunk。
  - saga：Sagas最适合用于复杂的异步逻辑和解耦的“后台线程”类型的行为，尤其是在您需要侦听分派的动作（这是无法通过thunk进行的操作）时尤其如此。他们需要熟悉ES6生成器功能和redux-saga“效果”运算符。
  - observable：Observable解决了与sagas相同的问题，但是依靠RxJS来实现异步行为。他们需要熟悉RxJS API。

- 讲一下 redux 的工作流程?
  TODO

  单向数据流
    - 状态描述了特定时间的应用状态
    - UI 根据状态显示
    - 根据发生的情况更新状态
    - UI 根据状态重新显示

- react-redux是如何工作的?

- redux 与 mobx 的区别?

- redux 和 vuex 的区别？

- 为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？
  因为调度过程是同步的，异步操作会导致状态不可预测

- 为什么 reducer 要是纯函数？
  为了避免状态不可预测

- 为什么 Redux 状态的比较使用的是浅比较（===）？
  - 性能

- redux 默认只支持一个状态，如果想需要多个状态，可以使用 combineReducers 方法。

- 状态什么时候存在组件中，什么时候存在 Redux 中？
  - 是否有多个组件要使用这个状态？
  - 是否需要恢复状态到指定的时间点？
  - 是否要缓存状态？

今日试题——Redux相关
1|介绍 Redux 数据流的流程；

提示：此题需要明白整个 redux 内部流程，清楚 reducer、action、state 的作用

2|Redux 如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理

提示：这道题需要明白数据流走向和 react-redux 到 react 组件的链接

3|使用过的 Redux 中间件

提示：没用过的话这个真不好回答 ?

4|介绍 redux，主要解决什么问题

提示：想想为什么要用它

5|redux 请求中间件如何处理并发

 提示：首先要明白自己用的异步中间件的内部处理过程，再思考同时多个异步又如何

6|Redux 中异步的请求怎么处理

提示：和上题一样

7|Redux 中间件是什么东西，接受几个参数

提示：需要明白中间件是什么，为什么需要它，它的作用是什么

8|redux 的设计思想

略

9| 接入 redux 的过程

提示：需要明白 redux 是一个单独的状态管理的东西，它不属于某个 UI 框架的部分

10|Redux 有没有做过封装

提示：基于自己的业务情况，是否在 redux 上层根据自己需要做了一层封装

11|Redux 中哪些功能用到了哪些设计模式

 提示：这个需要熟悉 redux 源码了

12|Redux 状态管理器和变量挂载到 window 中有什么区别

提示：需要明白整个 redux 数据流程和 window 上的数据管理的过程

16|聊聊 Redux 相关的异步中间件的区别，比如：redux-saga、

redux-thunk

# 线程 和 CPU 核数的关系

单线程的特点

https://www.youtube.com/watch?v=8aGhZQkoFbQ
https://oss.taichiyi.com/markdown/1_9mv-g9E-87Sji9j7YR08Fw.gif
https://oss.taichiyi.com/markdown/1_lZ-KXoVNUSOwaq7q8zUBDg.png

# react-redux 是这么触发 react更新的

react-redux 的 connect API 是一个函数组件，里面用了 useReducer 这个 Hook，调用了 React-Dom 的 dispatchAction 函数，dispatchAction 触发了 scheduleWork 函数 更新 Fiber。



react 
- 介绍一下 diff 算法
- DIFF算法为什么是O(n)复杂度而不是O(n^3)
- React怎么做数据的检查和变化
- key主要是解决哪一类的问题，为什么不建议用索引index（重绘）
- react异步渲染的概念,介绍Time Slicing 和 Suspense
- 两个对象如何比较
<!-- - react生命周期 -->
- 介绍Fiber
- react中的key的作用
- shouldComponentUpdate是为了解决什么问题
- 如何解决props层级过深的问题
- react的理念是什么
- react，的优缺点
- setState是同步还是异步
- setState什么时候是同步的
- 对无状态组件的理解
- 虚拟 DOM 主要做了什么
- React组件中怎么做事件代理
- React怎么做数据的检查和变化
<!-- - React生命周期及自己的理解，以及V16对生命周期的修改 -->
- 哪些方法会触发react重新渲染
- Hook 为什么有？有什么用？
-  react 的渲染过程中，兄弟节点之间是怎么处理的？也就是key值不一样的时候。
- 一次性插入1000个div，如何优化插入的性能




redux
- Redux中异步的请求怎么处理
- Redux中间件是什么东西，接受几个参数（两端的柯里化函数）
- 柯里化函数两端的参数具体是什么东西
- 中间件是怎么拿到store和action，然后怎么处理
- state是怎么注入到组件的，从reducer到组件经历了什么样的过程
- 介绍Redux工作流程
- Redux状态管理器和变量挂载到window中有什么区别
- 介绍Redux数据流的流程
- Redux如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理
- 多个组件之间如何拆分各自的state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，如何思考这块
- 使用过的Redux中间件
- redux请求中间件如何处理并发
- 介绍Redux，主要解决什么问题？数据流程是怎么样的？多个组件使用相同状态如何进行管理？


react-redux
- React-Redux到react组件的连接过程
- connect原理






redux-router
- react-router怎么实现路由切换
- react-router里的<Link>标签和<a>标签有什么区别
- <a>标签默认事件禁掉之后做了什么才实现了跳转
- 介绍路由的history
- 前端怎么控制管理路由
- 如何配置React-Router
- 路由的动态加载模块
- 前端怎么控制管理路由




CSS
- 介绍flex布局
- 如何实现高度自适应
- 移动端适配1px的问题
- 其他css方式设置垂直居中
- 两种以上方式实现已知或者未知宽度的垂直水平居中
- px，em，rem的区别





<!-- 异步编程 -->
<!-- - Promise有没有解决异步的问题 -->
<!-- - Promise和setTimeout的区别（Event Loop） -->
<!-- - Promise.all实现原理 -->
<!-- - Promise构造函数是同步还是异步执行，then呢 -->
<!-- - Promise的三种状态 -->
<!-- - promise的精髓，以及优缺点 -->
<!-- - promise、async有什么区别 -->
<!-- - 介绍Promise，异常捕获 -->
<!-- - Async/Await怎么实现 -->
<!-- - 手写简版promise，基础架子，不用写all、race等api -->
<!-- - JS为什么要区分微任务和宏任务 -->

- ES6使用的语法
- JS是什么范式语言
- 随机值存在一样的情况，如何避免
- JS执行过程中分为哪些阶段
- 词法作用域和this的区别
- 深拷贝和浅拷贝
- 发布-订阅和观察者模式的区别
- 搜索请求如何处理（防抖）
- 介绍观察者模式
- 介绍中介者模式
- 观察者和订阅-发布的区别，各自用在哪里
- 介绍this各种情况
- cookie和token都存放在header里面，为什么只劫持前者
- cookie和session有哪些方面的区别
- 谈一下隐式类型转换
- 输入url后发生了什么
- 怎么与服务端保持连接
- EventEmitter
- 实现大整数加法
- setTimeOut 和 setInterval 底层的区别(事件循环)
- 手写bind
- 项目怎么做的移动端适配？flexible原理（1px问题，通过viewport）
- 强缓存，弱缓存
- 前端安全防范措施？xss攻击和csrf攻击？
- 同源策略，为什么有，有什么用？
- 请简单实现双向数据绑定mvvm。
- 实现Storage，使得该对象为单例，并对localStorage进行封装设置值setItem(key,value)和getItem(key)
- 说说事件流吧(DOM)
- prototype和proto的关系是什么
- meta viewport原理
- 域名收敛是什么
- 如何实现大数相加。
- 前端异常监测如何实现。
- 什么二叉树，从一堆大数中选出满足条件的数要求最快
- 简单实现async/await中的async函数



拖拽功能




其他
- 使用过程中遇到的问题，如何解决的
- 自己的缺点
- 说一下你觉得你最得意的一个项目？你这个项目有什么缺陷，弊端吗？
- 说一下你的技术有什么特点
- 对于加班的看法


1像素边框问题

这个默认是移动端的问题了。由于移动端一般都会设置屏幕宽度为设备宽度，width=device-width,initial-scale=1, 而有些屏幕是2倍屏，导致在移动端上设置1px就是看上去的2px。

解决方法：

通过transform将宽度缩小一半，transform:scaleY(0.5)
通过@media媒体查询，查询当前设置的屏幕倍率，统一设置transform, 参考: 移动端(手机)1像素边框真正实现
模仿淘宝(不确定是不是来自淘宝的)，设置屏幕宽度为设计师的设计尺寸(一般为750)。
<meta name="viewport" content="width=750, user-scalable=no">


跨域的问题

出于安全考虑，浏览器会限制从脚本内发起的跨域HTTP请求。

JSONP(JSON with Padding): 利用加载 JS 文件不需要遵循同源策略的原理。
CORS(Cross-Origin Resource Sharing): 在服务器端返回允许跨域访问的头。
WebSockt：利用 WebSocket 不需要遵循同源策略的原理。
postMessage
浏览器插件
