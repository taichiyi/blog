<!-- markdownlint-disable MD033 MD037 -->
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
  <summary>在JSX中会将以小写字母开头的组件视为__。</summary>
  <div>原生 DOM 标签</div>
</details>

## react.js

<details>
  <summary>react.js 主要用来创建__。</summary>
  <div>React DOM树</div>
</details>

<details>
  <summary>React.createElement(type [,config] [,...children])方法是用来创建 React DOM 树的__。</summary>
  <div>节点</div>
</details>

<details>
  <summary>
  type: 节点的类型，分为两类: 1)如果是字符串则是原生 DOM 标签。2)如果是构造函数则是__。</summary>
  <div>组件</div>
</details>

<details>
  <summary>config: 节点的__。</summary>
  <div>属性</div>
</details>

<details>
  <summary>...children: 节点的__。</summary>
  <div>子节点</div>
</details>

<details>
  <summary>React运行时存在3种实例：1)__ 2)__ 3)__。</summary>
  <div>DOM 真实DOM节点</div>
  <div>Instances React维护的vDOM tree node</div>
  <div>Elements 描述UI长什么样子（type, props）</div>
</details>

<details>
  <summary>React和React DOM运行时存在的实例：1)__ 2)__ 3)__ 4)__ 5)__。</summary>
  <div>DOM: 真实DOM节点</div>
  <div>effect: 1)每个workInProgress tree节点上都有一个 effect list; 2)用来存放diff结果; 3)当前节点更新完毕会向上merge effect list（queue收集diff结果）</div>
  <div>workInProgress: 1)workInProgress tree是reconcile过程中从fiber tree建立的当前进度快照，用于断点恢复</div>
  <div>fiber: fiber tree与vDOM tree类似，用来描述增量更新所需的上下文信息</div>
  <div>Elements: 描述UI长什么样子（type, props）</div>
</details>

## react.dom.js

<details>
  <summary>react.dom.js 把React DOM 树换成 DOM 树。</summary>
  <div></div>
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
  ...
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
  <summary>Fiber 通过单链表重新实现了虚拟栈，专门用于React组件。您可以将单个Fiber视为__。</summary>
  <div>虚拟栈帧</div>
</details>

<details>
  <summary>Fiber的架构有两个主要阶段：__和__。在源码中，协调阶段通常被称为“渲染阶段”。</summary>
  <div>协调/渲染(render)</div>
  <div>提交(commit)</div>
</details>

<details>
  <summary>你可以将单个Fiber视为一个虚拟栈的__。</summary>
  <div>帧(元素)</div>
</details>

<details>
  <summary>在React中，对于 span 元素，其被称为 __ 组件（DOM节点）。</summary>
  <div>host</div>
</details>

<details>
  <summary>每一个 React 元素，根据其类型转为对应类型的 __ 节点，Fiber 节点的类型告诉 React 要对此类节点做些什么。</summary>
  <div>Fiber</div>
</details>

<details>
  <summary>在第一次渲染完成后，React 最终生成 fiber tree。fiber tree 的引用变量通常是 current。当 React 开始更新操作时，它会又会构建一棵被称为 workInProgress 的新树。workInProgress 接下来将会替换 current变量所引用的旧的 fiber tree，然后随之会被刷新到屏幕上。</summary>
  <div></div>
</details>

<details>
  <summary>React 会为 render方法返回的每一个 __ 创建一个 fiber 对象。</summary>
  <div>React Element</div>
</details>

<details>
  <summary>render 阶段调用的生命周期方法：_1_、_2_、_3_。</summary>
  <div>1 getDerivedStateFromProps</div>
  <div>2 shouldComponentUpdate</div>
  <div>3 render</div>
</details>

<details>
  <summary>在16.3版本以后，废弃了render阶段的一些生命周期方法：componentWillMount、componentWillReceiveProps、componentWillUpdate。因为 render 阶段的更新不应该产生__的__，如：DOM更新。</summary>
  <div>用户视觉可见</div>
  <div>副作用</div>
</details>

<details>
  <summary>被使用 UNSAFE 标记的生命周期方法经常会被开发者错误的使用，甚至滥用。开发者倾向于将包含副作用的代码放置到这些方法中，这样就可能导致__被触发，例如：在 componentWillUpdate函数中调用 setState 方法就会导致错误产生。甚至程序无限循环，直至奔溃。</summary>
  <div>新的异步渲染</div>
</details>

