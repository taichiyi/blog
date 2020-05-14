<!-- markdownlint-disable MD033 MD037 -->

# JavaScript 高级程序设计 第三版 【习题与参考答案】

环境：chrome(74.0)

<!-- TODO
- HTMLCollection和NodeList区别
- NodeList 为动态会有性能问题？
-->

## 10 DOM

## 10.1 节点层次

<details>
  <summary>10.1 Node对象的原型链</summary>
  <div>- Node -> EventTarget -> Object</div>
</details>

<details>
  <summary>10.1 HTMLElement对象的原型链</summary>
  <div>- HTMLElement -> Element -> Node</div>
</details>

<details>
  <summary>10.1 Text对象的原型链</summary>
  <div>- Text -> CharacterData -> Node</div>
</details>

<details>
  <summary>10.1 div元素的原型链</summary>
  <div>- HTMLDivElement -> HTMLElement</div>
</details>

<details>
  <summary>10.1 span元素的原型链</summary>
  <div>- HTMLSpanElement -> HTMLElement</div>
</details>

<details>
  <summary>10.1 p元素的原型链</summary>
  <div>- HTMLParagraphElement -> HTMLElement</div>
</details>

<details>
  <summary>10.1 script元素的原型链</summary>
  <div>- HTMLScriptElement -> HTMLElement</div>
</details>

## 11 DOM 扩展

## 11.1 选择符API

<details>
  <summary>11.1-01 selector API Level 1 有几个方法？没有找到匹配的元素分别返回什么？</summary>
  <div>- 2个</div>
  <div>- querySelector：null；querySelectorAll：空的NodeList数组 []</div>
</details>

<details>
  <summary>11.1-02 querySelectorAll返回的NodeList是动态的吗？</summary>
  <div>不是</div>
</details>

<details>
  <summary>11.1-03 请使用querySelectorAll完成以下查找：</summary>
    <details>
      <summary>11.1-03.01 body元素。</summary>
      <div>document.querySelector('body')</div>
    </details>
    <details>
      <summary>11.1-03.02 ID值等于“myDiv”的元素。</summary>
      <div>document.querySelectorAll('[id="myDiv"]')</div>
      <div>document.querySelectorAll('#myDiv')</div>
    </details>
    <details>
      <summary>11.1-03.04 类值等于selected的元素。</summary>
      <div>document.querySelectorAll('[class="selected"]')</div>
    </details>
    <details>
      <summary>11.1-03.05 类值包含selected的元素。</summary>
      <div>document.querySelectorAll('.selected')</div>
      <div>document.querySelectorAll('[class*="selected"]')</div>
    </details>
    <details>
      <summary>11.1-03.06 类值包含“button”的img元素。</summary>
      <div>document.querySelectorAll('img.button')</div>
    </details>
    <details>
      <summary>11.1-03.07 div元素下标签名为span的子元素。</summary>
      <div>document.querySelectorAll('div > span')</div>
    </details>
    <details>
      <summary>11.1-03.08 div元素下的span元素。</summary>
      <div>document.querySelectorAll('div span')</div>
    </details>
    <details>
      <summary>11.1-03.09 a元素中属性名为target的元素。</summary>
      <div>document.querySelectorAll('a[target]')</div>
    </details>
    <details>
      <summary>11.1-03.10 p元素中属性名为id，值等于p1的元素。</summary>
      <div>document.querySelectorAll('p[id="p1"]')</div>
      <div>document.querySelectorAll('p#p1')</div>
    </details>
    <details>
      <summary>11.1-03.11 p元素中存在属性名为id，值为p开头的元素。</summary>
      <div>document.querySelectorAll('p[id^="p"]')</div>
    </details>
    <details>
      <summary>11.1-03.12 p元素中存在属性名为id，值为p结尾的元素。</summary>
      <div>document.querySelectorAll('p[id$="p"]')</div>
    </details>
    <details>
      <summary>11.1-03.13 p元素中存在属性名为id，值包含p的元素。</summary>
      <div>document.querySelectorAll('p[id*="p"]')</div>
    </details>
    <details>
      <summary>11.1-03.14 p元素中存在属性名为id，值为包含"p"；属性名为class，值包含"classname"的元素。</summary>
      <div>document.querySelectorAll('p[id*="p"][class*="classname"]')</div>
    </details>
    <details>
      <summary>11.1-03.15 div元素和span元素。</summary>
      <div>document.querySelectorAll('div, span')</div>
    </details>
    <details>
      <summary>11.1-03.16 div元素之后相邻siblings元素，名为span的元素。</summary>
      <div>document.querySelectorAll('div+span')</div>
    </details>
    <details>
      <summary>11.1-03.17 div元素之后的siblings元素中名为span的元素。</summary>
      <div>document.querySelectorAll('div~span')</div>
    </details>
    <details>
      <summary>11.1-03.18 所有元素。</summary>
      <div>document.querySelectorAll('*')</div>
    </details>
