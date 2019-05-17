<!-- markdownlint-disable MD033 -->

# JavaScript 高级程序设计 【习题与参考答案】

环境：chrome(74.0)

<!-- TODO
- HTMLCollection和NodeList区别
- NodeList 为动态会有性能问题？
 -->

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
  <div>"afterbegin"：在当前元素之下插入一个新的子元素或在第一个子元素之前插入一个新的子元素；</div>
  <div>"beforeend"：在当前元素之下插入一个新的子元素或在最后一个子元素之后插入一个新子元素；</div>
  <div>"afterend"：在当前元素之后插入一个紧邻的同辈元素；</div>
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
  <div>setProperty(propertyName, value, priority): 从样式中删除给定的属性，返回被删除的属性值</div>
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
  <div>CSSStyleSheet 类型表示的是样式表，包括通过&lt;link&gt;元素包含的样式表和&lt;style&gl;元素中定义的样式表。</div>
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
  <div>offsetHeight: 元素在垂直方向上占用的空间大小。</div>
  <div>offsetWidth: 元素在水平方向上占用的空间大小。</div>
  <div>offsetLeft: 元素的左外边框至包含元素的左内边框之间的像素距离。</div>
  <div>offsetTop: 元素的上外边框至包含元素的上内边框之间的像素距离。</div>
</details>
