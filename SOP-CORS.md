# 同源策略与跨域

同源策略(Same origin policy)
跨域: 跨域资源共享(CORS: Cross-Origin Resource Sharing)

要理解跨域首先要了解“同源策略”，“同源策略”是由Netscape提出的一个著名的安全策略，现在所有支持JavaScript 的浏览器都会使用这个策略。

## “同源策略” 是什么

所谓同源是指，协议，域名，端口相同。如果两个页面，协议、端口和主机都相同，则两个页面具有相同的源（或者说符合同源策略）。

下表给出了相对<http://store.company.com/dir/page.html>同源检测的示例:
协议：http
域名：store.company.com
端口：80(http默认端口为80，等同于<http://store.company.com:80/dir/page.html>)

| URL | 结果 | 原因 |
| - | - | - |
| <http://store.company.com/dir2/other.html> | 成功 | 同源，协议：http；域名：store.company.com；端口：80 |
| <https://store.company.com/secure.html> | 失败 | 协议不同，协议：https；域名：store.company.com；端口：80 |
| <http://store.company.com:81/dir/etc.html> | 失败 | 端口不同，协议：http；域名：store.company.com；端口：81 |
| <http://news.company.com/dir/other.html> | 失败 | 域名不同，协议：http；域名：news.company.com；端口：80 |

## “同源策略” 为什么

同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。

情景：你在浏览器打开了A购物网站，登陆成功后A网站把登录成功后的信息，用户名、手机号、头像等信息存在Cookie里。然后你有打开了B网站，如果没有“同源策略”的话，B网站的JavaScript就可以读取A网站存在Cookie里的信息。

所以没有“同源策略”的话，是很不安全的。

## 哪些都受“同源策略”的保护

- Cookie
- localStorage
- sessionStorage
- IndexedDB
- XMLHttpRequest
- Fetch
- 等等(别问我等等是谁)

## “同源策略” 怎么做

- JSONP
    script、img标签没有“同源策略”的限制，缺点是只能发GET请求

- (标准)跨域: 响应头加上Access-Control-Allow-Origin: *

- node.js 做跳板

- Nginx代理

- 让浏览器不遵循“同源策略”
    1. open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/taichiyi/MyChromeDevUserData/
    2. 谷歌插件

## 其他要点

- 只有浏览器才遵循“同源策略”，所以服务端没有跨域问题

- 浏览器一般不限制发起请求，一般是返回结果后才根据“同源策略”进行拦截

- 手机浏览器和webView不遵循“同源策略”
