<!-- markdownlint-disable MD033 -->
# javascript-exercises

<details>
  <summary>为什么JavaScript是单线程</summary>
  <div>如果Javascript是多线程的话，在多线程的交互下，处于UI中的DOM节点就可能成为一个临界资源，假设存在两个线程同时操作一个DOM，一个负责修改一个负责删除，那么这个时候就需要浏览器来裁决如何生效哪个线程的执行结果。当然我们可以通过锁来解决上面的问题。但为了避免因为引入了锁而带来更大的复杂性，Javascript在最初就选择了单线程执行。</div>
</details>

<details>
  <summary>假设 const arr = [1, 2, 3]，写一个函数，函数参数为arr，返回值为[2, 1, 3]</summary>
  <div>- [arr[1], arr[0]] = [arr[0], arr[1]]</div>
</details>

<details>
  <summary>目前无法理解的问题！</summary>
  <div>const arr = [1, 2]; [arr[1], arr[0]] = [arr[0], arr[1]]</div>
  <div>const obj = { a: 1, b: 2 }; [obj.b, obj.a] = [obj.a, obj.b]</div>
  <div>const a = 1; const b = 2; [b, a] = [a, b];</div>
</details>

<details>
  <summary>“闭包”的定义</summary>
  <div>闭包是由函数以及创建该函数的词法环境组合而成</div>
</details>

<details>
  <summary>为什么typeof null 为"object"?</summary>
  <div>不同的对象在底层都表示为二进制，在JavaScript中二进制的前3位都为0的话会被判断为object类型，null的二进制表示是全0，自然前三位也是0，所以执行typeof时会返回"object"</div>
</details>

<details>
  <summary>对象的浅复制和深复制的方法</summary>
  <div>浅复制：</div>
  <div>- 变量赋值</div>
  <div>- Object.assign</div>
  <div>深复制：</div>
  <div>- {...}</div>
  <div>- JSON.parse(JSON.stringify()) 必须为标准JSON，不支持undefined类型</div>
</details>