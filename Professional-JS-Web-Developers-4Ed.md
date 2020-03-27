<!-- markdownlint-disable MD033 MD026 -->
# Professional JavaScript For Web Developers 4Ed 填空

## 目录

第1章 WHAT IS JAVASCRIPT?

- 1.1 A Short History
- 1.2 JavaScript Implementations
  - 1.2.1 ECMAScript
    - 1.2.1.1 ECMAScript Editions
    - 1.2.1.2 What Does ECMAScript Conformance Mean?
    - 1.2.1.3 ECMAScript Support in Web Browsers
  - 1.2.2 The Document Object Model
    - 1.2.2.1 Why the DOM Is Necessary
    - 1.2.2.2 DOM Levels
    - 1.2.2.3 Other DOMs
    - 1.2.2.4 DOM Support in Web Browsers
  - 1.2.3 The Browser Object Model
- 1.3 JavaScript Versions
- 1.4 Summary

第2章 JAVASCRIPT IN HTML

- 2.1 The &lt;script> Element
  - 2.1.1 Tag Placement
  - 2.1.2 Deferred Scripts
  - 2.1.3 Asynchronous Scripts
  - 2.1.4 Dynamic Script Loading
  - 2.1.5 Changes in XHTML
  - 2.1.6 Deprecated Syntax
- 2.2 Inline Code versus External Files
- 2.3 Document Modes
- 2.4 The &lt;noscript> Element
- 2.5 Summary

第3章 LANGUAGE BASICS

- 3.1 Syntax
  - 3.1.1 Case-Sensitivity
  - 3.1.2 Identifiers
  - 3.1.3 Comments
  - 3.1.4 Strict Mode
  - 3.1.5 Statements
- 3.2 Keywords and Reserved Words
- 3.3 Variables
  - 3.3.1 The ’var’ Keyword
    - 3.3.1.1 var Declaration Scope
    - 3.3.1.2 var Declaration Hoisting
  - 3.3.2 ’let’ Declarations
    - 3.3.2.1 Temporal Dead Zone
    - 3.3.2.2 Global Declarations
    - 3.3.2.3 Conditional Declaration
    - 3.3.2.4 let Declaration in for Loops
  - 3.3.3 ’const’ Declarations
  - 3.3.4 Declaration Styles and Best Practices
    - 3.3.4.1 Don’t Use var
    - 3.3.4.2 Prefer const Over let
- 3.4 Data Types
  - 3.4.1 Data Types
  - 3.4.2 The Undefined Type
  - 3.4.3 The Null Type
  - 3.4.4 The Boolean Type
  - 3.4.5 The Number Type
    - 3.4.5.1 Floating-Point Values
    - 3.4.5.2 Range of Values
    - 3.4.5.3 NaN
    - 3.4.5.4 Number Conversions
  - 3.4.6 The String Type
    - 3.4.6.1 Character Literals
    - 3.4.6.2 The Nature of Strings
    - 3.4.6.3 Converting to a String
    - 3.4.6.4 Template Literals
    - 3.4.6.5 Interpolation
    - 3.4.6.6 Template Literal Tag Functions
    - 3.4.6.7 Raw Strings
  - 3.4.7 The Symbol Type
    - 3.4.7.1 Basic Symbol Use
    - 3.4.7.2 Using the Global Symbol Registry
    - 3.4.7.3 Using Symbols as Properties
    - 3.4.7.4 Well-Known Symbols
  - 3.4.8 The Object Type
