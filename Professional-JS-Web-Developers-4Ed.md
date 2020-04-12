<!-- markdownlint-disable MD033 MD026 -->
# Professional JavaScript For Web Developers 4Ed 填空

哪些知识点必须记?

- 不掌握该知识点时，开发时引发相关错误，却难以发现。

<details>
  <summary>W3C 中英文全称</summary>
  <div>World Wide Web Consortium</div>
  <div>万维网联盟</div>
</details>

<details>
  <summary>CSS 中英文全称</summary>
  <div>Cascading Style Sheets</div>
  <div>层叠样式表</div>
</details>

# CHAPTER 1 什么是JavaScript?

## 1.1 A Short History

<details>
  <summary>JavaScript在199__年首次出现，主要目的是处理__。</summary>
  <div>5</div>
  <div>表单验证</div>
</details>

<details>
  <summary>199__年，ECMA的第__技术委员会(TC39)，开会敲定了ECMA-__标准，该标准定义了一种名为__的新脚本语言。</summary>
  <div>7</div>
  <div>39</div>
  <div>262</div>
  <div>ECMAScript</div>
</details>

## 1.2 JavaScript Implementations

<details>
  <summary>通常意义的JavaScript不仅仅是ECMAScript，JavaScript由三个部分组成：__、__、__。</summary>
  <div>ECMAScript</div>
  <div>DOM</div>
  <div>BOM</div>
</details>

### 1.2.1 ECMAScript

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

#### 1.2.1.1 ECMAScript Editions

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

### 1.2.2 The Document Object Model

#### 1.2.2.1 Why the DOM Is Necessary

<details>
  <summary>在没有DOM之前，浏览器直接渲染HTML文档中的__。由于没有DOM所以HTML文档的标签是无法__的，而且不同标签的样式是浏览器预设好的，有的浏览器支持用户自定义指定标签的样式。</summary>
  <div>标签</div>
  <div>增删改查</div>
</details>

<details>
  <summary>有了DOM后，开发人员可以可以更改网页的__和__，而无需重新加载网页。</summary>
  <div>外观</div>
  <div>内容</div>
</details>

#### 1.2.2.2 DOM Levels

<details>
  <summary>只要符合DOM标准任何__都能在Web浏览器中修改DOM。ECMAScript也实现了DOM，__是现代浏览器默认的脚本语言。</summary>
  <div>脚本</div>
  <div>ECMAScript</div>
</details>

<details>
  <summary>DOM Level 1 在199__年成为W3C推荐。目标是__文档的结构。</summary>
  <div>8</div>
  <div>映射</div>
</details>

<details>
  <summary>DOM Level 2 扩展DOM增加了对__和__事件,操作和遍历文档树,支持__。</summary>
  <div>用户界面</div>
  <div>鼠标</div>
  <div>CSS</div>
</details>

<details>
  <summary>DOM Level 3 未知</summary>
  <div></div>
</details>

### 1.2.3 The Browser Object Model

<details>
  <summary>BOM模型允许__和__浏览器窗口。</summary>
  <div>访问</div>
  <div>操作</div>
</details>

<details>
  <summary>随着__的引入，才将BOM标准化。</summary>
  <div>HTML5</div>
</details>

# 第2章 JAVASCRIPT IN HTML

## 2.1 The &lt;script> Element

<details>
  <summary>将JavaScript插入HTML页面的主要方法是通过&lt;__&gt;元素。该元素有__个属性。</summary>
  <div>6</div>
</details>

<details>
  <summary>如果要 立即异步下载脚本文件(不能保证执行的先后顺序)，需要在script元素添加属性 __。</summary>
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
  <summary>如果要 让浏览器检测脚本的完整性 需要在script元素添加属性 __。</summary>
  <div>integrity</div>
  <div>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js" integrity="sha256-vFt3l+illeNlwThbDUdoPTqF81M8WNSZZZt3HEjsbSU=" crossorigin="anonymous">&lt;/script></div>
</details>

<details>
  <summary>[延伸]SRI的中文全称__，英文全称__。</summary>
  <div>Subresource Integrity</div>
  <div>子资源完整性</div>
</details>

<details>
  <summary>如果要 引入外部脚本 需要在script元素添加属性 __。</summary>
  <div>src</div>
</details>

<details>
  <summary>如果要 指示脚本的内容类型 需要在script元素添加属性 __。</summary>
  <div>type</div>
</details>

### 2.1.2 Deferred Scripts

<details>
  <summary>HTML __.01为&lt;script>元素定义了一个名为defer的属性。</summary>
  <div>4</div>
