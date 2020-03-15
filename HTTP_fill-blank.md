<!-- markdownlint-disable MD033 -->
# HTTP 知识点 填空

## Data URLs -start-

<details>
  <summary>Data URLs，即前缀为 __ 协议的URL，其允许内容创建者向文档中嵌入小文件。</summary>
  <div>data:</div>
</details>

<details>
  <summary>Data URLs 由四个部分组成：__:[&lt;__&gt;][;__],&lt;__&gt;。</summary>
  <div>data mediatype base64 data</div>
</details>

<details>
  <summary>(接上文)mediatype 是一个__类型的字符串，默认值为 text/plain;charset=__；(chartset可选)如果非__则为可选的base64标记；data为数据本身。</summary>
  <div>MIME US-ASCII</div>
  <div>文本</div>
</details>

<details>
  <summary>常用的mediatype有`text/plain;charset=UTF-8`；`text/html`；`__/jpeg`；`multipart/form-data`</summary>
  <div>image</div>
</details>

## Data URLs -end-

## MIME types -start-

<details>
  <summary>MIME types (全称为 Multipurpose Internet Mail Extensions)是一种标准。用于说明文件、文档或字节流的性质和__。是否区分大小写？</summary>
  <div>格式 不区分</div>
</details>

<details>
  <summary>最简单的 MIME type 的格式为__/__，不允许有空格。</summary>
  <div>type subtype</div>
</details>

<details>
  <summary>MIME type 还可以添加可选参数以提供详细信息。格式为type/subtype;_A_=_B_。_A_默认为__；_B_默认为__。</summary>
  <div>A:parameter B:value</div>
  <div>charset US-ASCII</div>
</details>

## MIME types -end-

<details>
  <summary>要设置HTTP资源缓存到浏览器的时间，可以在请求的响应头中添加__指令。</summary>
  <div>Cache-Control</div>
</details>

<details>
  <summary>HTTP协议的全称是__。</summary>
  <div>HyperText Transfer Protocol</div>
  <div>超文本传输协议</div>
</details>

<details>
  <summary>HTTPS协议的全称是__。</summary>
  <div>HyperText Transfer Protocol Secure</div>
  <div>超文本传输安全协议</div>
</details>

<details>
  <summary>URI的全称是__。</summary>
  <div>Uniform Resource Identifiers</div>
</details>

<details>
  <summary>统一资源标识符（URI）是一个字符串，用于标识Internet上的__或__。</summary>
  <div>名称</div>
  <div>资源</div>
</details>

<details>
  <summary>URN和URL是URI的__集。URN以__前缀开头。</summary>
  <div>urn:</div>
</details>

<details>
  <summary>思考后，点看图片。URL左到右由__、__、__、__、__组成。authority由__、__、__组成。</summary>
  <div>scheme</div>
  <div>authority</div>
  <div>path</div>
  <div>query</div>
  <div>fragment</div>
  <div>-</div>
  <div>userinfo</div>
  <div>host</div>
  <div>port</div>
  <img src="https://oss.taichiyi.com/markdown/Hypertext_Transfer_Protocol.jpg" />
</details>

<details>
  <summary>URN定义资源的__，而URL提供__。</summary>
  <div>身份</div>
  <div>位置</div>
</details>

<details>
  <summary>设计HTTP最初的目的是为了提供一种发布和接收__的方法。通过HTTP或者HTTPS协议请求的资源由__来标识。</summary>
  <div>HTML页面</div>
  <div>URI</div>
</details>

<details>
  <summary>HTTP历代版本: 19__:HTTP/0.9 19__:HTTP/1.0 19__:HTTP/1.1 20__:HTTP/2.0 20__:HTTP/3.0 </summary>
  <div>91</div>
  <div>96</div>
  <div>97</div>
  <div>15</div>
  <div>18</div>
</details>

<details>
  <summary>HTTP/0.9只支持__请求，不支持__头。</summary>
  <div>GET</div>
  <div>请求</div>
</details>

<details>
  <summary>HTTP/1.0只支持__、__、__请求。</summary>
  <div>GET</div>
  <div>POST</div>
  <div>HEAD</div>
</details>

<details>
  <summary>在HTTP0.9和1.0中，连接在单个__/__对之后关闭。</summary>
  <div>请求</div>
  <div>响应</div>
</details>