- 3.5 Operators
  - 3.5.1 Unary Operators
    - 3.5.1.1 Increment/Decrement
    - 3.5.1.2 Unary Plus and Minus
  - 3.5.2 Bitwise Operators
    - 3.5.2.1 Bitwise NOT
    - 3.5.2.2 Bitwise AND
    - 3.5.2.3 Bitwise OR
    - 3.5.2.4 Bitwise XOR
    - 3.5.2.5 Left Shift
    - 3.5.2.6 Signed Right Shift
    - 3.5.2.7 Unsigned Right Shift
  - 3.5.3 Boolean Operators
    - 3.5.3.1 Logical NOT
    - 3.5.3.2 Logical AND
    - 3.5.3.3 Logical OR
  - 3.5.4 Multiplicative Operators
    - 3.5.4.1 Multiply
    - 3.5.4.2 Divide
    - 3.5.4.3 Modulus
  - 3.5.5 Exponentiation Operator
  - 3.5.6 Additive Operators
    - 3.5.6.1 Add
    - 3.5.6.2 Subtract
  - 3.5.7 Relational Operators
  - 3.5.8 Equality Operators
    - 3.5.8.1 Equal and Not Equal
    - 3.5.8.2 Identically Equal and Not Identically Equal
  - 3.5.9 Conditional Operator
  - 3.5.10 Assignment Operators
  - 3.5.11 Comma Operator
- 3.6 Statements
  - 3.6.1 The if Statement
  - 3.6.2 The do-while Statement
  - 3.6.3 The while Statement
  - 3.6.4 The for Statement
  - 3.6.5 The for-in Statement
  - 3.6.6 The for-of Statement
  - 3.6.7 Labeled Statements
  - 3.6.8 The break and continue Statements
  - 3.6.9 The with Statement
  - 3.6.10 The switch Statement
- 3.7 Functions
- 3.8 Summary

第4章 VARIABLES, SCOPE, AND MEMORY

- 4.1 Primitive and Reference Values
  - 4.1.1 Dynamic Properties
  - 4.1.2 Copying Values
  - 4.1.3 Argument Passing
  - 4.1.4 Determining Type
- 4.2 Execution Context and Scope
  - 4.2.1 Scope Chain Augmentation
  - 4.2.2 Variable Declaration
    - 4.2.2.1 Function Scope Declaration Using var
    - 4.2.2.2 Block Scope Declaration Using let
    - 4.2.2.3 Constant Declaration Using const
    - 4.2.2.4 Identifier Lookup
- 4.3 Garbage Collection
  - 4.3.1 Mark-and-Sweep
  - 4.3.2 Reference Counting
  - 4.3.3 Performance
  - 4.3.4 Managing Memory
    - 4.3.4.1 Performance Boosts with const and let Declarations
    - 4.3.4.2 Hidden Classes and the delete Operation
    - 4.3.4.3 Memory Leaks
    - 4.3.4.4 Static Allocation and Object Pools
- 4.4 Summary

第5章 BASIC REFERENCE TYPES

- 5.1 The Date Type
  - 5.1.1 Inherited Methods
  - 5.1.2 Date-Formatting Methods
  - 5.1.3 Date/Time Component Methods
- 5.2 The RegExp Type
  - 5.2.1 RegExp Instance Properties
  - 5.2.2 RegExp Instance Methods
  - 5.2.3 RegExp Constructor Properties
  - 5.2.4 Pattern Limitations
- 5.3 Primitive Wrapper Types
  - 5.3.1 The Boolean Type
  - 5.3.2 The Number Type
  - 5.3.3 The isInteger() Method and Safe Integers
- 5.4 The String Type
  - 5.4.1 The JavaScript Character
  - 5.4.2 The normalize() Method
  - 5.4.3 String-Manipulation Methods
  - 5.4.4 String Location Methods
  - 5.4.5 String Inclusion Methods
  - 5.4.6 The trim() Method
  - 5.4.7 The repeat() Method
  - 5.4.8 The padStart() and padEnd() Methods
  - 5.4.9 String Iterators and Destructuring
  - 5.4.10 String Case Methods
  - 5.4.11 String Pattern-Matching Methods
  - 5.4.12 The localeCompare() Method
  - 5.4.13 HTML Methods
