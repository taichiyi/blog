<!-- markdownlint-disable MD033 -->
# npm fill-blank

<details>
  <summary>如果想通过 npm run 调用包，前提是在“node_module/.__/”目录下添加相关js的__连接。</summary>
  <div>bin</div>
  <div>软</div>
</details>

## package.json

<details>
  <summary>如果想在安装包时自动添加bin的软连接，需要在配置里使用__属性。</summary>
  <div>bin</div>
  <pre>
    {
      ...
      "bin": "./bin/webpack.js",
      ...
    }
  </pre>
</details>

<details>
  <summary>如果当前包支持ECMAScript Module，则可以在配置里使用__属性否知只能使用__。</summary>
  <div>module</div>
  <div>main</div>
</details>
