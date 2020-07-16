<!-- markdownlint-disable MD033 -->
# 数据结构与算法——JavaScript描述 填空

# 第 1 章 JavaScript 的编程环境和模型

## 1.2 JavaScript 编程实践

### 1.2.5 函数

<details>
  <summary>函数中如果没有显式返回值，这种函数有时 也叫做__或 void 函数。</summary>
  <div>子程</div>
</details>

# 第2章 数组

<details>
  <summary>数组是计算机编程世界里很常见的__。</summary>
  <div>数据结构</div>
</details>

## 2.1 JavaScript中对数组的定义

<details>
  <summary>计算机中数组的定义: 一个存储元素的__集合(collection)，每个元素都有一个序号，这个序号从__开始，称为__或索引，索引通常是数字，用来计算元素之间存储位置的偏移量。线性的意思是元素在内存中是__的。</summary>
  <div>线性</div>
  <div>0</div>
  <div>下标</div>
  <div>连续</div>
</details>

# 第3章 列表

<details>
  <summary>当不需要在一个很__的序列中查找元素，或者对其进行排序时，列表显得尤为有用。</summary>
  <div>长</div>
</details>

<details>
  <summary>ADT：英文全称__；中文全称__。</summary>
  <div>Abstract Data Types</div>
  <div>抽象数据类型</div>
</details>

## 3.1 列表的抽象数据类型定义

<details>
  <summary>列表是一组__序的数据。每个列表中的数据项称为元素。在 JavaScript 中，列表中的元素可以是__数据类型。列表中可以保存多少元素并没有事先限定，实际使用时元素的数量受到程序内存的限制。</summary>
  <div>有</div>
  <div>任意</div>
</details>

<details>
  <summary>列表的抽象数据类型定义: 有3个__和12个__。例子:</summary>
  <div>属性</div>
  <div>方法</div>
  <pre>
   listSize(属性)   列表的元素个数
   pos(属性)        列表的当前位置
   length(属性)     返回列表中元素的个数
   clear(方法)      清空列表中的所有元素
   toString(方法)   返回列表的字符串形式
   getElement(方法) 返回当前位置的元素
   insert(方法)     在现有元素后插入新元素
   append(方法)     在列表的末尾添加新元素
   remove(方法)     从列表中删除元素
   front(方法)      将列表的当前位置设移动到第一个元素
   end(方法)        将列表的当前位置移动到最后一个元素
   prev(方法)       将当前位置后移一位
   next(方法)       将当前位置前移一位
   currPos(方法)    返回列表的当前位置
   moveTo(方法)     将当前位置移动到指定位置

  function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
  }
  </pre>
</details>

## 3.3 使用迭代器访问列表

<details>
  <summary>使用迭代器，可以不必关心数据的__，以实现对列表的遍历。</summary>
  <div>内部存储方式</div>
</details>

# 第4章 栈

<details>
  <summary>栈是一种很简单很高效的数据结构，因为数据只能在__添加和删除。</summary>
  <div>栈顶</div>
</details>

## 4.3 使用Stack类

### 4.3.1 数制间的相互转换

<details>
  <summary>数制转换即__转换</summary>
  <div>进制</div>
</details>

<details>
  <summary>数码: 十进制有__个数码：0、1、2、3、4、5、6、7、8、9。</summary>
  <div>10</div>
</details>

<details>
  <summary>基数: 二进制的基数为__；__进制的基数为10。</summary>
  <div>2</div>
  <div>十</div>
</details>

<details>
  <summary>位权: 数制中某一位上的__所表示数值的大小（所处位置的价值）。1*权位，权位=基数^位置</summary>
  <div>1</div>
</details>

<details>
  <summary>十进制的123，1的位权是__，2的位权是__；二进制中的 1011 ，第一个1的位权是__，0的位权是__。</summary>
  <div>100</div>
  <div>10</div>
  <div>8</div>
  <div>4</div>
</details>

<details>
  <summary>将一个十进制数字转化为二至九进制的数字。例子：</summary>
  <pre>
  function mulBase(num, base) {
    const s = [];
    do {
      s.push(num % base);
      num = Math.floor(num /= base);
    } while (num > 0);
    let converted = "";
    while (s.length > 0) {
      converted += s.pop();
    }
    return converted;
  }
  </pre>
</details>

### 4.3.2 回文

<details>
  <summary>使用__，可以轻松判断一个字符串是否是回文。</summary>
  <div>栈</div>
</details>

<details>
  <summary>使用栈判断回文子串，例子：</summary>
  <pre>
  function isPalindromicString(str) {
    const arr = [];
    for (const iterator of str) {
      arr.push(iterator);
    }
    let palindromicString = '';
    while (arr.length > 0) {
      palindromicString += arr.pop();
    }
    return str === palindromicString;
  }
  </pre>
