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
      <summary>11.1-03.02 ID为“myDiv”的元素。</summary>
      <div>document.querySelectorAll('#myDiv')</div>
      <div>document.querySelectorAll('[id="myDiv"]')</div>
    </details>
    <details>
      <summary>11.1-03.03 类为selected的元素。</summary>
      <div>document.querySelectorAll('.selected')</div>
      <div>document.querySelectorAll('[class="selected"]')</div>
    </details>
    <details>
      <summary>11.1-03.04 类为“button”的img元素。</summary>
      <div>document.querySelectorAll('img.button')</div>
    </details>
    <details>
      <summary>11.1-03.05 div元素下标签名为span的子元素。</summary>
      <div>document.querySelectorAll('div > span')</div>
    </details>
    <details>
      <summary>11.1-03.06 div元素下的span元素。</summary>
      <div>document.querySelectorAll('div span')</div>
    </details>
    <details>
      <summary>11.1-03.07 a元素中属性名为target的元素。</summary>
      <div>document.querySelectorAll('a[target]')</div>
    </details>
    <details>
      <summary>11.1-03.08 p元素中属性名为id，值为p1的元素。</summary>
      <div>document.querySelectorAll('p[id="p1"]')</div>
      <div>document.querySelectorAll('p#p1')</div>
    </details>
    <details>
      <summary>11.1-03.09 p元素中存在属性名为id，值为p开头的元素。</summary>
      <div>document.querySelectorAll('p[id^="p"]')</div>
    </details>
    <details>
      <summary>11.1-03.10 p元素中存在属性名为id，值为p结尾的元素。</summary>
      <div>document.querySelectorAll('p[id$="p"]')</div>
    </details>
    <details>
      <summary>11.1-03.11 p元素中存在属性名为id，值含有p的元素。</summary>
      <div>document.querySelectorAll('p[id*="p"]')</div>
    </details>
    <details>
      <summary>11.1-03.12 p元素中存在属性名为id，值为p；属性名为class，值为classname的元素。</summary>
      <div>document.querySelectorAll('p[id*="p"][class="classname"]')</div>
    </details>
    <details>
      <summary>11.1-03.13 div元素和span元素。</summary>
      <div>document.querySelectorAll('div, span')</div>
    </details>
    <details>
      <summary>11.1-03.14 div元素之后相邻siblings元素，名为span的元素。</summary>
      <div>document.querySelectorAll('div+span')</div>
    </details>
    <details>
      <summary>11.1-03.15 div元素之后的siblings元素中名为span的元素。</summary>
      <div>document.querySelectorAll('div~span')</div>
    </details>
    <details>
      <summary>11.1-03.16 所有元素。</summary>
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
    <summary>11.3.1-02.01 所有类中含有“username”的元素</summary>
    <div>document.getElementsByClassName('username')</div>
  </details>
  <details>
    <summary>11.3.1-02.02 所有类中含有“username”和“current”的元素</summary>
    <div>document.getElementsByClassName('username current')</div>
  </details>
</details>

<details>
  <summary>11.3.1-03 getElementsByClassName返回的HTMLCollection是动态的吗？</summary>
  <div>是</div>
</details>
