<!-- markdownlint-disable MD033 -->
# nginx 知识点 填空

<details>
  <summary>如果nginx的正则表达式含有“__”或“__”，则应该用单引号或双引号包裹起来。</summary>
  <div>}</div>
  <div>;</div>
</details>

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
  <summary>如果“正则表达式”和“前缀字符串”都有匹配项，则会使用谁的匹配项?(前缀字符串匹配项中没有^~的情况下)</summary>
  <div>正则表达式</div>
</details>

<details>
  <summary>在“__”里：[完整匹配]>[^~部分匹配]>[部分匹配]</summary>
  <div>前缀字符串</div>
</details>

<details>
  <summary>`location`匹配的是URL的__部分，也就是不包含__和authority</summary>
  <div>path</div>
  <div>参数(query)</div>
</details>

<details>
  <summary>在匹配模式下，有4种修饰符：`~`、`~*`、`^~`、`=`。`~`的意义__；`~*`的意义__；`^~`的意义__；`=`的意义__；</summary>
  <div>`~` 后面接正则表达式，区分大小写</div>
  <div>`~*` 后面接正则表达式，不区分大小写</div>
  <div>`^~` 后面接前缀字符串。如果是最长的前缀字符串匹配项，则不检查正则表达式。</div>
  <div>`=` 后面接前缀字符串。精确匹配，满足条件则停止任何匹配</div>
</details>

## try_files

<details>
  <summary>`try_files`主要用于没有__资源时的重定向，`try_files`可以在__和__上下文中使用。</summary>
  <div>找到</div>
  <div>server</div>
  <div>location</div>
</details>

## ngx_http_rewrite_module

### break

<details>
  <summary>`break;`主要是为了停止处理当前的ngx_http_rewrite_module__，`break;`可以在__、__和__上下文中使用。</summary>
  <div>指令集</div>
  <div>server</div>
  <div>location</div>
  <div>if</div>
</details>

### rewrite

<details>
  <summary>`rewrite`主要用于修改URL，可以在__、__和__上下文中使用。</summary>
  <div>server</div>
  <div>location</div>
  <div>if</div>
</details>

<details>
  <summary>`rewrite`的语法: rewrite __ replacement [flag];</summary>
  <div>regex</div>
</details>

<details>
  <summary>如果`replacement`字符串以“http://”,“https://”或者“$scheme”开头，则停止执行其他指令，并__至`replacement`。数字状态码为__。</summary>
  <div>重定向</div>
  <div>302</div>
</details>

<details>
  <summary>`rewrite`只能返回两种数字状态码__和__。</summary>
  <div>301</div>
  <div>302</div>
</details>

<details>
  <summary>如果想让数字状态码为301，则标签为__。</summary>
  <div>permanent</div>
</details>

<details>
  <summary>last标签的意义是：停止当前指令集，把__URI，重新进行`location`匹配。</summary>
  <div>修改后的</div>
</details>

### if

<details>
  <summary>`if`可以在__和__上下文中使用。</summary>
  <div>server</div>
  <div>location</div>
</details>

<details>
  <summary>`if`的语法: if (__) {...}。</summary>
  <div>condition</div>
</details>

<details>
  <summary>condition是一个变量时(字符串)，当变量为__或__时为假。</summary>
  <div>空字符串</div>
  <div>"0"</div>
</details>

<details>
  <summary>condition含有“~”或“~*”时，则运算符的左边是__，右边是__。运算符可以取反__、__。</summary>
  <div>变量</div>
  <div>正则表达式</div>
  <div>!~</div>
  <div>!~*</div>
</details>

<details>
  <summary>condition的正则表达式可以包含__，这些捕获可供以后在$1..$9变量中重用。</summary>
  <div>捕获(captures)</div>
</details>

<details>
  <summary>可以在condition的头部使用运算符__、__检查文件是否存在。</summary>
  <div>-f</div>
  <div>!-f</div>
  <div>例子:if (!-f $request_filename) {...}</div>
</details>

<details>
  <summary>可以在condition的头部使用运算符__、__检查目录是否存在。</summary>
  <div>-d</div>
  <div>!-d</div>
</details>

<details>
  <summary>可以在condition的头部使用运算符__、__检查目录或连接是否存在。</summary>
  <div>-e</div>
  <div>!-e</div>
</details>

<details>
  <summary>可以在condition的头部使用运算符__、__检查是否为可执行文件。</summary>
  <div>-x</div>
  <div>!-x</div>
</details>
