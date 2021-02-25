<!-- markdownlint-disable MD033 MD037 -->
# 汇编语言(第3版) 填空

验证知识点的掌握程度

## 前言

<details>
  <summary>如果你想从事__方面的工作的话，汇编语言的基础是必不可缺的。因为我们的工作平台、研究对象都是__，__是人和计算机沟通的最直接的方式，它描述了机器最终所要执行的__。</summary>
  <div>计算机科学 机器 汇编语言 指令序列</div>
</details>

<details>
  <summary>汇编语言是和具体的_A_相联系的，每一种_A_的汇编语言都__，只能通过一种常用的、结构简洁的微处理器的汇编语言来进行学习，从而达到学习汇编的两个最根本的目的：充分获得__，深刻理解__。</summary>
  <div>微处理器 不一样 底层编程的体验 机器运行程序的机理</div>
</details>

## 1 章 基础知识

### 1.1 机器语言

<details>
  <summary>CPU的英文全称和中文全称是什么？英文:__；中文: __</summary>
  <div>Central processing unit</div>
  <div>中央处理器、中央处理单元</div>
</details>

<details>
  <summary>每一种微处理器，由于__和__的不同，就需要不同的电平脉冲来控制，使它工作。所以每一种微处理器都有自己的__，也就是机器语言。</summary>
  <div>硬件设计 内部结构 指令集</div>
</details>

### 1.2 汇编语言的产生

<details>
  <summary>为什么会产生汇编语言？</summary>
  <div>- 在没有产生汇编语言之前用的都是机器语言进行编程。</div>
  <div>- 随着程序越来越复杂，机器语言不易查错、晦涩难懂、不便于记忆的缺点越来越突显。成为了大型程序的编程障碍，所以产生了汇编语言的需求</div>
</details>

<details>
  <summary>寄存器是CPU的一部分吗?</summary>
  <div>是</div>
</details>

<details>
  <summary>一个CPU一般有__个寄存器。</summary>
  <div>多</div>
</details>

<details>
  <summary>汇编编译器的作用？</summary>
  <div>程序员用汇编语言写出源程序，再用汇编编译器将其编译为机器码</div>
</details>

<details>
  <summary>高级语言的编译器是直接把代码编译成机器码吗？为什么？</summary>
  <div>不是</div>
  <div>（1）方便调试和优化（从编译器开发角度）</div>
  <div>（2）分层思想</div>
</details>

### 1.3 汇编语言的组成

<details>
  <summary>汇编语言由3类指令组成。__: 机器码的助记符，有对应的机器码；__: 没有对应的机器码，由编译器执行，计算机不执行；__: 由编译器识别，没有对应的机器码；</summary>
  <div>汇编指令</div>
  <div>伪指令</div>
  <div>其他符号</div>
</details>

### 1.4 存储器（内存）

<details>
  <summary>存储器和寄存器的区别？</summary>
  <div>- 寄存器属于CPU，存储器不属于CPU</div>
  <div>- 寄存器比存储器快</div>
</details>

### 1.6 存储单元

<details>
  <summary>每个存储单元从__开始顺序编号？</summary>
  <div>0</div>
</details>

<details>
  <summary>微型机存储器(微机)的存储单元可以存储__Byte（字节）信息，也就是__个bit（比特）</summary>
  <div>1 8</div>
</details>

<details>
  <summary>电子计算机的最小信息单位是__</summary>
  <div>bit(比特)</div>
</details>

<details>
  <summary>__个bit等于1个Byte（字节）</summary>
  <div>8</div>
</details>

### 1.7 CPU 对存储器的读写

<details>
  <summary>CPU 要想进行数据的读写，必须和外部器件（芯片）进行哪几类信息的交互。</summary>
  <div>- 存储单元的地址（地址信息）</div>
  <div>- 器件的选择，读或写的命令（控制信息）</div>
  <div>- 读或写的数据（数据信息）</div>
</details>

<details>
  <summary>CPU 通过__将交互信息传到存储器芯片的呢？</summary>
  <div>导线，也称总线</div>
</details>

<details>
  <summary>从物理的角度，总线就是__的集合。</summary>
  <div>一根根导线</div>
</details>

<details>
  <summary>根据传送信息的不同，总线从逻辑上分为3类。__总线；__总线；__总线；</summary>
  <div>地址</div>
  <div>控制</div>
  <div>数据</div>
</details>

### 1.8 地址总线

<details>
  <summary>假设CPU 有10根地址总线，则一次可以传送__位二进制数据，10位二进制数据可以表示__个不同的数据，最小__，最大__</summary>
  <div>10</div>
  <div>1024个(2的10次方) 0 1023</div>
</details>

### 1.9 数据总线

<details>
  <summary>CPU 和外界的数据传送速度和__总线的__有关？</summary>
  <div>数据 宽度</div>
</details>

<details>
  <summary>假设，数据总线为8根，则一次可以传送__位二进制数据，8位二进制数据等于__字节</summary>
  <div>8 1</div>
</details>

### 1.14 各类存储器芯片

<details>
  <summary>一台PC机中，一般装有多个存储器芯片是吗？</summary>
  <div>是</div>
</details>

<details>
  <summary>存储器从读写属性上看分为两类。__存储器；__存储器；</summary>
  <div>随机 (RAM) Random Access Memory </div>
  <div>只读 (ROM) Read-Only Memory</div>
</details>

<details>
  <summary>说一下随机存储器(RAM)和只读存储器（ROM）的特点</summary>
  <div>- 随机存储器（RAM）可读可写，但必须带电存储，关机后其中的内容丢失。</div>
  <div>- 只读存储器（ROM）只能读取不能写入，关机后其中的内容不丢失。</div>
</details>

<details>
  <summary>存储器从功能和连接上分为哪3类</summary>
  <div>- 随机存储器（RAM）</div>
  <div>- 装有BIOS的ROM</div>
  <div>- 接口卡上的RAM（显卡）</div>
</details>

<details>
  <summary>主随机存储器一般由哪两个位置上的RAM组成？</summary>
  <div>- 装在主板上的RAM</div>
  <div>- 插在扩展插槽上的RAM</div>
</details>

<details>
  <summary>BIOS的中文意思和英文全称</summary>
  <div>- 中文: 基本输入/输出系统</div>
  <div>- Basic Input/Output System</div>
</details>

## 2 寄存器

<details>
  <summary>一个典型的CPU由__器、__器、__器等器件构成？这些器件内部靠__相连(通信)。</summary>
  <div>运算 控制 寄存 内部总线</div>
</details>

<details>
  <summary>不同的CPU，寄存器的个数、结构是不同的。对吗？</summary>
  <div>对</div>
