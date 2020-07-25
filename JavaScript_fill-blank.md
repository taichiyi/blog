<!-- markdownlint-disable MD033 MD037 -->
# JavaScript 知识点 填空

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

<details>
  <summary>typeof null === 'object'是JavaScript第__个版本就存在的bug。</summary>
  <div>1</div>
</details>

<details>
  <summary>JavaScript将数字存储为__位__数，但是所有位运算都将其操作数视为__位二进制。
</summary>
  <div>64</div>
  <div>浮点</div>
  <div>32</div>
</details>

<details>
  <summary>JavaScript的不同类型的数据都是二进制存储在内存里的，为了区分数据的二进制数据的类型，会在二进制数据前面(低位)加__bit的标签。
</summary>
  <div>1-3</div>
</details>

<details>
  <summary>有5中标签。在object前面加__；在string前面加__；在boolean前面加__；在number前面加__；</summary>
  <div>000</div>
  <div>100</div>
  <div>110</div>
  <div>010</div>
</details>

<details>
  <summary>location对象的host属性和hostname属性有什么区别?</summary>
  <div>hostname不包括端口</div>
</details>

<details>
  <summary>Chrome memory cache vs disk cache? 速度?</summary>
  <div>顾名思义</div>
  <div>memory: 从内存中读取的。</div>
  <div>disk: 从磁盘中读取的。</div>
  <div>memory: 0ms</div>
  <div>disk: 10~200ms</div>
</details>

## undefined 和 void运算符 -start-

<details>
  <summary>void pointer 的中文意思是__。</summary>
  <div>空指针</div>
  <div>void /vɔɪd/</div>
</details>

<details>
  <summary>undefined既不是__字也不是__字。</summary>
  <div>关键</div>
  <div>保留</div>
</details>

<details>
  <summary>在JavaScript中void是一个__符，后面跟着一个运算对象。</summary>
  <div>运算</div>
</details>

<details>
  <summary>void 运算符表示表达式放弃__，所以void运算符返回值总是为__。</summary>
  <div>返回值</div>
  <div>undifined</div>
</details>

<details>
  <summary>标识符就是一个__，通过__语句将指针(标识符)指向__。没有赋过值的标识符就是一个__。</summary>
  <div>指针</div>
  <div>赋值</div>
  <div>内存地址</div>
  <div>空指针</div>
</details>

<details>
  <summary>标识符就是一个__，通过__语句将指针(标识符)指向__。没有赋过值的标识符就是一个__。</summary>
  <div>指针</div>
  <div>赋值</div>
  <div>内存地址</div>
  <div>空指针</div>
</details>

<details>
  <summary>为了避免undefined被重写我们可以使用“__”，它和undefined等价的。</summary>
  <div>void 0</div>
  <div>等效写法：void (0)</div>
</details>

<details open>
  <summary>下面代码打印值为__、__ __、__。</summary>
  <pre>
    &lt;script>
    var undefined = '123';
    (function () {
      console.log(undefined);
      var undefined = 'foo';
      console.log(undefined, typeof undefined);
      console.log(window.undefined);
    })();
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>undefined</div>
    <div>foo</div>
    <div>string</div>
    <div>undefined</div>
    <pre>
    知识点:
    - undefined既不是关键字也不是保留字
    - widnow的undefined属性是只读的
    </pre>
  </details>
</details>

## undefined 和 void运算符 -end-

## 堆 和 栈 -start-

<details>
  <summary>与其他编程语言一样，JavaScript运行时有一个__内存和一个__内存。</summary>
  <div>栈(stack)</div>
  <div>堆(heap)</div>
</details>

<details>
  <summary>在队列或栈中，任务的执行是有先后顺序的。但是在有的场景下，每个任务同样重要，不需要有先后顺序，__即为解决此类问题设计的一种数据结构。</summary>
  <div>堆</div>
</details>

<details>
  <summary>栈是__性数据结构，而堆是__数据结构。</summary>
  <div>线</div>
  <div>分层</div>
</details>

<details>
  <summary>栈内存永远不会碎片化，而堆内存可能会碎片化，因为先分配然后释放内存块。</summary>
  <div>线</div>
  <div>分层</div>
</details>

<details>
  <summary>栈变量不能调整_A_，而堆变量可以调整_A_。</summary>
  <div>大小</div>
</details>

<details>
  <summary>栈内存按__分配，而堆内存按__分配。</summary>
  <div>连续块</div>
  <div>任意随机顺序</div>
</details>

<details>
  <summary>栈不需要取消_A_变量，而在堆中则需要取消_A_。</summary>
  <div>分配</div>
</details>

<details>
  <summary>栈分配和取消分配由__完成，而堆分配和重新分配由__完成。</summary>
  <div>编译器指令</div>
  <div>程序员</div>
</details>