<details>
  <summary>HTTP/1.1引入了__机制，在发送第一个请求之后，后面的请求不用每次都进行TCP的3次握手。</summary>
  <div>keep-alive</div>
</details>

<details>
  <summary>互联网工程任务组，在19__年公布的 RFC 2616，该标准定义了HTTP协议中现今广泛使用的一个版本——HTTP/__。</summary>
  <div>99</div>
  <div>1.1</div>
</details>

<details>
  <summary>HTTP是一个客户端（用户）和服务端（网站）之间__和__的标准，通常使用__协议。</summary>
  <div>请求</div>
  <div>应答</div>
  <div>TCP</div>
</details>

<details>
  <summary>通常，由HTTP客户端发起一个请求，创建一个到服务器指定端口（默认是__端口）的__连接。</summary>
  <div>80</div>
  <div>TCP</div>
</details>

<details>
  <summary>使用统一资源标识符（URI）协议http和https，通过统一资源定位符（URL）标识HTTP资源并将其放置在网络上。</summary>
  <div>80</div>
  <div>TCP</div>
</details>

<details>
  <summary>HTTP/__协议新增了__种请求方法（也叫“动作”）来以不同方式操作指定的__。</summary>
  <div>1.1</div>
  <div>5</div>
  <div>资源</div>
</details>

<details>
  <summary>HTTP/__协议新增了__种请求方法（也叫“动作”）来以不同方式操作指定的__。</summary>
  <div>1.1</div>
  <div>5</div>
  <div>资源</div>
</details>

<details>
  <summary>请求方法是否区分大小写？</summary>
  <div>是</div>
</details>

<details>
  <summary>GET: 应仅__数据，而没有其他效果。</summary>
  <div>检索（获取）</div>
</details>

<details>
  <summary>HEAD: 顾名思义，只有返回响应头，没有响应__，其他和GET一样。</summary>
  <div>主体</div>
</details>

<details>
  <summary>POST: 通过__向服务器发送数据。</summary>
  <div>请求主体</div>
</details>

<details>
  <summary>PUT: 向指定资源位置上传资源。有则__，没有则__。</summary>
  <div>覆盖</div>
  <div>新建</div>
</details>

<details>
  <summary>DELETE: __服务器指定的资源。</summary>
  <div>删除</div>
</details>

<details>
  <summary>TRACE: __服务器收到的请求，主要用于测试或诊断。也可以用作一类称为跨站点跟踪的攻击的一部分。因此，通常的安全建议是在服务器配置中将其禁用。</summary>
  <div>回显</div>
</details>

<details>
  <summary>OPTIONS: 这个方法可使服务器传回该资源所支持的所有HTTP__方法。用'*'来代替资源名称，向Web服务器发送OPTIONS请求，可以测试服务器功能是否正常运作。</summary>
  <div>请求</div>
</details>

<details>
  <summary>CONNECT: 通常将请求连接转换为透明的__隧道，以方便通过未加密的HTTP代理进行SSL加密的通信（HTTPS）</summary>
  <div>TCP/IP</div>
</details>

<details>
  <summary>PATCH: 对资源进行__修改。</summary>
  <div>部分</div>
</details>

<details>
  <summary>所有通用HTTP服务器都必须至少实现__和__方法，而所有其他方法在规范中都被认为是可选的。</summary>
  <div>GET</div>
  <div>HEAD</div>
</details>

<details>
  <summary>可以被缓存的请求方法有：__、__、__。</summary>
  <div>GET</div>
  <div>POST</div>
  <div>HEAD</div>
</details>

<details>
  <summary>幂等(idempotent): 在相同输入下，多次运算的结果__。反之，非幂等。</summary>
  <div>相等</div>
</details>

<details>
  <summary>在HTTP/1.0及以后版本中，HTTP响应的第一行称为__行，并包括__状态代码。</summary>
  <div>状态</div>
  <div>数字</div>
</details>

<details>
  <summary>数字状态码: 1XX __; 2XX __; 3XX __; 4XX __; 5XX __;</summary>
  <div>1 信息的</div>
  <div>2 成功的</div>
  <div>3 重定向</div>
  <div>4 客户端错误</div>
  <div>5 服务端错误</div>
</details>

<details>
  <summary>ETag（实体标签）标头字段用于确定请求资源的__是否与服务器上资源的当前版本相同。</summary>
  <div>缓存版本</div>
</details>
