<!-- markdownlint-disable MD033 MD026 MD037 -->
# Professional JavaScript For Web Developers 4Ed 填空

<!-- 哪些知识点必须记?

- 不掌握该知识点时，开发时引发相关错误，却难以发现。
- 面试常问的。
-->

# CHAPTER 1 什么是JavaScript?

<details>
  <summary>W3C：英文全称__；中文全称__。</summary>
  <div>World Wide Web Consortium</div>
  <div>万维网联盟</div>
</details>

<details>
  <summary>CSS：英文全称__；中文全称__。</summary>
  <div>Cascading Style Sheets</div>
  <div>层叠样式表</div>
</details>

<details>
  <summary>HTML：英文全称__；中文全称__。</summary>
  <div>HyperText Markup Language</div>
  <div>超文本标记语言</div>
</details>

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
  <summary>DOM：英文全称__；中文全称__。</summary>
  <div>Document Object Model</div>
  <div>文档对象模型</div>
</details>

<details>
  <summary>BOM：英文全称__；中文全称__。</summary>
  <div>Browser Object Model</div>
  <div>浏览器对象模型</div>
</details>

<details>
  <summary>ECMA：英文全称__；中文全称__。</summary>
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
  <summary>第六版 ECMA-262: 201506发布；俗称ES6 ES2015；新增classes(类), modules(模块), Iterators(迭代器), generators(生成器), arrow functions(箭头函数), promises, reflection, proxies, 新数据类型</summary>
</details>

### 1.2.2 The Document Object Model

#### 1.2.2.1 Why the DOM Is Necessary

<details>
  <summary>在没有DOM之前，浏览器直接渲染HTML文档中的__。由于没有DOM所以HTML文档的标签是无法__的，而且不同标签的样式是浏览器预设好的，有的浏览器支持用户自定义指定标签的样式。</summary>
  <div>标签</div>
  <div>增删改查</div>
</details>

<details>
  <summary>[延伸]渲染之前叫标签，渲染之后叫__或__。</summary>
  <div>元素(Element)</div>
  <div>对象(Object)</div>
</details>

<details>
  <summary>有了DOM后，开发人员可以更改网页的__和__，而无需重新加载网页。</summary>
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
  <summary>将JavaScript插入HTML页面的主要方法是通过&lt;__&gt;元素。</summary>
  <div>script</div>
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
  <summary>对于没有通过CORS检查的脚本，脚本元素会将最少的信息传给window.onerror。若要允许对使用单独域的静态媒体进行站点的错误进行记录，请使用__属性</summary>
  <div>crossorigin</div>
</details>

<details>
  <summary>如果要 立即异步下载脚本等到文档完全解析并显示完毕再执行此脚本(该脚本执行完后才触发DOMContentLoaded;等到浏览器收到&lt;/ html&gt;标记后, 按照出现顺序执行) 需要在script元素添加属性 __。</summary>
  <div>defer</div>
</details>

<details>
  <summary>如果要 让浏览器检测脚本的完整性 需要在script元素添加属性 __。</summary>
  <div>integrity</div>
  <div>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js" integrity="sha256-vFt3l+illeNlwThbDUdoPTqF81M8WNSZZZt3HEjsbSU=" crossorigin="anonymous">&lt;/script></div>
</details>

<details>
  <summary>[延伸]SRI：英文全称__；中文全称__。</summary>
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
  <summary>HTML __ 为&lt;script>元素定义了一个名为defer的属性。</summary>
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
  <summary>标识符的必须是__字母、__、__或__符号。第一个字符不能是__。</summary>
  <div>Unicode</div>
  <div>数字</div>
  <div>下划线</div>
  <div>美元</div>
  <div>数字</div>
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

<details>
  <summary>使用const声明变量后，该变量指向的内存地址就不可改变了。</summary>
  <div></div>
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
  <summary>与var关键字不同，在全局执行上下文中使用let声明变量时，变量不会像使用var那样添加到__。</summary>
  <div>window对象</div>
</details>

## 3.4 Data Types

<details>
  <summary>ECMAScript有8种数据类型。七种原始类型_1_、_2_、_3_、_4_、_5_、_6_、_7_和一种引用类型_8_。</summary>
  <div>1. Undefined(ES3)</div>
  <div>2. Null</div>
  <div>3. Boolean</div>
  <div>4. String</div>
  <div>5. Number</div>
  <div>6. Symbol(ES6)</div>
  <div>7. BigInt(ES10)</div>
  <div>8. Object</div>
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
  <summary>Boolean(x)，x等于_1_、_2_、_3_、_4_、_5_、_6_时为false。</summary>
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
  <summary>如果计算得出的数字无法用JavaScript的数字范围表示，则该数字会自动获得__的特殊值。 无穷大的负数表示为__，无穷大的正数表示为__。</summary>
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
  <summary>当toString()在数值上使用时，则接受一个参数表示输出数字的基数。 默认为10(十进制)，可以使2-__进制。</summary>
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
  <summary>Symbol目的是成为对象属性有保证的__标识符，而不会冒属性冲突的危险。</summary>
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
  <summary>在运行时的不同部分希望共享和重用Symbol实例的情况下，可以在通过__(key)方法在全局Symbol注册表中创建和重用Symbol。</summary>
  <div>Symbol.for</div>
</details>

<details>
  <summary>Symbol.for方法是__方法。</summary>
  <div>幂等</div>
</details>

<details>
  <summary>可以使用__（sym）方法来检查全局Symbol注册表，该方法接受一个Symbol实例并将返回关联的键，如果该Symbol实例不是全局Symbol，则为__。</summary>
  <div>Symbol.keyFor</div>
  <div>undefined</div>
</details>

<details>
  <summary>如果直接创建Symbol实例并将其用作属性，可以通过__()访问该Symbol属性。</summary>
  <div>Object.getOwnPropertySymbols</div>
</details>

#### 3.4.7.4 Well-Known Symbols

<details>
  <summary>除了自己创建的symbol，JavaScript还内建了一些在ECMAScript 6 之前没有暴露给开发者的symbol，它们代表了内部语言行为。它们可以通过Symbol的__访问。</summary>
  <div>属性</div>
</details>

<details>
  <summary>如果一个对象设置了Symbol.__属性，则这个对象就是异步可迭代对象。属性值是一个方法，该方法返回对象的__。该方法返回一个实现了__ 的对象。</summary>
  <div>asyncIterator</div>
  <div>AsyncIterator(异步迭代器)</div>
  <div>迭代器协议</div>
</details>

<details>
  <summary>[延伸]目前有默认设定了[Symbol.asyncIterator]属性的JavaScript内建的对象吗？</summary>
  <div>没有</div>
</details>

<details>
  <summary>__语句，可以利用Symbol.asyncIterator执行异步迭代。</summary>
  <div>for-await-of循环</div>
</details>

<details>
  <summary>__ Symbol作为构造函数的属性时，属性方法用于识别对象是否为构造函数的实例之一。通过__调用。</summary>
  <div>Symbol.hasInstance</div>
  <div>instanceof</div>
</details>

<details>
  <summary>在支持Symbol的情况下，“f instanceof Foo”还可以写作__。</summary>
  <div>Foo[Symbol.hasInstance](f)</div>
</details>

<details>
  <summary>每个构造函数都有默认的__ Symbol。</summary>
  <div>Symbol.hasInstance</div>
</details>

<details>
  <summary>Symbol.__ Symbol用于配置某对象作为Array.prototype.__()方法的参数时是否展开其数组元素。Symbol属性值为__值。</summary>
  <div>isConcatSpreadable</div>
  <div>concat</div>
  <div>布尔</div>
</details>

<details>
  <summary>Symbol.__ 用作一个对象的属性，属性值为默认迭代器。调用默认迭代器后返回的对象是一个Iterator(迭代器)，方法通过__语句被自动调用。</summary>
  <div>iterator</div>
  <div>for-of循环</div>
</details>

<details>
  <summary>[拓展]如果要手动迭代，可以使用迭代器的__方法。</summary>
  <div>next</div>
</details>

<details>
  <summary>Symbol.__ 用作一个对象的属性，属性值为方法。方法通过str.match(obj)语句被调用。</summary>
  <div>match</div>
</details>

<details>
  <summary>Symbol.match 可以用于标识对象是否具有__表达式的行为。为Boolean(value)为__时，不具有正则表达式行为(一般当做字符串处理)。</summary>
  <div>match</div>
  <div>正则</div>
  <div>false</div>
</details>

### 3.4.8 The Object Type

<details>
  <summary>Object构造函数的__有这7个对键值，所以每个Object构造函数的实例都有1个属性和6个方法：_1_、_2_、_3_、_4_、_5_、_6_、_7_。</summary>
  <div>原型</div>
  <div>Object.prototype.constructor</div>
  <div>Object.prototype.hasOwnProperty(propertyName)</div>
  <div>Object.prototype.propertyIsEnumerable(propertyName)</div>
  <div>Object.prototype.isPrototypeOf(object):当前对象是否在另一个对象的原型链上。</div>
  <div>Object.prototype.toLocaleString()</div>
  <div>Object.prototype.toString()</div>
  <div>Object.prototype.valueOf()</div>
</details>

<details>
  <summary>BOM和DOM等__对象(host objects)不归ECMA-262管，所以宿主对象不一定从__继承。</summary>
  <div>宿主</div>
  <div>Object</div>
</details>

## 3.5 Operators(运算符)

<details>
  <summary>ECMA-262描述了一组可用于操纵_1_的运算符。包括:_2_运算符、_3_运算符、_4_运算符、_5_运算符。</summary>
  <div>1. 数据值</div>
  <div>2. 算术</div>
  <div>3. 位</div>
  <div>4. 关系</div>
  <div>5. 相等</div>
</details>

### 3.5.1 Unary Operators

<details>
  <summary>仅对__进行运算的运算符称为一元运算符。</summary>
  <div>一个值</div>
</details>

#### 3.5.1.1 Increment/Decrement

<details>
  <summary>递增和递减运算符直接来自于__语言。</summary>
  <div>C</div>
</details>

<details>
  <summary>递增递减四个运算符可以用于任何值。当值为对象时，会调用其__()方法以获取一个可用的值。</summary>
  <div>valueOf</div>
</details>

#### 3.5.1.2 Unary Plus and Minus

<details>
  <summary>将一元加号应用于非数字值时，它将执行__函数强制转换类型。</summary>
  <div>Number()</div>
</details>

<details>
  <summary>一元减运算符的主要用途是__。</summary>
  <div>取反数值</div>
</details>

<details>
  <summary>[延伸]一元运算符包括_1_、_2_、_3_、4_、_5_、_6_、_7_。</summary>
  <div>1. delete</div>
  <div>2. void</div>
  <div>3. typeof</div>
  <div>4. +</div>
  <div>5. -</div>
  <div>6. ~</div>
  <div>7. !</div>
</details>

### 3.5.2 Bitwise Operators

<details>
  <summary>ECMAScript中的所有数字都以IEEE–754 __位格式存储。</summary>
  <div>64</div>
</details>

<details>
  <summary>按位运算不能直接在__位表示形式上运算。将值转换为__位整数，然后进行运算，然后将结果转换回__位。</summary>
  <div>64</div>
  <div>32</div>
  <div>64</div>
</details>

<details>
  <summary>__整数使用32位中的前__位来表示整数的数值。第__位代表数字的符号(又称为__位)：0表示__，1表示__。</summary>
  <div>有符号</div>
  <div>31</div>
  <div>32</div>
  <div>符号</div>
  <div>正</div>
  <div>负</div>
</details>

<details>
  <summary>数字__的32位可表示为00000000000000000000000000010010，其中第二位为__，可以简洁的表示为__，这几位被称为__位。</summary>
  <div>18</div>
  <div>1</div>
  <div>10010</div>
  <div>有效</div>
</details>

<details>
  <summary>[拓展]将二进制数每个数字反转，得到的数即为原二进制的__码，也称为__码（英语：__）。</summary>
  <div>一的补</div>
  <div>反</div>
  <div>1's complement</div>
</details>

<details>
  <summary>[拓展]数字的补码(英语：__)就是数字的二进制进行反码然后加__。</summary>
  <div>2's complement</div>
  <div>1</div>
</details>

<details>
  <summary>[拓展]二进制1001（有效值），为无符号比特：__；为有符号比特:__；为一的补码(反码)：__。</summary>
  <div>9</div>
  <div>-1</div>
  <div>6</div>
</details>

<details>
  <summary>负数也存储在二进制代码中，但格式为二进制__码。</summary>
  <div>补</div>
</details>

<details>
  <summary>特殊值__和__，为按位运算的操作数时，都被视为等于__。</summary>
  <div>NaN</div>
  <div>Infinity</div>
  <div>0</div>
</details>

<details>
  <summary>按位运算符应用于非数字值时，会首先使用__函数将该值转换为数字。</summary>
  <div>Number()</div>
</details>

#### 3.5.2.1 Bitwise NOT

<details>
  <summary>符号“~”表示__运算符，是__元运算符。</summary>
  <div>按位非</div>
  <div>一</div>
</details>

<details>
  <summary>对数值X使用按位非运算符返回结果为__。</summary>
  <div>-X-1</div>
</details>

<details>
  <summary>为什么25按位非运算(~)后的值为-26？25的8位二进制原码为0001 1001，然后按位非运算(就是__运算)，反码后的值(存在内存中)为1111 1111 1111 1111 1111 1111 1110 __，取值时因为最高位是1所以是负数，负数以二进制补码的格式存储在二进制代码中。__位减1，然后反码，注意反码不改变__位。</summary>
  <div>反码</div>
  <div>0110</div>
  <div>最低</div>
  <div>符号</div>
</details>

<details>
  <summary>补码系统中 -5 的表示方式为(4bit)__。</summary>
  <div>1011</div>
</details>

#### 3.5.2.2 Bitwise AND

<details>
  <summary>符号“&”表示__运算符，是__元运算符。</summary>
  <div>按位与</div>
  <div>二</div>
</details>

<details>
  <summary>如果两个位都为1，则按位与运算将返回__；如果任何位为0，则将返回__。</summary>
  <div>1</div>
  <div>0</div>
</details>

#### 3.5.2.3 Bitwise OR

<details>
  <summary>符号“|”表示__运算符，是__元运算符。</summary>
  <div>按位或</div>
  <div>二</div>
</details>

<details>
  <summary>如果至少一位为__，则按位或运算将返回1；仅当两位均为__时，才返回0。</summary>
  <div>1</div>
  <div>0</div>
</details>

#### 3.5.2.4 Bitwise XOR

<details>
  <summary>符号“^”表示__运算符，是__元运算符。</summary>
  <div>按位异或</div>
  <div>二</div>
</details>

<details>
  <summary>按位异或运算，仅当恰好一位的值为__时，它才返回__（如果两个位都包含1，则返回__）。</summary>
  <div>1</div>
  <div>1</div>
  <div>0</div>
</details>

#### 3.5.2.5 Left Shift

<details>
  <summary>符号“&lt;&lt;”表示__运算符，是__元运算符。</summary>
  <div>左移</div>
  <div>一</div>
</details>

<details>
  <summary>左移运算符，将一个__中的所有位向左移动指定的__，右侧用__补充，符号位__变。</summary>
  <div>数字</div>
  <div>位数</div>
  <div>0</div>
  <div>不</div>
</details>

#### 3.5.2.6 Signed Right Shift

<details>
  <summary>符号“>>”表示__运算符，是__元运算符。</summary>
  <div>有符号右移</div>
  <div>一</div>
</details>

<details>
  <summary>有符号右移运算符，将一个__中的所有位向右移动指定的位数，左侧用__补充，符号位__变。</summary>
  <div>数字</div>
  <div>0</div>
  <div>不</div>
</details>

#### 3.5.2.7 Unsigned Right Shift

<details>
  <summary>符号“>>>”表示__运算符，是__元运算符。</summary>
  <div>无符号右移</div>
  <div>一</div>
</details>

<details>
  <summary>无符号右移运算符，将一个__中的所有位向右移动指定的位数，左侧用__补充，符号位__变。</summary>
  <div>数字</div>
  <div>0</div>
  <div>改</div>
</details>

### 3.5.3 Boolean Operators

<details>
  <summary>共有三个布尔运算符：__，__和__。</summary>
  <div>NOT</div>
  <div>AND</div>
  <div>OR</div>
</details>

#### 3.5.3.1 Logical NOT

<details>
  <summary>逻辑NOT运算符由__号表示，是__元运算符。</summary>
  <div>感叹(!)</div>
  <div>一</div>
</details>

<details>
  <summary>逻辑NOT运算符可以应用于ECMAScript中的__值。无论使用哪种数据类型，此运算符始终返回__值。</summary>
  <div>任何</div>
  <div>布尔</div>
</details>

