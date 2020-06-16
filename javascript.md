
# JavaScript

## MutationObserver

监听DOM变化最开始用的是Mutation events，但是这个设计有缺陷，会导致性能变慢1.5~7倍；而且浏览器的兼容性也不好。然后 MutationObserver 取而代之。

<https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>

## browserify是什么

Browserify：提供在浏览器环境下require()npm模块的支持。

## 关于Promise

- 是什么?

Promise是以最简单的方式处理异步操作的理想选择。Promise是一个ployfill

- 为什么？

在promise之前，使用了事件(Event)和回调函数(Callback)。

事件(Event)：对于在同一对象上可以多次发生的事情（keyup，touchstart等），事件非常有用。

promise相对于回调函数(Callback)的优点：
1.提高代码可读性
2.避免回调地狱
3.更好的异步逻辑控制
4.更好的异常处理

Promise有一个标准叫做“Promises/A+”，有很多JS库根据这个标准实现了Promise，如：RSVP.js、when。

每个Promise实例的状态都处于三种状态中的一个:

- pending: 进行中
- fulfilled: 已实现
- rejected: 已拒绝

## 什么是polyfill

polyfill可以形象的称为“腻子”，就是装修的时候，可以把缺损的地方填充抹平。例如:

querySelectorAll是很多现代浏览器都支持的原生Web API，但是有些古老的浏览器并不支持，那么假设有人写了库，只要用了这个库， 你就可以在古老的浏览器里面使用document.querySelectorAll，使用方法跟现代浏览器原生API无异。那么这个库就可以称为Polyfill或者Polyfiller。

## 前端性能优化

- 减少请求(image, css, js)

- 域名拆分(浏览器能同时发起更多的请求)

- 开启Gzip压缩

- 开启KeepAlive(减少浏览器与服务器建立连接的次数)

## CSS 性能优化

- CSS文件压缩

- @import，导致浏览器不能并行下载样式

- id选择器、类选择器、标签选择器效率较高。

- 减少使用高开销的CSS属性: box-shadow, border-radius, filter, 透明度。

- 减少重排（Reflow）:不要一条一条地修改 DOM 的样式，预先定义好 class，然后修改 DOM 的 className。

- 为动画元素使用绝对定位 absolute /fixed。

- 使用硬件加速: translate3d, rotate3d, translateZ(0)

## 宏任务和微任务

微任务和宏任务皆为异步任务，它们都属于两个队列，主要区别在于他们的执行顺序，Event Loop的走向和取值。

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

## 纯函数

纯函数是满足如下条件的函数：

- 相同输入总是会返回相同的输出。
- 不产生副作用。
- 不依赖于外部状态。

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

## Object 循环 -start-

### 循环 `实例+原型` `可枚举` 的属性

- for in

### 循环 `实例` `可枚举` 的属性

- for in + hasOwnProperty

- Object.keys()

### 循环 `实例` `可枚举 + 不枚举` 的属性

- Oject.getOwnPropertyNames()

## Object 循环 -end-

## 关于 NW.js 和 Electron -start-

- 两者都可以用来编写跨平台的应用
- 两者都是基于Chromium和Node.js构建的

Electron 优势：

- 社区活跃
- 企业支持：Github、Microsoft
- 开箱即用的自动更新机制
- 构建过程更容易一些，不必构建整个Chromium

NW.js 优势：

- 支持Windows XP和旧版Mac OS
- NW.js更加面向浏览器
- 在JavaScript上下文方面有一个简单而强大的机制。
- 支持chrome扩展
- 使用Chrome PDF原生插件支持开箱即用的PDF文件
- 有一个源保护工具。允许将JavaScript编译为V8字节码
- 还支持所有Chromium命令行开关

## 关于 NW.js 和 Electron -end-
