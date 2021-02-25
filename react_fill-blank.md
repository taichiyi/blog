<!-- markdownlint-disable MD033 MD037 -->
# react 填空

## React Fiber

<details>
  <summary>帧速率是指每秒钟刷新的__的帧数，也可以理解为图形处理器每秒钟能够刷新几次。</summary>
  <div>图片</div>
</details>

<details>
  <summary>60Hz的显示器，每隔16ms刷新一次屏幕，也就是16ms一帧，如果数据的到达速度快于帧速率，我们可以__和__。</summary>
  <div>合并更新</div>
  <div>批量更新</div>
</details>

<details>
  <summary>Fiber 通过单链表重新实现了虚拟栈，专门用于React组件。您可以将单个Fiber视为__。</summary>
  <div>帧(元素)</div>
</details>

<details>
  <summary>Fiber的架构有两个主要阶段：__和__。在源码中，协调阶段通常被称为“渲染阶段”。</summary>
  <div>协调/渲染(render)</div>
  <div>提交(commit)</div>
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
  <summary>被使用 UNSAFE 标记的生命周期方法经常会被开发者错误的使用，甚至滥用。开发者倾向于将包含副作用的代码放置到这些方法中，这样就可能导致__被触发，例如：在 componentWillUpdate函数中调用 setState 方法就会导致错误产生。甚至程序无限循环，直至奔溃。</summary>
  <div>新的异步渲染</div>
</details>

<details>
  <summary>commit 阶段，它有__棵树和副作用列表。第一棵树就是是当前已经刷新到屏幕上 UI 对应的状态。另一颗备用树就是在 render 阶段构建的，在源码中它通常称之为finishedWork 或  workInProgress ，在接下来的 commit 阶段会替换之前的旧树，将新的状态刷新到屏幕上。</summary>
  <div>两</div>
</details>

<details>
  <summary>finishedWork 树的上通过 nextEffect 指针连接的 fiber节点构成副作用列表。_副作用列表可以看做是 render阶段运行产生的成果。__渲染的意义就是去决定节点的插入，更新，删除，或是组件生命周期函数的调用。这些就是副作用列表将要告诉我们的，也是接下来提交阶段需要遍历的节点集合。</summary>
  <div>异步</div>
</details>

<details>
  <summary>fiber tree（workInProgress tree）</summary>
  <div></div>
</details>

## 协调(reconciliation)

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
  <summary>协调过程实际就是遍历整个 Fiber 树的时候，通过从 React Element 中获取到的改变后的数据，然后将这些数据更新到其所对应的 fiber 节点上，不存在对应的fiber 节点时，则创建新的，然后通过数据计算判断出该 fiber 节点在 commit 阶段需要做的事情，添加上对应的 effectTag ,同时该节点也会被添加到副作用列表中。在遍历完成之后会生成一棵新Fiber 树，该树中的 fiber 节点一些是新创建的，一些则是复用 old fiber tree 中的，具体情况取决于返回的 React Element 。在 commit 阶段就是遍历副作用列表并执行 effectTag 标记的工作。</summary>
  <div></div>
</details>

<details>
  <summary>代码拆分的最佳方式是使用`__()`方法。</summary>
  <div>import</div>
</details>

<details>
  <summary>React.lazy要被__组件包裹。因为等待惰性组件加载时，需要显示一些__内容(fallback content)。</summary>
  <div>Suspense</div>
  <div>后备</div>
</details>

- 更新队列
- 双缓冲
- 链表
- 副作用

- 总结 React 的一些概念，解释概念，然后串起来
