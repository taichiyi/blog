<!-- markdownlint-disable MD033 -->
# 计算机网络 自顶向下方法 (第7版) 填空

## 第1章 计算机网络和互联网

### 1.1 什么是互联网

<details>
  <summary>智能手机、笔记本电脑、台式机、服务器，等能连接到互联网的设备，都称为__或__。</summary>
  <div>主机(host)</div>
  <div>端系统(end system)(因为在互联网的边缘，所以被称为端系统)</div>
</details>

<details>
  <summary>端系统通过__(__, ISP)接入互联网。</summary>
  <div>互联网服务提供商</div>
  <div>Internet Service Provider</div>
</details>

<details>
  <summary>TCP(__)传输控制协议; IP(__)网际协议。</summary>
  <div>Transmission Control Protocol</div>
  <div>Internet Protocol</div>
</details>

<details>
  <summary>互联网标准由__(__, IETF)研发。IETF的标准文档称为__(__, RFC)。RFC文档往往是技术性很强并相当详细的，它定义了包括TCP、IP、HTTP、SMTP等7000多个RFC。</summary>
  <div>互联网工程任务组</div>
  <div>Internet Engineering Task Force</div>
  <div>请求评论</div>
  <div>Request For Comment</div>
</details>

### 1.2 网络边缘

<details>
  <summary>端系统也称为主机(host)，因为它们能运行应用程序。主机又可以划分为: __和__。</summary>
  <div>客户端(client)</div>
  <div>服务器(server)</div>
</details>

<details>
  <summary>__(__, IoT)。</summary>
  <div>物联网</div>
  <div>Internet of Things</div>
</details>

<details>
  <summary>接入网是将端系统物理连接到其__的网络。边缘路由器是端系统到任何其他远程端系统的路径上的第一台路由器。</summary>
  <div>边缘路由器(edge router)</div>
</details>

<details>
  <summary>宽带住宅接入有两种过时的类型: __(__, DSL)和电缆。</summary>
  <div>数字用户线</div>
  <div>Digital Subscriber Line</div>
</details>

<details>
  <summary>当使用DSL时，用户的本地电话公司就是ISP。家庭的DSL调制解调器得到_1_信号后将其转换为_2_信号，以通过_3_线传输给位于电话公司的_4_, _5_信号被DSLAM分为数据和电话信号，将数据送往_6_网，电话信号送往_7_网。</summary>
  <div>1:数字</div>
  <div>2:模拟</div>
  <div>3:电话(双绞铜线)</div>
  <div>4:数字用户线接入复用器(DSLAM)</div>
  <div>5:模拟</div>
  <div>6:互联</div>
  <div>7:电话</div>
</details>

<details>
  <summary>电缆互联网接入(cable Internet access)利用了有线电视公司现有的有限电视基础设施。因为这个系统中应用了光纤和同轴电缆，所以也称为__。</summary>
  <div>混合光纤同轴系统</div>
</details>

<details>
  <summary>__(__, FTTH)是一种新兴的宽带住宅的技术。最简单的光纤分布网络为直接光纤，从本地中心局到每户设置一根网线。更常见的是，从中心局出来的每根光纤实际上由许多家庭共享，直到相对接近这些家庭的位置，该光纤才分成每户一根光纤。</summary>
  <div>光纤到户</div>
  <div>Fiber To The Home</div>
</details>

<details>
  <summary>公司、学校和家庭环境中，使用__将端系统连接到边缘路由器。尽管有许多不同类型的局域网技术，但是__是目前最流行的技术。</summary>
  <div>局域网(LAN)</div>
  <div>以太网</div>
</details>

<details>
  <summary>基于IEEE __ 技术的无线LAN接入，更通俗地称为WiFi。</summary>
  <div>802.11</div>
</details>

<details>
  <summary>在互联网中物理媒体通过传播__或__来发送比特。</summary>
  <div>电磁波</div>
  <div>光脉冲</div>
</details>

