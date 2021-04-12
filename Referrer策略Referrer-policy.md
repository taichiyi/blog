# Referrer-policy

## 指令 (Directives)

| Policy | Document | Navigation to | Referrer |
| - | - | - | - |
|no-referrer|https://example.com/page|anywhere|(no referrer)|
|no-referrer-when-downgrade|同上|https://example.com/otherpage|https://example.com/page|
|同上|同上|https://mozilla.org|https://example.com/page|
|同上|同上|<b>http</b>://example.org|(no referrer)|
|origin|同上|anywhere|https://example.com/|
|origin-when-cross-origin|同上|https://example.com/otherpage|https://example.com/page|
|同上|同上|https://mozilla.org|https://example.com/|
|同上|同上|<b>http</b>://example.com/page|https://example.com/|
|same-origin|同上|https://example.com/otherpage|https://example.com/page|
|同上|同上|https://mozilla.org|(no referrer)|
|strict-origin|同上|https://mozilla.org|https://example.com/|
|同上|同上|<b>http</b>://example.org|(no referrer)|
|同上|<b>http</b>://example.com/page|anywhere|<b>http</b>://example.com/|
|strict-origin-when-cross-origin(default)|https://example.com/page|https://example.com/otherpage|https://example.com/page|
|同上|同上|https://mozilla.org|https://example.com/|
|同上|同上|<b>http</b>://example.org|(no referrer)|
|unsafe-url|https://example.com/page?q=123|anywhere|https://example.com/page?q=123|

## 支持 referrerpolicy 属性的标签

- a
- area
- img
- iframe
- script
- link

## 在 HTML 中使用 (Integration with HTML)

两种方式：

1. 设置全局默认的 Referrer policy

    ``` html
    <meta name="referrer" content="none"><!-- 等价与 no-referrer -->
    <meta name="referrer" content="no-referrer">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    ```

2. 设置单个请求的 Referrer policy

    ``` html
    <a href="http://example.com" referrerpolicy="origin">
    <a href="http://example.com" referrerpolicy="no-referrer">
    <a href="http://example.com" referrerpolicy="unsafe-url">
    <a href="http://example.com" rel="noreferrer">
    ```
