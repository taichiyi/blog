<!-- markdownlint-disable MD033 -->
# typeScript-exercises

<details>
  <summary>为什么会产生TypeScript？</summary>
  <div>- 可读性</div>
  <div>- 可维护性</div>
  <div>- 面向对象编程</div>
</details>

<details>
  <summary>函数没有返回值，用什么类型？</summary>
  <div>void</div>
</details>

<details>
  <summary>typescript有哪些类型? </summary>
  <div>boolean</div>
  <div>number</div>
  <div>string</div>
  <div>void</div>
  <div>undefined</div>
  <div>null</div>
  <div>any</div>
  <div>联合类型 string | number</div>
  <div>interface</div>
  <div>number[]</div>
  <div>Array&lt;number&gt;</div>
</details>

<details>
  <summary>介绍一个面向对象语言中的“接口”概念</summary>
  <div>- 它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）。</div>
  <div>- TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。</div>
</details>

<details>
  <summary>如何设置“接口”的可选属性？</summary>
  <div>interface Person { age?: number }</div>
</details>

<details>
  <summary>如何设置“接口”的任意属性？</summary>
  <div>interface Person { [propName: string]: any }</div>
</details>

<details>
  <summary>如何设置“接口”的只读属性？</summary>
  <div>interface Person { readonly id: number }</div>
</details>

<details>
  <summary>介绍一下“声明文件”</summary>
  <div>当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。</div>
</details>

<details>
  <summary>介绍一下“泛型”（Generics）</summary>
  <div>泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。</div>
</details>

<details>
  <summary>实现（__）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 __ 关键字来实现。这个特性大大提高了面向对象的灵活性。</summary>
  <div>implements</div>
  <div>implements</div>
</details>
