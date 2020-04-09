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

## CHAPTER 8 对象，类和面向对象编程
