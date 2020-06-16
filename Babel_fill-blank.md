<!-- markdownlint-disable MD033 -->
# Babel 知识点 填空

<details>
  <summary>与许多其他编译器一样，Babel分三个阶段运行：__、__和__。</summary>
  <div>解析</div>
  <div>转换</div>
  <div>打印</div>
</details>

## config 配置文件

<details>
  <summary>配置文件中的Presets属性是，是一组用于支持特定语言功能的__。</summary>
  <div>插件</div>
</details>

<details>
  <summary>配置文件中的plugins属性：默认情况下Babel是什么都不会做的，就像`const babel = code => code`。插件将__应用于你的代码。</summary>
  <div>转换</div>
</details>

## @babel/preset-env

<details>
  <summary>"@babel/preset-env"是一个__，可以通过设置的目标，智能的使用相应的__集和插件。</summary>
  <div>preset</div>
  <div>预设</div>
</details>

<details>
  <summary>通过useBuiltIns属性配置垫片(polyfill)的使用。如果为`usage`，则在每个文件使用到polyfill的地方添加对应的polyfill；如果为`entry`,则只在入口文件添加一次codejs。
  </summary>
  <div>preset</div>
  <div>预设</div>
</details>

## corejs

<details>
  <summary>如果corejs的proposals为true，将对"Stage __"阶段代码进行转换。</summary>
  <div>4</div>
</details>

## babel的cli

`--out-file`=`-o`
`--out-dir`=`-d`
`--watch`=`-w`
`--source-maps`=`-s`

## 配置babel的几种方式

`配置文件: babel.config.js .babelrc .babelrc.js package.json`

babel.config.js (`官方推荐`)

``` javascript
module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

.babelrc

``` json
{
  "presets": [...],
  "plugins": [...]
}
```

package.json

``` json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

.babelrc.js

``` javascript
const presets = [ ... ];
const plugins = [ ... ];

module.exports = { presets, plugins };
```

`命令行CLI`

``` bash
babel --plugins @babel/plugin-transform-arrow-functions script.js
```

`API (@babel/core)`

``` javascript
require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-arrow-functions"]
});
```