</details>

## 11.2 元素遍历

<details>
  <summary>11.2-01 Element Traversal(元素遍历) API 为DOM元素新添加了哪几个属性？是否包括文本和注释节点？各自的意思</summary>
  <div>: 5个</div>
  <div>: 不包括文本和注释节点</div>
  <div>- childElementCount: 返回子元素（不包括文本和注释节点）的个数</div>
  <div>- firstElementChild: 指向第一个子元素；firstChild的元素版。</div>
  <div>- lastElementChild: 指向最后一个子元素；lastChild的元素版。</div>
  <div>- previousElementSibling: 指向前一个同辈元素；previousSibling的元素版。</div>
  <div>- nextElementSibling: 指向后一个同辈元素；nextSibling的元素版。</div>
</details>

## 11.3 HTML5

### 11.3.1 与类相关的扩充

<details>
  <summary>11.3.1-01 getElementsByClassName 参数与返回值</summary>
  <div>参数：一个包含一或多个类名的字符串</div>
  <div>返回值: HTMLCollection</div>
</details>

<details>
  <summary>11.3.1-02 请使用getElementsByClassName完成以下查找：</summary>
  <details>
    <summary>11.3.1-02.01 所有类中包含“username”的元素</summary>
    <div>document.getElementsByClassName('username')</div>
  </details>
  <details>
    <summary>11.3.1-02.02 所有类中包含“username”和“current”的元素</summary>
    <div>document.getElementsByClassName('username current')</div>
  </details>
</details>

<details>
  <summary>11.3.1-03 getElementsByClassName返回的HTMLCollection是动态的吗？</summary>
  <div>是</div>
</details>

<details>
  <summary>11.3.1-04 HTML5 新增了一种操作类名的方式，这个方式是什么？这种操作类名的方式有几种方法？各方法的意义</summary>
  <div>这个方式是为所有元素添加一个属性，属性名为classList，值为新集合类型DOMTokenList的实例（类数组）。</div>
  <div>add(value): 将给定的字符串值添加到列表中。如果值已存在，就不添加了。</div>
  <div>contains(value): 表示列表中是否存在给定的值，如果存在则返回true，否则返回false。</div>
  <div>remove(value): 从列表中删除给定的字符串。</div>
  <div>toggle(value): 如果列表中已存在给定的值，删除它；如果不存在，添加它。</div>
</details>

<details>
  <summary>11.3.1-05 已知一个元素赋给了名为div的变量，该元素的class为bd。此时需要添加一个名为disabled的类，列出可能的方式。</summary>
  <div>1:</div>
  <div>var classNames = div.className.split(/\s+/);</div>
  <div>classNames.push('disabled')</div>
  <div>div.classNames = classNames.join(' ')</div>
  <div>2:</div>
  <div>div.classList.add('disabled')</div>
</details>

### 11.3.2 焦点管理

<details>
  <summary>11.3.2-01 怎么得到DOM中当前获取焦点的元素？</summary>
  <div>document.activeElement</div>
</details>

<details>
  <summary>11.3.2-02 如何通过JavaScript让可获取焦点的元素获取焦点？</summary>
  <div>element.focus()</div>
</details>

<details>
  <summary>11.3.2-03 如何判断否个元素获取了焦点？</summary>
  <div>element.hasFocus()</div>
</details>

### 11.3.3 HTMLDocument 的变化

<details>
  <summary>11.3.3-01 介绍一下HTML5 HTMLDocument的拓展属性readyState</summary>
  <div>Document的readyState属性有两个可能的值：</div>
  <div>- loading: 正在加载文档</div>
  <div>- complete: 已加载完文档</div>
  <div>一般document.readyState会借助onload事件使用</div>
</details>

<details>
  <summary>11.3.3-02 介绍一下HTML5 新增的一个获取head元素的方式</summary>
  <div>document.head</div>
  <div>在此之前会使用：document.getElementsByTagName('head')[0]</div>
</details>

### 11.3.5 自定义数据属性

<details>
  <summary>11.3.5-01 HTML5中可以为元素添加非标准(自定义)属性，是添加前缀吗？什么前缀？</summary>
  <div>data-</div>
</details>

<details>
  <summary>11.3.5-02 可以通过元素的哪个属性名来访问元素自定义属性的集合？该属性值是哪个对象的实例？</summary>
  <div>属性名：dataset</div>
  <div>属性值对象：DOMStringMap</div>
</details>

<details>
  <summary>11.3.5-03 如何获取div元素自定义属性"myname"的值？</summary>
  <div>var myName = div.dataset.myname</div>
</details>

<details>
  <summary>11.3.5-04 如何设置div元素自定义属性"myname"的值？</summary>
  <div>div.dataset.myname = "taichiyi"</div>
