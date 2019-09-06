# 读Tapable模块源码总结

开放了以下API，我们一个个的分析

- SyncHook
- SyncBailHook
- SyncWaterfallHook
- SyncLoopHook
- AsyncParallelHook
- AsyncParallelBailHook
- AsyncSeriesHook
- AsyncSeriesBailHook
- AsyncSeriesWaterfallHook

以上的API都继承了`Hook类`(node_modules/tapable/lib/Hook.js)

new类时的数组的长度，决定了订阅函数和发布函数的参数个数(不含callback函数)

class名包含`Sync`的class: "发布函数"接收返回值的方式为`同步`;

class名包含`Async`的class: "发布函数"接收返回值的方式为`异步`;

class名包含`Series`的class: "订阅函数"调用方式为`串行`;

class名包含`Parallel`的class: "订阅函数"调用方式为`并行`;

class名包含`Waterfall`的class:  

- 如果"订阅函数"的返回值不等于undefined，则此返回值将作为下一个"订阅函数"的第一个参数；
- 如果等于undefined，下一个"订阅函数"的参数为调call方法的参数

class名包含`Bail`的class:  

- "发布函数"要有返回值
- 如果有一个"订阅函数"的返回值不为undefined，剩余的"订阅函数"将不会执行，"发布函数"会接受到当前返回值(同步或异步)

| 比较 | SyncBailHook | SyncWaterfallHook | SyncLoopHook |
| - | - | - | - | - |
| SyncHook | 关不关心订阅函数的返回值 | 订阅函数的返回值是否可以传给下一个订阅函数当参数 | 是否根据订阅函数的返回值重复执行当前订阅函数 |

| - | tap | tapAsync | tapPromise |
| - | - | - | - |
| 意义 | 无限制 | 订阅函数最后一个参数为函数 | 订阅函数的最后一个参数为函数，此函数的返回值必须是Promise实例 |

| - | call | callAsync | promise |
| - | - | - | - |
| 意义 | 无限制 | 发布函数最后一个参数为函数 | 发布函数的返回值是Promise实例 |

## Hook类

### tap 方法

往`Hook类`的taps属性push { fn: callback, name: tap的name, type: tap的类型 }

### call 方法（先进先出）

调用通过tap方法的添加的订阅函数

实际上调用的是`HookCodeFactory类`的`setup方法` `create方法`

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

调用订阅函数（先进先出）

> 例子↓

``` javascript
const queue = new SyncHook(['SyncHook_name']);
queue.tap('1', function (name) {
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
});
queue.tap('3', function (name) {
    console.log(name, 3);
});
queue.call('SyncHook_call');

// 此函数内容是拼接而来的，供发布函数调用
function(SyncHook_name) {
    "use strict";
    // header -start-
    var _context;
    var _x = this._x;
    // header -end-

    // content(主要)由`callTapsSeries`方法拼接 -start-
    var _fn0 = _x[0];
    _fn0(SyncHook_name);
    var _fn1 = _x[1];
    _fn1(SyncHook_name);
    var _fn2 = _x[2];
    _fn2(SyncHook_name);
    // content(主要) -end-
}
```

## SyncBailHook

如果有一个订阅函数的返回值不为undefined，则返回当前返回值，剩余的订阅函数将不会执行

发布函数有返回值

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
const queue = new SyncLoopHook(['SyncLoopHook_name']);

