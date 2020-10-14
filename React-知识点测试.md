<!-- markdownlint-disable MD026 MD033 MD001 -->
# React 知识点测试

###### kg8uppvc-Q

## React Context 是什么？什么场景下使用？有什么优缺点？

[查看回答](#kg8uppvc-A)

###### kg921vgx-Q

## Context 的 Provider 组件的作用是什么？

[查看回答](#kg921vgx-A)

###### kg92kcfi-Q

## 类组件如何获取 React Context 的值？React Context 的值是怎么赋值到实例的 context 属性的？

[查看回答](#kg92kcfi-A)

---

###### kg8uppvc-A

[查看问题](#kg8uppvc-Q)

是什么：
React Context 是一个对象，由工厂函数 createContext 创建。

场景：
多个不同层级的组件需要访问同一个数据。

通常不同组件的需要共享某个数据时，是通过逐层传递 Props 方式。但是中间的某个组件并不需要这个数据，这样违反了迪米特法则，增加了组件的耦合度。

使用 React 上下文后就不需要显式的通过组件树逐层传递了。

优点：

- 降低了组件的耦合度。

缺点：

- 过多的使用会产生大量的中介对象，增加系统的复杂性。

``` text
程度：中级
知识点：React、React Context
延伸知识点：设计模式、React 的上下文、控制反转
```

###### kg921vgx-A

[查看问题](#kg921vgx-Q)

Provider 接受可以 value 属性，value 会修改 Context 对象的值。

``` text
程度：中级
知识点：React、React Context
延伸知识点：React 的上下文
```

###### kg92kcfi-A

[查看问题](#kg92kcfi-Q)

如何获取：
当类组件存在静态属性 contextType 时，会从静态属性 contextType 中读取出 context 的值，并当做第二个参数，实例化类。

怎么赋值：
实例化时类组件的父类会把 content 和 props 参数赋值给实例的 content 和 props 属性。