![7c13147ecfecd8a6ce7f0b5a9782dd30](https://oss.taichiyi.com/markdown/7c13147ecfecd8a6ce7f0b5a9782dd30.jpg)

## 堆 和 栈 -end-

## 事件循环 -start-

<details>
  <summary>JavaScript运行时实际上由2个组件组成：__和__。消息队列也称为回调队列或任务队列。</summary>
  <div>事件循环</div>
  <div>消息队列</div>
</details>

<details>
  <summary>事件循环先__任务队列再执行宏任务队列。</summary>
  <div>微</div>
</details>

<details>
  <summary>调用函数时，它会被压入栈。如果该函数包含Web API调用，则JavaScript将使用回调函数将其控制权委托给__，然后移至下一行执行，直到函数返回内容。一旦函数遇到return语句，该函数将从栈中弹出并移至下一个栈条目。同时，Web API在后台执行任务，并记住与该任务相关联的回调函数。执行完成后，Web API将该执行的__绑定到__，并使用该回调将消息发布到消息队列（AKA回调队列）。事件循环的唯一工作是查看回调队列，一旦回调队列中有待处理的事件，就将该回调推入栈。一旦栈为空，事件循环就一次将一个回调函数推入栈。稍后，栈将执行回调函数。</summary>
  <div>Web API</div>
  <div>结果</div>
  <div>回调函数</div>
</details>

![https://oss.taichiyi.com/markdown/1_lZ-KXoVNUSOwaq7q8zUBDg.png](https://oss.taichiyi.com/markdown/1_lZ-KXoVNUSOwaq7q8zUBDg.png)

![https://oss.taichiyi.com/markdown/1_9mv-g9E-87Sji9j7YR08Fw.gif](https://oss.taichiyi.com/markdown/1_9mv-g9E-87Sji9j7YR08Fw.gif)

## 事件循环 -end-

<details open>
  <summary>下面代码打印值为__、__、__。</summary>
  <pre>
    &lt;script>
    let a = 1;
    let b = a++;
    let c = (a++,a);
    console.log(a);
    console.log(b);
    console.log(c);
    &lt;/script>
  </pre>
  <details>
    <summary>答案</summary>
    <div>3</div>
    <div>1</div>
    <div>3</div>
    <pre>
    知识点:
    - 序列点
    - 逗号运算符
    - 递增运算符的后缀模式
    </pre>
  </details>
</details>

<details>
  <summary>所谓脚本，很多时候就是一次性书写甚至一次性运行，用后即抛。传统上，脚本语言的设计目标就是方便使用，怎么易用怎么来，所以在很多方面并不适合大型编程，甚至背道而驰。</summary>
  <div></div>
</details>

<details>
  <summary>像素流水线(pixel pipeline，也称像素管道)，在浏览器中分为5个部分 JS / CSS > Style > Layout > Paint > Composite </summary>
  <div></div>
</details>

<details>
  <summary>
  不是每一帧都经过5个步骤，当使用JS或CSS 对视图进行修改时，流水线一般有3种情况。
  1. JS / CSS > Style > Layout > Paint > Composite
  2. JS / CSS > Style > Paint > Composite
  3. JS / CSS > Style > Composite
  </summary>
  <div></div>
</details>

<details>
  <summary>JavaScript。不过，视觉变化不一定都是使用JavaScript触发的，CSS 的 Animations 和 Transitions 以及 Web Animations API 也常常触发 视觉变化。</summary>
  <div></div>
</details>

<details>
  <summary>布局（Layout）。在知道对一个元素应用哪些 CSS 规则之后，浏览器即可开始计算该元素要占据的空间大小及其在屏幕的位置。布局模式意味着一个元素可能影响其他元素，一般来说如果修改了某个元素的大小或者位置，则需要检查其他所有元素并重排（re-flow）整个页面。</summary>
  <div></div>
</details>

<details>
  <summary>绘制（Paint）。绘制是填充像素的过程。它涉及绘出文本、颜色、图像、边框和阴影，基本上包括元素的每个可视部分。绘制一般是在多个表面（通常称为层）上完成的，绘制包括两个步骤： 1) 创建绘图调用的列表， 2) 填充像素，后者也被称作栅格化。</summary>
  <div></div>
</details>

<details>
  <summary>合成（Composite）。由于页面的各部分可能被绘制到多个层上，因此它们需要按正确顺序绘制到屏幕上，才能正确地渲染页面。尤其对于与另一元素重叠的元素来说，这点特别重要，因为一个错误可能使一个元素错误地出现在另一个元素的上层。</summary>
  <div></div>
</details>

<details>
  <summary>触发 Layout 一会发触发 Paint。</summary>
  <div></div>
</details>

<details>
  <summary>如果一个属于 Layout 的 CSS 属性改变，则受影响的元素会进行 Layout。</summary>
  <div></div>
</details>

<details>
  <summary>在很多情况下，例如，如果不需要__，则可以将纯计算工作移至 Web Workers。</summary>
  <div>DOM访问</div>
</details>

<details>
  <summary>强制同步布局(forced __ __)</summary>
  <div>synchronous</div>
  <div>layouts</div>
</details>

<details>
  <summary>前一帧中的所有旧布局值都是已知的，可通过 __ 查询。但是查询前对元素的样式进行了修改(例如添加了一个 class)，这样种情况下浏览器需要只带当前元素的样式需要先 Layout ，这被称为__。</summary>
  <div>JavaScript</div>
  <div>强制同步布局</div>
</details>

<details>
  <summary>渲染器进程(Renderer Process)中包含: 主线程(Main Thread)、合成器线程(Compositor Thread)、</summary>
  <img src="https://oss.taichiyi.com/markdown/os0vx8yy.jpg" alt="img" />
  <div></div>
</details>

<details>
  <summary>操作系统通过垂直同步事件(vsync event)告诉浏览器的合成器线程什么时候创建新帧。</summary>
  <div></div>
</details>