#### 3.5.3.2 Logical AND

<details>
  <summary>逻辑AND运算符由__号表示，是__元运算符。</summary>
  <div>双与(&&)</div>
  <div>二</div>
</details>

<details>
  <summary>如果第一个表达式为假，则短路，__执行第二个表达式，并返回第__个表达式的值。</summary>
  <div>不</div>
  <div>一</div>
</details>

<details>
  <summary>如果第一个表达式为__，则执行第二个表达式，并返回第二个表达式的值。</summary>
  <div>真</div>
</details>

#### 3.5.3.3 Logical OR

<details>
  <summary>逻辑OR运算符由__表示，是__元运算符。</summary>
  <div>双管道(||)</div>
  <div>二</div>
</details>

#### 3.5.4.3 Modulus

<details>
  <summary>取模（__）运算用__号表示。</summary>
  <div>余数</div>
  <div>百分(%)</div>
</details>

### 3.5.5 Exponentiation Operator

<details>
  <summary>求幂运算用__号表示。ES7新增了Math.__()，与其行为等价。</summary>
  <div>**</div>
  <div>pow</div>
</details>

<details>
  <summary>[拓展]幂运算aⁿ：a称为__数，ⁿ称为__数。</summary>
  <div>底</div>
  <div>指</div>
</details>

#### 3.5.6.1 Add

<details>
  <summary>加运算符的两个操作数为__时，才会进行加法运算，否则进行字符串拼接。</summary>
  <div>number</div>
</details>

<details>
  <summary>如果操作数是对象，数字或布尔值，则调用其__（）方法以获取字符串值。undefined和null，分别调用__（）函数取字符串值。</summary>
  <div>toString</div>
  <div>String</div>
</details>

### 3.5.7 Relational Operators

<details>
  <summary>数学中的关系运算符有__、__、__、__，每个运算符都返回__值。</summary>
  <div><</div>
  <div>></div>
  <div><=</div>
  <div>>=</div>
  <div>布尔</div>
</details>

### 3.5.8 Equality Operators

<details>
  <summary>相等运算符和全等运算符的区别是，全等运算符在比较两个值之前，不进行__。</summary>
  <div>类型转换</div>
</details>

<details>
  <summary>[延伸]在ECMAScript中 -0 和 +0 被认为是__等的。</summary>
  <div>相</div>
</details>

### 3.5.10 Assignment Operators

<details>
  <summary>简单的赋值是用__号完成的，并将右边的__简单赋给左边的__。</summary>
  <div>等(=)</div>
  <div>值</div>
  <div>变量</div>
</details>

### 3.5.11 Comma Operator

<details>
  <summary>逗号运算符允许在一个__中执行多个__。</summary>
  <div>语句</div>
  <div>表达式</div>
</details>

### 3.6.5 The for-in Statement

<details>
  <summary>for-in语句以__顺序遍历一个对象(实例和__)的除__以外的可__属性。</summary>
  <div>任意</div>
  <div>原型</div>
  <div>Symbol</div>
  <div>枚举</div>
</details>

### 3.6.6 The for-of Statement

<details>
  <summary>for-of语句在可__对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。</summary>
  <div>迭代(Iterator)</div>
  <pre>
    例子：
    for (const [idx, element] of ['a', 'b', 'c'].entries()) {
      console.log(idx);
      console.log(element);
    }
  </pre>
</details>

<details>
  <summary>在ES2018中，for-of语句被扩展为__循环，以支持产生承诺的异步可迭代对象。</summary>
  <div>for-await-of</div>
</details>

### 3.6.7 Labeled Statements

<details>
  <summary>标记语句可以和 __ 或 __ 语句一起使用。标记就是在一条语句前面加个可以引用的__。</summary>
  <div>break</div>
  <div>continue</div>
  <div>标识符</div>
</details>

## 3.7 Functions

<details>
  <summary>函数是__语言的核心，因为它们允许封装可以在任何地方任何时间运行的__。</summary>
  <div>任何</div>
  <div>语句</div>
</details>

<details>
  <summary>最佳实践表明，函数要么__返回值，要么__返回值。</summary>
  <div>总是</div>
  <div>从不</div>
</details>

# 第4章 VARIABLES, SCOPE, AND MEMORY

## 4.1 Primitive and Reference Values

<details>
  <summary>ECMAScript变量可能包含两种不同类型的数据：__类型和__类型。</summary>
  <div>原始(primitive)</div>
  <div>引用(reference values)</div>
</details>

<details>
  <summary>引用值是存储在内存中的__。与其他语言不同，JavaScript不允许直接访问__位置，因此不允许直接操纵对象的内存空间。</summary>
  <div>对象</div>
  <div>内存</div>
</details>

<details>
  <summary>在许多语言中，字符串由__表示，因此被视为引用类型。ECMAScript打破了这一传统。</summary>
  <div>对象</div>
</details>

### 4.1.3 Argument Passing

<details>
  <summary>ECMAScript中的所有函数参数均按__传递。</summary>
  <div>值</div>
</details>

### 4.1.4 Determining Type

<details>
  <summary>__运算符是确定变量是否为原始类型的最佳方法。</summary>
  <div>typeof</div>
</details>

<details>
  <summary>根据定义，所有引用值都是__的实例</summary>
  <div>Object</div>
</details>

<details>
  <summary>ECMA-262指定实现内部[[__]]方法的任何对象都应从typeof返回“function”。</summary>
  <div>Call</div>
</details>

## 4.2 Execution Context and Scope

<details>
  <summary>ECMAScript中有很多上下文，其中一种叫__上下文。</summary>
  <div>执行</div>
</details>

<details>
  <summary>每个执行上下文都有一个关联的__，所有已定义的变量和函数都存在于该对象上。该对象无法通过代码访问。</summary>
  <div>变量对象</div>
</details>

<details>
  <summary>全局执行上下文(Global execution context)是最__的执行上下文。就像一个圆圈套一个圆圈。</summary>
  <div>外层</div>
</details>

<details>
  <summary>全局执行上下文(Global execution context)由__环境决定，在web浏览器中全局执行上下文(Global context)被称为Window执行上下文。</summary>
  <div>宿主</div>
</details>

<details>
  <summary> 每当调用函数时，函数的__就会被压入执行上下文栈。函数完成执行后，将函数执行上下文__栈，将__返回到先前执行上下文。</summary>
  <div>上下文</div>
  <div>弹出</div>
  <div>控制权</div>
</details>

<details>
  <summary>执行上下文栈就是其他编程语言所说的__栈。</summary>
  <div>调用栈(call stack)</div>
</details>

<details>
  <summary>创建执行上下文有两个阶段：1) __阶段 和 2) __阶段。</summary>
  <div>创建(Creation Phase)</div>
  <div>执行(Execution Phase)</div>
</details>

<details>
  <summary>“创建阶段”主要发生了两个事情：1)创建__环境组件。2)创建__环境组件。</summary>
  <div>词法(LexicalEnvironment)</div>
  <div>变量(VariableEnvironment)</div>
</details>

<details>
  <summary>词法环境是保存“标识符—变量”映射的结构。（这里的标识符是指__和__的名称，变量是__值或__值）。例子：</summary>
  <div>变量</div>
  <div>函数</div>
  <div>引用类型</div>
  <div>原始类型</div>
  <pre>
  var a = 20;
  var b = 40;
  function foo() {
    console.log('bar');
  }
  // 上面片段的词法环境如下所示：
  lexicalEnvironment = {
    a: 20,
    b: 40,
    foo: < ref. to foo function >
  }
  </pre>
</details>

<details>
  <summary>每个词法环境有三个组成部分：1)__ 2)__ 3)__。</summary>
  <div>环境记录 EnvironmentRecord(Environment Record)</div>
  <div>引用外部环境 outer(Reference to the outer environment)</div>
  <div>绑定this ThisBinding(This binding)</div>
</details>

<details>
  <summary>环境记录：记录了多个__映射__。</summary>
  <div>标识符</div>
  <div>到值</div>
</details>

<!-- 不理解，暂时注释 -->
<details>
  <summary>环境记录有两种类型：声明式环境记录(declarative)和对象环境记录(object)。</summary>
  <div></div>
</details>

<details>
  <summary>声明式环境记录：存储变量、函数声明和参数。</summary>
  <!-- 函数代码的词法环境包含声明性环境记录。 -->
  <div></div>
</details>

<details>
  <summary>对象环境记录：用来存储变量with语句和全局上下文中的变量和函数。</summary>
  <div></div>
</details>

<details>
  <summary>引用外部环境：外部执行上下文。对外部环境的引用意味着它可以访问其外部词法环境。这意味着，如果在当前__环境中找不到变量，则JavaScript引擎可以在外部环境中查找变量。</summary>
  <div>词法</div>
</details>

<details>
  <summary>绑定this：分两种执行上下文，全局执行上下文或函数执行上下文。如果在前者中，则this指向全局对象；如果在后者，则取决于调用的方式：作为对象的方法调用，则指向这个对象；否则指向全局对象或__。</summary>
  <div>undefined(严格模式下)</div>
</details>

<details>
  <summary>变量环境：形式上和__环境只有一个区别，就是LexicalEnvironment换成了VariableEnvironment。</summary>
  <div>词法</div>
</details>

<details>
  <summary>在ES6中，LexicalEnvironment组件和VariableEnvironment组件之间的区别是前者用于存储__和变量（let和const），而后者仅用于存储变量（__）。</summary>
  <div>函数声明</div>
  <div>var</div>
</details>

<details>
  <summary>执行阶段：完成对__的分配，并最终执行代码。</summary>
  <div>所有变量</div>
</details>

<details>
  <summary>在ES6前，声明变量都是通过var关键字声明的，在ES6中则提倡使用let和const来声明变量，为了__var的写法，于是使用变量环境(VariableEnvironment)来存储var声明的变量。</summary>
  <div>兼容</div>
</details>

<details>
  <summary>通过一个例子来理解。在创建阶段和执行阶段，变量环境和词法环境的使用。例子：</summary>
  <pre>
  let a = 20;
  const b = 30;
  var c;
  function multiply(e, f) {
    var g = 20;
    return e * f * g;
  }
  c = multiply(20, 30);
  <!--  -->
  // 创建阶段
  GlobalExecutionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        a: < uninitialized >, // 使用为初始化(uninitialized)的变量，会报错
        b: < uninitialized >,
        multiply: < func >
      },
      outer: < null >,
      ThisBinding: < Global Object>
    },
    VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        c: undefined,
      },
      outer: < null >,
      ThisBinding: < Global Object >
    }
  }
  <!--  -->
  // 执行阶段
  GlobalExecutionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        a: 20,
        b: 30,
        multiply: < func >
      },
      outer: < null >,
      ThisBinding: < Global Object >
    },
    VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Object",
        // Identifier bindings go here
        c: undefined,
      },
      outer: < null >,
      ThisBinding: < Global Object >
    }
  }
  // 当遇到对函数multiple（20，30）的调用时，将创建一个新的函数执行上下文来执行功能代码。
  // 创建阶段
  FunctionExecutionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        Arguments: {0: 20, 1: 30, length: 2},
      },
      // 外部执行上下文
      outer: < GlobalLexicalEnvironment >,
      // 如果是箭头函数创建的执行上下文则为undefined，
      // ThisBinding为undefined时如果再上下文中调用this，
      // 因为this是undefined所以使用上一个上下文绑定的this
      ThisBinding: < Global Object or undefined >,
    },
    VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        g: undefined
      },
      outer: < GlobalLexicalEnvironment >,
      ThisBinding: < Global Object or undefined >
    }
  }
  // 执行阶段
  FunctionExecutionContext = {
    LexicalEnvironment: {
      EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        Arguments: {0: 20, 1: 30, length: 2},
      },
      outer: < GlobalLexicalEnvironment >,
      ThisBinding: < Global Object or undefined >,
    },
    VariableEnvironment: {
      EnvironmentRecord: {
        Type: "Declarative",
        // Identifier bindings go here
        g: 20
      },
      outer: < GlobalLexicalEnvironment >,
      ThisBinding: < Global Object or undefine d>
    }
  }
  </pre>
</details>

### 4.2.1 Scope Chain Augmentation

<details>
  <summary>有3种执行上下文类型：__、__和__。</summary>
  <div>全局</div>
  <div>局部(函数)</div>
  <div>eval()</div>
</details>

<details>
  <summary>但是还有其他方法可以扩展作用域链。某些语句会导致某个执行上下文临时添加到作用域链的__，然后在代码执行后将其__。分别是__和__。</summary>
  <div>前端</div>
  <div>删除</div>
  <div>try-catch语句中的catch块</div>
  <div>with语句</div>
</details>

<details>
  <summary>在 ES5 __中“with语句”已被禁止。</summary>
  <div>严格模式</div>
</details>

#### 4.2.2.3 Constant Declaration Using const

<details>
  <summary>如果希望使整个对象不可变，则可以使用__(obj)。不能新增删除属性，已有的属性的描述符configuable和writable改为false。</summary>
  <div>Object.freeze</div>
</details>

<details>
  <summary>由于const声明暗示该值是单一类型且不可变，因此JavaScript运行时编译器可以用其__替换其所有实例，而不用通过查找表执行变量查找。 Google Chrome V8引擎执行了这样的优化。</summary>
  <div>实际值</div>
</details>

#### 4.2.2.4 Identifier Lookup(标识符查找)

<details>
  <summary>[疑问，不是作用域链吗？为什么是上下文？]如果在当前执行上下文的__中没有搜索到对应的标识符，则将搜索下一个执行上下文的变量对象，直到找到全局执行上下文的变量对象，如果还没有的话会报错“xxx is not defined”</summary>
  <div>变量对象</div>
</details>

<details>
  <summary>[拓展]执行上下文(execution context)的数据（变量，函数声明和函数的形参）被存储为变量对象的__。每次进入执行上下文时都会__并用__填充变量对象，并且其更新发生在代码__阶段。</summary>
  <div>属性</div>
  <div>创建</div>
  <div>初始值</div>
  <div>执行</div>
</details>

## 4.3 Garbage Collection

<details>
  <summary>[拓展]像C语言这样的底层语言一般都有底层的__接口。相反，JavaScript是在创建变量时自动进行了分配内存，并且在不使用它们时“自动”释放。释放的过程称为__。</summary>
  <div>内存管理</div>
  <div>垃圾回收(garbage-collected，简称GC)</div>
</details>

<!-- <details>
  <summary>JavaScript是一种自动管理内存的语言，这意味着__负责用于管理代码执行期间所需的内存。</summary>
  <div>执行环境</div>
</details> -->

### 4.3.1 Mark-and-Sweep

<details>
  <summary>浏览器中使用了两种策略：__和__。</summary>
  <div>标记清除(Mark-and-Sweep)</div>
  <div>引用计数(reference counting)</div>
</details>

<details>
  <summary>到2008年为止，IE, Firefox, Opera, Chrome, and Safari 都是使用__策略。</summary>
  <div>标记清除</div>
</details>

### 4.3.4 Managing Memory

<details>
  <summary>当不再需要数据时，最好将值设置为__，以释放引用，这称为__。该建议主要适用于__值和__的属性。当__变量所在的执行上下文脱离执行上下文栈时，它们会自动取消引用。</summary>
  <div>null</div>
  <div>取消引用值</div>
  <div>全局</div>
  <div>全局对象</div>
  <div>局部</div>
</details>

# 第5章 BASIC REFERENCE TYPES

<details>
  <summary>引用值（object）是特定__类型的__。在ECMAScript中，引用类型是用于将__和__组合在一起的结构，通常被错误地称为__。</summary>
  <div>引用</div>
  <div>实例</div>
  <div>数据</div>
  <div>方法</div>
  <div>类</div>
</details>

## 5.2 The RegExp Type

<details>
  <summary>当用作 pattern 的一部分时，所有__字符都必须转义。</summary>
  <div>元</div>
</details>

<details>
  <summary>元字符有，位置字符_1_、点字符_2_、选择符_3_、转义符_4_、范围符_5_、次数符_6_。</summary>
  <div>1. ^ $</div>
  <div>2. .</div>
  <div>3. |</div>
  <div>4. \</div>
  <div>5. ( ) { } [ ]</div>
  <div>6. ? * +</div>
</details>

### 5.3 Primitive Wrapper Types

<details>
  <summary>原始类型的“__”:设计了三种特殊的引用类型以简化与__值的交互：__类型，__类型和__类型。</summary>
  <div>包装对象</div>
  <div>原始</div>
  <div>布尔</div>
  <div>数字</div>
  <div>字符串</div>
</details>

<details>
  <summary>每当以__模式访问字符串值时，都会发生以下三个步骤:①__。②__。③__。</summary>
  <div>读取</div>
  <div>new String('foo')</div>
  <div>在实例上调用指定的方法</div>
  <div>销毁实例</div>