- 5.5 Singleton Built-in Objects
  - 5.5.1 The Global Object
    - 5.5.1.1 URI-Encoding Methods
    - 5.5.1.2 The eval() Method
    - 5.5.1.3 Global Object Properties
    - 5.5.1.4 The Window Object
  - 5.5.2 The Math Object
    - 5.5.2.1 Math Object Properties
    - 5.5.2.2 The min() and max() Methods
    - 5.5.2.3 Rounding Methods
    - 5.5.2.4 The random() Method
    - 5.5.2.5 Other Methods
- 5.6 Summary

第6章 COLLECTION REFERENCE TYPES

- 6.1 The Object Type
- 6.2 The Array Type
  - 6.2.1 Creating Arrays
  - 6.2.2 Array Holes
  - 6.2.3 Indexing into Arrays
  - 6.2.4 Detecting Arrays
  - 6.2.5 Iterator Methods
  - 6.2.6 Copy and Fill Methods
  - 6.2.7 Conversion Methods
  - 6.2.8 Stack Methods
  - 6.2.9 Queue Methods
  - 6.2.10 Reordering Methods
  - 6.2.11 Manipulation Methods
  - 6.2.12 Search and Location Methods
    - 6.2.12.1 Strict Equivalence
    - 6.2.12.2 Predicate Search
  - 6.2.13 Iterative Methods
  - 6.2.14 Reduction Methods
- 6.3 Typed Arrays
  - 6.3.1 History
    - 6.3.1.1 WebGL
    - 6.3.1.2 Emergence of Typed Arrays
  - 6.3.2 Using ArrayBuffers
  - 6.3.3 DataViews
    - 6.3.3.1 ElementType
    - 6.3.3.2 Big-Endian and Little-Endian
    - 6.3.3.3 Corner Cases
  - 6.3.4 Typed Arrays
    - 6.3.4.1 Typed Array Behavior
    - 6.3.4.2 Merging, Copying, and Changing Typed Arrays
    - 6.3.4.3 Underflow and Overflow
- 6.4 The Map Type
  - 6.4.1 Basic API
  - 6.4.2 Order and Iteration
  - 6.4.3 Choosing Between Objects and Maps
    - 6.4.3.1 Memory Profile
    - 6.4.3.2 Insertion Performance
    - 6.4.3.3 Lookup Performance
    - 6.4.3.4 Delete Performance
- 6.5 The WeakMap Type
  - 6.5.1 Basic API
  - 6.5.2 Weak Keys
  - 6.5.3 Non-Iterable Keys
  - 6.5.4 Utility
    - 6.5.4.1 Private Variables
    - 6.5.4.2 DOM Node Metadata
- 6.6 The Set Type
  - 6.6.1 Basic API
  - 6.6.2 Order and Iteration
  - 6.6.3 Defining Formal Set Operations
- 6.7 The WeakSet Type
  - 6.7.1 Basic API
  - 6.7.2 Weak Keys
  - 6.7.3 Non-Iterable Values
  - 6.7.4 Utility
- 6.8 Iteration and Spread Operators
- 6.9 Summary

第7章 ITERATORS AND GENERATORS

- 7.1 Introduction to Iteration
- 7.2 The Iterator Pattern
  - 7.2.1 The Iterable Protocol
  - 7.2.2 The Iterator Protocol
  - 7.2.3 Custom Iterator Definition
  - 7.2.4 Early Termination of Iterators
- 7.3 Generators
  - 7.3.1 Generator Basics
  - 7.3.2 Interrupting Execution with “yield”
    - 7.3.2.1 Using a Generator Object as an Iterable
    - 7.3.2.2 Using “yield” for Input and Output
    - 7.3.2.3 Yielding an Iterable
    - 7.3.2.4 Recursive Algorithms Using yield*
  - 7.3.3 Using a Generator as the Default Iterator
  - 7.3.4 Early Termination of Generators
    - 7.3.4.1 The return() Method
    - 7.3.4.2 The throw() Method