<details>
  <summary>物理媒体包括: __线、同轴__缆、多模__缆、__无线电频谱和__无线电频谱。</summary>
  <div>双绞铜</div>
  <div>电</div>
  <div>光纤</div>
  <div>陆地</div>
  <div>卫星</div>
</details>

<details>
  <summary>物理媒体分为两类: __和__。导引型媒体，电波沿着__前行，如光缆、双绞铜线或同轴电缆。非导引型媒体，电波在__中传播，如无线局域网或数字卫星频道中。</summary>
  <div>导引型媒体</div>
  <div>非导引型媒体</div>
  <div>固定媒体</div>
  <div>空气或外层空间</div>
</details>

### 1.3 网络核心

<details>
  <summary>在各种网络应用中，端系统彼此交换报文(message)。为了从源端系统向目的端系统发送一个报文，源将报文划分为较小的数据块，称之为__。</summary>
  <div>分组(packet)</div>
</details>

<details>
  <summary>在源和目的地之间，每个分组都通过通信链路和__传送。(交换机主要有两类:__和__。)</summary>
  <div>分组交换机(packet switch)</div>
  <div>路由器(router)</div>
  <div>链路层交换机(link-layer switch)</div>
</details>

<details>
  <summary>多数分组交换机在链路的输入端使用_1_。_1_是指在交换机能够开始向输出链路传输该分组的第一个比特之前，必须接收到__个分组。</summary>
  <div>1:存储转发传输(store-and-forward transmission)。</div>
  <div>整</div>
</details>

<details>
  <summary>每台分组交换机有多条__与之相连。对于每条相连的链路，该分组交换机具有一个__，也称为__。用于储存__延时和__延时(queuing delay)。</summary>
  <div>链路</div>
  <div>输出缓存(output buffer)</div>
  <div>输出队列(output queue)</div>
  <div>转发</div>
  <div>排队</div>
</details>

<details>
  <summary>因为交换机的缓存空间的大小是有限的，一个到达的分组可能发现该缓存已被其他等待传输的分组完全充满，这种情况下将出现__，也称为__，到达的分组或已经排队的分组之一将被丢弃。</summary>
  <div>分组丢失</div>
  <div>丢包(packet loss)</div>
</details>

<details>
  <summary>通过网络链路和交换机移动数据有两种方法: __交换(circuit switching)和__交换(packet switching)。</summary>
  <div>电路</div>
  <div>分组</div>
</details>

<details>
  <summary>通过网络链路和交换机移动数据有两种方法: __交换(circuit switching)和__交换(packet switching)。</summary>
  <div>电路</div>
  <div>分组</div>
</details>

<details>
  <summary>在__交换网络中，在端系统间通信会话期间，预留了端系统间沿路径通信所需要的__。在__交换网络中，这些资源则不会预留的。</summary>
  <div>电路</div>
  <div>资源(缓存，链路传输速率)</div>
  <div>分组</div>
</details>

### 1.5 协议层次及其服务模型

<details>
  <summary></summary>
  <div></div>
</details>

## 第2章 应用层

### 2.1 应用层协议原理

#### 2.1.2 进程通信

<details>
  <summary>对于操作系统来说，程序的实例叫做__。</summary>
  <div>进程(process)</div>
</details>

<details>
  <summary>进行通信的实际上是进程(process)而不是程序。在两个不同的端系统上的进程，通过跨越计算机网络相互交换__而相互通信。</summary>
  <div>报文(message)</div>
</details>

<details>
  <summary>在一对进程之间的通话场景中，发起通信的进程被标识为__，在会话开始时等待联系的进程是__。</summary>
  <div>客户</div>
  <div>服务器</div>
</details>

<details>
  <summary>进程通过一个叫__的软件接口向网络发送报文和从网络接收报文。套接字是同一台主机内应用层和传输层之间的接口。</summary>
  <div>套接字(socket)</div>
</details>

<details>
  <summary>除了知道报文发送目的地的主机地址外，发送进程还必须指定运行在接收主机上接收进程（更具体的说是，__）</summary>
  <div>接收套接字</div>
</details>

#### 2.1.4 因特网提供的运输服务

