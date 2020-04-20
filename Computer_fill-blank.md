<!-- markdownlint-disable MD033 -->
# 计算机科学 知识点 填空

## Unicode -start-

<details>
  <summary>Unicode是一种__标准，用于对世界上大多数书写系统中表示的文本进行一致的__、表示和处理。</summary>
  <div>信息技术</div>
  <div>编码</div>
</details>

<details>
  <summary>Unicode标准由__联盟维护，截至2020年3月，最新版本Unicode 13.0包含__万个字符</summary>
  <div>Unicode</div>
  <div>14</div>
</details>

<details>
  <summary>UTF的英文全称__，中文全称__。</summary>
  <div>Unicode Transformation Format</div>
  <div>Unicode转换格式</div>
</details>

<details>
  <summary>UCS的英文全称__，中文全称__。</summary>
  <div>universal Character Set</div>
  <div>通用字符集</div>
</details>

<details>
  <summary>计算机科学领域主要有2套字符编码标准分别是__和__。</summary>
  <div>Unicode</div>
  <div>UCS</div>
</details>

<details>
  <summary>1991年，ISO/IEC 10646 项目 和 Unicode组织项目 __相互兼容。</summary>
  <div>码表</div>
</details>

<details>
  <summary>在字符编码术语中，__或称__，即英文的code point或code position，是组成码空间（或代码页）的数值。</summary>
  <div>码位</div>
  <div>编码位置</div>
</details>

<details>
  <summary>Unicode标准规定U+__-U+__(有__个码位)的值不对应于任何字符。因为UCS-2的时代，U+D800-U+DFFF内的值被占用，1991年为了相互兼容，所以这一段码位被废弃。但是UTF-16编码解码还是能把这些不符合Unicode标准的字符映射正确的辨识、转换成合规的码元。</summary>
  <div>D800</div>
  <div>DFFF</div>
  <div>2047</div>
</details>

<details>
  <summary>UCS-2和UCS-4分别采用__和__个固定长度的字节编码。</summary>
  <div>2</div>
  <div>4</div>
</details>

<details>
  <summary>统一码(Unicode)为每一个字__而非字__定义唯一的代码（即一个__）。</summary>
  <div>符</div>
  <div>形</div>
  <div>整数</div>
</details>

<details>
  <summary>Unicode 的实现方式称为__。</summary>
  <div>Unicode转换格式</div>
</details>

<details>
  <summary>一个字符的 Unicode __是确定的。</summary>
  <div>编码</div>
  <div>14</div>
</details>

<details>
  <summary>因为计算机只能处理__，如果要处理文本，就必须先把文本转换为数字才能处理。</summary>
  <div>数字</div>
</details>

<details>
  <summary>统一码(Unicode)为每种语言中的每个字符设定了统一并且唯一的__编码。</summary>
  <div>二进制</div>
</details>

<details>
  <summary>阿拉伯数字在不在ASCII码里？</summary>
  <div>在</div>
  <div>因为阿拉伯数字不仅包含0和1</div>
</details>

<details>
  <summary>但是在实际传输过程中，由于不同系统平台的设计不一定一致，以及出于节省__的目的，对 Unicode 编码的__方式有所不同。</summary>
  <div>空间</div>
  <div>实现</div>
</details>

<details>
  <summary>表示一个UCS或Unicode值的十六进制数时，通常会用“__”然后紧接着一组__进制的数字来表示这一个字符。</summary>
  <div>U+</div>
  <div>十六</div>
</details>

<details>
  <summary>目前的Unicode字符分为__组编排，0x__ 至 0x__，每组称为__，而每平面拥有65536(16^4)个__。</summary>
  <div>17</div>
  <div>0000</div>
  <div>10FFFF</div>
  <div>平面（Plane）</div>
  <div>码位</div>
  <pre>
  0号平面 U+0000 - U+FFFF
  1号平面 U+10000 - U+1FFFF
  2号平面 U+20000 - U+2FFFF
  3号平面 U+30000 - U+3FFFF
  4号平面 - 13号平面 U+40000 - U+DFFFF
  14号平面 U+E0000 - U+EFFFF
  15号平面 U+F0000 - U+FFFFF
  16号平面 U+100000 - U+10FFFF
  </pre>
</details>

<details>
  <summary>BMP英文全称__，中文全称__。又简称__平面(英文__)。</summary>
  <div>Basic Multilingual Plane</div>
  <div>在基本多文种平面</div>
  <div>零号</div>
  <div>plane 0</div>