</details>

### 2.1.3 Asynchronous Scripts

<details>
  <summary>HTML__为&lt;script>元素引入了async属性。</summary>
  <div>5</div>
</details>

<details>
  <summary>通过createElement创建的脚本添加到DOM时，才会发出__。默认情况下，是__步脚本请求。但不是所有的浏览器都支持异步脚本请求，如果要统一动态脚本加载行为，则需要改为同步请求，async属性等于__。</summary>
  <div>请求</div>
  <div>异</div>
  <div>false</div>
</details>

### 2.1.6 Deprecated Syntax

<details>
  <summary>自19__年Netscape 2发布以来，所有浏览器都将JavaScript用作其默认__。</summary>
  <div>95</div>
  <div>编程语言</div>
</details>

<details>
  <summary>script标签的type属性使用__类型字符串来标识&lt;script>的__，但是MIME类型并未在浏览器之间进行标准化。在某些情况下，type属性的MIME类型值无效或无法识别也会导致某些浏览器__相关代码的执行。因此，除非您使用XHTML或&lt;script>标记请求或包装__，否则最佳实践是根本不指定类型(type)属性。</summary>
  <div>MIME</div>
  <div>内容</div>
  <div>跳过/忽略</div>
  <div>非JavaScript</div>
</details>

## 2.2 Inline Code versus External Files

<details>
  <summary>react vs vue 中的“vs”英文全称是__，中文全称是__。</summary>
  <div>versus</div>
  <div>与...相比</div>
</details>

<details>
  <summary>相对于内嵌脚本，引入外部脚本的优势有: __；__；</summary>
  <div>可维护性好</div>
  <div>浏览器缓存</div>
</details>

## 2.3 Document Modes

<details>
  <summary>Internet Explorer 5.5 开始引入了__，后来发展出了多种文档模式，导致了同样的DOM内容在不同文档模式下不兼容，后面出了HTML__文档模式才统一了标准。</summary>
  <div>文档模式(document modes)</div>
  <div>5</div>
</details>

## 2.4 The &lt;noscript> Element

<details>
  <summary>如果 当前浏览器不支持JavaScript时，会显示__标签中的内容。</summary>
  <div>noscript</div>
</details>

# CHAPTER 3 JavaScript 基础知识

## 3.1 Syntax

### 3.1.2 Identifiers

<details>
  <summary>__是变量，函数，属性或函数参数的总称。</summary>
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

### 3.1.4 Strict Mode

<details>
  <summary>严格模式是JavaScript的另一种__和执行模式，其中ECMAScript 3的某些不稳定行为已得到解决，并且为不安全的活动抛出了__。</summary>
  <div>解析</div>
  <div>错误</div>
</details>

<details>
  <summary>为了兼容ECMAScript 3的语法、避免ES3的不稳定行为，如果要为整个脚本启用严格模式，只需在顶部添加"__"</summary>
  <div>use strict</div>
</details>

### 3.1.5 Statements

<details>
  <summary>建议始终在语句的末尾添加__，避免__错误，分号可以提高性能，避免解析器判断是否需要添加分号。</summary>
  <div>分号</div>
  <div>压缩</div>
</details>

### 3.2 Keywords and Reserved Words

<details>
  <summary>关键字有特定的用途，不能用作__。</summary>
  <div>标识符</div>
</details>

## 3.3 Variables

<details>
  <summary>ECMAScript变量是__类型的，这意味着变量可以是__类型的数据。</summary>
  <div>松散</div>
  <div>任何</div>
</details>

<details>
  <summary>可以使用三个关键字来声明变量：__以及 __和__（在ECMAScript __引入）。</summary>
  <div>var</div>
  <div>const</div>
  <div>let</div>
  <div>6</div>
</details>

### 3.3.1 The ’var’ Keyword

#### 3.3.1.2 var Declaration Hoisting

<details>
  <summary>使用var声明的变量，会被提升到作用域的__部。</summary>
  <div>顶</div>
</details>

### 3.3.2 ’let’ Declarations

<details>
  <summary>let是__作用域的，而var是__作用域的。</summary>
  <div>块</div>
  <div>函数</div>
</details>

#### 3.3.2.2 Global Declarations

<details>
  <summary>与var关键字不同，在全局上下文中使用let声明变量时，变量不会像使用var那样添加到__。</summary>
  <div>window对象</div>
</details>

## 3.4 Data Types