</details>

### 11.3.6 插入标记

<details>
  <summary>11.3.6-01 介绍一下元素的innerHTML属性。有几种模式？分别代表什么含义？</summary>
  <div>背景：</div>
  <div>给文档插入大量新HTML标记的情况下，通过DOM操作非常麻烦。</div>
  <div>读模式：innerHTML属性返回与调用元素的所有子节点（包括元素、注释和文本节点）对应的HTML标记。</div>
  <div>写模式：innerHTML会根据指定的值创建新的DOM树，然后用这个DOM树完全替换原先所有子节点。</div>
</details>

<details>
  <summary>11.3.6-02 介绍一下元素的outerHTML属性的读、写模式。</summary>
  <div>读模式：outerHTML返回调用它的元素及所有子节点的HTML标签。</div>
  <div>写模式：outerHTML会根据指定的HTML字符串创建新的DOM子树，然后用这个DOM字数完全替换调用元素。</div>
</details>

<details>
  <summary>11.3.6-03 元素的insertAdjacentHTML方法，各个参数的意义？第一个参数的所有枚举？</summary>
  <div>一参：插入位置；</div>
  <div>"beforebegin"：在当前元素之前插入一个紧邻的同辈元素；</div>
  <div>"afterend"：在当前元素之后插入一个紧邻的同辈元素；</div>
  <div>"afterbegin"：在当前元素之下插入一个新的子元素或在第一个子元素之前插入一个新的子元素；</div>
  <div>"beforeend"：在当前元素之下插入一个新的子元素或在最后一个子元素之后插入一个新子元素；</div>
  <div>二参：要插入的HTML文本；</div>
</details>

<details>
  <summary>11.3.6-04 插入标记，一般有哪些性能问题？</summary>
  <div>最好拼接好标记后一次性插入DOM，避免高频率将标记插入DOM</div>
</details>

### 11.3.7 scrollIntoView()方法

<details>
  <summary>11.3.7-01 scrollIntoView方法的参数有哪些？分别代表什么意思？</summary>
  <div>可传1个参数：true或false（默认true）</div>
  <div>ture: 窗口滚动会让调用元素的顶部与视口顶部尽可能平齐。</div>
  <div>false: 调用元素会尽可能全部出现在视口中（可能的话，调用元素的底部会与视口底部平齐）</div>
</details>

### 11.4 专有扩展

### 11.4.2 children 属性

<details>
  <summary>11.4.2 元素的children属性和childNodes属性有什么区别？children属性值是哪个对象的实例？</summary>
  <div>childNodes: 包含所有类型节点（文本和注释节点）</div>
  <div>children: 只包含元素节点</div>
  <div></div>
  <div>是HTMLCollection对象的实例</div>
</details>

### 11.4.3 contains()方法

<details>
  <summary>11.4.3 如何判断某个节点是不是另一个节点的后代？</summary>
  <div>document.documentElement.contains(document.body)</div>
  <div>返回值为boolean</div>
</details>

### 11.4.4 插入文本

<details>
  <summary>11.4.4-01 介绍一下innerText属性</summary>
  <div>innerText有两种模式：读模式和写模式</div>
  <div>- 读模式: 它会按照由浅入深的顺序，把子文档树种的所有文本节点的值拼接起来。</div>
  <div>- 写模式: 删除该元素的所有子节点，插入包含相应文本值的文本节点。</div>
</details>

## 12 DOM2 和 DOM3

### 12.2.1 访问元素的样式

<details>
  <summary>12.2.1-01 style属性是什么的实例？所有节点都支持style属性吗？各举一个支持和不支持的。</summary>
  <div>CSSStyleDeclaration的实例</div>
  <div>不是所有都支持：元素节点支持；文本节点不支持</div>
</details>

<details>
  <summary>12.2.1-02 介绍一下CSSStyleDeclaration对象的方法和属性</summary>
  <div>注意：元素的style属性不包含从其他样式表层叠来的样式信息，如果要获取层叠来的样式信息可以通过getComputedStyle()方法</div>
  <div>cssText: 获取style特性中的CSS代码。</div>
  <div>length: 元素style的CSS属性的数量</div>
  <div>getPropertyPriority(propertyName): 返回给定属性使用了！important设置，则返回"important"；否则返回空字符串。</div>
  <div>getPropertyValue(propertyName): 返回给定属性的字符串值</div>
  <div>removeProperty(propertyName): 从样式中删除给定的属性，返回被删除的属性值</div>
  <div>setProperty(propertyName, value, priority): 将给定的属性设置为相应的值，并加上优先权标志（"important"或一个空字符串）</div>
</details>