</details>

# 第5章 队列

# 第6章 链表

## 6.1 数组的缺点

<details>
  <summary>在很多编程语言中，数组的长度是__的，所以当数组已被数据填满时，再要加入新的元素就会非常困难。在数组中，添加和删除元素也很麻烦，因为需要将数组中的其他元素向前或向后__，以反映数组刚刚进行了添加或删除操作。</summary>
  <div>固定</div>
  <div>平移</div>
</details>

<details>
  <summary>然而，JavaScript 的数组并不存在上述问题，因为 JavaScript 的数组被实现为了__。与其他语言(比如 C++ 和 Java) 的数组相比，效率很低。</summary>
  <div>对象</div>
</details>

<details>
  <summary>链表失去了数组__读取的优点。</summary>
  <div>随机</div>
</details>

## 6.2 定义链表

<details>
  <summary>链表是由一组__组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一个节点的__叫做链。</summary>
  <div>节点</div>
  <div>引用</div>
</details>

<details>
  <summary>数组元素靠它们的__进行引用，链表元素则是靠__进行引用。</summary>
  <div>位置</div>
  <div>相互之间的关系</div>
</details>

<details>
  <summary>许多链表的实现都在链表最前面有一个特殊节点，叫做__节点。链表的尾元素指向一个__节点。</summary>
  <div>头</div>
  <div>null</div>
</details>

<details>
  <summary>hear->10->15->20。15的__是10，15的__是20。</summary>
  <div>前驱</div>
  <div>后继</div>
</details>

<details>
  <summary>添加: 向链表中插入一个节点，需要修改它前面的节点(__)，使其指向新加入的节点，而新加入的节点则指向__指向的节点。</summary>
  <div>前驱</div>
  <div>原来前驱</div>
</details>

<details>
  <summary>删除: 将待删除元素的__节点指向待删除元素的__节点，同时
将待删除元素指向 __，元素就删除成功了。</summary>
  <div>前驱</div>
  <div>后继</div>
  <div>null</div>
</details>

## 6.4 双向链表

<details>
  <summary>单向链表的元素只有__，从链表的头结点遍历到尾结点容易，但是反过来麻烦。</summary>
  <div>前驱</div>
</details>

<details>
  <summary>为了解决上面的问题，向每个元素添加后继，既有前驱又有后继的链表叫做__链表。</summary>
  <div>双向</div>
</details>

## 6.5 循环链表

<details>
  <summary>最后一个元素的指针域指向__元素。</summary>
  <div>头</div>
</details>

# 第7章 字典

<details>
  <summary>字典是一种以__形式存储数据的数据结构。</summary>
  <div>键-值对</div>
</details>

# 第8章 散列

<details>
  <summary>__，一般翻译做散列或哈希。</summary>
  <div>Hash</div>
</details>

<details>
  <summary>散列是一种常用的数据__技术，散列后的数据可以快速地插入或取用。散列使用的数据结构叫做__。在散列表上插入、删除和取用数据都非常快，但是对于__操作来说却效率低下。</summary>
  <div>存储</div>
  <div>散列表</div>
  <div>查找</div>
</details>

## 8.1 散列概览

<details>
  <summary>即便使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象称为__。</summary>
  <div>碰撞(collision)</div>
</details>

<details>
  <summary>在很多应用中，键是字符串类型。事实证明，选择针对字符串类型的散列函数是很难的，将字符串中每个字符的 ASCII __相加似乎是一个不错的散列函数。</summary>
  <div>码值</div>
</details>

### 8.2.2 一个更好的散列函数

<details>
  <summary>为了避免碰撞，首先要确保散列表中用来存储数据的数组其大小是个__数。这和计算散列值时使用的__运算有关。</summary>
  <div>质</div>
  <div>取余</div>
</details>

## 8.3 碰撞处理

# 第9章 集合

<details>
  <summary>集合(set)的两个最重要特性是:首先，集合中的成员是无序的;其次，集合中不允许__存在。</summary>
  <div>相同成员</div>
</details>

# 第10章 二叉树和二叉查找树

<details>
  <summary>线性结构是一个__序数据元素的集合。</summary>
  <div>有</div>
</details>

<details>
  <summary>树是计算机科学中经常用到的一种数据结构。树是一种__性的数据结构，以__的方式存储数据。</summary>
  <div>非线</div>
  <div>分层</div>
</details>

<details>
  <summary>二叉树是一种特殊的树，它的子节点个数不超过__个。</summary>
  <div>两</div>
</details>

