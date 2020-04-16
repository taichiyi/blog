<!-- markdownlint-disable MD033 -->
# C Primer Plus（第6版）填空

## 第1章 初识 C 语言

### 1.1 C 语言的起源

<details>
  <summary>__年，贝尔实验室的丹尼斯·里奇（Dennis Ritch）和肯·汤普逊（Ken Thompson）在开发 __ 操作系统时设计了 C 语言。C 语言是在 __ 语言（汤普逊发明）的基础上进行设计。</summary>
  <div>1972</div>
  <div>UNIX</div>
  <div>B</div>
</details>

### 1.2 选择 C 语言的理由

<details>
  <summary>高效性：C 语言具有通常是汇编语言才具有的__能力，可以根据具体情况微调程序以获得最大运行__或最有效地使用__。</summary>
  <div>微调控制</div>
  <div>速度</div>
  <div>内存</div>
</details>

<details>
  <summary>可移植性：无论是使用家庭计算机、专业工作站，还是大型机，都能找到针对特定系统的 C __。</summary>
  <div>编译器</div>
</details>

<details>
  <summary>缺点：享受用 C 语言自由编程的乐趣，就必须承担更多的责任。特别是，C 语言使用_A_，而涉及_A_的编程错误往往难以察觉。</summary>
  <div>A:指针</div>
</details>

### 1.7 使用 C 语言的7个步骤

<details>
  <summary>使用 C 语言的7个步骤: 第一步: __; 第二步: __; 第三步: __; 第四步: __; 第五步: __; 第六步: __; 第七步: __。</summary>
  <div>1.定义程序目标</div>
  <div>2.设计程序</div>
  <div>3.编写代码</div>
  <div>4.编译</div>
  <div>5.运行程序</div>
  <div>6.测试和调试程序</div>
  <div>7.维护和修改代码</div>
</details>

<details>
  <summary>查找并修复程序错误的过程叫__。</summary>
  <div>调试(debug)</div>
</details>

### 1.8 编程机制

<details>
  <summary>用 C 语言编写程序时，编写的内容被储存在__文件中，该文件被称为__文件(source code file)。大部分 C 系统，都要求文件名以__结尾。文件名中，点号(.)前面的部分称为__名(basename)，点号后面的部分称为__名(extension)。</summary>
  <div>文本</div>
  <div>源代码</div>
  <div>.c</div>
  <div>基本</div>
  <div>拓展</div>
</details>

<details>
  <summary>典型的 C 实现通过编译和连接__个步骤完成这一过程。编译器把__代码转换成__代码，连接器把__代码和__代码合并，生成可执行文件。C 使用这种分而治之的方法方便对程序进行__化，可以独立编译单独的模块，再用连接器合并已编译的模块。另外，连接器还将你编写的程序和__的库代码合并。</summary>
  <div>两</div>
  <div>源</div>
  <div>中间</div>
  <div>其他</div>
  <div>模块</div>
  <div>预编译</div>
</details>

<details>
  <summary>中间文件有多种形式。最普遍的一种形式是，把源代码转换为__代码，并把结果放在目标[代码]文件中(这里假设源代码只有一个文件)。虽然目标文件中包含机器语言代码，但是并不能直接运行该文件。目标文件中只包含你编写的被编译器翻译成的机器语言代码，这还不是一个完整的程序。</summary>
  <div>机器语言</div>
</details>

<details>
  <summary>目标代码文件缺失__代码(startup code)。启动代码充当着__和__之间的接口。例如，可以在 MS Windows 或 Linux 系统下运行 IBM PC 兼容机。这两中情况使用的硬件相同，所以目标代码相同，但是 Windows 和 Linux 所需的启动代码不同，因为这些系统处理程序的方式不同。</summary>
  <div>启动</div>
  <div>程序</div>
  <div>系统</div>
</details>

<details>
  <summary>目标代码还缺少__函数。几乎所有的 C 程序都要使用 C 标准库中的函数。目标[代码]文件并不包含printf()函数的代码，它只包含了使用 printf()函数的__。printf()函数真正的代码储存在另一个被称为库的文件中。库文件有许多函数的目标代码。</summary>
  <div>库</div>
  <div>指令</div>
