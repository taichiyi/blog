# npm的organizations

大家在JaveScript里越来越多的见到类似下面的代码：

``` javascript
import Button from '@material-ui/core';
var taro = require('@tarojs/taro');
```

``` json
{
  ...
  "dependencies": {
    ...
    "@redux-offline/redux-offline": "^2.5.1"
  },
  "devDependencies": {
    ...
    "@babel/runtime": "^7.1.2"
  }
}
```

他们的结构为: `@your_org_name/<pkg_name>`

## 如果想用这种结构的包名，首先需要在npm上创建自己组织

1. [创建组织](https://www.npmjs.com/org/create)
2. cd到相关的package.json目录下
3. 如果未登录的话，输入命令`npm login`回车，然后按照提示输入账号密码（可能会提示输入邮箱）
4. 执行以下命令

    ``` bash
    npm init --scope=<your_org_name>

    # 假设我申请的组织名为:ne-test-org
    # 则执行:npm init --scope=ne-test-org
    ```

然后按提示输入相关的配置(如果想使用默认值得话，一直回车就可以了)

设置完后，你会发现package.json里的name属性（也就是包名）发生了变化。

假设之前包名为`demo`，设置完后会变为`@ne-test-org/demo`

## 发布到npm上

1. 判断是否已登录npm或登录的账号`$ npm whoami`回车，如果已登录的话会返回相应的用户名。
2. 如果想发布到npm上
    - 公开发布`$ npm publish --access public`回车
    - 私有发布（需要购买每月7美元的服务）`$ npm publish`回车
