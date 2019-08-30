# 读 Tapable 模块 源码总结

开放了一下API，我们一个个的分析

- SyncHook
- SyncBailHook
- SyncWaterfallHook
- SyncLoopHook
- AsyncParallelHook
- AsyncParallelBailHook
- AsyncSeriesHook
- AsyncSeriesBailHook
- AsyncSeriesWaterfallHoo

以上的API都继承了`Hook类`(node_modules/tapable/lib/Hook.js)

## Hook类

### tap 方法

往`Hook类`的taps属性push { fn: callback, name: tap的name, type: tap的类型 }

### call 方法（先进先出）

调用通过tap方法的监听函数

实际上调用的是`HookCodeFactory类`的`setup方法` `create方法`

例子：

``` javascript
queue.tap('1', function (name, name2) {// tap 的第一个参数是用来标识订阅的函数的
    console.log(name, name2, 1);
    return '1'
});
queue.tap('2', function (name) {
    console.log(name, 2);
});

call 方法执行↓
"use strict";
// header -start-
var _context;
var _x = this._x;
// header -end-

// content(主要) -start-
var _fn0 = _x[0];
_fn0(name);
var _fn1 = _x[1];
_fn1(name);
// content(主要) -end-
```

## HookCodeFactory类

### setup 方法

把实例的监听函数抽出来，存到实例属性`_x`里

### create 方法 (重点)

Q: 为什么不用`eval()`而用`new Function()`?
A: 如果只考虑动态生成执行代码的话，二者都可以；但是这里还要考虑传参，所以用了`new Function()`

拼接回调函数

### content 方法

一般会被父类的conntent方法覆盖

## SyncHookCodeFactory类

这个类继承了`HookCodeFactory类`

`SyncHook类`和`SyncBailHook类`的主要区别在各自的`compile方法`，而`compile方法`的区别在于`factory函数`，因为它决定了回调函数的内容