</details>

<details>
  <summary>8086CPU有__个寄存器?</summary>
  <div>14</div>
</details>

### 2.1 通用寄存器

<details>
  <summary>8086CPU的所有寄存器都是__位的，可以存放__个字节。__、__、__、__ 这4个寄存器通常用来存放__的数据，被称为__寄存器。</summary>
  <div>16 2</div>
  <div>AX BX CX DX</div>
  <div>一般性 通用</div>
</details>

<details>
  <summary>8086的上一代CPU中的寄存器都是8位的，为了兼容上一代的程序，8086CPU的__、__、__、__ 这4个寄存器都可分为2个__位寄存器来用: AX可分为__和__; BX可分为__和__; CX可分为__和__; DX可分为__和__;</summary>
  <div>AX BX CX DX</div>
  <div>8</div>
  <div>AH AL; BH BL; CH CL; DH DL; </div>
</details>

### 2.2 字在寄存器中的储存

<details>
  <summary>字节: 记为__，一个字节由__个bit组成，可以存在__位寄存器中; 字: 记为__，在 8086 中一个字由__个字节组成，这__个字节分别称为这个字的__字节和__字节。</summary>
  <div>byte 8 8</div>
  <div>word 2 2 高位 低位</div>
</details>

<details>
  <summary>由于1个内存单元可存放__位数据，CPU 中的寄存器又可存放n个8位的数据。也就是说，计算机的数据大多是由1~N个__位数据构成的。很多时候，需要直观的看出组成数据的各个__数据的值，用__进制来表示数据可以直观的看出这个数据是由哪些__位数据构成的。</summary>
  <div>8 8 字节 十六 8</div>
</details>

<details>
  <summary>为了区分不同的进制，在十六进制表示的数据的后面加__，在二进制表示的数据的后面加__，在十进制表示的数据的后面加__。例如: 十进制: 2000，十六进制: 4E20H，二进制: 0100111000100000B</summary>
  <div>H B 个屁</div>
</details>

### 2.3 几条汇编指令

<details>
  <summary>说明一下汇编指令: mov ax,18</summary>
  <div>将18送入寄存器AX</div>
</details>

<details>
  <summary>说明一下汇编指令: mov ah,78</summary>
  <div>将78送入寄存器AH</div>
</details>

<details>
  <summary>说明一下汇编指令: add ax,8</summary>
  <div>将寄存器AX中的数值加上8</div>
</details>

<details>
  <summary>说明一下汇编指令: add ax,bx</summary>
  <div>将AX和BX中的数值相加，结果存在AX中</div>
</details>

## 2.4 物理地址

<details>
  <summary>所有的内存单元构成的存储空间是一个__维的__性空间，每一个内存单元在这个空间都有唯一的地址，我们将这个唯一的地址称为__</summary>
  <div>一 线 物理地址</div>
</details>

### 2.5 16位结构的CPU

<details>
  <summary>16位结构的CPU有哪三个特性</summary>
  <div>-运算器一次最多可以处理16位的数据</div>
  <div>-寄存器最大宽度为16位</div>
  <div>-寄存器和运算器之间的通路为16位</div>
</details>

### 2.6 8086CPU 给出物理地址的方法

<details>
  <summary>当8086CPU 要读写内存时: （1）CPU 中的相关部件提供__个__位的地址，一个称为_A_，另一个称为_B_；（2）_A_和_B_通过内部__送入一个称为_C_的部件；（3）_C_将两个__位地址合成为一个__位的物理地址；（4）_C_通过内部总线将__位物理地址送入_D_；（5）_D_将__位物理地址送上_E_；（6）__位物理地址被_E_送到__；</summary>
  <div>A：段地址；B：偏移地址；C：地址加法器；D：输入输出控制电路；E：地址总线</div>
  <div>（1）2 16</div>
  <div>（2）总线</div>
  <div>（3）16 20</div>
  <div>（4）20</div>
  <div>（5）20</div>
  <div>（6）存储器</div>
</details>

### 2.7 “段地址x16+偏移地址=物理地址”的本质含义

<details>
  <summary>物理地址=__+__</summary>
  <div>基础地址 偏移地址</div>
</details>

<details>
  <summary>地址加法器采用物理地址=__x16+__的方法用段地址和偏移地址合成物理地址。</summary>
  <div>段地址 偏移地址</div>
</details>

### 2.9 段寄存器

<details>
  <summary>8086CPU 有__个段寄存器：__、__、__、__。当8086CPU 要访问内存时由这__个段寄存器提供内存单元的__。</summary>
  <div>4 CS DS SS ES 段地址</div>
</details>

### 2.10 CS和IP

<details>
  <summary>CS和IP是8086CPU 中两个最关键的__，它们指示了CPU 当前要读取指令的地址。CS为__段寄存器，IP为__寄存器。</summary>
  <div>寄存器 代码 指令指针</div>
</details>

### 2.11 修改CS、IP的指令

<details>
  <summary>在 CPU 中，程序员能够用__读写的部件只有_A_，程序员可以通过改变_A_中的内容实现对 CPU 的控制。CPU 从何处执行指令是由 _B_、_C_ 中的内容决定的，程序员可以通过改变_B_、_C_ 中的内容来控制CPU的执行目标指令。</summary>
  <div>指令</div>
  <div>A：寄存器；B：CS；C：IP；</div>
</details>

<details>
  <summary>8086CPU 大部分寄存器的值，都可以通过_A_指令来改变，_A_指令被称为__指令。</summary>
  <div>A：mov</div>
  <div>传送</div>
</details>

<details>
  <summary>__指令不能用于设置CS、IP的值。能够改变CS、IP的内容的指令被统称为__指令。</summary>
  <div>mov 转移</div>
</details>

<details>
  <summary>一个最简单的可以修改CS、IP的指令是__指令。</summary>
  <div>jmp</div>
</details>

<details>
  <summary>若想同时修改CS、IP的内容，可用形如“jmp __: __”的指令完成。</summary>
  <div>段地址 偏移地址</div>
</details>

<details>
  <summary>若想仅修改IP的内容，可用形如“jmp __”的指令完成。</summary>
  <div>某一合法寄存器</div>
</details>

### 2.12 代码段

<details>
  <summary>在编程时，可以根据需要，将一组内存单元定义为一个代码段。存在一组地址__、起始地址为__的倍数的内存单元中，我们可以认为，这段内存是用来存放代码的。</summary>
  <div>连续 16</div>
</details>

### 实验1 查看CPU和内存，用机器指令和汇编指令编程

