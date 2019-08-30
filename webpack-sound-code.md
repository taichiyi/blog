# 读webpack(4.31.0)源码总结

运行

```bash
./node_modules/.bin/webpack
```

>`./node_modules/.bin/webpack`文件是一个链接文件（软链接文件）可以理解为浅复制，原件为：`./node_modules/webpack/bin/webpack.js`。之所以npm会创建`./node_modules/.bin/webpack`链接文件是因为在package.json↓里添加了"bin"。
>
>``` json
>{
>    ...
>    "bin": "./bin/webpack.js",
>    ...
>}
>```

## node_modules/webpack/bin/webpack.js

判断是否是否安装了`webpack-cli`或`webpack-command`，如果这两个包都没安装的话，会报错，然后提示你安装`webpack-cli`；如果你两个都安装了，需要删除其中一个。

>原来webpack的CLI功能是写在`webpack/bin/webpack.js`文件里的，但是从webpack4开始抽离出去了。

然后会require相应的包的bin。如果你安装了`webpack-cli`包，则会执行以下代码↓:

``` javascript
require('node_modules/webpack-cli/bin/cli.js');
```

## node_modules/webpack-cli/bin/cli.js

> webpack-cli 是为了方便开发者传参给webpack

自定义参数与默认参数合并

``` javascript
options = require("./utils/convert-argv")(argv);
```

引入webpack模块

``` javascript
const webpack = require("webpack");
// 相当于
const webpack = require("node_modules/webpack/lib/webpack.js");
```

实例化webpack

``` javascript
compiler = webpack(options);
```

## node_modules/webpack/lib/webpack.js

实例化编译器

``` javascript
// node_modules/webpack/lib/Compiler.js
compiler = new Compiler(options.context);
```

## node_modules/webpack/lib/Compiler.js

Compiler.js 里多次使用到了[Tapable](https://github.com/webpack/tapable)模块，所以不搞懂`Tapable`就读不懂webpack的源码。