</details>

<details>
  <summary>连接器的作用是，把你编写的__代码、系统的__代码和__代码这 3 部分合并成一个文件，即__文件。对于库代码，连接器只会把程序中要用到的库函数代码提取出来。</summary>
  <div>目标</div>
  <div>标准启动</div>
  <div>库</div>
  <div>可执行</div>
</details>

<details>
  <summary>GNU 项目始于 __ 年，是一个开发大量免费 UNIX 软件的集合。GNU 编译器集合(也被称为GCC，其中包含 GCC C 编译器)是该项目的产品之一。用命令 __ 便可调用 GCC C编译器。许多使用 gcc 的系统都用 __ 作为 gcc 的别名。</summary>
  <div>1987</div>
  <div>gcc</div>
  <div>cc</div>
</details>

<details>
  <summary>LLVM 项目是 cc 的另一个替代品。该项目是与编译器相关的开源软件集合。其中的 __ 编译器是用来处理 C 代码的，可以通过命令 __ 调用。</summary>
  <div>Clang</div>
  <div>clang</div>
</details>

<details>
  <summary>GNU 和 LLVM 都可以使用-v选择来显示版本信息，因此各个系统都使用 __ 别名来代替 gcc 或 clang 命令。</summary>
  <div>cc</div>
</details>

<details>
  <summary>UNIX 系统内置 Mac OS X，终端工具打开的窗口是让用户在 __ 命令行环境中运行程序。苹果在标准软件包中不提供命令行编译器，但是，如果下载了 Xcode，还是可以下载可选的命令行工具。</summary>
  <div>UNIX</div>
</details>

## 第2章 C 语言描述

### 2.2 示例解释

<details>
  <summary>C 语言的6种语句: __、__、__、__、__、__。</summary>
  <div>标号语句</div>
  <div>复合语句</div>
  <div>表达式语句</div>
  <div>选择语句</div>
  <div>迭代语句</div>
  <div>跳转语句</div>
</details>

<details>
  <summary>__ 是C编译器软件包的标准部分，它提供键盘输入和屏幕输出的支持。</summary>
  <div>stdio.h</div>
</details>

<details>
  <summary>在程序中使用函数叫作__函数。</summary>
  <div>调用</div>
</details>

<details>
  <summary>#include &lt;stdio.h&gt;相当于把stdio.h文件中的__都输入到该行所在位置。</summary>
  <div>所有内容</div>
</details>

<details>
  <summary>#include 这行代码是一条C __命令(preprocessor directive)。通常，C编译器在编译前会对__做一些准备工作，即预处理(preprocessing)。通常，在C程序顶部的信息集合被称为__。</summary>
  <div>预处理</div>
  <div>源代码</div>
  <div>头文件</div>
</details>

<details>
  <summary>通常，函数名后面的圆括号中包一些传入函数的信息。如果函数没有任何形参，则需要在括号中填写__，__标准及以下允许函数没有定义形参时，可以不用写void。C99和C11要求要传void。</summary>
  <div>void</div>
  <div>C90</div>
</details>

<details>
  <summary>/*和*/之间的内容都会被__忽略。</summary>
  <div>编译器</div>
</details>

<details>
  <summary>//形式的注释只对__行有效。</summary>
  <div>单</div>
</details>

<details>
  <summary>一般而言，所有的C函数都使用__标记函数体的开始和结束。</summary>
  <div>花括号</div>
</details>

<details>
  <summary>main(void) { int num; }这行代码叫作声明(declaration)。该例中声明主要完成了2件事: 1.在__中有一个名为num的变量；2.这个变量的类型为int</summary>
  <div>函数</div>
</details>

<details>
  <summary>int是C语言的一个_A_，_A_是语言定义的单词，不能做其他用途。</summary>
  <div>关键字(keyword)</div>
</details>

<details>
  <summary>num是一个__，也就是一个变量、函数或其他实体的名称。</summary>
  <div>标识符(identifier)</div>
</details>

<details>
  <summary>__把特定标识符与计算器内存中的特定位置联系起来。</summary>
  <div>声明</div>
</details>

