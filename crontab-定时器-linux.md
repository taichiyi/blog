# crontab-定时器

## 选项

`-e` 使用 vi 打开任务列表
`-u` 指定某个用户，默认为当前用户
`-l` 打印任务列表

例子

``` bash
crontab -e

crontab -u root -l

crontab -l
```

## 配置

``` bash
SHELL=/bin/bash
PATH=/sbin:/bin:/usr/sbin:/usr/bin
MAILTO=root

# 计划任务定义的例子:
# .---------------- 分 (0 - 59)
# |  .------------- 时 (0 - 23)
# |  |  .---------- 日 (1 - 31)
# |  |  |  .------- 月 (1 - 12)
# |  |  |  |  .---- 星期 (0 - 7) (星期日可为0或7)
# |  |  |  |  |
# *  *  *  *  * 执行的命令
* * * * * date >> ~/test.log 2>&1
```
