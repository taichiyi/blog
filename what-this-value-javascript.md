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