<details>
  <summary>以前的C语言，要求把变量声明在__的顶部，其他语句不能在任何声明的__。C99和C11遵循C++的惯例，可以把声明放在块中的任何位置，首次使用变量之前一定要先声明它。</summary>
  <div>块</div>
  <div>前面</div>
</details>

<details>
  <summary>C99和C11允许使用更长的标识符名，但编译器只能识别前__个字符。C90只允许6个字符。</summary>
  <div>63</div>
</details>

<details>
  <summary>操作系统和C库经常使用__字符开头的标识符，因此最好避免在自己的程序中使用这种名称。</summary>
  <div>一个或两个下划线</div>
</details>

<details>
  <summary>在C语言中，__是传递给函数的特定值，__是函数中用于储存值的变量。</summary>
  <div>实际参数(简称实参)</div>
  <div>形式参数(简称形参)</div>
</details>

<details>
  <summary>换行符(newline character)是一个_A_。_A_用于代表难以表示或无法输入的字符。如，\n代表换行,\t代表Tab键,\b代表Backspace键(退格键)。每个转义序列都以__字符(\)开始。</summary>
  <div>转义序列(escape sequence)</div>
  <div>反斜杠</div>
</details>

<details>
  <summary>%d相当于是一个__符，其作用是告诉编译器输入num值的位置和类型</summary>
  <div>占位</div>
</details>

<details>
  <summary>当C函数中没有使用return语句时，则默认返回__。对于某些操作系统（包括Linux和UNIX），return 语句有实际用途，所以建议函数中使用return语句。</summary>
  <div>0</div>
</details>

### 2.3 简单程序的结构

<details>
  <summary>函数由__和__组成。函数头包括函数名、传入该函数的信息类型和函数的返回类型。通过函数名后的圆括号可识别出函数，圆括号里可能为空，可能有参数。函数体被花括号括起来，由一系列__和__组成。</summary>
  <div>函数头</div>
  <div>函数体</div>
  <div>语句</div>
  <div>声明</div>
</details>

### 2.4 提高程序可读性的技巧

<details>
  <summary>分号告诉编译器__在哪里结束、__在哪里开始。</summary>
  <div>一条语句</div>
  <div>下一条语句</div>
</details>

### 2.7 调适程序

<details>
  <summary>编译器有一个常见的毛病是，报错的信息比真正的错误位置滞后__行。</summary>
  <div>一</div>
</details>

### 2.8 关键字和保留标识符

<details>
  <summary>__是C语言的词汇。不能用它们作为标识符。</summary>
  <div>关键字</div>
</details>

<details>
  <summary>还有一些__，C语言已经指定了它们的用途或保留它们的使用权，例如：下划线开头的标识符和标准库函数名。</summary>
  <div>保留标识符</div>
</details>

## 3 数据和C

### 3.2 变量与常量数据

<details>
  <summary>有些数据类型在程序使用之前已经事先设定好了,在整个程序运行过程中没有变化，这些称为__。其他数据类型在程序运行期间可能会改变或被赋值，这些称为__。</summary>
  <div>常量(constant)</div>
  <div>变量(variable)</div>
</details>

### 3.3 数据: 数据类型关键字

<details>
  <summary>按计算机的存储方式可分为两大基本类型：__类型和__类型。</summary>
  <div>整数</div>
  <div>浮点数</div>
</details>

<details>
  <summary>字(word)是设计计算机时给定的自然存储单位。对于8位的微型计算机（如，最初的苹果机），1个字长只有8位。从那以后，个人计算机字长增至16位、32位，直到目前的__位。对于64位的计算机，一个字长有__位。</summary>
  <div>64</div>
  <div>64</div>
</details>

<details>
  <summary>计算机把浮点数分为__部分和__部分来表示，而且分开存储这两部分。</summary>
  <div>指数</div>
  <div>小数</div>
</details>

### 3.4 C语言基本数据类型

<details>
  <summary>C语言把不含小数和指数的数作为__数。C语言把大多数整型常量视为__类型，但是非常大的整数除外。</summary>
  <div>整</div>
  <div>int</div>
</details>

<details>
  <summary>%d指明了在一行中打印整数的位置。%d称为__，它指定了printf()应该使用什么格式来显示一个值。</summary>
  <div>转换说明</div>