<details>
  <summary>我们用到的Debug功能：(1) 用 Debug 的__命令查看、改变CPU寄存器的内容；(2) 用 Debug 的__命令查看内存中的内容；(3) 用 Debug 的__命令改写内存中的内容；(4) 用 Debug 的__命令将内存中的机器指令翻译成汇编指令；(5) 用 Debug 的__命令执行一条机器指令；(6) 用 Debug 的__命令以汇编指令的格式在内存中写入一条机器指令。</summary>
  <div>(1) R</div>
  <div>(2) D</div>
  <div>(3) E</div>
  <div>(4) U</div>
  <div>(5) T</div>
  <div>(6) A</div>
</details>

## 3 章 寄存器（内存访问）

### 3.1 内存中字的储存

<details>
  <summary>8086CPU 中，用__位寄存器来储存一个字，高8位存放__，低8位存放__。</summary>
  <div>16 高位字节 低位字节</div>
</details>

<details>
  <summary>在内存中储存时，由于内存单元是__单元，则一个字要用__个地址连续的内存单元存放，这个字的低位字节存放在__单元中，高位字节存放在__单元中。</summary>
  <div>字节 2 低地址 高地址</div>
</details>

<details>
  <summary>字单元，即存放一个__的内存单元，由__个地址连续的内存单元组成。__内存单元中存放字型数据的高位字节，__内存单元中存放字型数据的低位字节。</summary>
  <div>字型数据（16位） 2 高地址 低地址</div>
</details>

### 3.2 DS和[address]

<details>
  <summary>8086CPU 中有一个__寄存器，通常用来存放要访问数据的段地址。</summary>
  <div>DS</div>
</details>

### 3.6 栈

<details>
  <summary>栈是一种具有特殊的__的存储空间。</summary>
  <div>访问方式</div>
</details>

<details>
  <summary>入栈就是讲一个新的元素放到__，出栈就是从__取出一个元素。</summary>
  <div>栈顶</div>
</details>

<details>
  <summary>LIFO的英文和中文全称。</summary>
  <div>Last In First Out</div>
  <div>后进先出</div>
</details>

### 3.7 CPU 提供的栈机制

<details>
  <summary>现今的 CPU 中都有栈的设计，8086 CPU 最基本的两个栈指令是__和__。8086CPU 的入栈和出栈操作都是以__为单位进行的。</summary>
  <div>PUSH(入栈) POP(出栈) 字</div>
</details>

<details>
  <summary>栈顶的段地址存放在_A_中，偏移地址存放在_B_中。任意时刻，_A_:_B_ 指向__元素。</summary>
  <div>A:SS B:SP 栈顶</div>
</details>

<details>
  <summary>执行 push 时，CPU 的两步操作是：先改变_A_，后向 _B_:_A_ 处传送。执行 pop 时，CPU 的两步操作是：先读取_B_:_A_ 处的数据，后改变_A_。</summary>
  <div>A:SP B:SS</div>
</details>

### 3.10 栈 段

<details>
  <summary>我们可以将一段内存定义为一个__，用一个段地址指示段，用偏移地址访问段内的单元。</summary>
  <div>段</div>
</details>

<details>
  <summary>我们可以用一个段存放数据，将它定义为“__”；我们可以用一个段存放代码，将它定义为“__”；我们可以用一个段存放栈，将它定义为“__”；</summary>
  <div>数据段 代码段 栈段</div>
</details>

<details>
  <summary>我们可以将长度为 N(N<=__KB)的一组地址连续、起始地址为 __ 倍数的内存单元。</summary>
  <div>64 16</div>
</details>

## 4 第一个程序

### 4.1 一个源程序从写出到执行的过程

<details>
  <summary>使用__对源程序文件中的源程序进行编译，产生_A_文件；再用__程序对_A_文件进行连接，生成可以在操作系统中直接运行的__文件。</summary>
  <div>汇编编译器 A:目标 连接 可执行</div>
</details>

### 4.2 源程序

<details>
  <summary>_A_和_B_是一对成对使用的伪指令，这是在写可被编译器编译的汇编程序时，__要用到的一对伪指令。_A_和_B_ 的功能是定义一个__，__说明一个段的开始，__说明一个段的结束。</summary>
  <div>A:segment B:ends 必须</div>
  <div>段 segment ends</div>
</details>

<details>
  <summary>一个汇编程序是由__个段组成的，这些段被用来存放__、__或当做__来使用。</summary>
  <div>多 代码 数据 栈空间</div>
</details>

<details>
  <summary>_A_ 是一个汇编程序结束的标记，编译器在编译程序的过程中，如果碰到了伪指令_A_，就结束对源程序的编译。</summary>
  <div>A:end</div>
</details>

<details>
  <summary>__ 伪指令的含义为“假设”。它假设某一段寄存器的程序中的某一个用segment...ends 定义的段相关联。</summary>
  <div>assume</div>
  <div>例子:assume cs: codesg</div>
</details>

<details>
  <summary>以后可以将源程序文件中的所有内容称为_A_，将_A_中最终由计算机执行、处理的指令或数据，称为_B_。_B_最先以汇编指令的形式存在_A_中，经__、__后转变为__，储存在__文件中。</summary>
  <div>A:源程序 B:程序</div>
  <div>编译 连接 机器码 可执行</div>
</details>

<details>
  <summary>汇编源程序中，除了汇编指令和伪指令外，还有一些_A_，比如“codesg”。一个_A_指代了一个__。比如codesg在segment的前面，作为一个段的名称，这个段的名称最终将被编译、连接程序处理为一个段的__。</summary>
  <div>A:标号 地址 段地址</div>
</details>

<details>
  <summary>一个程序结束后，将 CPU 的控制权交还给使它得以运行的程序，我们称这个过程为：__。应该在__的末尾添加返回的程序段。</summary>
  <div>程序返回 程序</div>
</details>

<details>
  <summary>使程序返回的是哪两条指令?</summary>
  <div>mov ax,4c00H</div>
  <div>int 21H</div>
</details>

<details>
  <summary>一般来说，程序在编译时被编译器发现的错误称为__。运行时发生的错误是__。</summary>
  <div>语法错误 逻辑错误</div>
</details>

### 4.5 连接

<details>
  <summary>连接的作用有以下3个：</summary>
  <div>（1）当源程序很大时，可以将它分为多个源程序文件来编译，每个源程序编译成为目标文件后，再用连接程序将它们连接到一起，生产一个可执行文件；（2）程序中调用了某个库文件中的子程序，需要将这个库文件和该程序生成的目标文件连接到一起，生成一个可执行文件；（3）一个源程序编译后，得到了存有机器码的目标文件，目标文件中的有些内容还不能直接用来生成可执行文件，连接程序将这些内容处理为最终的可执行信息。所以，只有一个源程序文件，而又不需要调用某个库中的子程序的情况下，也必须用连接程序对目标文件进行处理，生成可执行文件。</div>