<details>
  <summary>commit 阶段调用的生命周期方法：_1_、_2_、_3_、_4_。这些方法都是__步执行的。</summary>
  <div>1 getSnapshotBeforeUpdate</div>
  <div>2 componentDidMount</div>
  <div>3 componentDidUpdate</div>
  <div>4 componentWillUnmount</div>
  <div>同</div>
</details>

<details>
  <summary>commit 阶段，它有__棵树和副作用列表。第一棵树就是是当前已经刷新到屏幕上 UI 对应的状态。另一颗备用树就是在 render 阶段构建的，在源码中它通常称之为finishedWork 或  workInProgress ，在接下来的 commit 阶段会替换之前的旧树，将新的状态刷新到屏幕上。</summary>
  <div>两</div>
</details>

<details>
  <summary>finishedWork 树的上通过 nextEffect 指针连接的 fiber节点构成副作用列表。_副作用列表可以看做是 render阶段运行产生的成果。_渲染的意义就是去决定节点的插入，更新，删除，或是组件生命周期函数的调用。这些就是副作用列表将要告诉我们的，也是接下来提交阶段需要遍历的节点集合。</summary>
  <div></div>
</details>

<details>
  <summary>fiber tree（workInProgress tree）</summary>
  <div></div>
</details>

## 协调(reconciliation)

<details>
  <summary>reconcilers(协调器)：即便 React DOM 和 React Native 渲染器的区别很大，但也需要共享一些逻辑。不同的渲染器彼此共享一些代码。我们称 React 的这一部分为 “__”。</summary>
  <div>reconciler</div>
</details>

<details>
  <summary>当处理类似于 setState() 这样的更新时，reconciler 会调用树中组件上的 __()，然后决定是否进行挂载，更新或是卸载操作。</summary>
  <div>render</div>
</details>

<details>
  <summary>reconciler有两个: __ reconciler 和 __ reconciler，Fiber 从 React 16 开始作为默认的 reconciler。</summary>
  <div>Stack</div>
  <div>Fiber</div>
</details>

<details>
  <summary>为什么从 Stack reconciler 到 Fiber reconciler: 1)__ 2)__。</summary>
  <div>无法增量更新</div>
  <div>没有优先级</div>
</details>

<details>
  <summary>Stack reconciler 依赖于__的同步__来遍历树。</summary>
  <div>内置栈</div>
  <div>递归</div>
</details>

<details>
  <summary>Fiber reconciler 依赖于__来遍历树。</summary>
  <div>单链表</div>
</details>

<details>
  <summary>在React新的协调算法的上下文中，包含这些__、__和__字段的数据结构称为Fiber。</summary>
  <div>child(第一个子节点的引用)</div>
  <div>sibling(第一个兄弟节点的引用)</div>
  <div>return(父节点的引用)</div>
  <img src="https://oss.taichiyi.com/markdown/1_7dsyUaUpKbFG7EoNR9Cu2w.png" />
</details>

<details>
  <summary>协调算法的执行总是从顶层的 HostRoot 节点开始执行工作，通过调用 renderRoot 方法开始。然而 React 会跳过那些被处理过的 fiber 节点，直到找到还未被处理的节点。例如，如果你在组件树的某一处调用了 setState ，React 会从顶部开始遍历，但是会快速的跳过它的祖先节点，直到找到触发 setState 的组件为止。</summary>
  <div>单链表</div>
</details>

<details>
  <summary>协调过程实际就是遍历整个 Fiber 树的时候，通过从 React Element 中获取到的改变后的数据，然后将这些数据更新到其所对应的 fiber 节点上，不存在对应的fiber 节点时，则创建新的，然后通过数据计算判断出该 fiber 节点在 commit 阶段需要做的事情，添加上对应的 effectTag ,同时该节点也会被添加到副作用列表中。在遍历完成之后会生成一棵新Fiber 树，该树中的 fiber 节点一些是新创建的，一些则是复用 old fiber tree 中的，具体情况取决于返回的 React Element 。在 commit 阶段就是遍历副作用列表并执行 effectTag 标记的工作。</summary>
  <div>单链表</div>
</details>

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

其他

<details>
  <summary>react 是MVVM吗？</summary>
  <div>不是，不是双向绑定</div>
</details>

<details>
  <summary>代码拆分的最佳方式是使用`__()`方法。</summary>
  <div>import</div>
</details>

<details>
  <summary>React.lazy要被__组件包裹。因为等待惰性组件加载时，需要显示一些__内容(fallback content)
。</summary>
  <div>Suspense</div>
  <div>后备</div>
</details>