</details>

<details>
  <summary>__或__前缀表示十六进制值；__前缀表示八进制。</summary>
  <div>0x</div>
  <div>0X</div>
  <div>0</div>
</details>

<details>
  <summary>以十进制显示数字，使用%d；以八进制显示数字，使用__；以十六进制显示数字，使用__。另外，要显示各进制数的前缀0、0x和0X，必须分别使用%#o、%#x、%#X。</summary>
  <div>%o</div>
  <div>%x</div>
</details>

<details>
  <summary>现在，个人计算机上最常见的变量设置是：__ 占64位，__ 占32位，__ 占16位，__占16位或32位（依计算机自然字长而定）</summary>
  <div>long long</div>
  <div>long</div>
  <div>short</div>
  <div>int</div>
</details>

<details>
  <summary>char 类型用于储存__(如，字母或标点符号)。C语言把__字节定义为char类型占用的位数。</summary>
  <div>字符</div>
  <div>1</div>
</details>

<details>
  <summary>在C语言中，用_A_括起来的单个字符被称为字符常量(character constant)。_A_只适用于字符、数字和标点符号。</summary>
  <div>单引号</div>
</details>

<details>
  <summary>从C90开始，不仅可以使用十进制、八进制形式表示字符常量，还可以使用十六进制。即反斜杠后面跟一个__或__，再加1~3位十进制数字。</summary>
  <div>x</div>
  <div>X</div>
  <div>例如:'\x10'</div>
</details>

<details>
  <summary>双引号中的字符集合叫作__。</summary>
  <div>字符串</div>
</details>

<details>
  <summary>printf()函数用%__指明待打印的字符。一个字符变量实际上被储存为__字节的整数值。</summary>
  <div>c</div>
  <div>1</div>
</details>

<details>
  <summary>c99标准添加了__ 类型，用于表示布尔值。因为C语言用值1表示true，值0表示false。原则上仅占用__位存储空间。</summary>
  <div>_Bool</div>
  <div>1</div>
</details>

<details>
  <summary>C标准规定，float类型必须至少能表示_1_位有效数字(不是精确到小数点后6位数字)，且取值范围至少是10e-_2_~10e_3_。通常，系统储存一个浮点数需要占用_4_位。其中_5_位用于表示指数的值和符号，剩下_6_位用于表示非指数部分(也叫作尾数或有效数)及其符号。</summary>
  <div>1. 6</div>
  <div>2. 37</div>
  <div>3. 37</div>
  <div>4. 32</div>
  <div>5. 8</div>
  <div>6. 24</div>
</details>

<details>
  <summary>除了float之外，C语言还提供了另一种类型是double(意为双精度)。double类型和float类型的最小取值范围相同，double类型的值至少有__位有效数字，一般情况下，double占用__位而不是32位。</summary>
  <div>13</div>
  <div>64</div>
</details>

<details>
  <summary>浮点型常量的基本形式是: 有符号的数字(包括小数点)，后面紧跟__或__，最后是一个有符号表示10的指数。小数点和指数部分不能同时省略，小数部分和整数部分不能同时省略。</summary>
  <div>e</div>
  <div>E</div>
</details>

<details>
  <summary>默认情况下，编译器假定浮点型常量是__类型的精度。在浮点数后面加上f或F后缀，可以指定浮点型常量的默认类型，F为float，L为long double。</summary>
  <div>double</div>
</details>

<details>
  <summary>printf()函数使用%__转换说明打印十进制表示的float和double类型浮点数，用%__打印指数记数法的浮点数。</summary>
  <div>f</div>
  <div>e</div>
</details>

<details>
  <summary>当计算导致数字过大，超过当前类型能表达的范围时，就会发生__。这种情况下会返回一个无穷大的特定值，如: inf或infinity。</summary>
  <div>上溢(overflow)</div>
</details>

<details>
  <summary>有一个特殊的浮点值__。例如: 正弦值不能大于1，如果传入的参数大于1，这种情况下函数会返回特殊的浮点值。</summary>
  <div>NaN(not a number的缩写)</div>
</details>