</details>

### 5.3.3 The isInteger() Method and Safe Integers

<details>
  <summary>ES6中新引入的__()方法能够辨别数字值是否存储为整数。</summary>
  <div>Number.isInteger</div>
</details>

<details>
  <summary>[拓展]IEEE 754中规定的双精度浮点数数据类型，而这一数据类型能够安全存储 -(2^__ - 1) 到 2^53 - 1 之间的数值（包含边界值）。安全存储的意思是指能够准确区分两个__的值。</summary>
  <div>53</div>
  <div>不相同</div>
</details>

<details>
  <summary>ES6中新引入的__()方法用来判断一个数值是否是一个“安全整数”。</summary>
  <div>Number.isSafeInteger</div>
</details>

<!-- ## 5.4 The String Type

<details>
  <summary>字符串包含双字节字符（与仅使用一个字节的ASCII字符相反），每个字符(码点)被视为__个长度。</summary>
  <div>一</div>
</details> -->

### 5.4.1 The JavaScript Character

<details>
  <summary>字符“/”称为：__杠。</summary>
  <div>斜</div>
</details>

<details>
  <summary>字符“\”称为：__杠。</summary>
  <div>反斜</div>
</details>

<details>
  <summary>在ECMAScript中一个字符(码点)由__个或__个bit组成。</summary>
  <div>16</div>
  <div>32</div>
</details>

<details>
  <summary>JavaScript字符串使用两种Unicode编码的混合策略：UCS-2和UTF-16。对于__位（BMP）编码的字符，这两种编码实际上是相同的。</summary>
  <div>16</div>
</details>

<details>
  <summary>2个字节只能支持基本多语种平面(BMP，零平面)，为了引入更多的字符，Unicode定义了一种策略，该策略使用每个字符额外的__位来选择辅助平面(又称星体平面)。</summary>
  <div>16</div>
</details>

<details>
  <summary>[延伸]辅助平面中的码点，在UTF-16中被编码为一对16bit长的__（__字节），称作__对。</summary>
  <div>码元(代码单元)</div>
  <div>4</div>
  <div>代理（Surrogate Pair）</div>
</details>

<details>
  <summary>[延伸](1/3)代理对是怎么计算得来的呢？①减去第__平面(BMP)的码点 0x10000 个，然后的码点范围是U+0000至U+FFFFF(1114112-65536=1048576个码点)，使用__个比特就能表示。</summary>
  <div>零</div>
  <div>20</div>
</details>

<details>
  <summary>高位10个bit和低位10个bit是通过不是通过加法运算得到20个bit的，是通过__。</summary>
  <div>字符串拼接</div>
</details>

<details>
  <summary>(2/3)②高位的10比特(共__个码点)的值（值的范围为 0-0x3FF）被加上 0x__ 得到第一个码元或称作__，值的范围是 0xD800-0xDBFF。</summary>
  <div>1024</div>
  <div>D800</div>
  <div>前导代理（lead surrogates）</div>
</details>

<details>
  <summary>(3/3)③低位的10比特(共1024个码点)的值（值的范围为 0-0x3FF）被加上 0x__ 得到第二个码元或称作__，值的范围是 0xDC00-0xDFFF。</summary>
  <div>1024</div>
  <div>DC00</div>
  <div>后尾代理（trail surrogates）</div>
</details>

<details>
  <summary>[延伸](1/3)“𤭢”的码点是U+24B62，因为码点大于`U+__`，所以在UTF-16中不能直接表示，需要通过__表示，“𤭢”在UTF-16的代理对是`U+D852 U+DF62`。</summary>
  <div>FFFF</div>
  <div>代理对</div>
</details>

<details>
  <summary>(2/3)①0x24B62 减去 0x__，结果为0x14B62，二进制为 `0001010010``1101100010`。②前导代理:0x0052(0001010010)+0x__=0xD852。③后尾代理:0x0362(1101100010)+0x__=0xDF62。</summary>
  <div>10000</div>
  <div>D800</div>
  <div>DC00</div>
</details>

<details>
  <summary>(3/3)所以“𤭢”，小端字节序为“0x__ 0x__”；大端字节序为“0xD852 0xDF62”。</summary>
  <div>52D8</div>
  <div>62DF</div>
</details>

<details>
  <summary>(1/2)如果想查看某个(零平面)字符的码点，可以使用__()。</summary>
  <div>String.prototype.charCodeAt</div>
</details>

<details>
  <summary>(2/2)ES6新增了一个方法支持查看(全部平面)字符的码点__()。</summary>
  <div>String.prototype.codePointAt</div>
</details>

<details>
  <summary>(1/2)如果想使用(零平面)码点序列创建的字符串(UTF-16)，可以使用__()方法。</summary>
  <div>String.fromCharCode</div>
</details>

<details>
  <summary>(2/2)如果想使用(全部平面)码点序列创建的字符串(UTF-16)，可以使用__()ES6新增的方法。</summary>
  <div>String.fromCodePoint</div>
</details>

<details>
  <summary>从一个字符串中返回指定的(零平面)字符，可以使用__()方法。</summary>
  <div>String.prototype.charAt</div>
</details>

### 5.4.2 The normalize() Method

<details>
  <summary>(1/2)某些Unicode字符可以用多种方式编码。有时，一个字符可以由一个__字符或一个__表示。例如：</summary>
  <pre>
  String.fromCharCode(0x0041); //A
  String.fromCharCode(0x030A); //̊
  String.fromCharCode(0x0041, 0x030A); //Å
  String.fromCharCode(0x00C5); //Å
  String.fromCharCode(0x212B); //Å
  </pre>
  <div>BMP</div>
  <div>代理对</div>
</details>

<details>
  <summary>(2/2)所以存在一个问题：以上3种字符视觉和语义上都等价，但是 JavaScript 不能识别。然后Unicode通过提供四种正规形式来解决这一问题：NFC(默认)、NFD、NFKC、NFKD。通过__方法使用。</summary>
  <div>String.prototype.normalize()</div>
</details>

<details>
  <summary>NFC：表示“__”，返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。其他的正规形式不需要掌握。</summary>
  <div>标准等价合成</div>
</details>

### 5.4.3 String-Manipulation Methods

<details>
  <summary>在大多数情况下，使用二元加法运算符拼接字符串，其实际性能也比__()方法更好。</summary>
  <div>concat</div>
</details>

<details>
  <summary>ECMAScript提供了三种提取字符串的一部分的方法：slice（），substr（）和substring（）。用__(beginIndex[, endIndex])就行，其他两种行为诡异。</summary>
  <div>String.prototypr.slice</div>
</details>

### 5.4.4 String Location Methods

<details>
  <summary>有两种方法可以在字符串中搜索给定的子字符串并返回位置（如果找不到子字符串，则返回–1）。__方法返回第一次出现的位置，__方法返回最后一次出现的位置。</summary>
  <div>子字符串</div>
  <div>indexOf</div>
  <div>lastIndexOf</div>
</details>

### 5.4.5 String Inclusion Methods

<details>
  <summary>(ES6)3个方法用来确定一个字符串是否包含在另外一个字符串中：__()、__()、__()。3个方法返回值都为__值。</summary>
  <div>String.prototype.startsWith</div>
  <div>String.prototype.endsWith</div>
  <div>String.prototype.includes</div>
  <div>布尔</div>
</details>

<details>
  <summary>如果想判断当前字符串是否已给定的子字符串开头，可以用__(searchString[, position])方法。</summary>
  <div>String.prototype.startsWith</div>
</details>

<details>
  <summary>如果想判断当前字符串是否已给定的子字符串结尾，可以用__(searchString[, position])方法。</summary>
  <div>String.prototype.endsWith</div>
</details>

### 5.4.7 The repeat() Method

<details>
  <summary>(ES6)将一个字符串复制多次，可以用__(count)方法。</summary>
  <div>String.prototype.repeat</div>
</details>

### 5.4.8 The padStart() and padEnd() Methods

<details>
  <summary>(ES6)用另一个字符串填充到当前字符串(开头)至指定的长度，可以用__(targetLength [, padString])方法。</summary>
  <div>String.prototype.padStart</div>
</details>

<details>
  <summary>(ES6)用另一个字符串填充到当前字符串(尾部)至指定的长度，可以用__(targetLength [, padString])方法。</summary>
  <div>String.prototype.padEnd</div>
</details>

### 5.4.9 String Iterators and Destructuring

<details>
  <summary>字符串原型公开了一个__属性，该属性为字符串的默认迭代器。</summary>
  <div>Symbol.iterator</div>
</details>

<details>
  <summary>字符串迭代器允许和__运算符进行相互操作。</summary>
  <div>解构</div>
  <div>[...'abc'] => ['a','b','c']</div>
</details>

## 5.5 Singleton Built-in Objects(单例内置对象)

<details>
  <summary>由ECMAScript实现提供的任何对象，独立于宿主环境，在执行ECMAScript程序开始时就已被__。例如：Object、Array、String、Global和Math。</summary>
  <div>实例化</div>
</details>

### 5.5.1 The Global Object

#### 5.5.1.1 URI-Encoding Methods

<details>
  <summary>URI只支持__字符集，所以需要对URI进行编码，才可以传输。需要用特殊的UTF-8编码替换所有无效字符。可以使用__()和__()方法进行编码。</summary>
  <div>ASCII</div>
  <div>encodeURIComponent</div>
  <div>encodeURI</div>
</details>

<details>
  <summary>两者都不编码的字符：①__②数字和字母：A-Z a-z 0-9。</summary>
  <div>- _ . ! ~ * ' ( )</div>
</details>

<!-- <details> 不需要记
  <summary>encodeURI不编码的字符：①__②#。</summary>
  <div>; , / ? : @ & = + $</div>
</details> -->

#### 5.5.1.2 The eval() Method

<details>
  <summary>当解释器找到eval（）调用时，相当于在当前位置插入__，然后把代码插入到{}中。</summary>
  <div>{}</div>
</details>

<details>
  <summary>在严格模式下，在eval（）内部创建的__和__，外部无法访问。</summary>
  <div>变量</div>
  <div>函数</div>
</details>

<details>
  <summary>如果你间接的使用 eval()，比如通过一个引用来调用它，而不是直接的调用 eval。 从 ECMAScript5 起，它工作在__作用域下，而不是__作用域中。</summary>
  <div>全局</div>
  <div>局部</div>
</details>

<details>
  <summary>尽量使用__替代eval。</summary>
  <div>Function</div>
</details>

### 5.5.2 The Math Object

<details>
  <summary>Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。与其他全局对象不同的是，Math 不是一个__。Math 的所有属性与方法都是__的。都是预先__好的。</summary>
  <div>构造器</div>
  <div>静态</div>
  <div>解释编译</div>
</details>

#### 5.5.2.3 Rounding Methods

<details>
  <summary>如果过想把64位浮点数转为32位(单精度)，可以使用__()方法。</summary>
  <div>Math.fround</div>
</details>

#### 5.5.2.4 The random() Method

<details>
  <summary>如果想获得一个[0，1)之间的一个随机数，可以使用__()方法。</summary>
  <div>Math.random</div>
</details>

# CHAPTER 6 COLLECTION REFERENCE TYPES

## 6.1 The Object Type

<details>
  <summary>大多数引用类型__都是 Object 类型的实例。创建 Object 实例的方式有两种：①new 运算符后跟 __；②__表示法。</summary>
  <div>值</div>
  <div>Object 构造函数</div>
  <div>对象字面量</div>
</details>

<details>
  <summary>[延伸]伪数组对象：拥有一个__属性的对象。</summary>
  <div>length</div>
</details>

## 6.2 The Array Type

### 6.2.1 Creating Arrays

<details>
  <summary>(ES6)如果把伪数组对象和可迭代对象转为数组，可以使用__(arrayLike [, mapFn [, thisArg]])方法。</summary>
  <div>Array.from</div>
</details>

<details>
  <summary>(ES6)由于使用new Array()生成的数组，在浏览器中行为不一致，所以新加了个Array.__(element0[, ...[, elementN]])方法用来创建数组。</summary>
  <div>of</div>
</details>

### 6.2.4 Detecting Arrays

<details>
  <summary>x instanceof Array在大多数情况下可以用来判断x是否为数组，但是instanceof的一个问题是它假设只有一个全局执行上下文。没有考虑网页中有多个frame的情况。为此ECMAScript新增了一个__()方法用来解决这个问题。</summary>
  <div>Array.isArray</div>
</details>

### 6.2.5 Iterator Methods

<details>
  <summary>在ES6中，数组原型上公开了三种新方法，可以查看数组的内容：__（），__（）和__（）。将返回数组的迭代器。</summary>
  <div>Array.prototype.keys</div>
  <div>Array.prototype.values</div>
  <div>Array.prototype.entrys</div>
</details>

### 6.2.6 Copy and Fill Methods

<details>
  <summary>(ES6)如果想使用一个固定的值覆盖现有数组从起始索引到终止索引内的全部元素，可以使用__(value[, start[, end]])。</summary>
  <div>Array.prototype.fill</div>
</details>

<details>
  <summary>(ES6)如果想浅复制数组的一部分到自身的另一个位置，可以使用__(target[, start[, end]])。</summary>
  <div>Array.prototype.copyWithin</div>
</details>

### 6.2.7 Conversion Methods

<details>
  <summary>如果数组中的项目为null或未定义，则在join（），toLocaleString（），toString（）和valueOf（）的结果中用__表示。</summary>
  <div>空字符串</div>
</details>

### 6.2.8 Stack Methods

<details>
  <summary>ECMAScript数组提供__（）和__（）来允许类似栈的行为。</summary>
  <div>push</div>
  <div>pop</div>
</details>

<details>
  <summary>栈数据结构的访问规则是__(__进__出)。</summary>
  <div>LIFO</div>
  <div>后</div>
  <div>先</div>
</details>

### 6.2.9 Queue Methods

<details>
  <summary>队列数据结构的访问规则是__(__进__出)。</summary>
  <div>FIFO(先进先出)</div>
  <div>先</div>
  <div>先</div>
  <div></div>
</details>

<details>
  <summary>使用__()和__()方法，可以实现队列访问规则。</summary>
  <div>push</div>
  <div>shift</div>
</details>

### 6.2.10 Reordering Methods

<details>
  <summary>可以使用__()和__()方法使数组的元素的顺序重新排序。</summary>
  <div>Array.prototype.reverse</div>
  <div>Array.prototype.sort</div>
</details>

#### 6.2.12.2 Predicate Search

<details>
  <summary>__(callback(element[, index[, array]])[, thisArg]) 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回__。例子：</summary>
  <div>Array.prototype.find</div>
  <div>undefined</div>
  <pre>
  [5, 12, 8, 130, 44].find(element => element > 10) // 12
  </pre>
</details>

### 6.2.13 Iterative Methods

<details>
  <summary>ECMAScript为数组定义了五个迭代(iterator)方法：_1_、_2_、_3_、_4_、_5_。</summary>
  <div>Array.prototype.every</div>
  <div>Array.prototype.some</div>
  <div>Array.prototype.map</div>
  <div>Array.prototype.forEach</div>
  <div>Array.prototype.filter</div>
</details>

### 6.2.14 Reduction Methods

<details>
  <summary>reducer 函数接收__个参数：_1_、_2_、_3_、_4_。</summary>
  <div>4</div>
  <div>1. Accumulator (acc) (累计器)</div>
  <div>2. Current Value (cur) (当前值)</div>
  <div>3. Current Index (idx) (当前索引)</div>
  <div>4. Source Array (src) (源数组)</div>
</details>

<details>
  <summary>__() 方法对数组中的每个元素执行一个reducer函数(__序执行)，将其结果汇总为单个返回值。反之，降序使用__()方法</summary>
  <div>Array.prototype.reduce</div>
  <div>升</div>
  <div>Array.prototype.reduceRight</div>
</details>

## 6.3 Typed Arrays【TODO 不理解使用场景】

## 6.4 The Map Type(ES6)

<details>
  <summary>在ES6之前都是使用__来实现键/值存储。</summary>
  <div>Object</div>
</details>

<details>
  <summary>Map迭代时将以插入顺序迭代。__值可以用作键或值。</summary>
  <div>任何</div>
</details>

<details>
  <summary>ES2015中有四种相等算法: ①__；②__；③__；④__。</summary>
  <div>宽松相等</div>
  <div>严格相等</div>
  <div>同值相等</div>
  <div>零值相等</div>
</details>

<details>
  <summary>严格相等：NaN===NaN（值为__），+0===-0（值为__）。当值为0时，不判断__位。</summary>
  <div>false</div>
  <div>true</div>
  <div>符号</div>
</details>

