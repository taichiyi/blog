<!-- markdownlint-disable MD033 -->
# 深入理解计算机系统（第3版）填空

## 第一章 计算机系统漫游

### 1.1 信息就是位+上下文

<details>
  <summary>源程序实际上就是一个由值 0 和 1 组成的_A_(又称为比特)序列，8 个_A_被组织成一组，称为字节。每个字节表示程序中的某些文本字符。</summary>
  <div>位</div>
</details>

<details>
  <summary>计算机系统中的所有信息都是由一串__表示的。区分不同数据对象的唯一方法是我们读取到这些数据对象时的__。</summary>
  <div>比特</div>
  <div>上下文</div>
</details>

<details>
  <summary>C语言是贝尔实验室的 Dennis Ritchie 于 1969-1973年间创建的。美国国家标准学会(American National Standards Institute)在1989年颁布了 __ C 的标准，后来C语言的标准化成了__标准化组织(International Standards Organization)的责任。这些标准定义了C语言和一系列函数库，即所谓的__库。</summary>
  <div>ANSI</div>
  <div>国际</div>
  <div>C标准</div>
</details>

### 1.2 程序被其他程序翻译成不同的格式

<details>
  <summary>在Unix系统上，从源文件到可行性目标文件的转化是由编译器驱动程序完成的。转化过程可分为四个阶段完成，执行这四个阶段的编译程序(__器、__器、__器、__器)一起构成了编译系统。</summary>
  <div>预处理</div>
  <div>编译</div>
  <div>汇编</div>
  <div>连接</div>
</details>

<details>
  <summary>预处理阶段。预处理器(cpp)根据以字符__开头的命令，修改原始的C程序，结果得到了另外一个C程序，通常是以 __ 作为文件拓展名。</summary>
  <div>#</div>
  <div>.i</div>
</details>

<details>
  <summary>编译阶段。编译器(ccl)将文本文件 .i 翻译成汇编语言的文本文件，后缀为 __</summary>
  <div>.s</div>
</details>

<details>
  <summary>汇编阶段。汇编器(as)将 __ 文件翻译成__，把这些指令打包成一个叫做可重定位目标程序(relocatable object program)的格式，并将结果保存在后缀为 __ 的文件中</summary>
  <div>.s</div>
  <div>机器语言指令</div>
  <div>.o</div>
</details>

<details>
  <summary>连接阶段。假设程序调用了printf函数，printf函数存在于一个名为printf.o的单独的预编译好了的目标文件中。连接器(ld)负责将相关的目标文件合并，然后得到__程序。</summary>
  <div>可执行目标</div>
</details>

### 1.4 处理器读并解释储存在内存中的指令

<details>
  <summary>在运行在Linux的 x86-64 机器上，short类型的数据需要__个字节，int和float类型需要__个字节，而long和double类型需要8个字节。</summary>
  <div>2</div>
  <div>4</div>
</details>

### 1.5 高速缓存至关重要

<details>
  <summary>从磁盘驱动器上读取一个字的时间开销要比从主存中读取的开销大__倍。处理器从寄存器文件中读取数据比从主存中读取数据几乎要快__倍。</summary>
  <div>1000万</div>
  <div>100</div>
</details>

<details>
  <summary>随着半导体技术的发展处理器和主存的速度相差越来越大。加快处理器运行速度比加快主存的运行速度要容易和便宜得多。针对处理器和主存的这种差异，系统设计者采用了更小更快的存储设备，称为__，作为暂时的集结区域，存放处理器近期可能会需要的信息。</summary>
  <div>高速缓存存储器(cache memory, 简称cache或高速缓存)</div>
</details>

<details>
  <summary>位于处理器芯片上的L1高速缓存的容量可以达到数万字节，访问速度几乎和访问寄存器文件一样快。一个容量为数十万到数百万字节的更大的L2高速缓存通过一条__连接到处理器。进程访问L2的时间比L1长__倍。L1和L2高速缓存是用一种叫做__。比较新的、处理能力更强的甚至还有三级高速缓存L3。</summary>
  <div>特殊的总线</div>
  <div>5</div>
  <div>静态随机访问存储器(SRAM)</div>
</details>

### 1.7 操作系统管理硬件

<details>
  <summary>操作系统有两个基本功能: (1)防止硬件被失控的__滥用；(2)向应用程序提供__来控制复杂而又通常不大相同的低级硬件设备。</summary>
  <div>应用程序</div>
  <div>简单一致的机制</div>
</details>

<details>
  <summary>进程是操作系统对一个正在运行的__的一种抽象。在一个系统上可以同时运行__个进程，而每个进程都好像在__地使用硬件。并发运行是指一个进程的指令和另一个进程的指令是__执行的。</summary>
  <div>程序</div>
  <div>多</div>
  <div>独占</div>
  <div>交错</div>
</details>

<details>
  <summary>无论是在单核还是多核系统中，一个CPU看上去都是在并发地执行多个进程，这是通过__在进程间切换来实现的。__实现这种交错执行的机制称为__。</summary>
  <div>处理器</div>
  <div>操作系统</div>
  <div>上下文切换</div>
</details>

<details>
  <summary>一个进程到另一个进程的转换是由__管理的</summary>
  <div>操作系统内核(kernel)</div>
</details>

<details>
  <summary>通常我们认为一个进程只有单一的控制流，但是在现代操作系统中，一个进程实际上可以由多个称为__的执行单元组成，每个线程都运行在进程的__中，并共享同样的代码和全局的数据。多线程比多进程之间更容易共享__。</summary>
  <div>线程</div>
  <div>上下文</div>
  <div>数据</div>
</details>

<details>
  <summary>虚拟内存是一个抽象的概念，它为每一个进程提供了一个假象，即每个进程都在独占地使用主存。每个进程看到的内存都是一样的，称为__。</summary>
  <div>虚拟地址空间</div>
</details>

### 1.9 重要主题

<details>
  <summary>数字计算机的整个历史中，有两个需求是驱动进步的持续动力: 一个是我们想要计算机__，另一个是我们要计算机__。</summary>
  <div>做得更多</div>
  <div>运算得更快</div>
</details>

<details>
  <summary>L1 高速缓存分为两个部分: 一个保存最近取到的__；另一个存放__。</summary>
  <div>指令</div>
  <div>数据</div>
</details>

<details>
  <summary>在较低的抽象层次上，现代处理器可以同时执行多条指令的属性称为__。</summary>
  <div>指令级并行</div>
</details>
