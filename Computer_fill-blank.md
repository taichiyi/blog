<!-- markdownlint-disable MD033 MD037 MD032 -->
# 计算机科学 知识点 填空

目的：记住一些知识点，然后把他们打通，串联起来。

## Unicode -start-

<details>
  <summary>Unicode是_1_里的一项业界标准。用于对世界上大多数书写系统中表示的文本进行一致的_2_、表示和处理。</summary>
  <div>1. 计算机科学领域</div>
  <div>2. 编码</div>
</details>

<details>
  <summary>UTF的英文全称__，中文全称__。</summary>
  <div>Unicode Transformation Format</div>
  <div>Unicode 转换格式</div>
</details>

<details>
  <summary>UCS的英文全称__，中文全称__。</summary>
  <div>universal Character Set</div>
  <div>通用字符集</div>
</details>

<details>
  <summary>计算机科学领域主要有2套字符编码标准分别是__和__，分别由__和__制定，1991年开始两者相互兼容码表。</summary>
  <div>Unicode</div>
  <div>UCS</div>
  <div>Unicode 联盟</div>
  <div>ISO</div>
</details>

<details>
  <summary>在字符编码术语中，__或称编码位置，即英文的code point或code position，是组成码空间（或代码页）的数值。</summary>
  <div>码点</div>
</details>

<details>
  <summary>Unicode 标准规定 U+__ - U+__ (包含__个码点)的码点不对应于任何字符。因为UCS-2时代，U+D800-U+DFFF内的值被占用，__年为了相互兼容，所以这一段码点被废弃。但是UTF-16的__会使用这段码点。</summary>
  <div>D800</div>
  <div>DFFF</div>
  <div>2048</div>
  <div>1991</div>
  <div>代理对</div>
</details>

<details>
  <summary>UCS-2和UCS-4分别采用__和__个固定长度的字节编码。</summary>
  <div>2</div>
  <div>4</div>
</details>

<details>
  <summary>统一码(Unicode)为每一个字__而非字__定义唯一的码点。也就是一个偏旁可能也是一个字符。</summary>
  <div>符</div>
  <div>形</div>
</details>

<details>
  <summary>Unicode 的实现方式称为__。</summary>
  <div>Unicode转换格式</div>
</details>

<details>
  <summary>因为计算机只能处理__，如果要处理文本，就必须先把文本转换为数字才能处理。</summary>
  <div>数字</div>
</details>

<details>
  <summary>统一码(Unicode)为每种语言中的每个字符设定了统一并且唯一的__编码。</summary>
  <div>二进制</div>
</details>

<!-- <details>
  <summary>阿拉伯数字在不在ASCII码里？</summary>
  <div>在</div>
</details> -->

<!-- <details>
  <summary>但是在实际传输过程中，由于不同系统平台的设计不一定一致，以及出于节省__的目的，对 Unicode 编码的__方式有所不同。</summary>
  <div>空间</div>
  <div>实现</div>
</details> -->

<details>
  <summary>表示一个UCS或Unicode值的十六进制数时，通常会用“__”然后紧接着一组__进制的数字来表示这一个字符。</summary>
  <div>U+</div>
  <div>十六</div>
</details>

<details>
  <summary>目前的Unicode字符分为_1_组编排，0x_2_ 至 0x_3_，每组称为_4_，而每平面拥有65536(16^4)个_5_。</summary>
  <div>1. 17</div>
  <div>2. 0000</div>
  <div>3. 10FFFF</div>
  <div>4. 平面（Plane）</div>
  <div>5. 码点</div>
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
  <summary>非BMP平面也被称为__平面或__平面。</summary>
  <div>辅助</div>
  <div>星体</div>
</details>

<details>
  <summary>BMP英文全称__，中文全称__。又简称__平面(英文__)。</summary>
  <div>Basic Multilingual Plane</div>
  <div>基本多文种平面</div>
  <div>零号</div>
  <div>plane 0</div>
</details>

<!-- <details>
  <summary>在基本多文种平面里的所有字符，用__位十六进制数表示（共16^4个字符），辅助平面5或6位十六进制表示。</summary>
  <div>4【例如U+4AE0】</div>
</details> -->

<details>
  <summary>UTF-8的特点是对不同__的字符使用不同__的编码。Unicode到UTF-8的编码方式如下：</summary>
  <div>码点范围</div>
  <div>长度</div>
  <pre>
  Unicode编码范围  位数  字节数　UTF-8 字节流(二进制)
  000000-00007F    7    1     0xxxxxxx
  000080-0007FF   11    2     110xxxxx 10xxxxxx
  000800-00FFFF   16    3     1110xxxx 10xxxxxx 10xxxxxx
  010000-10FFFF   21    4     11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
  </pre>