<details>
  <summary>12.2.1-03 介绍一下getComputedStyle</summary>
  <div>getComputedStyle可以获取元素层叠来的样式信息</div>
  <div>document.defaultView.getComputedStyle(element, 伪类元素字符串(例如：':after)): 返回一个CSSStyleDeclaration对象</div>
  <div>document.defaultView.getComputedStyle(document.querySelector('#p3')).backgroundColor</div>
</details>

### 12.2.2 操作样式表

<details>
  <summary>12.2.2-01 介绍一下"样式表"</summary>
  <div>CSSStyleSheet 类型表示的是样式表，包括通过&lt;link&gt;元素包含的样式表和&lt;style&gt;元素中定义的样式表。</div>
  <div>访问样式表的属性：.xxx</div>
  <div>样式表的属性：</div>
  <div>disabled: (boolean)表示样式表是否被禁用。</div>
  <div>href: 如果样式表是通过&lt;link&gt;包含的，则是样式表的URL；否则，是null。</div>
  <div>parentStyleSheet: 如果样式表是通过@import导入的，则非null；否则，是null。</div>
</details>

<details>
  <summary>12.2.2-02 访问"样式表"的方式?</summary>
  <div>document.querySelector('style').sheet</div>
  <div>document.styleSheets</div>
</details>

### 12.2.3 元素大小

<details>
  <summary>12.2.3-01 涉及到元素偏移量的属性有哪些？各自的意义</summary>
  <div>offsetHeight: 元素在垂直方向上占用的空间大小。包含padding, border</div>
  <div>offsetWidth: 元素在水平方向上占用的空间大小。包含padding, border</div>
  <div>offsetLeft: 元素的左外边框至包含元素的左内边框之间的像素距离。</div>
  <div>offsetTop: 元素的上外边框至包含元素的上内边框之间的像素距离。</div>
</details>

<details>
  <summary>12.2.3-02 元素的clientHeight包含padding吗？包含border吗？包含margin吗？</summary>
  <div>- 包含padding</div>
  <div>- 不包含border</div>
  <div>- 不包含margin</div>
</details>

<details>
  <summary>12.2.3-03 元素从里到外是什么顺序（content, padding, margin, border）</summary>
  <div>content -> padding -> border -> margin</div>
</details>

<details>
  <summary>12.2.3-04 html元素是不是自带滚动条？</summary>
  <div>是</div>
</details>

<details>
  <summary>12.2.3-05 介绍一下与滚动大小相关的属性</summary>
  <div>scrollHeight: 元素内容的实际高度。在没有滚动条的情况下，等于clientHeight.</div>
  <div>scrollWidth: 元素内容的实际宽度。在没有滚动条的情况下，等于clientWeight.</div>
  <div>scrollLeft: 被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素滚动位置。</div>
  <div>scrollTop: 被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素滚动位置。</div>
</details>

<details>
  <summary>12.2.3-06 介绍getBoundingClientRect()方法，的x,y,width,height</summary>
  <div>x,y,width,height</div>
</details>

## 13 事件

### 13.1 事件流

<details>
  <summary>13.1-01 JavaScript与HTML之间的交互是通过什么实现的?</summary>
  <div>事件</div>
</details>

<details>
  <summary>13.1-02 什么是事件冒泡？什么是事件捕获？</summary>
  <div>- 事件冒泡: 事件开始时由文档中嵌套层次最深的那个节点接收，然后逐级向上传播。</div>
  <div>- 事件捕获: 与事件冒泡相反。</div>
</details>

<details>
  <summary>13.1-03 “DOM2级事件”规定的事件流包括三个阶段，哪三个阶段？</summary>
  <div>事件捕获阶段、处于目标阶段和事件冒泡阶段</div>
</details>

### 13.2 事件处理程序

<details>
  <summary>13.2-01 事件处理程序有几种？</summary>
  <div>- HTML: &lt;input type="button" onclick="alert(123)" /&gt;</div>
  <div>- DOM0: </div>
  <div>var btn = document.getElementById("myBtn")</div>
  <div>btn.onclick = function() { alert(123) }</div>
  <div>- DOM2: </div>
  <div>var btn = document.getElementById("myBtn")</div>
  <div>btn.addEventListener('click', function() { alert(123) }, false)</div>
</details>

<details>
  <summary>13.2-02 addEventListener 同一个元素同一个事件可以添加多个吗？触发顺序？介绍下全部参数</summary>
  <div>- 可以</div>
  <div>- 先添加先触发</div>
  <div>- 参数：</div>
  <div>1参：事件名</div>
  <div>2参：作为事件处理程序的函数</div>
  <div>3参：boolean；默认为false；false: 在冒泡阶段调用事件处理函数。true: 在捕获阶段调用事件处理函数</div>
</details>

### 13.3 事件对象

<details>
  <summary>13.3-01 介绍一下“事件对象”的常用属性和方法</summary>
  <div>- bubbles: 事件是否冒泡</div>
  <div>- cancelable: 是否可以取消事件的默认行为</div>
  <div>- currentTarget: 当前正在处理事件的那个元素</div>
  <div>- defaultPrevented: 为true表示已经调用preventDefault（）(DOM3级)</div>
  <div>- preventDefault(): 取消事件的默认行为。如果cancelable是true才可以使用。</div>
  <div>- stopImmediatePropagation(): 取消事件的进一步捕获或冒泡，同时阻止任何事件处理程序被调用。(DOM3级)</div>
  <div>- stopPropagation(): 取消事件的进一步捕获或冒泡。如果bubbles为true才可以使用</div>
</details>

### 13.4 事件类型

<details>
  <summary>13.4-01 UI事件有哪些？及其意义</summary>
  <div>- load: 1.当页面加载完后在window上面触发；2.当图像加载完毕在&lt;img&gt;元素上触发；3.当嵌入的内容加载完毕时在&lt;object&gt;元素上面触发</div>
  <div>- unload: 卸载</div>
  <div>- abort: 在用户停止下载过程中，如果嵌入的内容没有加载完，则在&lt;object&gt;元素上触发</div>
  <div>- error: 1.当JavaScript错误时在window上面触发；2.当无法加载图像时在&lt;img&gt;元素上触发；3.当无法加载嵌入内容时在&lt;object&gt;元素上面触发</div>
  <div>- select: 用户选择文本框(input或textarea元素)触发</div>
  <div>- resize: 当窗口或框架的大小变化时在window或框架上面触发。</div>
  <div>- scroll: 当在用户滚动带滚动条的元素中的内容时。</div>
</details>

<details>
  <summary>13.4-02 焦点事件有哪些？及其意义</summary>
  <div>- blur: 在元素失去焦点时触发。不会冒泡。</div>
  <div>- focusout: 在元素失去焦点时触发。冒泡。</div>
  <div>- focus: 在元素获得焦点时触发。不会冒泡。</div>
  <div>- focusin: 在元素获得焦点时触发。冒泡。</div>
</details>

<details>
  <summary>13.4-03 当焦点从页面中的一个元素移动到另一个元素，focusin,blur,focusout,focus的触发顺序?</summary>
  <div>focusout -> focusin -> blur -> focus</div>
</details>

<details>
  <summary>13.4-04 鼠标事件有哪些？及其意义</summary>
  <div>- click: 单击事件</div>
  <div>- dblclick: 双击事件</div>
  <div>- mousedown: 按下任意鼠标按钮</div>
  <div>- mouseenter: 光标首次从元素外移动到元素范围之内时触发。不冒泡，后代元素不触发。</div>
  <div>- mouseleave: 在位于元素上方的鼠标光标移动到元素范围(包括子元素范围)之外时触发。不冒泡</div>
  <div>- mousemove: 当鼠标指针在元素内部移动时重复地触发。</div>
  <div>- mouseout: 当鼠标指针位于当前元素上方，然后用户将其移入另一个元素时触发(包括子元素)。</div>
  <div>- mouseover: 在鼠标指针位于当前元素外部，然后用户将其首次移入另一个元素（包括子元素）边界之内时触发。</div>
  <div>- mouseup: 用户释放鼠标按钮时触发。</div>
  <div>- mousewheel: 鼠标滚轮，触摸板。</div>
</details>

<details>
  <summary>13.4-05 鼠标事件哪些会冒泡？</summary>
  <div>- 除了mouseenter和mouseleave，所有鼠标事件都冒泡。</div>
</details>

<details>
  <summary>13.4-06 mousedown,mouseup,click,dblclick的关系</summary>
  <div>- 只有在同一个元素上相继触发 mousedown 和 mouseup 事件，才会触发 click 事件。只有触发两次 click 事件，才会触发 dblclick 事件。</div>
</details>

<details>
  <summary>13.4-07 键盘事件有哪些？及其意义</summary>
  <div>- keydown: 当用户按下键盘上任意键时触发，按住不放则重复触发。</div>
  <div>- keypress: 当用户按下键盘上字符键时触发，按住不放则重复触发。</div>
  <div>- keyup: 当用户释放键盘上字符键时触发。</div>
</details>

<details>
  <summary>13.4-07 文本事件有哪些？及其意义</summary>
  <div>- textInput: 在文本显示给用户前拦截文本。</div>
</details>

<details>
  <summary>13.4-08 什么是复合事件？</summary>
  <div>- 复合事件是DOM3级事件中新添加的一类事件，用于处理IME的输入序列。IME通常需要同时按住多个建，但最终只输入一个字符。</div>
</details>

<details>
  <summary>13.4-09 介绍一下DOM3的3个变动事件</summary>
  <div>- DOMSubtreeModified：在DOM结构中发生任何变化时触发。这个事件在其他任何事件触发后都会触发。</div>
  <div>- DOMNodeInserted：在一个节点作为子节点被插入到另一个节点中时触发。</div>
  <div>- DOMNodeRemoved：在节点从其父节点中被移除时触发。</div>
</details>

<details>
  <summary>13.4-10 介绍一下 HTML5 事件</summary>
  <div>- contextmenu : 监听鼠标右击事件，一般用于自定义菜单。</div>
  <div>- DOMContentLoaded : 事件在形成完整的 DOM 树之后就会触发，不理会图像、JavaScript CSS 文件或其他资源是否加载完毕。</div>
  <div>- readystatechange : document.readyState</div>
  <div>- pageshow，pagehide : 页面显示与隐藏</div>
  <div>- hashchange : “#”号后的所有字符串变动</div>
</details>

<details>
  <summary>13.4-11 介绍一下 touch 事件</summary>
  <div>- touchstart : </div>
  <div>- touchmove : </div>
  <div>- touchend : 当手指从屏幕上移开时触发</div>
  <div>- touchcancel : 系统停止跟踪触摸时触发</div>
</details>

<details>
  <summary>13.5.1 介绍一下事件委托。主要用来解决什么问题？问题的背景？解决方法的原理</summary>
  <div>- 是什么: 委托事件利用事件冒泡，只指定一个事件处理程序，就可以管理某一个类型的所有事件。</div>
  <div>- 解决的问题: "事件处理程序过多"</div>
  <div>- 背景: 添加到每一个DOM的事件处理函数都是对象都会占用内存 </div>
  <div>- 原理 : 事件冒泡</div>
</details>

<details>
  <summary>13.6.4 介绍一下自定义事件(模拟事件)</summary>
  <div>- 创建事件: const event = new CustomEvent('click')</div>
  <div>- 派发事件: obj.dispatchEvent(event)</div>
</details>

## 14 表单脚本

<details>
  <summary>14.1 介绍一下HTMLFormElement。包括不限于原型链，常用方法、属性</summary>
  <div>- 原型链: HTMLFormElement -> HTMLElement</div>
  <div>- 属性: </div>
  <div>     action: 接受请求的URL</div>
  <div>     elements: 表单中所有控件的集合</div>
  <div>     enctype: 请求的编码类型</div>
  <div>     method: 要发送HTTP请求类型</div>
  <div>- 方法: </div>
  <div>     reset: 将所有表单域充值为默认值</div>
  <div>     submit: 提交表单</div>
</details>

<details>
  <summary>14.1 HTMLFormContrlsCollection的原型链</summary>
  <div>- 原型链: HTMLFormContrlsCollection -> HTMLCollection -> Object</div>
</details>

<details>
  <summary>14.1.3 介绍一下表单共有的字段属性</summary>
  <div>- disable: 是否被禁用</div>
  <div>- form: 指向当前字段所属的表单指针</div>
  <div>- name: 字段名称</div>
  <div>- readOnly: 是否只读</div>
  <div>- tabIndex: 切换（tab）序号</div>
  <div>- type: 字段类型</div>
  <div>- value: 字段值</div>
</details>

## 15 使用Canvas 绘图

<details>
  <summary>Canvas是一个可以使用__来绘制图形的 HTML 元素</summary>
  <div>脚本</div>
</details>

<details>
  <summary>通过判断Canvas元素是否存在__方法，来判断是否支持Canvas</summary>
  <div>getContext</div>
</details>

<details>
  <summary>Canvas 的默认大小为__像素×__像素</summary>
  <div>300 150</div>
</details>

<details>
  <summary>如果绘制出来的图像是扭曲的, 尝试用__和__属性为 Canvas 明确规定宽高，而不是使用__。</summary>
  <div>width height CSS</div>
</details>

<details>
  <summary>如果浏览器不支持 Canvas 元素，则将会显示__和__标签中的子DOM内容。</summary>
  <div>开始 结束</div>
</details>

<details>
  <summary>Canvas 元素创造了一个__的画布，它公开了一个或多个__，其可以用来绘制和处理要展示的内容。</summary>
  <div>固定大小 绘图上下文对象</div>
</details>

## 15.2 2D上下文

<details>
  <summary>通过_A_方法获取 Canvas 元素的绘图上下文对象的引用。通过向_A_方法传入“__”获取 Canvas 元素的2D上下文对象的引用</summary>
  <div>A:getContext 2d</div>
</details>

<details>
  <summary>2D上下文的坐标原点位于 Canvas 元素的__角，坐标是（__,__）</summary>
  <div>左上 0 0</div>
</details>

### 15.2.2 绘制矩形

<details>
  <summary>__形是唯一一种可以直接在2D上下文中绘制的形状。</summary>
  <div>矩</div>
</details>

<details>
  <summary>与矩形有关的是方法 __()、__()、__()。这就三个方法都能接受4个参数：矩形的__、矩形的__、矩形的__和矩形的__。</summary>
  <div>fillRect strokeRect clearRect</div>
  <div>x坐标 y坐标 宽度 高度</div>
</details>

<details>
  <summary>在调用fillRect方法绘制矩形时，会根据当前上下文对象的__属性，来设置矩形的颜色。</summary>
  <div>fillStyle</div>
</details>

<details>
  <summary>在调用strokeRect方法绘制矩形时，会根据当前上下文对象的__属性，来设置矩形的颜色。</summary>
  <div>strokeStyle</div>
</details>

### 15.2.3 绘制路径

<details>
  <summary>2D上下文对象支持很多在画布上绘制路径的方法。绘制路径前，必须调用 __() 方法，表示__。</summary>
  <div>beginPath 开始绘制新路径</div>
</details>

<details>
  <summary>可以调用 __() 方法对路径填充；可以调用 __() 方法对路径描边；可以调用 __() 方法在路径上创建一个剪切区域。</summary>
  <div>fill stroke clip</div>
</details>

<details>
  <summary>__(x, y, radius, startAngle, endAngle, counterclockwise): 以(x,y)为圆心绘制一条弧线，弧线的半径为 __，起始和结束角度（用__表示）发布为 __ 和 __。最后一个参数表示起始角度和结束角度是否按__时针方向计算，值为false表示按__时针方向计算，默认为__(__时针)</summary>
  <div>arc radius 弧度 startAngle endAngle 逆 顺 false 顺</div>
</details>

<details>
  <summary>__(x1, y1, x2, y2, radius)：从上一个点开始绘制一条弧线，到(x2,y2)为止，并且以给定的半径 redius 穿过 (__,__)。</summary>
  <div>(注：这个方法比较复杂)arcTo x1 y1</div>
</details>

<details>
  <summary>__(c1x, c1y, c2x, c2y, x, y)：从上一点开始绘制一条曲线，到(x,y)为止，并且以(__,__)和(__,__)为控制点。</summary>
  <div>bezierCurveTo c1x c1y c2x c2y</div>
</details>

<details>
  <summary>__(x, y)：从上一个点开始绘制一条直线，到(x,y)为止。</summary>
  <div>lineTo</div>
</details>

<details>
  <summary>__(x, y)：将绘图游标移动到(x,y)，不画线。</summary>
  <div>moveTo</div>
</details>

<details>
  <summary>__(cx, cy, x, y)：从上一点开始绘制一条二次曲线，到(x,y)为止，并且以(cx,cy)作为控制点。</summary>
  <div>quadraticCurveTo</div>
</details>

<details>
  <summary>__(x, y, width, height)：从(x,y)开始绘制一个矩形，宽度和高度分别由width和height指定。这是方法绘制的是矩形__，而不是 strokeRect() 和 fillRect()所绘制的独立的形状。</summary>
  <div>rect 路径</div>
</details>

### 15.2.4 绘制文本

<details>
  <summary>绘制文本主要有两个方法：__()和__()。这两个方法都可以接收4个参数：__、__、__、__。这两个方法都以三个属性为基础：__、__、__。</summary>
  <div>fillText strokeText</div>
  <div>要绘制的文本字符串 x坐标 y坐标 最大像素宽度（可选）</div>
  <div>font textAlign textBaseline</div>
</details>

<details>
  <summary>2D 上下文提供了辅助确定文本大小的方法__()。这个方法接收一个参数，即要绘制的__。返回一个对象，对象有许多文本的度量属性。</summary>
  <div>measureText 文本</div>
</details>

### 15.2.5 变换

<details>
  <summary>__(angle)：围绕圆点旋转图像 angle 弧度。</summary>
  <div>rotate</div>
</details>

<details>
  <summary>__(scaleX, scaleY)：缩放图像，在x方向乘以 scaleX，在y方向乘以 scaleY。scaleX和scaleY的默认值都是__。</summary>
  <div>scale 1.0</div>
</details>

<details>
  <summary>__(x, y)：将坐标原点移动到(x,y)。执行这个变换之后，坐标(0,0)会变成之前由(x,y)表示的点。</summary>
  <div>translate</div>
</details>

<details>
  <summary>[需要线性代数的知识]transform(m1_1, m1_2, m2_1, m2_2, dx, dy)：直接修改变换矩阵。</summary>
  <div>需要线性代数的知识</div>
</details>

<details>
  <summary>[需要线性代数的知识]setTransform(m1_1, m1_2, m2_1, m2_2, dx, dy)：将变换矩阵重围为默认状态，然后再调用transform()。</summary>
  <div>需要线性代数的知识</div>
</details>

### 15.2.6 绘制画像

<details>
  <summary>2D绘图上下文对象内置了对图像的支持。如果你想把一幅图像绘制到画布上，可以使用 __()方法。可以使用__种不同的参数组合。</summary>
  <div>drawImage 三</div>
</details>

<details>
  <summary>（1）最简单的调用方式：drawImage方法的参数为:(_1_,_2_,_3_)。</summary>
  <div>1:img元素</div>
  <div>2:图像的x坐标</div>
  <div>3:图像的y坐标</div>
</details>

<details>
  <summary>（2）drawImage方法的参数为:(_1_,_2_,_3_,_4_,_5_)。</summary>
  <div>1:img元素</div>
  <div>2:图像的x坐标</div>
  <div>3:图像的y坐标</div>
  <div>4:图像的宽度</div>
  <div>5:图像的高度</div>
</details>

<details>
  <summary>（3）drawImage方法的参数为:(_1_,_2_,_3_,_4_,_5_,_6_,_7_,_8_,_9_)。6-9的参数如果填的话都要填。</summary>
  <div>1:img元素</div>
  <div>2:源图像的x坐标</div>
  <div>3:源图像的y坐标</div>
  <div>4:源图像的宽度</div>
  <div>5:源图像的高度</div>
  <div>6:目标图像的x坐标</div>
  <div>7:目标图像的y坐标</div>
  <div>8:目标图像的宽度</div>
  <div>9:目标图像的高度</div>
</details>

<details>
  <summary>drawImage() 方法传入 img元素外，还可以传入另一个__元素作为其第一个参数，这样，就可以把另一个画布内容绘制到当前画布上。</summary>
  <div>canvas</div>
</details>

<details>
  <summary>可用通过__()方法将canvas画布的内容导出为Data URLs，返回的图像的分辨率为__dpi。如果图像来自其他域，调通此方法会抛出错误。</summary>
  <div>toDataURL 96</div>
</details>

<details>
  <summary>canvas.toDataURL(type, encoderOptions);type为图片格式，默认为__。encoderOptions为压缩比例，取值范围是0-1，默认为__。</summary>
  <div>image/png 0.92</div>
</details>

<details>
  <summary>有3种情况会导致img元素无法绘制到画布上：(1)img元素的图片__；(2)img元素加载的图片为__文件；</summary>
  <div>没有加载完成</div>
  <div>本地</div>
</details>

### 15.2.7 阴影

<details>
  <summary>__: 用CSS颜色格式表示阴影颜色，默认为透明; __: 形状或路径x轴方向的阴影偏移量，默认为0; __: 形状或路径y轴方向的阴影偏移量，默认为0; __: 模糊的像素数，默认0，即不模糊。</summary>
  <div>shadowColor</div>
  <div>shadowOffsetX</div>
  <div>shadowOffsetY</div>
  <div>shadowBlur</div>
</details>

### 15.2.8 渐变

<details>
  <summary>要创建一个新的线性渐变，可以调用createLinearGradient()方法。这个方法接收4个参数: __坐标, __坐标, __坐标, __坐标。返回CanvasGradient对象。 </summary>
  <div>起点的x</div>
  <div>起点的y</div>
  <div>终点的x</div>
  <div>终点的y</div>
</details>

## 20 JSON

<details>
  <summary>20-1 JSON XML</summary>
  <div>- 都是结构化数据</div>
  <div>- XML的缺点：过于繁琐、冗长</div>
</details>

<details>
  <summary>20-2 JSON 可表示的数据类型</summary>
  <div>- 字符串、数值、布尔值和null</div>
</details>

## 23 离线应用与客户端存储

### 23.3 数据存储

<details>
  <summary>23.3.1.1 每个域的Cookie最大长度为多少字节</summary>
  <div>- 4095B</div>
</details>

<details>
  <summary>23.3.1.2 Cookie的名称是否区分大小写</summary>
  <div>- 不区分</div>
</details>

<details>
  <summary>23.3.1.2 Cookie由几块信息构成？分别介绍一下</summary>
  <div>- 名称: name</div>
  <div>- 域: domain</div>
  <div>- 路径: path</div>
  <div>- 失效时间: expires</div>
  <div>- 安全标致: secure</div>
</details>

<details>
  <summary>23.3.1.2 通过Set-Cookie让浏览器保存一个Cookie，名称为token、值为123456、域为wrox.com(包括多级子域名)、路径为不限、失效日期为2019年7月26日 07:10:24、使用SSL连接，代码该怎么写?</summary>
  <div>Set-Cookie: tolen=123456;domain=.wrox.com;path=/;expires=Fri 26-Jul-2019 07:10:24 GMT;Secure</div>
</details>

<details>
  <summary>23.3.3.2 sessionStorage的访问权限</summary>
  <div>sessionStorage对象绑定与某个服务器会话</div>
</details>
