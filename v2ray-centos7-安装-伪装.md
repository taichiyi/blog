# V2Ray-centos7-安装-伪装

不特别说明的话，指令的执行环境是 su，如果不确定的话，可以先运行

``` bash
sudo su
```

## V2Ray

### 安装/卸载

``` bash
# 安装
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)

# 一些输出信息
# /usr/local/bin/v2ray
# /usr/local/bin/v2ctl
# /usr/local/share/v2ray/geoip.dat
# /usr/local/share/v2ray/geosite.dat
# /etc/systemd/system/v2ray.service
# /etc/systemd/system/v2ray@.service

# 卸载
bash <(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh) --remove
```

### 修改配置文件

打开配置文件

``` bash
vi /usr/local/etc/v2ray/config.json
```

配置文件之前的内容删了，复制下面的内容到配置文件并保存

``` json
{
  "inbounds": [{
    "port": 4278,
    "listen": "127.0.0.1",
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
          "id": "c8246337-f3e9-4bb8-9d4e-1e0cc9b88675",
          "alterId": 64
        }
      ]
    },
    "streamSettings": {
      "network": "ws",
      "wsSettings": {
      "path": "/api"
      }
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "settings": {}
  },{
    "protocol": "blackhole",
    "settings": {},
    "tag": "blocked"
  }],
  "routing": {
    "rules": [
      {
        "type": "field",
        "ip": ["geoip:private"],
        "outboundTag": "blocked"
      }
    ]
  }
}
```

### 使用

``` bash
# 启动(推荐)
systemctl start v2ray

# 也可以这么启动(不推荐)
/usr/local/bin/v2ray -config /usr/local/etc/v2ray/config.json

# 设置开机启动
systemctl enable v2ray
```

## 域名

假设你有个域名 `blog.so.com`(没有就买吧🤷‍♂️，一年也就 60 左右)

将域名指向你的服务器

## nginx 安装+配置

1.安装依赖

``` bash
yum install epel-release
```

2.安装 nginx

``` bash
yum install nginx
```

3.启动 nginx

``` bash
systemctl start nginx
```

4.设置开机启动 nginx

``` bash
systemctl enable nginx
```

### 添加/修改 nginx 配置文件

#### 添加配置文件

1.打开配置文件

``` bash
vi /etc/nginx/conf.d/nb.conf
```

2.修改配置文件

把以下内容改为你自己的，然后复制到配置文件中并保存

- blog.so.com
- /etc/letsencrypt/live/so.com/fullchain.pem
- /etc/letsencrypt/live/so.com/privkey.pem

```text
server {
    listen       443 ssl http2 default_server;
    listen       [::]:443 ssl http2 default_server;
    server_name  blog.so.com;
    root         /usr/share/nginx/html;
 
    ssl_certificate /etc/letsencrypt/live/so.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/so.com/privkey.pem; # managed by Certbot
    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout  10m;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on; 

    location / {
        index  index.html;
    }

    location /api {
        proxy_redirect off;
        proxy_pass http://127.0.0.1:4278;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $http_host;

        # Show realip in v2ray access.log
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}
```

#### 修改 nginx 配置文件

1.打开配置文件

``` bash
vi /etc/nginx/nginx.conf
```

2.在`server_name  _;`下面加上`return 301 https://$host$request_uri;`。效果如下

``` text
...
server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  _;
    return 301 https://$host$request_uri;
    root         /usr/share/nginx/html;
...
```

### 重启 Nginx

``` bash
systemctl restart nginx
```

## 客户端配置

`blog.so.com` 域名换成自己的

``` json
{
  "log": {
    "error": "",
    "loglevel": "info",
    "access": ""
  },
  "inbounds": [
    {
      "listen": "127.0.0.1",
      "protocol": "socks",
      "settings": {
        "udp": false,
        "auth": "noauth"
      },
      "port": "43783"
    },
    {
      "listen": "127.0.0.1",
      "protocol": "http",
      "settings": {
        "timeout": 360
      },
      "port": "43782"
    }
  ],
  "outbounds": [
    {
      "mux": {
        "enabled": false,
        "concurrency": 8
      },
      "protocol": "vmess",
      "streamSettings": {
        "wsSettings": {
          "path": "/api",
          "headers": {
            "host": "blog.so.com"
          }
        },
        "tlsSettings": {
          "serverName": "blog.so.com",
          "allowInsecure": false
        },
        "security": "tls",
        "network": "ws"
      },
      "tag": "proxy",
      "settings": {
        "vnext": [
          {
            "address": "blog.so.com",
            "users": [
              {
                "id": "c8246337-f3e9-4bb8-9d4e-1e0cc9b88675",
                "alterId": 64,
                "level": 1,
                "security": "auto"
              }
            ],
            "port": 443
          }
        ]
      }
    },
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": null
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": null
    }
  ],
  "dns": {},
  "routing": {
    "settings": {
      "domainStrategy": "AsIs",
      "rules": []
    }
  },
  "transport": {}
}
```