<details>
  <summary>同值相等：__(value1, value2)方法可以实现。+0和-0__等，+0和0__等，-0和0__等，NaN和NaN__等。当值为0时，判断符号位。</summary>
  <div>Object.is</div>
  <div>不相</div>
  <div>相</div>
  <div>不相</div>
  <div>相</div>
</details>

<details>
  <summary>零值相等：与同值相等类似，除了一点，+0与-0__等。</summary>
  <div>相</div>
</details>

<details>
  <summary>键的比较是基于 __ 算法。</summary>
  <div>零值相等(sameValueZero)</div>
</details>

<details>
  <summary>[延伸]如果想创建一个没有原型的对象，可以使用__。</summary>
  <div>Object.create(null)</div>
</details>

<details>
  <summary>Map和Object的区别主要有6个方面：__、__、__、__、__、__。</summary>
  <div>意外(Object有原型个干扰)</div>
  <div>类型(Map的键可以是任意类型)</div>
  <div>顺序(Map可以按照顺序迭代)</div>
  <div>数量(Map方便获取数量)</div>
  <div>迭代(Map方便迭代)</div>
  <div>性能</div>
</details>

<details>
  <summary>Map与Object相比在频繁__和__的场景下，效率会高于Object尤其是__操作。</summary>
  <div>添加</div>
  <div>删除</div>
  <div>删除</div>
</details>

<details>
  <summary>[延伸]“@@iterator”和“Symbol.iterator”的区别：其实是一个意思，“@@iterator”只会出现在__中，“Symbol.iterator”只会出现__中。</summary>
  <div>文档</div>
  <div>代码</div>
</details>

<details>
  <summary>[延伸](1/2)Map有2个主要的缺点：①赋值和搜索操作都是 __(n) 的时间复杂度( n 是__的个数)，因为这两个操作都需要__整个数组来进行匹配。</summary>
  <div>O</div>
  <div>键值对</div>
  <div>遍历</div>
</details>

<details>
  <summary>(2/2)②另外一个缺点是可能会导致内存泄漏，因为数组会一直__着每个引用类型的键和值。这种引用使得垃圾回收算法不能回收处理他们，即使键和值没有其他(除了数组自身)任何引用存在。</summary>
  <div>强引用</div>
</details>

## 6.5 The WeakMap Type

<details>
  <summary>WeakMap和Map的主要区别是，WeakMap的键只能是__类型。null 会被当做 __。</summary>
  <div>引用</div>
  <div>undefined</div>
</details>

<details>
  <summary>WeakMap 持有的是每个键对象的“__引用”，这意味着在没有__引用存在时垃圾回收能正确进行。</summary>
  <div>弱</div>
  <div>其他</div>
</details>

<details>
  <summary>强引用、弱引用只跟引用类型有关系，跟原始类型没关系。弱引用不会被垃圾回收机制__。</summary>
  <div>标记</div>
</details>

<details>
  <summary>由于__引用，WeakMap 的 key 是不可__的。</summary>
  <div>弱</div>
  <div>枚举</div>
</details>

<details>
  <summary>可以使用WeakMap实现对象的__属性。</summary>
  <div>私有</div>
</details>

## 6.6 The Set Type

<details>
  <summary>键的比较是基于 __ 算法。</summary>
  <div>零值相等(sameValueZero)</div>
</details>

<details>
  <summary>Set对象是__类型的集合，只有__没有键，你可以按照__顺序迭代它的元素。Set 中的元素是__的。</summary>
  <div>任何</div>
  <div>值</div>
  <div>插入的</div>
  <div>唯一</div>
</details>

<details>
  <summary>如果传递一个__对象，它的所有元素将不重复地被添加到新的 Set中。如果不指定此参数或其值为__，则新的 Set为空。</summary>
  <div>可迭代</div>
  <div>null</div>
</details>

## 6.8 Iteration and Spread Operators

<details>
  <summary>(ES6)符号“...”表示__运算符，是__元运算符。</summary>
  <div>展开</div>
  <div>一</div>
</details>

<details>
  <summary>展开运算符可以将一个可__的对象在函数调用的位置展开成为多个__,或者在数组字面量中展开成多个数组__。还可以在构造字面量对象时, 将对象表达式按key-value的方式展开。</summary>
  <div>迭代</div>
  <div>参数</div>
  <div>元素</div>
</details>

<details>
  <summary>apply 执行的是调用 [[__]] , new 关键字 执行的是调用 [[__]]）。</summary>
  <div>Call</div>
  <div>Construct</div>
</details>

<details>
  <summary>展开语法和 __(target, ...sources) 行为一致, 执行的都是__拷贝(遍历__层)。</summary>
  <div>Object.assign</div>
  <div>浅</div>
  <div>一</div>
</details>

<details>
  <summary>Object.assign() 函数会触发 __，而展开语法则不会。</summary>
  <div>setters</div>
</details>

<details>
  <summary>剩余参数语法(Rest syntax)允许我们将一个不定数量的参数表示为__。</summary>
  <div>一个数组</div>
</details>

# 第7章 ITERATORS AND GENERATORS

## 7.1 Introduction to Iteration

<details>
  <summary>“迭代(iteration)”是指按__重复执行多次过程。ES6规范引入了两个高级功能（__器和__器），以实现更简洁，更快和更容易的迭代。</summary>
  <div>顺序</div>
  <div>迭代</div>
  <div>生成</div>
</details>

<details>
  <summary>最简单的迭代语句是__语句。</summary>
  <div>for</div>
</details>

<details>
  <summary>for语句的不理想的地方：①需要事先了解迭代对象的__，需要使用[]运算符。②递增整数以访问顺序索引特定于数组类型，并且不能推广到具有__排序的其他数据结构。</summary>
  <div>数据结构</div>
  <div>隐式</div>
</details>

<details>
  <summary>为了方便数组迭代，ES5引入了Array.prototype.__，不理想的地方：①无法__迭代。②仅限于__。</summary>
  <div>forEach</div>
  <div>提前终止</div>
  <div>数组</div>
</details>

## 7.2 The Iterator Pattern

### 7.2.1 The Iterable Protocol

<details>
  <summary>有些原生语言结构会自动调用工厂函数来生成迭代器，包括：9个__。</summary>
  <div>for...of loop</div>
  <div>Array destructuring(数组结构)</div>
  <div>The spread operator(展开运算符)</div>
  <div>Array.from()</div>
  <div>Set construction(构建)</div>
  <div>Map construction(构建)</div>
  <div>Promise.all(), which expects an iterable of promises</div>
  <div>Promise.race(), which expects an iterable of promises</div>
  <div>The yield* operator, used in generators</div>
</details>

<details>
  <summary>iterator(中文：__)是一个__。</summary>
  <div>迭代器</div>
  <div>对象</div>
</details>

<details>
  <summary>作为ECMAScript 2015的新增功能，迭代协议不是新的内置函数或语法，而是__。只需遵循一些约定，任何对象都可以实现这些协议。有两种协议：__协议和__协议。</summary>
  <div>约定（协议）</div>
  <div>可迭代(iterable)</div>
  <div>迭代器(iterator)</div>
</details>

<details>
  <summary>要成为可迭代对象，一个对象必须实现 @@__ 方法。这意味着对象（包括原型链）必须有一个键为 @@iterator 的属性，可通过常量 __ 访问该属性。</summary>
  <div>iterator</div>
  <div>Symbol.iterator</div>
</details>

### 7.2.2 The Iterator Protocol

<details>
  <summary>对象有个Symbol.iterator的键，对应的值是一个工厂函数，每次调用工厂函数都返回一个自身对象的迭代器，这个工厂函数称为__。</summary>
  <div>默认迭代器</div>
</details>

<details>
  <summary>迭代器协议定义了产生一系列值的标准方式。当对象实现了一个键为next的方法，该方法每次都返回一个__对象，对象有done（boolean）和value两个属性时，它是一个迭代器。</summary>
  <div>IteratorResult</div>
</details>

<details>
  <summary>一旦迭代器达到done：__状态，则调用next（）是__等的。</summary>
  <div>true</div>
  <div>幂</div>
</details>

<details>
  <summary>迭代器会对可迭代对象进行__引用。</summary>
  <div>强</div>
</details>

<details>
  <summary>迭代器过早关闭时，会执行迭代器对象的__（）方法(可选)。触发场景包括 for-of 时的__，__和__。</summary>
  <div>return</div>
  <div>break</div>
  <div>return</div>
  <div>throw</div>
</details>

## 7.3 Generators【薄弱】

<details>
  <summary>生成器对象是由一个 __ 函数返回的，并且生成器对象符合__协议和__协议。例子：</summary>
  <div>generator(生成器)</div>
  <div>可迭代</div>
  <div>迭代器</div>
  <pre>
  function* generatorFn() {}
  const g = generatorFn();
  <!--  -->
  console.log(g); // generatorFn {< suspended >}
  console.log(g === g[Symbol.iterator]()); // true
  console.log(g.next()); // {value: undefined, done: true}
  </pre>
</details>

### 7.3.1 Generator Basics

<details>
  <summary>生成器函数具有在单个函数中__和__代码执行的功能。</summary>
  <div>暂停</div>
  <div>恢复</div>
</details>

<details>
  <summary>生成器采用函数的形式，并且生成器指定带有__号。</summary>
  <div>星（*）</div>
</details>

<details>
  <summary>__函数不能用作生成器函数。</summary>
  <div>箭头</div>
</details>

### 7.3.2 Interrupting Execution with “yield”

<details>
  <summary>遇到__关键字时，将暂停执行并保留函数的__状态。仅在__上调用next（）方法时，执行才会恢复。</summary>
  <div>yield</div>
  <div>作用域</div>
  <div>生成器对象</div>
</details>

<details>
  <summary>yield关键字不能在非__函数内部使用；</summary>
  <div>generator(生成器)</div>
</details>

#### 7.3.2.2 Using “yield” for Input and Output

<details>
  <summary>yield关键字可以输入和输出。输出值通过__(param)方法传入。例子：</summary>
  <div>next</div>
  <pre>
  function* generatorFn(initial) {
    console.log(initial); // foo
    console.log(yield 'a'); // baz
    console.log(yield 'b'); // qux
    return 'c';
  }
  let generatorObject = generatorFn('foo');
  console.log(generatorObject.next()); // {value: "a", done: false}
  console.log(generatorObject.next('baz')); // {value: "b", done: false}
  console.log(generatorObject.next('qux')); // {value: "c", done: true}
  </pre>
</details>

#### 7.3.2.3 Yielding an Iterable

<details open>
  <summary>增强yield的行为</summary>
  <pre>
  function* generatorFn() {
    for (const x of [1, 2, 3]) {
      yield x;
    }
  }
  </pre>
  <details>
    <summary>写出等价写法：</summary>
    <pre>
    function* generatorFn() {
      yield* [1, 2, 3];
    }
    </pre>
  </details>
</details>

#### 7.3.2.4 Recursive Algorithms(递归算法) Using yield*

<details open>
  <summary></summary>
  <pre>
    function* nTimes(n) {
      if (n > 0) {
        yield* nTimes(n - 1);
        yield n - 1;
      }
    }
    for (const x of nTimes(3)) {
      console.log(x);
    }
    // 0
    // 1
    // 2
  </pre>
</details>

### 7.3.3 Using a Generator as the Default Iterator

<details>
  <summary>因为生成器对象实现了Iterable接口，并且由于生成器函数和默认迭代器均被调用以生成迭代器，所以__非常适合用作默认迭代器。</summary>
  <div>生成器</div>
</details>

### 7.3.4 Early Termination of Generators

<details>
  <summary>生成器对象的__（value）方法返回给定的值并结束生成器。</summary>
  <div>generator.return</div>
</details>

<details>
  <summary>__() 方法用来向生成器抛出异常，并恢复生成器的执行，返回带有 done 及 value 两个属性的对象。</summary>
  <div>generator.throw</div>
</details>

#### 7.3.4.2 The throw() Method

<details>
  <summary>如果抛出的错误是在生成器函数中捕获的，则错误不会关闭生成器对象并且可以恢复执行。错误处理将__这个yield。</summary>
  <div>跳过</div>
</details>

# 第8章 OBJECTS, CLASSES, AND OBJECT-ORIENTED PROGRAMMING
<!-- # CHAPTER 8 对象，类和面向对象编程 -->

## 8.1 Understanding Objects

<details>
  <summary>我们可以把ECMAScript的对象想象成__表：零到多组键值对，其中的值可以是数据或函数。</summary>
  <div>散列</div>
</details>

### 8.1.1 Types of Properties

<details>
  <summary>内部属性不能通过JavaScript直接访问，内部属性一般通过__号将属性名称括起来，例如[[Enumerrable]]。</summary>
  <div>方括</div>
</details>

<details>
  <summary>ECMAScript的属性有两种：__属性和__属性。</summary>
  <div>数据</div>
  <div>访问器</div>
</details>

#### 8.1.1.1 Data Properties

<details>
  <summary>数据属性包含数据值的位置。从该位置可以__和__值。</summary>
  <div>读取</div>
  <div>写入</div>
</details>

<details>
  <summary>数据属性有4个描述其行为的描述符：__、__、__、__。</summary>
  <div>[[Configurable]]</div>
  <div>[[Enumerable]]</div>
  <div>[[Writable]]</div>
  <div>[[Value]]</div>
</details>

<details>
  <summary>[[configurable]]：表示能否通过__运算符 删除属性，能否从数据属性修改为__属性，默认为__。</summary>
  <div>delete</div>
  <div>访问器</div>
  <div>true</div>
</details>

<details>
  <summary>[[enumerable]]：表示能否可__，能否通过__循环返回属性。默认为__。</summary>
  <div>枚举</div>
  <div>for-in</div>
  <div>true</div>
</details>

<details>
  <summary>[[writable]]：表示能否修改属性的__。默认为__。</summary>
  <div>值</div>
  <div>true</div>
</details>

<details>
  <summary>[[value]]：表示属性的__。默认为__。</summary>
  <div>数据值</div>
  <div>undefined</div>
</details>

<details>
  <summary>要修改属性默认的描述符，必须使用ES5的__()方法。如果configurable、enumerable、writable不传，默认为__。</summary>
  <div>Object.defineProperty</div>
  <div>false</div>
  <pre>
  Object.defineProperty({}, "name", {
    writable: false,
    value: "Nicholas"
  });
  </pre>
</details>

#### 8.1.1.2 Accessor Properties

<details>
  <summary>访问器属性不包含__。</summary>
  <div>数据值</div>
</details>

<details>
  <summary>访问器属性有4个描述其行为的描述符：__、__、__、__。</summary>
  <div>[[configurable]]</div>
  <div>[[enumerable]]</div>
  <div>[[get]]</div>
  <div>[[set]]</div>
</details>

<details>
  <summary>[[get]]：表示在__属性时的调用的函数。默认为__。</summary>
  <div>读取</div>
  <div>undefined</div>
</details>

<details>
  <summary>[[set]]：表示在__属性时的调用的函数。默认为__。</summary>
  <div>写入</div>
  <div>undefined</div>
</details>

<details>
  <summary>year_ 后面的下划线是一种常用的记号，用于表示该属性应该通过对应的__方法读写。</summary>
  <div>访问器</div>
</details>

### 8.1.2 Defining Multiple Properties

<details>
  <summary>如果想在对象上同时定义多个属性，ES5提供了__（）方法。</summary>
  <div>Object.defineProperties</div>
  <pre>
  Object.defineProperties({}, {
    year_: {
      value: 2017
    },
    edition: {
      value: 1
    },
    year: {
      get() {
        return this.year_;
      },
      set(newValue) {
        if (newValue > 2017) {
          this.year_ = newValue;
          this.edition += newValue - 2017;
        }
      }
    },
  });
  </pre>
</details>

### 8.1.3 Reading Property Attributes

<details>
  <summary>(ES5)如果想获取对象某个属性的描述符，可以使用__(obj, prop)。仅获取一层！</summary>
  <div>Object.getOwnPropertyDescriptor</div>
</details>

<details>
  <summary>(ES8)如果想获取对象全部属性的描述符，可以使用__(obj)。仅获取一层！</summary>
  <div>Object.getOwnPropertyDescriptors</div>
</details>

### 8.1.4 Merging Objects

<details>
  <summary>ES6 引入了Object.assign（）方法来合并对象。此方法接受一个目标对象和一个或多个源对象，并且对于每个源对象，将可枚举（Object.__返回true）和拥有（Object.__返回true）属性复制到目标对象。对于每个合适的属性，该方法将使用__从__对象中检索值，并使用__对象上的__来分配值。</summary>
  <div>Object.prototype.propertyIsEnumerable</div>
  <div>Object.prototype.hasOwnProperty</div>
  <div>[[Get]]</div>
  <div>源</div>
  <div>目标</div>
  <div>[[Set]]</div>
</details>

### 8.1.6 Enhanced Object Syntax

