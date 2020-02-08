<!-- markdownlint-disable MD033 -->
# 微信小程序 【习题与答案】

## 1.1 小程序简介

<details>
  <summary>介绍一下，小程序的技术发展史</summary>
  <div>- JS API -> JS-SDK -> 小程序</div>
  <div>- WeixinJSBridge.xxx -> wx.xxx -> 小程序</div>
</details>

<details>
  <summary>说说小程序与普通网页的区别？</summary>
  <div>- 网页开发渲染线程和脚本线程是互斥的；而小程序不互斥。逻辑层和渲染层是分开的</div>
  <div>- 浏览器兼容问题：小程序基本没有兼容问题</div>
  <div>- 普通网页会有首页白屏问题，就是webView中等待进度条的时候</div>
  <div>- 普通网页会切换页面生硬，点击反应迟钝</div>
</details>

<details>
  <summary>详细介绍一下逻辑层和渲染层</summary>
  <div>- WXML模板和WXSS样式属于渲染层，JS属于逻辑层</div>
  <div>- 小程序每个页面都是一个WebView的进程，所以渲染层一般会有多个进程</div>
  <div>- 小程序逻辑层只有一个进程，因为JS是单进程的</div>
</details>

<details>
  <summary>为什么web浏览器把渲染和脚本线程设计成互斥？</summary>
  <div>- 是因为渲染的过程中，脚本可以直接修改DOM，会导致渲染线程前后获得的元素数据就可能不一致，出现不可预期的结果。</div>
</details>

<details>
  <summary>为什么小程序把渲染和脚本线程设计成不互斥？</summary>
  <div>- 因为渲染线程和脚本线程互斥，如果脚本线程运行时间较长的话，会让用户感觉卡顿，因为渲染线程被挂起。这样用户体验不好</div>
</details>

<details>
  <summary>小程序把渲染和脚本线程设计成不互斥，会面临渲染的过程中DOM变化, 出现不可预期结果吗？</summary>
  <div>不会，因为在小程序里脚本是不能直接操作DOM的，只能通过修改数据来驱动DOM的修改</div>
</details>

<details>
  <summary>小程序MVVM吗？</summary>
  <div>是</div>
</details>

<details>
  <summary>WebCore</summary>
  <div>- WebCore是用Objective-C开发的一个排版引擎。就是负责把web页面解析为DOM。</div>
  <div>- WebCore是一个由WebKit项目所开发的布局（Layout）、渲染（Rendering）及HTML和SVG的DOM库</div>
  <div>- WebKit框架包装了WebCore及JavaScriptCore</div>
  <div>- 2013年4月3日，Google宣布它创建了WebKit中WebCore组件的分支——Blink</div>
</details>

<details>
  <summary>JavaScriptCore</summary>
  <div>- 类比V8</div>
  <div>- JavaScriptCore是一个在WebKit中提供JavaScript引擎的框架</div>
  <div>- JavaScriptCore是WebKit的内置JavaScript引擎。目前，它实现的ECMAScript在ECMA-262规范。</div>
</details>

<details>
  <summary>WebKit</summary>
  <div>WebKit框架包装了WebCore及JavaScriptCore</div>
</details>

<details>
  <summary>Chromium WebKit Blink X5 之间的关系</summary>
  <div>- Chromium是一个开源浏览器项目，构成了Chrome网络浏览器的基础。</div>
  <div>- WebKit的说明见上下文</div>
  <div>- Blink 基于 WebKit</div>
  <div>- X5 基于 Blink</div>
</details>

<details>
  <summary>小程序的运行环境有几种？分别介绍一下它们的逻辑层和渲染层</summary>
  <div>-3种：IOS，安卓，小程序开发者工具</div>
  <div></div>
  <div>IOS: </div>
  <div>- 逻辑：JavaScriptCore</div>
  <div>- 渲染：WKWebView</div>
  <div>安卓: </div>
  <div>- 逻辑：V8</div>
  <div>- 渲染：chromium定制内核(自研 XWeb 引擎基于 Mobile Chrome 67 内核)</div>
  <div>小程序开发者工具: </div>
  <div>- 逻辑：NWJS</div>
  <div>- 渲染：Chrome WebView(Chromium 60 Webview)</div>
</details>

<details>
  <summary>怎么进行页面间通信？</summary>
  <div>1. 在APP对象里定义属性，然后每个页面通过getApp方法获取APP对象。</div>
</details>

<details>
  <summary>怎么进行组件间通信？</summary>
  <div>1. WXML 数据绑定</div>
  <div>2. 事件</div>
  <div>3. this.selectComponent()</div>
</details>

<details>
  <summary>小程序销毁被微信销毁有几种方式？分别介绍一下</summary>
  <div>- 进入后台超过5分钟</div>
  <div>- 当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。</div>
</details>

<details>
  <summary>介绍一下小程序的储存storage</summary>
  <div>- 同一个微信用户，同一个小程序storage上限为10MB。storage已用户纬度隔离。</div>
  <div>- 同一个微信用户A小程序能访问B小程序的storage吗？</div>
</details>

<details>
  <summary>视图层怎么和逻辑层通信？</summary>
  <div>事件</div>
  <div>事件可以将用户的行为反馈到逻辑层进行处理。</div>
</details>

<details>
  <summary>介绍一下页面路由?</summary>
  <div>全部由框架进行管理</div>
</details>

<details>
  <summary>小程序和小程序之间怎么通信？</summary>
  <div>假设A打开小程序B</div>
  <div>A通过wx.navigateToMiniProgram或w.navigateBackMiniProgram发送</div>
  <div>B通过App.onLaunch或wx.getLaunchOptionsSync获取</div>
</details>

<details>
  <summary>openID 是什么？</summary>
  <div>某个用户在某个小程序的ID</div>
</details>