</details>

### 4.9 程序执行过程的跟踪

<details>
  <summary>要使用__命令执行int 21</summary>
  <div>P</div>
</details>

## 5 [BX]和 loop 指令

### 5.2 Loop 指令

<details>
  <summary>CPU 执行 loop 指令的时候，要进行两步操作：</summary>
  <div>（1）(cx)=(cx)-1</div>
  <div>（2）判断 cx 中的值，不为零则转至标号处执行程序，如果为零则向下执行。</div>
</details>

### 5.3 在 Debug 中跟踪用 loop 指令实现的循环程序

<details>
  <summary>循环程序段从 CS:0012 开始，cs:0012 前面的指令，我们不想再一步步地跟踪，希望能够一次执行完，然后从 cs:0012 处开始跟踪。可以使用 __ 命令，“__”，它表示执行程序到当前代码段（段地址在CS中）的 0012h 处。</summary>
  <div>g 0012</div>
</details>

<details>
  <summary>我们希望将循环一次执行完，可以使用_A_命令来达到目的。遇到loop 指令时，使用_A_命令来执行，Debug 就会自动重复执行循环中的指令。</summary>
  <div>p</div>
</details>

### 5.6 段前缀

<details>
  <summary>用于显式地指明内存单元的段地址的“ds:” “cs:” “ss:” “es:”，在汇编语言中称为__。</summary>
  <div>段前缀</div>
</details>

### 5.7 一段安全的空间

<details>
  <summary>在一般的PC机中，DOS 方式下，DOS 和其他合法的程序一般都不会使用__~__(__h~__h)的__个字节的空间。</summary>
  <div>0:200 0:2ff</div>
  <div>00200 002ff</div>
  <div>256</div>
</details>

## 6 包含多个段的程序

<details>
  <summary>程序取得所需空间的方法有两种:</summary>
  <div>1. 在加载程序的时候为程序分配</div>
  <div>2. 程序在执行的过程中向系统申请</div>
</details>

<details>
  <summary>大多数有用的程序，都要处理数据，使用栈空间，当然也都必须有指令，为了程序设计上的__和__，我们一般也都定义不同的段来存放它们。</summary>
  <div>清晰 方便</div>
</details>

<details>
  <summary>“dw”的含义是定义__数据。dw 即“define word”</summary>
  <div>字型</div>
</details>

<details>
  <summary>end 伪指令除了通知编译器程序结束外，还可以通知编译器程序的__在什么地方。</summary>
  <div>入口</div>
</details>

## 7 更灵活的定位内存地址的方法

### 7.1 and 和 or 指令

<details>
  <summary>and 指令：逻辑__指令，按位进行__运算。</summary>
  <div>与 与</div>
</details>

<details>
  <summary>or 指令：逻辑__指令，按位进行__运算。</summary>
  <div>或 或</div>
</details>

### 7.4 大小写转换的问题

<details>
  <summary>小写字母的 ASCII 码值比大写字母的 ASCII 码值大__H</summary>
  <div>20</div>
</details>

### 7.5 [bx+idata]

<details>
  <summary>我们看一下指令 mov ax,[bx+200]的含义：将一个内存单元的内容送入 ax，这个内存单元的长度为__个字节（__单元），存放一个__，偏移地址为 bx 中的数值加上 200，段地址在 __ 中。</summary>
  <div>2 字 字 ds</div>
</details>

<details>
  <summary>mov ax,[bx+200] 还有哪些书写方式？</summary>
  <div>mov ax,[200+bx]</div>
  <div>mov ax,200[bx]</div>
  <div>mov ax,[bx].200</div>
</details>

### 7.6 用[bx+idata]的方式进行数组的处理

<details>
  <summary>有了[bx+idata]这种表示__的方式，我们就可以用更高级的结构来看待所要处理的数据。</summary>
  <div>内存单元</div>
</details>

### 7.7 SI 和 DI

<details>
  <summary>si 和 di 是 8086CPU 中和 bx 功能相近的寄存器，si 和 di 不能够分成__寄存器来使用。</summary>
  <div>两个8位</div>
</details>

### 7.8 [bx+si]和[bx+di]

<details>
  <summary>mov ax,[bx+si] 还有哪些书写方式？</summary>
  <div>mov ax,[bx][si]</div>
</details>

### 7.9 [bx+si+idata]和[bx+di+idata]

<details>
  <summary>mov ax,[bx+si+200] 还有哪些书写方式？</summary>
  <div>mov ax,[bx+200+si]</div>
  <div>mov ax,[200+bx+si]</div>
  <div>mov ax,200[bx][si]</div>
  <div>mov ax,[bx].200[si]</div>
  <div>mov ax,[bx][si].200</div>
</details>

### 7.10 不同的寻址方式的灵活应用

<details>
  <summary>程序中经常需要进行数据的暂存，因为寄存器__有限，每个程序中可使用的寄存器都__。所以把数据暂存到__中是一个通用的解决方案。</summary>
  <div>数量 不一样 内存</div>
</details>

<details>
  <summary>用内存单元来暂存数据，需要记住数据放到了哪个单元中，但是这样很容易__。一般来说，在需要暂存数据的时候，我们都应该使用__.</summary>
  <div>混乱 栈</div>
</details>

## 8 数据处理的两个基本问题

<details>
  <summary>计算机是进行数据处理、运算的机器，那么数据处理的两个基本问题是：</summary>
  <div>（1）处理的数据在什么地方？</div>
  <div>（2）要处理的数据有多长？</div>
</details>

<details>
  <summary>为了描述上的简洁，我们使用两个描述性的符号__来表示一个寄存器，用__表示一个段寄存器。</summary>
  <div>reg sreg</div>
</details>

<details>
  <summary>reg 的合集包括：__；sreg 的合集包括：__</summary>
  <div>ax、bx、cx、dx、ah、al、bh、bl、ch、cl、dh、dl、sp、bp、si、di</div>
  <div>ds、ss、cs、es</div>
</details>

## 8.1 bx、si、di 和 bp

<details>
  <summary>在8086CPU 中，只有__、__、__、__4个寄存器可以用在“[...]”中来进行内存单元的寻址。</summary>
  <div>bx si di bp</div>
</details>

<details>
  <summary>在[...]中，这4个寄存器可以单个出现，或只能以4种组合出现：bx和__、bx和__、bp和__、bp和__。</summary>
  <div>si di si di</div>
</details>

