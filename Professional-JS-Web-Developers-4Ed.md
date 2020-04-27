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
  <summary>标识符中的字母可以包括__字符</summary>
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
  <summary>Symbol.__ 用作一个对象的属性，属性值为方法。方法返回对象的Iterator(默认迭代器)。此默认迭代器属性必须引用迭代器__，该函数将在调用时产生一个新的__。方法通过__语句被自动调用。</summary>
  <div>iterator</div>
  <div>工厂函数</div>
  <div>迭代器</div>
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
  <summary>每个Object构造函数的实例都有1个属性和6个方法：_1_、_2_、_3_、_4_、_5_、_6_、_7_。</summary>
  <div>constructor</div>
  <div>hasOwnProperty(propertyName)</div>
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

<details>
  <summary>[拓展]aⁿ：a称为__数，ⁿ称为__数。</summary>
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
  <summary>for-in语句以__顺序遍历一个对象的除__以外的可__属性。</summary>
  <div>任意</div>
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
  <summary>每个执行上下文都有一个关联的__，所有已定义的变量和函数都存在于该对象上。该对象无法通过代码访问。</summary>
  <div>变量对象</div>
</details>

<details>
  <summary>每个函数调用都有其自己的执行上下文。每当代码__进入函数中时，函数的__就会被压入上下文堆栈。函数完成执行后，将函数上下文__堆栈，将__返回到先前执行的上下文。</summary>
  <div>执行流</div>
  <div>上下文</div>
  <div>弹出</div>
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
  <summary>但是还有其他方法可以扩展作用域链。某些语句会导致某个上下文临时添加到作用域链的__，然后在代码执行后将其__。分别是__和__。</summary>
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
  <summary>如果在当前上下文的__中没有搜索到对应的标识符，则将搜索下一个上下文的变量对象，直到找到全局上下文的变量对象，如果还没有的话会报错“xxx is not defined”</summary>
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
  <summary>当不再需要数据时，最好将值设置为__，以释放引用，这称为__。该建议主要适用于__值和__的属性。当__变量脱离上下文时，它们会自动取消引用。</summary>
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

## 5.1 The Date Type

<details>
  <summary>日期类型可以准确地表示UTC1970年1月1日之前或之后的__万年的日期。精确到__数。</summary>
  <div>28</div>
  <div>毫秒</div>
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
  <summary>ES6中新引入的__()方法用来判断一个数值是否是一个“__整数”。</summary>
  <div>Number.isSafeInteger</div>
  <div>安全</div>
</details>

## 5.4 The String Type

<details>
  <summary>字符串包含双字节字符（与仅使用一个字节的ASCII字符相反），每个字符被视为__个长度。</summary>
  <div>一</div>
</details>

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
  <summary>在ECMAScript中一个字符由__个bit组成，因为</summary>
  <div>16</div>
</details>

<details>
  <summary>JavaScript字符串使用两种Unicode编码的混合策略：UCS-2和UTF-16。对于__位（BMP）编码的字符，这两种编码实际上是相同的。</summary>
  <div>16</div>
</details>

<details>
  <summary>2个字节只能支持基本多语种平面(BMP，零平面)，为了引入更多的字符，Unicode定义了一种策略，该策略使用每个字符额外的__位来选择辅助平面或星体平面。</summary>
  <div>16</div>
</details>

<details>
  <summary>[延伸]辅助平面中的码点，在UTF-16中被编码为一对16比特长的__（__字节），称作__对。</summary>
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
  </pre>
  <div>BMP</div>
  <div>代理对</div>
</details>

<details>
  <summary>(2/2)所以存在一个问题：以上3中字符视觉和语义上都等价，但是 JavaScript 不能识别。然后Unicode通过提供四种正规形式来解决这一问题：NFC(默认)、NFD、NFKC、NFKD。通过__方法使用。</summary>
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
  <summary>ECMAScript提供了三种从__创建字符串值的方法：slice（），substr（）和substring（）。使用slice方法比较好用，用slice就行。</summary>
  <div>子字符串</div>
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
  <summary>如果想判断当前字符串是否已给定的子字符串开头，可以用__()方法。</summary>
  <div>String.prototype.startsWith</div>