#### 8.1.6.1 Property Value Shorthand

<details>
  <summary>(ES6){ name: name }的等价写法</summary>
  <div>{ name }</div>
</details>

#### 8.1.6.3 Concise Method Syntax

<details>
  <summary>(ES6){ sayName: function(name){...} }的等价写法</summary>
  <div>{ sayName(name){...} }</div>
</details>

### 8.1.7 Object Destructuring

<details>
  <summary>ES6 引入了__解构。</summary>
  <div>对象</div>
</details>

<details>
  <summary>在解构时，将尝试把源转为__。</summary>
  <div>对象</div>
</details>

<details open>
  <summary>(ES6)等价写法</summary>
  <pre>
    let personName, personAge;
    let person = {
      name: 'Matt',
      age: 27,
    };
    personName = person.name;
    personAge = person.age;
  </pre>
  <details>
    <summary>答案</summary>
    <pre>
    let personName, personAge;
    let person = {
      name: 'Matt',
      age: 27,
    };
    ({ name: personName, age: personAge } = person);
    </pre>
  </details>
</details>

#### 8.1.7.1 Nested Destructuring

<details open>
  <summary>(ES6)等价写法</summary>
  <pre>
    let person = {
      name: 'Matt', age: 27,
      job: {
        title: 'Software engineer'
      }
    };
    let title = person.job.title;
  </pre>
  <details>
    <summary>答案</summary>
    <pre>
    let person = {
      name: 'Matt', age: 27,
      job: {
        title: 'Software engineer'
      }
    };
    let title = person.job.title;
    let { job: { title } } = person;
    </pre>
  </details>
</details>

## 8.2 Object Creation

### 8.2.2 The Factory Pattern(工厂模式)

<details>
  <summary>工厂模式是一种众所周知的设计模式，在软件工程中用于抽象化创建特定__的过程。 </summary>
  <div>对象</div>
</details>

<details>
  <summary>工厂模式创建对象的缺点是：无法判断__和所创建对象的关系。</summary>
  <div>工厂函数</div>
</details>

### 8.2.3 The Function Constructor Pattern(构造函数模式)

<details>
  <summary>构造函数模式解决了工厂模式的缺点，可以根据的实例的__与构造函数的原型判断之间的关系。</summary>
  <div>原型</div>
</details>

<details>
  <summary>除了__函数外，每个函数都有一个__对象。</summary>
  <div>箭头</div>
  <div>原型</div>
</details>

<details>
  <summary>调用构造函数后，创建一个新对象，然后将新对象赋值到__，将__赋值到新对象的原型(prototype)属性，构造函数的原型对象默认有个__属性，属性值为__。</summary>
  <div>this关键字</div>
  <div>构造函数的原型对象</div>
  <div>constructor</div>
  <div>构造函数</div>
</details>

<details>
  <summary>构造函数模式创建对象的缺点是：每个实例的方法都是独立的，不能__一个方法。</summary>
  <div>共用</div>
</details>

### 8.2.4 The Prototype Pattern(原型模式)

<details>
  <summary>原型模式解决了构造函数模式的缺点，可以把构造函数的公共属性添加到__上。</summary>
  <div>原型对象</div>
</details>

<details>
  <summary>普通属性不适合放在原型上，一般是__放在原型上，所以很少单独使用原型模式。</summary>
  <div>公共方法</div>
</details>

#### 8.2.4.1 How Prototypes Work

<details>
  <summary>ES5，获取某个对象的原型可以使用__（object）的方法。</summary>
  <div>Object.getPrototypeOf</div>
</details>

<details>
  <summary>ES5，往某个对象的原型上添加新值可以使用__（）的方法。警告：由于现代引擎会对属性访问做优化，创建后更改原型对象，会极大的影响性能。</summary>
  <div>Object.setPrototypeOf</div>
</details>

<details>
  <summary>如果想创建一个新对象并指定新对象的原型，可以使用__(proto[, propertiesObject])方法。</summary>
  <div>Object.create</div>
</details>

#### 8.2.4.3 Prototypes and the “in” Operator

<details>
  <summary>有两种使用in运算符的方式：单独使用或作为__循环使用。</summary>
  <div>for-in</div>
</details>

<details>
  <summary>判断某个属性是否存在于实例和原型上，可以使用__运算符。</summary>
  <div>in</div>
</details>

<details>
  <summary>判断某个属性是否存在于实例上，可以使用__()方法。</summary>
  <div>Object.prototype.hasOwnProperty</div>
</details>

<details>
  <summary>要检索对象上所有可枚举实例属性，可以使用__（）方法。</summary>
  <div>Object.keys</div>
</details>

<details>
  <summary>要检索对象上所有可枚举和不可枚举实例属性(不包括Symbol)，可以使用__（）方法。</summary>
  <div>Object.getOwnPropertyNames</div>
</details>

### 8.2.5 Object Iteration

<details>
  <summary>ES8 引入了__（obj）和__（obj）种静态方法，用于将对象的内容转换为可迭代格式。</summary>
  <div>Object.values</div>
  <div>Object.entries</div>
</details>

#### 8.2.5.1 Alternate Prototype Syntax

<details>
  <summary>默认情况下，原生构造函数属性(constructor)__枚举。</summary>
  <div>不可</div>
</details>

## 8.3 Inheritance(继承)

<details>
  <summary>许多OO语言支持两种继承：__继承（仅继承方法签名）和__继承（继承实际方法）。</summary>
  <div>接口</div>
  <div>实现</div>
</details>

<details>
  <summary>ECMAScript中无法进行接口继承，因为函数没有签名。实现继承是ECMAScript支持的唯一继承类型，这主要是通过使用__来完成的。</summary>
  <div>原型链</div>
</details>

### 8.3.1 Prototype Chaining(原型链)

<details>
  <summary>A对象可以有一个原型对象，A对象可以作为B对象的原型对象。这样一个套一个就成了链，__链。</summary>
  <div>原型</div>
</details>

#### 8.3.1.1 Default Prototypes

<details>
  <summary>任何原型都是__构造函数的实例。</summary>
  <div>Object</div>
</details>

#### 8.3.1.2 Prototype and Instance Relationships

<details>
  <summary>instanceof 运算符用于检测构造函数的__属性是否出现在某个实例对象的__上。</summary>
  <div>prototype</div>
  <div>原型链</div>
</details>

#### 8.3.1.4 Problems with Prototype Chaining(原型链的问题)

<details>
  <summary>原型链的第一个问题：当实例的原型对象，有个属性的值为__类型时，则所有实例都会共享这个属性，其中一个实例对该属性值的修改(例如:push)都会对__产生影响。</summary>
  <div>引用</div>
  <div>其他所有实例</div>
</details>

<details>
  <summary>原型链的第二个问题是：创建子类型实例时，不能将__传递给超类型构造函数。</summary>
  <div>参数</div>
</details>

### 8.3.2 Constructor Stealing(借用构造函数)

<details>
  <summary>为了解决原型链的两个问题，可以使用__构造函数。</summary>
  <div>借用</div>
</details>

<details>
  <summary>借用构造函数，即子类型构造函数的内部调用__。来实现对__的继承。</summary>
  <div>超类型构造函数</div>
  <div>超类属性</div>
</details>

<details>
  <summary>函数是在特定环境中执行__的__。</summary>
  <div>代码</div>
  <div>对象</div>
</details>

#### 8.3.2.2 Problems with Constructor Stealing

<details>
  <summary>借用构造函数的缺点：①子类型实例的__无法共用。②超类型__中的方法，子类型不可访问。</summary>
  <div>方法</div>
  <div>原型</div>
</details>

### 8.3.3 Combination Inheritance(组合继承)

<details>
  <summary>组合继承是将__和__技术组合到一起。</summary>
  <div>原型链</div>
  <div>借用构造函数</div>
</details>

<details>
  <summary>组合继承的缺点：调用了两次超类型的构造函数，1) new超类型，只用了超类型的原型，却没有用超类的__；2)通过call或apply方法调用了一次。</summary>
  <div>属性</div>
</details>

### 8.3.4 Prototypal Inheritance(原型式继承)

<details>
  <summary>原型式继承：先创建了一个临时的__函数，然后将传入的对象作为这个构造函数的__，最后返回这个临时构造函数的__。</summary>
  <div>构造</div>
  <div>原型</div>
  <div>实例</div>
</details>

<details>
  <summary>ES5新增__(proto[, propertiesObject])方法规范化原型式继承。对于原型式继承只需要用到第__个参数。</summary>
  <div>Object.create</div>
  <div>一</div>
</details>

### 8.3.5 Parasitic Inheritance(寄生式继承)

<details>
  <summary>ES5新增__(proto[, propertiesObject])方法规范化寄生式继承。对于寄生式继承需要用到__个参数。</summary>
  <div>Object.create</div>
  <div>两</div>
</details>

<details>
  <summary>寄生式继承缺点：为对象(注意不是原型)添加函数时，每个实例的函数没有被共用。</summary>
  <div>Object.create</div>
  <div>一</div>
</details>

### 8.3.6 Parasitic Combination Inheritance(寄生组合式继承)

<details>
  <summary>__式继承，能克服寄生式继承的缺点。</summary>
  <div>寄生组合</div>
</details>

<details>
  <summary>寄生组合式继承：即通过__来继承属性，通过__来继承方法。</summary>
  <div>借用构造函数</div>
  <div>原型链的混成形式</div>
</details>

<details>
  <summary>__继承，被认为是引用类型最理想的继承范例。例子：</summary>
  <div>寄生组合式</div>
  <pre>
    function SuperType(name) {
      this.name = name;
      this.colors = ["red", "blue", "green"];
    }
    SuperType.prototype.sayName = function () {
      console.log(this.name);
    };
    function SubType(name, age) {
      SuperType.call(this, name);
      this.age = age;
    }
    function inheritPrototype(subType, superType) {
      let prototype = object(superType.prototype); // create object
      prototype.constructor = subType; // augment object
      subType.prototype = prototype; // assign object
    }
    inheritPrototype(SubType, SuperType);
    SubType.prototype.sayAge = function () {
      console.log(this.age);
    };
  </pre>
</details>

## 8.4 Classes

<details>
  <summary>前面描述了很多在ES5中模仿类行为的方式。缺点是__和__。ES6提供了__关键字来定义类。class是语法糖，背后还是用构造函数和原型实现的。</summary>
  <div>语法冗长</div>
  <div>混乱</div>
  <div>class</div>
</details>

### 8.4.1 Class Definition Basics

<details>
  <summary>与函数类型类似，定义类有两种主要方法：__和__。</summary>
  <div>类声明</div>
  <div>类表达式</div>
</details>

<details>
  <summary>类声明会有__行为，函数声明会有声明提升行为。类声明是__作用域。</summary>
  <div>暂时性死区</div>
  <div>块</div>
</details>

#### 8.4.1.1 Class Composition

<details>
  <summary>class中的内容默认是以__模式执行的。</summary>
  <div>严格</div>
</details>

<details>
  <summary>和function关键字一样，当class表达式分配给变量时，不能在class范围之外访问class标识符本身。例如：</summary>
  <pre>
    const foo1 = function foo(a) {
      console.log(a);
    }
    foo('foo'); // ReferenceError: foo is not defined
  </pre>
</details>

### 8.4.2 The Class Constructor

<details>
  <summary>选择不定义constructor函数和定义为__相同。</summary>
  <div>空函数</div>
</details>

#### 8.4.2.1 Instantiation

<details>
  <summary>new Functin 和 new Class 的唯一可知区别是，new Class 会调用__函数。</summary>
  <div>constructor</div>
</details>

<details>
  <summary>使用new调用类构造函数将执行以下操作：①__；②__；③__；④__；⑤__。</summary>
  <div>1. 在内存中创建一个新对象</div>
  <div>2. 将新对象的内部[[Prototype]]指针分配为constructor函数的prototype属性</div>
  <div>3. 新对象赋值给constructor函数的this。</div>
  <div>4. 执行constructor函数中的代码（将属性添加到新对象）</div>
  <div>5. 如果constructor函数返回一个对象，则返回该对象。 否则，新返回刚刚创建的对象</div>
</details>

<!-- <details>问题重复了
  <summary>当选择不使用new运算符时，构造函数将在constructor函数内部this将指向__。</summary>
  <div>严格模式下为undefined；否则为全局对象（在浏览器中是window对象）</div>
</details> -->

#### 8.4.2.2 Understanding Classes as Special Functions

### 8.4.3 Instance, Prototype, and Class Members

#### 8.4.3.1 Instance Members

<details>
  <summary>constructor函数返回的对象为__对象。</summary>
  <div>实例</div>
</details>

#### 8.4.3.2 Prototype Methods and Accessors

<details>
  <summary>类__中定义的所有内容都会添加到类的原型对象上。</summary>
  <div>主体</div>
</details>

#### 8.4.3.3 Static Class Methods and Accessors

<details>
  <summary>如果为静态成员，则直接添加到__对象上。</summary>
  <div>类构造函数</div>
</details>

#### 8.4.3.4 Non-Function Prototype and Class Members

<details>
  <summary>也可以在类定义__把属性添加到类或类的原型。一般不这么做是因为，实例需要通过this关键词引用数据，在类定义之外的属性`this`无法访问。</summary>
  <div>之外</div>
</details>

#### 8.4.3.5 Iterator and Generator Methods

<details>
  <summary>由于支持生成器方法，因此可以通过添加__迭代器来使类实例可迭代。例子：</summary>
  <div>默认</div>
  <pre>
  class Person {
    constructor() {
      this.nicknames = ['Jack', 'Jake', 'J-Dog'];
    }
    *[Symbol.iterator]() {
      yield* this.nicknames.entries();
    }
  }
  let p = new Person();
  for (let [idx, nickname] of p) {
    console.log(nickname);
  }
  </pre>
</details>

### 8.4.4 Inheritance

<details>
  <summary>在前面，我们介绍了使用ES5机制实现继承的繁琐细节。尽管ES6类继承使用了新的语法，但它仍然在背后使用__。</summary>
  <div>原型链</div>
</details>

#### 8.4.4.1 Inheritance Basics

<details>
  <summary>类通过__关键字实现继承。</summary>
  <div>extends</div>
</details>

#### 8.4.4.2 Constructors, HomeObjects, and super()

<details>
  <summary>在constructor函数内部使用__关键字来控制何时调用父类constructor函数。</summary>
  <div>super</div>
</details>

<details>
  <summary>在静态方法内部还可以使用__来调用在继承的类上定义的静态方法。例子：</summary>
  <div>super</div>
  <pre>
  class Vehicle {
    static identify() {
      console.log('vehicle');
    }
  }
  class Bus extends Vehicle {
    static identify() {
      super.identify();
    }
  }
  Bus.identify(); // vehicle
  </pre>
</details>

#### 8.4.4.3 Abstract Base Classes(抽象基类)

<details>
  <summary>如果你想定义一个只能被继承，不能直接实例化的类。可以使用__实现。例子：</summary>
  <div>new.target</div>
  <pre>
  class Foo {
    constructor() {
      if (new.target === Foo) {
        throw new Error('Foo cannot be directly instantiated');
      }
    }
  }
  </pre>
</details>

#### 8.4.4.5 Class Mixins(继承多个类)

<details>
  <summary>由于extends后可以接表达式，可以通过在表达式内链接多个mixin元素来实现__模式。</summary>
  <div>mixin</div>
</details>

<details>
  <summary>如果某个类Person需要合并mixins A，B和C，则您将以某种形式设计一个模式，该模式将B配置为从A继承，C配置为从B继承，__配置为从C继承。</summary>
  <div>Person</div>
</details>

<details>
  <summary>许多JavaScript框架，尤其是React，正在从mixin(混合)模式向组合结构转变（以将方法提取到单独的类和实用程序中的形式，并将这些零碎的部分合并而无需使用继承）。这反映了众所周知的“__”的软件原理，许多人认为该原理可提供出色的灵活性和代码设计。</summary>
  <div>在继承中进行组合</div>
</details>

# 第9章 PROXIES AND REFLECT

<details>
  <summary>无法通过__让ES6以前的编译器支持代理功能。</summary>
  <div>垫片(polyfill)</div>
</details>

<!-- <details> 没必要记
  <summary>Proxy 属于一种“元编程”（meta programming），即对__进行编程。</summary>
  <div>编程语言</div>
</details> -->

<!-- <details> 没必要记
  <summary>在__对象之前加了一层。</summary>
  <div>目标</div>
</details> -->

## 9.1 Proxy Fundamentals

### 9.1.1 Creating a Passthrough Proxy

<details>
  <summary>默认情况下，对代理对象执行的所有操作都将透明地传播到__对象。</summary>
  <div>目标</div>
</details>

<details>
  <summary>代理是使用__构造函数创建的。</summary>
  <div>Proxy</div>
