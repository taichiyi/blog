# webpack4读源码总结

运行

```bash
./node_modules/.bin/webpack
```

>`./node_modules/.bin/webpack`文件和`./node_modules/webpack/bin/webpack.js`文件其实是一样的，之所以npm会把`./node_modules/webpack/bin/webpack.js`文件复制到`./node_modules/.bin/webpack`，是因为在package.json↓里添加了"bin"。
>
>``` json
>{
>    ...
>    "bin": "./bin/webpack.js",
>    ...
>}
>```

判断是否是否安装了`webpack-cli`或`webpack-command`，如果这两个包都没安装的话，会报错，然后提示你安装`webpack-cli`；如果你两个都安装了，需要删除其中一个。

>原来webpack的CLI功能是写在这个(webpack.js)文件里的，webpack4开始抽离出去了。

目前webpack支持2种CLI: `webpack-cli`(默认);`webpack-command`

## webpack-cli

webpack会在此被实例化