- 7.4 Summary

第8章 OBJECTS, CLASSES, AND OBJECT-ORIENTED PROGRAMMING

- 8.1 Understanding Objects
  - 8.1.1 Types of Properties
    - 8.1.1.1 Data Properties
    - 8.1.1.2 Accessor Properties
  - 8.1.2 Defining Multiple Properties
  - 8.1.3 Reading Property Attributes
  - 8.1.4 Merging Objects
  - 8.1.5 Object Identity and Equality
  - 8.1.6 Enhanced Object Syntax
    - 8.1.6.1 Property Value Shorthand
    - 8.1.6.2 Computed Property Keys
    - 8.1.6.3 Concise Method Syntax
  - 8.1.7 Object Destructuring
    - 8.1.7.1 Nested Destructuring
    - 8.1.7.2 Partial Destructuring Completion
    - 8.1.7.3 Parameter Context Matching
- 8.2 Object Creation
  - 8.2.1 Overview
  - 8.2.2 The Factory Pattern
  - 8.2.3 The Function Constructor Pattern
    - 8.2.3.1 Constructors as Functions
    - 8.2.3.2 Problems with Constructors
  - 8.2.4 The Prototype Pattern
    - 8.2.4.1 How Prototypes Work
    - 8.2.4.2 Understanding the Prototype Hierarchy
    - 8.2.4.3 Prototypes and the “in” Operator
    - 8.2.4.4 Property Enumeration Order
  - 8.2.5 Object Iteration
    - 8.2.5.1 Alternate Prototype Syntax
    - 8.2.5.2 Dynamic Nature of Prototypes
    - 8.2.5.3 Native Object Prototypes
    - 8.2.5.4 Problems with Prototypes
- 8.3 Inheritance
  - 8.3.1 Prototype Chaining
    - 8.3.1.1 Default Prototypes
    - 8.3.1.2 Prototype and Instance Relationships
    - 8.3.1.3 Working with Methods
    - 8.3.1.4 Problems with Prototype Chaining
  - 8.3.2 Constructor Stealing
    - 8.3.2.1 Passing Arguments
    - 8.3.2.2 Problems with Constructor Stealing
  - 8.3.3 Combination Inheritance
  - 8.3.4 Prototypal Inheritance
  - 8.3.5 Parasitic Inheritance
  - 8.3.6 Parasitic Combination Inheritance
- 8.4 Classes
  - 8.4.1 Class Definition Basics
    - 8.4.1.1 Class Composition
  - 8.4.2 The Class Constructor
    - 8.4.2.1 Instantiation
    - 8.4.2.2 Understanding Classes as Special Functions
  - 8.4.3 Instance, Prototype, and Class Members
    - 8.4.3.1 Instance Members
    - 8.4.3.2 Prototype Methods and Accessors
    - 8.4.3.3 Static Class Methods and Accessors
    - 8.4.3.4 Non-Function Prototype and Class Members
    - 8.4.3.5 Iterator and Generator Methods
  - 8.4.4 Inheritance
    - 8.4.4.1 Inheritance Basics
    - 8.4.4.2 Constructors, HomeObjects, and super()
    - 8.4.4.3 Abstract Base Classes
    - 8.4.4.4 Inheriting from Built-in Types
    - 8.4.4.5 Class Mixins
- 8.5 Summary

第9章  PROXIES AND REFLECT

- 9.1 Proxy Fundamentals
  - 9.1.1 Creating a Passthrough Proxy
  - 9.1.2 Defining Traps
  - 9.1.3 Trap Parameters and the Reflect API
  - 9.1.4 Trap Invariants
  - 9.1.5 Revocable Proxies
  - 9.1.6 Utility of the Reflect API
    - 9.1.6.1 Reflect API vs. Object API
    - 9.1.6.2 Status Flags
    - 9.1.6.3 Supplanting Operators with First-Class Functions
    - 9.1.6.4 Safe Function Application
  - 9.1.7 Proxying a Proxy
  - 9.1.8 Proxy Considerations and Shortcomings
    - 9.1.8.1 ’this’ Inside a Proxy
    - 9.1.8.2 Proxies and Internal Slots
