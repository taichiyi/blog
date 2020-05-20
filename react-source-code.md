# 读 react (16.12.0) 源码总结

## react.js

## react 和 react-dom

一般通过`React.createElement()`创建js元素对象，一个对象`{}`就是一个react的虚拟元素。可以通过在对象的`props`属性添加对象，来实现对象里添加子对象。

`react-dom`接收2个参数,第一个是`React.createElement()`函数返回的对象,第二个是目标元素。

## 疑问

- react的生命周期是怎么回事？

- PureComponent和Component区别?