</details>

<!-- <details>
  <summary>UTF-8编码的最大长度是__个字节。</summary>
  <div>4</div>
</details> -->

<details>
  <summary>UTF-8对Unicode第__平面(也就是码值小于等于__)的字符编码效率较高。</summary>
  <div>0</div>
  <div>FFFF</div>
</details>

<details>
  <summary>字节序有两种__和__。</summary>
  <div>大端</div>
  <div>小端</div>
</details>

<details>
  <summary>BE(字节序相关)英文全称__，中文全称__。顺序为从__到__。</summary>
  <div>Big Endian</div>
  <div>大端字节序</div>
  <div>左</div>
  <div>右</div>
</details>

<details>
  <summary>LE(字节序相关)英文全称__，中文全称__。顺序为从__到__。</summary>
  <div>Little Endian</div>
  <div>小端字节序</div>
  <div>右</div>
  <div>左</div>
</details>

<details>
  <summary>BOM(字节序相关)英文全称__，中文全称__。</summary>
  <div>Byte Order Mark</div>
  <div>字节顺序标记</div>
</details>

<details>
  <summary>为了解决不同环境读取字节顺序的差异，Unicode 标准建议用__来区分字节序。</summary>
  <div>BOM</div>
</details>

<!-- <details>
  <summary>从Unicode__开始，U+FEFF 只能出现在字节流的开头，只能用于标识字节序。</summary>
  <div>3.2</div>
</details> -->

<details>
  <summary>一般来说，以 Macintosh 制作或存储的文字使用__字节序，以 Microsoft 或 Linux 制作或存储的文字使用__字节序。</summary>
  <div>大端(BE)</div>
  <div>小端(LE)</div>
</details>

<details>
  <summary>U+__字符在 unicode 中代表的意义是 ZERO WIDTH NO-BREAK SPACE，顾名思义，它是个没有宽度也没有断字的空白。</summary>
  <div>FEFF</div>
</details>

<details>
  <summary>为了弄清楚UTF-16文件的大小端字节序，所以在UTF-16文件的__，都会放置一个U+FEFF字符作为BOM，以显示这个文本文件是以UTF-16编码。如果一个文件开头的__个二进制的值转为十进制等于65279，则为__端字节序；等于665534，则为小端字节序。</summary>
  <div>开头</div>
  <div>16</div>
  <div>大</div>
</details>

<!-- <details>
  <summary>在Unicode中，中文的码点范围是__-__。</summary>
  <div>4E00</div>
  <div>9FA5</div>
</details> -->

<details>
  <summary>XML及其子集__采用UTF-8作为标准字集，理论上我们可以在各种支持XML标准的浏览器上显示任何地区文字的网页，只要电脑本身安装有合适的__即可。可以利用 __nnn; 的格式显示特定的字符。nnn代表该字符的十进制 Unicode 代码。如果采用十六进制代码，在编码之前加上__（例如__）字符即可。但部分旧版本的浏览器可能无法识别十六进制代码。</summary>
  <div>HTML</div>
  <div>字体</div>
  <div>&#</div>
  <div>x</div>
  <div>&#x8449</div>
</details>

## Unicode -end-

## IEEE 754 -start-

<details>
  <summary>IEEE 754（全称IEEE__）是20世纪__年代以来最广泛使用的浮点数运算标准。</summary>
  <div>二进制浮点数算术标准</div>
  <div>80</div>
</details>

<details>
  <summary>
  <pre>
  任意一个二进制浮点数V可以表示成下面的形式：V = (-1)ˢ x M x 2ᴱ
 （1）(-1)^s表示符号位，当s=0，V为__数；当s=1，V为__数。

 （2）M(Mantissa)表示有效数字，大于等于__，小于__。

 （3）E(Exponent)表示指数位。
  </pre>
  </summary>
  <div>正</div>
  <div>负</div>
  <div>1</div>
  <div>2</div>
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
  1              8                             23位长
  S           Exponent                        Fraction(Mantissa)
  31   30至23 偏正值（实际的指数大小+127）   22至0位编号（从右边开始为0）
  </pre>
</details>

<details>
  <summary>64位双精度</summary>
  <pre>
  1              11                             52位长
  S            Exponent                        Fraction(Mantissa)
  63   62至52 偏正值（实际的指数大小+1023）   51至0位编号（从右边开始为0）
  </pre>
</details>

## IEEE 754 -end-