queue.tap('1', function (name) {
    console.log(name);
});
queue.tap('2', function (name) {
    let loop = 3;
    while (loop > 0) {
        console.log(name);
        --loop;
    }
    return loop > 0 ? 1 : undefined;
});
queue.tap('3', function (name) {
    console.log(name);
});
queue.call('SyncLoopHook_call');

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
        var _result0 = _fn0(SyncLoopHook_name);
        if (_result0 !== undefined) {
            _loop = true;
        } else {
            var _fn1 = _x[1];
            var _result1 = _fn1(SyncLoopHook_name);
            if (_result1 !== undefined) {
                _loop = true;
            } else {
                var _fn2 = _x[2];
                var _result2 = _fn2(SyncLoopHook_name);
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

有三种订阅/发布的模式，如下

| 订阅 | 发布 |
| - | - |
| tap | callAsync |
| tapAsync | callAsync |
| tapPromise | promise |

### tap,callAsync - AsyncParallelHook

全部订阅函数被调用后，会立即调用发布函数

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

### tapAsync,callAsync - AsyncParallelHook

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

### tapPromise,promise - AsyncParallelHook

每个订阅函数的最后一个参数为“订阅回调函数”，“订阅回调函数”的返回值必须是Promise实例。

如果每个“订阅回调函数”的状态都为“成功”，则会调用“订阅回调函数”的resolve方法。

如果有一个“订阅回调函数”的状态都为“失败”，则会调用“订阅回调函数”的reject方法，并传入报错信息。

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

## AsyncParallelBailHook

有三种订阅/发布的模式，如下

| 订阅 | 发布 |
| - | - |
| tap | callAsync |
| tapAsync | callAsync |
| tapPromise | promise |

### tap,callAsync - AsyncParallelBailHook

发布函数的最后一个参数为“发布回调函数”

如果其中一个订阅函数运行报错，不执行后面的订阅函数，调用“发布回调函数”并传入1个参数(错误信息)

如果有一个订阅函数的返回值不为undefined，剩余的订阅函数将不会执行，调用“发布回调函数”并传入2个参数(错误信息，返回值)

如果全部订阅函数的返回值都为undefined，调用“发布回调函数”不传入参数

> 例子↓

``` javascript
const queue = new AsyncParallelBailHook(['AsyncParallelBailHook_name']);

queue.tap('1', function (name) {
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
});
queue.tap('3', function (name) {
    console.log(name, 3);
});
queue.callAsync('AsyncParallelBailHook_call', (a, b) => {
    console.log(a);
    console.log(b);
});

// 此函数内容是拼接而来的，供发布函数调用
function(AsyncParallelBailHook_name, _callback) {
    var _context;
    var _x = this._x;

    var _results = new Array(3); // 订阅函数数量
    var _checkDone = () => {
        for (var i = 0; i < _results.length; i++) {
            var item = _results[i];
            if (item === undefined) return false;
            if (item.result !== undefined) {
                _callback(null, item.result);
                return true;
            }
            if (item.error) {
                _callback(item.error);
                return true;
            }
        }
        return false;
    }
    do {
        var _counter = 3; // 订阅函数数量
        var _done = () => {
            _callback();
        };
        if (_counter <= 0) break;
        var _fn0 = _x[0]; // 第一个订阅函数
        var _hasError0 = false;
        try {
            var _result0 = _fn0(AsyncParallelBailHook_name);
        } catch (_err) {
            _hasError0 = true;
            if (_counter > 0) {
                if (0 < _results.length && ((_results.length = 1), (_results[0] = {
                        error: _err
                    }), _checkDone())) {
                    _counter = 0;
                } else {
                    if (--_counter === 0) _done();
                }
            }
        }
        if (!_hasError0) {
            if (_counter > 0) {
                if (0 < _results.length && (_result0 !== undefined && (_results.length = 1), (_results[0] = {
                        result: _result0
                    }), _checkDone())) {
                    _counter = 0;
                } else {
                    if (--_counter === 0) _done();
                }
            }
        }
        if (_counter <= 0) break;
        if (1 >= _results.length) {
            if (--_counter === 0) _done();
        } else {
            var _fn1 = _x[1];
            var _hasError1 = false;
            try {
                var _result1 = _fn1(AsyncParallelBailHook_name);
            } catch (_err) {
                _hasError1 = true;
                if (_counter > 0) {
                    if (1 < _results.length && ((_results.length = 2), (_results[1] = {
                            error: _err
                        }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            }
            if (!_hasError1) {
                if (_counter > 0) {
                    if (1 < _results.length && (_result1 !== undefined && (_results.length = 2), (_results[1] = {
                            result: _result1
                        }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            }
        }
        if (_counter <= 0) break;
        if (2 >= _results.length) {
            if (--_counter === 0) _done();
        } else {
            var _fn2 = _x[2];
            var _hasError2 = false;
            try {
                var _result2 = _fn2(AsyncParallelBailHook_name);
            } catch (_err) {
                _hasError2 = true;
                if (_counter > 0) {
                    if (2 < _results.length && ((_results.length = 3), (_results[2] = {
                            error: _err
                        }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            }
            if (!_hasError2) {
                if (_counter > 0) {
                    if (2 < _results.length && (_result2 !== undefined && (_results.length = 3), (_results[2] = {
                            result: _result2
                        }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            }
        }
    } while (false);
}
```

### tapAsync,callAsync - AsyncParallelBailHook

每个订阅函数的最后一个参数为“订阅回调函数”

“订阅回调函数”接受2个参数(err, result)：

- 如果第一个参数为真值，则会直接调用“发布回调函数”，并把真值当做“发布回调函数”的参数，剩余的订阅函数将不会执行。

- 如果第一个参数为假值，第二个参数不为undefined，剩余的订阅函数将不会执行，调用“发布回调函数”并传入2个参数(null，第二个参数)

- 如果第一个参数为假值，第二个参数为undefined，执行下一个订阅函数。

如果全部“订阅回调函数”的参数不传，则不传参调用“发布回调函数”

> 例子↓

``` javascript
const queue = new AsyncParallelBailHook(['AsyncParallelBailHook_name']);

queue.tapAsync('1', function (name, cb) {
    console.log(name, 1);
    cb();
});
queue.tapAsync('2', function (name, cb) {
    console.log(name, 2);
    cb();
});
queue.tapAsync('3', function (name, cb) {
    console.log(name, 3);
    cb();
});
queue.callAsync('AsyncParallelBailHook_call', (a, b) => {
    console.log(a);
    console.log(b);
});

// 此函数内容是拼接而来的，供发布函数调用
function(AsyncParallelBailHook_name, _callback) {
    var _context;
    var _x = this._x;

    var _results = new Array(3);
    var _checkDone = () => {
        for (var i = 0; i < _results.length; i++) {
            var item = _results[i];
            if (item === undefined) return false;
            if (item.result !== undefined) {
                _callback(null, item.result);
                return true;
            }
            if (item.error) {
                _callback(item.error);
                return true;
            }
        }
        return false;
    }
    do {
        var _counter = 3;
        var _done = () => {
            _callback();
        };
        if (_counter <= 0) break;
        var _fn0 = _x[0];
        _fn0(AsyncParallelBailHook_name, (_err0, _result0) => {
            if (_err0) {
                if (_counter > 0) {
                    if (0 < _results.length && ((_results.length = 1), (_results[0] = {
                            error: _err0
                        }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            } else {
                if (_counter > 0) {
                    if (0 < _results.length && (_result0 !== undefined && (_results.length = 1), (_results[0] = {
                            result: _result0
                        }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            }
        });
        if (_counter <= 0) break;
        if (1 >= _results.length) {
            if (--_counter === 0) _done();
        } else {
            var _fn1 = _x[1];
            _fn1(AsyncParallelBailHook_name, (_err1, _result1) => {
                if (_err1) {
                    if (_counter > 0) {
                        if (1 < _results.length && ((_results.length = 2), (_results[1] = {
                                error: _err1
                            }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                } else {
                    if (_counter > 0) {
                        if (1 < _results.length && (_result1 !== undefined && (_results.length = 2), (_results[1] = {
                                result: _result1
                            }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                }
            });
        }
        if (_counter <= 0) break;
        if (2 >= _results.length) {
            if (--_counter === 0) _done();
        } else {
            var _fn2 = _x[2];
            _fn2(AsyncParallelBailHook_name, (_err2, _result2) => {
                if (_err2) {
                    if (_counter > 0) {
                        if (2 < _results.length && ((_results.length = 3), (_results[2] = {
                                error: _err2
                            }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                } else {
                    if (_counter > 0) {
                        if (2 < _results.length && (_result2 !== undefined && (_results.length = 3), (_results[2] = {
                                result: _result2
                            }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                }
            });
        }
    } while (false);
}
```

### tapPromise,promise - AsyncParallelBailHook

每个订阅函数的最后一个参数为“订阅回调函数”，“订阅回调函数”的返回值必须是Promise实例。

如果每个“订阅回调函数”的状态都为“成功”：

- 并且resolve方法的第一个参数不为undefined，剩余的订阅函数将不会执行，调用“发布回调函数”并传入1个参数(resolve方法的第一个参数)

- 并且resolve方法的第一个参数为undefined，执行下一个订阅函数

如果有一个“订阅回调函数”的状态为“失败”，reject方法的第一个参数将会为调用“发布回调函数”参数。

``` javascript
const queue = new AsyncParallelBailHook(['AsyncParallelBailHook_name']);
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
queue.promise('AsyncParallelBailHook_callAsync').then(
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
function(AsyncParallelBailHook_name) {
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
        var _results = new Array(3);
        var _checkDone = () => {
            for (var i = 0; i < _results.length; i++) {
                var item = _results[i];
                if (item === undefined) return false;
                if (item.result !== undefined) {
                    _resolve(item.result);
                    return true;
                }
                if (item.error) {
                    _error(item.error);
                    return true;
                }
            }
            return false;
        }
        do {
            var _counter = 3;
            var _done = () => {
                _resolve();
            };
            if (_counter <= 0) break;
            var _fn0 = _x[0];
            var _hasResult0 = false;
            var _promise0 = _fn0(AsyncParallelBailHook_name);
            if (!_promise0 || !_promise0.then)
                throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise0 + ')');
            _promise0.then(_result0 => {
                _hasResult0 = true;
                if (_counter > 0) {
                    if (0 < _results.length && (_result0 !== undefined && (_results.length = 1), (_results[0] = {
                            result: _result0
                        }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            }, _err0 => {
                if (_hasResult0) throw _err0;
                if (_counter > 0) {
                    if (0 < _results.length && ((_results.length = 1), (_results[0] = {
                            error: _err0
                        }), _checkDone())) {
                        _counter = 0;
                    } else {
                        if (--_counter === 0) _done();
                    }
                }
            });
            if (_counter <= 0) break;
            if (1 >= _results.length) {
                if (--_counter === 0) _done();
            } else {
                var _fn1 = _x[1];
                var _hasResult1 = false;
                var _promise1 = _fn1(AsyncParallelBailHook_name);
                if (!_promise1 || !_promise1.then)
                    throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise1 + ')');
                _promise1.then(_result1 => {
                    _hasResult1 = true;
                    if (_counter > 0) {
                        if (1 < _results.length && (_result1 !== undefined && (_results.length = 2), (_results[1] = {
                                result: _result1
                            }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                }, _err1 => {
                    if (_hasResult1) throw _err1;
                    if (_counter > 0) {
                        if (1 < _results.length && ((_results.length = 2), (_results[1] = {
                                error: _err1
                            }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                });
            }
            if (_counter <= 0) break;
            if (2 >= _results.length) {
                if (--_counter === 0) _done();
            } else {
                var _fn2 = _x[2];
                var _hasResult2 = false;
                var _promise2 = _fn2(AsyncParallelBailHook_name);
                if (!_promise2 || !_promise2.then)
                    throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise2 + ')');
                _promise2.then(_result2 => {
                    _hasResult2 = true;
                    if (_counter > 0) {
                        if (2 < _results.length && (_result2 !== undefined && (_results.length = 3), (_results[2] = {
                                result: _result2
                            }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                }, _err2 => {
                    if (_hasResult2) throw _err2;
                    if (_counter > 0) {
                        if (2 < _results.length && ((_results.length = 3), (_results[2] = {
                                error: _err2
                            }), _checkDone())) {
                            _counter = 0;
                        } else {
                            if (--_counter === 0) _done();
                        }
                    }
                });
            }
        } while (false);
        _sync = false;
    });
}
```

## AsyncSeriesHook

不关心订阅函数的返回值。

发布函数最后一个参数必须为函数(全部订阅函数都调用过后，会调用此订阅函数)

有三种订阅/发布的模式，如下

| 订阅 | 发布 |
| - | - |
| tap | callAsync |
| tapAsync | callAsync |
| tapPromise | promise |

### tap,callAsync - AsyncSeriesHook

如果订阅函数运行报错，调用“发布回调函数”并传入1个参数(错误信息)

订阅函数的返回值不会影响下一个订阅函数的调用和传参

> 例子↓

``` javascript
const queue = new AsyncSeriesHook(['AsyncSeriesHook_name']);

queue.tap('1', function (name) {
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
});
queue.tap('3', function (name) {
    console.log(name, 3);
});
queue.callAsync('AsyncSeriesHook_call', (a, b) => {
    console.log(a);
    console.log(b);
});

// 此函数内容是拼接而来的，供发布函数调用
function(AsyncSeriesHook_name, _callback) {
    var _context;
    var _x = this._x;

    var _fn0 = _x[0];
    var _hasError0 = false;
    try {
        _fn0(AsyncSeriesHook_name);
    } catch (_err) {
        _hasError0 = true;
        _callback(_err);
    }
    if (!_hasError0) {
        var _fn1 = _x[1];
        var _hasError1 = false;
        try {
            _fn1(AsyncSeriesHook_name);
        } catch (_err) {
            _hasError1 = true;
            _callback(_err);
        }
        if (!_hasError1) {
            var _fn2 = _x[2];
            var _hasError2 = false;
            try {
                _fn2(AsyncSeriesHook_name);
            } catch (_err) {
                _hasError2 = true;
                _callback(_err);
            }
            if (!_hasError2) {
                _callback();
            }
        }
    }
}
```

## AsyncSeriesBailHook

### tap,callAsync - AsyncSeriesBailHook

> 例子↓

``` javascript
const queue = new AsyncSeriesBailHook(['AsyncSeriesBailHook_name']);
queue.tap('1', async function (name) {
    console.log(name, 1);
});
queue.tap('2', function (name) {
    console.log(name, 2);
});
queue.tap('3', function (name) {
    console.log(name, 3);
});
queue.callAsync('AsyncSeriesBailHook_callAsync', err => {
    console.log(err);
});

// 此函数内容是拼接而来的，供发布函数调用
function(AsyncSeriesHook_name, _callback) {
    var _context;
    var _x = this._x;

    var _fn0 = _x[0];
    var _hasError0 = false;
    try {
        var _result0 = _fn0(AsyncSeriesBailHook_name);
    } catch (_err) {
        _hasError0 = true;
        _callback(_err);
    }
    if (!_hasError0) {
        if (_result0 !== undefined) {
            _callback(null, _result0);;
        } else {
            var _fn1 = _x[1];
            var _hasError1 = false;
            try {
                var _result1 = _fn1(AsyncSeriesBailHook_name);
            } catch (_err) {
                _hasError1 = true;
                _callback(_err);
            }
            if (!_hasError1) {
                if (_result1 !== undefined) {
                    _callback(null, _result1);;
                } else {
                    var _fn2 = _x[2];
                    var _hasError2 = false;
                    try {
                        var _result2 = _fn2(AsyncSeriesBailHook_name);
                    } catch (_err) {
                        _hasError2 = true;
                        _callback(_err);
                    }
                    if (!_hasError2) {
                        if (_result2 !== undefined) {
                            _callback(null, _result2);;
                        } else {
                            _callback();
                        }
                    }
                }
            }
        }
    }
}
```