- 9.2 Proxy Traps and Reflect Methods
  - 9.2.1 get()
  - 9.2.2 set()
  - 9.2.3 has()
  - 9.2.4 defineProperty()
  - 9.2.5 getOwnPropertyDescriptor()
  - 9.2.6 deleteProperty()
  - 9.2.7 ownKeys()
  - 9.2.8 getPrototypeOf()
  - 9.2.9 setPrototypeOf()
  - 9.2.10 isExtensible()
  - 9.2.11 preventExtensions()
  - 9.2.12 apply()
  - 9.2.13 construct()
- 9.3 Proxy Patterns
  - 9.3.1 Tracking Property Access
  - 9.3.2 Hidden Properties
  - 9.3.3 Property Validation
  - 9.3.4 Function and Constructor Parameter Validation
  - 9.3.5 Data Binding and Observables
- 9.4 Summary

第10章 FUNCTIONS

- 10.1 Arrow Functions
- 10.2 Function Names
- 10.3 Understanding Arguments
  - 10.3.1 Arguments in Arrow Functions
- 10.4 No Overloading
- 10.5 Default Parameter Values
  - 10.5.1 Default Parameter Scope and Temporal Dead Zone
- 10.6 Spread Arguments and Rest Parameters
  - 10.6.1 Spread Arguments
  - 10.6.2 Rest Parameter
- 10.7 Function Declarations versus Function Expressions
- 10.8 Functions as Values
- 10.9 Function Internals
  - 10.9.1 arguments
  - 10.9.2 this
  - 10.9.3 caller
  - 10.9.4 new.target
- 10.10 Function Properties and Methods
- 10.11 Function Expressions
- 10.12 Recursion
- 10.13 Tail Call Optimization
  - 10.13.1 Tail Call Optimization Requirements
  - 10.13.2 Coding for Tail Call Optimization
- 10.14 Closures
  - 10.14.1 The this Object
  - 10.14.2 Memory Leaks
- 10.15 Immediately Invoked Function Expressions
- 10.16 Private Variables
  - 10.16.1 Static Private Variables
  - 10.16.2 The Module Pattern
  - 10.16.3 The Module-Augmentation Pattern
- 10.17 Summary

第11章 PROMISES AND ASYNC FUNCTIONS

- 11.1 Introduction to Asynchronous Programming
  - 11.1.1 Synchronous vs. Asynchronous JavaScript
  - 11.1.2 Legacy Asynchronous Programming Patterns
    - 11.1.2.1 Returning Asynchronous Values
    - 11.1.2.2 Handling Failure
    - 11.1.2.3 Nesting Asynchronous Callbacks
- 11.2 Promises
- 11.2.1 The Promises/A+ Specification
- 11.2.2 Promise Basics
  - 11.2.2.1 The Promise State Machine
  - 11.2.2.2 Resolved Values, Rejection Reasons, and Utility of Promises
  - 11.2.2.3 Controlling Promise State with the Executor
  - 11.2.2.4 Promise Casting with Promise.resolve()
  - 11.2.2.5 Promise Rejection with Promise.reject()
  - 11.2.2.6 Synchronous/Asynchronous Execution Duality
- 11.2.3 Promise Instance Methods
  - 11.2.3.1 Implementing the Thenable Interface
  - 11.2.3.2 Promise.prototype.then()
  - 11.2.3.3 Promise.prototype.catch()
  - 11.2.3.4 Promise.prototype.finally()
  - 11.2.3.5 Non-Reentrant Promise Methods
  - 11.2.3.6 Sibling Handler Order of Execution
  - 11.2.3.7 Resolved Value and Rejected Reason Passing
  - 11.2.3.8 Rejecting Promises and Rejection Error Handling
