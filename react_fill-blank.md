<!-- markdownlint-disable MD033 -->
# react 填空

<details>
  <summary>React 是一个用于__的 JavaScript 库。</summary>
  <div>构建用户界面</div>
</details>

<details>
  <summary>React 以__式编写 UI。</summary>
  <div>声明</div>
</details>

<details>
  <summary>创建拥有各自__的组件，再由这些组件构成更加复杂的__。</summary>
  <div>状态</div>
  <div>UI</div>
</details>

<details>
  <summary>假设你的 HTML 文件某处有一个 &lt;div id="root">&lt;/div>。我们将其称为“__” DOM 节点，因为该节点内的所有内容都将由__管理。</summary>
  <div>根</div>
  <div>React DOM</div>
</details>

<details>
  <summary>在JSX会将以小写字母开头的组件视为__。</summary>
  <div>原生 DOM 标签</div>
</details>

## react.js

<details>
  <summary>react.js 主要用来创建__。</summary>
  <div>虚拟DOM树</div>
</details>

<details>
  <summary>React.createElement(type, [config], [...children])方法是用来创建虚拟DOM树的__。</summary>
  <div>节点</div>
</details>

<details>
  <summary>
  type: 字符串，必填，节点的类型，分为两类: 1)如果是字符串则是原生 DOM 标签。2)如果是构造函数则是__。</summary>
  <div>虚拟 DOM</div>
</details>

<details>
  <summary>config: 对象，选填，节点的__。</summary>
  <div>属性</div>
</details>

<details>
  <summary>...children: 对象数组，选填，节点的__。</summary>
  <div>子节点</div>
</details>

## react.dom.js

<details>
  <summary>react.dom.js 渲染DOM树。</summary>
  <div>虚拟DOM树</div>
</details>

<details>
  <summary>React.createRef 提供了一种方式，允许我们访问 __ 节点或在 render 方法中创建的 React 元素。例子：</summary>
  <div>DOM</div>
  <pre>
  class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      // 创建一个 ref 来存储 textInput 的 DOM 元素
      this.textInput = React.createRef();
      this.focusTextInput = this.focusTextInput.bind(this);
    }
    <!--  -->
    focusTextInput() {
      // 直接使用原生 API 使 text 输入框获得焦点
      // 注意：我们通过 "current" 来访问 DOM 节点
      this.textInput.current.focus();
    }
    <!--  -->
    render() {
      // 告诉 React 我们想把 < input> ref 关联到
      // 构造器里创建的 `textInput` 上
      return (
        < div>
          < input
            type="text"
            ref={this.textInput} />
          < input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        < /div>
      );
    }
  }
  </pre>
</details>

<details>
  <summary>如果想跨组件使用Ref，可以用__方法。 会创建一个React组件，这个组件能够将其接受的 ref 属性转发到__的另一个组件中。</summary>
  <div>React.forwardRef</div>
  <div>其组件树下</div>
  <pre>
  123
  </pre>
</details>

## React Fiber

<details>
  <summary>Fiber 的目的是增强对类似动画、布局和手势操作这些场景的适应性。他的头个特性是渐进式渲染：将渲染工作拆分成块并将其分散到多个帧的能力。</summary>
  <div></div>
</details>

<details>
  <summary>帧速率是指每秒钟刷新的__的帧数，也可以理解为图形处理器每秒钟能够刷新几次。</summary>
  <div>图片</div>
</details>

<details>
  <summary>一帧可以理解为一张__。</summary>
  <div>图片</div>
</details>

<details>
  <summary>60Hz的显示器，每隔16ms刷新一次屏幕，也就是16ms一帧，如果数据的到达速度快于帧速率，我们可以__和__。</summary>
  <div>合并更新</div>
  <div>批量更新</div>
</details>

<details>
  <summary>为什么有Fiber？1)__: 不同类型的更新具有不同的优先级 - 动画更新需要比例如来自数据存储的更新更快地完成。 2)__: 在UI中，不必立即应用每个更新;实际上，这样做可能会浪费，导致帧丢失并降低用户体验。 3)__: 两个树对比，只更新变动的部分。 </summary>
  <div>优先级</div>
  <div>每帧最多更新一次</div>
  <div>重用</div>
</details>

<details>
  <summary>Fiber是栈的重新实现，专门用于React组件。您可以将单个Fiber视为__。</summary>
  <div>虚拟栈帧</div>
</details>

## 协调(reconciliation)

### 背景

<details>
  <summary>在下一次__或__更新时，相同的 render() 方法会返回一棵不同的树。</summary>
  <div>state</div>
  <div>props</div>
</details>

<details>
  <summary>对于比较两棵树差异的问题，及时用比较好的算法，算法的时间复杂度也要O(__)，其中n是树节点的数量。意味着1000个节点所需要执行的算法量将在十亿级别范围。</summary>
  <div>n³</div>
</details>

<details>
  <summary>于是 React 在以下两个假设的基础之上提出了一套 O(__) 的启发式算法：1)两个不同类型的元素会产生出不同的树；2)开发者可以通过 key prop 来暗示哪些子元素在不同的渲染下能保持稳定；</summary>
  <div>n</div>
</details>

### Diffing 算法

<details>
  <summary>当对比两颗树时，React 首先比较两棵树的__。不同类型的根节点元素会有不同的形态。</summary>
  <div>根节点</div>
</details>

#### 比对不同类型的元素

<details>
  <summary>当根节点为不同类型的元素时，React 会__并且__。</summary>
  <div>拆卸原有的树</div>
  <div>建立起新的树</div>
</details>

<details>
  <summary>举个例子，当一个元素从 < a> 变成 < img>，从 < Article> 变成 < Comment>，或从 < Button> 变成 < div> 都会触发一个完整的__。</summary>
  <div>重建流程</div>
</details>

#### 比对同一类型的元素

<details>
  <summary>当比对两个相同类型的 React 元素时，React 会保留 DOM 节点，仅比对及更新有改变的属性。</summary>
  <div></div>
</details>

#### 比对同类型的组件元素

<details>
  <summary>当一个组件更新时，组件实例保持不变，这样 state 在跨越不同的渲染时保持一致。React 将更新该组件实例的 props ，并且调用该实例的 componentWillReceiveProps() 和 componentWillUpdate() 方法。下一步，调用 render() 方法，diff 算法将在之前的结果以及新的结果中进行递归。</summary>
  <div></div>
</details>

#### 对子节点进行递归

<details>
  <summary>在默认条件下，当递归 DOM 节点的子元素时，React 会同时遍历两个子元素的列表；当产生差异时，生成一个 mutation。</summary>
  <div></div>
</details>

#### Keys

<details>
  <summary>不要用下标当做key属性的值。</summary>
  <div></div>
</details>

### 权衡