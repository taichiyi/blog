# Shell 输入/输出重定向

|命令|说明|
|-|-|
|command > file|将输出覆盖重定向到 file|
|command < file|将输入重定向到 file|
|command >> file|将输出追加重定向到 file|

一般情况下，每个 Unix/Linux 命令运行时都会打开三个文件：

- 标准输入文件(stdin)：stdin的文件描述符为0，Unix程序默认从stdin读取数据。
- 标准输出文件(stdout)：stdout 的文件描述符为1，Unix程序默认向stdout输出数据。
- 标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。

只输出正确的日志

``` bash
*/5 * * * * /root/XXXX.sh 1> ~/test.log
```

只输出错误的日志

``` bash
*/5 * * * * /root/XXXX.sh 2> ~/test.log
```

输出正确和错误的日志

``` bash
*/5 * * * * /root/XXXX.sh 1> ~/test.log 2>&1
```

覆盖输出日志

``` bash
*/5 * * * * /root/XXXX.sh 1> ~/test.log
```

追加输出日志

``` bash
*/5 * * * * /root/XXXX.sh 1>> ~/test.log
```