<details>
  <summary>sizeof 是C语言的内置__，以__为单位给出指定类型的__。C99和C11提供%__转换说明匹配sizeof的返回类型。</summary>
  <div>运算符</div>
  <div>字节</div>
  <div>大小</div>
  <div>zd</div>
</details>

### 3.7 转义序列示例

<details>
  <summary>printf()语句把输出发送到__的中间存储区域，当缓冲区__、遇到__符或需要__的时候，就会把缓冲区的数据发送到屏幕或文件，这被称为__。</summary>
  <div>缓冲区(buffer)</div>
  <div>满</div>
  <div>换行字</div>
  <div>输入</div>
  <div>刷新缓冲区</div>
</details>

## 4 字符串和格式化输入/输出

### 4.2 字符串简介

<details>
  <summary>字符串是一个或多个__的序列。_A_不是字符串的一部分。_A_仅告知编译器它括起来的是字符串，正如__用于表示单个字符一样。</summary>
  <div>字符</div>
  <div>A:双引号</div>
  <div>单引号</div>
</details>

<details>
  <summary>C语言用__来标记字符串的结束，也就是空字符(null character)，占__个字节。</summary>
  <div>\0</div>
  <div>1</div>
</details>

<details>
  <summary>scanf()在遇到第1个空白(__、__或__)就不再读取输入。</summary>
  <div>空格</div>
  <div>制表符</div>
  <div>换行符</div>
</details>

<details>
  <summary>字符串常量"x"和字符常量'x'不同。区别一，'x'是__类型(char)，而"x"是__类型(char 数组)；区别二，"x"实际由__个字符组成，'x'由__个字符组成。</summary>
  <div>基本</div>
  <div>派生</div>
  <div>两</div>
  <div>一</div>
</details>

<details>
  <summary>__()函数给出字符串中的字符长度。</summary>
  <div>strlen</div>
</details>

### 4.3 字符串简介

<details>
  <summary>在C语言中通过预处理器来定义常量，格式如下: #__ NAME value。编译程序时，程序中所有的NAME都会被value替换，这一过程被称为__。运行程序时，程序中所有的替换均已完成，这样定义的常量也称为__。</summary>
  <div>define</div>
  <div>编译时替换(compile-time substitution)</div>
  <div>明示常量(manifest constant)</div>
</details>

<details>
  <summary>用大写表示符号常量是C语言的传统，因为看到全大写名称就明白这是__。“明示常量”相当于“符号常量”。</summary>
  <div>常量符号</div>
</details>

<details>
  <summary>C90标准新增了__关键字，用于限定一个变量为只读。</summary>
  <div>const</div>
</details>

<details>
  <summary>转换说明把以二进制格式储存在计算机中的值转换成一系列__以便于显示。</summary>
  <div>字符(字符串)</div>
</details>

## 5 运算符、表达式和语句

### 5.2 基本运算符

<details>
  <summary>C用__表示算术运算。</summary>
  <div>运算符(operator)</div>
</details>

<details>
  <summary>bmw = 2002; 是一个赋值表达式语句，其中bmw被称为__值(lvalue)，2002被称为__值(rvalue)。</summary>
  <div>左</div>
  <div>右</div>
</details>

<details>
  <summary>用于储存值的数据储存区域统称为__。使用变量名是标识对象的一种方法。</summary>
  <div>数据对象</div>
</details>

<details>
  <summary>a = b = c = 68; 这是一个__赋值，可以按顺序拆分为: c=68; b=c; a=b;</summary>
  <div>三重</div>
</details>

<details>
  <summary>运算符如果需要两个运算对象才能完成操作，则称为__运算符。</summary>
  <div>二元</div>
</details>

<details>
  <summary>减号和加号还可以用于标明或改变一个值的__符号。这种方式使用的加减号被称为一元运算符。</summary>
  <div>代数</div>
</details>

<details>
  <summary>C中，整数除法结果的小数部分被丢弃，这个过程被称为__。</summary>
  <div>截断(truncation)</div>
</details>

### 5.3 其他运算符

<details>
  <summary>%是__运算符。</summary>
  <div>求模</div>
</details>

