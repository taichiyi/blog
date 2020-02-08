# Javascript 语法

ECMAScript(ES)是由ECMA-262标准化的脚本语言的名称。

由于版权的原因，正式场合一般叫ECMAScript；JavaScript是一种ECMAScript方言

## ES5及其之前的JavaScript知识点可以通过《JavaScript 高级程序设计（第3版）》学习

## ES6 (ECMAScript 2015)

2.1 let 命令
2.1.1 基本用法
2.1.2 不存在变量提升
2.1.3 暂时性死区
2.1.4 不允许重复声明
2.2 块级作用域
2.2.1 为什么需要块级作用域
2.2.2 ES6的块级作用域
2.2.3 块级作用域与函数声明
2.2.4 do表达式
2.3 const命令
2.3.1 基本用法
2.3.2 本质
2.3.3 ES6声明变量的6种方法
2.4 顶层对象的属性
2.5 global对象

第3章 变量的解构赋值
3.1 数组的解构赋值
3.1.1 基本用法
3.1.2 默认值
3.2 对象的解构赋值
3.3 字符串的解构赋值
3.4 数值和布尔值的解构赋值
3.5 函数参数的解构赋值
3.6 圆括号问题
3.6.1 不能使用圆括号的情况
3.6.2 可以使用圆括号的情况
3.7 用途

第4章 字符串的扩展
4.1 字符的Unicode表示法
4.2 codePointAt()
4.3 String.fromCodePoint()
4.4 字符串的遍历器接口
4.5 at()
4.6 normalize()
4.7 includes()、startsWith()、endsWith()
4.8 repeat()
4.9 padStart()、padEnd()
4.10 模板字符串
4.11 实例：模板编译
4.12 标签模板
4.13 String.raw()
4.14 模板字符串的限制

第5章 正则的扩展
5.1 RegExp构造函数
5.2 字符串的正则方法
5.3 u修饰符
5.4 y修饰符
5.5 sticky属性
5.6 flags属性
5.7 s修饰符：dotAll模式
5.8 后行断言
5.9 Unicode属性类
5.10 具名组匹配
5.10.1 简介
5.10.2 解构赋值和替换
5.10.3 引用

第6章 数值的扩展
6.1 二进制和八进制表示法
6.2 Number.isFinite()、Number.isNaN()
6.3 Number.parseInt()、Number.parseFloat()
6.4 Number.isInteger()
6.5 Number.EPSILON
6.6 安全整数和Number.isSafeInteger()
6.7 Math对象的扩展
6.7.1 Math.trunc()
6.7.2 Math.sign()
6.7.3 Math.cbrt()
6.7.4 Math.clz32()
6.7.5 Math.imul()
6.7.6 Math.fround()
6.7.7 Math.hypot()
6.7.8 对数方法
6.7.9 双曲函数方法
6.8 Math.signbit()
6.9 指数运算符
6.10 Integer数据类型
6.10.1 简介
6.10.2 运算

第7章 函数的扩展
7.1 函数参数的默认值
7.1.1 基本用法
7.1.2 与解构赋值默认值结合使用
7.1.3 参数默认值的位置
7.1.4 函数的length属性
7.1.5 作用域
7.1.6 应用
7.2 rest参数
7.3 严格模式
7.4 name属性
7.5 箭头函数
7.5.1 基本用法
7.5.2 注意事项
7.5.3 嵌套的箭头函数
7.6 绑定this
7.7 尾调用优化
7.7.1 什么是尾调用
7.7.2 尾调用优化
7.7.3 尾递归
7.7.4 递归函数的改写
7.7.5 严格模式
7.7.6 尾递归优化的实现
7.8 函数参数的尾逗号

第8章 数组的扩展
8.1 扩展运算符
8.1.1 含义
8.1.2 替代数组的apply方法
8.1.3 扩展运算符的应用
8.2 Array.from()
8.3 Array.of()
8.4 数组实例的copyWithin()
8.5 数组实例的find()和findIndex()
8.6 数组实例的fill()
8.7 数组实例的entries()、keys()和values()
8.8 数组实例的includes()
8.9 数组的空位

第9章 对象的扩展
9.1 属性的简洁表示法
9.2 属性名表达式
9.3 方法的name属性
9.4 Object.is()
9.5 Object.assign()
9.5.1 基本用法
9.5.2 注意点
9.5.3 常见用途
9.6 属性的可枚举性
9.7 属性的遍历
9.8 __proto__ 属性、Object.setPrototypeOf()、Object.getPrototypeOf()
9.8.1 __proto__ 属性
9.8.2 Object.setPrototypeOf()
9.8.3 Object.getPrototypeOf()
9.9 Object.keys()、Object.values()、Object.entries()
9.9.1 Object.keys()
9.9.2 Object.values()
9.9.3 Object.entries
9.10 对象的扩展运算符
9.11 Object.getOwnPropertyDescriptors()
9.12 Null传导运算符