- 11.2.4 Promise Chaining and Composition
  - 11.2.4.1 Promise Chaining
  - 11.2.4.2 Promise Graphs
  - 11.2.4.3 Parallel Promise Composition with Promise.all() and Promise.race()
  - 11.2.4.4 Serial Promise Composition
- 11.2.5 Promise Extensions
  - 11.2.5.1 Promise Canceling
  - 11.2.5.2 Promise Progress Notifications
- 11.3 Async Functions
  - 11.3.1 Async Function Basics
    - 11.3.1.1 The async keyword
    - 11.3.1.2 The await keyword
    - 11.3.1.3 Restrictions on await
  - 11.3.2 Halting and Resuming Execution
  - 11.3.3 Strategies for Async Functions
    - 11.3.3.1 Implementing Sleep()
    - 11.3.3.2 Maximizing Parallelization
    - 11.3.3.3 Serial Promise Execution
    - 11.3.3.4 Stack Traces and Memory Management
- 11.4 Summary

第12章 THE BROWSER OBJECT MODEL

- 12.1 The window Object
  - 12.1.1 The Global Scope
  - 12.1.2 Window Relationships
  - 12.1.3 Window Position and Pixel Ratio
    - 12.1.3.1 Pixel Ratios
  - 12.1.4 Window Size
  - 12.1.5 Window Viewport Position
  - 12.1.6 Navigating and Opening Windows

## 介绍

<details>
  <summary>DOM 中英文全称</summary>
  <div>Document Object Model</div>
  <div>文档对象模型</div>
</details>

<details>
  <summary>BOM 中英文全称</summary>
  <div>Browser Object Model</div>
  <div>浏览器对象模型</div>
</details>

<details>
  <summary>ECMA 中英文全称</summary>
  <div>European Computer Manufacturer’s Association</div>
  <div>欧洲计算机制造商协会</div>
</details>

<details>
  <summary>W3C 中英文全称</summary>
  <div>World Wide Web Consortium</div>
  <div>万维网联盟</div>
</details>

## CHAPTER 1 什么是JavaScript?

<details>
  <summary>JavaScript在199__年首次出现，主要目的是处理__。</summary>
  <div>5</div>
  <div>输入验证</div>
</details>

<details>
  <summary>199__年，ECMA的第__技术委员会(TC39)，开会敲定了ECMA-__标准，该标准定义了一种名为ECMA__的新脚本语言。</summary>
  <div>7</div>
  <div>39</div>
  <div>262</div>
  <div>Script</div>
</details>

<details>
  <summary>第一版 ECMA-262: 做了平台无关处理；支持__标准</summary>
  <div>Unicode</div>
</details>

<details>
  <summary>第二版 ECMA-262: 与ISO/IEC-16262达成严格协议；没有做其他语言层面的修改</summary>
</details>

<details>
  <summary>第三版 ECMA-262: 新增__式；新增__处理；标志着ECMAScript成为__。</summary>
  <div>正则表达</div>
  <div>异常</div>
  <div>一门真正的编程语言</div>
</details>

<details>
  <summary>第四版 ECMA-262: 没有发布，因为改动太大</summary>
</details>

<details>
  <summary>第五版 ECMA-262: 200912发布；新增JSON对象；新增严格模式；Object对象新增了很多方法；</summary>
  <div>详细说明: https://www.ibm.com/developerworks/cn/web/wa-ecma262/index.html</div>
</details>

<details>
  <summary>第六版 ECMA-262: 201506发布；俗称ES6 ES2015；新增classes(类), modules(模块), iterators(迭代器), generators(生成器), arrow functions(箭头函数), promises, reflection, proxies, 新数据类型</summary>
</details>

<details>
  <summary>CSS 中英文全称</summary>
  <div>Cascading Style Sheets</div>
  <div>层叠样式表</div>