## 算法的时间复杂度 -start-

<details>
  <summary>在计算机科学中，算法的时间复杂度（Time complexity）是一个__，它定性描述该算法的运行__。</summary>
  <div>函数</div>
  <div>时间</div>
</details>

<details>
  <summary>大O符号（英语：Big O notation），又称为__符号，是用于描述函数渐近行为的数学符号。</summary>
  <div>渐进</div>
</details>

<details>
  <summary>搜索对象的值为例：时间复杂度为O(n)，其中n为对象的__个数。</summary>
  <div>键值对</div>
</details>

<details>
  <summary>时间复杂度名称：__；运行时间：O(__)；算法举例：访问数组中的单个元素、判断一个二进制数的奇偶。</summary>
  <div>常数时间</div>
  <div>1</div>
</details>

<details>
  <summary>时间复杂度名称：__；运行时间：O(__)；算法举例：无序数组的搜索。</summary>
  <div>线性时间</div>
  <div>n</div>
</details>

<details>
  <summary>时间复杂度名称：__；运行时间：O(__)；算法举例：冒泡排序、插入排序。</summary>
  <div>二次时间</div>
  <div>n^2</div>
</details>

<details>
  <summary>常见函数的时间复杂度（图片）</summary>
  <div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comparison_computational_complexity.svg/300px-Comparison_computational_complexity.svg.png" />
  </div>
</details>

<details>
  <summary>相同大小的不同输入值仍可能造成算法的运行时间不同，因此我们通常使用算法的最坏情况复杂度，记为 __(n) ，定义为任何大小的输入 __ 所需的最大运行时间。</summary>
  <div>T</div>
  <div>n</div>
</details>

## 算法的时间复杂度 -end-

<details>
  <summary>幂等(idempotent): 函数在相同输入下，多次运算的结果__。反之，非幂等。</summary>
  <div>相等</div>
</details>

<details>
  <summary>回文子串: 是指这个字符串无论从左读还是从右读，所读的__是一样的。</summary>
  <div>顺序</div>
</details>

<details>
  <summary>在软件编程中“foo”相当于一个__。常用于一些__代码中，因为这样可以更专注于代码功能，不用花时间去取__。</summary>
  <div>占位符</div>
  <div>示例</div>
  <div>名字</div>
</details>

<details>
  <summary>编译：源代码 -> __代码。</summary>
  <div>可执行</div>
</details>

## 计算机中的时间 -start-

<details>
  <summary>时间戳(timestamp)是指格林尼治时间19__年01月01日00时00分00秒起至现在的__。</summary>
  <div>70</div>
  <div>总秒数</div>
</details>

<!-- <details>
  <summary>时间戳和Unix__定义一样。</summary>
  <div>时间戳</div>
</details> -->

<details>
  <summary>GMT的英文全称__，中文全称__。</summary>
  <div>Greenwich Mean Time</div>
  <div>格林尼治平均时间</div>
</details>

<!-- <details>
  <summary>GMT是指位于英国伦敦郊区的皇家格林尼治天文台当地的平太阳时，因为本初子午线被定义为通过那里的__线。</summary>
  <div>经</div>
</details> -->

<details>
  <summary>由于地球每天的自转正在缓慢__速，因此GMT的误差越来越大，已被使用__报时的UTC取代。</summary>
  <div>减</div>
  <div>钟原子</div>
</details>

<details>
  <summary>UTC的英文全称__，中文全称__。</summary>
  <div>Coordinated Universal Time</div>
  <div>协调世界时间</div>
  <pre>由于英文（CUT）和法文（TUC）的缩写不同，作为妥协，简称UTC。</pre>
</details>

<details>
  <summary>UTC的误差不会超过__秒。</summary>
  <div>1</div>
</details>

<details>
  <summary>为了统一世界各地的日期，18__年规定了国际日期变更线，它在太平洋中的__°__线上。</summary>
  <div>84</div>
  <div>180</div>
  <div>经</div>
</details>

<details>
  <summary>如果北京是12月3号07点整，伦敦是12月__号__点整。</summary>
  <div>2</div>
  <div>23</div>
</details>

<details>
  <summary>伦敦的程序员和北京的程序员，同时运行JS代码`Date.now()`，他们看到的输出值是一样的吗？如果不一样，差多少？</summary>
  <div>是</div>
</details>

<details>
  <summary>CST的英文全称__，中文全称__。</summary>
  <div>China Standard Time (CST)</div>
  <div>中国标准时间</div>
</details>

## 计算机中的时间 -end-

## 四种类型的数字 -start-

