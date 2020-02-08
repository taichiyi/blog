# 箭头函数

箭头函数没有this、arguments、super

如果箭头函数内使用this，this将沿着作用域链往上找最近的可用作用域对象

主要作用：更简短的函数，不绑定this。

## 例子

``` javascript
function Person() {
  // Person() 构造函数定义 `this`作为它自己的实例.
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式, growUp()函数定义 `this`作为全局对象,
    // 与在 Person()构造函数中定义的 `this`并不相同.
    this.age++;
  }, 1000);
}
var p = new Person();
```

## new 操作符

箭头函数不能用作构造器，和 new一起用会抛出错误。

## prototype属性

箭头函数没有prototype属性。
