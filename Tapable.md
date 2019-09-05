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

new类时的数组的长度，决定了订阅函数和发布函数的参数个数(不含callback函数)

## Hook类

### tap 方法

往`Hook类`的taps属性push { fn: callback, name: tap的name, type: tap的类型 }

### call 方法（先进先出）

调用通过tap方法的添加的订阅函数

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

把实例的订阅函数抽出来，存到实例属性`_x`里

### create 方法 (重点)

Q: 为什么不用`eval()`而用`new Function()`?
A: 如果只考虑动态生成执行代码的话，二者都可以；但是这里还要考虑传参，所以用了`new Function()`

此函数内容是拼接而来的，供发布函数调用

### content 方法

一般会被父类的conntent方法覆盖

## SyncHookCodeFactory类

这个类继承了`HookCodeFactory类`

`SyncHook类`和`SyncBailHook类`的主要区别在各自的`compile方法`，而`compile方法`的区别在于`factory函数`，因为它决定了发布函数的内容

## SyncHook类

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

// 此函数内容是拼接而来的，供发布函数调用
    "use strict";
function(SyncHook_name) {
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由`callTapsSeries`方法拼接 -start-
    var _fn0 = _x[0];
    _fn0(SyncHook_name);
    var _fn1 = _x[1];
    _fn1(SyncHook_name);
    // content(主要) -end-
}
```

## SyncBailHook

如果有一个订阅函数的返回值不为undefined，则返回当前返回值，剩余的订阅函数将不会执行

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

// 此函数内容是拼接而来的，供发布函数调用
function(SyncBailHook_name) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由`callTapsSeries`方法拼接 -start-
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

如果有一个订阅函数的返回值不为undefined，则当前返回值将作为下一个订阅函数的第一个参数；如果为undefined，下一个订阅函数的参数为调call方法的参数

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

// 此函数内容是拼接而来的，供发布函数调用
function(SyncWaterfallHook_name) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由`callTapsSeries`方法拼接 -start-
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

当订阅函数被触发的时候，如果该订阅函数返回true时则这个订阅函数会反复执行，如果返回 undefined，则跳到下一个订阅函数

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

// 此函数内容是拼接而来的，供发布函数调用
function(SyncLoopHook_name, second) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由`callTapsLooping`方法拼接 -start-
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

不关心订阅函数的返回值。

发布函数最后一个参数必须为函数(全部订阅函数都调用过后，会调用此订阅函数)

有三种订阅/发布的模式，如下

| 订阅 | 发布 |
| - | - |
| tap | callAsync |
| tapAsync | callAsync |
| tapPromise | promise |

### tap,callAsync

全部订阅函数被调用后，会立即调用发布函数

> 例子↓

``` javascript
const queue = new AsyncParallelHook(['AsyncParallelHook_name']);
console.time('cost');
queue.tap('1', async function (name) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
});
queue.tap('3', function (name) {
    console.log(name, 3);
});
queue.callAsync('AsyncParallelHook_callAsync', err => {
    console.log(err);
    console.log('=end=');
    console.timeEnd('cost');
});