<details>
  <summary>4中常用的进制: _1_、_2_、_3_、_4_。</summary>
  <div>二进制(Binary)</div>
  <div>八进制(Octal)</div>
  <div>十进制(Plain decimal)</div>
  <div>十六进制(Hexadecimal)</div>
</details>

<details>
  <summary>纯十进制，必须以非_1_数字开头；八进制，任何以_2_开头的数字（包括纯0）；二进制，要求前缀_3_或_4_；十六进制，要求前缀_5_或0X；</summary>
  <div>0(o|O)</div>
  <div>0(o|O)</div>
  <div>0b</div>
  <div>0B</div>
  <div>0x</div>
</details>

## 四种类型的数字 -end-

## 递归 -start-

<details>
  <summary>如果在函数中存在着调用__的情况，这种现象就叫递归。</summary>
  <div>函数本身</div>
</details>

<details>
  <summary>「递」的意思是将问题__来解决。</summary>
  <div>拆解成子问题</div>
</details>

<details>
  <summary>「归」的意思是__解决后，子问题一层一层的回归。</summary>
  <div>最小的子问题</div>
</details>

<details>
  <summary>
  <pre>
  递归有以下两个特点:
  1. 一个问题可以分解成具有__的子问题、子子问题。
  2. 经过层层分解，最后的子问题一定是一个不能再分解的__（即终止条件）。
  </pre>
  </summary>
  <div>相同解决思路</div>
  <div>固定值</div>
  <img src="https://oss.taichiyi.com/markdown/c7103bc4ded24320badbf88a9e4e43c6.png" />
</details>

## 递归 -end-

## 阶乘 -start-

<details>
  <summary>一个正整数的阶乘（factorial[fækˈtɔːriəl]）是所有小于及等于该数的正整数的__。</summary>
  <div>积</div>
</details>

<details>
  <summary>积(数学用语)，一般指"乘法"运算的__。</summary>
  <div>结果</div>
</details>

<details>
  <summary>0的阶乘为__。</summary>
  <div>1</div>
  <div>0!=1</div>
</details>

<details>
  <summary>自然数n的阶乘写作__。</summary>
  <div>n!</div>
  <div>0!=1，n!=(n-1)!×n。</div>
</details>

## 阶乘 -end-

<details>
  <summary>FPS 小于 __ 时会让人感觉到卡顿。</summary>
  <div>24</div>
</details>

<details>
  <summary>OOP(程序设计相关)英文全称__，中文全称__。</summary>
  <div>Object Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]</div>
  <div>面向对象程序设计(面向对象编程)</div>
</details>

<details>
  <summary>POP(程序设计相关)英文全称__，中文全称__。</summary>
  <div>Procedure[prəˈsiːdʒər] Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]</div>
  <div>面向过程编程</div>
</details>

<details>
  <summary>AOP(程序设计相关)英文全称__，中文全称__。</summary>
  <div>Aspect[ˈæspekt] Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]</div>
  <div>面向切面编程</div>
</details>

