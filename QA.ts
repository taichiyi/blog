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
    '词语' |
    '摄影' |
    '生命周期' |
    'Redux' |
    'React' |
    'React Router' |
    'JavaScript' |
    'C' |
    'CPU' |
    'RAM' |
    '正则表达式' |
    '图形学' |
    '程序设计语言' |
    '设计模式' |
    '函数式编程' |
    '响应式编程' |
    '命令式编程' |
    '声明式编程' |
    '编程思想' |
    '排序算法' |
    '算法' |
    '数据结构' |
    '测绘科学与技术' |
    '计算机网络' |
    '编译原理' |
    '柯里化' |
    '数学' |
    '代数' |
    '计算机科学' |
    '字符编码' |
    '编码'
  )[];
  type: '基础知识' | '通用领域知识' | '专用领域知识';
}

const data: QAs[] = [
  {
    id: 1,
    title: `Unicode 是什么？主要包括什么？有什么用？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
是什么？
  Unicode 是计算机科学领域的一项标准。
主要包括什么？
  包括字符集和编码方案。
有什么用？
  用于对文本进行一致的编码、表示和处理。
        `,
      },
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 2,
    title: `UTF 是什么？`,
    answers: [
      'UTF 全称 Unicode 转换格式，是包含 UTF-8、UTF-16、UTF-32 等编码方案的统称。',
      'Unicode Transformation Format [ˈjuːnɪˌkəʊd] [ˌtrænsfərˈmeɪʃn] [ˈfɔːrmæt]',
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 3,
    title: `UCS 是什么？`,
    answers: [
      `UCS 全称 通用字符集，是 ISO 制定的一种字符编码标准。`,
      `Universal Character Set [ˌjuːnɪˈvɜːsəl] [ˈkærəktər] [set]`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 4,
    title: `计算机科学中，主要有哪些字符编码标准？分别由哪些组织制定？什么时候开始兼容？兼容了什么？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
主要有两种字符编码标准：
  - Unicode（Unicode 联盟 制定）
  - UCS（ISO 制定）
1991 年开始相互兼容。
兼容了字符集。
        `,
      }
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 5,
    title: `在字符编码术语中，编码位置是什么？有什么相似的术语吗？`,
    answers: [
      `编码位置（Code position）是字符集中字符对应的数字。`,
      `编码位置（Code position）也称为码点（Code point）。`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 6,
    title: `Unicode 标准规定多少个码点不对应任何字符？为什么？这些码点还有用吗？`,
    answers: [
      `U+D800-U+DFFF 2048 个码点不对应任何字符，`,
      `因为 UCS-2 时代，U+D800-U+DFFF 内的值被占用，1991 年为了相互兼容，所以这一段码点被废弃。`,
      `还有用，UTF-16 的代理对会使用这段码点。`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 7,
    title: `UCS-2 和 UCS-4 是什么？有什么区别？`,
    answers: [
      `UCS-2 是 UCS 的一种固定长度的采用 2 个字节的编码方式。`,
      `UCS-4 是 UCS 的一种固定长度的采用 4 个字节的编码方式。`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 8,
    title: `一个中文的偏旁有没有可能成为一个 Unicode 的码点？`,
    answers: [
      '可能',
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 9,
    title: `面向过程的程序设计，有哪些缺点？`,
    answers: [
      `概况：随着程序规模的增大，大量函数、变量之间的关系错综复杂。难以维护、复用和拓展。`,
      `注：所以“面向对象的程序设计”应运而生`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 10,
    title: `为什么会存在 Unicode 和 UCS 等这些字符编码标准？`,
    answers: [
      `因为冯诺依曼机只能处理二进制数字，如果要处理文本，就必须先把文本转换为数字才能处理。`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 11,
    title: `在数学和计算机科学中，表达式（Expression[ɪkˈspreʃn]）是什么？有哪几种分类？最简单的表达式由什么组成？`,
    answers: [
      `表达式是由数字、变量和运算符等能求得数值的组合。`,
      `有两种：算术表达式和逻辑表达式。`,
      `最简单的表达式：由数字或变量组成。`,
    ],
    tags: ['数学', '计算机科学',],
    type: '基础知识',
  },
  {
    id: 12,
    title: `在文本中，怎么表示一个字符的码点？`,
    answers: [
      `通常会用“U+”然后紧接着一组十六进制的数字来表示一个字符。`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 13,
    title: `在 Unicode 中， 术语“平面”是什么意思？还有什么类似的术语？有多少个平面？每个平面有多少个码点？`,
    answers: [
      `平面，是一种码点的编排方式。`,
      `平面也称为“组”。`,
      `Unicode 有 17 个平面。`,
      `每个平面有 65536(16^4) 个码点。`,
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
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 14,
    title: `非 BMP 平面也被称为什么？`,
    answers: [
      `也被称为“辅助平面”和“星体平面”`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 15,
    title: `BMP 是什么？`,
    answers: [
      `BMP 全称“基本多文种平面”，又称为“零号平面”，表示 U+0000-U+FFFF 范围的码点。`,
      'Basic Multilingual Plane [ˈbeɪsɪk] [ˌmʌltiˈlɪŋɡwəl] [pleɪn]',
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 16,
    title: `UTF-8 是什么？有什么特点？`,
    answers: [
      `UTF-8 是 UTF 中的一种编码方案。`,
      `UTF-8 的特点是对不同范围的码点使用不同长度的位数进行编码。`,
      {
        tag: 'pre',
        val: `
Unicode 编码范围  位数  字节数  UTF-8 字节流(二进制)
000000-00007F    7    1     0xxxxxxx
000080-0007FF   11    2     110xxxxx 10xxxxxx
000800-00FFFF   16    3     1110xxxx 10xxxxxx 10xxxxxx
010000-10FFFF   21    4     11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
        `,
      },
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 17,
    title: `UTF-8 与 UTF-16 相比，UTF-8 有什么优点。`,
    answers: [
      `UTF-8 对零平面的字符，编码内存利用率较高。`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 18,
    title: `字节序（Endianness）是什么？有几种？`,
    answers: [
      `字节序是字节的存储顺序。`,
      `有两种，大端序（BE）和小端序（LE）。`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 19,
    title: `小端序（Little Endian）是什么？和大端序有什么区别？有例子`,
    answers: [
      `小端字节序，是低位数据放低位地址的一种存储顺序。`,
      `区别：大端序是低位数据放高位地址。`,
      `Endian['endɪən]`,
      {
        tag: 'pre',
        val:
          `
比如数字 0x87654321，在两种不同字节序 CPU 中，其存储顺序如下所示：

Little Endian：

  低地址 高地址
  ----------------------------------------->
  | 21 |43 | 65 | 87 |

Big Endian：

  低地址 高地址
  ----------------------------------------->
  | 87 |65 | 43 |21 |
        `,
      },
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 20,
    title: '在正则表达式中，元字符「.」（point）“点号”是什么？',
    answers: [
      '点号是一个可以匹配除了换行符以外的任意字符的字符组。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 21,
    title: `Unicode 标准中的 BOM 是什么？有什么用？`,
    answers: [
      `BOM 全称“字节顺序标记”，是用来区分字节顺序的一个码点。`,
      `作用：用来区分字节顺序`,
      'Byte Order Mark',
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 22,
    title: '在正则表达式中，修饰符是什么？有哪几种修饰符？分别有什么意义？',
    answers: [
      '修饰符，全称“模式修饰符”是能改变正则表达式匹配模式的符号。',
      `常用的修饰符有 g、i、m`,
      {
        tag: 'pre',
        val:
          `
g
  表示开启，全局匹配模式
i
  表示开启，忽略大小写模式
m
  表示开启，多行文本模式（默认是单行文本模式）
        `,
      },
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 23,
    title: '在电子计算机中，字符是什么？',
    answers: [
      '字符是字母、数字、符号的统称。是数据结构中最小的数据存取单位。',
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 24,
    title: `Unicode 标准中的 BOM 的码点是什么？`,
    answers: [
      `U+FEFF`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 25,
    title: `如何区别 UTF-16 文件的字节序? `,
    answers: [
      'UTF-16 文件的开头，放置一个 BOM。',
      `如果一个文件开头的 16 个二进制的值转为十进制等于 65279（0xFEFF），则大端字节序；等于 65534（0xFFFE），则为小端字节序。`,
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 26,
    title: `XML 及其子集 HTML 使用的是哪种编码方案？在 XML及其子集中可以使用什么方式表示字符？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
编码方案：UTF-8
表示字符方式：&#xxx;
  十进制
    &#48;
  十六进制
    &#x30;
        `,
      },
    ],
    tags: ['计算机科学', '编码', '字符编码',],
    type: '基础知识',
  },
  {
    id: 27,
    title: `幂等（idempotent）是什么？`,
    answers: [
      `幂等是一个数学与计算机科学的概念。含义是函数在相同输入下多次运算结果相等。`,
    ],
    tags: ['计算机科学', '数学', '代数'],
    type: '基础知识',
  },
  {
    id: 28,
    title: `回文子串，是什么？`,
    answers: [
      `回文子串是一个对称的向左读和向右读结果一样的字符串。`,
    ],
    tags: ['计算机科学'],
    type: '基础知识',
  },
  {
    id: 29,
    title: `字符串，是什么？`,
    answers: [
      `字符串是一个有限字符序列。`,
    ],
    tags: ['计算机科学'],
    type: '基础知识',
  },
  {
    id: 30,
    title: `在计算机科学中，防抖（Debouncing），是什么？`,
    answers: [
      `防抖，是一种限制函数调用速率的技术。当满足一个周期时，则能触发一次函数。`,
      `重点在于重置周期。`,
      `[di'bausiŋ]`,
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 31,
    title: `时间戳（Timestamp）是什么？`,
    answers: [
      `时间戳是指格林尼治时间1970年01月01日00时00分00秒起至现在的总秒数。`,
    ],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 32,
    title: `GMT 是什么意思？`,
    answers: [
      `GMT 全称 格林尼治标准时间，表示格林尼治当地的时间。`,
      'Greenwich Mean Time',
    ],
    tags: ['测绘科学与技术'],
    type: '基础知识',
  },
  {
    id: 33,
    title: `格林尼治在那个城市？有什么意义？`,
    answers: [
      `城市：在英国伦敦。`,
      `意义：地球本初子午线的标界处，世界计算时间和经度的起点。`,
    ],
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
    title: `UTC 是什么？`,
    answers: [
      `UTC 全称 协调世界时间。`,
      'Coordinated Universal Time',
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
    title: `序列，是什么？`,
    answers: [
      `序列是一个按次序排好的行列。`,
    ],
    tags: ['数学', '计算机科学'],
    type: '基础知识',
  },
  {
    id: 39,
    title: `4 种常用的进制是哪些？`,
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
    title: `在源代码中，纯十进制，必须以非_1_数字开头；八进制，任何以_2_开头的数字（包括纯 0，严格模式下为 0o）；二进制，要求前缀_3_或_4_；十六进制，要求前缀_5_或 0X；`,
    answers: ['0', '0', '0b', '0B', '0x'],
    tags: ['数学', '计算机科学'],
    type: '基础知识',
  },
  {
    id: 41,
    title: `递归是什么？`,
    answers: [
      `递归是一种将原问题转化为较小的相似的问题来求解的技术。`,
    ],
    tags: ['计算机科学', '算法', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 42,
    title: `「递」的意思是将问题__。`,
    answers: ['拆解成子问题'],
    tags: ['计算机科学', '算法', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 43,
    title: `「归」的意思是__解决后，子问题一层一层的回归。`,
    answers: ['最小的子问题'],
    tags: ['计算机科学', '算法', '声明式编程', '函数式编程',],
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
        val: '<img style="width: 100%" src="https://oss.taichiyi.com/markdown/c7103bc4ded24320badbf88a9e4e43c6.png" />',
      },
    ],
    tags: ['计算机科学', '算法'],
    type: '基础知识',
  },
  {
    id: 45,
    title: `阶乘（factorial[fækˈtɔːriəl]）是什么？`,
    answers: [
      `一个正整数的阶乘是小于及等于该数的正整数的积。`,
    ],
    tags: ['计算机科学', '算法'],
    type: '基础知识',
  },
  {
    id: 46,
    title: `在数学中，积是什么？`,
    answers: [
      `积是乘法运算的结果。`,
    ],
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
    title: `在计算机科学中，OOP 是什么？`,
    answers: [
      `OOP 全称“面向对象的程序设计”，是一种把客观事物抽象为对象的编程思想。`,
      "Object Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]",
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 50,
    title: `在计算机科学中，POP 是什么？原则是什么？`,
    answers: [
      `POP 全称“面向过程的程序设计”，是一种自顶向下、逐步求精的编程思想。`,
      `原则：程序=(算法)+(数据结构)`,
      "Procedure[prəˈsiːdʒər] Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]",
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 51,
    title: `在计算机科学中，AOP 是什么？与面向对象编程的目标有什么区别？`,
    answers: [
      `AOP 全称“面向切面编程”是一种通过预编译方式和运行时动态代理方式实现在不修改源代码的情况下给程序动态添加功能的一种技术。`,
      {
        tag: 'pre',
        val:
          `
区别：
  面向对象编程的目标是：
    将需求功能划分为不同的相对独立的封装良好的类，依靠继承和多态来定义彼此的关系。
  面向切面编程的目标是：
    将横切关注点封装到切面中，已保持模块化。
    将相似的需求功能从多个类中分离出来，能够使多个类共享一个切面，一旦发生变化，不必修改多个类，只需要修改这个切面。

        `,
      },
      "Aspect[ˈæspekt] Oriented['ɔːrɪentɪd] Programming[ˈproʊɡræmɪŋ]",
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 52,
    title: `在计算机科学中，SP 是什么？`,
    answers: [
      `SP 全称“结构化的程序设计”也称为“面向过程的程序设计”。`,
      `Structured['strʌktʃəd] Programming[ˈproʊɡræmɪŋ]`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 53,
    title: `依赖注入，是什么？产生的背景是什么？`,
    answers: [
      `依赖注入，全称“依赖注入到容器”是一种将实例当变量传入到一个对象中去的技术。`,
      '背景：',
      `在面向对象编程时，在使用一个类时，往往需要实例化这个类，生成一个对象。`,
      `但是有的类的实例化的过程中需要使用其它类，如果其它类还依赖其它类，则会出现重复实例化的情况。`,
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 54,
    title: `在 JavaScript 中，const 和 let 有什么区别？`,
    answers: [
      `使用 const 关键字声明的变量，指针在程序运行期间不可改变。`,
    ],
    tags: ['计算机科学', '程序设计语言'],
    type: '基础知识',
  },
  {
    id: 55,
    title: `从储存的角度来说，字符串是什么？`,
    answers: [
      `是一个对象序列。`,
    ],
    tags: ['计算机科学'],
    type: '基础知识',
  },
  {
    id: 56,
    title: `ECMAScript 变量是__类型的，这意味着变量在运行时可以是__类型的数据。`,
    answers: ['松散(弱)', '任何'],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 57,
    title: '在计算机科学中，数制是什么？有哪些基本要素？',
    answers: [
      '数制，也称为“计数制”，是一种用固定符号和统一规则的表示数值的方法。',
      `基本要素：1.基数 2.位权`,
    ],
    tags: ['计算机科学', '数学',],
    type: '基础知识',
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
    title: `ECMAScript 几种数据数据类型？分为哪几类？分别是什么？`,
    answers: [
      `八种`,
      `两类：原始类型和引用类型。`,
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
    title: `严格模式下, 删除__会报 SyntaxError，正常模式是静默失败。`,
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
    title: `为什么要遵守设计模式的原则，或者说为什么要学习和使用设计模式？`,
    answers: [
      '为了提高软件的可维护性、可复用性、可拓展性和灵活性。',
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 68,
    title: `严格模式下, 禁止以零(0)开头的八进制语法，如果有则会抛出错误。ES6 中支持使用“__”前缀表示八进制数字。`,
    answers: [
      '0o',
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
    title: `严格模式下，错误的__运算将会抛出异常，而不是静默失败。`,
    answers: [
      '赋值',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 72,
    title: `静默失败（silently fail）是什么？`,
    answers: [
      '静默失败，是一种失败语句如同不存在一样的现象。',
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
    title: `C 语言有哪几种语句？`,
    answers: [
      '1. 标号语句',
      '2. 复合语句',
      '3. 表达式语句',
      '4. 选择语句',
      '5. 循环语句',
      '6. 跳转语句',
      '7. 声明语句',
      '8. try 块',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 75,
    title: `表达式和语句是什么关系？`,
    answers: [
      '语句的组成成分中包含表达式。',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 76,
    title: `标号语句有哪几种语句？`,
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
    title: `复合语句是什么？`,
    answers: [
      '复合语句是花括号环绕的语句序列。',
      '复合语句的括号“}”外不能加分号。',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 78,
    title: `冯诺依曼机，有哪些特征？`,
    answers: [
      '1.由“存储器+运算器+控制器+输入设备+输出设备”组成。',
      '2.数制采用的是二进制。',
      '3.按顺序执行。',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
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
    title: `选择语句的作用是什么？有几种语法？`,
    answers: [
      `根据表达式的值执行多条语句（控制流）中的一条。`,
      '1. “if ( 条件 ) 语句”',
      '2. “if ( 条件 ) 语句 else 语句”',
      '3. “switch ( 条件 ) 语句”',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 82,
    title: `循环语句的作用是什么？`,
    answers: [
      '重复执行某些语句。',
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
      '[JS 不支持]“goto 标识符;”',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 84,
    title: `声明语句包括变量声明和函数声明。有哪几种语法？`,
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
    title: `在命令式编程中，try 块提供当执行其他语句时捕获其所抛出的异常的能力。语法: __。`,
    answers: [
      '“try 复合语句 处理块序列”',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 86,
    title: `指针是什么？`,
    answers: [
      '指针是变量在内存空间的首个字节单元的内存地址。',
    ],
    tags: ['计算机科学', 'RAM'],
    type: '基础知识',
  },
  {
    id: 87,
    title: `前缀和（Prefix sum）是什么？`,
    answers: [
      `前缀和（Prefix sum）是数组中某项元素(包括此项元素)之前的所有元素的和。`,
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
    title: 'JavaScript 中，Symbol 是什么？有什么用？',
    answers: [
      `Symbol 是一种所有值都是唯一的原始数据类型。`,
      {
        tag: 'pre',
        val:
          `
作用：
1. 避免对象的属性冲突
2. 创建对象私有属性
3. 作为对象的身份标识
        `,
      },
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 90,
    title: `面向对象编程中，一个对象有哪几种属性？`,
    answers: [
      '状态',
      '行为',
      '标识',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 91,
    title: `类定义了事物的__和它可以做到的__。`,
    answers: [
      '属性',
      '行为',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 92,
    title: `面向对象编程中，封装是什么？`,
    answers: [
      `封装是一种将数据和方法结合成整体，将接口和实现分离的行为。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 93,
    title: `面向对象的“多态”，是什么？`,
    answers: [
      '多态性是同一操作作用于不同的对象的概念。',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 94,
    title: `面向对象的“继承”，是什么？`,
    answers: [
      `“继承”是子类可以具有父类的属性和方法或者重新定义、拓展、覆盖属性和方法的概念。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 95,
    title: `面向对象的“消息传递”，是什么？`,
    answers: [
      `“消息传递”是一个对象调用了另一个对象方法的概念。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
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
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 97,
    title: `横切关注点（Cross-Cutting Concerns）是什么？`,
    answers: [
      '横切关注点是一些横越多个模块的功能点。',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 98,
    title: 'JavaScript 中，如果获取对象中所有为 Symbol 的属性？',
    answers: [
      `通过 Object 函数的静态方法 getOwnPropertySymbols`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 99,
    title: '在 JavaScript 中，怎么判断一个对象是否默认支持迭代器模式？',
    answers: [
      `如果对象有 Symbol.AsyncIterator 或 Symbol.Iterator`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 100,
    title: `控制反转（IoC）是什么？有哪两种实现方式？`,
    answers: [
      '控制反转是一种面向对象编程中用来减少对象之间耦合度的设计模式。',
      {
        tag: 'pre',
        val:
          `
        常见的实现方式：
          依赖注入（Dependency Injection，简称 DI）
          依赖查找（Dependency Lookup）
        `
      },
      'Inversion of Control',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 101,
    title: `为什么每一种微处理器都有自己的汇编语言？`,
    answers: [
      '因为硬件设计和内部结构的不同，就需要不同的电平脉冲来控制。',
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
        `,
      }
    ],
    tags: ['计算机科学', '计算机网络',],
    type: '基础知识',
  },
  {
    id: 104,
    title: '(接上文)MediaType 是一个__类型的字符串，默认值为 text/plain;charset=__；(chartset可选)如果非__则为可选的base64标记；data为数据本身。',
    answers: [
      'MIME US-ASCII',
      '文本',
    ],
    tags: ['计算机科学', '计算机网络',],
    type: '基础知识',
  },
  {
    id: 105,
    title: '常用的 MediaType 有`text/plain;charset=UTF-8`；`text/html`；`__/jpeg`；`multipart/form-data`',
    answers: [
      'image',
    ],
    tags: ['计算机科学', '计算机网络',],
    type: '基础知识',
  },
  {
    id: 106,
    title: '计算机科学中，“集合”是什么？有哪些种类？',
    answers: [
      '集合是一组可变数量的数据项(也可能是0个)的组合。',
      '集合的种类包括列表，集，多重集，数和图。',
    ],
    tags: ['计算机科学', '数学', '数据结构',],
    type: '基础知识',
  },
  {
    id: 107,
    title: '在正则表达式中，元字符括号「(」和「)」有哪几种用途?',
    answers: [
      {
        tag: 'pre',
        val:
          `
1. 限制子表达式的范围（分组）。
2. 将若干字符组合成一个元素。
3. 反向引用。
        `,
      },
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 108,
    title: '在列表中，数据项的顺序是确定的吗？是否可以存在多个相同的数据项？',
    answers: [
      '是',
      '是',
    ],
    tags: ['计算机科学', '数学', '数据结构',],
    type: '基础知识',
  },
  {
    id: 109,
    title: '列表根据访问方式还可以分为__和__。',
    answers: [
      '队列',
      '栈',
    ],
    tags: ['计算机科学', '数学', '数据结构',],
    type: '基础知识',
  },
  {
    id: 110,
    title: '在数学中，“集”是什么？',
    answers: [
      '集是无序的不相同的元素集合。',
    ],
    tags: ['计算机科学', '数学', '数据结构',],
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
    title: '关联数组和数组的唯一区别是什么？',
    answers: [
      '关联数组的下标可以是任意字符串和数字。',
      '数组的下标只能是非负整数。',
      '',
      'JavaScript的对象就是一个关联数组。',
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 113,
    title: '关联数组也称为，__和__。',
    answers: [
      '查找表',
      '字典',
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 114,
    title: '在图论中, 图是什么?',
    answers: [
      '图是一个表示物件与物件之间的关系的图论中的术语.',
      '其中每个节点都是平等的',
    ],
    tags: ['计算机科学', '数学', '算法',],
    type: '基础知识',
  },
  {
    id: 115,
    title: '计算机中, 数组是什么?',
    answers: [
      '数组是一个存储元素的线性集合(collection).',
      `每个元素都有一个序号，这个序号从 0 开始，称为下标或索引，索引通常是数字，用来计算元素之间存储位置的偏移量。`,
      `线性的意思是元素在内存中是连续的。`,
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
    title: '迭代器（Iterator），是什么？',
    answers: [
      '迭代器是集合对象提供的可以顺序访问集合元素的一个对象。',
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 118,
    title: '在计算机科学中，栈是什么？',
    answers: [
      '栈是一种只能在栈顶添加和删除元素的列表。',
    ],
    tags: ['计算机科学', '算法',],
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
    title: '数码和数字有什么区别？例如：十进制有多少个数码？',
    answers: [
      `“数字”和“数码”对应的英文是“Digital”，这两个词是一个意思。`,
      `“数字”在大陆用的比较多，“数码”在台湾岛用的比较多。`,
      `十进制有十个数码，0、1、2、3、4、5、6、7、8、9`,
    ],
    tags: ['计算机科学', '数学',],
    type: '基础知识',
  },
  {
    id: 121,
    title: '在数学中，基数是什么？有例子',
    answers: [
      `基数，是集合论中表示任意集合大小的一个概念。`,
      `二进制的基数为 2；十进制的基数为 10。`,
    ],
    tags: ['计算机科学', '数学',],
    type: '基础知识',
  },
  {
    id: 122,
    title: '位权: 数制中某个位置上的__所表示数值的大小。1*位权，位权=基数^位置',
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
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 124,
    title: '设计模式，分为哪几种类型？',
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
    title: '创建型模式，有哪几种？',
    answers: [
      '1. 建造者（生成器）模式（Builder pattern）',
      '2. 单例模式（Singleton pattern）',
      '3. 原型模式（Prototype pattern）',
      '4. 工厂方法模式（Factory method pattern）',
      '5. 抽象工厂模式（Abstract factory pattern）',
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 126,
    title: '结构型模式，有哪几种？',
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
    title: '行为型模式，有哪几种？',
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
    title: '正则表达式，是什么？',
    answers: [
      `正则表达式，是一种描述字符串结构模式的形式化的表达方式。`,
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
    title: '完整的正则表达式由哪几部分构成？',
    answers: [
      '由特殊字符和普通文本字符构成。',
      '特殊字符也称为“元字符”，普通文本字符也称为“文本”。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 132,
    title: '正则表达式中，字符组是什么？元素和结构体有什么区别？',
    answers: [
      `字符组是一个一组字符中的元素。`,
      `子表达式也称为结构体`,
      '元素包括字符、子表达式',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 133,
    title: 'JavaScript 中，有哪几种生成 Symbol 值的方式？有什么区别？',
    answers: [
      {
        tag: 'pre',
        val:
          `
有两种
  1.直接调用 Symbol 函数。
  2.调用 Symbol 函数的静态方法 for。
区别
  直接调用 Symbol 函数，每次返回一个新的 Symbol 值；
  但是通过 Symbol 的 for 方法生成的 Symbol 值不一定是新的，可能是之前创建过的 Symbol 值。
        `,
      },
      `只能通过直接调用 Symbol 函数还生成 Symbol 值，没有字面量表示法。`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 134,
    title: '在正则表达式中，有几种文本模式？如何启用？',
    answers: [
      '有两种文本模式：单行文本模式和多行文本模式，通过添加修饰符 m 使用。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 135,
    title: '在正则表达式中，多行文本模式下，「$」是什么？',
    answers: [
      '多行文本模式下，「$」是一个匹配字符串内部的换行符的简单锚点。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 136,
    title: 'JavaScript 中，hoist-non-react-statics 是什么？',
    answers: [
      'hoist-non-react-statics 是一个将源对象中除了 React 静态关键词以外的全部属性复制到目标对象的程序包。',
    ],
    tags: ['计算机科学', 'JavaScript', 'React'],
    type: '专用领域知识',
  },
  {
    id: 137,
    title: '在正则表达式中，「^tcy$」的文字意义是什么？',
    answers: [
      '匹配的条件是，行开头(每一行都有一个开头)，然后是字母 t c y，然后是行末尾。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 138,
    title: '在正则表达式中，排除型字符组是什么？怎么表示？',
    answers: [
      '排除型字符组是一个非字符组内的元素。',
      '表示：通过在字符组的开头加入「^」来表示。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 139,
    title: '在正则表达式中，字符“-”在字符组的内部和外部，有什么区别？',
    answers: [
      `如果字符“-”出现在字符组的开头则表示普通字符，否则表示连字符（元字符）。`,
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 140,
    title: '摄影是什么？',
    answers: [
      '摄影是被摄体通过镜头在感光片上形成影像的过程。',
    ],
    tags: ['摄影',],
    type: '基础知识',
  },
  {
    id: 141,
    title: '在正则表达式中，多选结构是什么？多选分支是什么？怎么实现多选结构？',
    answers: [
      '多选结构是一种总表达式由多个子表达式组成的结构。',
      '子表达式有称为多选分支。',
      '通过使用元字符“|”来实现多选结构。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 142,
    title: 'JavaScript 中，Redux 是什么？',
    answers: [
      'Redux 是一个用来管理 JavaScript 应用的可预测的状态容器。',
    ],
    tags: ['计算机科学', 'JavaScript', 'Redux'],
    type: '专用领域知识',
  },
  {
    id: 143,
    title: '在正则表达式中，可选项元素是什么？怎么表示可选项元素？用区间量词怎么表示可选项元素？',
    answers: [
      '可选项元素是出现零次或者一次的元素。',
      '使用元字符“?”来表示。',
      '区间量词：{0,1}',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 144,
    title: '在正则表达式中，量词是什么？',
    answers: [
      '量词是限定所作用元素的匹配次数的元字符。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 145,
    title: '在正则表达式中，元字符“+”是什么？用区间量词该怎么表示？',
    answers: [
      '元字符“+”是一种匹配元素至少一次的量词。',
      '{1,}',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 146,
    title: '在正则表达式中，元字符“*”是什么？用区间量词该怎么表示？',
    answers: [
      '元字符“*”是一种匹配元素任意次的量词。',
      `{0,}`,
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 147,
    title: '在正则表达式中，“反向引用”是什么？由哪几部分组成？',
    answers: [
      '“反向引用”是一种匹配子表达式所匹配文本的正则表达式特性。',
      '由两部分组成：子表达式和元字符序列。',
      {
        tag: 'pre',
        val:
          `
例子：
"ooo111ooo222ooo123".match(/(\\d)\\1/)
  ["11", "1", index: 3, input: "ooo111ooo222ooo123", groups: undefined]
"ooo111ooo222ooo123".match(/(\\d)\\1/g)
  ["11", "22"]
"abcdebbcde".match(/([ab])\\1/)
  ["bb", "b", index: 5, input: "abcdebbcde", groups: undefined]
        `.replace(/\\/g, '&#92;'),
      },
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 148,
    title: '在正则表达式中，“环视结构”是什么？',
    answers: [
      '“环视结构”是一种不匹配字符，只匹配文本中特定位置的正则表达式特性。',
      '环视不会占用“字符”。。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 149,
    title: '在正则表达式中，环视结构分为哪几种类型？',
    answers: [
      '肯定顺序环视「(?=...)」',
      '否定顺序环视「(?!...)」',
      '肯定逆序环视「(?<=...)」',
      '否定逆序环视「(?<!...)」',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 150,
    title: '在正则表达式中，肯定顺序环视，是什么？有例子',
    answers: [
      '肯定顺序环视，是一个匹配自身左侧位置的表达式。',
      `例子：'Im a human'.replace(/(?=m)/,'\'') -> I'm a human`,
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 151,
    title: '在正则表达式中，子表达式的开头有哪几种？',
    answers: [
      '1.肯定顺序环视「(?=...)」',
      '2.否定顺序环视「(?!...)」',
      '3.肯定逆序环视「(?<=...)」',
      '4.否定逆序环视「(?<!...)」',
      '5.非捕获型「(?:...)」',
      '6.固化分组「(?>...)」',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 152,
    title: '在正则表达式中，非捕获型表达式，是什么？怎么表示？',
    answers: [
      `非捕获型表达式是一种只分组不捕获的表达式。`,
      '在元字符括号的开头依次添加问号和双引号表示。「(?:...)」',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 153,
    title: '在正则表达式中，正则引擎分为哪几大类？JavaScript 属于哪个大类？',
    answers: [
      `分为 DFA 和 NFA 两大类。`,
      'JavaScript 属于 NFA。',
      'DFA(Deterministic finite automaton) 确定型有穷自动机',
      'NFA(Non-deterministic finite automaton) 非确定型有穷自动机',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 154,
    title: '在正则表达式中，"The dragging belly indicates that your cat is too fat.".match(/fat|belll|belly|your/)，结果是什么？为什么？',
    answers: [
      `结果是“belly”`,
      {
        tag: 'pre',
        val:
          `
因为 JavaScript 是 NFA，是表达式主导的。
  子表达式依次从左到右匹配文本的第一个字符，
    如果某个表达式能匹配，则留下一个备用状态（面包屑），尝试继续匹配这个表达式，
      如果子表达式匹配成功，则返回结果。
      如果匹配失败，则会到之前的备用状态。
    如果这个开始字符所有子表达式都不能完全匹配，则到下一个文本字符。
  下一个文本字符。
        `,
      },
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 155,
    title: '在正则表达式中，标准的匹配量词（「*」、「+」、「?」和「{m,n}」）是匹配优先的吗？匹配优先是什么？',
    answers: [
      '是',
      '匹配优先是一种尽可能多的匹配字符的匹配方式。',
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
    title: '在正则表达式中，锚点可以分为哪几类？',
    answers: [
      '简单锚点',
      '复杂锚点',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 158,
    title: '在正则表达式中，简单锚点有哪几个？',
    answers: [
      '「^」',
      '「$」',
      '「\\b」'.replace(/\\/g, '&#92;'),
      '「\\B」'.replace(/\\/g, '&#92;'),
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
    title: '在正则表达式中，NFA 引擎和 DFA 引擎主要区别是什么？',
    answers: [
      'NFA 引擎是表达式主导的。',
      'DFA 引擎是文本主导的。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 161,
    title: '在正则表达式中，匹配优先量词和忽略优先量词有什么区别？',
    answers: [
      `本质区别：忽略优先量词不会保存备用状态。`,
      `忽略优先量词会把控制权交给表达式后面的元素。`,
      `"<div>abc</div><div>xyz</div>".match(/<div>.*?<\/div>/); // <div>abc</div>`.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
      `"<div>abc</div><div>xyz</div>".match(/<div>.*<\/div>/);  // <div>abc</div><div>xyz</div>`.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 162,
    title: '在正则表达式中，怎么表示“忽略优先量词”？有例子',
    answers: [
      '“忽略优先量词”通过在量词后面加一个“「?」问号”来表示。',
      `"<div>abc</div><div>xyz</div>".match(/<div>.*?<\/div>/); // <div>abc</div>`.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
      `"<div>abc</div><div>xyz</div>".match(/<div>.*<\/div>/);  // <div>abc</div><div>xyz</div>`.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 163,
    title: '在正则表达式中，量词有哪几种？',
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
    title: 'Redux 中，术语（4/10）Dispatching Function 是什么？',
    answers: [
      `Dispatching Function 是一个接受 action 或 async action 对象的函数。`,
      `[dɪˈspætʃɪŋ]`,
    ],
    tags: ['计算机科学', 'JavaScript', 'Redux'],
    type: '专用领域知识',
  },
  {
    id: 166,
    title: '子序列是什么？',
    answers: [
      '子序列（简称子列）是序列的一部分项按原有次序排列而得的序列。',
    ],
    tags: ['数学', '计算机科学',],
    type: '基础知识',
  },
  {
    id: 167,
    title: '子串，是什么？',
    answers: [
      '子串是串中任意个连续的字符组成的序列。',
    ],
    tags: ['数学', '计算机科学',],
    type: '基础知识',
  },
  {
    id: 168,
    title: 'React 类组件的生命周期分为哪几个阶段？每个阶段分别按顺序触发哪些函数？',
    answers: [
      '分为“挂载”“更新”“卸载”三个阶段',
      '“挂载”阶段：constructor -> getDerivedStateFromProps -> render -> componentDidMount',
      '“更新”阶段：getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapShotBeforeUpdate -> componentDidUpdate',
      '“更新”阶段：componentWillUnMount',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', '生命周期'],
    type: '专用领域知识',
  },
  {
    id: 169,
    title: '概念是什么？',
    answers: [
      '概念是人类在认识过程中，把所感觉到的事物的共同特点加以概括的思维结果。',
    ],
    tags: ['词语',],
    type: '基础知识',
  },
  {
    id: 170,
    title: '在 JavaScript 中，哪些原生语言结构会自动使用迭代器模式？',
    answers: [
      `for-of`,
      `Array destructuring(数组结构)`,
      `The spread operator(展开运算符)`,
      `Array.from()`,
      `Set construction(构建)`,
      `Map construction(构建)`,
      `Promise.all()`,
      `Promise.race()`,
      `yield* operator`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '基础知识',
  },
  {
    id: 171,
    title: `在计算机科学中，节流（throttling），是什么？`,
    answers: [
      `节流，是一种限制函数调用速率的技术。一个周期内，限制事件触发的次数。`,
      `重点在于加锁和解锁`,
      `['θrɒtlɪŋ]`,
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 172,
    title: '语句（statement）是什么？',
    answers: [
      '语句是程序的最小独立元素。一条语句相当于一条完整的计算机指令。',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '基础知识',
  },
  {
    id: 173,
    title: '若干是什么？',
    answers: [
      '若干是一个表示一个或多个的量词。',
    ],
    tags: ['词语',],
    type: '基础知识',
  },
  {
    id: 174,
    title: 'while 语句是什么？',
    answers: [
      'while 语句是一种循环语句。',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '基础知识',
  },
  {
    id: 175,
    title: '在计算机科学中，副作用（side effect）是什么？有例子',
    answers: [
      '副作用是跟函数外部环境发生的交互。',
      '例子：1. 抛出一个被外部捕获的异常；2. 访问 DOM；3. 修改文件；4. 访问外部数据。',
    ],
    tags: ['计算机科学', '编程思想'],
    type: '基础知识',
  },
  {
    id: 176,
    title: 'JavaScript 中，有哪几种执行上下文类型？',
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
      '进程',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 178,
    title: 'JavaScript 中，Redux 有几个 API？各自的作用是什么？',
    answers: [
      'Redux 提供了 5个 API。',
      {
        tag: 'pre',
        val:
          `
1. createStore
  是一个用于创建 Store 的函数。
  注意：一个应用应该只有一个 Store.
2. combineReducers
  是一个将多个 reducer 转换为单个 reducer 的辅助函数。
3. bindActionCreators
  是一个将 actions 绑定到指定 dispatch 的函数。
4. applyMiddleware
  是一个中间件函数。
5. compose
  是一个用非嵌套方式写嵌套函数的函数。
        `,
      }
    ],
    tags: ['计算机科学', 'JavaScript', 'Redux'],
    type: '专用领域知识',
  },
  {
    id: 179,
    title: 'JavaScript 中，解析器每次遇到新作用域时都会在当前执行上下文中创建__（例如，遇到if，for语句等）。有图',
    answers: [
      '词法环境',
      {
        tag: 'img',
        val: '<img style="width: 100%" src="https://oss.taichiyi.com/markdown/ov33jtml.png" alt="img">',
      },
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 180,
    title: '执行上下文栈的别称有哪些？',
    answers: [
      '调用栈（call stack）',
      '执行栈（execution stack）',
      '控制栈（control stack）',
      '运行时栈（run-time stack）',
      '机器栈（machine stack）',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 181,
    title: 'JavaScript 中，执行上下文有两个阶段：1) __阶段 和 2) __阶段。其中创建阶段是在函数的__时，执行阶段是在函数的__时。',
    answers: [
      '创建(Creation Phase)',
      '执行(Execution Phase)',
      '声明',
      '调用',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 182,
    title: 'JavaScript 中，“创建阶段”主要发生了哪两件事情？',
    answers: [
      '创建 词法(LexicalEnvironment)环境组件',
      '创建 变量(VariableEnvironment)环境组件',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 183,
    title: 'JavaScript 中，每个词法环境由哪三个部分组成？例子：',
    answers: [
      '环境记录 EnvironmentRecord(Environment Record)',
      '引用外部环境 outer(Reference outer Lexical Environment)',
      '绑定this ThisBinding(This binding)',
      {
        tag: 'pre',
        val:
          `
GlobalExecutionContext = {
  LexicalEnvironment: {
    Outer(outer environment reference): < null >,
    ThisBinding: < Global Object>
    EnvironmentRecord: {
      Type: "Object",
      a: < uninitialized >, // 读取未初始化(uninitialized)的变量，会报错
      b: < uninitialized >,
      multiply: < func >
    },
  },
  VariableEnvironment: {
    Outer: < null >,
    ThisBinding: < Global Object >
    EnvironmentRecord: {
      Type: "Object",
      c: undefined,
    },
  }
}

FunctionExecutionContext = {
  LexicalEnvironment: {
    Outer: < GlobalLexicalEnvironment >,
    ThisBinding: < Global Object or undefined >,
    EnvironmentRecord: {
      Type: "Declarative",
      Arguments: {0: 20, 1: 30, length: 2},
    },
  },
  VariableEnvironment: {
    Outer: < GlobalLexicalEnvironment >,
    ThisBinding: < Global Object or undefined >,
    EnvironmentRecord: {
      Type: "Declarative",
      g: undefined
    },
  }
}
        `
      }
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 184,
    title: 'JavaScript 中，词法环境中，环境记录是什么？',
    answers: [
      `环境记录是多个标识符映射到值的记录。`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 185,
    title: 'JavaScript 中，词法环境中，引用外部环境（outer environment reference）是什么？',
    answers: [
      '引用外部环境是引用外部的词法环境。',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 186,
    title: `“横切关注点”和“面向切面编程”有什么关系？`,
    answers: [
      '横切关注点可以被模块化为固定的类，这些类称为切面（aspect）。',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 187,
    title: '在 ES6 中，词法环境组件和变量环境组件有什么区别？',
    answers: [
      `词法环境组件储存“函数定义”和“变量（let和const）”。`,
      `变量环境组件仅用于存储变量 var。`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 188,
    title: 'JavaScript 中，词法环境的哪几个部分在上下文创建阶段就已经确定？',
    answers: [
      '1. outer（引用外部环境）',
      '2. EnvironmentRecord（环境记录）',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 189,
    title: '在计算机科学中，声明是什么？',
    answers: [
      '声明是一种将变量标识符信息告诉编译器但不分配内存空间的行为。',
      '例如：在 JavaScript 中，声明一个变量：var a;',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 190,
    title: '在计算机科学中，定义是什么？',
    answers: [
      '定义是一种将变量标识符信息告诉编译器并分配内存空间的行为。',
      '例如：在 C 语言中，一般声明就包含了定义，int a;(确定了变量和变量的类型，默认值一般为 0)，但是在 JavaScript 中，var a; 就只是声明。',
    ],
    tags: ['计算机科学', '程序设计语言', 'C'],
    type: '通用领域知识',
  },
  {
    id: 191,
    title: '计算机科学中，初始化是什么？',
    answers: [
      '初始化是在变量开辟内存空间时赋默认值的行为。',
      '不指定的话开辟时赋该类型的默认值。初始化是编译器的行为。在 JavaScript 中，变量的初始化值为 undefined。',
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
    title: '命令式编程（Imperative[ɪmˈperətɪv] Programming）是什么？',
    answers: [
      `命令式编程，是一种注重如何执行和程序流程（状态）的编程范式。`,
      `例子：C 语言、汇编语言。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 198,
    title: '声明式编程（Declarative[dɪˈklærətɪv] Programming）是什么？',
    answers: [
      `声明式编程，是一种注重定义程序逻辑和结果的编程范式。`,
      `例子：数据库语言 SQL，正则表达式，标记语言 HTML`,
    ],
    tags: ['计算机科学', '编程思想', '声明式编程',],
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
        tag: 'img',
        val: '<img style="width: 100%" src="https://oss.taichiyi.com/markdown/kghpr87l.png" />'
      },
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 200,
    title: `编码（Encoding）是什么？`,
    answers: [
      `编码是将文字、数字或其它对象编成数码，或将信息、数据转换成规定的电脉冲信号的过程。`
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 201,
    title: `数字系统中常用的编码有哪几类？`,
    answers: [
      '二进制编码',
      '十进制编码',
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 202,
    title: `解码（Decoding）是什么？`,
    answers: [
      '解码是将数码还原成它所代表的内容或将电脉冲信号、光信号、无线电波等转换成它所代表的信息、数据等的过程。',
    ],
    tags: ['计算机科学', '编码'],
    type: '基础知识',
  },
  {
    id: 203,
    title: `纯函数，是什么？`,
    answers: [
      `纯函数是相同输入总是等于相同输出的没有副作用的引用透明的函数。`,
    ],
    tags: ['计算机科学', '编程思想', '声明式编程',],
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
    title: `应用程序软件(Aplication software)和系统软件(System software)有什么区别？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
相同
  “应用程序软件”和“系统软件”都是一个程序或一组程序。
不同
  “应用程序软件”面向最终用户，依赖于系统软件来执行，无法自行运行。
  “系统软件”面向开发者。
        `,
      },
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
    title: `目标程序是什么？`,
    answers: [
      `目标程序是只包含源程序被编译器翻译成的机器语言的程序。`,
    ],
    tags: ['计算机科学', '编译原理'],
    type: '基础知识',
  },
  {
    id: 209,
    title: `定义是什么意思？`,
    answers: [
      '定义是，对一种事物的本质特征或一个概念的内涵和外延的确切而简要的说明。',
    ],
    tags: ['数学',],
    type: '基础知识',
  },
  {
    id: 210,
    title: `目标程序和可执行文件有什么区别？`,
    answers: [
      '目标程序缺少“启动代码”和“库函数”',
    ],
    tags: ['计算机科学', '编译原理'],
    type: '基础知识',
  },
  {
    id: 211,
    title: `编译是什么？`,
    answers: [
      `编译（全称：编译程序）是把一个源程序翻译成目标程序的工作过程。`,
    ],
    tags: ['计算机科学', '编译原理'],
    type: '基础知识',
  },
  {
    id: 212,
    title: `源代码（也称源程序）是什么？`,
    answers: [
      '源代码（也称源程序）是按照一定的程序设计语言规范书写的未编译的文本文件，是一系列人类可读的计算机语言指令',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 213,
    title: 'Redux 中，术语（1/10）State 是什么？',
    answers: [
      'State 是',
      'State 中文称为状态，可以是任意类型的值，但通常是一个深层嵌套的对象，所以也称为状态树。',
      '按照约定，应该尽量保持 State 的可序列化。',
    ],
    tags: ['计算机科学', 'JavaScript', 'Redux'],
    type: '专用领域知识',
  },
  {
    id: 214,
    title: `代码复用是什么？`,
    answers: [
      `代码复用（软件复用）是利用已有的代码或编写新的代码，来构造软件的方式。`,
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 215,
    title: `软件复用的抽象级别有哪些？`,
    answers: [
      `源代码->继承/组合->程序库->框架->设计模式->分析`,
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 216,
    title: `在面向对象的程序设计（OOP）中，类与类之间的耦合度有哪些？从弱到强说一下`,
    answers: [
      '1.依赖关系',
      '2.关联关系',
      '3.聚合关系',
      '4.组合关系',
      '5.泛化关系和实现关系',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 217,
    title: `在面向对象的程序设计（OOP）中，依赖（Dependency）关系是什么？`,
    answers: [
      `依赖（Dependency）关系是一种对象之间耦合度最弱的临时性的关系。`,
      `在代码中，某个类的方法通过局部变量、方法的参数或者对静态方法的调用来访问另一个类（被依赖类）中的某些方法来完成一些职责。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 218,
    title: `在计算机科学中，序列化是什么？`,
    answers: [
      `序列化是将对象转化为可以存储或传输的形式的过程。`,
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 219,
    title: `在面向对象的程序设计（OOP）中，关联关系是什么？分为哪几种？`,
    answers: [
      `关联关系是对象之间的一种引用关系。`,
      '1.一般关联关系',
      '2.聚合关系',
      '3.组合关系',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 220,
    title: `在面向对象的程序设计（OOP）中，聚合（Aggregation[ˌæɡrɪˈɡeɪʃn]）关系是什么？`,
    answers: [
      `聚合关系是一种整体包含部分的部分可以独立存在的关系。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 221,
    title: `在面向对象的程序设计（OOP）中，组合（Composition[ˌkɑːmpəˈzɪʃn]）关系是什么？`,
    answers: [
      `组合关系是一种整体由部分构成的部分不能独立于整体的关系。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 222,
    title: `在面向对象的程序设计（OOP）中，泛化（Generalization[ˌdʒenrələˈzeɪʃn]）关系是什么？`,
    answers: [
      `泛化关系是对象之间耦合度最大的表示一般与特殊，父类与子类的关系。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 223,
    title: `在面向对象的程序设计（OOP）中，实现（Realization[ˌriːələˈzeɪʃn]）关系是什么？`,
    answers: [
      `实现关系是接口与实现类之间的关系。`,
      '在这种关系中，类实现了接口，类中的操作实现了接口中所声明的所有的抽象操作。',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 224,
    title: `在面向对象中，接口（Interface）是什么？`,
    answers: [
      `接口是一种只包含属性和方法的定义而不包含实现的约束形式。`,
      '实例',
      '操作',
      '属性',
      '外',
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 225,
    title: '介绍一下“冒泡排序”、“选择排序”、“插入排序”、“希尔排序”、“快速排序”的时间复杂度、空间复杂度、排序方式和稳定性。',
    answers: [
      {
        tag: 'img',
        val: '<img style="width: 100%" src="https://oss.taichiyi.com/markdown/kghpr87l.png" />'
      },
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 226,
    title: '冒泡排序算法的思想（原理）是什么？哪个排序算法是它的改进算法？',
    answers: [
      '1. 比较两个相邻的元素，如果第一个大于第二个则调换这两个元素位置；',
      '2. 从右至左逐渐有序',
      '快速排序',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 227,
    title: '冒泡排序算法的应用场景（优点）是什么？',
    answers: [
      '序列元素越接近正序速度越快。',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 228,
    title: '排序算法的稳定性定义是什么？',
    answers: [
      '待排序的序列中，存在多个相同的值，若经过排序，这些值的相对次序保持不变，则算法称为“稳定”，反之。',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 229,
    title: 'Redux 中，术语（2/10）Action 是什么？',
    answers: [
      'Action 是一个表示改变状态的意图的对象。',
      'Action 是将数据存储到 Store 中的唯一方式。',
      '按照约定，Action 对象必须包含一个 type 属性，表示改变状态的意图。',
    ],
    tags: ['计算机科学', 'JavaScript', 'Redux'],
    type: '专用领域知识',
  },
  {
    id: 230,
    title: '在词语中，术语是什么？',
    answers: [
      '术语是特定学科领域用来表示概念的词语。',
    ],
    tags: ['词语',],
    type: '基础知识',
  },
  {
    id: 231,
    title: '插入排序算法的应用场景（优点）是什么？',
    answers: [
      '序列越接近正序速度越快。',
      '序列的长度 n （<=50）较小时，较快。',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 232,
    title: '希尔排序算法的应用场景（优点）是什么？',
    answers: [
      '序列重复率越高，速度越快。',
      '序列的长度 n 较大时，较快。',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 233,
    title: '快速排序算法的应用场景（优点）是什么？',
    answers: [
      '序列重复率越低，速度越快。',
      '序列的长度 n 较大时，速度较快。',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 234,
    title: '插入排序算法的思想（原理）是什么？哪个排序算法是它的改进算法？',
    answers: [
      '1. 将排序序列第一个元素看做一个有序序列，把其他元素当成是未排序序列。',
      '2. 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。',
      '希尔排序',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 235,
    title: '选择排序算法的思想（原理）是什么？',
    answers: [
      '1. 每一个位置选择未排序序列中最小的元素',
      '2. 从左至右逐渐有序',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 236,
    title: '希尔排序算法的思想（原理）是什么？',
    answers: [
      '1. 在插入排序的基础上，外面套一个动态间隔循环。',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 237,
    title: '快速排序算法的思想（原理）是什么？',
    answers: [
      {
        tag: 'pre',
        val:
          `
快速排序思想：
  1. 快速排序算法采用了分治策略，怎么分？
  2. 把序列当做一个分区(partition[pɑːrˈtɪʃn])，然后根据基准（pivot[ˈpɪvət]）排序，以基准下标为中心把分区一分为二；
  3. 然后递归此步骤，直至把每个分区分到只有两个元素。
基准下标怎么找？分 3 步。
  1. 选择分区的任意一个元素当做基准（为了简化代码的书写，一般选择分区两端的元素当做基准）。
  2. 小于基准的放左边，大于等于放右边。
  3. 基准所在的下标将分区一分为二。
        `,
      }
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 238,
    title: '排序算法可以分类为哪些？',
    answers: [
      {
        tag: 'img',
        val: '<img style="width: 100%" src="https://oss.taichiyi.com/markdown/kgnfhya9.png" />',
      }
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 239,
    title: '写一下，“冒泡排序”、“选择排序”、“插入排序”、“希尔排序”、“快速排序”的伪代码？脑里写也行',
    answers: [
      '参看 “排序算法.md”',
    ],
    tags: ['计算机科学', '算法', '排序算法',],
    type: '基础知识',
  },
  {
    id: 240,
    title: 'React Router[ˈraʊtər]（React 路由）是什么？',
    answers: [
      'React Router 是一个基于 React 的声明式的路由库。',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 241,
    title: 'React Router 和 客户端(浏览器|普通)路由有什么区别？',
    answers: [
      {
        tag: 'pre',
        val:
          `
映射的区别
  客户端路由映射的是 html 文件
  React Router 映射的是 React 组件
加载的区别
  客户端路由变动需要重新加载页面
  React Router 路由的变动不会重新加载页面
        `,
      },
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 242,
    title: 'React Router DOM 有几种路由器？说说优缺点',
    answers: [
      {
        tag: 'pre',
        val:
          `
React Router DOM 提供两个路由器：
  BroswerRouter（基于 History API）
  HashRouter（基于 URL Hash）
History API：
  优点
    1. 对服务器端友好，例如：SSR 和 SEO。
    2. URL 更直观，更常见
  缺点
    1. 需要服务器端的支持
    2. 不支持 IE9 及其以下浏览器
URL Hash：
  优点
    1. 浏览器兼容性好
    2. 不需要服务器端的支持。
  缺点
    1. 对服务端不友好（服务器无法获取 hash 的内容）
    2. 需要自己去实现页面锚点导航
          `,
      },
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 243,
    title: 'React Router 提供了哪几种类型的 <Router> 组件？',
    answers: [
      `<BrowserRouter>`.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
      `<HashRouter>`.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
      `<MemoryRouter>`.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
      `<StaticRouter>`.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
      '以上组件将创建 Browser，Hash，Memory 和 StaticRouter 的 history 实例。',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 244,
    title: 'React Router 中，有哪些方式可以访问 history 对象？',
    answers: [
      {
        tag: 'pre',
        val:
          `
- 首先哪些对象存了 history 对象的引用？
  1. React 上下文：RouterContext
  2. React 上下文：HistoryContext
- 答
  1. 要访问 RouterContent 中的 history 对象可以通过高阶组件 withRouter。
  2. 要访问 HistoryContext 可以通过调用 React Router 的 hook 方法 useHistory
        `,
      },
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 245,
    title: `执行上下文，是什么？`,
    answers: [
      `执行上下文，是包含代码执行时所需信息的环境。`,
      `其中包括 this 引用，以及所有变量、对象和函数定义。`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 246,
    title: `光圈是什么？怎么表示光圈的大小？光圈大小、进光量和景深是什么相互关系？`,
    answers: [
      '光圈是一个控制进光量和景深的的装置。',
      '光圈的大小：“F/数值”',
      '光圈越大，进光量越多，景深越浅。',
      '注：光圈F值=镜头的焦距/镜头光圈的直径',
    ],
    tags: ['摄影',],
    type: '基础知识',
  },
  {
    id: 247,
    title: 'React Router 的 <Link> 标签和 <a> 标签有什么区别？',
    answers: [
      {
        tag: 'pre',
        val:
          `
Link 组件渲染到 DOM 中也是 a 标签，他们的区别主要提现在点击后的行为上。
  a 标签：
    - 会触发默认行为，会重新加载链接指定的页面。
  Link 组件：
    - Link 取消了 a 标签的默认行为。
    - 调用 History API 修改 URL。
    - setState 更新 location 对象，进而触发 React 渲染。
          `,
      },
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 248,
    title: '高阶组件（HOC，Higher-Order Components）是什么？有什么用？用了什么设计模式？',
    answers: [
      'HOC 是一个参数为组件，返回值为新组件的纯函数。',
      '用作：组件逻辑复用',
      '用了：装饰模式',
    ],
    tags: ['计算机科学', 'JavaScript', 'React',],
    type: '专用领域知识',
  },
  {
    id: 249,
    title: 'Redux 中，术语（3/10）Reducer 是什么？为什么要做成纯函数？',
    answers: [
      `Reducer 是一个接受累加值和新值并返回新累加值的纯函数。`,
      `Reducer 和 Array.prototype.reduce 是一个概念。`,
      `纯函数的原因：为了实现“热更新”和 time travel。`,
      `[rɪ'djuːsə]`,
    ],
    tags: ['计算机科学', 'JavaScript', 'Redux'],
    type: '专用领域知识',
  },
  {
    id: 250,
    title: '__是 React 中代码复用的基本单元。',
    answers: [
      '组件',
    ],
    tags: ['计算机科学', 'JavaScript', 'React',],
    type: '专用领域知识',
  },
  {
    id: 251,
    title: `设计模式是什么？`,
    answers: [
      '设计模式是软件设计中常见问题的典型解决方案。',
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 252,
    title: `设计模式有哪几个原则？分别是什么？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
1. 开闭原则，   是一种在不修改二进制(源)代码的前提下拓展模块功能的原则。
2. 里式替换原则，是一种子类可以拓展父类功能但不改变父类原有功能的原则。
3. 依赖倒置原则，是一种面向接口编程，而不是面向实现编程的原则。
4. 单一职责原则，是一种通过控制类粒度大小来提高内聚性降低耦合性的原则。
5. 接口隔离原则，是一种通过接口粒度大小来提高内聚性降低耦合性的原则。
6. 迪米特法则， 是一种两个对象无须直接通信，则不发生直接相互调用，而通过第三方转发该调用的原则。
7. 组合复用原则，是软件复用尽量使用组合或者聚合等关联关系来实现，其次使用继承关系来实现的原则。
          `,
      },
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 253,
    title: `内聚性是什么？`,
    answers: [
      '内聚性是指将机能相关的程序组合到一个模块的程度。与耦合性是一个相对的概念。',
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 254,
    title: `计算机软件的健壮性（鲁棒性）是什么？`,
    answers: [
      '健壮性是指系统在非预期参数输入的情况下，维持系统稳定的特性。',
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 255,
    title: `介绍一下设计模式的几大类型？根据什么来分的类？`,
    answers: [
      '创建型模式：提供创建对象的机制。',
      '结构型模式：描述如何将对象和类组装成更大的结构。',
      '行为型模式：负责对象间的高效沟通和职责委派。',
      '根据设计模式的意图或目的来分的类。',
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 256,
    title: `组合模式是什么？应用场景？优缺点？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
定义：
  组合模式，是一种将对象组合成树状层次结构的拥有一致访问性的设计模式。
优点：
  1. 使得客户端代码可以无须关心自己处理的是单个对象还是组合对象，这简化了客户端代码；
  2. 加入新对象时，无需修改源代码。遵守“开闭原则”。
缺点：
  1. 对于功能差异较大的类，提供公共接口会有困难。
应用场景：
  1. 需要实现树状对象结构时。
  2. 希望客户端代码以相同方式处理单个对象和组合对象时。
          `,
      }
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 257,
    title: `说说装饰模式的定义、应用场景和优缺点。`,
    answers: [
      {
        tag: 'pre',
        val:
          `
定义：
  装饰模式是一种在不改变对象的情况下, 动态地给对象添加职责（功能）的设计模式.

实现方式:
  "装饰对象", 中定义了一些可动态添加到"组件对象"的功能.
  "组件对象"会作为"装饰对象"的参数传入到"装饰对象".

优点：
  1. 在不改变原有对象的情况下，动态的给一个对象扩展功能。
  2. 可以用多个装饰封装对象来组合几种行为。
  3. 遵守开闭原则，单一职责原则。
缺点：
  1. 装饰模式会增加许多子类，过度使用会增加程序得复杂性。
应用场景：
  1. 当需要在不改变对象的情况下，动态地给该对象增加一些职责（功能）。
  2. 当使用继承的方式来扩展对象难以实现或者根本不可行时。
          `,
      }
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 258,
    title: `“聚合或组合”与“继承”有什么区别?`,
    answers: [
      '两者工作方式几乎一样，但是“继承”是静态的，“聚合或组合”动态的（运行时可更改）。',
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 259,
    title: `装饰为被封装对象添加了额外的__，组合仅对其子节点的结果进行了__。`,
    answers: [
      '职责',
      '“求和”',
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 260,
    title: `观察者模式是什么？应用场景？优缺点？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
定义：
  观察者模式是一种当被“观察”对象发生状态变化时，所有“观察者”都会得到通知的设计模式。。
优点：
  1. 目标与观察者的耦合性较低。
  2. 遵守“开闭原则”。
缺点：
  1. 目标与观察者可能会出现循环引用。
  2. 当观察者较多时，会降低通知的效率。
应用场景：
  1. 当对象间存在一对多关系，一个对象的状态发生改变会影响其他对象时。
          `,
      }
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 261,
    title: `轮询是什么？`,
    answers: [
      '轮询是一种定时向信息源发出询问的获取信息的方法。',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 262,
    title: `什么时候用轮询？什么时候用观察者模式？`,
    answers: [
      '只有信息源支出观察者模式模式，就用观察者模式。',
      '观察者模式效率高。',
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 263,
    title: `如何为 React Router 添加 Google Analytics?`,
    answers: [
      '通过 history 对象的 listen 方法添加一个观察者就可以了',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 264,
    title: `React Router 和 history 库是什么关系？`,
    answers: [
      '简介：React Router 是 history 库的 React 实现。',
      '详细：React Router 使用了 Ioc 模式，把 history 库的实例，当做参数传给 React 元素。',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 265,
    title: `React Router 怎样在路由变化时重新渲染一个组件？`,
    answers: [
      '当调用 history 对象的 push、replace 或 触发 PopState 和 HashChange 事件时，会向观察者发出通知。',
      '然后调动 Router 类组件的 setState 方法，更新 location 状态，触发 React 的重新渲染。',
      '注：直接调用 history API 的 pushState 方法，不会触发 history 对象的变化。',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 266,
    title: `React 如何判断组件是否需要渲染？`,
    answers: [
      {
        tag: 'img',
        val: '<img style="width: 100%" src="https://oss.taichiyi.com/markdown/kgt7va9x.jpg" />',
      },
    ],
    tags: ['计算机科学', 'JavaScript', 'React',],
    type: '专用领域知识',
  },
  {
    id: 267,
    title: `React 是怎么浅比较两个对象的？`,
    answers: [
      '1. 首先使用 Object.is(objA, objB) 如果返回 true，则返回 true。',
      '2. 如果其中一个值不等于 object 类型，则返回 false',
      '3. 如果其中一个值等于 null，则返回 false',
      '4. 如果两个对象的属性的个数不相等，则返回 false',
      '5. 如果两个对象的属性的个数不相等，则返回 false',
      '6. 循环对象的属性用 Object.is 比较两个对象的属性值，有为 false，则返回 false。',
      '7. 返回 true。',
    ],
    tags: ['计算机科学', 'JavaScript', 'React',],
    type: '专用领域知识',
  },
  {
    id: 268,
    title: `JavaScript 中，有哪几种相等算法？`,
    answers: [
      '相等',
      '全等',
      '同值相等',
      '零值相等',
    ],
    tags: ['计算机科学', 'JavaScript',],
    type: '通用领域知识',
  },
  {
    id: 269,
    title: `React Router 怎么获取 URL 的参数？`,
    answers: [
      '通过 history 对象的 location 属性获取。',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 270,
    title: `history 库的 push 和 replace 有什么区别？`,
    answers: [
      'push 是往 history 栈顶添加一个新记录',
      'replace 是把 history 栈顶的记录换成一个新的记录',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 271,
    title: `如何使用在 React Router 中以编程的方式进行导航？`,
    answers: [
      '通过 history 对象的 push、replace 和 go 等方法。',
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 272,
    title: `在 JavaScript 中，相等和全等有什么区别？`,
    answers: [
      '相等会自动转换值的类型，全等不会。',
    ],
    tags: ['计算机科学', 'JavaScript',],
    type: '通用领域知识',
  },
  {
    id: 273,
    title: `在 JavaScript 中，全等和同值相等有什么区别？那个方法实现了同值相等算法？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
NaN vs NaN
  全等
    false
  同值
    true
+0 vs -0
  全等
    true
  同值
    false
        `,
      },
      `同值相等算法，在当值为0时，会判断符号位。`,
      '同值相等算法的实现：Object.is',
    ],
    tags: ['计算机科学', 'JavaScript',],
    type: '通用领域知识',
  },
  {
    id: 274,
    title: `零值相等和同值相等有什么区别？`,
    answers: [
      `在零值相等算法中，正零和负零相等。`,
      {
        tag: 'pre',
        val:
          `
+0 vs -0
  同值
    false
  零值
    true
        `,
      },
    ],
    tags: ['计算机科学', 'JavaScript',],
    type: '通用领域知识',
  },
  {
    id: 275,
    title: `在 JavaScript 中，什么的比较是基于零值相等算法？`,
    answers: [
      'Map 和 Set 的键',
    ],
    tags: ['计算机科学', 'JavaScript',],
    type: '通用领域知识',
  },
  {
    id: 276,
    title: `React Router 是怎么通过 Redirect 函数组件实现重定向的？`,
    answers: [
      {
        tag: 'pre',
        val:
          `
首先明确 Redirect 组件是否为 Switch 组件的子组件？
  是：如果被 Switch 组件匹配成功，默认将调用 history 对象的 replace 方法，把 history 栈顶的记录换成一个新的记录。
  否：直接调用 history 对象的 replace 方法。
`,
      },
    ],
    tags: ['计算机科学', 'JavaScript', 'React', 'React Router',],
    type: '专用领域知识',
  },
  {
    id: 277,
    title: `函数柯里化是什么？`,
    answers: [
      '在数学和计算机科学中，柯里化是一种将接受多个参数的函数转换成一系列使用一个参数的函数的技术。',
    ],
    tags: ['计算机科学', '柯里化',],
    type: '基础知识',
  },
  {
    id: 278,
    title: {
      tag: 'pre',
      val:
        `
问题：下文中的柯里化函数“currying”应该怎么实现？

function add(a, b) {
  return a + b;
}
add(1, 2) // 3

const addCurry = currying(add);
addCurry(1)(2) // 3
      `,
    },
    answers: [
      {
        tag: 'pre',
        val:
          `
// 知识点：闭包、作用域
function curry(func){
  let args=[]
  return function f(){
    args=[...args,...arguments]
    if(args.length<func.length){
      return f
    }else{
      const argsFunc=args
      args=[]
      return func.apply(null,argsFunc)
    }
  }
}
        `.replace(/</g, '&#60;').replace(/>/g, '&#62;'),
      },
    ],
    tags: ['计算机科学', '柯里化',],
    type: '基础知识',
  },
  {
    id: 279,
    title: `函数式编程有哪些特性（术语）？`,
    answers: [
      '- 不可变性（Immutability、immutable）：变量像数学中的一样，是抽象符号而非内存地址（变量不可变）',
      '- 纯函数（Pure function）：',
      '- 引用透明（Referential transparency）',
      '- 高阶函数（Higher-order function）',
      '- 柯里化（Currying）',
      '- 闭包（Closure）',
      '- 模式匹配（Pattern Match）',
      '- 没有赋值运算、循环语句',
      '- 函数组合（compose）',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 280,
    title: `什么是“思想”？`,
    answers: [
      '思想是“客观存在反映在人的意识中经过思维活动而产生的结果”。',
    ],
    tags: [],
    type: '基础知识',
  },
  {
    id: 281,
    title: `编程思想（编程范式）是什么？`,
    answers: [
      '是和计算机沟通的方式。',
      '也可以理解为编程风格。',
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 282,
    title: '函数式编程有哪些优缺点（应用场景）？',
    answers: [
      {
        tag: 'pre',
        val:
          `
优点：
  - 没有副作用（side-effect）
  - 引用透明（Referential transparency）：不共享状态，所以不会造成竞争（竞态）条件（Race condition），不需要锁来保护状态，有更好的并行计算，可以更好的利用多核处理器，不是特别关注执行步骤，所以可以“惰性求值”。
  - 可维护性好：代码简洁清晰，容易单元测试和调试。
  - 抽象层次高，颗粒度小，复用性高
缺点：
  - 效率较低
          `
      },
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 283,
    title: '命令式编程的优缺点有哪些？',
    answers: [
      {
        tag: 'pre',
        val:
          `
优点：
  - 效率较高
  // - 擅长基于业务逻辑的应用
缺点：
  - 抽象层次底，颗粒度大，复用性底。
  - 副作用过多。
  - 面向对象语言的问题是，它们永远都要随身携带那些隐式的环境(方法和过程都深深地根植于它们所在的环境中，通过状态、依赖和有效作用（available effects）达成。)
        `
      },
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 284,
    title: '命令式编程的适用场景是什么？',
    answers: [
      `- 处理可变状态`,
      `- 处理 IO`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 285,
    title: '函数柯里化的优点有哪些？',
    answers: [
      '- 提升函数的复用性',
      '- 函数式编程',
    ],
    tags: ['计算机科学', '柯里化', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 286,
    title: '在计算机科学中，引用透明的定义是什么？',
    answers: [
      '输出值只依赖于输入值，则称为引用透明。',
      '引用透明又称为等式正确性。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程',],
    type: '基础知识',
  },
  {
    id: 287,
    title: '纯函数的优点有哪些？',
    answers: [
      '- 可缓存性（Cacheable）',
      '- 可移植性（Portable）',
      '- 可测试性（Testable）',
      '- 引用透明性（referential transparency）',
      '- 不会造成竞争（竞态）条件（Race condition）',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程',],
    type: '基础知识',
  },
  {
    id: 288,
    title: 'JavaScript 中，如果只有__个参数，则箭头函数不需要括号。',
    answers: [
      '一',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 289,
    title: 'JavaScript 中，如果箭头函数不使用花括号的话，则函数体只能使用__个表达式，__将隐式返回。',
    answers: [
      '一',
      '表达式的值',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 290,
    title: '在 JavaScript 中，prototype 和 __proto__ 有什么区别？',
    answers: [
      `每个 Object 构造函数的实例默认都有 __proto__ 属性。`,
      `除了箭头函数实例以外，每个 Function 构造函数的实例默认都有 prototype 属性`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 291,
    title: '在 JavaScript 中，迭代协议是什么？和迭代器模式有什么区别?',
    answers: [
      {
        tag: 'pre',
        val:
          `
迭代协议, 分为两个协议:
  可迭代协议
  迭代器协议
        `
      },
      '没有本质的区别',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 292,
    title: '在 JavaScript 中，迭代器协议是什么？',
    answers: [
      '迭代器协议是一个定义了对象产生一系列值的方式的协议.',
      {
        tag: 'pre',
        val:
          `
具体还说, 定义了对象必须有一个 next 方法,
  该方法总是返回一个叫做 IteratorResult 的对象,
    IteratorResult 对象必须有一个 boolean 类型的 done 属性,
    可能有任意类型的 value 属性, 当 done 为 true 时可以省略.
        `
      },
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 293,
    title: 'JavaScript 中，箭头函数执行上下文的 __ 可能是个特殊值，例如：null 和 undefined。',
    answers: [
      'ThisBinding',
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 294,
    title: 'JavaScript 中，箭头函数和普通函数的区别有哪些？',
    answers: [
      {
        tag: 'pre',
        val:
          `
箭头函数
  对象
    没有
      原型(prototype)属性
  上下文
    没有
      关键字
        this
    不能使用
        super
        new.target
        arguments
        `,
      },
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 295,
    title: '__（也叫匿名函数），在 JavaScript 中被称为__，通常传递给高阶函数的参数。',
    answers: [
      'lambda 表达式',
      '箭头函数',
    ],
    tags: ['计算机科学', '编程思想', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 296,
    title: '为什么要学习函数式编程？',
    answers: [
      '虽然面向对象的程序设计是目前的主流，但是学习函数式编程能够拓宽视野，因为该技术既能够单独使用，也可以与其他编程范式并用。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 297,
    title: '函数式编程的目标是什么？',
    answers: [
      '使用函数来抽象作用的数据之上的控制流与操作，从而在系统中消除副作用并减少对状态的改变。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 298,
    title: '高阶函数是什么？',
    answers: [
      '一个接受至少一个函数作为输入或一个函数作为输出的函数。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 299,
    title: '在函数式编程中，可以通过高阶函数 compose 和函数链两种方式构建__的、__的代码？',
    answers: [
      '流式',
      '模块化 ',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 300,
    title: '响应式编程是什么？',
    answers: [
      '响应式编程（Reactive Programming），一种面向数据流和变化传播的异步的编程范式。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程', '响应式编程',],
    type: '基础知识',
  },
  {
    id: 301,
    title: '闭包（Closures）是什么？',
    answers: [
      '通俗说法：闭包是一种在函数声明过程中将自身上下文与所属函数词法环境绑定的技术。',
      '严谨说法：闭包是一种在函数声明过程中将所在函数的执行上下文的词法环境的指针保存在自身执行上下文的词法环境中的技术。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 302,
    title: '闭包（Closures）有哪些实际应用？',
    answers: [
      '1. 模拟私有变量',
      '2. 模拟块作用域变量',
      '3. 实现模块化',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 303,
    title: '什么是控制流？',
    answers: [
      '控制流，是程序为实现业务目标所要进行的路径。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 304,
    title: '函数式编程，是什么？',
    answers: [
      '函数式编程是一种将计算描述为 Lambda 表达式的编程范式。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 305,
    title: '从引擎的角度说说，一段 JS 代码是如何执行的？',
    answers: [
      {
        tag: 'pre',
        val:
          `
在执行一段代码前，引擎会首先创建一个执行栈。
然后引擎会创建一个全局执行上下文，创建过程中会初始化变量，创建完后将其推入执行栈。

开始依次执行代码，为变量赋值。
如果有函数声明则会创建一个函数执行上下文，如果有函数调用将会把该函数的执行上下文推入栈。

如果子函数在执行过程中，父函数已经 return，引擎会将父函数执行上下文弹出调用栈。
父函数的执行上下文不会被 GC，因为子函数的执行上下文与父函数的词法环境形成了闭包，所以子函数依旧可以访问父函数的变量。

JS 引擎是单线程的，那是如何处理高并发的呢？如果进行异步编程？
核心：事件循环
TODO：有时间再补充
        `
      },
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 306,
    title: '函数式编程的设计模式，主要目的是消除__。',
    answers: [
      '副作用',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 307,
    title: '响应式编程适合哪些应用场景（优点）？',
    answers: [
      {
        tag: 'pre',
        val:
          `
基于事件驱动的系统
  例如：
    - UI 相关的，因为用户与程序的交互是通过事件来实现的
    [存疑]- 异步处理 IO
        `
      },
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '响应式编程',],
    type: '基础知识',
  },
  {
    id: 308,
    title: '函数响应式编程是什么？',
    answers: [
      '函数响应式编程（Functional Reactive Programming，FRP），是一种结合了函数式编程和响应式编程优点的编程范式。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '响应式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 309,
    title: '尾部调用优化（Tail Call Optimization，TCO），是什么？',
    answers: [
      `尾部调用优化是一种当递归满足一定条件时的使用新栈帧替换旧栈帧并始终只使用一帧的技术。`,
      `[teɪl] [kɔːl] [,ɒptɪmaɪ'zeɪʃən]`,
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 310,
    title: 'ES__ 开始支持 TCO，但是目前没有引擎实现了 TCO。',
    answers: [
      `6`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 311,
    title: '满足什么条件时会触发 TCO？',
    answers: [
      `1. 递归函数的最后一个表达式为递归函数自身的调用。`,
      `2. 递归函数为纯函数。`,
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 312,
    title: '惰性求值（Lazy Evaluation），是什么？',
    answers: [
      `惰性求值，是一个计算机科学中的当表达式的引用被使用是才对表达式求值的概念。`,
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 313,
    title: '及早求值（Early Evaluation），是什么？',
    answers: [
      `及早求值，也叫贪婪求值，是一个计算机科学中的遇到表达式立即求值的概念。`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 314,
    title: '惰性求值，有什么优点？',
    answers: [
      `- 节省计算量`,
      `- 可计算无限列表`,
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程',],
    type: '基础知识',
  },
  {
    id: 315,
    title: '及早求值，有什么优点？',
    answers: [
      `- 节省内存`,
      `- 执行速度快`,
    ],
    tags: ['计算机科学', '编程思想', '命令式编程',],
    type: '基础知识',
  },
  {
    id: 316,
    title: '在 JavaScript 中，可迭代协议是什么？',
    answers: [
      '可迭代协议是一个允许定制迭代行为的协议.',
      {
        tag: 'pre',
        val:
          `
具体还说,
  定义了对象必须有一个键为 Symbol.iterator 的属性,
  并且值为一个无参数的的函数,
    函数的返回值为一个符合迭代器协议的对象.
        `
      },
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 317,
    title: '__语句，可以使用 Symbol.asyncIterator 执行异步迭代。',
    answers: [
      `for-await-of 循环`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 318,
    title: '在 JavaScript 中，instanceof 运算符是怎么工作的？以 objA instanceof objB 为例说明。',
    answers: [
      `如果 objB 的原型（prototype）存在 objA 的原型链上则返回真，反之为假。`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 319,
    title: '在 JavaScript 中，所有的函数（函数也属于对象）都是 __的实例，包括它自己（自己实例化自己 囧 ）！',
    answers: [
      `Function 构造函数`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 320,
    title: '在 JavaScript 中，Function.prototype 和 Funtion.__proto__ 是一个对象吗？',
    answers: [
      `是一个对象（指向同一个指针）`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 321,
    title: '在 JavaScript 中，普通函数和构造函数有什么区别？',
    answers: [
      {
        tag: 'pre',
        val:
          `
首先要了解函数执行上下文这个概念，执行上下文分可以分为两个阶段：创建阶段和执行阶段。
  在创建阶段也就是函数声明时：两者没有区别。
  在执行阶段也就是函数调用时：两个的区别在与 this 关键字的指向，具体区别要看调用方式。
    使用 new 运算符调用函数：函数执行上下文的 this 指向一个新的空对象。
    直接调用函数：参看《JavaScript this 的值是什么》
        `,
      },
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 322,
    title: '在 JavaScript 中，所有的函数都有“原型对象”（ prototype 属性）吗？所有的对象都有 __proto__ 吗？',
    answers: [
      `不是，箭头函数没有。`,
      `不是，Object 构造函数的原型对象 (prototype) 就没有 __proto__ 属性。`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 323,
    title: '在 JavaScript 中，Function 构造函数的“原型对象”（ prototype 属性）有哪些属性？',
    answers: [
      `apply`,
      `arguments`,
      `bind`,
      `call`,
      `constructor`,
      `length`,
      `name`,
      `Symbol.hasInstance`,
      `toString`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 324,
    title: 'ES3 之前都是通过 arguments.callee 实现函数表达式的递归，为什么？',
    answers: [
      `因为 ES3 以前函数表达式都是匿名的。ES3 开始才允许命名函数表达式。`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 325,
    title: '为什么严格模式，不允许使用 arguments.callee ？',
    answers: [
      `arguments.callee 会改变函数 this 的指向。`,
      `访问 arguments 对象比较慢。`,
      `不利于引擎的优化。`,
    ],
    tags: ['计算机科学', '程序设计语言', 'JavaScript'],
    type: '通用领域知识',
  },
  {
    id: 326,
    title: '冯诺依曼结构下的计算机（冯诺依曼机），有几种并行方案？',
    answers: [
      {
        tag: 'pre',
        val:
          `
有 3 种：
  - 锁/原子
  - 不可变
  - 隔离

例子：
C，C++：默认不优先使用任何一种。
Rust：默认使用“不可变”，提供了“锁/原子”而已。
Go，erlang：默认提供“隔离”方式，然后基于“隔离”又提供了一套通讯机制。

函数式编程：不可变
命令式编程：“锁/原子”或“隔离”
        `,
      },
    ],
    tags: ['计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 327,
    title: 'Lambda 演算是什么？',
    answers: [
      `λ演算，是一套用于研究函数定义、函数应用和递归的形式系统。注：图灵完备。`,
    ],
    tags: ['数学', '计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 328,
    title: 'Lambda 表达式是什么？',
    answers: [
      `Lambda 表达式，是根据 Lambda 演算定义的函数。`,
    ],
    tags: ['数学', '计算机科学', '编程思想',],
    type: '基础知识',
  },
  {
    id: 329,
    title: '并发，是什么？',
    answers: [
      `在一个时间段内发生若干事件。`,
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 330,
    title: '并行，是什么？',
    answers: [
      `在同一时刻发生若干事件。`,
      `注：所以只有多核 CPU 上，才能并行程序。`,
    ],
    tags: ['计算机科学',],
    type: '基础知识',
  },
  {
    id: 331,
    title: '离散，是什么？',
    answers: [
      `离散是一个在数学中用来形容数字不连续的术语。`,
      `是“连续”的反义词`,
    ],
    tags: ['数学',],
    type: '基础知识',
  },
  {
    id: 332,
    title: '响应式编程中，流（Stream）是什么？Stream 是 Reactor 的一部分吧（Stream 应该就是个事件队列）？',
    answers: [
      '流是一个随时间发生有序事件的序列。',
      '很可能',
      '[striːm]',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程', '响应式编程',],
    type: '基础知识',
  },
  {
    id: 333,
    title: '在异步编程模型中，分别有几种获得上个任务执行结果的模型（方式）？他们的优缺点',
    answers: [
      '有两种方式：主动轮询（Proactive）和 响应式（Reactive）。',
      {
        tag: 'pre',
        val:
          `
Preactive
  优点
    容易实现
Reactive
  优点
    效率高
        `,
      },
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程', '响应式编程',],
    type: '基础知识',
  },
  {
    id: 334,
    title: '在 Reactive 模型中，Reactor 是什么？Reactor 和 Reactor 之间怎么通信？',
    answers: [
      'Reactor 是处理和发出事件的主体。',
      '他们之间通过消息管道（channel）来传递消息。',
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程', '响应式编程',],
    type: '基础知识',
  },
  {
    id: 335,
    title: '在 Reactive 模型中，最核心的是哪些部分？分别有什么作用？',
    answers: [
      `两部分：线程和消息管道。`,
      `线程：用于监听事件。`,
      `消息管道：用于 Reactor 两两间的通信。`,
    ],
    tags: ['计算机科学', '编程思想', '声明式编程', '函数式编程', '响应式编程',],
    type: '基础知识',
  },
  {
    id: 336,
    title: `发布订阅（Publisher/Subscriber）模式是什么？与观察者（Observer）模式和 monads 有什么区别？`,
    answers: [
      '发布订阅模式是一种信息源发生事件时将通知所有订阅者的同步信息的解决方案。',
      '在面向对象编程中，把这个概念称为观察者模式。',
      '在函数式编程中，把这个概念称为 monads。',
    ],
    tags: ['计算机科学', '设计模式'],
    type: '基础知识',
  },
  {
    id: 337,
    title: `景深是什么？`,
    answers: [
      '景深是焦点前后所呈现清晰图像的范围。',
    ],
    tags: ['摄影',],
    type: '基础知识',
  },
  {
    id: 338,
    title: '正则表达式术语，备用状态（saved state）是什么？',
    answers: [
      '备用状态是正则表达式和字符串的位置标记。',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 339,
    title: '正则表达式优化的主要目标是什么？',
    answers: [
      '减少回溯',
    ],
    tags: ['计算机科学', '正则表达式',],
    type: '基础知识',
  },
  {
    id: 340,
    title: '外观模式是什么？',
    answers: [
      '外观模式是一种为多个子系统提供一个统一接口的结构型设计模式。',
      '有时需要通过一个父对象完成一个功能，客户对象需要调用多个子对象，这样违背了“开闭原则”和“迪米特法则”。',
      '因此，外观模式提供了一个外观子对象，客户对象只要调用外观子对象的一个接口就能实现相关功能。',
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 341,
    title: '中介者模式是什么？',
    answers: [
      '中介者模式是一种定义一个中介对象来封装一系列对象之间的交互的行为型设计模式。',
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 342,
    title: '中介者模式和外观模式有什么区别？',
    answers: [
      {
        tag: 'pre',
        val:
          `
两个模式都是提供一个新对象，让相关对象只与新对象进行交互，
区别就在于相关对象和新对象的关系：
  中介者模式
    新对象是独立于相关对象的，就像是两家人。
  外观模式
    新对象和相关对象是高度联系的，就像是兄弟。
        `,
      },
    ],
    tags: ['计算机科学', '设计模式',],
    type: '基础知识',
  },
  {
    id: 343,
    title: `在算法中，时间复杂度是什么？`,
    answers: [
      `时间复杂度是一个描述输入值大小与时间长短关系的函数。`,
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 344,
    title: `在算法中，空间复杂度是什么？`,
    answers: [
      `空间复杂度是一个描述输入值大小与占用储存空间大小关系的函数。`,
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 345,
    title: `在排序算法中，排序方式有哪几种？`,
    answers: [
      `排序方式有两种，“原地排序”和“非原地排序”。`,
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 346,
    title: `在排序算法中，原地排序是什么？`,
    answers: [
      `原地排序是一种只利用待排序数据的储存空间进行比较和交换的排序方式。`,
    ],
    tags: ['计算机科学', '算法',],
    type: '基础知识',
  },
  {
    id: 347,
    title: 'Redux 中，术语（5/10）Action Creator 是什么？',
    answers: [
      `Action Creator 是一个专门创建 Action 或 Async Action 的工厂函数。`,
    ],
    tags: ['计算机科学', 'JavaScript', 'Redux'],
    type: '专用领域知识',
  },
];

export default data;