<details>
  <summary>只要在[...]中使用寄存器 bp，而指令没有显示的给出段地址，段地址就默认在__中。</summary>
  <div>ss</div>
</details>

## 8.2 机器指令处理的数据在什么地方

<details>
  <summary>绝大部分机器指令都是进行数据处理的指令，处理大致可分为3类：__、__、__。</summary>
  <div>读取 写入 运算</div>
</details>

<details>
  <summary>指令在执行前，所要处理的数据可以在 3 个地方：__、__、__。</summary>
  <div>CPU内部 内存 端口</div>
</details>

## 8.3 汇编语言中数据位置的表达

<details>
  <summary>汇编语言中用3个概念来表达数据的位置：__、__、__。</summary>
  <div>立即数(idata) 寄存器 段地址(SA)和偏移地址(EA)</div>
</details>

<details>
  <summary>对于直接包含在机器指令中的数据（执行前在CPU的__中），在汇编语言中称为：__</summary>
  <div>指令缓冲器 立即数(idata)</div>
</details>

## 8.4 寻址方式

<details>
  <summary>当数据存放在内存中的时候，我们可以用多种方式来给定这个内存单元的偏移地址，这种定位内存单元的方法一般被称为__。</summary>
  <div>寻址方式</div>
</details>

<details>
  <summary>主要有5种寻址方式：__、__、__、__、__。分别举例：</summary>
  <div>直接寻址 寄存器间接寻址 寄存器相对寻址 基址变址寻址 相对基址变址寻址</div>
  <div>[idata]</div>
  <div>[bx]</div>
  <div>[bx].idata</div>
  <div>[bx][si]</div>
  <div>[bx].idata[si]</div>
</details>

## 8.5 指令要处理的数据有多长

<details>
  <summary>8086CPU 的指令，可以处理两种尺寸的数据，__ 和 __。所以机器指令中要指明，指令进行的是__操作还是__操作。</summary>
  <div>byte word</div>
  <div>字 字节</div>
</details>

<details>
  <summary>通过__指明要处理的数据的尺寸。</summary>
  <div>寄存器名</div>
</details>

<details>
  <summary>在没有寄存器名的存在的情况下，用操作符 X __ 指明内存单元的长度，X 在汇编指令中可以为__ 或 __。</summary>
  <div>ptr word byte</div>
  <div>例子:</div>
  <div>mov word ptr ds:[0],1</div>
  <div>inc word ptr [bx]</div>
  <div>inc word ptr ds:[0]</div>
  <div>mov type ptr ds:[0],1</div>
</details>

<details>
  <summary>有些指令默认了访问的是字单元还是字节单元，比如 __。</summary>
  <div>push</div>
</details>

## 8.6 寻址方式的综合应用

## 8.7 div指令

<details>
  <summary>__是除法指令。</summary>
  <div>div</div>
</details>

<details>
  <summary>除数：有__位和__位两种，在一个__或__中。</summary>
  <div>8 16 reg 内存单元</div>
</details>

<details>
  <summary>被除数：默认放在 __ 或 __ 和 __ 中，如果除数为 8 位，被除数则为 __ 位，默认在 __ 中存放；如果除数为 16 位，被除数则为 __ 位，在 __ 和 __ 中存放， __ 存放高 16 位， __ 存放低 16 位。</summary>
  <div>AX DX AX 16 AX</div>
  <div>32 DX AX DX AX</div>
</details>

<details>
  <summary>结果：如果除数为 8 位，则 __ 存储除法操作的商，__ 存储除法操作的余数；如果除数为 16 位，则 __ 存储除法操作的商，__ 存储除法操作的余数。</summary>
  <div>AL AH</div>
  <div>AX DX</div>
</details>

## 8.8 伪指令 dd

<details>
  <summary>前面我们用 db 和 dw 定义__数据和__数据。__是用来定义 dword(double word，双字)型数据的。</summary>
  <div>字节型 字型</div>
  <div>dd</div>
</details>

## 8.9 dup

<details>
  <summary>__ 是一个操作符，用来进行数据的重复。</summary>
  <div>dup</div>
</details>

<details>
  <summary>db 2 dup (0,1,2)：定义了__个字节，0、1、2、0、1、2，相当于 db __</summary>
  <div>6 0,1,2,0,1,2</div>
</details>

## 9 转移指令原理

<details>
  <summary>可以修改 IP，或同时修改 CS 和 IP 的指令统称为_A_指令。_A_指令就是可以控制 __ 执行内存中某处代码的指令。</summary>
  <div>A:转移 CPU</div>
</details>

<details>
  <summary>只修改 IP 时，称为__转移。同时修改 CS 和 IP 时，称为__转移。</summary>
  <div>段内 段间</div>
</details>

<details>
  <summary>由于转移指令对 IP 的修改范围不同，段内转移又分为: _A_转移和_B_转移。_A_转移 IP 的修改范围为__；_B_转移 IP 的修改范围为</summary>
  <div>A:短 B:近</div>
  <div>-128~127</div>
  <div>-32768~32767</div>
</details>

<details>
  <summary>8086CPU 的转移指令分为几类：__、__、__、__、__。</summary>
  <div>无条件转移指令</div>
  <div>条件转移指令</div>
  <div>循环指令</div>
  <div>过程</div>
  <div>中断</div>
</details>

## 9.1 操作符 offset

<details>
  <summary>操作符 __ 在汇编语言中是由编译器处理的符号，它的功能是取得标号的偏移地址。</summary>
  <div>offset</div>
  <div>例子:mov ax,offset s</div>
</details>

## 9.3 依据位移进行转移的 jmp 指令

<details>
  <summary>jmp __ 标号(转到标号处执行指令)。这种格式的 jmp 指令实现的是__转移，它对 IP 的修改范围为-__~__。jmp 指令中的“short”符号，说明指令进行的是__转移。jmp 指令中的“标号”是__段中的标号，指明了指令要转移的目的地，转移指令结束后，__:__应该指向标号处的指令。</summary>
  <div>short</div>
  <div>段内短 128 127</div>
  <div>短</div>
  <div>代码 CS IP</div>
</details>

## 9.4 转移的目的地址在指令中的jmp的指令

<details>
  <summary>前面讲的 “jmp short 标号” 指令，其对应的机器指令中并没有转移的目的地址，而是相对于当前的 __ 的转移位移。</summary>
  <div>IP</div>
</details>

<details>
  <summary>“jmp __ __ 标号”实现的是__转移，又称远转移。(__)=标号所在段的段地址；(__)=标号在段中的偏移地址。</summary>
  <div>far ptr 段间</div>
  <div>CS IP</div>
</details>

