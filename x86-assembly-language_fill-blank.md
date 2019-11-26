<!-- markdownlint-disable MD033 -->
# x86 汇编语言 从实模式到保护模式 填空

第1部分 预备知识

## 第1章 十六进制计数法

### 1.1 二进制计数法回顾

<details>
  <summary>为了区分不同的进制，在十六进制表示的数据的后面加__，在二进制表示的数据的后面加__，在十进制表示的数据的后面加__。</summary>
  <div>H(Hexadecimal)</div>
  <div>B(Binary)</div>
  <div>D(Decimal)</div>
</details>

## 第2章 处理器、内存和指令

### 2.1 最早的处理器

<details>
  <summary>__ 年，美国贝尔实验室的肖克利和同事们发明了晶体管。__ 年，美国人杰克·基尔比发明了集成电路。__ 年，在为日本人设计计算器芯片的过程中，受到启发的 Intel 公司生产了世界上第一个处理器 INTEL __.</summary>
  <div>1947</div>
  <div>1958</div>
  <div>1971</div>
  <div>4004</div>
</details>

### 2.4 指令和指令集

<details>
  <summary>一般来说，指令由__和__构成，但也有小部分仅有操作码，例如，停机指令仅包含1字节的操作码F4。指令的长度短的仅有__字节，长的能达到__字节(对于 INTEL x86 来说)。</summary>
  <div>操作码</div>
  <div>操作数</div>
  <div>1</div>
  <div>15</div>
</details>

<details>
  <summary>对 Intel 处理器来说，如果访问内存中的一个字，那么，它规定高字节位于高地址部分，低字节位于低地址部分，这称为__(Little Endian)</summary>
  <div>低端字节序</div>
</details>

<details>
  <summary>指令和非指令的普通二进制数是一模一样，在组成内存的电路中，都是一些高低电平的组合。因为处理器是自动按顺序取指令并加以执行的，在指令中混杂了非指令的数据会导致处理器不能正常工作。为此，指令和数据要分开存放，存放指令的区域叫__区，存放数据的区域叫__区。</summary>
  <div>代码</div>
  <div>数据</div>
</details>

<details>
  <summary>每种处理器在设计的时候，也只能拥有有限的指令，从几十条到几百条不等。一个处理器能够识别的指令的集合，称为该处理器的__。</summary>
  <div>指令集</div>
</details>

### 2.5 古老的 Intel 8086 处理器

<details>
  <summary>Intel 8086是一个由Intel于__年所设计的__位微处理器芯片，是x86架构的鼻祖。</summary>
  <div>1978</div>
  <div>16</div>
</details>

<details>
  <summary>8086 处理器内部有8个16位的通用寄存器，分别被命名为:__。“通用”的意思是，它们之中的大部分都可以根据需要用于__目的。</summary>
  <div>AX、BX、CX、DX、SI、DI、BP、SP</div>
  <div>多种</div>
</details>

<details>
  <summary>完成某个工作的所有指令，必须集中在一起，处于内存的某个位置，形成一个段，叫做__段。程序总要操作大量的数据，这些数据也应该集中在一起，位于内存中的某个地方，形成一个段，叫做__段。</summary>
  <div>代码</div>
  <div>数据</div>
</details>

<details>
  <summary>在指令中使用绝对内存地址的程序是无法__的，为了让程序可以在内存中的任何地方正确执行，需要在程序中使用__地址或者__地址，而不是使用真实的物理地址。8086处理器在访问内存时使用了__机制，解决了此问题。</summary>
  <div>重定位</div>
  <div>相对</div>
  <div>逻辑</div>
  <div>分段</div>
</details>

<details>
  <summary>当采用分段策略之后，一个内存单元的地址实际上就可以用“__地址: __地址”来表示，这就是__地址。</summary>
  <div>段</div>
  <div>偏移</div>
  <div>逻辑</div>
</details>

<details>
  <summary>为了在硬件一级提供对“段地址: 偏移地址”内存访问模式的支持，处理器至少要提供两个段寄存器，分别是__寄存器(Code Segment，CS)和__段寄存器（Data Segment，DS）</summary>
  <div>代码</div>
  <div>数据</div>
</details>

<details>
  <summary>在进行数据传送或者算术逻辑运算的时候，需要使用算术逻辑部件（ALU）。比如，将AX的内容和CX的内容相加，结果然在AX中，在相加的结果返回到AX之前，需要通过一个叫__中转。</summary>
  <div>暂存器的寄存器</div>
