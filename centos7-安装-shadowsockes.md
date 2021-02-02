# centos7-安装-shadowsockes

snap 只支持 centos 7.6+

## 安装 snap core

使用 snap 来安装二进制文件

``` bash
sudo yum install epel-release
```

``` bash
sudo yum install snapd
```

``` bash
sudo systemctl enable --now snapd.socket
```

``` bash
sudo ln -s /var/lib/snapd/snap /snap
```

退出当前 session，用 ssh 重新登录

``` bash
sudo snap install core
```

## 安装 shadowsocks-libev

``` bash
sudo snap install shadowsocks-libev
```

## 创建配置文件

``` bash
vi /.../shadowsocks.json
```

## 通过 snap 运行 shadowsocks-libev

``` bash
# 如果你通过 `snap install xxx`，则通过一下方式查看可执行文件
/snap/bin/xxx
```

``` bash
nohup /snap/bin/shadowsocks-libev.ss-server -c /.../shadowsocks.json &
```