## 9.5 转移地址在寄存器中的 jmp 指令

<details>
  <summary>指令格式：jmp __；功能：(IP)=(__)。</summary>
  <div>16位reg</div>
</details>

## 9.6 转移地址在内存中的 jmp 指令

<details>
  <summary>转移地址在内存中的 jmp 指令有__种格式：</summary>
  <div>两</div>
</details>

<details>
  <summary>(1)jmp __ 内存单元地址(段__转移)。功能：从内存单元地址处开始存放着一个字，是转移目的的偏移地址。内存单元地址可用寻址方式的任一格式给出。</summary>
  <div>word ptr 内</div>
</details>

<details>
  <summary>(2)jmp __ 内存单元地址(段__转移)。功能：从内存单元地址处开始存放着两个字，高地址处的字是转移的目的段地址，低地址处是转移的目的偏移地址。</summary>
  <div>dword ptr 间</div>
</details>

## 9.7 **** 指令

<details>
  <summary>__ 指令为条件转移指令，所有的有条件转移指令都是__转移，在对应的机器码中包含转移的__，而不是目的地址。对 IP 的修改范围都为：-__~__。</summary>
  <div>jcxz 短 位移 128 127</div>
</details>

<details>
  <summary>指令格式：jcxz 标号(如果(__)=0，转移到标号处执行。)。操作：当(cx)=0时，(IP)=(IP) + 8位位移。8位位移=标号处的地址 - jcxz指令后的第一个字节的地址；8位位移的范围为 - 127~128，用__表示；8位位移由编译程序在__时算出。当(cx)不等于__时，程序向下执行。</summary>
  <div>cx 补码 编译 0</div>
</details>

## 9.8 **** 指令

<details>
  <summary>__ 指令为循环指令，所有的循环指令都是__转移，在对应的机器码中包含转移的__，而不是目的地址。对 IP 的修改范围都为：-__~__。</summary>
  <div>loop 短 位移 128 127</div>
</details>

<details>
  <summary>指令格式：loop 标号。操作：(1) (cx)=(cx)-__；如果(cx)≠0时，(IP)=(IP) + 8位位移。8位位移=标号处的地址 - loop指令后的第一个字节的地址；8位位移的范围为 - 127~128，用__表示；8位位移由编译程序在__时算出。当(cx)=__时，程序向下执行。</summary>
  <div>cx 1 补码 编译 0</div>
</details>

## 10 CALL 和 RET 指令

### 10.1 ret 和 retf

<details>
  <summary>__ 指令用栈中的数据，修改 IP 的内容，从而实现远转移；__ 指令用栈中的数据，修改 CS 和 IP 的内容，从而实现远转移。</summary>
  <div>ret</div>
  <div>retf</div>
</details>

<details>
  <summary>CPU 执行 ret 指令时，进行2步操作：(1) (IP)=((__)*16+(__))；(2) (__)=(__)+2</summary>
  <div>ss sp</div>
  <div>sp sp</div>
</details>

<details>
  <summary>CPU 执行 retf 指令时，进行4步操作：(1) (IP)=((__)*16+(__))；(2) (__)=(__)+2；(3) (__)=((ss)*16+(sp))；(4) (sp)=(sp)+2</summary>
  <div>ss sp</div>
  <div>sp sp</div>
  <div>CS</div>
</details>

### 10.2 call 指令

<details>
  <summary>CPU 执行 call 指令时，进行2步操作：(1) 将当前的 __ 或 __ 和 __ 压入栈中； (2) 转移。</summary>
  <div>IP</div>
  <div>CS IP</div>
</details>

<details>
  <summary>call 指令不能实现__转移，除此之外，call 指令实现转移的方法和 jmp 指令的原理相同。</summary>
  <div>短</div>
</details>

### 10.3 依据位移进行转移的 call 指令

<details>
  <summary>call 标号(将当前的 __ 压栈后，转到标号处执行指令)</summary>
  <div>IP</div>
</details>

<details>
  <summary>CPU 执行此格式的 call 指令时，进行如下的操作：（1）(_A_)=(_A_)-2 ((__)*16+(__)=IP) （2）(IP)=(IP)+16 位位移。16 位位移=标号处的地址 - call 指令后的第一个字节地址； 16 位位移的范围为-32768~32767，用补码表示；16 位位移由编译程序在编译时算出。</summary>
  <div>A:sp ss sp</div>
</details>

<details>
  <summary>CPU 执行 “call 标号”时，相当于进行: __ IP; __ __ ptr 标号</summary>
  <div>push jmp near</div>
</details>

### 10.4 转移的目的地址在指令中的 call 指令

<details>
  <summary>“call __ __ 标号” 实现的是段间转移。</summary>
  <div>far ptr</div>
</details>

<details>
  <summary>CPU 执行此种格式的 call 指令时，进行如下的操作。(1) (sp)=(sp)-2 ((ss)*16+(sp))=(__) (sp)=(sp)-2 ((ss)*16+(sp))=(__) (2) (CS)=标号所在段的段地址 (IP)=标号在段中的偏移地址</summary>
  <div>CS IP</div>
</details>

<details>
  <summary>CPU 执行 “call far ptr 标号”时，相当于进行: __ IP; __ CS; __ __ ptr 标号</summary>
  <div>push push</div>
  <div>jmp far</div>
</details>

### 10.5 转移地址在寄存器中的 call 指令

<details>
  <summary>指令格式: call __位reg</summary>
  <div>16</div>
</details>

<details>
  <summary>功能: (sp)=(sp)-2 ((ss)*16+(sp))=(IP) (IP)=(__)</summary>
  <div>16位reg</div>
</details>

<details>
  <summary>用汇编语法来解释此种格式的 call 指令，CPU 执行 “call 16位reg” 时，相当于进行: push IP jmp 16位reg</summary>
  <div>16位reg</div>
</details>

### 10.6 转移地址在内存中的 call 指令

<details>
  <summary>(1)call __ ptr 内存单元地址。相当于进行: push IP; __ word ptr 内存单元地址。</summary>
  <div>word</div>
  <div>jmp</div>
</details>

<details>
  <summary>(2)call __ ptr 内存单元地址。相当于进行: push __; push __; jmp dword ptr 内存单元地址。</summary>
  <div>dword</div>
  <div>CS IP</div>
</details>

### 10.8

<details>
  <summary>_A_ 是乘法指令，使用 _A_ 做乘法的时候，注意一下两点：(1)两个相乘的数，要么都是8位，要么都是16位。如果是8位，一个默认放在 __ 中，另一个放在8位__或内存__单元中；如果是16位，一个默认在__中，另一个放在 16位reg或内存__单元中。</summary>
  <div>A:mul</div>
  <div>AL reg 字节</div>
  <div>AX 字</div>