<details>
  <summary>一棵树最上面的节点称为__节点，如果一个节点下面有节点，那么该节点称为__节点，它下面的节点称为子节点。一个节点可以有 0 个、1 个或多个子节点。没有任何子节点的节点称为__节点。</summary>
  <div>根</div>
  <div>父</div>
  <div>叶子</div>
</details>

<details>
  <summary>从一个节点到另一个节点的这一组边称为__。</summary>
  <div>路径</div>
</details>

<details>
  <summary>以某种特定顺序访问树中所有的节点称为__。</summary>
  <div>树的遍历</div>
</details>

<details>
  <summary>定义树的层数就是树的__。</summary>
  <div>深度</div>
</details>

## 10.2 二叉树和二叉查找树

<details>
  <summary>二叉树中一个父节点的两个子节点分别称为__节点和__节点。</summary>
  <div>左</div>
  <div>右</div>
</details>

<details>
  <summary>二叉查找树是一种特殊的二叉树，相对较小的值保存在__节点中，较大的值保存在__节点中。</summary>
  <div>左</div>
  <div>右</div>
</details>

### 10.2.1 实现二叉查找树

<details>
  <summary>二叉查找树的 Node 类的定义如下:</summary>
  <pre>
  function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function show() {
      return this.data;
    };
  }
  </pre>
</details>

<details>
  <summary>BST：英文全称__；中文全称__。</summary>
  <div>Binary Search Tree</div>
  <div>二叉查找树</div>
</details>

### 10.2.2 遍历二叉查找树

<details>
  <summary>有三种遍历 BST 的方式:__序、__序和__序。</summary>
  <div>中</div>
  <img src="https://oss.taichiyi.com/markdown/QQ20200519-174528%402x.jpg" />
  <div>先</div>
  <img src="https://oss.taichiyi.com/markdown/QQ20200519-174826-xianxu.jpg" />
  <div>后</div>
  <img src="https://oss.taichiyi.com/markdown/QQ20200519-174927-houxu.jpg" />
</details>

<details>
  <summary>中序遍历按照节点上的键值，以升序访问 BST 上的所有节点。</summary>
  <div>Binary Search Tree</div>
  <div>二叉查找树</div>
</details>

<details>
  <summary>先序遍历先访问根节点，然后以同样方式访问左子树和右子树。</summary>
  <div>Binary Search Tree</div>
  <div>二叉查找树</div>
</details>

<details>
  <summary>后序遍历先访问叶子节点，从左子树到右子树，再到根节点。</summary>
  <div>Binary Search Tree</div>
  <div>二叉查找树</div>
</details>

## 10.3 在二叉查找树上进行查找

<details>
  <summary>对 BST 通常有下列三种类型的查找: 1)查找__值 2)查找__值 3)查找__值</summary>
  <div>给定</div>
  <div>最大</div>
  <div>最小</div>
</details>

### 10.3.1 查找最小值和最大值

剩下的先略过

# 第12章 排序算法

## 12.2 基本排序算法

### 12.2.1 冒泡排序

## 补充

<details>
  <summary>计算机科学中，集合是一组__变数量的数据项(也可能是0个)的__。</summary>
  <div>可</div>
  <div>组合</div>
</details>

<details>
  <summary>集合的种类包括__，__，多重集，__和图。</summary>
  <div>列表</div>
  <div>集</div>
  <div>树</div>
</details>

<details>
  <summary>在列表中，数据项的顺序是__定的，__可以存在多个相同的数据项。</summary>
  <div>确</div>
  <div>是</div>
</details>

<details>
  <summary>列表，根据访问方式还可以分为__和__。</summary>
  <div>队列</div>
  <div>栈</div>
</details>

<details>
  <summary>在集中，数据项是__序的，__可以存在相同数据项。</summary>
  <div>无</div>
  <div>不</div>
</details>

<details>
  <summary>多重集和集的唯一区别是，__可以存在相同数据项。</summary>
  <div>是</div>
</details>

<details>
  <summary>如果变量值的大小是可变的，则该值在内存中可能是__连续的。</summary>
  <div>不</div>
</details>

<details>
  <summary>关联数组和数组的唯一区别是，关联数组的__不是非负的整数而是任意的标量。JavaScript的对象就是一个关联数组。</summary>
  <div>索引值</div>
</details>

<details>
  <summary>关联数组也称为，__和__。</summary>
  <div>查找表</div>
  <div>字典</div>
</details>

<details>
  <summary>在图中，每个数据项都可以与__个或__个其它数据项联系起来，其中每个节点都是__等的。</summary>
  <div>一</div>
  <div>多</div>
  <div>平</div>
</details>