<details>
  <summary>因特网为应用程序提供了两个运输层协议，即__和__。</summary>
  <div>UDP</div>
  <div>TCP</div>
</details>

<details>
  <summary>当一个应用使用SSL时，发送进程向SSL套接字传递明文数据；在发送主机中的SSL则加密该数据并将加密的数据传递给TCP套接字。</summary>
  <div>单向工作</div>
</details>

<details>
  <summary>UDP的全称__。</summary>
  <div>User Datagram Protocol</div>
</details>

<details>
  <summary>UDP是__的，因为在两个进程通信前没有握过手</summary>
  <div>无连接</div>
</details>

<details>
  <summary>UDP的特点：报文不__能到达接收进程；到达接收进程的报文可能是__序到达的。没有__控制机制。</summary>
  <div>保证</div>
  <div>乱</div>
  <div>拥塞</div>
</details>

#### 2.1.5 应用层协议

<details>
  <summary>应用层协议（英文名称:__）定义了运行在不同端系统上的应用程序__如何相互传递__。</summary>
  <div>Application-layer protocol</div>
  <div>进程</div>
  <div>报文</div>
</details>

#### 2.1.6 本书涉及的网络应用

<details>
  <summary>说电子邮件比 Web 更复杂，是因为它使用了多个而不是一个__协议。</summary>
  <div>应用层</div>
</details>

#### 2.2.2 非持续连接和持续连接

<details>
  <summary>现代浏览器大多运行每个域__个左右并行的__连接。</summary>
  <div>6</div>
  <div>TCP</div>
</details>

#### 2.2.3 非持续连接和持续连接

<details>
  <summary>HTTP 请求报文的第一行叫作__。后继的行叫作__。</summary>
  <div>请求行(request line)</div>
  <div>首部行(header line)</div>
</details>

<details>
  <summary>首部行(和附加的回车和换行)后有一个__。</summary>
  <div>“实体体”(entity body)</div>
  <div></div>
</details>

<details>
  <summary>报文的状态行有3个字段, 左至右分别是: __、__、__。</summary>
  <div>协议版本</div>
  <div>数字状态码</div>
  <div>短语(状态文本)</div>
</details>

<details>
  <summary>在HTTP协议中的CR、LF、SP都是__中的一个码。</summary>
  <div>ASCII</div>
</details>

<details>
  <summary>CR: 代表回车，全称__，码值__。</summary>
  <div>carriage return</div>
  <div>13</div>
</details>

<details>
  <summary>LF: 代表换行，全称__，码值__。</summary>
  <div>linefeed</div>
  <div>10</div>
</details>

<details>
  <summary>SP: 代表空格，全称__，码值__。</summary>
  <div>space</div>
  <div>10</div>
</details>

<details>
  <summary>响应首部行的Content-Length指示了被发送对象的__数。</summary>
  <div>字节</div>
</details>

#### 2.2.4 用户与服务器的交互: cookie

<details>
  <summary>对于同一个请求的URL，很多情况下服务器想根据不同的身份返回不同的内容。但是HTTP是无状态的，所以无法通过一个请求的URL判断身份，所以有了__。</summary>
  <div>cookie</div>
</details>

<details>
  <summary>cookie技术有4个组件: 1.HTTP__报文首部行中的cookie；2.HTTP__报文首部行中的cookie；3.用户端系统中保留cookie文件，并由用户的__进行管理。4. 位于 Web 站点的一个后端__。</summary>
  <div>响应</div>
  <div>请求</div>
  <div>浏览器</div>
  <div>数据库</div>
</details>

#### 2.2.5 Web 缓存

<details>
  <summary>Web 缓冲器(Web cache)也叫__(__)，它是能够代表初始Web服务器来满足HTTP请求的网络实体。</summary>
  <div>代理服务器</div>
  <div>proxy server</div>
</details>

<details>
  <summary>通过使用内容分发网络(__，CDN)，Web 缓存器正在因特网中发挥着越来越重要的作用。</summary>
  <div>Content Distribution Network</div>
</details>