</details>

<details>
  <summary>格式：mul __；mul __</summary>
  <div>reg</div>
  <div>内存单元</div>
</details>

## 11 标志寄存器

<details>
  <summary>CPU 内部的寄存器中，有一种特殊的寄存器(对于不同的处理机，个数和结构都可能不同)具有以下3种作用。(1) 用来储存相关指令的某些执行__；(2) 用来为 CPU 执行相关指令提供__；(3) 用来控制 CPU 的相关__；</summary>
  <div>结果</div>
  <div>行为依据</div>
  <div>工作方式</div>
</details>

<details>
  <summary>这样特殊的寄存器在8086CPU 中，被称为__。8086CPU 的标志寄存器有__位，其中储存的信息通常被称为__(PSW)。我们已经使用过 8086CPU 的 ax、bx、cx、dx、si、di、bp、sp、IP、cs、ss、ds、es 等13个寄存器了，本章中的标志寄存器(以下简称为 __)是我们要学习的最后一个寄存器。</summary>
  <div>标志寄存器 16 程序状态字 flag</div>
</details>

<details>
  <summary>flag 和其他寄存器不一样，其他寄存器是用来存放__的，都是整个寄存器具有一个含义。而flag寄存器是按__起作用的，也就是说，它的每一位都有专门的含义，记录特定的信息。</summary>
  <div>数据 位</div>
</details>

### 11.1 ZF标志

<details>
  <summary>flag 的第__位是ZF，__标志位。它记录相关指令执行后，其结果是否为0。如果结果为零，那么zf=__；如果结果不为0，那么 zf=__。</summary>
  <div>6 零 1 0</div>
</details>

### 11.2 PF标志

<details>
  <summary>flag 的第__位是PF，__标志位。它记录相关指令执行后，其结果的所有bit位中1的个数是否为偶数。如果1的个数为偶数，pf=__1，如果为奇数，那么pf=__。</summary>
  <div>3 奇偶 1 0</div>
</details>

### 11.3 SF标志

<details>
  <summary>flag 的第__位是SF，__标志位。它记录相关指令执行后，其结果是否为负。如果结果为负，sf=__；如果非负，sf=__。</summary>
  <div>3 符号 1 0</div>
</details>

### 11.4 CF标志

<details>
  <summary>flag 的第__位是CF，__标志位。一般情况下，在进行无符号数运算的时候，它记录了运算结果的最高有效位向更高位的进位值，或从更高的借位值。</summary>
  <div>0 进位</div>
</details>

### 11.10 DF标志和串传送指令

<details>
  <summary>flag 的第__位是DF，__标志位。在串处理指令中，控制每次操作后si、di的增减。df=0，每次操作后si、di递增；df=1，每次操作后si、di递减。</summary>
  <div>10 方向</div>
</details>

## 12 内中断

<details>
  <summary>任何一个通用的 CPU，比如 8086，都具备一种能力，可以在执行完当前正在执行的指令之后，检测到从 CPU 外部发送过来的或内部产生的一种特殊信息，并且可以立即对所接收到的信息进行处理。这种特殊的信息，我们可以称其为：__。__的意思是指，CPU 不再接着（刚执行完的指令）向下执行，而是转去处理这个特殊的信息。</summary>
  <div>中断信息 中断</div>
</details>

### 12.1 内中断的产生

<details>
  <summary>对于8086CPU，当CPU内部有下面的情况发生的时候，将产生相应的中断信息。(1) __错误，比如，执行 div 指令产生的除法溢出；(2) 单步执行；(3) 执行 __ 指令；(4) 执行 __ 指令。</summary>
  <div>除法 info int</div>
</details>

<details>
  <summary>8086CPU 用称为_A_的数据来标识中断信息的来源。_A_为一个__型数据，可以表示 256 种中断信息的来源。以后，我们将产生中断信息的事件，即中断信息的来源，简称为__，上述的 4 种中断源，在8086 CPU中的中断类型码如下：(1) 除法错误：__ (2) 单步执行：__ (3) 执行into 指令：__ (4) 执行 int 指令，该指令的格式为 int n，指令中的 n 为字节型__，是提供给CPU的中断类型码。</summary>
  <div>A:中断类型码 字节 中断源</div>
  <div>0 1 4 立即数</div>
</details>

## 14 端口

<details>
  <summary>各种寄存器都和 CPU 的地址线、数据线、控制线相连。CPU 在操控它们的时候，把它们都当作__来对待，把它们总地看做一个由若干存储单元组成的__存储器，这个逻辑存储器我们称其为__。</summary>
  <div>内存 逻辑 内存地址空间</div>
</details>

<details>
  <summary>在 PC 机系统中，和 CPU 通过总线相连的芯片除了各种存储器外，还有3种芯片。 (1)各种__(比如, 网卡、显卡)上的接口芯片，它们控制接口卡进行工作; (2) __上的接口芯片，CPU 通过它们对部分外设进行访问; (3)__芯片，用来存储相关的系统信息，或进行相关的输入输出处理。</summary>
  <div>接口卡 主板 其他</div>
</details>

<details>
  <summary>在这些芯片中，都有一组可以由 CPU 读写的_A_。这些_A_，它们在物理上可能处于不同的芯片中，但是它们在以下两点上相同。(1) 都和 CPU 的__相连，当然这种连接是通过它们所在的芯片进行的; (2) CPU 对它们进行读或写的时候都通过__向它们所在的芯片发出端口读写指令。</summary>
  <div>A:寄存器 总线 控制线</div>
</details>

### 14.1 端口的读写

<details>
  <summary>在访问端口的时候, CPU 通过端口地址来定位端口。因为端口所在的芯片和 CPU 通过总线相连，所以，端口地址和内存地址一样，通过地址总线传送。在 PC 系统中，CPU 最多可以定位 __KB 个不同的端口。则端口地址的范围为 __~__</summary>
  <div>64 0 65535</div>
</details>

<details>
  <summary>对端口的读写不能用 mov、push、pop 等内存读写的指令。端口的读写指令只有2条: __ 和 __, 分别用于端口读取的数据和往端口写入数据。</summary>
  <div>in out</div>
</details>

<details>
  <summary>在 in 和 out 指令中, 只能使用 __ 或 __ 来存放从端口中读入的数据或要发送到端口中的数据。访问 8 位端口时用 __, 访问 16 位端口时用 __。</summary>
  <div>ax al</div>
  <div>al ax</div>
</details>