</details>

<details>
  <summary>如果想判断当前字符串是否已给定的子字符串结尾，可以用__()方法。</summary>
  <div>String.prototype.endsWith</div>
</details>

### 5.4.7 The repeat() Method

<details>
  <summary>(ES6)将一个字符串复制多次，可以用__()方法。</summary>
  <div>String.prototype.repeat</div>
</details>

### 5.4.8 The padStart() and padEnd() Methods

<details>
  <summary>(ES6)用另一个字符串在填充到当前字符串(开头)至指定的长度，可以用__()方法。</summary>
  <div>String.prototype.padStart</div>
</details>

<details>
  <summary>(ES6)用另一个字符串在填充到当前字符串(尾部)至指定的长度，可以用__()方法。</summary>
  <div>String.prototype.padEnd</div>
</details>

### 5.4.9 String Iterators and Destructuring

<details>
  <summary>字符串原型公开了一个__方法，该方法允许通过单个字符进行迭代。</summary>
  <div>Symbol.iterator</div>
</details>

<details>
  <summary>字符串迭代器允许和__运算符进行相互操作。</summary>
  <div>解构</div>
</details>

## 5.5 Singleton Built-in Objects(单例内置对象)

<details>
  <summary>由ECMAScript实现提供的任何对象，独立于宿主环境，在执行ECMAScript程序开始时就已被__。例如：Object、Array、String、Global和Math。</summary>
  <div>实例化</div>
</details>

### 5.5.1 The Global Object

#### 5.5.1.1 URI-Encoding Methods

<details>
  <summary>因为URI支持全部Unicode，但是HTTP只支持ASCII码所以，URI需要编码，才可以传输。用特殊的UTF-8编码替换所有无效字符。可以使用__()和__()方法进行编码。</summary>
  <div>encodeURIComponent</div>
  <div>encodeURI</div>
</details>

<details>
  <summary>因为URI支持全部Unicode，但是HTTP只支持ASCII码所以，URI需要编码，才可以传输。用特殊的UTF-8编码替换所有无效字符。可以使用__()和__()方法进行编码。</summary>
  <div>encodeURIComponent</div>
  <div>encodeURI</div>
</details>

<details>
  <summary>两者都不编码字符：①__②数字和字母：A-Z a-z 0-9。</summary>
  <div>- _ . ! ~ * ' ( ) $</div>
</details>

<details>
  <summary>encodeURI不编码字符：①__②#。</summary>
  <div>; , / ? : @ & = + $</div>
</details>

#### 5.5.1.2 The eval() Method

<details>
  <summary>当解释器找到eval（）调用时，相当于在当前位置插入__，然后把代码插入到{}中。</summary>
  <div>{}</div>
</details>

<details>
  <summary>在严格模式下，无法在eval（）内部创建的__和__，外部无法访问。</summary>
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
  <summary>如果过想把64位浮点数转为32位，可以使用__()方法。</summary>
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
  <summary>大多数引用类型__都是 Object 类型的实例。创建 Object 实例的方式有两种：①new 操作符后跟 __；②__表示法。</summary>
  <div>值</div>
  <div>Object 构造函数</div>
  <div>对象字面量</div>
</details>

<details>
  <summary>[延伸]伪数组对象：拥有一个length属性的对象。</summary>
  <div>值</div>
  <div>Object 构造函数</div>
  <div>对象字面量</div>
</details>

## 6.2 The Array Type

### 6.2.1 Creating Arrays

<details>
  <summary>(ES6)如果把伪数组对象和可迭代对象转为数组，可以使用__()方法。</summary>
  <div>Array.from</div>
</details>

<details>
  <summary>(ES6)由于使用new Array()生成的数组，在浏览器中行为不一致，所以新加了个Array.__()方法用来创建数组。</summary>
  <div>of</div>
</details>

### 6.2.4 Detecting Arrays

