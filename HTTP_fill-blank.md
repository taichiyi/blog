<!-- markdownlint-disable MD033 MD037 -->
# HTTP 知识点 填空

## Data URLs -start-

<details>
  <summary>Data URLs，即前缀为 `__` 协议的URL，其允许内容创建者向文档中嵌入小文件。</summary>
  <div>data:</div>
</details>

<details>
  <summary>Data URLs 由四个部分组成：__:[&lt;__&gt;][;__],&lt;__&gt;。例子：</summary>
  <div>data mediatype base64 data</div>
  <pre>
  [data:data]
  data:,Hello%2C%20World!
  <!--  -->
  [data:mediatype;base64,data]
  data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==
  <!--  -->
  [data:mediatype,data]
  data:text/html;charset=utf8,%3Ch1%3EHello%2C%20World %E7%BE%BD%E7%BF%BC!%3C%2Fh1%3E
  </pre>
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

## HTTP -start-

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
  <summary>浏览器缓存主要分为__缓存和__缓存。</summary>
  <div>强（也称本地缓存）</div>
  <div>协商（也称弱缓存）</div>
</details>

<details>
  <summary>强缓存通过__和__两种响应头实现。</summary>
  <div>Expires</div>
  <div>Cache-Control</div>
</details>

<details>
  <summary>__ 响应头包含日期/时间，即在此时候之后，响应过期。如果在Cache-Control响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。</summary>
  <div>Expires</div>
</details>

<details>
  <summary>协商缓存是利用的是 __和__ 或 __和__ 这两对请求头来管理的。例子：图片：</summary>
  <div>Last-Modified</div>
  <div>If-Modified-Since</div>
  <div>ETag</div>
  <div>If-None-Match</div>
  <pre>
  请求首部:
  If-Modified-Since: Fri, 15 May 2020 02:20:38 GMT
  If-None-Match: W/"5ebdfc76-7ab"

  响应首部:
  ETag: W/"5ebdfc76-7ab"
  Last-Modified: Fri, 15 May 2020 02:20:38 GMT
  </pre>
  <img src="https://oss.taichiyi.com/markdown/2926334056-56fe382bb7a63_articlex.png" />
</details>

<details>
  <summary> __ 响应首部是HTTP/1.1新增的，包含源头服务器认定的资源做出修改的日期及时间。由于精确度比 ETag 要低，所以这是一个备用机制。例子：</summary>
  <div>Last-Modified</div>
  <pre>
  Last-Modified: Fri, 15 May 2020 02:20:38 GMT
  </pre>
</details>

<details>
  <summary> __ 响应首部是HTTP/1.1新增的，是资源的特定版本的标识符。可以理解为文件的散列值。例子：</summary>
  <div>ETag</div>
  <pre>
  ETag: W/"a3ccf58c54b75ad418072b76737b9bb9"
  </pre>
</details>

<details>
  <summary>要设置HTTP资源缓存到浏览器的时间，可以在请求的响应头中添加__指令。</summary>
  <div>Cache-Control</div>
</details>

<details>
  <summary>如果请求不想让代理服务器缓存，可在请求首部行添加Cache-Control属性，并且在值中添加__，想缓存则添加__。例子：</summary>
  <div>private</div>
  <div>public</div>
  <pre>Cache-Control: public, max-age=31536000</pre>
</details>

<details>
  <summary>URI只支持__字符集。</summary>
  <div>ASCII</div>
</details>

<details>
  <summary>不同的浏览器和CDN，对URI的长度是有不同的限制的，如果想兼容所有，请把URI的长度控制在__字节以下。</summary>
  <div>2000</div>
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
  <summary>HTTP是一个客户端（用户）和服务端（网站）之间__和__的标准。</summary>
  <div>请求</div>
  <div>应答</div>
</details>

<details>
  <summary>通常，由HTTP客户端发起一个请求，创建一个到服务器指定端口（默认是__端口）的__连接。</summary>
  <div>80</div>
  <div>TCP</div>
</details>

<details>
  <summary>请求方法是否区分大小写？</summary>
  <div>是</div>
</details>

<details>
  <summary>首部行的键区分大小写？</summary>
  <div>不是</div>
</details>