<details>
  <summary>++是__运算符。++出现在其作用的变量前面，叫做前缀模式；出现在后面，叫做后缀模式。</summary>
  <div>递增</div>
</details>

### 5.4 表达式和语句

<details>
  <summary>表达式(expression)由__和__组成。最简单的表达式是不带运算符的一个常量或变量。(如: 22或beebop;带符号:55+22)</summary>
  <div>运算符</div>
  <div>运算对象(运算操作符操作的对象)</div>
</details>

<details>
  <summary>C表达式的重要特征之一是: 每个表达式都有一个__。</summary>
  <div>值</div>
</details>

<details>
  <summary>语句(statement)是程序的基本构建块。一条语句相当于一条完整的__。最简单的语句是空语句:";"。</summary>
  <div>计算机指令</div>
</details>

<details>
  <summary>C中，赋值和函数调用都是表达式。没有所谓的“赋值语句”和“函数调用语句”，这些语句实际上都是__。</summary>
  <div>表达式语句</div>
</details>

<details>
  <summary>while语句是一种迭代语句，有时也被称为__语句。</summary>
  <div>结构化</div>
</details>

<details>
  <summary>副作用(side effect)是对__或__的修改。</summary>
  <div>数据对象</div>
  <div>文件</div>
</details>

<details>
  <summary>[拓展]对表达式__时，有时会发生副作用。</summary>
  <div>求值</div>
</details>

<details>
  <summary>序列点(sequence point)是程序执行的点，在该点上，所有的__都在进入到下一步之前发生。在语言中，语句中的分号标记了一个序列点。有一些运算符也有序列点，任何一个完整表达式的结束也是一个序列点。</summary>
  <div>副作用</div>
</details>

<details>
  <summary>[拓展]“__”，“__”,“__”,三元运算符的“__”会产生序列点。</summary>
  <div>,</div>
  <div>&&</div>
  <div>||</div>
  <div>?</div>
</details>

<details>
  <summary>完整表达式(full expression)是指这个表达式不是另一个更大表达式的__。</summary>
  <div>子表达式</div>
</details>

<details>
  <summary>复合语句(compound statement)是用__括号括起来的一条或多条语句，复合语句也称为块(block)。</summary>
  <div>花</div>
</details>

<details>
  <summary>语句分为简单语句和复合语句。简单语句以__结尾。</summary>
  <div>一个分号</div>
</details>

### 5.5 类型转换

<details>
  <summary>在类型转换中，从较小类型转换为较大类型，这种转换被称__。反之为__。</summary>
  <div>升级(promotion)</div>
  <div>降级(demotion)</div>
</details>

<details>
  <summary>强制类型转换(cast)，在某个量的前面放置用__括号括起来的类型名，该类型名即是希望转换成的__类型。圆括号和它括起来的类型名构成了__。</summary>
  <div>圆</div>
  <div>目标</div>
  <div>强制类型转换运算符(cast operator)</div>
</details>

## 6 C控制语句:循环

### 6.3 用关系运算符和表达式比较大小

<details>
  <summary>while循环经常依赖测试表达式作比较，这样的表达式被称为__，出现在关系表达式中间的运算符叫做__。</summary>
  <div>关系表达式(relational expression)</div>
  <div>关系运算符(relational operator)</div>
</details>

<details>
  <summary>虽然关系运算符也可用来比较浮点数，但是要注意的是，尽量只使用__和__。因为浮点数舍入误差会导致逻辑上不相等。</summary>
  <div>&lt;</div>
  <div>&gt;</div>
</details>

### 6.4 不确定循环和计数循环

<details>
  <summary>不确定循环(indefinite loop)，是指在测试表达式为假之前，__。</summary>
  <div>预先不知道要执行多少次循环</div>
</details>

### 6.5 for循环

<details>
  <summary>for循环把3个行为(__、__和__)组合在一起。</summary>
  <div>初始化</div>
  <div>测试</div>
  <div>更新</div>
</details>

### 6.7 逗号运算符

<details>
  <summary>逗号运算符是一个__点，所有逗号__侧项的所有副作用都在程序执行逗号__侧项之前发生。</summary>
  <div>序列</div>
  <div>左</div>
  <div>右</div>