// 此函数内容是拼接而来的，供发布函数调用
function(AsyncParallelHook_name, _callback) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由`callTapsParallel`方法拼接 -start-
    do {
        var _counter = 3;
        var _done = () => {
            _callback();
        };
        if (_counter <= 0) break;
        var _fn0 = _x[0];
        var _hasError0 = false;
        try {
            _fn0(AsyncParallelHook_name);
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
            _fn1(AsyncParallelHook_name);
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
            _fn2(AsyncParallelHook_name);
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

### tapAsync,callAsync

每个订阅函数的最后一个参数为“订阅回调函数”

发布函数的最后一个参数为“发布回调函数”，“发布回调函数”的调用条件与传入的参数：

- 如果有一个“订阅回调函数”的参数为真值，则会直接调用“发布回调函数”，并把真值传入“发布回调函数”;

- 如果每个“订阅回调函数”都被调用并且传入的第一个参数为假值（默认为假值undefined），则会调用“发布回调函数”，传入值为undefined。

> 例子↓

``` javascript
const queue = new AsyncParallelHook(['AsyncParallelHook_name']);
console.time('cost');
queue.tapAsync('1', async function (name, callback) {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(name, 1);
    callback();
});
queue.tapAsync('2', function (name, callback) {
    console.log(name, 2);
    callback();
});
queue.tapAsync('3', function (name, callback) {
    console.log(name, 3);
    callback();
});
queue.callAsync('AsyncParallelHook_callAsync', err => {
    console.log(err);
    console.log('=end=');
    console.timeEnd('cost');
});

// 此函数内容是拼接而来的，供发布函数调用
function(AsyncParallelHook_name, _callback) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由`callTapsParallel`方法拼接 -start-
    do {
        var _counter = 3;
        var _done = () => {
            _callback();
        };
        if (_counter <= 0) break;
        var _fn0 = _x[0];
        _fn0(AsyncParallelHook_name, _err0 => {
            if (_err0) {
                if (_counter > 0) {
                    _callback(_err0);
                    _counter = 0;
                }
            } else {
                if (--_counter === 0) _done();
            }
        });
        if (_counter <= 0) break;
        var _fn1 = _x[1];
        _fn1(AsyncParallelHook_name, _err1 => {
            if (_err1) {
                if (_counter > 0) {
                    _callback(_err1);
                    _counter = 0;
                }
            } else {
                if (--_counter === 0) _done();
            }
        });
        if (_counter <= 0) break;
        var _fn2 = _x[2];
        _fn2(AsyncParallelHook_name, _err2 => {
            if (_err2) {
                if (_counter > 0) {
                    _callback(_err2);
                    _counter = 0;
                }
            } else {
                if (--_counter === 0) _done();
            }
        });
    } while (false);
    // content(主要) -end-
}
```

### tapPromise,promise

每个订阅函数的最后一个参数为“订阅回调函数”，“订阅回调函数”的返回值必须是Promise实例。

``` javascript
const queue = new AsyncParallelHook(['AsyncParallelHook_name']);
queue.tapPromise('1', async function (name) {
    await new Promise(resolve => setTimeout(() => {
        console.log(name, 1.1);
        resolve();
    }, 3000));
    console.log(name, 1.2);
});
queue.tapPromise('2', function (name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name, 2);
            resolve();
        }, 1400);
    });
});
queue.tapPromise('3', function (name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name, 3);
            resolve();
        }, 700);
    });
});
queue.promise('AsyncParallelHook_callAsync').then(
    () => {
        // 没有参数传入
        console.log('success');
    },
    (err) => {
        console.log(err);
        console.log('error');
    },
);

// 此函数内容是拼接而来的，供发布函数调用
function(AsyncParallelHook_name) {
    "use strict";
    return new Promise((_resolve, _reject) => {
        var _sync = true;

        function _error(_err) {
            if (_sync)
                _resolve(Promise.resolve().then(() => {
                    throw _err;
                }));
            else
                _reject(_err);
        };
        var _context;
        var _x = this._x;
        do {
            var _counter = 3;
            var _done = () => {
                _resolve();
            };
            if (_counter <= 0) break;
            var _fn0 = _x[0];
            var _hasResult0 = false;
            var _promise0 = _fn0(AsyncParallelHook_name);
            if (!_promise0 || !_promise0.then)
                throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
            _promise0.then(_result0 => {
                _hasResult0 = true;
                if (--_counter === 0) _done();
            }, _err0 => {
                if (_hasResult0) throw _err0;
                if (_counter > 0) {
                    _error(_err0);
                    _counter = 0;
                }
            });
            if (_counter <= 0) break;
            var _fn1 = _x[1];
            var _hasResult1 = false;
            var _promise1 = _fn1(AsyncParallelHook_name);
            if (!_promise1 || !_promise1.then)
                throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
            _promise1.then(_result1 => {
                _hasResult1 = true;
                if (--_counter === 0) _done();
            }, _err1 => {
                if (_hasResult1) throw _err1;
                if (_counter > 0) {
                    _error(_err1);
                    _counter = 0;
                }
            });
            if (_counter <= 0) break;
            var _fn2 = _x[2];
            var _hasResult2 = false;
            var _promise2 = _fn2(AsyncParallelHook_name);
            if (!_promise2 || !_promise2.then)
                throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise2 + ')');
            _promise2.then(_result2 => {
                _hasResult2 = true;
                if (--_counter === 0) _done();
            }, _err2 => {
                if (_hasResult2) throw _err2;
                if (_counter > 0) {
                    _error(_err2);
                    _counter = 0;
                }
            });
        } while (false);
        _sync = false;
    });
}
```
