# webpack

- @babel/preset-env 什么？
- loader的读取顺序是从右至左
- 一个入口（entry）对应一个出口（bundle）
- 每个入口文件引用到的资源都会打包到出口文件（bundle）

## 如何修改代码后自动编译

- webpack watch mode(webpack 观察模式)
- webpack-dev-server
- webpack-dev-middleware

### webpack watch mode(webpack 观察模式)

使用：

``` bash
webpack --watch
```

优点：修改代码后，自动编译
缺点：不能自动刷新浏览器

### webpack-dev-server

优点：修改代码后，自动编译，自动刷新浏览器
缺点：未知

### webpack-dev-middleware

webpack-dev-server ≈ webpack-dev-middleware + express

## NODE_ENV

技术上讲，NODE_ENV 是一个由 Node.js 暴露给执行脚本的系统环境变量。通常用于决定在开发环境与生产环境(dev-vs-prod)下，server tools(服务期工具)、build scripts(构建脚本) 和 client-side libraries(客户端库) 的行为。然而，与预期相反，无法在构建脚本 webpack.config.js 中，将 process.env.NODE_ENV 设置为 "production"，请查看 #2537。因此，在 webpack 配置文件中，process.env.NODE_ENV === 'production' ? '[name].[hash].bundle.js' : '[name].bundle.js' 这样的条件语句，无法按照预期运行。

## 代码分离

常用的代码分离方法有三种：

- 入口起点：使用 entry 配置手动地分离代码。
- 防止重复：使用 SplitChunksPlugin 去重和分离 chunk。
- 动态导入：通过模块中的内联函数调用来分离代码。

### SplitChunksPlugin

`SplitChunksPlugin`插件主要是用来拆包的。

通过optimization.splitChunks配置`SplitChunksPlugin`插件。

- priority

  一个模块(例如React)可以属于多个cacheGroup。`optimization`将优先考虑具有更高优先级的cacheGroup。

  如果A模块被优先级高的cacheGroup打包，则其他cacheGroup不会再打包A模块。

  默认优先级为负，以允许自定义组获得更高的优先级（自定义组的默认值为0）。

### 入口起点

缺点：

- 如果入口 chunk 之间包含一些重复的模块，那些重复模块都会被引入到各个 bundle 中。

- 这种方法不够灵活，并且不能动态地将核心应用程序逻辑中的代码拆分出来。
