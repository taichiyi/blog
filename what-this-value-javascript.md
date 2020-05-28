<!-- markdownlint-disable MD033 -->
# JavaScript this 的值是什么

可以根据以下流程图判断↓

![what-this-value-javascript-flow](https://oss.taichiyi.com/markdown/what-this-value-javascript-flow.jpg)

流程图中有①-⑦种结果，下面一一举例。

第①种结果:

``` javascript
console.log(this); // this的值为全局对象
```

第②种结果:

``` javascript
const foo = {
  name: 'taichiyi',
  age: 3,
  getName: function () {
    (() => {
      console.log(this); // this的值为foo对象
    })();
  },
}
foo.getName();
```

第③种结果:

``` javascript
function Foo() {
  console.log(this); // this的值为空对象，对象的原型为Foo构造函数的原型
}
new Foo();
```

第④种结果:

``` javascript
const fooObj = {
  name: 'taichiyi',
  age: 3
};
function foo() {
  console.log(this); // this的值为fooObj
}
foo.call(fooObj);
foo.apply(fooObj);
```

第⑤种结果:

``` javascript
const foo = {
  name: 'taichiyi',
  age: 3,
  getName: function () {
    console.log(this); // this的值为foo对象
  },
}
foo.getName();
```

第⑥种结果:

``` javascript
function foo() {
  'use strict';
  console.log(this); // this的值为undefined
}
foo();
```

第⑦种结果:

``` javascript
function foo() {
  console.log(this); // this的值为全局对象
}
foo();
```

## 例题(chrome V81.0)

例1：

<details open>
  <summary>下面代码打印值依次为：</summary>
  <pre>
'use strict';
var age = 18;
const foo = {
  name: 'taichiyi',
  age: 3,
  getName: function () {
    setTimeout(() => {
      console.log(this.age); // [A]
    }, 100);
    setTimeout(function b() {
      console.log(this.age); // [B]
      new.target;
    }, 100);
  },
}
foo.getName();
  </pre>
  <details>
    <summary>点击查看答案：</summary>
    <div>3</div>
    <div>18</div>
    <pre>
解析：
- [A]
  - [A]处this的执行上下文显然是函数执行上下文。
  - [A]处为箭头函数。所以要看执行上下文栈。
  - [A]处的执行上下文栈的长度为3，伪代码['全局执行上下文','getName函数执行上下文','匿名箭头函数执行上下文']
  - 顺着执行上下文的外层，找到最近的this值。
  - '匿名箭头函数执行上下文'没有this，所以往外一层找，
  - 找到'getName函数执行上下文'，'getName函数执行上下文'有this。
  - 所以this的值为foo对象，所以this.age的值为3。
- [B]
  - [B]处this的执行上下文显然是函数执行上下文。
  - [B]处为非箭头函数。所以要看函数的调用方式。
  - 由于 setTimeout 是宿主对象的方法，不知道setTimeout方法的内部实现。
  - 运行后，this的值为全局对象。
  所以我采取排除法，来倒推使用了哪种方式来调用函数：
    - 如果是通过“new运算符”方式调用，b函数中的new.target值为应该为b函数，但实际为undefined，所以排除。
    - 如果是通过“其他”方式调用，严格模式下b函数中的this应该为undefined，但实际为全局对象，所以排除。
    - 如果是通过“作为对象方法”方式调用，则window.b应该为b函数，但实际为undefined，所以排除。
  - 所以函数的调用方式应该为“apply或call”。
  我给出 setTimeout 的假设代码：
  window.setTimeout = function(callback,time) {
    // 过了time时间后，运行下面的函数
    callback.call(this);
  };
    </pre>
  </details>
</details>

例2：

<details open>
  <summary>下面代码打印值依次为：</summary>
  <pre>
var age = 18;
const foo = {
  name: 'taichiyi',
  age: 3,
  getName: () => {
    setTimeout(() => {
      console.log(this.age); // [A]
    }, 100);
    setTimeout(function () {
      console.log(this.age);
    }, 100);
  },
}
foo.getName();
  </pre>
  <details>
    <summary>点击查看答案：</summary>
    <div>18</div>
    <div>18</div>
    <pre>
解析：
- [A]
  - [A]处this的执行上下文显然是函数执行上下文。
  - [A]处为箭头函数。所以要看执行上下文栈。
  - [A]处的执行上下文栈的长度为3，伪代码['全局执行上下文','getName箭头函数执行上下文','匿名箭头函数执行上下文']
  - 顺着执行上下文的外层，找到最近的this值。
  - '匿名箭头函数执行上下文'没有this，所以往外一层找，
  - 找到'getName箭头函数执行上下文'，'getName箭头函数执行上下文'没有this，所以往外一层找，
  - 找到'全局执行上下文'，'全局执行上下文'有this，
  - 所以this的值为全局对象，所以this.age的值为18。
    </pre>
  </details>
</details>

例3：

<details open>
  <summary>下面代码打印值依次为：</summary>
  <pre>
var age = 18;
const foo = {
  name: 'taichiyi',
  age: 3,
  getName: function() {
    console.log(this.age);
    return () => {
      console.log(this.age);
    }
  },
}
foo.getName()();
  </pre>
  <details>
    <summary>点击查看答案：</summary>
    <div>3</div>
    <div>3</div>
  </details>
</details>

例4：

<details open>
  <summary>下面代码打印值依次为：</summary>
  <pre>
'use strict';
var age = 18;
const foo = {
  name: 'taichiyi',
  age: 3,
  getName: function() {
    return function() {
      console.log(this);
    }
  },
}
foo.getName()();
  </pre>
  <details>
    <summary>点击查看答案：</summary>
    <div>undefined</div>
  </details>
</details>
