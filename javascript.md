
# JavaScript

<!-- ## JSBridge

待完善

## 开发RN时，入到什么难点？怎么解决的？

待完善

## 介绍原型链

继承问题的一种解决方案 -->

## 前端性能优化

- 减少请求(image, css, js)

- 域名拆分(浏览器能同时发起更多的请求)

- 开启Gzip压缩

- 开启KeepAlive(减少浏览器与服务器建立连接的次数)

## react生命周期(lifeCycle)

分三个阶段

- 挂载阶段(Mounting)

- 更新阶段(Updating)

- 卸载阶段(Unmounting)

![react声明周期](https://oss.taichiyi.com/markdown/QQ20190410-0.jpg)

constructor

- 初始化state对象
- 给自定义方法绑定this

getDerivedStateFromProps

## WebView和原生是如何通信

### Android

Android通过WebView调用 JS 代码

1. 通过WebView的loadUrl()
2. 通过WebView的evaluateJavascript()

JS通过WebView调用 Android 代码

1. 通过WebView的addJavascriptInterface()进行对象映射，往webView的全局变量window上添加属性
2. 通过 WebViewClient 的shouldOverrideUrlLoading()方法回调拦截 url

### IOS

JavaScript 调用 Native

- UIWebView

定义

```Objective-C
JSContext *context = [uiWebView valueForKeyPath:@"documentView.webView.mainFrame.javaScriptContext"];

context[@"postBridgeMessage"] = ^(NSArray<NSArray *> *calls) {
    // Native 逻辑
};
```

调用

```JavaScript
window.postBridgeMessage(message);
```

- WKWebView

定义

```Objective-C
@interface WKWebVIewVC ()<WKScriptMessageHandler>

@implementation WKWebVIewVC

- (void)viewDidLoad {
    [super viewDidLoad];

    WKWebViewConfiguration* configuration = [[WKWebViewConfiguration alloc] init];
    configuration.userContentController = [[WKUserContentController alloc] init];
    WKUserContentController *userCC = configuration.userContentController;
    // 注入对象，前端调用其方法时，Native 可以捕获到
    [userCC addScriptMessageHandler:self name:@"nativeBridge"];

    WKWebView wkWebView = [[WKWebView alloc] initWithFrame:self.view.frame configuration:configuration];

    // TODO 显示 WebView
}

- (void)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message {
    if ([message.name isEqualToString:@"nativeBridge"]) {
        NSLog(@"前端传递的数据 %@: ",message.body);
        // Native 逻辑
    }
}
```

调用

```JavaScript
window.webkit.messageHandlers.nativeBridge.postMessage(message);
```

## DOM元素的增删改查

增

- Document.createElement() // 创建元素
- Document.createTextNode() // 创建一个新的文本节点
- Document.createAttribute() // 创建并返回一个新的属性节点
- Document.createComment() // 创建并返回一个注释节点
- Document.createDocumentFragment() // 创建一个新的空的文档片段
- Document.write() // 将文本字符串写入打开的文档流

- Element.appendChild() // 将一个节点添加到指定父节点的子节点列表末尾
- Element.classList.add() // 添加指定的类值class

删

- Element.remove() // 删除元素
- Element.removeChild(）// 删除子元素
- Element.removeAttribute() // 从元素中删除指定的属性
- Element.classList.remove() // 移除元素中一个或多个类名

改

- Element.innerHTML // 设置或获取描述元素后代的HTML语句
- Element.cloneNode() // 拷贝元素(包括所有属性和值)
- Element.setAttribute() // 设置或者改变指定属性并指定值
- Element.replaceChild() // 替换子节点

查

- Document.getElementById()
- Document.getElementsByClassName()
- Document.getElementsByName()
- Document.getElementsByTagName()
- Document.querySelector()
- Document.querySelectorAll()

## react和vue区别

数据流：

- react: 单向数据流

- vue: 双向数据流(也就是典型的MVVM模式)，不过用vuex也能redux的单向数据流。

页面渲染：

- react: 根据两个虚拟DOM树的差，来修改DOM树。
- vue: 通过监听数据变化，来修改DOM树。

模板:

- react: 通过原生JS实现模板中的常见语法，比如插值，条件，循环等
- vue: 通过拓展的HTML语法（如v-html, v-if, v-for）来实现模板的常见语法

## CSS 性能优化

- CSS文件压缩

- @import，导致浏览器不能并行下载样式

- id选择器、类选择器、标签选择器效率较高。

- 减少使用高开销的CSS属性: box-shadow, border-radius, filter, 透明度。

- 减少重排（Reflow）:不要一条一条地修改 DOM 的样式，预先定义好 class，然后修改 DOM 的 className。

- 为动画元素使用绝对定位 absolute /fixed。

- 使用硬件加速: translate3d, rotate3d, translateZ(0)

## React Native、APICloud、Flutter区别

### 技术

- APICloud: 每一个页面都是webView，写页面就和写手机网页一样。也支持一个页面里既渲染HTML也渲染原生组件，其实就是原生组件覆盖在webView上，可以随着webView一起滚动。webView会存在性能问题，基于DOM的UI渲染与原始相比效率太低，尤其是DOM树比较大时；CSS的动画在安卓机大多达不到60fps。`不足`

- RN: RN用JavaScript封装了一层，通过JavaScriptBridge可以分别调用Android和IOS的原生图形库。基本不存在性能问题。

- Flutter: 通过Dart实现了一套跨平台的UI框架，通过Skia实现UI渲染，没有用原生的UI库。目前性能RN有优势。

### 商业

APICloud: 闭源，支持公司：APICloud（2014小公司）。盈利方式有：售卖开发者提供的原生模块、售卖APP模板、外包服务。很多开发环节必须依赖于APICloud公司提供的服务，源码是要上传的。无法高度自定义和深度优化。`不足`

RN: 开源，支持公司：Facebook。

Flutter: 开源，支持公司：Google。

### 开发

- APICloud: 低，只要会写网页，稍微了解一下官方的API，一个星期就可以上手开发APP了。

- RN: 高，需要学习React、redux、saga、JSX；需要掌握Android和IOS原生的基本配置。开发环境坑多。但是社区活跃健壮。

- Flutter: 高，需要学习一个小众的新语言Dart。flutter处于早期阶段不成熟，生态不健壮。`不足`

## 栈和堆的区别

在JS中，每一个数据都需要一个内存空间。内存空间又被分为两种，栈内存(stock)与堆内存(heap)。

<!-- ### 堆内存(heap)
### 栈内存(stock)

系统自动分配、自动释放； -->

<!-- 动态分配的内存，大小不定也不会自动释放。 -->

JavaScript的数据类型分为两种：

- 基本类型：值在内存中占据固定大小的空间，因此被保存在栈内存中。
例如：Undefined、Null、Boolean、Number 和 String

- 引用类型：值是对象，保存被堆内存中。
栈内存中变量实际保存的是一个指针，这个指针指向堆内存中的一个对象。

![7c13147ecfecd8a6ce7f0b5a9782dd30](https://oss.taichiyi.com/markdown/7c13147ecfecd8a6ce7f0b5a9782dd30.jpg)

### 习题

``` javascript
var a = 20;
var b = a;
b = 30;

// 这时a的值是多少？
```

``` javascript
var m = { a: 10, b: 20 }
var n = m;
n.a = 15;

// 这时m.a的值是多少
```

## 观察者和发布-订阅的区别

多了一层调度中心

## 宏任务和微任务

微任务和宏任务皆为异步任务，它们都属于一个队列，主要区别在于他们的执行顺序，Event Loop的走向和取值。

微任务优先于宏任务

宏任务:

| # | 浏览器 | Node |
| :- | :- | :- |
| I/O | ✅ | ✅ |
| setTimeout | ✅ | ✅ |
| setInterval | ✅ | ✅ |
| requestAnimationFrame | ✅ | ❌ |
| setImmediate | ❌ | ✅ |

微任务:

| # | 浏览器 | Node |
| :- | :- | :- |
| process.nextTick | ❌ | ✅ |
| MutationObserver | ✅ | ❌ |
| Promise.then catch finally | ✅ | ✅ |

## React的新功能Time Slice 和Suspense

### Time Slicing

- 时间分片

- 简单的来说，react的异步渲染其实就是拉长了render的时间，一次跑一点，所以机器性能很差的，会看到react渲染时有稍微的延迟，但是不是卡顿。

### Suspense

- 主要解决的就是网络IO问题。网络IO问题其实就是我们现在用Redux+saga等等一系列乱七八糟的库来解决的「副作用」问题。

- 引入新的api，可以使得任何state更新暂停，直到条件满足时，再渲染（像async/await）

## 关于React v16.3 新生命周期

react v16.3终于出来了，最大的变动莫过于生命周期去掉了以下三个

- componentWillMount
- componentWillReceiveProps
- componentWillUpdate

同时为了弥补失去上面三个周期的不足又加了两个

- static getDerivedStateFromProps
- getSnapshotBeforeUpdate

### static getDerivedStateFromProps

- 组件每次被rerender的时候，包括在组件构建之后(render之前最后执行)，每次获取新的props或state之后
- 每次接收新的props之后都会返回一个对象作为新的state，返回null则说明不需要更新state.
- 配合componentDidUpdate，可以覆盖componentWillReceiveProps的所有用法

``` javascript
static getDerivedStateFromProps(nextProps, prevState) {
    // 没错，这是一个static
}
```

### getSnapshotBeforeUpdate

- 触发时间: update发生的时候，在render之后，在组件dom渲染之前。
- 返回一个值，作为componentDidUpdate的第三个参数。
- 配合getDerivedStateFromProps, 可以覆盖componentWillReceiveProps的所有用法。

``` javascript
class Example extends React.Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // ...
  }
}
```

## 纯函数

纯函数是满足如下条件的函数：

- 相同输入总是会返回相同的输出。
- 不产生副作用。
- 不依赖于外部状态。

## PureComponent和FunctionComponent区别

Functional Component

- 对于不需要内部状态，且用不到生命周期函数的组件，我们可以使用这种方式定义组件，比如展示性的列表组件，可以将列表项定义为Stateless Functional Component。

pureComponent

- PureComponent的自动为我们添加的shouldComponentUpate函数，只是对props和state进行浅比较(shadow comparison)

## 虚拟DOM

- 与直接频繁的操作DOM相比，虚拟DOM可以最小化地操作DOM。

- 而且和DOM操作比起来，js 计算是非常便宜的。

- 虚拟DOM，才催生出了RN。也应证了 Learn Once, Write Anywhere 这句口号。

diff算法: 两个树的完全的diff算法是一个时间复杂度为 O(n3) 的问题。 但是在前端中，你会很少跨层地移动DOM元素，所以真实的DOM算法会对同一个层级的元素进行对比。

## 柯里化 函数

柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

## Http请求头

类别

| code | 类别 | 短语原因 |
| - | - | - |
| 1XX | 信息性状态码 | 请求正在处理 |
| 2XX | 成功状态码 | 请求正常处理完毕 |
| 3XX | 重定向状态码 | 需要进行附加操作已完成请求 |
| 4XX | 客户端错误状态码 | 服务器无法处理请求 |
| 5XX | 服务器错误状态码 | 服务器处理请求错误 |

常见错误状态码

| code | 描述 |
| - | - |
| 100 | 这个临时响应表明，迄今为止的所有内容都是可行的，客户端应该继续请求，如果已经完成，则忽略它。|
| - | - |
| 200 | 请求成功 |
| - | - |
| 301 | 永久重定向(被请求的资源已永久移动到新位置) |
| 302 | 临时重定向 |
| 304 | 如果客户端发送了一个带条件的 GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个状态码。|
| - | - |
| 400 | 请求报文中存在语法错误 |
| 403 | 服务器已经理解请求，但是拒绝执行它 |
| 404 | 请求失败，资源不存在 |
| - | - |
| 500 | 服务器发生不可预期的错误，导致无法完成客户端的请求。|
| 502 | 此错误响应表明服务器作为网关需要得到一个处理这个请求的响应，但是得到一个错误的响应。|
| 503 | 服务器没有准备好处理请求。|

## TCP/IP

### 背景

1970年，最初想到让不同电脑之间实现连接的，是美国加州大学的克罗克。克罗克及其小组着手制定最初的主机对主机通信协议，它被称为网络控制协议（Network Control Protocol，缩写NCP）。该协议被用于阿帕网，并在局部网络条件下运行稳定，但随着阿帕网用户的增多，NCP逐渐暴露出两大缺陷：

- NCP只是一台主机对另一台主机的通讯协议，并未给网络中的每台电脑设置唯一的地址，结果就造成电脑在越来越庞大的网络中难以准确定位需要传输数据的对象。
- NCP缺乏纠错功能，这样一来，数据在传输过程中一旦出现错误，网络就可能停止运行。出错电脑增多，使得网络运行效率大打折扣。

1973年春天，已有的ARPANET网络控制程序（NCP）协议的开发者文顿·瑟夫（Vinton Cerf）加入到卡恩为ARPANET设计下一代协议而开发开放互连模型的工作中。
1973年夏天，卡恩和瑟夫很快开发出一个基本的改进形式。

1973年–1974年期间，这个设计思想更细的形式由瑟夫在斯坦福的网络研究组的开发出来。DARPA于是与BBN、斯坦福和伦敦大学签署协议开发不同硬件平台上协议的运行版本。有四个版本被开发出来——TCP v1、TCP v2

1975年，两个网络之间的TCP/IP通信在斯坦福和伦敦大学（UCL）之间进行测试。

1977年11月，三个网络之间的TCP/IP测试在美国、英国和挪威之间进行。

在1978年春天分成TCP v3和IP v3的版本，后来就是稳定的TCP/IP v4——目前因特网仍然使用的标准协议。

1978年到1983年间，其他一些TCP/IP原型在多个研究中心之间开发出来。
1983年1月1日ARPANET完全转换到TCP/IP。
1984年，美国国防部将TCP/IP作为所有计算机网络的标准。
1985年，因特网架构理事会举行一个三天有250家厂商代表参加的关于计算产业使用TCP/IP的工作会议，帮助协议的推广并且引领它日渐增长的商业应用。

### OSI(Open System Interconnection Reference Model)参考模型

| # | 层 | 描述 |
| - | - | - |
| 7 | 应用层 | 提供为应用软件而设的接口，以设置与另一应用软件之间的通信。相关协议：HTTP、HTTPS、FTP、SSH、POP3、SMTP、Telnet、Whois、TLS |
| 6 | 表示层 | 把数据转换为能与接收者的系统格式兼容并适合传输的格式。|
| 5 | 会话层 | 负责在数据传输中设置和维护计算机网络中两台计算机之间的通信连接。|
| 4 | 传输层 | 把传输表头（TH）加至数据以形成数据包。传输表头包含了所使用的协议等发送信息。相关协议：TCP、UDP |
| 3 | 网络层 | 决定数据的路径选择和转寄，将网络表头（NH）加至数据包，以形成分组。网络表头包含了网络数据。相关协议：IP。 |
| 2 | 数据链路层 | 负责网络寻址、错误侦测和改错。当表头和表尾被加至数据包时，会形成帧。数据链表头（DLH）是包含了物理地址和错误侦测及改错的方法。数据链表尾（DLT）是一串指示数据包末端的字符串。以太网、无线局域网（Wi-Fi）、令牌环、帧中继、IEEE 802.11 |
| 1 | 物理层 | 在局部局域网上传送数据帧（data frame），它负责管理计算机通信设备和网络媒体之间的互通。线路、无线电、光纤 |

> 注意：OSI参考模型并没有提供一个可以实现的方法，而是描述了一些概念，用来协调进程间通信标准的制定。即OSI参考模型并不是一个标准，而是一个在制定标准时所使用的概念性框架。

![TCP/IP协议群](https://oss.taichiyi.com/markdown/QQ20190327-115743%402x.png)

### 参考引用

- <https://zh.wikipedia.org/zh-hans/TCP/IP%E5%8D%8F%E8%AE%AE%E6%97%8F>
- <https://zh.wikipedia.org/wiki/OSI%E6%A8%A1%E5%9E%8B>
- 图解TCP/IP（第5版）

## HTTP 报文

请求报文:
![请求报文](https://oss.taichiyi.com/markdown/QQ20190325-184455%402x.png)

```http
GET /Stock HTTP/1.1
Host: taichiyi.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate
Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,vi;q=0.6
Cookie: OUTFOX_SEARCH_USER_ID_NCOO=1130894293.8303165; ___rl__test__cookies=1544754477200
DNT: 1
```

响应报文:
![请求报文](https://oss.taichiyi.com/markdown/QQ20190325-184849%402x.png)

```http
HTTP/1.1 200 OK
Server: nginx/1.12.2
Date: Sun, 24 Mar 2019 02:00:27 GMT
Content-Type: text/html
Content-Length: 712
Last-Modified: Wed, 13 Mar 2019 01:47:03 GMT
Connection: keep-alive
ETag: "5c886117-2c8"
```

### 4中HTTP首部字段类型

- 通用首部字段：
    请求报文和响应报文两方都会使用的首部。
- 请求首部字段：
    从客户端向服务器端发送请求报文时使用的首部。
- 响应首部字段：
    从服务器端向客户端发送请求报文时使用的首部。
- 实体首部字段：
    针对请求报文和响应报文的实体部分使用的首部。补充了资源内容更新时间等与实体有关的信息。

## 进程和线程的区别

本质：进程和线程都是CPU工作时间段的描述，不过是颗粒大小不同。

比方：CPU是个工厂，进程是车间，线程是车间里的工人。

## Callback、Promise、Generator和async + await关系

Callback:

- 优点：性能好；兼容性好；
- 缺点：回调地狱；

Promise:

- 优点：解决了回调地狱问题；
- 缺点：代码不直观；

Generator:

- 优点：代码直观；
- 缺点：需要手动一步一步执行；

async+await:

- 完美

> async / await 函数就是 Generator 函数的语法糖

## 自我介绍要点

- 冯彬

- 海南海口人士

- 12-16年 就读 河南工业大学 本科

- 大一、大二 课余时间主要都是户外运动，骑行、爬山、马拉松

- 大二下学期参加“感恩之旅”支教助学联盟，对我影响，学生自愿自发自费，经过4个月的7轮选拔，幸运参加第八届暑期支教。

- 暑假支教回来，宣传需要官网，我网络部，计算机感兴趣，之前喜欢折腾一些破解开机密码、写批处理、安装系统，为什么选电子商务。

- 然后开始了一周5天每天10-12小时的编程生活，中途几次想放弃，后来还是花了5个月把团队网站搞了出来。

- 搞完网站后，我对当时兴起的手机APP很感兴趣，我觉得APP在未来会有很大的用处。然后选定APICloud后，又开始搞搞搞。

- 大三下学期，已经不怎么上课。专业文科性质，靠硬背，浪费时间；背书成绩没人家，不背书靠作弊的成绩高。触动，尝试作弊，罪恶感，不是真我。考试浪费时间，考试不去。

- 现在没有毕业证麻烦。后悔？也不后悔，一切向前（前进的前）看，毕竟要对自己的决定负责，尽管是个冲动热血的决定。什么事情都有它的两面性，我时常提醒自己我是一个雨天没有伞的人。来勉励自己

- 大四下学期，我已经可以独立完成一般网站和app的开发。然后进入到了一个小型外包公司实习，一开始是做网站，后来app项目比较多，我就调去做app了。

- 干了1年后，我父母开始催我回家工作。父母觉得郑州空气不好，伤身体。更重要的是不希望我找一个大陆的女朋友，希望找个会说海南话的。
但是我不想回海南，我觉得海南更适合养老，不适合奋斗。后来折中了一下，就来了深圳。

- 来深圳后想着，只要是用apicloud做app的就行。

- 然后进入到了财富公司工作，公司要求很简单，能做电商app就行，不关心实现方式。老板是内蒙古人，一开始在内蒙做珠宝，后来发展到了上海做珠宝，在它那个电商不盛行的年代，珠宝的利润是很高的，一般在7成左右，周大福 周生生 老凤祥，老板大赚一笔。然而最近电商的冲击加上闽南珠宝商的抱团，让那些单打独斗的珠宝商不好过了。
  老板就想转型做线上做电商。我进公司PC已上线，需要做app，我进去后哐哧哐哧花了2个月开发测试把客户端和商户端弄了出来，然后花了十多万推广了一个月，用户是积累了一些，但是找不到盈利点。老板觉得没希望，赚不到钱，公司就解散了，老板回上海了。

- 然后开始了一段刻苦铭心的找工作之路，apicloud 大中型公司没人用，有也基本是外包公司，因为APICloud核心是不开源的，大中型公司业务比较复杂，如果对底层的实现不清楚的话，会导致很多问题。这时候我才有了技术选型这个概念。

- 后来找到了乐工场公司，老板在华为是做东南亚toB业务的。因为在越南有资源，所有公司的业务基本都在越南。我进去后，一个人负责越南大学生分期商城这个PC端项目的前端，开发加测试了2个月上线了，用的vue框架。然后公司需要做app，但是我们的CTO不希望用APICloud，想用React Native。但是当时我连React都不会，更别说RN，然后开始边学边做，花了3个半月开发加测试也上线了。后来又需要做H5，我觉得做成SPA（单页面应用）体验会比较好些。所以就不能用之前的做PC端的方式去做了。时间也比较紧，所以需要找一个现成的框架，当时是在next和umi之间选，因为umi支持布局、嵌套路由、权限路由，中文文档也比较完善，GitHub也很活跃，阿里内部上百个应用都用了，觉得也比较成熟。试用了一下后，觉得挺不错，就选用了umi。

- 这个项目是最有希望的一个项目，当时有机构有意向，但是老板谈条件。后来寒冬来了，经济低迷，拉不到投资，项目就失败了。

- 后来找工作发现，我学的东西面广，但是不深。

---

- 冯彬

- 海南海口人士

- 12年 就读 河南工业大学 本科

- 大一、大二 课余时间基本都是这那运动。例如：校级、院级运动会；院足球队；户外骑行（主要）；3次郑开马拉松；4次嵩山

- 大二下学期参加“感恩之旅”支教社团(学生组织)。这是我大学中对我影响最大的一个组织。很多第一次：户外40km、70km徒步拉练；敬老院义工（卫生，指甲，生命倒计时，自己以后）；三天兼职（端盘子、买课程、发传单）；变废为益；

- 在贵州(暑假)：砍材、小学上课、山区调研(留守儿童)、山区的孩子苦的阀值比较高、淳朴勇猛

- 回到学校后（大三上学期），团队需要恢复官网的正常使用，而当时我是网络部的，而且我对计算机也比较感兴趣，然后我就接下了这个任务。说到计算机的兴趣可以上溯到我的高中时代，我那时候上电脑课的时候我就是最受欢迎的人，解除老师远程控制，想玩什么就玩什么。那时候经常买“电脑爱好者”杂志来看。喜欢做破解电脑开机密码这类黑客性质的事情。当时想在网上找“系统性的计算机教程”，网上普通教程都少，别提系统性教程，然后不了了之了, 电脑就基本用来打游戏了。

- 然后开始了一周5天每天10-12小时的编程生活，中途几次想放弃，后来还是花了5个月把团队网站搞了出来。

- 搞完网站后，我对当时兴起的手机APP很感兴趣，我觉得APP在未来会有很大的用处。然后选定APICloud后，又开始搞搞搞。

- 大三下学期的时候，其实我已经不怎么去上课了。因为我们专业是文科性质的，很多东西都是靠硬背的，我觉得很浪费时间；而且我背书考的成绩都没人家，不背书靠作弊的成绩高。这个事情触动到了我，我尝试过作弊，但我觉得很有罪恶感，我觉得那不是真的我。到后来我觉得考试都是浪费时间，考试也不去了。

- 现在看来没有毕业证的确带来了麻烦。你要说后悔吗？也不后悔，一切向前（前进的前）看，毕竟要对自己的决定负责，尽管是个冲动热血的决定。什么事情都有它的两面性，我时常提醒自己我是一个雨天没有伞的人。来勉励自己

- 到大四下学期，我已经可以独立完成一般网站和app的开发。然后进入到了一个小型外包公司实习，一开始是做网站，后来app项目比较多，我就调去做app了。

- 干了1年后，我父母开始催我回家工作。父母觉得郑州空气不好，伤身体。更重要的是不希望我找一个大陆的女朋友，希望找个会说海南话的。
但是我不想回海南，我觉得海南更适合养老，不适合奋斗。后来折中了一下，就来了深圳。

- 来深圳后想着尽快找一个工作稳定下来，只要是用apicloud做app的就行。

- 然后进入到了财富公司工作，公司要求很简单，能做电商app就行，不关心实现方式。老板是内蒙古人，一开始在内蒙做珠宝，后来发展到了上海做珠宝，在它那个电商不盛行的年代，珠宝的利润是很高的，一般在7成左右，周大福 周生生 老凤祥，老板大赚一笔。然而最近电商的冲击加上闽南珠宝商的抱团，让那些单打独斗的珠宝商不好过了。
  老板就想转型做线上做电商。我进公司PC已上线，需要做app，我进去后哐哧哐哧花了2个月开开发测试把客户端和商户端弄了出来，然后花了十多万推广了一个月，用户是积累了一些，但是找不到盈利点。老板觉得没希望，赚不到钱，公司就解散了，老板回上海了。

- 然后开始了一段刻苦铭心的找工作之路，apicloud 大中型公司没人用，有也基本是外包公司，因为APICloud核心是不开源的，大中型公司业务比较复杂，如果对底层的实现不清楚的话，会导致很多问题。这时候我才有了技术选型这个概念。

- 后来找到了一家金融公司，老板在华为是做东南亚toB业务的。因为在越南有资源，所有公司的业务基本都在越南。我进去后，一个人负责越南大学生分期商城这个PC端项目的前端，开发加测试了2个月上线了，用的vue框架。然后公司需要做app，但是我们的CTO不希望用APICloud，想用React Native。但是当时我连React都不会，更别说RN，然后开始边学边做，花了3个半月开发加测试也上线了。后来又需要做H5，我觉得做成SPA（单页面应用）体验会比较好些。所以就不能用之前的做PC端的方式去做了。时间也比较紧，所以需要找一个现成的框架，当时是在next和umi之间选，因为umi支持布局、嵌套路由、权限路由，中文文档也比较完善，GitHub也很活跃，阿里内部上百个应用都用了，觉得也比较成熟。试用了一下后，觉得挺不错，就选用了umi。

- 这个项目是最有希望的一个项目，当时有机构有意向，但是老板谈条件。后来寒冬来了，经济低迷，拉不到投资，项目就失败了。

---

```flow
startF=>start: chartsSku请求
endF=>end: chartsSku响应

operation0=>operation: 我的操作

cond0=>condition: link、userId参数是否为真？

startF->cond0
cond0(yes)->endF
cond0(no)->endF
```
