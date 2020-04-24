<!-- markdownlint-disable MD033 MD026 -->
# Professional JavaScript For Web Developers 4Ed 填空

# CHAPTER 1 什么是JavaScript?

## 1.1 A Short History

## 1.2 JavaScript Implementations

### 1.2.1 ECMAScript

#### 1.2.1.1 ECMAScript Editions

### 1.2.2 The Document Object Model

#### 1.2.2.1 Why the DOM Is Necessary

#### 1.2.2.2 DOM Levels

### 1.2.3 The Browser Object Model

# 第2章 JAVASCRIPT IN HTML

## 2.1 The &lt;script> Element

### 2.1.2 Deferred Scripts

### 2.1.3 Asynchronous Scripts

### 2.1.6 Deprecated Syntax

## 2.2 Inline Code versus External Files

## 2.3 Document Modes

## 2.4 The &lt;noscript> Element

# CHAPTER 3 JavaScript 基础知识

## 3.1 Syntax

### 3.1.2 Identifiers

### 3.1.4 Strict Mode

### 3.1.5 Statements

### 3.2 Keywords and Reserved Words

## 3.3 Variables

### 3.3.1 The ’var’ Keyword

#### 3.3.1.2 var Declaration Hoisting

<details open>
  <summary>下面代码打印值为__、__。</summary>
  <pre>
    &lt;script>
      console.log(foo);
      var foo = 1;
      console.log(foo);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>undefined</div>
    <div>1</div>
    <pre>
    知识点:
    - 变量声明提升
    </pre>
  </details>
</details>

### 3.3.2 ’let’ Declarations

<details open>
  <summary>下面代码打印值为__、__。</summary>
  <pre>
    &lt;script>
      var a = 1;
      var b = 2;
      if (1) {
        var a = 3;
        let b = 4;
      }
      console.log(a);
      console.log(b);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>3</div>
    <div>2</div>
    <pre>
    知识点:
    - 块级作用域
    </pre>
  </details>
</details>

---

<details open>
  <summary>下面代码打印值为__、__。</summary>
  <pre>
    &lt;script>
      var a = []
      for (var i = 0; i < 10; i++) {
        a[i] = function () {
          console.log(i);
        }
      }
      a[1]()
      i = 11;
      a[2]()
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>10</div>
    <div>11</div>
    <pre>
    知识点:
    - 块级作用域
    </pre>
  </details>
</details>

#### 3.3.2.2 Global Declarations

<details open>
  <summary>下面代码打印值为__、__。</summary>
  <pre>
    &lt;script>
      var a = 1;
      let b = 2;
      console.log(window.a);
      console.log(window.b);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>1</div>
    <div>undefined</div>
    <pre>
    知识点:
    - let的全局声明
    </pre>
  </details>
</details>

### 3.4.5 The Number Type

<details open>
  <summary>下面代码打印值为__、__、__。</summary>
  <pre>
    &lt;script>
      console.log(010 === 10);
      console.log(0xf === 0Xf);
      console.log(0xf === 0xF);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>false</div>
    <div>true</div>
    <div>true</div>
    <pre>
    知识点:
    - 八进制和十六进制的表示
    </pre>
  </details>
</details>

#### 3.4.5.1 Floating-Point Values

<details open>
  <summary>下面代码打印值为__。</summary>
  <pre>
    &lt;script>
      console.log(0.1+0.2 === 0.3);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>false</div>
    <pre>
    知识点:
    - 浮点数的精度
    </pre>
  </details>
</details>

#### 3.4.5.2 Range of Values

<details open>
  <summary>下面代码打印值为__。</summary>
  <pre>
    &lt;script>
      console.log(1/0);
    &lt;/script>
  </pre>
  <details>
    <summary>Infinity</summary>
    <pre>
    知识点:
    - ECMAScript无穷大小数字的表示
    </pre>
  </details>
</details>

#### 3.4.5.3 NaN

<details open>
  <summary>下面代码打印值为：</summary>
  <pre>
    &lt;script>
      console.log(''/0+1);
      console.log(NaN===NaN);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>NaN</div>
    <div>false</div>
    <pre>
    知识点:
    - 类型的转换
    - NaN的特性
    </pre>
  </details>
</details>

#### 3.5.1.1 Increment/Decrement

<details open>
  <summary>下面代码打印值为：</summary>
  <pre>
    &lt;script>
      let a = 2;
      let b = 5;
      let c = (b++,a++) + b;
      console.log(c);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>8</div>
    <pre>
    知识点:
    - 序列点
    - 逗号运算符
    </pre>
  </details>
</details>

<details open>
  <summary>下面代码打印值为：</summary>
  <pre>
    &lt;script>
      let o = {
        valueOf() {
          return -1;
        }
      };
      console.log(o++);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>-1</div>
    <pre>
    知识点:
    - 对象的运算
    </pre>
  </details>
</details>

#### 3.5.2.1 Bitwise NOT

<details open>
  <summary>下面代码打印值为：</summary>
  <pre>
    &lt;script>
      const a = 7;
      const b = ~a;
      console.log(a);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>-8</div>
    <pre>
    知识点:
    - 按位非运算
    </pre>
  </details>
</details>

#### 3.5.2.2 Bitwise AND

<details open>
  <summary>下面代码打印值为：</summary>
  <pre>
    &lt;script>
      const a = 26 & 3;
      console.log(a);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>2</div>
    <pre>
    知识点:
    - 按位与运算
    </pre>
  </details>
</details>

#### 3.5.2.5 Left Shift

<details open>
  <summary>下面代码打印值为：</summary>
  <pre>
    &lt;script>
      const a = -25 << 2;
      console.log(a);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>100</div>
    <pre>
    知识点:
    - 左移运算
    - 补领
    </pre>
  </details>
</details>

### 5.4.1 The JavaScript Character

<details open>
  <summary>下面代码打印值为：</summary>
  <pre>
    &lt;script>
      console.log('1𤭢3'.length);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>4</div>
    <pre>
    知识点:
    - UTF-16代理对
    </pre>
  </details>
</details>

#### 5.5.1.2 The eval() Method

<details open>
  <summary>下面代码打印值为：</summary>
  <pre>
    &lt;script>
      "use strict";
      const str = '1';
      ((str) => {
        const geval = eval;
        eval("console.log(str);");
        window.eval("console.log(str);");
        geval("console.log(str);");
      })('2');
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>2</div>
    <div>1</div>
    <div>1</div>
    <pre>
    知识点:
    - eval函数
    </pre>
  </details>
</details>

## CHAPTER 8 对象，类和面向对象编程
