<!-- markdownlint-disable MD033 -->
# nginx 知识点 填空

## location

<details>
  <summary>`location`主要是为了匹配请求的__，`location`可以在__和__上下文中使用。</summary>
  <div>URI</div>
  <div>server</div>
  <div>location</div>
</details>

<details>
  <summary>`location`主要有两种定义模式。一种是“__模式”：@name(不参与匹配)，一种是“__模式”：直接匹配__。（也可以理解为定义模式是定义了一个函数并赋给了一个变量，匹配模式是直接运行了一个立即执行函数）</summary>
  <div>定义</div>
  <div>匹配</div>
  <div>URI</div>
</details>

<details>
  <summary>在匹配模式下有两种定义方式：一种是__匹配，一种是__匹配。</summary>
  <div>前缀字符串</div>
  <div>正则表达式</div>
</details>

<details>
  <summary>如果前后两个前缀字符串匹配项相同，将会保存前面的匹配项还是后面的匹配项？</summary>
  <div>报错</div>
  <div>nginx: [emerg] duplicate location</div>
</details>

<details>
  <summary>如果前后两个正则表达式完全相同(包括修饰符)，将会保存前面匹配项还是后面的匹配项？</summary>
  <div>前面的匹配项</div>
  <div>正则表达式中搜索到第一个匹配项即,终止搜索后面的正则表达式。</div>
</details>

<details>
  <summary>如果“正则表达式”和“前缀字符串”都有匹配项，则会使用谁的匹配项?</summary>
  <div>正则表达式</div>
</details>

<details>
  <summary>在匹配模式下，有4种修饰符：`~`、`~*`、`^~`、`=`。`~`的意义__；`~*`的意义__；`^~`的意义__；`=`的意义__；</summary>
  <div>`~` 后面接正则表达式，不区分大小写</div>
  <div>`~*` 后面接正则表达式，区分大小写</div>
  <div>`^~` 后面接前缀字符串。如果是最长的前缀字符串匹配项，则不检查正则表达式。</div>
  <div>`=` 后面接前缀字符串。精确匹配，满足条件则停止任何匹配</div>
</details>