第10章 Symbol
10.1 概述
10.2 作为属性名的Symbol
10.3 实例：消除魔术字符串
10.4 属性名的遍历
10.5 Symbol.for()、Symbol.keyFor()
10.6 实例：模块的Singleton模式
10.7 内置的Symbol值
10.7.1 Symbol.hasInstance
10.7.2 Symbol.isConcatSpreadable
10.7.3 Symbol.species
10.7.4 Symbol.match
10.7.5 Symbol.replace
10.7.6 Symbol.search
10.7.7 Symbol.split
10.7.8 Symbol.iterator
10.7.9 Symbol.toPrimitive
10.7.10 Symbol.toStringTag
10.7.11 Symbol.unscopables

第11章 Set和Map数据结构
11.1 Set
11.1.1 基本用法
11.1.2 Set实例的属性和方法
11.1.3 遍历操作
11.2 WeakSet
11.2.1 含义
11.2.2 语法
11.3 Map
11.3.1 含义和基本用法
11.3.2 实例的属性和操作方法
11.3.3 遍历方法
11.3.4 与其他数据结构的互相转换
11.4 WeakMap
11.4.1 含义
11.4.2 WeakMap的语法
11.4.3 WeakMap示例
11.4.4 WeakMap的用途

第12章 Proxy
12.1 概述
12.2 Proxy实例的方法
12.2.1 get()
12.2.2 set()
12.2.3 apply()
12.2.4 has()
12.2.5 construct()
12.2.6 deleteProperty()
12.2.7 defineProperty()
12.2.8 getOwnPropertyDescriptor()
12.2.9 getPrototypeOf()
12.2.10 isExtensible()
12.2.11 ownKeys()
12.2.12 preventExtensions()
12.2.13 setPrototypeOf()
12.3 Proxy.revocable()
12.4 this问题
12.5 实例：Web服务的客户端

第13章 Reflect
13.1 概述
13.2 静态方法
13.3 实例：使用Proxy实现观察者模式

第14章 Promise对象
14.1 Promise的含义
14.2 基本用法
14.3 Promise.prototype.then()
14.4 Promise.prototype.catch()
14.5 Promise.all()
14.6 Promise.race()
14.7 Promise.resolve()
14.8 Promise.reject()
14.9 两个有用的附加方法
14.10 应用
14.11 Promise.try()

第15章 Iterator和for...of循环
15.1 Iterator（遍历器）的概念
15.2 默认Iterator接口
15.3 调用Iterator接口的场合
15.4 字符串的Iterator接口
15.5 Iterator接口与Generator函数
15.6 遍历器对象的return()、throw()
15.7 for...of循环

第16章 Generator函数的语法
16.1 简介
16.2 next方法的参数
16.3 for...of循环
16.4 Generator.prototype.throw()
16.5 Generator.prototype.return()
16.6 yield*表达式
16.7 作为对象属性的Generator函数
16.8 Generator函数this
16.9 含义
16.10 应用

第17章 Generator函数的异步应用
17.1 传统方法
17.2 基本概念
17.3 Generator函数
17.4 Thunk函数
17.5 co模块
17.6 实例：处理 Stream

第18章 async函数
18.1 含义
18.2 用法
18.3 语法
18.4 async函数的实现原理
18.5 其他异步处理方法的比较
18.6 实例：按顺序完成异步操作
18.7 异步遍历器

第19章 Class的基本语法
19.1 简介
19.2 严格模式
19.3 constructor方法
19.4 类的实例对象
19.5 Class表达式
19.6 不存在变量提升
19.7 私有方法
19.8 私有属性
19.9 this的指向
19.10 name属性
19.11 Class的取值函数（getter）和存值函数（setter）
19.12 Class的Generator方法
19.13 Class的静态方法
19.14 Class的静态属性和实例属性
19.15 new.target属性

第20章 Class的继承
20.1 简介
20.2 Object.getPrototypeOf()
20.3 super关键字
20.4 类的prototype属性和 __proto__ 属性
20.4.1 extends的继承目标
20.4.2 实例的 __proto__ 属性
20.5 原生构造函数的继承
20.6 Mixin模式的实现

第21章 修饰器
21.1 类的修饰
21.2 方法的修饰
21.3 为什么修饰器不能用于函数
21.4 core-decorators.js
21.5 使用修饰器实现自动发布事件
21.6 Mixin
21.7 Trait
21.8 Babel转码器的支持

第22章 Module的语法
22.1 概述
22.2 严格模式
22.3 export命令
22.4 import命令
22.5 模块的整体加载
22.6 export default命令
22.7 export与import的复合写法
22.8 模块的继承
22.9 跨模块常量
22.10 import()
22.10.1 简介
22.10.2 适用场合
22.10.3 注意点

第23章 Module的加载实现
23.1 浏览器加载
23.1.1 传统方法
23.1.2 加载规则
23.2 ES6模块与CommonJS模块的差异
23.3 Node加载
23.4 循环加载
23.5 ES6模块的转码

第24章 编程风格
24.1 块级作用域
24.2 字符串
24.3 解构赋值
24.4 对象
24.5 数组
24.6 函数
24.7 Map结构
24.8 Class
24.9 模块
24.10 ESLint的使用

第25章 读懂ECMAScript规格
25.1 概述
25.2 相等运算符
25.3 数组的空位
25.4 数组的map方法

第26章 ArrayBuffer
26.1 ArrayBuffer对象
26.2 TypedArray视图
26.3 复合视图
26.4 DataView视图
26.5 二进制数组的应用
26.6 SharedArrayBuffer
26.7 Atomics对象