<details>
  <summary>SP(程序设计相关)英文全称__，中文全称__。</summary>
  <div>Structured['strʌktʃəd] Programming[ˈproʊɡræmɪŋ]</div>
  <div>结构化程序设计</div>
</details>

<details>
  <summary>面向对象程序设计是一种计算机__。OOP的一条基本原则是计算机程序由单个能够起到子程序作用的__或__组合而成。</summary>
  <div>编程架构</div>
  <div>单元</div>
  <div>对象</div>
</details>

<details>
  <summary>一个对象有__、__和__三种属性。</summary>
  <div>状态</div>
  <div>行为</div>
  <div>标识</div>
</details>

<details>
  <summary>类定义了事物的__和它可以做到的__。</summary>
  <div>属性</div>
  <div>行为</div>
</details>

<details>
  <summary>面向对象的`封装`有两层意思：将__和__捆绑在一起；将__与__分离的过程。</summary>
  <div>数据</div>
  <div>行为</div>
  <div>接口</div>
  <div>实现</div>
</details>

<details>
  <summary>面向对象的`多态`：相同的行为，不同的实现。</summary>
  <div>输出</div>
</details>

<details>
  <summary>面向对象的`继承`：子类可以对基类的行为进行__、__、__。</summary>
  <div>扩展</div>
  <div>覆盖</div>
  <div>重定义</div>
</details>

<details>
  <summary>面向对象的`消息传递`：指的是一个对象调用了另一个对象的__。</summary>
  <div>方法</div>
</details>

<details>
  <summary>“A extends B”。则 B 被称为父类、__类、__类，A 被称为__类或__类。</summary>
  <div>基(基础类)</div>
  <div>超</div>
  <div>子</div>
  <div>派生</div>
</details>

<details>
  <summary>横切关注点（Cross-Cutting Concerns）：指的是一些具有横越多个__的共同点。</summary>
  <div>模块</div>
</details>

<details>
  <summary>IoC(面向对象编程)英文全称__，中文全称__。</summary>
  <div>Inversion of Control</div>
  <div>控制反转</div>
</details>

<details>
  <summary>控制反转是一种是面向对象编程中的一种设计模式，用来减少计算机代码之间的__。其中最常见的方式叫做__，还有一种方式叫__。</summary>
  <div>耦合度</div>
  <div>依赖注入（Dependency Injection，简称DI）</div>
  <div>依赖查找（Dependency Lookup）</div>
</details>

<details>
  <summary>依赖注入：就是将__当变量传入到一个对象中去。</summary>
  <div>实例</div>
</details>

<details>
  <summary>C 语言的8种语句: __、__、__、__、__、__。</summary>
  <div>标号语句</div>
  <div>复合语句</div>
  <div>表达式语句</div>
  <div>选择语句</div>
  <div>循环语句</div>
  <div>跳转语句</div>
  <div>声明语句</div>
  <div>try 块</div>
  <div>【语句】</div>
</details>

<details>
  <summary>表达式是__的代码，而语句是__的代码。</summary>
  <div>可以被求值</div>
  <div>一段可执行</div>
  <div>【语句】【表达式】</div>
</details>

<details>
  <summary>标号语句有3种语法：1.__ 2.__ 3.__。</summary>
  <div>“标识符 : 语句”</div>
  <div>“case 常量表达式 : 语句”</div>
  <div>“default : 语句”</div>
  <div>【标号语句】</div>
</details>

<details>
  <summary>复合语句或（代码）块是__括号环绕的语句__。复合语句的括号“}”外不能__。</summary>
  <div>花</div>
  <div>序列</div>
  <div>加分号</div>
  <div>【复合语句】</div>
</details>

<details>
  <summary>当期待一条语句，但需要依序执行多条语句时可使用__语句。</summary>
  <div>复合</div>
  <div>【复合语句】</div>
</details>

<details>
  <summary>表达式语句语法：“表达式(可选)__”，大部分语句都是表达式语句，例如赋值或函数调用。</summary>
  <div>;</div>
  <div>【表达式语句】</div>
</details>

<details>
  <summary>无表达式的表达式语句被称作__语句。</summary>
  <div>空（null statement）</div>
  <div>【表达式语句】</div>
</details>

<details>
  <summary>选择语句在数个控制流中选择一个。有3种语法：1.__ 2.__ 3.__。</summary>
  <div>“if ( 条件 ) 语句”</div>
  <div>“if ( 条件 ) 语句 else 语句”</div>
  <div>“switch ( 条件 ) 语句”</div>
  <div>【选择语句】</div>
</details>

<details>
  <summary>循环语句__执行一些代码。</summary>
  <div>重复</div>
  <div>【循环语句】</div>
</details>

<details>
  <summary>跳转语句无条件地转移__。有3种语法：1.__ 2.__ 3.__。</summary>
  <div>控制流</div>
  <div>“break [标识符];”</div>
  <div>“continue [标识符];”</div>
  <div>“return [表达式];”</div>
  <div>【跳转语句】</div>
</details>

<details>
  <summary>声明语句包括变量声明和函数声明。有4种语法：1.__ 2.__ 3.__。一个语句以 __ 开头才是函数声明语句。</summary>
  <div>“var 标识符 [= 表达式];”</div>
  <div>“let 标识符 [= 表达式];”</div>
  <div>“const 标识符 [= 表达式];”</div>
  <div>“function [标识符] () {}”</div>
  <div>function</div>
  <div>【声明语句】</div>
</details>

<details>
  <summary>try 块提供当执行其他语句时捕获其所抛出的异常的能力。语法: __。</summary>
  <div>“try 复合语句 处理块序列”</div>
  <div>【try 块】</div>
</details>

<details>
  <summary>内存为变量分配存储空间的__个字节单元的地址, 称之为该变量的地址。在高级语言中变量的地址形象地称为__。</summary>
  <div>首</div>
  <div>指针</div>
  <div>【指针】</div>
</details>

<details>
  <summary>前缀和(Prefix sum)是一个数组的某项__之前(包括此项元素)的所有数组元素的__。</summary>
  <div>下标</div>
  <div>和</div>
  <div>【算法】【前缀和】</div>
</details>
