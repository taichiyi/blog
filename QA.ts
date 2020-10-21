type Answers = string | {
  tag: string;
  val: string;
};

type Title = string | {
  tag: string;
  val: string;
};

export interface QAs {
  id: number;
  title: Title;
  answers: Answers[];
  tags: (
    '生命周期' |
    'React' |
    'C' |
    'JavaScript' |
    'CPU' |
    '内存' |
    '正则表达式' |
    '图形学' |
    '程序设计语言' |
    '设计模式' |
    '编程思想' |
    '算法' |
    '测绘科学与技术' |
    '计算机网络' |
    '软件编程' |
    '编译原理' |
    '数学' |
    '代数' |
    '计算机科学' |
    '编码'
  )[];
  type: '基础知识' | '通用领域知识' | '专用领域知识';
}

const data: QAs[] = [
  {
    id: 1,
    title: `Unicode 是_1_里的一项业界标准，包括__、__等。用于对世界上大多数书写系统中表示的文本进行一致的编码、表示和处理。`,
    answers: ['字符集', '编码方案'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 2,
    title: `UTF 的英文全称__，中文全称__。`,
    answers: [
      'Unicode Transformation Format [ˈjuːnɪˌkəʊd] [ˌtrænsfərˈmeɪʃn] [ˈfɔːrmæt]',
      'Unicode 转换格式',
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 3,
    title: `UCS 的英文全称__，中文全称__。`,
    answers: ['Universal Character Set [ˌjuːnɪˈvɜːsəl] [ˈkærəktər] [set]', '通用字符集'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 4,
    title: `计算机科学领域主要有 2 套字符编码标准分别是__和__，分别由__和__制定，1991年开始两者相互兼容码表。`,
    answers: ['Unicode', 'UCS', 'Unicode 联盟', 'ISO'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 5,
    title: `在字符编码术语中，__或称编码位置，即英文的 Code point 或 Code position，是组成码空间（或代码页）的数值。`,
    answers: ['码点'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 6,
    title: `Unicode 标准规定 U+__ - U+__ (包含__个码点)的码点不对应于任何字符。因为UCS-2时代，U+D800-U+DFFF内的值被占用，__年为了相互兼容，所以这一段码点被废弃。但是 UTF-16 的__会使用这段码点。`,
    answers: ['D800', 'DFFF', '2048', '1991', '代理对'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 7,
    title: `UCS-2 和 UCS-4 分别采用__和__个固定长度的字节编码。`,
    answers: ['2', '4'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 8,
    title: `统一码(Unicode)为每一个__而非__定义唯一的码点。也就是一个偏旁可能也是一个字符。`,
    answers: ['字符', '字行'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 9,
    title: `Unicode 的实现方式称为__。`,
    answers: ['Unicode 转换格式'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 10,
    title: `因为计算机只能处理__，如果要处理文本，就必须先把文本转换为数字才能处理。`,
    answers: ['二进制数字'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 11,
    title: `统一码（Unicode）为每种语言中的每个字符设定了统一并且唯一的__编码。`,
    answers: ['二进制'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 12,
    title: `表示一个 UCS 或 Unicode 的十六进制数时，通常会用“__”然后紧接着一组__进制的数字来表示这一个字符。`,
    answers: ['U+', '十六'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 13,
    title: `目前的 Unicode 字符分为_1_组编排，0x_2_ 至 0x_3_，每组称为_4_，而每平面拥有 65536(16^4) 个_5_。`,
    answers: [
      '1. 17',
      '2. 0000',
      '3. 10FFFF',
      '4. 平面（Plane）',
      '5. 码点',
      {
        tag: 'pre',
        val: `
        00号平面 U+0000 - U+FFFF
        01号平面 U+10000 - U+1FFFF
        02号平面 U+20000 - U+2FFFF
        03号平面 U+30000 - U+3FFFF
        04号平面 U+40000
        -       -
        13号平面 U+DFFFF
        14号平面 U+E0000 - U+EFFFF
        15号平面 U+F0000 - U+FFFFF
        16号平面 U+100000 - U+10FFFF
        `,
      },
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 14,
    title: `非 BMP 平面也被称为__平面或__平面。`,
    answers: ['辅助', '星体'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 15,
    title: `BMP 英文全称__，中文全称__。又简称__平面(英文__)。`,
    answers: [
      'Basic Multilingual Plane [ˈbeɪsɪk] [ˌmʌltiˈlɪŋɡwəl] [pleɪn]',
      '基本多文种平面',
      '零号',
      'Plane 0',
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 16,
    title: `UTF-8 的特点是对不同__的字符使用不同__的编码。Unicode 到 UTF-8 的编码方式如下：`,
    answers: [
      '码点范围',
      '长度',
      '零号',
      'Plane 0',
      {
        tag: 'pre',
        val: `
        Unicode编码范围  位数  字节数  UTF-8 字节流(二进制)
        000000-00007F    7    1     0xxxxxxx
        000080-0007FF   11    2     110xxxxx 10xxxxxx
        000800-00FFFF   16    3     1110xxxx 10xxxxxx 10xxxxxx
        010000-10FFFF   21    4     11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
        `,
      },
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 17,
    title: `UTF-8 对 Unicode 第__平面(也就是码值小于等于__)的字符编码效率较高。`,
    answers: ['0', 'FFFF'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 18,
    title: `字节序有 2 种__和__。`,
    answers: ['大端', '小端'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 19,
    title: `BE (字节序相关)英文全称__，中文全称__。顺序为从__到__。`,
    answers: ['Big Endian', '大端字节序', '左', '右'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 20,
    title: `LE (字节序相关)英文全称__，中文全称__。顺序为从__到__。`,
    answers: ['Little Endian', '小端字节序', '右', '左'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 21,
    title: `BOM (字节序相关)英文全称__，中文全称__。`,
    answers: ['Little Endian', '小端字节序', '右', '左'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 22,
    title: `为了解决不同环境读取字节顺序的差异，Unicode 标准建议用__来区分字节序。`,
    answers: ['BOM'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 23,
    title: `一般来说，以 Macintosh[ˈmækɪnˌtɒʃ] 制作或存储的文字使用__字节序，以 Microsoft 或 Linux 制作或存储的文字使用__字节序。`,
    answers: ['大端(BE)', '小端(LE)'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 24,
    title: `U+__字符在 Unicode 中代表的意义是 ZERO WIDTH NO-BREAK SPACE，顾名思义：它是个没有宽度也没有断字的空白。`,
    answers: ['FEFF'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 25,
    title: `为了弄清楚 UTF-16 文件的大小端字节序，所以在 UTF-16 文件的__，都会放置一个 U+FEFF 字符作为 BOM，以表示这个文本文件是用 UTF-16 编码的。如果一个文件开头的__个二进制的值转为十进制等于 65279，则为__端字节序；等于 665534，则为小端字节序。`,
    answers: ['开头', '16', '大'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 26,
    title: `XML 及其子集__采用 UTF-8 作为编码方案，理论上我们可以在各种支持 XML 标准的浏览器上显示任何地区文字的网页，只要电脑本身安装有合适的__即可。可以利用 __xxx; 的格式显示特定的字符。xxx代表该字符的十进制 Unicode 代码。如果采用十六进制代码，在编码之前加上__（例如__）字符即可。但部分旧版本的浏览器可能无法识别十六进制代码。`,
    answers: ['HTML', '字体', '&#', 'x', '&#x8449'],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 27,
    title: `幂等(idempotent): 函数在相同输入下，多次运算的结果__。反之，非幂等。`,
    answers: ['相等'],
    tags: ['计算机科学', '数学', '代数'],
    type: '基础知识',
  },
  {
    id: 28,
    title: `回文子串: 是指这个字符串是__的，而且无论从左读还是从右读，所读的__是一样的。`,
    answers: ['对称', '顺序'],
    tags: ['计算机科学'],
    type: '基础知识',
  },
  {
    id: 29,
    title: `在软件编程中“foo”相当于一个__。常用于一些__代码中，因为这样可以更专注于代码功能，不用花时间去取__。`,
    answers: ['占位符', '示例', '名字'],
    tags: ['计算机科学', '软件编程'],
    type: '基础知识',
  },
  {
    id: 30,
    title: `编译（全称：编译程序）：把一个__翻译成__的工作过程。`,
    answers: ['源程序', '目标程序'],
    tags: ['计算机科学', '编译原理'],
    type: '基础知识',
  },
  {
    id: 31,
    title: `时间戳（Timestamp）是指格林尼治时间__年01月01日00时00分00秒起至现在的__。`,
    answers: ['1970', '总秒数'],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 32,
    title: `GMT 的英文全称__，中文全称__。`,
    answers: ['Greenwich Mean Time', '格林尼治标准时间'],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 33,
    title: `格林尼治是英国伦敦郊区皇家格林尼治天文台所在地，地球本初子午线的标界处，世界计算时间和__的起点。`,
    answers: ['经度'],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 34,
    title: `由于地球每天的自转正在缓慢__速，因此 GMT 的误差越来越大，已被使用__报时的 UTC 取代。`,
    answers: ['减', '钟原子'],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 35,
    title: `UTC 的英文全称__，中文全称__。`,
    answers: [
      'Coordinated Universal Time',
      '协调世界时间',
      '由于英文（CUT）和法文（TUC）的缩写不同，作为妥协，简称UTC。',
    ],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 36,
    title: `UTC 的误差不会超过__秒。`,
    answers: ['1'],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 37,
    title: `为了统一世界各地的日期，18__年规定了国际日期变更线，它在太平洋中的__°经线上。`,
    answers: ['84', '180'],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 38,
    title: `CST 的英文全称__，中文全称__。`,
    answers: ['China Standard Time', '中国标准时间'],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 39,
    title: `4 种常用的进制: _1_、_2_、_3_、_4_。`,
    answers: [
      '二进制(Binary)',
      '八进制(Octal)',
      '十进制(Plain decimal[ˈdesɪml])',
      '十六进制(Hexadecimal)',
    ],
    tags: ['数学', '计算机科学'],
    type: '基础知识',
  },
  {
    id: 40,
    title: `在源代码中，纯十进制，必须以非_1_数字开头；八进制，任何以_2_开头的数字（包括纯 0）；二进制，要求前缀_3_或_4_；十六进制，要求前缀_5_或 0X；`,
    answers: ['0', '0', '0b', '0B', '0x'],
    tags: ['数学', '计算机科学'],
    type: '基础知识',
  },
  {
    id: 41,
    title: `如果在函数中存在着调用__的情况，这种现象就叫递归。`,
    answers: ['函数本身'],
    tags: ['计算机科学', '算法'],
    type: '基础知识',
  },
  {
    id: 42,
    title: `「递」的意思是将问题__来解决。`,
    answers: ['拆解成子问题'],
    tags: ['计算机科学', '算法'],
    type: '基础知识',
  },
  {
    id: 43,
    title: `「归」的意思是__解决后，子问题一层一层的回归。`,
    answers: ['最小的子问题'],
    tags: ['计算机科学', '算法'],
    type: '基础知识',
  },
  {
    id: 44,
    title: {
      tag: 'pre',
      val: `
      递归有以下两个特点:
      1. 一个问题可以分解成具有__的子问题、子子问题。
      2. 经过层层分解，最后的子问题一定是一个不能再分解的__（即终止条件）。
      `,
    },
    answers: [
      '相同解决思路',
      '固定值',
      {
        tag: 'img',
        val: '<img src="https://oss.taichiyi.com/markdown/c7103bc4ded24320badbf88a9e4e43c6.png" />',
      },
    ],
    tags: ['计算机科学', '算法'],
    type: '基础知识',
  },
  {
    id: 45,
    title: `一个正整数的阶乘（factorial[fækˈtɔːriəl]）是所有小于及等于该数的正整数的__。`,
    answers: ['积'],
    tags: ['计算机科学', '算法'],
    type: '基础知识',
  },
  {
    id: 46,
    title: `积(数学用语)，一般指"乘法"运算的__。`,
    answers: ['结果'],
    tags: ['数学'],
    type: '基础知识',
  },
  {
    id: 47,
    title: `0的阶乘为__。`,
    answers: ['1', '0!=1'],
    tags: ['数学'],
    type: '基础知识',
  },
  {
    id: 48,
    title: `自然数n的阶乘写作__。`,
    answers: ['n!', '0!=1，n!=(n-1)!×n。'],
    tags: ['数学'],
    type: '基础知识',
  },
  {
    id: 49,
    title: `OOP(程序设计相关)英文全称__，中文全称__。`,
    answers: [
      "Object Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]",
      '面向对象程序设计(面向对象编程)',
    ],
    tags: ['计算机科学', '编程思想'],
    type: '基础知识',
  },
  {
    id: 50,
    title: `POP(程序设计相关)英文全称__，中文全称__。`,
    answers: [
      "Procedure[prəˈsiːdʒər] Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]",
      '面向过程编程',
    ],
    tags: ['计算机科学', '编程思想'],
    type: '基础知识',
  },
  {
    id: 51,
    title: `AOP(程序设计相关)英文全称__，中文全称__。`,
    answers: ["Aspect[ˈæspekt] Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]", '面向切面编程'],
    tags: ['计算机科学', '编程思想'],
    type: '基础知识',
  },
  {
    id: 52,
    title: `SP(程序设计相关)英文全称__，中文全称__。`,
    answers: ["Structured['strʌktʃəd] Programming[ˈproʊɡræmɪŋ]", '结构化程序设计'],
    tags: ['计算机科学', '编程思想'],
    type: '基础知识',
  },
  {
    id: 53,
    title: `依赖注入：就是将__当变量传入到一个对象中去。`,
    answers: ['实例'],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 54,
    title: `使用 const 声明变量后，该变量的__就不可改变了。`,
    answers: ['指针'],
    tags: ['计算机科学', '程序设计语言'],
    type: '基础知识',
  },
  {
    id: 55,
    title: `在 JavaScript 中声明变量，可以通过__、__ 和 __ 3个关键字。`,
    answers: ['var[vɑ:]', 'let[let]', 'const[ˈkɒnst]'],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 56,
    title: `ECMAScript变量是__类型的，这意味着变量在运行时可以是__类型的数据。`,
    answers: ['松散(弱)', '任何'],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 57,
    title: `使用 var 声明的变量，会被提升到作用域的__部。`,
    answers: ['顶'],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 58,
    title: `let 是__作用域的，而 var 是__作用域的。`,
    answers: ['块', '函数'],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 59,
    title: `在全局执行上下文中使用 let 声明变量时，变量不会像使用 var 那样添加到__。`,
    answers: ['window对象'],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 60,
    title: `ECMAScript有 8 种数据类型。7 种原始类型_1_、_2_、_3_、_4_、_5_、_6_、_7_和一种引用类型_8_。`,
    answers: [
      '1. Undefined(ES3)',
      '2. Null',
      '3. Boolean',
      '4. String',
      '5. Number',
      '6. Symbol(ES6)',
      '7. BigInt(ES10)',
      '8. Object',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 61,
    title: `undefined 是ES__才加入的，是为了区分__和__之间的差异。`,
    answers: [
      '3',
      '空对象指针',
      '未初始化变量',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 62,
    title: `严格模式下, 不再支持 arguments.__。`,
    answers: [
      'callee',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 63,
    title: `严格模式下, 函数参数的值不会随 __ 的值的改变而变化。`,
    answers: [
      'arguments 对象',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 64,
    title: `严格模式下, 禁止删除__，正常模式是静默失败。`,
    answers: [
      '变量',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 65,
    title: `严格模式下, eval（）有自己的__。`,
    answers: [
      '执行上下文',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 66,
    title: `严格模式下, 禁用 __ 关键字。`,
    answers: [
      'with',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 67,
    title: `xxx`,
    answers: [
      'xxx',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 68,
    title: `严格模式下, 禁止以零(0)开头的八进制语法，如果有则会抛出错误。ES6 中支持使用__前缀表示八进制数字。`,
    answers: [
      '参数名',
      '“0o”',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 69,
    title: `严格模式下, 要求函数的__唯一，如果有则会抛出 __ 错误。`,
    answers: [
      '形参名',
      'SyntaxError(语法错误)',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 70,
    title: `严格模式下, 试图删除__的属性时会抛出异常，正常模式是静默错误。`,
    answers: [
      '不可删除',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 71,
    title: `严格模式下，错误的__操作将会抛出异常，而不是静默失败。`,
    answers: [
      '赋值',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 72,
    title: `静默失败(silently fail)：就像__不存在一样。`,
    answers: [
      '语句',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 73,
    title: `严格模式下，无法再意外创建__。如果有则会抛出 __ 错误。`,
    answers: [
      '全局变量',
      'ReferenceError(引用错误)',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 74,
    title: `C 语言的8种语句: __、__、__、__、__、__。`,
    answers: [
      '标号语句',
      '复合语句',
      '表达式语句',
      '选择语句',
      '循环语句',
      '跳转语句',
      '声明语句',
      'try 块',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 75,
    title: `表达式是__的代码，而语句是__的代码。`,
    answers: [
      '可以被求值',
      '一段可执行',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 76,
    title: `标号语句有3种语法：1.__ 2.__ 3.__。`,
    answers: [
      '“标识符 : 语句”',
      '“case 常量表达式 : 语句”',
      '“default : 语句”',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 77,
    title: `复合语句或（代码）块是__括号环绕的语句__。复合语句的括号“}”外不能__。`,
    answers: [
      '花',
      '序列',
      '加分号',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 78,
    title: `当期待一条语句，但需要依序执行多条语句时可使用__语句。`,
    answers: [
      '复合',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 79,
    title: `表达式语句语法：“表达式(可选)__”，大部分语句都是表达式语句，例如赋值或函数调用。`,
    answers: [
      ';',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 80,
    title: `无表达式的表达式语句被称作__语句。`,
    answers: [
      '空（null statement）',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 81,
    title: `选择语句在数个控制流中选择一个。有 3 种语法：1.__ 2.__ 3.__。`,
    answers: [
      '“if ( 条件 ) 语句”',
      '“if ( 条件 ) 语句 else 语句”',
      '“switch ( 条件 ) 语句”',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 82,
    title: `循环语句__执行一些代码。`,
    answers: [
      '重复',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 83,
    title: `跳转语句无条件地转移__。有 3 种语法：1.__ 2.__ 3.__。`,
    answers: [
      '控制流',
      '“break [标识符];”',
      '“continue [标识符];”',
      '“return [表达式];”',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 84,
    title: `声明语句包括变量声明和函数声明。有 4 种语法：1.__ 2.__ 3.__。`,
    answers: [
      '“var 标识符 [= 表达式];”',
      '“let 标识符 [= 表达式];”',
      '“const 标识符 [= 表达式];”',
      '“function [标识符] () {}”',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 85,
    title: `try 块提供当执行其他语句时捕获其所抛出的异常的能力。语法: __。`,
    answers: [
      '“try 复合语句 处理块序列”',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 86,
    title: `内存为变量分配存储空间的__个字节单元的地址, 称之为该变量的地址。在高级语言中变量的地址形象地称为__。`,
    answers: [
      '首',
      '指针',
    ],
    tags: ['计算机科学', '程序设计语言', '内存'],
    type: '基础知识',
  },
  {
    id: 87,
    title: `前缀和（Prefix sum）是一个数组的某项__之前(包括此项元素)的所有数组元素的__。`,
    answers: [
      '下标',
      '和',
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 88,
    title: `FPS 小于 __ 时会让人感觉到卡顿。`,
    answers: [
      '24',
    ],
    tags: ['计算机科学', '图形学',],
    type: '基础知识',
  },
  {
    id: 89,
    title: `面向对象程序设计是一种计算机__。OOP 的一条基本原则是计算机程序由单个能够起到子程序作用的__或__组合而成。`,
    answers: [
      '编程思想',
      '单元',
      '对象',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 90,
    title: `一个对象有__、__和__三种属性。`,
    answers: [
      '状态',
      '行为',
      '标识',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 91,
    title: `类定义了事物的__和它可以做到的__。`,
    answers: [
      '属性',
      '行为',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 92,
    title: `面向对象的“封装”有两层意思：将__和__捆绑在一起；将__与__分离的过程。`,
    answers: [
      '数据',
      '行为',
      '接口',
      '实现',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 93,
    title: `面向对象的“多态”：相同的行为，不同的__。`,
    answers: [
      '实现',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 94,
    title: `面向对象的“继承”：子类可以对基类的行为进行__、__、__。`,
    answers: [
      '扩展',
      '覆盖',
      '重定义',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 95,
    title: `面向对象的“消息传递”：指的是一个对象调用了另一个对象的__。`,
    answers: [
      '方法',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 96,
    title: `“A extends B”。则 B 被称为父类、__类、__类，A 被称为__类或__类。`,
    answers: [
      '基(基础类)',
      '超',
      '子',
      '派生',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 97,
    title: `横切关注点（Cross-Cutting Concerns）：指的是一些具有横越多个__的共同点。`,
    answers: [
      '模块',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 98,
    title: `CPU 的英文全称和中文全称是什么？英文:__；中文: __`,
    answers: [
      'Central processing unit',
      '中央处理器、中央处理单元',
    ],
    tags: ['计算机科学', 'CPU',],
    type: '基础知识',
  },
  {
    id: 99,
    title: `IoC（面向对象编程）英文全称__，中文全称__。`,
    answers: [
      'Inversion of Control',
      '控制反转',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 100,
    title: `控制反转是一种是面向对象编程中的一种设计模式，用来减少计算机代码之间的__。其中最常见的方式叫做__，还有一种方式叫__。`,
    answers: [
      '耦合度',
      '依赖注入（Dependency Injection，简称DI）',
      '依赖查找（Dependency Lookup）',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 101,
    title: `每一种微处理器，由于__和__的不同，就需要不同的电平脉冲来控制，使它工作。所以每一种微处理器都有自己的__，也就是机器语言。`,
    answers: [
      '硬件设计',
      '内部结构',
      '指令集',
    ],
    tags: ['计算机科学', 'CPU',],
    type: '基础知识',
  },
  {
    id: 102,
    title: 'Data URLs，即前缀为 `__` 协议的URL，其允许内容创建者向文档中嵌入小文件。',
    answers: [
      'data:',
    ],
    tags: ['计算机科学', '计算机网络',],
    type: '基础知识',
  },
  {
    id: 103,
    title: 'Data URLs 由四个部分组成：__:[&lt;__&gt;][;__],&lt;__&gt;。例子：',
    answers: [
      'data mediatype base64 data',
      {
        tag: 'pre',
        val:
        `
        [data:data]
        data:,Hello%2C%20World!
        <!--  -->
        [data:mediatype;base64,data]
        data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==
        <!--  -->
        [data:mediatype,data]
        data:text/html;charset=utf8,%3Ch1%3EHello%2C%20World %E7%BE%BD%E7%BF%BC!%3C%2Fh1%3E
        `
      }
    ],
    tags: ['计算机科学', '计算机网络',],
    type: '基础知识',
  },
  {
    id: 104,
    title: '(接上文)mediatype 是一个__类型的字符串，默认值为 text/plain;charset=__；(chartset可选)如果非__则为可选的base64标记；data为数据本身。',
    answers: [
      'MIME US-ASCII',
      '文本',
    ],
    tags: ['计算机科学', '计算机网络',],
    type: '基础知识',
  },
  {
    id: 105,
    title: '常用的 mediatype 有`text/plain;charset=UTF-8`；`text/html`；`__/jpeg`；`multipart/form-data`',
    answers: [
      'image',
    ],
    tags: ['计算机科学', '计算机网络',],
    type: '基础知识',
  },
  {
    id: 106,
    title: '计算机科学中，集合是一组__数量的数据项(也可能是0个)的__。',
    answers: [
      '可变',
      '组合',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 107,
    title: '集合的种类包括__，__，多重集，__和图。',
    answers: [
      '列表',
      '集',
      '数',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 108,
    title: '在列表中，数据项的顺序是__定的，__可以存在多个相同的数据项。',
    answers: [
      '确',
      '是',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 109,
    title: '列表根据访问方式还可以分为__和__。',
    answers: [
      '队列',
      '栈',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 110,
    title: '在集中，数据项是__序的，__可以存在相同数据项。',
    answers: [
      '无',
      '不',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 111,
    title: '多重集和集的唯一区别是，__可以存在相同数据项。',
    answers: [
      '是',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 112,
    title: '关联数组和数组的唯一区别是，关联数组的__不是非负的整数而是任意的标量。JavaScript的对象就是一个关联数组。',
    answers: [
      '索引值',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 113,
    title: '关联数组也称为，__和__。',
    answers: [
      '查找表',
      '字典',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 114,
    title: '在图中，每个数据项都可以与__个或__个其它数据项联系起来，其中每个节点都是__等的。',
    answers: [
      '一',
      '多',
      '平',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 115,
    title: '计算机中数组的定义: 一个存储元素的__集合(collection)，每个元素都有一个序号，这个序号从__开始，称为__或索引，索引通常是数字，用来计算元素之间存储位置的偏移量。线性的意思是元素在内存中是__的。',
    answers: [
      '线性',
      '0',
      '下标',
      '连续',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 116,
    title: '列表是一组__序的数据。每个列表中的数据项称为元素。在 JavaScript 中，列表中的元素可以是__数据类型。列表中可以保存多少元素并没有事先限定，实际使用时元素的数量受到程序内存的限制。',
    answers: [
      '有',
      '任意',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 117,
    title: '使用迭代器，可以不必关心数据的__，以实现对列表的遍历。',
    answers: [
      '内部存储方式',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 118,
    title: '栈是一种很简单很高效的数据结构，因为数据只能在__添加和删除。',
    answers: [
      '栈顶',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 119,
    title: '数制转换即__转换。',
    answers: [
      '进制',
    ],
    tags: ['计算机科学', '数学',],
    type: '基础知识',
  },
  {
    id: 120,
    title: '数码: 十进制有__个数码：0、1、2、3、4、5、6、7、8、9。',
    answers: [
      '10',
    ],
    tags: ['计算机科学', '数学',],
    type: '基础知识',
  },
  {
    id: 121,
    title: '基数: 二进制的基数为__；__进制的基数为10。',
    answers: [
      '2',
      '十',
    ],
    tags: ['计算机科学', '数学',],
    type: '基础知识',
  },
  {
    id: 122,
    title: '位权: 数制中某一位上的__所表示数值的大小（所处位置的价值）。1*权位，权位=基数^位置',
    answers: [
      '1',
    ],
    tags: ['计算机科学', '数学',],
    type: '基础知识',
  },
  {
    id: 123,
    title: '十进制的123，1的位权是__，2的位权是__；二进制中的 1011 ，第一个1的位权是__，0的位权是__。',
    answers: [
      '100',
      '10',
      '8',
      '4',
    ],
    tags: ['计算机科学', '数学',],
    type: '基础知识',
  },
  {
    id: 124,
    title: '设计模式的三大类型：__、__和__。',
    answers: [
      '结构型模式（Structural Patterns）',
      '创建型模式（Creational Patterns）',
      '行为型模式（Behavioral Patterns）',
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 125,
    title: '创建型模式有 5 种：_1_、_2_、_3_、_4_和_5_。',
    answers: [
      '1. 建造者（生成器）模式（Builder pattern）',
      '2. 单例模式（Singleton pattern）',
      '3. 原型模式（Prototype pattern）',
      '4. 工厂模式（Factory pattern）',
      '5. 抽象工厂模式（Abstract factory pattern）',
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 126,
    title: '结构型模式有 8 种：...',
    answers: [
      '1. 适配器模式（Adapter pattern）',
      '2. 桥接模式（Bridge pattern）',
      '3. 过滤器模式（Filter pattern）',
      '4. 组合模式（Composite pattern）',
      '5. 外观模式（Facade pattern）',
      '6. 装饰器模式（Decorator pattern）',
      '7. 代理模式（Proxy pattern）',
      '8. 享元模式（Flyweight pattern）',
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 127,
    title: '行为型模式有 11 种：...',
    answers: [
      '1. 解释器模式（Interpreter pattern）',
      '2. 模板模式（Template pattern）',
      '3. 访问者模式（Visitor pattern）',
      '4. 策略模式（Strategy pattern）',
      '5. 状态模式（State pattern）',
      '6. 观察者模式（Observer pattern）',
      '7. 备忘录模式（Memento pattern）',
      '8. 迭代器模式（Iterator pattern）',
      '9. 命令模式（Command pattern）',
      '10. 中介者模式（Mediator pattern）',
      '11. 责任链模式（Chain of responsibility pattern）',
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 128,
    title: '正则表达式，就是一种描述字符串__的__化表达方式。',
    answers: [
      '结构模式',
      '形式',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 129,
    title: '在计算机中，正则表达式处理的对象是字符串，或者抽象的说，是一个__。',
    answers: [
      '对象序列',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 130,
    title: '正则表达式（__ __ 简写regex）。',
    answers: [
      'Regular[ˈreɡjələr]',
      'Expression[ɪkˈspreʃn]',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 131,
    title: '完整的正则表达式由__字符和__字符两种字符构成。特殊字符也称为“元字符”，普通文本字符也称为“文本”。',
    answers: [
      '特殊',
      '普通文本',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 132,
    title: '正则表达式__，它容许使用者列出在某处期望匹配的字符，通常被称作__。一个字符组是一个__。',
    answers: [
      '结构体',
      '字符组',
      '元素',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 133,
    title: '在正则表达式中，如果连字符出现在__中，且不在__，则连字符为元字符，否则为普通文本字符。',
    answers: [
      '字符组',
      '开头',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 134,
    title: '在正则表达式中，默认是一行文本模式，如果需要开启多行文本模式，需要添加__。',
    answers: [
      '修饰符m',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 135,
    title: '在正则表达式中，多行文本模式下，「$」的意义是匹配字符串内部的__。',
    answers: [
      '换行符',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 136,
    title: '在正则表达式中，__不是正则表达式的一部分，是软件工具提供的特性。',
    answers: [
      '修饰符',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 137,
    title: '在正则表达式中，「^tcy$」的文字意义是什么？',
    answers: [
      '匹配的条件是，行开头(每一行都有一个开头)，然后是字母 c a t，然后是行末尾。',
      '[行开头][锚点]',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 138,
    title: '在正则表达式中，排除型字符组，通过在字符组的__加入「^」来表示。',
    answers: [
      '开头',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 139,
    title: '在正则表达式中，元字符在__的内部和外部，元字符的意义是不一样的。',
    answers: [
      '字符组',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 140,
    title: '在正则表达式中，在检查正则表达式之前会把每一行的__去掉。',
    answers: [
      '换行符',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 141,
    title: '在正则表达式中，使用元字符「|」来实现__，它能够把不同的__组合成一个总表达式，这种子表达式又称为“多选分支”。',
    answers: [
      '多选结构',
      '子表达式',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 142,
    title: '在正则表达式中，元字符「(」和「)」来__和__，分组就是确定__的范围。',
    answers: [
      '分组',
      '捕获',
      '子表达式',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 143,
    title: '在正则表达式中，之前紧邻元素（包含子表达式）出现一次或零次{0,1}，可以通过元字符「__」来表示，该元素称为__元素。',
    answers: [
      '?',
      '可选项',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 144,
    title: '在正则表达式中，限定所作用元素的匹配次数的元字符，统称为__。',
    answers: [
      '量词',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 145,
    title: '在正则表达式中，之前紧邻元素（包含子表达式）出现一次或多次{1,}，可以通过元字符「__」来表示。',
    answers: [
      '+',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 146,
    title: '在正则表达式中，之前紧邻元素（包含子表达式）出现任意多次{0,}，可以通过元字符「__」来表示。',
    answers: [
      '*',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 147,
    title: '在正则表达式中，“__”是正则表达式的特性之一，它容许我们匹配与子表达式先前部分匹配的同样的文本。',
    answers: [
      '反向引用',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 148,
    title: '在正则表达式中，“__”是正则表达式的特性之一，它不匹配字符，只匹配文本中特定的位置。环视不会占用“字符”。',
    answers: [
      '环视结构',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 149,
    title: '在正则表达式中，环视结构分为四种类型，__「(?=...)」、__「(?!...)」、__「(?<=...)」和__「(?<!...)」。',
    answers: [
      '肯定顺序环视',
      '否定顺序环视',
      '肯定逆序环视',
      '否定逆序环视',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 150,
    title: '在正则表达式中，肯定顺序环视，匹配成功的条件是，子表达式能够匹配“位置”__则的文本。',
    answers: [
      '右',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 151,
    title: '在正则表达式中，子表达式的开头有六种，__、__、__、__、__。',
    answers: [
      '「?=」',
      '「?!」',
      '「?<=」',
      '「?<!」',
      '「?:」',
      '「?>」',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 152,
    title: '在正则表达式中，__型括号「(?:...)」表示只分组不捕获。',
    answers: [
      '非捕获',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 153,
    title: '在正则表达式中，正则引擎分为两大类，__ 和 __。JavaScript 是 __引擎。',
    answers: [
      'DFA(Deterministic finite automaton) 确定型有穷自动机',
      'NFA(Non-deterministic finite automaton) 非确定型有穷自动机',
      'NFA',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 154,
    title: '在正则表达式中，优先选择最__端的某个匹配结果。有例子',
    answers: [
      '左',
      '[例子]用「fat|cat|belly|your」来匹配字符串“The dragging belly indicates that your cat is too fat.”结果是“belly”',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 155,
    title: '在正则表达式中，标准的匹配__词（「*」、「+」、「?」和「{m,n}」）是匹配优先的，匹配优先的意思是匹配尽可能多的字符。',
    answers: [
      '量',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 156,
    title: '在正则表达式中，正则DFA引擎是循环“匹配文本”还是“正则表达式”?',
    answers: [
      '匹配文本',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 157,
    title: '在正则表达式中，锚点可以分为两大类：__和__。',
    answers: [
      '简单锚点',
      '复杂锚点',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 158,
    title: '在正则表达式中，简单锚点有四个__、__、__、__。',
    answers: [
      '「^」',
      '「$」',
      '「\b」',
      '「\B」',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 159,
    title: '在正则表达式中，__优先的结构只会在被迫的情况下交还字符。有例子。',
    answers: [
      '匹配',
      '[例子]「^.*([0-9]+)」匹配“copyright 2003.”，子表达式只捕获到了“3”',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 160,
    title: '在正则表达式中，NFA 引擎是__主导，DFA 引擎是__主导。',
    answers: [
      '表达式',
      '文本',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 161,
    title: '在正则表达式中，如果需要在“进行尝试”和“跳过尝试”之间选择，对于__，引擎会优先选择“进行尝试”，而对于__，会“跳过尝试”。',
    answers: [
      '匹配优先量词',
      '忽略优先量词',
      '[例子]「ab?c」“abc”，当下一个到「b」时',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 162,
    title: '在正则表达式中，要使用“忽略优先量词”需要在量词的后面加一个__。',
    answers: [
      '「?」问号',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 163,
    title: '在正则表达式中，量词的表示有4种，__、__、__、__。',
    answers: [
      '问号     ?        ',
      '加号     +        ',
      '星号     *        ',
      '区间量词 {min,max} ',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 164,
    title: '在正则表达式中，(JavaScript 不支持)固化分组「(?>...)」表示匹配到闭括号后，此结构体中的所有__都会被放弃。',
    answers: [
      '备用状态',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 165,
    title: '在正则表达式中，遇到“__失败”时，引擎会回归到备用状态。',
    answers: [
      '本地匹配',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 166,
    title: '子序列（简称子列）：指序列的__项按原有__排列而得的序列。',
    answers: [
      '一部分',
      '次序',
    ],
    tags: ['数学','计算机科学',],
    type: '基础知识',
  },
  {
    id: 167,
    title: '子串：串中任意个__的字符组成的子序列称为该串的子串。',
    answers: [
      '连续',
    ],
    tags: ['数学','计算机科学',],
    type: '基础知识',
  },
  {
    id: 168,
    title: 'React 类组件的生命周期分为哪几个阶段？每个阶段分别按顺序触发哪些函数？',
    answers: [
      '分为“挂载”“更新”“卸载”三个阶段',
      '“挂载”阶段：constructor -> getDerivedStateFromProps -> render -> componentDidMount',
      '“更新”阶段：getStateFromProps -> shouldComponentUpdate -> render -> getSnapShotBeforeUpdate -> componentDidUpdate',
      '“更新”阶段：componentWillUnMount',
    ],
    tags: ['计算机科学','React','生命周期'],
    type: '专用领域知识',
  },
  {
    id: 169,
    title: '表达式（expression）由__和__组成。最简单的表达式是不带运算符的一个常量或变量。(如: 22或beebop;带符号:55+22)',
    answers: [
      '运算符',
      '运算对象',
    ],
    tags: ['计算机科学','程序设计语言','C'],
    type: '基础知识',
  },
  {
    id: 170,
    title: 'C 表达式的重要特征之一是: 每个表达式都有一个__。',
    answers: [
      '值',
    ],
    tags: ['计算机科学','程序设计语言','C'],
    type: '基础知识',
  },
  {
    id: 171,
    title: '对表达式__时，有时会发生副作用。',
    answers: [
      '求值',
    ],
    tags: ['计算机科学','程序设计语言','C'],
    type: '基础知识',
  },
  {
    id: 172,
    title: '语句（statement）是程序的基本构建块。一条语句相当于一条完整的__。最简单的语句是空语句:";"。',
    answers: [
      '计算机指令',
    ],
    tags: ['计算机科学','程序设计语言','C'],
    type: '基础知识',
  },
  {
    id: 173,
    title: 'C 中，赋值和函数调用都是表达式。没有所谓的“赋值语句”和“函数调用语句”，这些语句实际上都是__。',
    answers: [
      '表达式语句',
    ],
    tags: ['计算机科学','程序设计语言','C'],
    type: '基础知识',
  },
  {
    id: 174,
    title: 'while 语句是一种迭代语句，有时也被称为__语句。',
    answers: [
      '结构化',
    ],
    tags: ['计算机科学','程序设计语言','C'],
    type: '基础知识',
  },
  {
    id: 175,
    title: '副作用（side effect）是对__或__的修改。',
    answers: [
      '数据对象',
      '文件',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 176,
    title: 'JavaScript 中，有 3 种执行上下文类型：__、__和__。',
    answers: [
      '全局(Global Execution Context)',
      '函数(Functional Execution Context )',
      'eval(Eval Function Execution Context)',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 177,
    title: 'JavaScript 中，全局执行上下文(Global execution context)由__环境决定。一个__中只能有一个全局执行上下文。',
    answers: [
      '宿主',
      '程序',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 178,
    title: 'JavaScript 中，当调用函数时，引擎都会创建一个新的__，创建完后就会被压入执行上下文栈。函数完成执行后，将函数执行上下文__栈，将__返回到先前执行上下文。',
    answers: [
      '局部执行上下文',
      '弹出',
      '控制权',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 179,
    title: 'JavaScript 中，解析器每次遇到新作用域时都会在当前执行上下文中创建__（例如，遇到if，for语句等）。有图',
    answers: [
      '词法环境',
      {
        tag: 'img',
        val:'<img src="https://oss.taichiyi.com/markdown/ov33jtml.png" alt="img">',
      },
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 180,
    title: '执行上下文栈就是其他编程语言所说的__栈。别称有：执行栈（execution stack）、控制栈（control stack）、运行时栈（run-time stack）与机器栈（machine stack）',
    answers: [
      '调用栈（call stack）',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 181,
    title: 'JavaScript 中，创建执行上下文有两个阶段：1) __阶段 和 2) __阶段。',
    answers: [
      '创建(Creation Phase)',
      '执行(Execution Phase)',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 182,
    title: 'JavaScript 中，“创建阶段”主要发生了两个事情：1)创建__环境组件。2)创建__环境组件。',
    answers: [
      '词法(LexicalEnvironment)',
      '变量(VariableEnvironment)',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 183,
    title: 'JavaScript 中，每个词法环境有三个组成部分：1)__ 2)__ 3)__。',
    answers: [
      '环境记录 EnvironmentRecord(Environment Record)',
      '引用外部环境 outer(Reference outer Lexical Environment)',
      '绑定this ThisBinding(This binding)',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 184,
    title: 'JavaScript 中，词法环境中的环境记录：记录了多个__映射__。',
    answers: [
      '标识符',
      '到值',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 185,
    title: 'JavaScript 中，引用外部环境：外部执行上下文。对外部环境的引用意味着它可以访问其外部词法环境。这意味着，如果在当前__环境中找不到变量，则JavaScript引擎可以在外部环境中查找变量。',
    answers: [
      '词法',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 186,
    title: 'JavaScript 中，绑定this：__函数应该没有这个属性。',
    answers: [
      '箭头',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 187,
    title: '在 ES6 中，LexicalEnvironment 组件和 VariableEnvironment 组件之间的区别是前者用于存储__和变量（let和const），而后者仅用于存储变量（__）。',
    answers: [
      '函数定义',
      'var',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 188,
    title: 'JavaScript 中，词法环境的“__”和“__”在执行上下文的创建阶段就已经确定。',
    answers: [
      'outer',
      'ThisBinding',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 189,
    title: '声明：告诉编译器/解析器有这个变量的存在，但是不会分配__。例子',
    answers: [
      '内存空间',
      '在 JavaScript 中，声明一个变量：var a;',
    ],
    tags: ['计算机科学', '程序设计语言','C'],
    type: '通用领域知识',
  },
  {
    id: 190,
    title: '定义：为__分配内存空间，在 C 语言中，一般__就包含了定义，例如：int a;(确定了变量和变量的类型，默认值一般为 0)，但是在 JavaScript 中，var a; 就只是声明。',
    answers: [
      '变量',
      '声明',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 191,
    title: '初始化：即__时赋的值。不指定的话开辟时赋该类型的默认值。初始化是编译器的行为。在 JavaScript 中，变量的初始化值为 undefined。',
    answers: [
      '开辟内存区域',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 192,
    title: '赋值：就是在__时，对变量的值进行刷新。赋值则是运行时的行为。',
    answers: [
      '运行',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 193,
    title: 'JavaScript 对象对其原型的引用是“__引用”，对其属性值的引用是“__引用”。',
    answers: [
      '隐式',
      '显式',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 194,
    title: 'JavaScript 中，装箱就是把__转变为__。装箱又分为隐示和显示，想好后看例子。',
    answers: [
      `原始类型`,
      `对应的对象`,
      `显示装箱：new String('abc').split('');`,
      `隐示装箱：'abc'.split('');`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 195,
    title: 'JavaScript 中，拆箱就是把__转变为__的值。',
    answers: [
      `对象`,
      `原始类型`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 196,
    title: 'JavaScript 中，尝试把一个对象转换为原始值时，将调用 __ 方法。',
    answers: [
      `ToPrimitive ( input [ , PreferredType ] )`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 197,
    title: '命令式编程（__ Programming）：详细的命令机器怎么一步一步的得到结果。',
    answers: [
      `Imperative[ɪmˈperətɪv]`,
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 198,
    title: '声明式编程（__ Programming）：只告诉结果，不关心过程。',
    answers: [
      `Declarative[dɪˈklærətɪv]`,
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 199,
    title: '排序算法分为哪几类？常见的内部排序算法有哪些？有图',
    answers: [
      `排序算法分为内部排序和外部排序`,
      `插入排序`,
      `希尔排序`,
      `选择排序`,
      `冒泡排序`,
      `归并排序`,
      `快速排序`,
      `堆排序`,
      `基数排序`,
      {
        tag:'img',
        val:'<img src="https://oss.taichiyi.com/markdown/kghpr87l.png" />'
      },
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 200,
    title: `编码（Encoding）：将文字、数字或其它对象编成__，或将信息、数据转换成规定的电脉冲信号。`,
    answers: ['数码',],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 201,
    title: `数字系统中常用的编码有两类，__和__。`,
    answers: [
      '二进制编码',
      '十进制编码',
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 202,
    title: `解码（Decoding）：将__还原成它所代表的内容或将电脉冲信号、光信号、无线电波等转换成它所代表的信息、数据等的过程。`,
    answers: [
      '数码',
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 203,
    title: `纯函数：函数与外界交换数据只有一个唯一渠道——__和__。相同输入总是会返回相同的输出；不__；不__。`,
    answers: [
      '参数',
      '返回值',
      '产生副作用',
      '依赖外部状态',
    ],
    tags: ['计算机科学', '编程思想'],
    type: '基础知识',
  },
  {
    id: 204,
    title: `程序（计算机程序 Program）是一个__。`,
    answers: [
      '指令序列',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 205,
    title: `软件(Software)包括计算机使用的程序和其他操作信息。软件可以由多个__组成。`,
    answers: [
      '程序',
      '软件>程序>应用程序',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 206,
    title: `__(Aplication software)和__(System software)都是一个程序或一组程序。应用程序软件面向__，系统软件面向__，应用程序软件无法自行运行，而是依赖于系统软件来执行。`,
    answers: [
      '应用程序软件',
      '系统软件',
      '最终用户',
      '开发者',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 207,
    title: `程序=__+__`,
    answers: [
      '数据结构',
      '算法',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 208,
    title: `目标程序：只包含__被编译器翻译成的__代码，这还不是一个完整的程序。`,
    answers: [
      '源程序',
      '机器语言',
    ],
    tags: ['计算机科学','编译原理'],
    type: '基础知识',
  },
  {
    id: 209,
    title: `目标程序要成为__，还缺少__和__。`,
    answers: [
      '源程序',
      '机器语言',
    ],
    tags: ['计算机科学','编译原理'],
    type: '基础知识',
  },
  {
    id: 210,
    title: `目标程序要成为__，还缺少__和__。`,
    answers: [
      '可执行文件',
      '启动代码',
      '库函数',
    ],
    tags: ['计算机科学','编译原理'],
    type: '基础知识',
  },
  {
    id: 211,
    title: `编译（全称：编译程序）：把一个__翻译成__的工作过程。`,
    answers: [
      '源程序',
      '目标程序',
    ],
    tags: ['计算机科学','编译原理'],
    type: '基础知识',
  },
  {
    id: 212,
    title: `源代码（也称__）是指未编译的按照一定的程序设计语言规范书写的文本文件，是一系列人类可读的计算机语言指令。`,
    answers: [
      '源程序',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 213,
    title: `GUI 的英文全称__，中文全称__。`,
    answers: [
      'Graphical User Interface',
      '[ˈɡræfɪkl][ˈjuːzər][ˈɪntərfeɪs]',
      '图形用户界面',
    ],
    tags: ['计算机科学','图形学',],
    type: '基础知识',
  },
  {
    id: 214,
    title: `代码复用，也被称作软件复用。就是再利用已有的__，或者__去编写新的代码来构造软件。`,
    answers: [
      '代码',
      '相关的知识',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 215,
    title: `软件复用的抽象级别：源代码->__->程序库->框架->__->分析`,
    answers: [
      '继承/组合',
      '设计模式',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 216,
    title: `在面向对象程序设计（OOP）中，类与类之间的耦合度从弱到强排列：__->__->__->__->__。`,
    answers: [
      '依赖关系',
      '关联关系',
      '聚合关系',
      '组合关系',
      '泛化关系和实现关系',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
  {
    id: 217,
    title: `在面向对象程序设计（OOP）中，依赖（Dependency）关系是一种__关系，它是对象之间耦合度最弱的一种关联方式，是临时性的关联。在代码中，某个类的方法通过__、__或者__来访问另一个类（被依赖类）中的某些方法来完成一些职责。`,
    answers: [
      '使用',
      '局部变量',
      '方法的参数',
      '对静态方法的调用',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
  {
    id: 218,
    title: `在面向对象程序设计（OOP）中，关联（Association）关系是对象之间的一种__关系，用于表示一类对象与另一类对象之间的联系。`,
    answers: [
      '引用',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
  {
    id: 219,
    title: `在面向对象程序设计（OOP）中，关联关系是类与类之间最常用的一种关系，分为__、__和__。`,
    answers: [
      '一般关联关系',
      '聚合关系',
      '组合关系',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
  {
    id: 220,
    title: `在面向对象程序设计（OOP）中，聚合（Aggregation[ˌæɡrɪˈɡeɪʃn]）关系是强关联关系，是整体和部分之间的关系，是 __-a 的关系。部分对象可以脱离整体对象而独立存在吗？`,
    answers: [
      'has',
      '可以',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
  {
    id: 221,
    title: `在面向对象程序设计（OOP）中，组合（Composition[ˌkɑːmpəˈzɪʃn]）关系是一种更强烈的聚合关系，表示类之间的整体与部分的关系，但它是 __-a 关系。部分对象可以脱离整体对象而独立存在吗？`,
    answers: [
      'cxmtains',
      '不可以',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
  {
    id: 222,
    title: `在面向对象程序设计（OOP）中，泛化（Generalization[ˌdʒenrələˈzeɪʃn]）关系是对象之间耦合度最大的一种关系，表示__与__的关系，是父类与子类之间的关系，是一种继承关系，是 __-a 的关系。`,
    answers: [
      '一般',
      '特殊',
      'is',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
  {
    id: 223,
    title: `在面向对象程序设计（OOP）中，实现（Realization[ˌriːələˈzeɪʃn]）关系是__与__之间的关系。在这种关系中，类实现了接口，类中的操作实现了接口中所声明的所有的抽象操作。`,
    answers: [
      '接口',
      '实现类',
      'is',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
  {
    id: 224,
    title: `接口（Interface）是一种特殊的类，它具有类的结构但不可被__化，只可以被子类实现。它包含抽象__，但不包含__。它描述了类或组件对__可见的动作。`,
    answers: [
      '实例',
      '操作',
      '属性',
      '外',
    ],
    tags: ['计算机科学','编程思想',],
    type: '基础知识',
  },
];

export default data;