<details>
  <summary>如果请求没有实体主体，可以不用发送实体首部？</summary>
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
  <div>实体主体</div>
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
  <summary>在HTTP/1.0及以后版本中，HTTP响应的第一行称为__行，并包括__状态代码。</summary>
  <div>状态(status line)</div>
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

## HTTP -end-

## Cookie -start-

<details>
  <summary>不同浏览器理论上是可以共用cookie的，但是主要出于__考虑没有共用，因为不同浏览器在本地储存cookie的__不一样。</summary>
  <div>安全</div>
  <div>位置</div>
</details>

<details>
  <summary>Cookie于__年在网络中使用。</summary>
  <div>1994</div>
  <div>位置</div>
</details>

<details>
  <summary>会话cookie(__ cookie)也称为内存cookie、非持久cookie。当浏览器判断__结束，会删除该cookie。</summary>
  <div>Session</div>
  <div>会话</div>
</details>

<details>
  <summary>持久性cookie，会在指定__后删除或__一段时间后删除。</summary>
  <div>日期</div>
  <div>存在</div>
</details>

<details>
  <summary>安全cookie(__ cookie)，只能传输一个__的连接(例如HTTPS)传输。</summary>
  <div>Secure</div>
  <div>加密</div>
  <div>set-cookie: token=tcy;Domain=.aliyun.com;Path=/;Secure</div>
</details>

<details>
  <summary>HttpOnly cookie：客户端api（如__）无法__`仅限http`的cookie。这种限制通过跨站点脚本（XSS）消除了cookie被盗的威胁。</summary>
  <div>JavaScript</div>
  <div>访问</div>
    <div>set-cookie: token=tcy;Domain=.aliyun.com;Path=/;HttpOnly</div>
</details>

<details>
  <summary>SameSite cookie：20__年，Chrome引入了一种新的cookie，它只能在与目标域源于同一个__的请求中发送。此限制减轻了跨站点请求伪造（XSRF）等攻击。通过将SameSite标志设置为__或__，cookie被赋予了此特性</summary>
  <div>16</div>
  <div>源</div>
  <div>Strict</div>
  <div>None</div>
  <div>set-cookie: token=tcy;Domain=.aliyun.com;Path=/;SameSite=None<div>
  <div>set-cookie: token=tcy;Domain=.aliyun.com;Path=/; (可以有空格)SameSite=Strict<div>
</details>

<details>
  <summary>__是源于顶级域名(例如.com)，由于存在较大的安全隐患，所以基本都被浏览器禁用了。</summary>
  <div>Supercookie</div>
</details>

## Cookie -end-

<details>
  <summary>全双工(全部同时双向工作): 允许数据在__个方向上__传输。</summary>
  <div>两</div>
  <div>同时</div>
</details>

<details>
  <summary>半双工(一半同时双向工作): 两个方向都能发送数据，但是两个方向不能__发送。</summary>
  <div>同时</div>
</details>

<details>
  <summary>单工(__): 只有一个方向能发送数据。</summary>
  <div>单向工作</div>
</details>

<details>
  <summary>在终端中打印www.so.com的响应报文:curl __ www.so.com</summary>
  <div>-i</div>
</details>

<details>
  <summary>1 kB = __ bytes</summary>
  <summary>1 KiB = __ bytes</summary>
  <div>1000</div>
  <div>1024</div>
</details>

<details>
  <summary>socket是一种操作系统提供的__间通信机制</summary>
  <div>进程</div>
</details>

<details>
  <summary>TLS 握手过程：</summary>
  <pre>
  1. 客户端向服务器发起请求，请求中包含：安全传输层协议（TLS）版本号、客户端生成的一个随机数、支持的加密和压缩方法。
  2. 服务器端接收到请求后，向客户端发出响应，响应中包含：确认使用的加密方法和压缩方法、服务器生成的一个随机数、服务器的证书。
  3. 客户端收到服务器的响应后，确认服务器证书的机构、域名、日期是否有效，生成一个新的随机数，并使用数字证书中的公钥，加密这个随机数，然后发给服务器。并且还会提供一个前面所有内容的 hash 的值，用来供服务器检验。
  4. 服务器使用自己的私钥，来解密客户端发送过来的随机数。并提供前面所有内容的 hash 值来供客户端检验。
  5. 客户端和服务器端根据约定的加密方法使用前面的三个随机数，生成对话秘钥，以后的对话过程都使用这个秘钥来加密信息。
  </pre>
</details>
