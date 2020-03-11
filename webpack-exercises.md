<!-- markdownlint-disable MD033 -->
# webpack 【习题与参考答案】

## loaders

<details>
  <summary>loader的执行顺序是从左到右吗？</summary>
  <div>不是</div>
</details>

<details>
  <summary>由于历史或分工的原因，一个HTML页面React、jQuery、Vue共存，React和Vue中也使用到了jQuery，但是全局变量值中已经存在jQuery了，所以没必要把打包时jQuery涵盖进去，这时webpack改怎么配置?</summary>
  <div>用externals例如：</div>
  <div>externals: { jquery: 'jQuery' }</div>
</details>