</details>

<details>
  <summary>DOM Level 1 在199__年成为W3C推荐。目标是映射文档的结构。</summary>
  <div>8</div>
</details>

<details>
  <summary>DOM Level 2 扩展DOM增加了对鼠标和用户界面事件,操作和遍历文档树,支持CSS</summary>
  <div></div>
</details>

<details>
  <summary>DOM Level 3 未知</summary>
  <div></div>
</details>

<details>
  <summary>随着__的引入，才将BOM标准化。</summary>
  <div>HTML5</div>
</details>

<details>
  <summary>将JavaScript插入HTML页面的主要方法是通过&lt;__&gt;元素。该元素有__个属性。</summary>
  <div>6</div>
</details>

<details>
  <summary>如果要 立即异步下载脚本文件(HTML5新增不能保证执行的先后顺序) 需要在script元素添加属性 __。</summary>
  <div>async</div>
</details>
</details>

<details>
  <summary>如果要 设置字符集 需要在script元素添加属性 __。默认utf-8</summary>
  <div>charset</div>
</details>

<details>
  <summary>如果要 脚本加载错误要获取错误信息的话(window.onerror) 需要在script元素添加属性 __。</summary>
  <div>crossorigin</div>
</details>

<details>
  <summary>如果要 立即下载脚本等到文档完全解析并显示完毕再执行此脚本(该脚本执行完后才触发DOMContentLoaded;等到浏览器收到&lt;/ html&gt;标记后, 按照出现顺序执行) 需要在script元素添加属性 __。</summary>
  <div>defer</div>
</details>

<details>
  <summary>如果要 检测脚本的完整性 需要在script元素添加属性 __。</summary>
  <div>integrity</div>
</details>

<details>
  <summary>如果要 引入外部脚本 需要在script元素添加属性 __。</summary>
  <div>src</div>
</details>

<details>
  <summary>如果要 指示脚本的内容类型 需要在script元素添加属性 __。</summary>
  <div>type</div>
</details>

## CHARPER 2 HTML中的JavaScript

<details>
  <summary>Internet Explorer 5.5 开始引入了__，后来发展出了多种文档模式，导致了同样的DOM内容在不同文档模式下不兼容，后面出了HTML__文档模式才统一了标准。</summary>
  <div>文档模式(document modes)</div>
  <div>5</div>
</details>

<details>
  <summary>如果 当前浏览器不支持JavaScript时，会显示__标签中的内容。</summary>
  <div>noscript</div>
</details>

## CHAPTER 3 JavaScript 基础知识

<details>
  <summary>__是变量，函数，属性或函数参数的名称。</summary>
  <div>标识符</div>
</details>

<details>
  <summary>标识符的第一个字符必须是__、__或__符号。</summary>
  <div>字母</div>
  <div>下划线</div>
  <div>美元</div>
</details>

<details>
  <summary>标识符中的字母可以包括ASCII或__字符</summary>
  <div>Unicode</div>
</details>

<details>
  <summary>按照惯例，标识符使用__式连接单词。</summary>
  <div>驼峰</div>
</details>

<details>
  <summary>严格模式是JavaScript的另一种__和执行模式，其中ECMAScript 3的某些不稳定行为已得到解决，并且为不安全的活动抛出了__。</summary>
  <div>解析</div>
  <div>错误</div>
</details>

<details>
  <summary>为了兼容ECMAScript 3的语法、避免ES3的不稳定行为，如果要为整个脚本启用严格模式，只需在顶部添加"__"</summary>
  <div>use strict</div>
</details>

<details>
  <summary>建议始终在语句的末尾添加__，避免__错误，分号可以提高性能，避免解析器判断是否需要添加分号。</summary>
  <div>分号</div>
  <div>压缩</div>
</details>

## CHAPTER 8 对象，类和面向对象编程

<details>
  <summary>Q</summary>
  <div>A</div>
</details>