<details>
  <summary>instanceof的一个问题是它假设只有一个全局执行上下文。没有考虑网页中有多个frame的情况。为此ECMAScript新增了一个__()方法用来解决这个问题。</summary>
  <div>Array.isArray</div>
</details>

### 6.2.5 Iterator Methods

<details>
  <summary>在ES6中，数组原型上公开了三种新方法，可以查看数组的内容：__（），__（）和__（）。将返回数组的__。</summary>
  <div>keys</div>
  <div>values</div>
  <div>entrys</div>
  <div>迭代器</div>
</details>

### 6.2.6 Copy and Fill Methods

<details>
  <summary>(ES6)如果想使用一个固定的值覆盖现有数组的元素，可以使用__()。</summary>
  <div>Array.prototype.fill</div>
</details>

<details>
  <summary>(ES6)如果想浅复制数组的一部分到自身的另一个位置，可以使用__()。</summary>
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
  <div>shift</div>
  <div>push</div>
</details>

### 6.2.10 Reordering Methods

<details>
  <summary>可以使用__()和__()方法使数组的元素的顺序重新排序。</summary>
  <div>reverse</div>
  <div>sort</div>
</details>

#### 6.2.12.2 Predicate Search

<details>
  <summary>__() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回__。</summary>
  <div>find</div>
  <div>undefined</div>
</details>

### 6.2.13 Iterative Methods

<details>
  <summary>ECMAScript为数组定义了五个迭代(iterator)方法：_1_、_2_、_3_、_4_、_5_。</summary>
  <div>every</div>
  <div>some</div>
  <div>map</div>
  <div>forEach</div>
  <div>filter</div>
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
  <div>reduce</div>
  <div>升</div>
  <div>reduceRight</div>
</details>

## 6.3 Typed Arrays <!-- TODO 不理解使用场景 -->

## 6.4 The Map Type(ES6)

<details>
  <summary>在ES6之前都是使用__来实现键/值存储。</summary>
  <div>Object</div>
</details>

<details>
  <summary>Mapb迭代时将以插入顺序的。__值可以用作键或值。</summary>
  <div>任何</div>
</details>

<details>
  <summary>ES2015中有四种相等算法: ①__；②__；③__；④__。</summary>
  <div>严格相等</div>
  <div>非严格相等</div>
  <div>同值相等</div>
  <div>零值相等</div>
</details>

<details>
  <summary>严格相等：NaN===NaN（值为__），+0===-0（值为__）。</summary>
  <div>false</div>
  <div>true</div>
</details>

<details>
  <summary>同值相等：__()方法可以实现。+0和-0__等，NaN和NaN__等。</summary>
  <div>Object.is</div>
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
  <div>意外</div>
  <div>类型</div>
  <div>顺序</div>
  <div>数量</div>
  <div>迭代</div>
  <div>性能</div>
</details>

<details>
  <summary>Map与Object相比在频繁__和__的场景下，效率会高于Object尤其是__操作。</summary>
  <div>添加</div>
  <div>删除</div>
  <div>删除</div>
</details>

<details>
  <summary>[延伸]“@@iterator”和“Symbol.iterator”的区别，一个意思，“@@iterator”只会出现在__中，“Symbol.iterator”只会出现__中。</summary>
  <div>文档</div>
  <div>代码</div>
</details>

<details>
  <summary>[延伸](1/2)Map有2个主要的缺点：①赋值和搜索操作都是 __(n) 的时间复杂度( n 是__的个数)，因为这两个操作都需要__全部整个数组来进行匹配。</summary>
  <div>O</div>
  <div>键值对</div>
  <div>遍历</div>
</details>

<details>
  <summary>(2/2)②另外一个缺点是可能会导致内存泄漏，因为数组会一直__着每个键和值。这种引用使得垃圾回收算法不能回收处理他们，即使没有其他(除了数组自身)任何引用存在。</summary>
  <div>引用</div>
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

## 6.6 The Set Type

<details>
  <summary>键的比较是基于 __ 算法。</summary>
  <div>零值相等(sameValueZero)</div>