</details>

<details>
  <summary>在基本多文种平面(BMP)里的所有字符，要用__位十六进制数（共16^4个字符）；在零号平面以外的字符则需要大于__位十六进制数了。</summary>
  <div>四【例如U+4AE0】</div>
  <div>四</div>
</details>

<details>
  <summary>UTF-8的特点是对不同__的字符使用不同__的编码。</summary>
  <div>范围</div>
  <div>长度</div>
</details>

<details>
  <summary>UTF-8编码的最大长度是__个字节。</summary>
  <div>4</div>
</details>

<details>
  <summary>UTF-8对Unicode第__平面(也就是码值小于__)的字符编码效率较高</summary>
  <div>领</div>
  <div>FFFF</div>
</details>

<details>
  <summary>字节序有两种__和__。</summary>
  <div>大端</div>
  <div>小端</div>
</details>

<details>
  <summary>BE英文全称__，中文全称__。</summary>
  <div>Big Endian</div>
  <div>大端字节序</div>
</details>

<details>
  <summary>LE英文全称__，中文全称__。</summary>
  <div>Little Endian</div>
  <div>小端字节序</div>
</details>

<details>
  <summary>为了解决不同环境读取字节顺序的差异，Unicode 标准建议用__来区分字节序。</summary>
  <div>BOM</div>
</details>

<details>
  <summary>在Unicode中，中文的码位范围是__-__。</summary>
  <div>4E00</div>
  <div>9FA5</div>
</details>

<details>
  <summary>XML及其子集__采用UTF-8作为标准字集，理论上我们可以在各种支持XML标准的浏览器上显示任何地区文字的网页，只要电脑本身安装有合适的__即可。可以利用__nnn;的格式显示特定的字符。nnn代表该字符的十进制 Unicode 代码。如果采用十六进制代码，在编码之前加上__（例如__）字符即可。但部分旧版本的浏览器可能无法识别十六进制代码。</summary>
  <div>HTML</div>
  <div>字体</div>
  <div>&#</div>
  <div>x</div>
  <div>&#x8449</div>
</details>

<details>
  <summary>Unicode到UTF-8的编码方式如下：</summary>
  <pre>
  Unicode编码范围  位数  字节数　UTF-8 字节流(二进制)
  000000-00007F    7    1     0xxxxxxx
  000080-0007FF   11    2     110xxxxx 10xxxxxx
  000800-00FFFF   16    3     1110xxxx 10xxxxxx 10xxxxxx
  010000-10FFFF   21    4     11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
  </pre>
</details>

## Unicode -end-

## IEEE 754 -start-

<details>
  <summary>IEEE 754（全称IEEE__）是20世纪__年代以来最广泛使用的浮点数运算标准。</summary>
  <div>二进制浮点数算术标准</div>
  <div>80</div>
</details>

<details>
  <summary>IEEE 754规定了四种表示浮点数值的方式：__确度（__位）、__确度（__位）、延伸单精确度（43比特以上，很少使用）与延伸双精确度（79比特以上，通常以80位实现）。</summary>
  <div>单精</div>
  <div>32</div>
  <div>双精</div>
  <div>64</div>
</details>

<details>
  <summary>32位单精度</summary>
  <pre>
  1            8                           23位长
  S         Exponent                      Fraction
  31 30至23 偏正值（实际的指数大小+127） 22至0位编号（从右边开始为0）
  </pre>
</details>

<details>
  <summary>64位双精度</summary>
  <pre>
  1            11                           52位长
  S          Exponent                      Fraction
  31 62至52 偏正值（实际的指数大小+1023） 51至0位编号（从右边开始为0）
  </pre>
</details>

## IEEE 754 -end-

<details>
  <summary>幂等(idempotent): 在相同输入下，多次运算的结果__。反之，非幂等。</summary>
  <div>相等</div>
</details>

<details>
  <summary>回文子串: 是指这个字符串无论从左读还是从右读，所读的__是一样的，或者说是__的。</summary>
  <div>顺序</div>
  <div>对称</div>
</details>

<details>
  <summary>在软件编程中“foo”相当于一个__。常用于一些__代码中，因为这样可以更专注于代码功能，不用花时间去取__。</summary>
  <div>占位符</div>
  <div>示例</div>
  <div>名字</div>
</details>