</details>

<details>
  <summary>逗号表达式的值是__侧项的值。</summary>
  <div>右</div>
</details>

<details>
  <summary>逗号不仅可以作逗号运算符，还可用作__。</summary>
  <div>分隔符</div>
</details>

### 6.8 出口条件循环: do while

<details>
  <summary>while循环和for循环都是__循环，即在循环的每次迭代之前检查测试条件，所以有可能根本不执行__中的内容。</summary>
  <div>入口条件</div>
  <div>循环体</div>
</details>

<details>
  <summary>C中还有出口条件循环(exit-condition loop)，即在循环的每次迭代之__检查测试条件，保证循环体至少执行一次。这种循环被称为 __ 循环。</summary>
  <div>后</div>
  <div>do while</div>
</details>

### 6.10 嵌套循环

<details>
  <summary>__是指在一个循环内包含另一个循环。嵌套循环中的内层循环(inner loop)在每次外层循环(outer loop)迭代时都要执行完所有的循环。</summary>
  <div>嵌套循环(nested loop)</div>
</details>

### 6.11 数组简介

<details>
  <summary>考虑到影响执行的速度，C编译器不会检查数组的__是否正确。例如: float debts[20];debts[33]。</summary>
  <div>下标</div>
</details>

<details>
  <summary>用于识别数组元素的数字被称为__、__或__。下标必须是__数而且要从__开始计数。</summary>
  <div>下标(subscript)</div>
  <div>索引(indice)</div>
  <div>偏移量(offset)</div>
  <div>整</div>
  <div>0</div>
</details>

### 6.13 关键概念

<details>
  <summary>函数原型是为了方便__查看程序中使用的函数是否正确，函数定义描述了函数如何工作。</summary>
  <div>编译器</div>
</details>

## 7 C控制语句:分支和转跳

### 7.2 if else 语句

<details>
  <summary>ch = __(); 与下面的语句效果相同 scanf("%c", &ch);</summary>
  <div>getchar</div>
</details>

<details>
  <summary>__(ch); 与下面的语句效果相同 printf("%c", ch);</summary>
  <div>putchar</div>
</details>

<details>
  <summary>getchar和putchar函数通常定义在stdio.h头文件中(而且，它们通常是预处理__，而不是真正的函数)。</summary>
  <div>宏</div>
</details>

### 7.4 条件运算符

<details>
  <summary>C提供条件表达式(conditional expression)作为表达if else语句的一种便捷方式，该表达式使用?:条件运算符。因为有3个运算对象，所以称为__元运算符。__运算符是C语言中唯一的三元运算符。</summary>
  <div>三</div>
  <div>条件</div>
</details>

### 7.6 循环辅助: continue 和 break

<details>
  <summary>执行continue语句时，会跳过本次__剩余部分，并开始下一次迭代。如果continue语句在嵌套循环内，则只会影响包含该语句的__层循环。</summary>
  <div>迭代</div>
  <div>内</div>
</details>

<details>
  <summary>执行break语句时，会终止包含它的__，并继续执行下一阶段。如果break语句在嵌套循环内，它只会影响包含该语句的__循环。</summary>
  <div>循环</div>
  <div>当前</div>
</details>

### 7.7 多重选择

<details>
  <summary>可以在switch语句中使用多重__标签。</summary>
  <div>case</div>
</details>

## 8 字符输入/输出和输入验证

### 8.2 缓冲区

<details>
  <summary>用户输入的字符被收集并储存在一个被称为__的临时存储区。</summary>
  <div>缓冲区(buffer)</div>
</details>

<details>
  <summary>为什么要有缓冲区？首先，__。其次，__。</summary>
  <div>把多个字符作为一个块进行传输比逐个发送这些字符节约时间</div>
  <div>如果用户打错字符，可以直接通过键盘修正错误</div>
</details>

### 8.4 重定向和文件

<details>
  <summary>echo_eof &lt; words 。&lt;符号是 UNIX 和 DOS/Windows 的__运算符。该运算符使words文件与__流相关联，把文件中的内容导入 echo_eof 程序。</summary>
  <div>重定向</div>
  <div>stdin</div>
</details>
