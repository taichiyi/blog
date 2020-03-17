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
  <summary>HTTP 请求报文的第一行叫作__。</summary>
  <div>请求行(request line)</div>
</details>