#### 2.2.6 条件 GET 方法

<details>
  <summary>HTTP协议有一种机制，允许缓存器证实它的对象是最新的。这个机制就是__方法。</summary>
  <div>条件GET</div>
  <div>conditional GET</div>
</details>

<details>
  <summary>如果①请求报文使用GET方法；并且②请求报文中包含一个“__:”首部行。</summary>
  <div>If-Modified-Since</div>
</details>

<details>
  <summary>如果响应数字状态码为__，则响应实体体为空。</summary>
  <div>304</div>
</details>

### 2.3 因特网中的电子邮件

<details>
  <summary>SMTP的全称__。</summary>
  <div>Simple Mail Transfer Protocol</div>
</details>

<details>
  <summary>因特网电子邮件系统由3个主要部分组成：__、__、__。</summary>
  <div>用户代理(user agent)</div>
  <div>邮件服务器</div>
  <div>简单邮件传送协议</div>
</details>

<details>
  <summary>一个典型的邮件发送过程是: 从__方的用户代理开始，传输到__方的邮件服务器，再传输到接收方的__服务器，然后被分发到接收方的__中。</summary>
  <div>发送</div>
  <div>发送</div>
  <div>邮件</div>
  <div>邮箱</div>
</details>

<details>
  <summary>SMTP的RFC可以追溯到__年。</summary>
  <div>1982</div>
</details>

<details>
  <summary>SMTP一般不使用__邮件服务器发送邮件。</summary>
  <div>中间</div>
</details>

<details>
  <summary>SMTP默认使用__端口。</summary>
  <div>25</div>
</details>

### 2.3.2 与 HTTP 的对比

<details>
  <summary>HTTP 主要是一个__。SMTP主要是一个__。</summary>
  <div>拉协议(pull protocol)</div>
  <div>推协议(push protocol)</div>
</details>

<details>
  <summary>POP3的全称__。</summary>
  <div>Post Office Protocol--Version 3</div>
  <div>第三方邮局协议</div>
</details>

<details>
  <summary>IMAP的全称__。</summary>
  <div>Internet Mail Access Protocol</div>
  <div>因特网邮件访问协议</div>
</details>

<details>
  <summary>SMTP用来将邮件从发送方的__传输到接收方的邮件服务器；SMTP 也用来将邮件从发送方的__传送到发送方的邮件服务器。</summary>
  <div>邮件服务器</div>
  <div>用户代理</div>
</details>

<details>
  <summary>__、__或__用来将邮件从接收方的邮件服务器传送到接收方的用户代理。</summary>
  <div>POP3</div>
  <div>IMAP</div>
  <div>HTTP</div>
</details>

<details>
  <summary>POP3协议默认用的是__端口。</summary>
  <div>110</div>
</details>

<details>
  <summary>POP3 按照3个阶段进行工作: __、__和__。</summary>
  <div>特许(authorization)</div>
  <div>事务处理</div>
  <div>更新</div>
</details>

<details>
  <summary>POP3 在特许阶段后，用户代理可以使用4个命令__、__、__、__。</summary>
  <div>list(邮件列表)</div>
  <div>retr()</div>
  <div>dele(删除)</div>
  <div>quit(退出第二阶段)</div>
</details>

<details>
  <summary>POP3 没有给用户代理提供创建远程__并为报文指派文件夹。</summary>
  <div>文件夹</div>
</details>

<details>
  <summary>IMAP 还为用户提供了远程文件夹中__邮件的命令，按指定条件去查询匹配的邮件。</summary>
  <div>查询</div>
</details>

<details>
  <summary>IMAP 允许用户代理获取报文的__。出于带宽考虑。</summary>
  <div>某些部分</div>
</details>

<details>
  <summary>当用户代理是普通的浏览器时，用户代理通过__协议向发送方服务器发送电子邮件报文。</summary>
  <div>HTTP</div>
</details>

### 2.4 因特网对的目录服务

### 2.4.1 DNS提供的服务

<details>
  <summary>DNS英文全称__，中文全称__。</summary>
  <div>Domain Name System</div>
  <div>域名系统</div>