</details>

### 9.1.2 Defining Traps(定义陷阱)

<details>
  <summary>每个处理器对象由零个，一个或多个__组成。</summary>
  <div>陷阱</div>
</details>

<details>
  <summary>“陷阱”一词是从操作系统领域借来的，陷阱是__流中的__中断。</summary>
  <div>程序</div>
  <div>同步</div>
</details>

### 9.1.3 Trap Parameters and the Reflect API

<details>
  <summary>每个处理器对象的__(target, property, receiver)方法用于拦截对象的读取属性操作。</summary>
  <div>get</div>
</details>

<details>
  <summary>陷阱方法的原始行为被包装在全局__对象上的同名方法中。例如：</summary>
  <div>Reflect</div>
  <pre>
  const handler = {
    get: Reflect.get
  };
  </pre>
</details>

<details>
  <summary>如果希望创建一个真正的直通代理来捕获所有可用方法并将每个方法转发给其对应的__ API函数，则不需要定义显式处理程序对象，例如：</summary>
  <div>Reflect</div>
  <pre>
  const target = {
    foo: 'bar'
  };
  const proxy = new Proxy(target, Reflect);
  </pre>
</details>

### 9.1.4 Trap Invariants

<details>
  <summary>如果目标对象具有不可配置和不可写的数据属性，则当您尝试从陷阱中返回与目标对象属性不同的值时，将引发__。</summary>
  <div>TypeError</div>
</details>

### 9.1.5 Revocable Proxies

<details>
  <summary>new Proxy（）创建的普通代理，目标对象和代理对象的关联将持续到__的生存期。</summary>
  <div>代理对象</div>
</details>

<details>
  <summary>如果想解除关联，可以使用Proxy的__方法创建代理对象。</summary>
  <div>revocable</div>
</details>

### 9.1.6 Utility of the Reflect API

#### 9.1.6.3 Supplanting Operators with First-Class Functions

<details>
  <summary>Reflect.__(target, propertyKey[, receiver]) 获取对象身上某个属性的值。例子：</summary>
  <div>get</div>
  <pre>
  var obj = { x: 1, y: 2 };
  Reflect.get(obj, "x"); // 1
  </pre>
</details>

<details>
  <summary>Reflect.__(target, propertyKey, value[, receiver]) 将值分配给属性的函数。返回一个__类型值。例子：</summary>
  <div>set</div>
  <div>Boolean</div>
  <pre>
  var obj = {};
  Reflect.set(obj, "prop", "value"); // true
  obj.prop; // "value"
  </pre>
</details>

<details>
  <summary>Reflect.__(target, propertyKey) 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。例子：</summary>
  <div>has</div>
  <pre>
  Reflect.has({x: 0}, "x"); // true
  </pre>
</details>

<details>
  <summary>Reflect.__(target, propertyKey) 作为函数的delete运算符，相当于执行 delete target[name]。例子：</summary>
  <div>deleteProperty</div>
  <pre>
  var obj = { x: 1, y: 2 };
  Reflect.deleteProperty(obj, "x"); // true
  obj; // { y: 2 }
  </pre>
</details>

<details>
  <summary>Reflect.__(target, argumentsList[, newTarget]) 对构造函数进行 new 操作，相当于执行 new target(...args)。</summary>
  <div>construct</div>
  <pre>
  function OneClass() {
      this.name = 'one';
  }

  function OtherClass() {
      this.name = 'other';
  }

  // 创建一个对象:
  var obj1 = Reflect.construct(OneClass, args, OtherClass);

  // 与上述方法等效:
  var obj2 = Object.create(OtherClass.prototype);
  OneClass.apply(obj2, args);
  </pre>
</details>

#### 9.1.6.4 Safe Function Application

<details>
  <summary>如果Function.prototype.apply方法可能被重写，为了避免重写导致错误，可以使用___.apply（myFunc，thisVal，argumentsList）。例子：</summary>
  <div>Reflect</div>
  <pre>
  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]); // "hello"
  </pre>
</details>

### 9.1.8 Proxy Considerations and Shortcomings

#### 9.1.8.1 ’this’ Inside a Proxy

<details>
  <summary>在代理对象调用方法时，__对象总是赋值到this，而不是代理对象。</summary>
  <div>目标</div>
</details>

#### 9.1.8.2 Proxies and Internal Slots

<details>
  <summary>一个典型的例子是日期类型。根据ECMAScript规范，在执行方法时，日期类型依赖于this值上名为[[NumberData]]的“__”的存在。因为内部插槽在代理上不存在，并且由于无法通过正常的get和set操作访问这些内部插槽值，否则代理可能会拦截并重定向到目标，因此该方法将抛出TypeError。</summary>
  <div>内部插槽(Internal Slots)</div>
</details>

## 9.2 Proxy Traps and Reflect Methods

<details>
  <summary>代理能够__13种不同的基本操作。</summary>
  <div>捕获</div>
</details>

### 9.2.1 get()

<details>
  <summary>从代理对象__的属性时，会调用get(target, property, receiver)陷阱。其对应的Reflect API方法是__（）。</summary>
  <div>读取</div>
  <div>Reflect.get</div>
</details>

### 9.2.2 set()

<details>
  <summary>给代理对象的属性分配值时，会调用set(target, property, value, receiver)陷阱。其对应的Reflect API方法是Reflect.set（）。</summary>
  <div>读取</div>
</details>

### 9.2.3 has()

<details>
  <summary>对代理对象使用 __运算符时，会调用has(target, propertyKey)陷阱。其对应的Reflect API方法是Reflect.has（）。</summary>
  <div>in</div>
</details>

<details>
  <summary>__语句也可以触发has()陷阱。</summary>
  <div>with</div>
</details>

### 9.2.4 defineProperty()

<details>
  <summary>Object.__()对代理对象使用时，会调用defineProperty(target, propertyKey, attributes)陷阱。其对应的Reflect API方法是Reflect.defineProperty（）。</summary>
  <div>defineProperty</div>
</details>

<details>
  <summary>静态方法 Reflect.defineProperty() 基本等同于 Object.defineProperty() 方法，唯一不同是返回 __ 值。</summary>
  <div>Boolean</div>
</details>

### 9.2.5 getOwnPropertyDescriptor()

<details>
  <summary>静态方法 Reflect.getOwnPropertyDescriptor() 等同于 Object.__() 方法。</summary>
  <div>getOwnPropertyDescriptor</div>
</details>

### 9.2.6 deleteProperty()

<details>
  <summary>对代理对象使用 __运算符时，会调用deleteProperty(target, propertyKey)陷阱。其对应的Reflect API方法是Reflect.deleteProperty（）。</summary>
  <div>delete</div>
</details>

### 9.2.7 ownKeys()

<details>
  <summary>Object.__()对代理对象使用时，会调用ownKeys(target)陷阱。其对应的Reflect API方法是Reflect.ownKeys（）。</summary>
  <div>keys</div>
</details>

### 9.2.8 getPrototypeOf()

<details>
  <summary>当读取代理对象的__时，会调用getPrototypeOf(target)陷阱。其对应的Reflect API方法是Reflect.getPrototypeOf()。</summary>
  <div>原型</div>
</details>

### 9.2.9 setPrototypeOf()

<details>
  <summary>Object.setPrototypeOf()对代理对象使用时，会调用setPrototypeOf(target, prototype)陷阱。其对应的Reflect API方法是Reflect.setPrototypeOf（）。</summary>
  <div>keys</div>
</details>

### 9.2.10 isExtensible()

<details>
  <summary>Object.__()对代理对象使用时，会调用isExtensible(target)陷阱。</summary>
  <div>isExtensible</div>
</details>

<details>
  <summary>Object.isExtensible() 方法判断一个对象是否是可__的（是否可以在它上面__）。</summary>
  <div>扩展</div>
  <div>添加新的属性</div>
</details>

### 9.2.11 preventExtensions()

<details>
  <summary>Object.__()对代理对象使用时，会调用preventExtensions(target)陷阱。</summary>
  <div>preventExtensions</div>
</details>

<details>
  <summary>Object.preventExtensions()方法让一个对象变为，也就是永远不能再添加新的属性。</summary>
  <div>不可扩展</div>
</details>

### 9.2.12 apply()

<details>
  <summary>代理对象中的方法被调用时，会调用__(target, thisArgument, argumentsList)陷阱。</summary>
  <div>apply</div>
</details>

### 9.2.13 construct()

<details>
  <summary>new 运算符用在代理对象时，会调用__(target, argumentsList[, newTarget])陷阱。</summary>
  <div>construct</div>
</details>

## 9.3 Proxy Patterns

### 9.3.1 Tracking Property Access

<details>
  <summary>可以通过Proxy可以实现对代理对象__访问的追踪。</summary>
  <div>属性</div>
</details>

### 9.3.2 Hidden Properties

<details>
  <summary>可以通过Proxy可以实现对代理对象指定属性的隐__。</summary>
  <div>藏</div>
</details>

### 9.3.3 Property Validation

<details>
  <summary>因为所有分配都必须通过__（）陷阱，所以您可以基于预期值的内容来允许或拒绝分配。</summary>
  <div>set</div>
</details>

### 9.3.4 Function and Constructor Parameter Validation

### 9.3.5 Data Binding and Observables

<details>
  <summary>可以通过Proxy可以实现__绑定和__模式</summary>
  <div>双向数据</div>
  <div>观察者</div>
</details>

## 9.4 Summary

<details>
  <summary>Proxy开启了__编程和抽象的全新领域。</summary>
  <div>元</div>
</details>

# 第10章 FUNCTIONS

<details>
  <summary>定义函数的方式有3中：__、__和__。</summary>
  <div>函数声明</div>
  <div>函数表达式</div>
  <div>Function构造函数</div>
</details>

<details>
  <summary>不建议使用Function构造函数语法定义函数，因为它会引起代码的双重解释（第一次是__的解释，第二次是对__的解释），因此会影响性能。</summary>
  <div>对常规ECMAScript代码</div>
  <div>传递给构造函数的字符串</div>
</details>

## 10.1 Arrow Functions

<details>
  <summary>箭头函数提供了更__语法。</summary>
  <div>简洁</div>
</details>

<details>
  <summary>如果只有__个参数，则箭头函数不需要括号。</summary>
  <div>一</div>
</details>

<details>
  <summary>如果箭头函数不使用花括号的话，只能使用__个表达式，__将隐式返回。</summary>
  <div>一</div>
  <div>该表达式的值</div>
</details>

<details>
  <summary>箭头函数中不允许使用__、__和__。不能作为__。</summary>
  <div>arguments</div>
  <div>super</div>
  <div>new.target</div>
  <div>构造函数(因为没有内部方法[[Construct]])</div>
</details>

<details>
  <summary>箭头函数对象没有__属性。</summary>
  <div>原型(prototype)</div>
</details>

<details>
  <summary>箭头函数执行上下文的`ThisBinding`为__。</summary>
  <div>undefined</div>
</details>

<details>
  <summary>=>被称作__箭头，->被称作__箭头。</summary>
  <div>胖</div>
  <div>廋</div>
</details>

<details>
  <summary>箭头函数和普通函数的区别：1)箭头函数的上下文没有 __、__、__、__。 2)箭头函数没有__型。</summary>
  <div>arguments</div>
  <div>super</div>
  <div>this</div>
  <div>new.target</div>
  <div>原</div>
</details>

## 10.2 Function Names

<details>
  <summary>函数名称类似于变量，都有一个对应的__，指针指向某个内存地址。这意味着一个函数可以有多个__。</summary>
  <div>指针</div>
  <div>名称</div>
</details>

<details>
  <summary>通过函数声明定义函数时，如果没有定义函数名称，则称这个函数为__函数。</summary>
  <div>匿名</div>
</details>

<details>
  <summary>如果函数是一个getter和setter或通过bind()实例化，则会在函数名前加一个对应的标识。例如：“bound foo” “get foo”</summary>
  <div>匿名</div>
</details>

## 10.3 Understanding Arguments(理解Arguments对象)

<details>
  <summary>ECMAScript中函数的参数在内部表示为__。例子：</summary>
  <div>数组</div>
  <pre>
  function foo(a,b) {
    // 相当于
    arguments = [{},1,'a',false];
    let [a,b] = arguments;
    //
    console.log(a); // {}
    console.log(b); // 1
  }
  foo({},1,'a',false);
  </pre>
</details>

<details>
  <summary>arguments对象的行为类似于数组（尽管它不是__的实例）。</summary>
  <div>Array</div>
</details>

<details>
  <summary>在严格模式下，arguments对象的值不再与函数的__之间共享。</summary>
  <div>实际形参</div>
</details>

<details>
  <summary>在严格模式下，arguments关键字被__会报SyntaxError。</summary>
  <div>赋值</div>
</details>

### 10.3.1 Arguments in Arrow Functions

<details>
  <summary>使用箭头符号定义函数时，无法使用__关键字访问传递给该函数的参数。 </summary>
  <div>arguments</div>
</details>

## 10.4 No Overloading(没有重载)

<details>
  <summary>重载：一个函数的有两个定义，也就是函数名相同，而__不同。</summary>
  <div>签名（接受的参数的类型和数量）</div>
</details>

## 10.5 Default Parameter Values

<details>
  <summary>函数默认参数允许在__或__被传入时使用默认形参。</summary>
  <div>没有值</div>
  <div>undefined</div>
</details>

<details>
  <summary>在函数被调用时，参数默认值会被解析，所以等号(=)后面是一个__。</summary>
  <div>表达式</div>
</details>

<details>
  <summary>默认参数可用于后面的默认参数吗?</summary>
  <div>是</div>
</details>

### 10.6.2 Rest Parameter

<details>
  <summary>可以使用展开运算符，将可变长度的形式参数范围组合到单个__中。</summary>
  <div>数组</div>
</details>

<details>
  <summary>由于rest参数的大小可变，因此您只能将其用作__一个形式参数。</summary>
  <div>最后</div>
</details>

## 10.7 Function Declarations versus Function Expressions(函数声明与函数表达式的比较)

<details>
  <summary>在对代码进行__时，JavaScript引擎会首先进行函数声明，并将其拉到__的顶部。</summary>
  <div>评估</div>
  <div>源树</div>
</details>

## 10.8 Functions as Values

## 10.9 Function Internals

<details>
  <summary>在ES5中，函数内部有两个特殊的对象__和__。ES6中新加了一个__属性。</summary>
  <div>arguments</div>
  <div>this</div>
  <div>new.target</div>
</details>

### 10.9.1 arguments

<details>
  <summary>arguments对象还具有一个名为__的属性，该属性是指向拥有arguments对象的函数的指针。</summary>
  <div>callee</div>
</details>

### 10.9.2 this

<details>
  <summary>执行上下文中的ThisBinding，是在__阶段才确定的。</summary>
  <div>执行</div>
</details>

<details>
  <summary>this的值为__值。</summary>
  <div>任何</div>
</details>

<details>
  <summary>绑定this: 分两种执行上下文，1)__执行上下文 2)__执行上下文。</summary>
  <div>全局</div>
  <div>函数</div>
</details>

<details>
  <summary>全局执行上下文: this的值为__。</summary>
  <div>全局对象</div>
</details>

<details>
  <summary>函数执行上下文，则取决于调用的方式：1)__调用 2)__调用 3)__调用 4)__调用。</summary>
  <div>new运算符</div>
  <div>apply和call</div>
  <div>作为对象方法</div>
  <div>其他</div>
</details>

<details>
  <summary>new运算符调用: this的值为__。</summary>
  <div>空对象</div>
</details>

<details>
  <summary>apply和call调用: this的值为__。</summary>
  <div>调用时传入的值</div>
</details>

<details>
  <summary>作为对象方法调用: this的值为__。</summary>
  <div>该对象</div>
</details>

<details>
  <summary>其他调用: 分严格模式和非严格模式。严格模式下this值为__；非严格模式下this值为__。</summary>
  <div>undefined</div>
  <div>全局对象</div>
</details>

<details>
  <summary>在箭头函数内部，this引用__的上下文对象。</summary>
  <div>定义箭头函数表达式</div>
</details>

### 10.9.4 new.target(ES6)

<details>
  <summary>__属性允许你检测函数或构造方法是否是通过new运算符被调用的。</summary>
  <div>new.target</div>
</details>

<details>
  <summary>在通过new运算符被初始化的函数或__中，new.target返回一个指向构造方法或函数的引用。在普通的函数调用中，new.target的值是__。</summary>
  <div>构造函数</div>
  <div>undefined</div>
</details>

## 10.10 Function Properties and Methods

<details>
  <summary>函数的length属性，是__参的数量。</summary>
  <div>形</div>
</details>

<details>
  <summary>有两种附加的函数方法：__（）和__（）。 这两种方法都使用特定的this值调用函数。</summary>
  <div>apply</div>
  <div>call</div>