<details>
  <summary>ECMAScript有7中数据类型__、__、__、__、__、__、__、__。</summary>
  <div>undefined</div>
  <div>Boolean</div>
  <div>String</div>
  <div>Number</div>
  <div>Object</div>
  <div>Function</div>
  <div>Symbol(ES6)</div>
  <div>BigInt(ES10)</div>
</details>

### 3.4.2 The Undefined Type

<details>
  <summary>undefined是ES__才加入的，是为了区分__和__之间的差异。</summary>
  <div>3</div>
  <div>空对象指针</div>
  <div>未初始化变量</div>
</details>

### 3.4.4 The Boolean Type

<details>
  <summary>Boolean(x)，x等于_1_、_2_、_3_、_4_、_5_、_6_时为false？</summary>
  <div>false</div>
  <div>''</div>
  <div>null</div>
  <div>0</div>
  <div>NaN</div>
  <div>undefined</div>
</details>

### 3.4.5 The Number Type

<details>
  <summary>ECMAScript使用__格式表示整数和浮点值。</summary>
  <div>IEEE–754</div>
</details>

<details>
  <summary>__开头的整数表示为八进制；__开头的整数表示为十六进制。</summary>
  <div>0</div>
  <div>0x(X)</div>
</details>

#### 3.4.5.1 Floating-Point Values

<details>
  <summary>浮点值可以精确到小数点后__位。</summary>
  <div>17</div>
</details>

#### 3.4.5.2 Range of Values

<details>
  <summary>由于__限制，可以在ECMAScript中表示的最小数字存储在Number.__中；最大的数字存储在Number.__。</summary>
  <div>内存</div>
  <div>MIN_VALUE</div>
  <div>MAX_VALUE</div>
</details>

<details>
  <summary>如果计算得出的数字无法用JavaScript的数字范围表示，则该数字会自动获得__的特殊值。 任何无法表示的负数是__，而任何无法表示的正数是__。</summary>
  <div>Infinity</div>
  <div>–Infinity（负无穷大）</div>
  <div>Infinity（正无穷大）</div>
</details>

#### 3.4.5.3 NaN

<details>
  <summary>在ECMAScript中，将数字除以0将返回__，任何涉及NaN的操作都始终返回__（例如NaN / 10）。NaN不等于__值。</summary>
  <div>NaN</div>
  <div>NaN</div>
  <div>任何</div>
</details>

#### 3.4.6.3 Converting to a String

<details>
  <summary>有两种方法可以将值转换为字符串:__和__。</summary>
  <div>toString()</div>
  <div>String()</div>
</details>

<details>
  <summary>String()可以接受任何值，如果有__方法，则不带参数调用。如果值为null返回“null”，undefined返回“undefined”。</summary>
  <div>toString()</div>
</details>

<details>
  <summary>当toString()在值上使用时，则接受一个参数表示输出数字的基数。 默认为10(十进制)，可以使2-__进制。</summary>
  <div>数</div>
  <div>36</div>
</details>

### 3.4.7 The Symbol Type

<details>
  <summary>Symbol的实例是__且__的。</summary>
  <div>唯一</div>
  <div>不可变</div>
</details>

<details>
  <summary>Symbol目的是成为对象属性的有保证的__标识符，而不会冒属性冲突的危险。</summary>
  <div>唯一</div>
</details>

#### 3.4.7.1 Basic Symbol Use

<details>
  <summary>可以提供一个可选字符串，该字符串可用于在调试时__符号实例。</summary>
  <div>标识</div>
  <div>【let fooSymbol = Symbol('foo');】</div>
</details>

#### 3.4.7.2 Using the Global Symbol Registry

<details>
  <summary>在运行时的不同部分希望共享和重用Symbol实例的情况下，可以在通过__()方法在全局Symbol注册表中创建和重用Symbol。</summary>
  <div>Symbol.for</div>
</details>

<details>
  <summary>Symbol.for方法是__方法。</summary>
  <div>幂等</div>
</details>

<details>
  <summary>可以使用__（）方法来检查全局Symbol注册表，该方法接受一个Symbol实例并将返回关联的键，如果该Symbol实例不是全局Symbol，则为__。</summary>
  <div>Symbol.keyFor</div>
  <div>undefined</div>
</details>

<details>
  <summary>如果直接创建Symbol实例并将其用作属性，可以通过__()访问该Symbol属性。</summary>
  <div>Object.getOwnPropertySymbols</div>
</details>

#### 3.4.7.4 Well-Known Symbols

<details>
  <summary></summary>
  <div>Object.getOwnPropertySymbols</div>
</details>

## CHAPTER 8 对象，类和面向对象编程

<details>
  <summary>Q</summary>
  <div>A</div>
</details>