</details>

<details>
  <summary>在因特网中，识别主机有两种方式__或者__。</summary>
  <div>主机名(host name)www.so.com</div>
  <div>IP地址(IP address)</div>
</details>

<details>
  <summary>路由器只认识__地址。</summary>
  <div>IP</div>
</details>

<details>
  <summary>DNS是：①一个由分层的DNS服务器实现的__数据库；②一个使得主机能够查询分布式数据库的__层协议。</summary>
  <div>分布式</div>
  <div>应用</div>
</details>

<details>
  <summary>DNS服务器通常是运行BIND(Berkeley Internet Name Domain)软件的__机器。</summary>
  <div>UNIX</div>
</details>

<!-- <details>
  <summary>DNS协议运行在__协议之上，使用__号端口。</summary>
  <div>UDP</div>
  <div>53</div>
</details> -->

<details>
  <summary>浏览器在发送HTTP请求报文之前，会从URL中抽取__，然后通过__向DNS服务器发送一个包含主机名的请求，从DNS服务器收到IP后，它能够向位于该IP地址80端口的HTTP服务器__发起一个TCP连接。</summary>
  <div>主机名</div>
  <div>DNS客户端</div>
  <div>进程</div>
</details>

<details>
  <summary>为了减少延时，IP地址通常会缓存在一个“附近的”__中。</summary>
  <div>DNS服务器</div>
</details>

### 2.4.2 DNS工作机理概述

<details>
  <summary>在很多基于UNIX的机器上，应用程序为了执行这种转换需要调用函数 __()。</summary>
  <div>gethostbyname</div>
</details>

<details>
  <summary>DNS客户端接受到主机名后，向网络中发送一个DNS查询报文。所有的DNS请求和回答报文使用__数据报 经端口___发送。</summary>
  <div>UDP</div>
  <div>53</div>
</details>

<details>
  <summary>DNS 的一种简单设计是在因特网只有一个DNS服务器，该服务器包含所有的__。</summary>
  <div>映射</div>
</details>

<details>
  <summary>单一DNS服务器的缺点: __；__；__。</summary>
  <div>单点故障</div>
  <div>带宽问题</div>
  <div>延迟高</div>
</details>

<details>
  <summary>DNS 是一个在__上实现的__数据库。</summary>
  <div>因特网</div>
  <div>分布式</div>
</details>

<details>
  <summary>大量的 DNS 服务器，以__方式组织。</summary>
  <div>层次</div>
</details>

<details>
  <summary>__层次 DNS 服务器拥有因特网上所有的主机的映射。</summary>
  <div>没有哪个</div>
</details>

<details>
  <summary>有3种类型的DNS服务器：__DNS服务器、__DNS服务器和__DNS服务器。</summary>
  <div>根</div>
  <div>顶级域</div>
  <div>权威</div>
</details>

<details>
  <summary>TLD的英文全称__；中文全称__。</summary>
  <div>Top-Level Domain</div>
  <div>顶级域</div>
</details>

<details>
  <summary>本地DNS服务器属不属于DNS服务器层次结构？</summary>
  <div>不属于</div>
</details>

<details>
  <summary>主机名获取IP地址先后访问DNS服务器顺序: __服务器->__服务器->__服务器->__服务器。最终__服务器会根据主机名返回IP地址。</summary>
  <div>本地</div>
  <div>根</div>
  <div>顶级</div>
  <div>权威</div>
  <div>权威</div>
</details>

<details>
  <summary>当主机发出DNS请求时，改请求被发往__DNS服务器，它起着__的作用，并将该请求转发到DNS服务器层次结构中。</summary>
  <div>本地</div>
  <div>代理</div>
  <div>本地代理服务器例子：8.8.8.8</div>
  <div>本地代理服务器例子：223.6.6.6</div>
</details>

<details>
  <summary>当某DNS服务器接收到一个DNS回答时，它能将映射__在本地存储器中。</summary>
  <div>缓存</div>
</details>

### 2.4.3 DNS 记录和报文