</details>

<details>
  <summary>Set对象是__类型的__的集合，你可以按照__迭代它的元素。Set 中的元素是__的。</summary>
  <div>任何</div>
  <div>值</div>
  <div>插入的顺序</div>
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
  <summary>展开运算符可以将一个可__的对象在函数调用的位置展开成为多个__,或者在数组字面量中展开成多个数组__。</summary>
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
  <summary>展开语法和 __() 行为一致, 执行的都是__拷贝(遍历__层)。</summary>
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
  <summary>“迭代(iteration)”是指按__重复执行多次过程，并且通常期望终止。 ES6规范引入了两个高级功能（__器和__器），以实现更简洁，更快和更容易的迭代。</summary>
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
  <summary>ES5引入了Array.prototype.forEach，不理想的地方：①无法__迭代。②仅限于__。</summary>
  <div>提前终止</div>
  <div>数组</div>
</details>

## 7.2 The Iterator Pattern

### 7.2.1 The Iterable Protocol

<details>
  <summary>iterator(中文：__)是一个__。</summary>
  <div>迭代器</div>
  <div>对象</div>
</details>

<details>
  <summary>作为ECMAScript 2015的新增功能，迭代协议不是新的内置函数或语法，而是__。只需遵循一些约定，任何对象都可以实现这些协议。有两种协议：__协议和__协议。</summary>
  <div>协议</div>
  <div>可迭代(iterable)</div>
  <div>迭代器(iterator)</div>
</details>

<details>
  <summary>要成为可迭代对象，一个对象必须实现 @@__ 方法。这意味着对象（包括原型链）必须有一个键为 @@iterator 的属性，可通过常量 __ 访问该属性。</summary>
  <div>Symbol.iterator</div>
</details>

### 7.2.2 The Iterator Protocol

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
  <summary>可选的__（）方法允许指定仅在迭代器过早关闭时才会执行的行为。触发场景包括 for-of 时的__，__和__。</summary>
  <div>return</div>
  <div>break</div>
  <div>return</div>
  <div>throw</div>
</details>

## 7.3 Generators【薄弱】

<details>
  <summary>生成器对象是由一个 __ 函数返回的,并且它符合__协议和__协议。</summary>
  <div>generator(生成器)</div>
  <div>可迭代</div>
  <div>迭代器</div>
</details>

### 7.3.1 Generator Basics

<details>
  <summary>具有在单个函数中__和__代码执行的功能。</summary>
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

<details>
  <summary>默认迭代器是__引用的。</summary>
  <div>自</div>
  <pre>
  function* generatorFn() {}
  const g = generatorFn();
  console.log(g === g[Symbol.iterator]());
  </pre>
</details>

### 7.3.2 Interrupting Execution with “yield”

<details>
  <summary>遇到__关键字时，将暂停执行并保留功能的__状态。仅在__上调用next（）方法时，执行才会恢复。</summary>
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
  <summary>yield关键字可以输入和输出。输出值通过__(param)方法传入。</summary>
  <div>next</div>
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
  <summary>__（）和__（）方法是可用于将生成器对象关闭。</summary>
  <div>return</div>
  <div>throw</div>
</details>

#### 7.3.4.2 The throw() Method

<details>
  <summary>如果抛出的错误是在生成器函数中捕获的，则错误不会关闭生成器对象并且可以恢复执行。错误处理将__该yield。</summary>
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

<details>
  <summary>数据属性包含数据值的位置。从该位置可以__和__值。</summary>
  <div>读取</div>
  <div>写入</div>
</details>

<details>
  <summary>数据属性有4个描述其行为的特性：__、__、__、__。</summary>
  <div>[[Configurable]]</div>
  <div>[[Enumerable]]</div>
  <div>[[Writable]]</div>
  <div>[[Value]]</div>
</details>

<details>
  <summary>[[Configurable]]：表示能否通过__运算符 删除属性，能否从数据属性修改为__属性，默认为__。</summary>
  <div>delete</div>
  <div>访问器</div>
  <div>true</div>
</details>
