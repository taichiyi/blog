<!-- markdownlint-disable MD033 -->

# JavaScript 高级程序设计 【习题与参考答案】

## 11.1 选择符API

<details>
  <summary>11.1-01 selector API Level 1 有几个方法？没有找到匹配的元素分别返回什么？</summary>
  <div>- 2个</div>
  <div>- querySelector：null；querySelectorAll：空的nodeList数组 []</div>
</details>

<details>
  <summary>11.1-02 querySelectorAll的返回值nodeList是动态的吗？</summary>
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
    </details>
    <details>
      <summary>11.1-03.03 类为selected的元素。</summary>
      <div>document.querySelectorAll('.selected')</div>
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
      <summary>11.1-03.14 div元素之后相邻的名为span的siblings元素。</summary>
      <div>document.querySelectorAll('div+span')</div>
    </details>
    <details>
      <summary>11.1-03.15 div元素之后所有名为span的siblings元素。</summary>
      <div>document.querySelectorAll('div~span')</div>
    </details>
    <details>
      <summary>11.1-03.16 所有元素。</summary>
      <div>document.querySelectorAll('*')</div>
    </details>
</details>
