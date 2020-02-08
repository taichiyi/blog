# TypeScript

TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发。

## 为什么要用TypeScript

- 类型系统实际上是最好的文档，大部分的函数看看类型的定义就知道如何使用了。
- 可以在编译阶段发现大部分错误，早发现早治疗。
- 增强编辑器功能，包括代码补全、接口提示、跳转到定义。

## 缺点

- 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
- 短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本
- 集成到构建流程需要一些工作量
- 可能和一些库结合的不是很完美

## 类型别名

先看例子🌰↓

``` typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

上例中，我们使用 type 创建类型别名。

类型别名常用于联合类型。
