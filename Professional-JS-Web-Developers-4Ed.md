<!-- markdownlint-disable MD033 MD026 -->
# Professional JavaScript For Web Developers 4Ed 填空

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