</details>

<details>
  <summary>ES5定义了一个名为bind的方法。 bind（thisArg）方法创建一个新的函数实例，将__赋值给实例的this。</summary>
  <div>thisArg对象</div>
</details>

<details>
  <summary>bind方法实际是封装了__或__方法。</summary>
  <div>call</div>
  <div>apply</div>
</details>

## 10.12 Recursion

<details>
  <summary>为了避免变量的改变，导致递归函数内部无法访问自身，可以使用arguments对象的__方法，访问函数自身的指针。</summary>
  <div>callee</div>
</details>

<details>
  <summary>但是在__下，无法使用callee方法。可以通过“命名函数表达式”来替代callee。例子：</summary>
  <div>严格模式</div>
  <pre>
   const foo = function foo(num) {
     if (num > 0) {
       console.log(num);
       num--;
       foo(num)
     }
   }
   foo(10);
  </pre>
</details>

## 10.13 Tail Call Optimization(尾部调用优化,TCO)【薄弱】

<details>
  <summary>ES6 规范还引入了内存管理优化功能，该功能允许JavaScript引擎在满足某些条件时重用__。具体而言，这种优化适用于“尾部调用”，其中外部函数的返回值是内部函数的返回值。</summary>
  <div>栈帧</div>
</details>

<details>
  <summary>尾部调用优化的目的是__，尤其是深层递归。</summary>
  <div>节省内存</div>
</details>

<details>
  <summary>引擎认为代码符合__，则会自动优化修改代码。</summary>
  <div>尾部调用优化</div>
</details>

### 10.13.1 Tail Call Optimization Requirements

<details>
  <summary>在满足这4个条件时，引擎才会执行尾部调用优化。1.__; 2.__; 3.__; 4.__。例子：</summary>
  <div>1. 在严格模式下</div>
  <div>2. 外部函数的返回值是被调用的尾部调用函数</div>
  <div>3. 尾部调用函数返回后，无需进一步执行</div>
  <div>4. 尾部调用函数不是引用外部函数范围内的变量的闭包</div>
  <pre>
  function outerFunction() {
    return innerFunction(); // tail call
  }
  </pre>
</details>

<details>
  <summary>需要严格模式的原因是，非严格模式下函数允许使用f.caller，它是对外部函数的栈框架的引用。所以不可能进行优化。</summary>
  <div>尾部调用优化</div>
</details>

### 10.13.2 Coding for Tail Call Optimization

<details>
  <summary>尾部调用优化的实例(斐波那契)：</summary>
  <pre>
    // 未优化
    function fib(n) {
      if (n < 2) {
        return n;
      }
      debugger;
      return fib(n - 1) + fib(n - 2);
    }
    console.log(fib(43)); // 约计算8秒
    <!--  -->
    // 优化
    // base case
    function fib(n) {
      return fibImpl(0, 1, n);
    }
    // recursive case
    function fibImpl(a, b, n) {
      if (n === 0) {
        return a;
      }
      debugger;
      return fibImpl(b, a + b, n - 1);
    }
    console.log(fib(43)); // 约计算0.5秒
  </pre>
</details>

## 10.14 Closures(闭包)

<details>
  <summary>闭包是__的函数。</summary>
  <div>可以从另一个函数的作用域访问变量</div>
</details>

<details>
  <summary>调用函数时，将创建一个执行上下文，并创建其__。</summary>
  <div>作用域</div>
</details>

<details>
  <summary>闭包的用途：1)私有变量 2)__化</summary>
  <div>模块</div>
</details>

## 10.15 Immediately Invoked Function Expressions

<details>
  <summary>立即调用的__通常被称为立即调用的函数表达式（IIFE），常用来模拟块作用域。例子：</summary>
  <div>匿名函数</div>
  <pre>
  (function() {
    // block code here
  })();
  </pre>
</details>

# 第11章 PROMISES AND ASYNC FUNCTIONS

<details>
  <summary>ES 6引入了一个正式的Promise引用类型，允许优雅地定义和组织__行为。更高的版本还使用__和__关键字扩展了该语言以支持异步功能。</summary>
  <div>异步</div>
  <div>async</div>
  <div>await</div>
</details>

## 11.1 Introduction to Asynchronous Programming

<details>
  <summary>同步和异步行为之间的对偶是计算机科学中的基本概念，尤其是在__循环模型（如JavaScript）中。面对高延迟操作，异步行为不再需要针对更高的计算吞吐量进行优化。</summary>
  <div>单线程事件</div>
</details>

<details>
  <summary>异步操作不一定是计算密集型操作或高延迟操作。它可以在不需要__执行线程以等待异步行为发生的任何地方使用。</summary>
  <div>阻塞</div>
</details>

## 11.3 Async Functions

<details>
  <summary>异步函数是用__关键字声明的函数。ES__规范引入了对“async/await”的支持。</summary>
  <div>async</div>
  <div>7</div>
</details>

<details>
  <summary>异步函数是构造函数__的实例，其中允许__关键字。</summary>
  <div>AsyncFunction</div>
  <div>await</div>
</details>

<details>
  <summary>Promise有个不便之处：需要把其余部分的代码写到 promise handler 中。</summary>
  <div>AsyncFunction</div>
  <div>await</div>
</details>

### 11.3.1 Async Function Basics

<details>
  <summary>ES7的“async/await”旨在解决异步编程的__问题。</summary>
  <div>组织代码</div>
</details>

#### 11.3.1.1 The async keyword

<details>
  <summary>在异步函数中，无论使用return关键字返回的什么值都将通过__（）转换为promise对象。</summary>
  <div>Promise.resolve</div>
</details>

#### 11.3.1.2 The await keyword

<details>
  <summary>使用__关键字可以暂停执行程序，等待Promise完成后才继续。例子：</summary>
  <div>await</div>
  <pre>
    let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
    p.then((x) => console.log(x)); // 3
  </pre>
</details>

<details>
  <summary>使用Promise和使用async/await的区别，例子：</summary>
  <pre>
  function promiseFn() {
    let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
    p.then((x) => console.log(x)); // 3
  }
  promiseFn();
  <!--  -->
  async function asyncAwaitFn() {
    let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
    console.log(await p); // 3
  }
  asyncAwaitFn();
  </pre>
</details>

<details>
  <summary>关键字await将暂停异步函数的执行，从而释放JavaScript运行时的执行线程。此行为与生成器函数中的__关键字相同。</summary>
  <div>yield</div>
</details>

### 11.3.2 Halting and Resuming Execution

<details>
  <summary>充分理解await关键字的关键在于，它不仅要等待某个值可用。遇到await关键字时，JavaScript运行时可以准确跟踪暂停执行的位置。当await右侧的值准备就绪时，JavaScript运行时将在__上推送一个任务，该任务将异步恢复该函数的执行。例子：</summary>
  <div>消息队列</div>
  <pre>
  async function foo() {
    console.log(2);
    await null; // 暂停执行并将任务添加到消息队列中
    // JavaScript运行时，开始执行消息队列中的任务(task)。
    // 为await提供了null值（此处未使用）。
    console.log(4);
  }
  console.log(1);
  foo()
  console.log(3);
  // 同步执行线程完成。
  
  // 1
  // 2
  // 3
  // 4
  </pre>
</details>

<!-- <details>
  <summary>await与promise是两个单独的__任务。</summary>
  <div>消息队列</div>
</details> -->

### 11.3.3 Strategies for Async Functions(异步函数的策略)

#### 11.3.3.4 Stack Traces and Memory Management

## 11.4 Summary

<details>
  <summary>异步函数是将__范式应用于JavaScript函数的结果。</summary>
  <div>promise</div>
</details>

# 第12章 THE BROWSER OBJECT MODEL

## 12.1 The window Object

<details>
  <summary>BOM的核心是__对象，window对象表示浏览器的一个__。</summary>
  <div>window</div>
  <div>实例</div>
</details>

<details>
  <summary>window对象在浏览器中有双重用途，充当__和__的JavaScript接口。</summary>
  <div>浏览器窗口</div>
  <div>ECMAScript Global对象</div>
</details>

### 12.1.3 Window Position and Pixel Ratio

<details>
  <summary>要获取浏览器左边界到操作系统桌面左边界的水平距离(单位为像素)，可以通过__属性。</summary>
  <div>window.screenLeft</div>
</details>

<details>
  <summary>要获取浏览器上边界到操作系统桌面上边界的垂直距离(单位为像素)，可以通过__属性。</summary>
  <div>window.screenTop</div>
</details>

### 12.1.4 Window Size

<details>
  <summary>要获取浏览器窗口的宽度(包括垂直滚动条)，可以通过__属性。</summary>
  <div>window.innerWidth</div>
</details>

<details>
  <summary>要获取浏览器窗口的高度(包括水平滚动条和工具栏)，可以通过__属性。</summary>
  <div>window.innerHeight</div>
</details>

<details>
  <summary>要获取页面视口的宽度(不包括垂直滚动条)，可以通过__属性。</summary>
  <div>document.documentElement.clientWidth</div>
</details>

<details>
  <summary>要获取页面视口的高度(不包括水平滚动条和工具栏)，可以通过__属性。</summary>
  <div>document.documentElement.clientHeight</div>
</details>

### 12.1.5 Window Viewport Position

<details>
  <summary>由于浏览器窗口通常不够大，无法一次显示整个渲染的文档，因此用户可以使用有限的视口在文档周围滚动。</summary>
  <div>document.documentElement.clientHeight</div>
</details>

<details>
  <summary>要获取页面视口左边界到浏览器左边界的水平距离(单位为像素)，可以通过__属性获取。</summary>
  <div>window.scrollX</div>
</details>

<details>
  <summary>要获取页面视口上边界到浏览器上边界的垂平距离(单位为像素)，可以通过__属性获取。</summary>
  <div>window.scrollY</div>
</details>

// 剩下的先忽略，先弄未知的

# 第13章 CLIENT DETECTION(客户端检测)【先略过】

# 第14章 THE DOCUMENT OBJECT MODEL【先略过】

<details>
  <summary>文档对象模型（DOM）是HTML和XML文档的__。</summary>
  <div>应用程序编程接口（API）</div>
</details>

先略过中间的章节

# 第17章 EVENTS(DOM事件)

<details>
  <summary>JavaScript与HTML的交互是通过__处理的。</summary>
  <div>事件</div>
</details>

<details>
  <summary>__程序，也就是事件触发时会被调用的函数。添加事件处理程序被称为__事件。这种模型在传统软件工程中被称为“__模式”</summary>
  <div>事件处理</div>
  <div>订阅</div>
  <div>观察者</div>
</details>

## 17.1 Event Flow

<details>
  <summary>事件流描述了页面上事件__的顺序。</summary>
  <div>触发</div>
</details>

### 17.1.1 Event Bubbling(事件冒泡)

<details>
  <summary>IE浏览器的事件流称为事件冒泡，事件始于__。例子：</summary>
  <div>最具体的元素（文档树中可能的最深点）</div>
  <pre>div -> body -> html -> document</pre>
</details>

### 17.1.2 Event Capturing(事件捕获)

<details>
  <summary>网景浏览器的事件流称为事件捕获，事件始于__。例子：</summary>
  <div>最外层祖先元素</div>
  <pre>document -> html -> body -> div</pre>
</details>

### 17.1.3 DOM Event Flow

<details>
  <summary>DOM2级事件指定的事件流具有三个阶段，先后为：__、__和__。</summary>
  <div>捕获</div>
  <div>目标</div>
  <div>冒泡</div>
</details>

## 17.2 Event Handlers(事件处理程序)

<details>
  <summary>订阅事件的方式有两种：__事件处理程序和__事件处理程序。</summary>
  <div>DOM0级</div>
  <div>DOM2级</div>
</details>

### 17.2.1 HTML Event Handlers

<details>
  <summary>HTML事件处理程序，例子：</summary>
  <pre>
  &lt;input type="button" value="提交" onclick="alert('Click')" />
  </pre>
</details>

### 17.2.2 DOM Level 0 Event Handlers

<details>
  <summary>DOM0级事件处理程序，例子：</summary>
  <pre>
  let btn = document.getElementById("myBtn");
  btn.onclick = function () {
    console.log("Clicked");
  };
  </pre>
</details>

<details>
  <summary>DOM0级事件处理程序和__事件处理程序实际是一个东西。单个事件只能添加一个DOM0级事件处理程序。</summary>
  <div>HTML</div>
</details>

<details>
  <summary>DOM0级事件处理程序不能通过__阶段触发。</summary>
  <div>捕获</div>
</details>

### 17.2.3 DOM Level 2 Event Handlers

<details>
  <summary>DOM2级事件处理程序，例子：</summary>
  <pre>
  let btn = document.getElementById("myBtn");
  btn.addEventListener("click", () => {
    console.log(this.id);
  }, false);
  </pre>
</details>

<details>
  <summary>当事件会处于“__阶段”时，会触发该元素（即事件目标）上的所有监听器，而不在乎这个监听器到底在注册时__参数值是true还是false。useCapture默认为__。</summary>
  <div>目标</div>
  <div>useCapture</div>
  <div>false</div>
</details>

## 17.3 The Event Object(事件对象)

### 17.3.1 The DOM Event Object

<details>
  <summary>无论DOM0级还是DOM2级都会将一个__传入事件处理程序中。</summary>
  <div>event对象</div>
</details>

<details open>
  <summary>解释以下“事件对象”的属性：</summary>
  <pre>
  1) bubbles
  2) cancelable
  3) currentTarget
  4) defaultPrevented
  5) detail
  6) eventPhase
  7) target
  8) trusted
  9) type
  </pre>
  <details>
    <summary>点击查看答案：</summary>
    <div>1) 事件是否冒泡</div>
    <div>2) 是否可以取消事件的默认行为</div>
    <div>3) 事件目标</div>
    <div>4) 为true表示已经调用了preventDefault()【DOM3】</div>
    <div>5) 与事件相关的细节</div>
    <div>6) 事件所处阶段</div>
    <div>7) 事件目标</div>
    <div>8) 为true表示事件对象是浏览器生成的</div>
    <div>9) 事件类型。如：click</div>
  </details>
</details>

<details open>
  <summary>解释以下“事件对象”的方法：</summary>
  <pre>
  1) preventDefault
  2) stopImmediatePropagation
  3) stopPropagation
  </pre>
  <details>
    <summary>点击查看答案：</summary>
    <div>1) 取消事件的默认行为。如果cancelable是true，则可以使用这个方法。</div>
    <div>2) 取消事件的进一步捕获或冒泡，同时阻止任何事件处理程序被调用【DOM3】</div>
    <div>3) 取消事件的进一步捕获或冒泡。如果bubbles为true，则可以使用这个方法。</div>
  </details>
</details>

## 17.4 Event Types

<details>
  <summary>web浏览器中发生的事件有很多__。DOM3级事件规定了9类事件：1)__ 2)__ 3)__ 4)__ 5)__ 6)__ 7)__</summary>
  <div>UI事件：一般的浏览器事件，可能与BOM有一些交互。</div>
  <div>焦点事件</div>
  <div>鼠标事件</div>
  <div>滚轮事件</div>
  <div>文本事件</div>
  <div>键盘事件</div>
  <div>合成事件</div>
</details>

## 17.5 Memory and Performance

### 17.5.1 Event Delegation

<details>
  <summary>针对“事件处理程序过多”问题的解决方案就是__。</summary>
  <div>事件委托</div>
</details>

<details>
  <summary>事件委托利用了事件流的__。</summary>
  <div>事件冒泡</div>
</details>

## 17.6 Simulating Events(模拟事件)

<details>
  <summary>可以使用构造函数CustomEvent(typeArg, customEventInit)来创建事件。</summary>
  <div>事件委托</div>
</details>

<details>
  <summary>向一个指定的事件目标派发一个事件，可以用__(event)方法。</summary>
  <div>targetElement.dispatchEvent</div>
</details>

# 第18章 ANIMATION AND GRAPHICS WITH CANVAS(动画和图形与Canvas)

## 18.1 Using requestAnimationFrame

<details>
  <summary>长期以来，()方法一直是基于JavaScript的动画的最新技术。</summary>
  <div>setInterval</div>
</details>

<details>
  <summary>尽管CSS的transition和__使Web开发人员可以轻松地使用某些动画，但这些年来，基于JavaScript的动画领域几乎没有改变。</summary>
  <div>animation</div>
</details>

### 18.1.1 Early Animation Loops

<details>
  <summary>__()方法向浏览器指示正在发生动画，以便浏览器可以依次确定安排重新绘制的最佳方法。</summary>
  <div>requestAnimationFrame</div>
</details>

