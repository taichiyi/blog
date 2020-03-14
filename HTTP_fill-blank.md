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
</details>

<details>
  <summary>HTTPS协议的全称是__。</summary>
  <div>HyperText Transfer Protocol Secure</div>
</details>

<details>
  <summary>URI的全称是__。</summary>
  <div>Uniform Resource Identifiers</div>
</details>

<details>
  <summary>设计HTTP最初的目的是为了提供一种发布和接收__的方法。通过HTTP或者HTTPS协议请求的资源由__来标识。</summary>
  <div>HTML页面</div>
  <div>URI</div>
</details>