<details>
  <summary>解释一下指令: (1) in al,20h (2) out 20h,al</summary>
  <div>(1)从 20h 端口读入一个字节</div>
  <div>(2)往 20h 端口写入一个字节</div>
</details>

### 14.2 CMOS RAM 芯片

<details>
  <summary>PC 机中，有一个 CMOS RAM 芯片，一般简称为 CMOS。(1) 包含一个实时钟和一个有 128 个存储单元的 RAM 存储器。(2) 该芯片靠__供电。(3) 128 个字节的 RAM 中，内部实时钟占用 0~0dh 单元来保存时间信息，其余大部分单元用于保存系统配置信息，供系统启动时 BIOS 程序读取。</summary>
  <div>电池</div>
</details>

### 14.3 逻辑位移指令

<details>
  <summary>__ 和 __ 是逻辑位移指令</summary>
  <div>shl shr</div>
</details>

<details>
  <summary>__ 是逻辑左移指令，它的功能为：(1) 将一个寄存器或内存单元中的数据向左移动; (2) 将最后移出的一位写入 CF 中; (3) 最低位用 0 补充。</summary>
  <div>shl</div>
  <div>例子: mov al,01001000b; shl al,1。执行后(al)=10010000b, CF=0。</div>
</details>

<details>
  <summary>如果移动位数大于 1 时, 必须将移动位数放在 __ 中。将 X 逻辑左移一位，相当于执行 X=X*__。</summary>
  <div>cl 2</div>
  <div>例子: mov al,01010001b; mov cl,3 shl al,cl</div>
</details>

## 15 外中断

<details>
  <summary>外设的输入不直接送入内存和 CPU，而是送入相关的接口芯片的_A_中；CPU 向外设的输出也不是直接送入外设，而是先送入_A_中，再由相关的芯片送到外设。</summary>
  <div>端口</div>
</details>

### 15.2 外中断信息

<details>
  <summary>外设随时都可能发生需要 CPU 及时处理的事件，CPU 提供__机制来满足这种需要。</summary>
  <div>中断</div>
</details>

<details>
  <summary>在 PC 系统中，外中断源一共有以下两类。1. __中断 2. __中断。</summary>
  <div>可屏蔽</div>
  <div>不可屏蔽</div>
</details>

<details>
  <summary>_A_中断是 CPU 可以不响应的外中断。CPU 是否响应_A_中断，要看标志寄存器的 __ 位的设置。当 CPU 检测到可屏蔽中断信息时，如果 IF=__，则 CPU 在执行完当前指令后响应中断，引发中断过程；如果 IF=__，则不响应可屏蔽中断。</summary>
  <div>A:可屏蔽</div>
  <div>IF 1 0</div>
</details>

<details>
  <summary>内中断所引发的中断过程: (1) 取中断类型码n; (2) __寄存器入栈, __=0, __=0; (3) CS、IP入栈; (4) (IP)=(n*4), (CS)=(n*4+2)</summary>
  <div>标志</div>
  <div>IF TF</div>
</details>

<details>
  <summary>可屏蔽中断信息来自于 __ 外部，中断类型码是通过__送入 CPU 的; 而内部中断的中断类型码是在 __ 产生的。</summary>
  <div>CPU</div>
  <div>数据总线</div>
  <div>CPU内部</div>
</details>

<details>
  <summary>中断过程中将 IF 置为0的原因是: 进入中断处理程序后，__其他的可屏蔽中断。</summary>
  <div>禁止</div>
</details>

<details>
  <summary>8086 CPU提供的设置 IF 的指令如下: __, 设置IF=1; __, 设置IF=0</summary>
  <div>sti</div>
  <div>cli</div>
</details>

<details>
  <summary>当 CPU 检测到不可屏蔽中断信息时, 则在__后, 立即响应, 引发中断过程。</summary>
  <div>执行完当前指令</div>
</details>

<details>
  <summary>对于 8086CPU, 不可屏蔽中断的中断类型固定为2。则不可屏蔽中断的中断过程为: (1) 标志寄存器入栈, IF=0, TF=0; (2) CS、IP入栈; (3) (IP)=(8), (CS)=(0AH)</summary>
  <div>无</div>
</details>

<details>
  <summary>几乎所有由外设引发的外中断，都是__中断。</summary>
  <div>可屏蔽</div>
</details>

### 15.3 PC 机键盘的处理过程

<details>
  <summary>一般将按下一个键时产生的扫描码称为__，松开一个键产生的扫描码称为__。扫描码长度为一个__，通码的第7位为0，断码的第7位为1，即: 断码=通码 + __h</summary>
  <div>通码 断码 字节 80</div>
</details>

<details>
  <summary>键盘的输入到达 __h 端口时，相关的芯片就会向 CPU 发出中断类型码为 __ 的可屏蔽中断信息。CPU 检测到该中断信息后，如果 __ = 1，则响应中断，引发中断过程，转去执行 int 9 中断历程。</summary>
  <div>60 9 IF</div>
</details>

## 16 直接定址表

### 16.1 描述了单元长度的标号

<details>
  <summary>"code segment \n a: db 1,2,3,4" "mov si,offset a" 程序中，code、a、b、start、s都是标号。这些标号仅仅表示了__的地址。</summary>
  <div>内存单元</div>
</details>

<details>
  <summary>"code segment \n a db 1,2,3,4" "mov al,a[si]" 我们可以使用一种标号，这种标号不但表示内存单元地址，还表示了内存单元的__。</summary>
  <div>长度</div>
</details>

<details>
  <summary>对于程序中的“code segment \n a db 1,2,3,4”: 指令: mov al,a[si] 相当于: mov al,__[si]</summary>
  <div>cs:0</div>
</details>

<details>
  <summary>可见，使用这种包含单元长度的标号，可以使我们以简洁的形式访问内存中的数据。以后，我们将这种标号称为__标号。它标记了存储数据的单元的地址和长度。它不同于仅仅表示地址的__标号。</summary>
  <div>数据</div>
  <div>地址</div>
</details>

### 16.2 在其它段中使用数据标号

<details>
  <summary>在后面加有“:”的地址标号，只有在__段中使用，不能再其他段中使用。</summary>
  <div>代码</div>
</details>

<details>
  <summary>如果想在代码段中直接使用数据标号访问数据，则需要用伪指令 __ 将标号所在的段和一个__联系起来。</summary>
  <div>assume</div>
  <div>段寄存器</div>
</details>

<details>
  <summary>因为这些实际编译出的指令，都默认访问单元的段地址在 __ 中，而实际要访问的段为 data，所以若要访问正确，在这些指令执行前，ds 中必须为 data 段的段地址。</summary>
  <div>ds</div>
  <div>段寄存器</div>
</details>