<details>
  <summary>大多数计算机的显示器的刷新率为__，意味着每秒刷新60次。浏览器会限制__频率，使之不超过显示器的刷新频率。</summary>
  <div>60Hz</div>
  <div>重绘</div>
</details>

<details>
  <summary>因此，最流畅的动画的最佳间隔是__ / __，即大约17ms。您将以这种速度看到最流畅的动画，因为您将更紧密地反映浏览器的功能。可能需要限制多个动画，以便在使用间隔为17ms的动画循环时不会太快完成。</summary>
  <div>1000ms</div>
  <div>60</div>
</details>

### 18.1.2 Problems with Intervals

<details>
  <summary>用setInterval来做动画有两个问题：1)__ 2)无法确保某一帧在下一次刷新前绘制完成。</summary>
  <div>无法获取刷新频率</div>
</details>

<details>
  <summary>保证何时能在浏览器中绘制__，是平滑动画的关键。</summary>
  <div>下一帧</div>
</details>

### 18.1.3 requestAnimationFrame

<details>
  <summary>requestAnimationFrame（callback）方法接受单个参数，该参数是在浏览器__之前调用的函数。例子：</summary>
  <div>重新绘制屏幕</div>
  <pre>
  let requestID = window.requestAnimationFrame(() => {
    console.log('Repaint!');
  });
  window.cancelAnimationFrame(requestID);
  </pre>
</details>

### 18.1.5 Performance Throttling with requestAnimationFrame

<details>
  <summary>由于requestAnimationFrame的回调函数的调用的频率是固定了，所以可以用来做一些__发生频率的事情。</summary>
  <div>限制</div>
</details>

// 此章剩下的先略过

# 第19章 SCRIPTING FORMS

<details>
  <summary>JavaScript的原始用途之一是将一些__处理职责转移到浏览器上，而不是依靠__来完成所有这些工作。</summary>
  <div>表单</div>
  <div>服务器</div>
</details>

## 19.1 Form Basics

<details>
  <summary>在HTML中，表单由form元素表示的，而在JavaScript中，表单对应是的__类型的对象。</summary>
  <div>HTMLFormElement</div>
</details>

<details>
  <summary>HTMLFormElement对象一些独有的重要属性的方法：1)__：所有表单元素的集合 2)reset() 3)submit()</summary>
  <div>elements</div>
</details>

// 此章剩下的先略过

# 第20章 JAVASCRIPT APIS

// 此章先略过

# 第21章 ERROR HANDLING AND DEBUGGING

## 21.2 Error Handling

### 21.2.1 The try-catch Statement

<details>
  <summary>第三版ECMA-262引入了try-catch语句，作为处理JavaScript中__的一种方式。与Java中的try-catch语句相同。</summary>
  <div>异常</div>
</details>

#### 21.2.1.1 The finally Clause

<details>
  <summary>无论如何，try-catch语句的可选__子句始终运行其代码。并且try-catch语句中的__语句也无法中断。</summary>
  <div>finally</div>
  <div>return</div>
</details>

// 此章剩下的先略过

# 第26章 MODULES

<details>
  <summary>历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的__，再用简单的方法__起来。这对开发大型的、复杂的项目形成了巨大障碍。</summary>
  <div>小文件</div>
  <div>拼装</div>
</details>

<details>
  <summary>在 ES6 之前，社区制定了一些模块加载方案，最主要的有 __ 和 __ 两种。前者用于__，后者用于浏览器。ES6 模块功能将成为浏览器和服务器通用的模块解决方案。</summary>
  <div>CommonJS</div>
  <div>AMD</div>
  <div>服务器</div>
</details>

## 26.1 Understanding the module pattern(了解模块化)

<details>
  <summary>模块化的中心思想：将逻辑分解为完全从代码其余部分封装的片段，允许每个片段显式定义其自身的哪些部分暴露于外部片段，并允许每个片段显式定义其需要执行的外部片段</summary>
  <div></div>
</details>

### 26.1.1 Module Identifiers

<details>
  <summary>所有模块系统的共同点是模块__的概念。模块系统本质上是键值实体，其中每个模块都有一个可用于引用它的标识符。在模拟模块系统的情况下，此令牌有时是，在本地实施模块系统的情况下，它可能是模块__的实际路径。</summary>
  <div>标识符</div>
  <div>字符串</div>
  <div>文件</div>
</details>

### 26.1.3 Module Loading

### 26.1.4 Entry Points(入口点)

<details>
  <summary>相互依赖的模块网络必须指定一个模块作为“__”，从此处开始执行路径。 </summary>
  <div>入口点</div>
</details>

<details>
  <summary>模块加载是“__的”，这意味着直到操作完成，才能继续执行。每个模块在其脚本有效负载交付给浏览器之后将逐步加载，并且其所有依赖项均已加载并__。</summary>
  <div>同步</div>
  <div>初始化</div>
</details>

### 26.1.5 Asynchronous Dependencies

<details>
  <summary>因为JavaScript是一种__步语言，所以通过允许JavaScript代码指示模块系统加载新模块，并在模块准备好后将其提供给回调，将其按需加载也很有用。</summary>
  <div>异</div>
</details>

### 26.1.8 Circular Dependencies

<details>
  <summary>包括CommonJS，AMD和ES6在内的所有模块系统都支持周期性依赖关系。在具有依赖周期的应用程序中，模块的加载__可能与您期望的不一样。 </summary>
  <div>顺序</div>
</details>

## 26.3 Working with pre-ES6 module loaders(ES6之前的模块加载器)

### 26.3.1 CommonJS

<details>
  <summary>CommonJS是以在__环境之外构建JavaScript生态系统为目标在2009年产生的项目。</summary>
  <div>浏览器</div>
</details>

<details>
  <summary>CommonJS 规范是为了解决 JavaScript 的__问题而定义的模块形式，可以使每个模块它自身的命名空间中执行。</summary>
  <div>作用域</div>
</details>

<details>
  <summary>node.js的模块系统，就是参照__规范实现的。</summary>
  <div>CommonJS</div>
</details>

<details>
  <summary>CommonJS规范加载模块是__步的。因为模块在__加载很快，所以不用异步。</summary>
  <div>本地</div>
</details>

<details>
  <summary>每个文件就是一个__。</summary>
  <div>模块</div>
</details>

<details>
  <summary>每个模块内部，都有一个__对象，代表当前模块。module对象是Module构造函数的实例。</summary>
  <div>module</div>
</details>

<details>
  <summary>module对象的属性主要有6个：1)id 2)filename 3)loaded 4)parent 5)children 6)exports。</summary>
  <div>1) id 模块标识符</div>
  <div>2) filename 模块文件名，绝对路径</div>
  <div>3) loaded 模块是否已加载</div>
  <div>4) parent 调用该模块的对象</div>
  <div>5) children 该模块依赖的其他模块</div>
  <div>6) exports 对外输出的对象</div>
</details>

<details>
  <summary>如果module.parent为__，则该模块为入口模块。</summary>
  <div>null</div>
</details>

<details>
  <summary>Node为每个模块提供一个__变量，指向module.exports。</summary>
  <div>exports</div>
</details>

<details>
  <summary>__方法用于加载模块。</summary>
  <div>require</div>
</details>

<details>
  <summary>模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了。</summary>
  <div>require</div>
</details>

### 26.3.2 Asynchronous Module Definition(AMD，异步模块定义)

<details>
  <summary>AMD是为了在浏览器加载模块定义的一种__步加载模块的规范。</summary>
  <div>异</div>
</details>

<details>
  <summary>require([module], __)加载模块语句不用与CommonJS的地方是，需要两个参数。</summary>
  <div>callback</div>
</details>

<details>
  <summary>Javascript库__.js实现了AMD规范</summary>
  <div>require</div>
</details>

<details>
  <summary>AMD是依赖前置，在定义模块的时候就要声明其依赖的模块。</summary>
  <div>require</div>
</details>

<details>
  <summary>AMD在加载模块完成后(看网络速度，哪个先下载下来，哪个先执行)就会__该模块，所有模块都加载执行完后会进入require的回调函数，执行主逻辑，这样的效果就是依赖模块的执行顺序和书写顺序不一定一致。</summary>
  <div>执行</div>
</details>

<details>
  <summary>模块通过 __(id?: String, dependencies?: String[], factory: Function|Object) 函数定义。</summary>
  <div>define</div>
</details>

### 26.3.3 Universal Module Definition(UMD，通用模块定义)

<details>
  <summary>UMD，就是一种javascript通用模块定义规范，让你的模块能在javascript所有运行环境(CommonJS, AMD, CMD)中发挥作用。</summary>
  <div>define</div>
</details>

### Common Module Definition(CMD)

<details>
  <summary>Javascript库__.js实现了AMD规范</summary>
  <div>Sea</div>
</details>

<details>
  <summary>CMD是就近依赖，只有在用到某个模块的时候再去__。</summary>
  <div>require</div>
</details>

<details>
  <summary>CMD加载完某个依赖模块后并不执行，只是__而已，在所有依赖模块加载完成后进入主逻辑，遇到__语句的时候才执行对应的模块，这样模块的执行顺序和__顺序是完全一致的。</summary>
  <div>下载</div>
  <div>require</div>
  <div>书写</div>
</details>

## 26.4 Working with ES6 modules

### 26.4.1 Module Tagging and Definition

<details>
  <summary>当script的type属性为__时，浏览器将把代码作为__执行，而不是传统的__执行。</summary>
  <div>module</div>
  <div>模块</div>
  <div>脚本</div>
</details>

### 26.4.2 Module Loading

<details>
  <summary>模块的执行顺序与__的相同，延迟执行直到文档被完全解析为止。</summary>
  <div>defer</div>
</details>

### 26.4.3 Module Behavior

<details>
  <summary>模块代码仅在__时执行。</summary>
  <div>加载</div>
</details>

<details>
  <summary>一个模块只能加载一次。模块是__例模式。</summary>
  <div>单</div>
</details>

<details>
  <summary>支持__依赖。</summary>
  <div>循环</div>
</details>

<details>
  <summary>ES6模块以__模式执行。</summary>
  <div>严格</div>
</details>

<details>
  <summary>ES6模块__享全局命名空间。</summary>
  <div>不共</div>
</details>

<details>
  <summary>ES6模块是__步加载的。</summary>
  <div>异</div>
</details>

<details>
  <summary>两种情况下将被浏览器视为模块：__和__。</summary>
  <div>type=module</div>
  <div>通过import语句加载</div>
</details>

### 26.4.4 Module Exports

<details>
  <summary>__关键字用于控制模块的哪些部分对外部模块可见。export始终返回一个对象。</summary>
  <div>export</div>
</details>

<details>
  <summary>export会被__到模块的顶部，必须声明在模块的最__层.</summary>
  <div>提升</div>
  <div>外</div>
</details>

<details>
  <summary>ES6模块中有两种 exports 导出方式：__和__。</summary>
  <div>export</div>
  <div>export default</div>
</details>

<details>
  <summary>导出时可以通过__关键字提供别名。</summary>
  <div>as(alias)</div>
</details>

<details>
  <summary>export const foo = 'foo';等效于：</summary>
  <pre>
  export {
    foo: foo,
  }
  </pre>
</details>

<details>
  <summary>const foo = 'foo'; export { foo }; export default foo;等效于：</summary>
  <pre>
  export {
    foo,
    default: foo,
  }
  </pre>
</details>

<details>
  <summary>const foo = 'foo'; export { foo as myFoo };等效于：</summary>
  <pre>
  export {
    myFoo: foo,
  }
  </pre>
</details>

### 26.4.5 Module Imports

<details>
  <summary>import会被__到模块的顶部。</summary>
  <div>提升</div>
</details>

<details>
  <summary>模块下载完后，会立即执行。</summary>
  <div>提升</div>
</details>

<details>
  <summary>由于import是__执行，就是创建执行上下文的 __阶段 执行。</summary>
  <div>静态</div>
  <div>创建</div>
</details>

<details>
  <summary>模块标识符可以是从__模块到该模块文件的相对路径，也可以是从基本路径到该模块文件的绝对路径。它必须是一个__字符串；标识符不能__计算。</summary>
  <div>当前</div>
  <div>纯</div>
  <div>动态</div>
</details>

<details>
  <summary>如果模块是通过模块标识符中的路径本地加载到浏览器中的，则需要__才能引用正确的文件。</summary>
  <div>.js扩展名</div>
</details>

<details>
  <summary>只想执行foo模块，不需要使用foo模块的export对象，可以这样子导入模块：__ './foo.js';</summary>
  <div>import</div>
</details>

<details>
  <summary>import foo from './fooModule.js';等效于：</summary>
  <pre>
  // import foo from './fooModule.js';
  Object.freeze(fooModule);
  const { default : foo } = fooModule;

  // 如果 fooModule.js 没有导出 default 会报错
  // The requested module './fooModule.js' does not provide an export named 'default'
  </pre>
</details>

<details>
  <summary>import a, * as b './foo.js';等效于：</summary>
  <pre>
  Object.freeze(foo);
  const { default: a } = foo;
  const b = foo;
  </pre>
</details>

#### import() 动态导入

<details>
  <summary>import()返回一个 __ 对象。</summary>
  <div>Promise</div>
</details>

<details>
  <summary>import()函数不仅仅用在模块，非模块的__也可以使用。</summary>
  <div>脚本</div>
</details>

### 26.4.6 Module Passthrough Exports

<details>
  <summary>如果想把导入的模块，在直接导出。可以使用`export __ './foo.js';`</summary>
  <div>* from</div>
</details>

### 26.4.7 Worker Modules

// 不理解 Worker 是干嘛的

### 26.4.8 Backwards Compatibility

<details>
  <summary>为了兼容不支持模块的浏览器，可以在 script 的 __ 属性。例子：</summary>
  <div>nomodule</div>
  <pre>
  // Modern browser will execute this
  // Legacy browser will not execute this
  &lt;script type="module" src="module.js"></script>
  <!--  -->
  // Modern browser will not execute this
  // Legacy browser will execute this
  &lt;script nomodule src="script.js"></script>
  </pre>
</details>

# 第27章 WORKERS

<details>
  <summary>这种单线程范例具有固有的局限性，因为它阻止了在可以将工作委派给单独的线程或进程的语言中可行的编程模式。</summary>
  <div></div>
</details>

<details>
  <summary>其中存在工作者的核心价值主张：允许主执行线程将工作委托给单独的实体，而无需更改现有的单线程模型。</summary>
  <div></div>
</details>

## 27.1 Introduction to Workers

<details>
  <summary>单个JavaScript环境本质上是在主机操作系统内部运行的虚拟化环境。浏览器中的每个打开页面都分配有自己的环境。沙盒化。</summary>
  <div></div>
</details>

<details>
  <summary>使用workers，浏览器可以分配与原始页面环境完全分开的第二个子环境。该子环境可以避免与依赖单线程的结构（例如DOM）进行交互，但可以自由地与父环境__行执行代码。</summary>
  <div>并</div>
</details>

### 27.1.1 Comparing Worker and Thread(对比 运行者 和 线程)

<details>
  <summary>运行者和线程的共同点：1) Worker被实现为实际线程。 2) Worker并行执行。 3) Worker可以共享一些内存。</summary>
  <div></div>
</details>

<details>
  <summary>运行者和线程的不同点：1) Worker不共享所有内存。 2) Worker线程不一定是同一进程的一部分。 3) Worker线程的创建成本更高。</summary>
  <div></div>
</details>

<details>
  <summary>什么时候使用 worker ：Worker相对较重，不打算大量使用。例如，为四百万像素图像的每个像素启动一个worker是不合适的。通常用在：预计worker寿命长，启动性能成本高以及每实例内存成本高。</summary>
  <div></div>
</details>

### 27.1.2 Types of Workers

<details>
  <summary>worker 主要有三种类型：1) __ Web Worker。 2) __ Web Worker。 3) __ Worker。</summary>
  <div>Dedicated</div>
  <div>Shared</div>
  <div>Service</div>
</details>

#### 27.1.2.1 Dedicated Web Worker

<details>
  <summary>专用的 Web worker，通常仅称为专用的worker，web worker或只是worker，是一种实用工具，它允许脚本生成单独的JavaScript__程并将任务委托给它。 顾名思义，专用的worker只能由产生它的页面访问。</summary>
  <div>线</div>
</details>

#### 27.1.2.2 Shared Web Worker

<details>
  <summary>共享的Web worker的行为非常类似于专用的worker。主要区别在于可以跨多个上下文（包括不同的页面）访问__的worker。</summary>
  <div>共享</div>
</details>

#### 27.1.2.3 Service Worker

<details>
  <summary>它的主要目的是充当网络请求仲裁程序，能够拦截，重定向和修改由页面调度的__。</summary>
  <div>请求</div>
</details>

// Worker 挺重要 但先放一放

# 第28章 BEST PRACTICES

// 此章先略过