</details>

<details>
  <summary>8086 内部有__个段寄存器。__ 是代码段寄存器，__ 是数据段寄存器，__ 是附加段寄存器（Extra Segment），当需要在程序中同时使用两个数据段时，DS 指向一个，ES 指向另一个；可以在指令中指定使用DS或ES，默认为DS。__ 是栈段寄存器。</summary>
  <div>4</div>
  <div>CS</div>
  <div>DS</div>
  <div>ES</div>
  <div>SS</div>
</details>

<details>
  <summary>IP 是__（Instruction Pointer）寄存器，它只和CS一起使用，而且只有处理器才能直接改变它的内容。当一段代码开始执行时，CS 指向代码段的起始地址，IP 则指向段内偏移。处理器会自动根据当前指令的长度来改变 IP 的值，使它指向下一条指令。</summary>
  <div>指令指针</div>
</details>

<details>
  <summary>8086 处理器 的逻辑分段，起始地址都是 __ 的倍数，这称为是按__字节对齐的。</summary>
  <div>16</div>
</details>

## 第3章 汇编语言和汇编软件

<details>
  <summary>处理器依靠机器指令工作，但机器指令从形式上看都是一些没有规律的数字，难以__、__和__，这样就发明了汇编语言。</summary>
  <div>书写</div>
  <div>阅读</div>
  <div>理解</div>
</details>

### 3.1 汇编语言简介

<details>
  <summary>指令和被指令引用的数据在内存中都是一些或高或低的__，每一个__都可以看成一个二进制位(或1或0)</summary>
  <div>电平</div>
</details>

<details>
  <summary>汇编语言的指令是否区分大小写？</summary>
  <div>否</div>
</details>

<details>
  <summary>很多高级语言中，如果要指示一个数是十六进制数，通常为它添加一个“__”前缀。</summary>
  <div>0x</div>
</details>

<details>
  <summary>将汇编语言源程序转换成机器语言，这个过程叫做__。在编译的时候，汇编语言编译器的作用是将 mov、add、ax、bx 等这些符号组合起来，转换成类似于数值的机器指令，这个过程叫做__。</summary>
  <div>编译(Compile)</div>
  <div>汇编</div>
</details>

<details>
  <summary>现存的汇编语言编译器有__种，用得比较多的有 MASM、FASM、TASM、AS86、GASM，每种汇编器都有自己的特色和局限。</summary>
  <div>多</div>
</details>

## 第4章 虚拟机的安装和使用

### 4.1 计算机的启动过程

<details>
  <summary>在处理器的众多的引脚中，有一个是 RESET，用于接受__信号。每当处理器__，或者 RESET 引脚的电平由低变高时，处理器都会执行一个__初始化，以及一个可选的内部自测试，然后将内部所有__的内容初始到一个预置的状态。</summary>
  <div>复位</div>
  <div>加电</div>
  <div>硬件</div>
  <div>寄存器</div>
</details>

<details>
  <summary>每个比特的储存都是靠一个极其微小的__，外加一个同样极其微小的__来完成的。个人计算器中使用的内存需要定期补充__，这称为刷新，这种存储器也称为__。随机访问的意思是,访问任何一个内存单元的速度和它的__无关。</summary>
  <div>晶体管</div>
  <div>电容</div>
  <div>电荷</div>
  <div>动态随机访问存储器(Dynamic Random Access Memory, DRAM)</div>
  <div>位置(地址)</div>
</details>

<details>
  <summary>8086 有20根地址线，但并非全都用来访问DRAM(内存条)。这些地址线经过分配，大部分用来访问__，剩余部分给了__和外围的__。</summary>
  <div>DRAM</div>
  <div>只读存储器ROM</div>
  <div>板卡</div>
</details>

<details>
  <summary>只读存储器(Read Only Memory, ROM) 不需要__，它的内容是预先写入的，即使__也不会消失，但也很难改变。</summary>
  <div>刷新</div>
  <div>掉电</div>
</details>

<details>
  <summary>在以 Intel 8086 为处理器的系统中，ROM占据着整个内存空间__端的64KB，DRAM占据着较__端的640KB，中间还有一部分，分给了其他外围设备。处理器取指令执行的自然顺序是从内存的__地址往__地址推进。</summary>
  <div>顶</div>
  <div>低</div>
  <div>低</div>
  <div>高</div>
</details>
