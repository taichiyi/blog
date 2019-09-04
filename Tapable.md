# 读Tapable模块源码总结

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
A: 如果只考虑动态生成执行代码的话，二者都可以；但是这里还要考虑传参，所以用了`new Function()`

拼接给call方法调用的函数

### content 方法

一般会被父类的conntent方法覆盖

## SyncHookCodeFactory类

这个类继承了`HookCodeFactory类`

`SyncHook类`和`SyncBailHook类`的主要区别在各自的`compile方法`，而`compile方法`的区别在于`factory函数`，因为它决定了回调函数的内容

## SyncHook类

new类时的数组的长度，决定了回调函数参数的个数

> 例子↓

``` javascript
const queue = new SyncHook(['SyncHook_name']);
queue.tap('1', function (name, name2) {
    console.log(name, name2, 1);
    return '1'
});
queue.tap('2', function (name) {
    console.log(name, 2);
});
queue.call('webpack'); // 发布的时候触发订阅的函数 同时传入参数

// 拼接给call方法调用的函数
    "use strict";
function(SyncHook_name) {
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由callTapsSeries方法拼接 -start-
    var _fn0 = _x[0];
    _fn0(SyncHook_name);
    var _fn1 = _x[1];
    _fn1(SyncHook_name);
    // content(主要) -end-
}
```

## SyncBailHook

如果有一个回调函数的返回值不为undefined，则返回当前返回值，剩余的回调函数将不会执行

> 例子↓

``` javascript
const queue = new SyncBailHook(['SyncBailHook_name']);

queue.tap('1', function (name) {
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
    return 'wrong'
});
queue.call('webpack'); // 发布的时候触发订阅的函数 同时传入参数

// 拼接给call方法调用的函数
function(SyncBailHook_name) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由callTapsSeries方法拼接 -start-
    var _fn0 = _x[0];
    var _result0 = _fn0(SyncBailHook_name);
    if (_result0 !== undefined) {
        return _result0;;
    } else {
        var _fn1 = _x[1];
        var _result1 = _fn1(SyncBailHook_name);
        if (_result1 !== undefined) {
            return _result1;;
        } else {}
    }
    // content(主要) -end-
}
```

## SyncWaterfallHook

如果有一个回调函数的返回值不为undefined，则当前返回值将作为下一个回调函数的第一个参数；如果为undefined，下一个回调函数的参数为调call方法的参数

> 例子↓

``` javascript
const queue = new SyncWaterfallHook(['SyncWaterfallHook_name']);

queue.tap('1', function (name) {
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
    return 'wrong'
});
queue.call('webpack'); // 发布的时候触发订阅的函数 同时传入参数

// 拼接给call方法调用的函数
function(SyncWaterfallHook_name) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由callTapsSeries方法拼接 -start-
    var _fn0 = _x[0];
    var _result0 = _fn0(SyncWaterfallHook_name);
    if (_result0 !== undefined) {
        SyncWaterfallHook_name = _result0;
    }
    var _fn1 = _x[1];
    var _result1 = _fn1(SyncWaterfallHook_name);
    if (_result1 !== undefined) {
        SyncWaterfallHook_name = _result1;
    }
    return SyncWaterfallHook_name;
    // content(主要) -end-
}

```

## SyncLoopHook

当监听函数被触发的时候，如果该监听函数返回true时则这个监听函数会反复执行，如果返回 undefined，则跳到下一个监听函数

> 例子↓

``` javascript
const queue = new SyncLoopHook(['SyncLoopHook_name', 'second']);

queue.tap('1', function (name, ...rest) {
    console.log(name, rest);
});
queue.tap('2', function (name, ...rest) {
    console.log(name, rest);
    return 'wrong'
});
queue.tap('3', function (name, ...rest) {
    console.log(name, rest);
});
queue.call('webpack', '234'); // 发布的时候触发订阅的函数 同时传入参数

// 拼接给call方法调用的函数
function(SyncLoopHook_name, second) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由callTapsLooping方法拼接 -start-
    var _loop;
    do {
        _loop = false;
        var _fn0 = _x[0];
        var _result0 = _fn0(SyncLoopHook_name, second);
        if (_result0 !== undefined) {
            _loop = true;
        } else {
            var _fn1 = _x[1];
            var _result1 = _fn1(SyncLoopHook_name, second);
            if (_result1 !== undefined) {
                _loop = true;
            } else {
                var _fn2 = _x[2];
                var _result2 = _fn2(SyncLoopHook_name, second);
                if (_result2 !== undefined) {
                    _loop = true;
                } else {
                    if (!_loop) {}
                }
            }
        }
    } while (_loop);
    // content(主要) -end-
}

```

## AsyncParallelHook

不关心监听函数的返回值。

call方法最后一个参数必须为函数(全部监听函数都调用过后，会调用此回调函数)

> 例子↓

``` javascript
const queue = new AsyncParallelHook(['name']);
console.time('cost');
queue.tap('1', async function (name) {
    await new Promise(resolve => setTimeout(resolve, 300));
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
});
queue.tap('3', function (name) {
    console.log(name, 3);
});
queue.callAsync('webpack', err => {
    console.timeEnd('cost');
});

// 拼接给call方法调用的函数
function(name, _callback) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由callTapsParallel方法拼接 -start-
    do {
        var _counter = 3;
        var _done = () => {
            _callback();
        };
        if (_counter <= 0) break;
        var _fn0 = _x[0];
        var _hasError0 = false;
        try {
            _fn0(name);
        } catch (_err) {
            _hasError0 = true;
            if (_counter > 0) {
                _callback(_err);
                _counter = 0;
            }
        }
        if (!_hasError0) {
            if (--_counter === 0) _done();
        }
        if (_counter <= 0) break;
        var _fn1 = _x[1];
        var _hasError1 = false;
        try {
            _fn1(name);
        } catch (_err) {
            _hasError1 = true;
            if (_counter > 0) {
                _callback(_err);
                _counter = 0;
            }
        }
        if (!_hasError1) {
            if (--_counter === 0) _done();
        }
        if (_counter <= 0) break;
        var _fn2 = _x[2];
        var _hasError2 = false;
        try {
            _fn2(name);
        } catch (_err) {
            _hasError2 = true;
            if (_counter > 0) {
                _callback(_err);
                _counter = 0;
            }
        }
        if (!_hasError2) {
            if (--_counter === 0) _done();
        }
    } while (false);
    // content(主要) -end-
}
```
