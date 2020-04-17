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
  <summary>除了自己创建的symbol，JavaScript还内建了一些在ECMAScript 6 之前没有暴露给开发者的symbol，它们代表了内部语言行为。它们可以通过Symbol的__访问。</summary>
  <div>属性</div>
</details>

<details>
  <summary>如果一个对象设置了Symbol.__属性，则这个对象就是异步可迭代对象。属性值是一个方法，该方法返回对象的默认__。该方法返回一个实现了__ API的对象。</summary>
  <div>asyncIterator</div>
  <div>AsyncIterator(异步迭代器)</div>
  <div>Iterator</div>
</details>

<details>
  <summary>[延伸]Symbol.asyncIterator是一个用于访问对象的__方法的内建符号。</summary>
  <div>@@asyncIterator</div>
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
  <summary>Symbol.__ 用作一个对象的属性，属性值为方法。方法返回对象的默认Iterator。方法通过__语句被调用。</summary>
  <div>iterator</div>
  <div>for-of循环</div>
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
  <summary>每个对象的实例都有7个属性和方法：_1_、_2_、_3_、_4_、_5_、_6_、_7_。</summary>
  <div>constructor</div>
  <div>hasOwnProperty()</div>
  <div>isPrototypeof(object)</div>
  <div>propertyIsEnumerable(propertyName)</div>
  <div>toLocaleString()</div>
  <div>toString()</div>
  <div>valueOf()</div>
</details>

<details>
  <summary>BOM和DOM等__对象(host objects)不归ECMA-262管，所以主机对象不一定从__继承。</summary>
  <div>主机</div>
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
  <div>-6</div>
</details>

<details>
  <summary>负数也存储在二进制代码中，但格式为二进制__码。</summary>
  <div>补</div>
</details>

<details>
  <summary>特殊值__和__，为按位运算的操作数时，都被视为等于0。</summary>
  <div>NaN</div>
  <div>Infinity</div>
</details>

<details>
  <summary>按运算符应用于非数字值时，会首先使用__函数将该值转换为数字。</summary>
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
  <summary>为什么25按位非运算(~)后的值为-26？25的8位二进制原码为0001 1001，然后按位非运算(就是__)，反码后的值(存在内存中)为1111 1111 1111 1111 1111 1111 1110 __，高取值时因为最位是1所以是负数，负数以二进制补码的格式存储在二进制代码中。__位减1，然后反码，注意反码不改变__位。</summary>
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
  <summary>逻辑NOT运算符由__号表示，，是__元运算符。</summary>
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
  <summary>取模（__）运算__号表示。</summary>
  <div>余数</div>
  <div>百分(%)</div>
</details>

### 3.5.5 Exponentiation Operator

<details>
  <summary>求幂运算__号表示。ES7新增了Math.__()，与其行为等价。</summary>
  <div>**</div>
  <div>pow</div>
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
  <summary>for...in语句以__顺序遍历一个对象的除__以外的可__属性。</summary>
  <div>任意</div>
  <div>Symbol</div>
  <div>枚举</div>
</details>

### 3.6.6 The for-of Statement

<details>
  <summary>for...of语句在可__对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句。</summary>
  <div>迭代</div>
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
  <summary>引用类型是可以由多个值组成的__。</summary>
  <div>对象</div>
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
  <summary>__运算符是确定变量是否为__类型的最佳方法。</summary>
  <div>typeof</div>
  <div>原始</div>
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
  <summary>每个执行上下文都有一个关联的__，所有已定义的变量和函数都存在于该对象上。该对象无法通过代码访问。</summary>
  <div>变量对象</div>
</details>

<details>
  <summary>每个函数调用都有其自己的执行上下文。每当代码__进入函数中时，函数的__就会被压入上下文堆栈。函数完成执行后，将函数__堆栈，将__返回到先前执行的上下文。</summary>
  <div>执行流</div>
  <div>上下文</div>
  <div>弹出</div>
  <div>控制权</div>
</details>

<details>
  <summary>通过在搜索__名称的导航范围链来解析标识符。搜索始终从链的开头开始，然后一直向后进行，直到找到标识符为止。（如果找不到标识符，通常会发生错误。）</summary>
  <div>标识符</div>
  <div>上下文</div>
  <div>弹出堆栈</div>
  <div>控制权</div>
</details>

### 4.2.1 Scope Chain Augmentation

<details>
  <summary>有3种执行上下文类型：__、__和__。</summary>
  <div>全局</div>
  <div>函数</div>
  <div>eval()</div>
</details>

<details>
  <summary>但是还有其他方法可以扩展作用域链。某些语句会导致临时添加到作用域链的__，然后在代码执行后将其__。分别是__和__。</summary>
  <div>前端</div>
  <div>删除</div>
  <div>try-catch语句中的catch块</div>
  <div>with语句</div>
</details>

#### 4.2.2.3 Constant Declaration Using const

<details>
  <summary>如果希望使整个对象不可变，则可以使用__()。</summary>
  <div>Object.freeze</div>
</details>

<details>
  <summary>由于const声明暗示该值是单一类型且不可变，因此JavaScript运行时编译器可以用其__替换其所有实例，而不用通过查找表执行变量查找。 Google Chrome V8引擎执行了这样的优化。</summary>
  <div>实际值</div>
</details>

#### 4.2.2.4 Identifier Lookup(标识符查找)

<details>
  <summary>如果当前上下文的__中没有搜索到对应的标识符，则将搜索下一个上下文的变量对象，直到找到全局上下文的变量对象，如果还没有的话会报错“xxx is not defined”</summary>
  <div>变量对象</div>
</details>

<details>
  <summary>[拓展]执行上下文(execution context)的数据（变量，函数声明和函数的形参）被存储为变量对象的__。每次进入上下文时都会__并用__填充变量对象，并且其更新发生在代码__阶段。</summary>
  <div>属性</div>
  <div>创建</div>
  <div>初始值</div>
  <div>执行</div>
</details>

## 4.3 Garbage Collection

<details>
  <summary>[拓展]像C语言这样的底层语言一般都有底层的__接口。相反，JavaScript是在创建变量时自动进行了分配内存，并且在不使用它们时“自动”释放。释放的过程称为__。</summary>
  <div>内存管理</div>
  <div>垃圾回收</div>
</details>

<details>
  <summary>JavaScript是一种自动管理内存的语言，这意味着__负责用于管理代码执行期间所需的内存。</summary>
  <div>执行环境</div>
</details>

### 4.3.1 Mark-and-Sweep

<details>
  <summary>JavaScript最受欢迎的垃圾收集形式称为__。</summary>
  <div>标记扫描(Mark-and-Sweep)</div>
</details>

### 4.3.4 Managing Memory

<details>
  <summary>当不再需要数据时，最好将值设置为__，以释放引用，这称为__。该建议主要适用于__值和__的属性。当__变量脱离上下文时，它们会自动取消引用。</summary>
  <div>null</div>
  <div>取消引用值</div>
  <div>全局</div>
  <div>全局对象</div>
  <div>局部</div>
</details>

## CHAPTER 8 对象，类和面向对象编程

<details>
  <summary>Q</summary>
  <div>A</div>
</details>
