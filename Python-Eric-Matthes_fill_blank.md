<!-- markdownlint-disable MD033 -->
# Python编程 从入门到实践 填空

## 第 1 章 起步

<details>
  <summary>在Python中语句结尾处不需要加__。</summary>
  <div>分号</div>
</details>

<details>
  <summary>在Python中复合语句不使用花括号来标识，而是通过__。</summary>
  <div>缩进</div>
</details>

## 第 2 章 变量和简单数据类型

### 2.2 变量

<details>
  <summary>变量名只能包含__、__和__。</summary>
  <div>字母</div>
  <div>数字</div>
  <div>下划线</div>
</details>

<details>
  <summary>变量名可以__或__打头，但不能以__打头。</summary>
  <div>字母</div>
  <div>下划线</div>
  <div>数字</div>
</details>

<details>
  <summary>变量名不能包含__。</summary>
  <div>空格</div>
</details>

<details>
  <summary>慎用小写字母__和大写字母__，因为它们可能被人错看成数字1和0。</summary>
  <div>l</div>
  <div>O</div>
</details>

<details>
  <summary>根据约定，变量名应使用小写。不用驼峰用__线(_)</summary>
  <div>下划</div>
</details>

<details>
  <summary>根据约定，python文件名最好使用__写字母和__线命名。</summary>
  <div>小</div>
  <div>下划</div>
</details>

### 2.3 字符串

<details>
  <summary>字符串 就是一系列__。</summary>
  <div>字符</div>
</details>

<details>
  <summary>字符串的引号可以是__引号，也可以是__引号。</summary>
  <div>单</div>
  <div>双</div>
</details>

<details>
  <summary>字符串的__方法把每个单词的首字母大写，其他字母小写，并返回修改后的新字符串。</summary>
  <div>title</div>
</details>

<details>
  <summary>字符串的__方法把每个字母大写，并返回修改后的新字符串。</summary>
  <div>upper</div>
</details>

<details>
  <summary>字符串的__方法把每个字母小写，并返回修改后的新字符串。</summary>
  <div>lower</div>
</details>

<details>
  <summary>Python使用__号来合并(拼接)字符串</summary>
  <div>加</div>
</details>

<details>
  <summary>字符串的__方法把字符串两端的空白删除，并返回修改后的新字符串。</summary>
  <div>strip</div>
</details>

<details>
  <summary>字符串的__方法把字符串右端的空白删除，并返回修改后的新字符串。</summary>
  <div>rstrip</div>
</details>

<details>
  <summary>字符串的__方法把字符串左端的空白删除，并返回修改后的新字符串。</summary>
  <div>lstrip</div>
</details>

### 2.4 数字

<details>
  <summary>使用__方法把数字转为字符串，并返回修改后的新字符串。</summary>
  <div>str</div>
</details>

### 2.5 注释

<details>
  <summary>注释：用__号标识或三个__号。</summary>
  <div>井(#)</div>
  <div>双引(")</div>
</details>

## 第 3 章 列表简介

### 3.1 列表是什么

<details>
  <summary>列表由一系列按特定顺序排列的__组成。</summary>
  <div>元素</div>
</details>

<details>
  <summary>Python为访问最后一个列表元素提供了一种特殊语法。通过将索引指定为__。以此类推-2,-3,-4...</summary>
  <div>-1</div>
</details>

### 3.2 修改、添加和删除元素

<details>
  <summary>列表的__方法把一个新元素添加到列表的末尾。</summary>
  <div>append</div>
</details>

<details>
  <summary>列表的__方法把一个新元素添加到列表的任意位置。第一个参数是索引，第一个元素的索引为__，如果传入的索引大于列表最大的索引则添加到列表的末尾。</summary>
  <div>insert</div>
  <div>0</div>
</details>

<details>
  <summary>使用__语句把一个元素从列表中删除。</summary>
  <div>del</div>
</details>

<details>
  <summary>如果要将元素从列表中删除，并接着使用它的值。可以使用列表的__方法。只接受一个参数,为索引,默认为最后的索引</summary>
  <div>pop</div>
</details>

<details>
  <summary>如果想根据值删除列表中元素可以使用数组的__方法。方法根据索引倒序删除第一个合法的元素</summary>
  <div>remove</div>
</details>

### 3.3 组织列表

<details>
  <summary>根据字典顺序修改列表的排序，可以使用列表的__方法。</summary>
  <div>sort</div>
</details>

<details>
  <summary>根据字典顺序修改列表的排序，可以使用列表的__方法。如果要倒序，需要传入参数'__=True'</summary>
  <div>sort</div>
  <div>reverse</div>
</details>

<details>
  <summary>临时根据字典倒序修改列表的排序，可以使用函数__()。如果要倒序，需要传入参数'__=True'</summary>
  <div>sorted</div>
  <div>reverse</div>
</details>

<details>
  <summary>反转列表元素，可以使用列表的__方法。</summary>
  <div>reverse</div>
</details>

<details>
  <summary>获取列表的元素个数，可以使用函数__()。</summary>
  <div>len</div>
</details>

## 第 4 章 操作列表

### 4.1 遍历整个列表

<details>
  <summary>可以使用 for __ 来循环列表。</summary>
  <div>in</div>
</details>

### 4.3 创建数值列表

<details>
  <summary>Python函数__() 可以生成一系列的数字。</summary>
  <div>range</div>
</details>

<details>
  <summary>__(1,5)，相当于[1,2,3,4]</summary>
  <div>range</div>
</details>

<details>
  <summary>__(1,5,2)，相当于[1,3]</summary>
  <div>range</div>
</details>

<details>
  <summary>获取数字列表的最小值，可以使用函数__()。</summary>
  <div>min</div>
</details>

<details>
  <summary>获取数字列表的最大值，可以使用函数__()。</summary>
  <div>max</div>
</details>

<details>
  <summary>获取数字列表的总和，可以使用函数__()。</summary>
  <div>sum</div>
</details>

<details>
  <summary>__解析:[value**2 for value in range(1,5)]。返回值为:[1, 4, 9, 16]</summary>
  <div>列表</div>
</details>

### 4.4 使用列表的一部分

<details>
  <summary>列表的部分元素——Python称之为__。</summary>
  <div>切片</div>
</details>

<details>
  <summary>切片的第一个索引默认为__，[:4]=[0:4]</summary>
  <div>0</div>
</details>

<details>
  <summary>切片的第二个索引默认为__，[2:]</summary>
  <div>最后一个索引</div>
</details>

<details>
  <summary>切片是一个新列表，切片会开辟一个新内存。</summary>
  <div>无关</div>
</details>

<details>
  <summary>对于关系运算符来说列表比较是比较每个对应元素的值是否相等</summary>
  <div>无关</div>
</details>

### 4.5 元组

<details>
  <summary>Python将不能修改的值称为不可变的，而不可变的列表被称为__。</summary>
  <div>元组</div>
</details>

<details>
  <summary>元组看起来犹如列表，但使用__括号而不是方括号来标识。</summary>
  <div>圆</div>
</details>

## 第 5 章 if 语句

<details>
  <summary>Python的布尔表达式的真值是__,假值是__。</summary>
  <div>True</div>
  <div>False</div>
</details>

<details>
  <summary>C语言中的&&，在Python中是关键字__。</summary>
  <div>and</div>
</details>

<details>
  <summary>C语言中的||，在Python中是关键字__。</summary>
  <div>or</div>
</details>

<details>
  <summary>检查特定值是否包含在列表中: 'item' __（关键字） list</summary>
  <div>in</div>
</details>

<details>
  <summary>检查特定值是否不包含在列表中: 'item' __ __ list</summary>
  <div>not in</div>
</details>

<details>
  <summary>Python中没有__，可以使用if-elif-else结构或if-elif结构来代替。</summary>
  <div>switch</div>
</details>

<details>
  <summary>在测试表达式中空列表将返回布尔值__。</summary>
  <div>False</div>
</details>

## 第 6 章 字典

<details>
  <summary>在Python中，字典用放在__中的一系列键—值对表示。</summary>
  <div>花括号{}</div>
</details>

<details>
  <summary>在Python中，可以通过__括号访问字典中的值。</summary>
  <div>中</div>
</details>

<details>
  <summary>可使用__语句将相应的键—值对彻底删除。</summary>
  <div>del</div>
</details>

<details>
  <summary>在字典中，最后一个__对后面逗号是可选的。</summary>
  <div>键—值</div>
</details>

### 6.3 遍历字典

<details>
  <summary>遍历所有的键—值对:for k, v in dictionaries.__()</summary>
  <div>items</div>
</details>

<details>
  <summary>遍历字典中的所有键:for k in dictionaries.__()</summary>
  <div>keys</div>
</details>

<details>
  <summary>遍历字典中的所有值:for v in dictionaries.__()</summary>
  <div>values</div>
</details>

### 6.4 嵌套

<details>
  <summary>有时候，需要将一系列字典存储在列表中，或将列表作为值存储在字典中，这称为__。</summary>
  <div>嵌套</div>
</details>

## 第 7 章 用户输入和while 循环

<details>
  <summary>如果要获取用户输入，可以使用函数__()。</summary>
  <div>input</div>
</details>

## 第 8 章 函数

<details>
  <summary>函数是带名字的__。</summary>
  <div>代码块</div>
</details>

<details>
  <summary>通过关键词__来定义函数。</summary>
  <div>def</div>
</details>

<details>
  <summary>Python必须将函数调用中的每个实参都关联到函数定义中的一个形参，这种关联方式被称为__实参。</summary>
  <div>位置</div>
</details>

<details>
  <summary>__实参是传递给函数的名称—值对。</summary>
  <div>关键字</div>
</details>

<details>
  <summary>传递任意数量的实参，形参名toppings前的__号让Python创建一个名为toppings的空__。</summary>
  <div>星(*)</div>
  <div>元组</div>
</details>

<details>
  <summary>使用任意数量的关键字实参，形参user_info前的__个__让Python创建一个名为user_info的空__，并将收到的所有名称—值对都封装到这个字典中</summary>
  <div>两</div>
  <div>星(*)</div>
  <div>字典</div>
</details>

### 8.6 将函数存储在模块中

<details>
  <summary>要让函数是可导入的，得先创建模块。模块 是扩展名为.__的文件。</summary>
  <div>py</div>
</details>

<details>
  <summary>导入整个模块:“__ pizza” 让Python打开文件pizza.py，并将其中的所有__都复制到这个程序中。调用函数方式:pizza__函数名()</summary>
  <div>import</div>
  <div>函数</div>
  <div>.</div>
</details>

<details>
  <summary>导入特定的函数:“__ module_name __ function_0, function_1, function_2”</summary>
  <div>from</div>
  <div>import</div>
</details>

<details>
  <summary>给导入函数指定别名“from pizza import make_pizza __ mp”</summary>
  <div>as</div>
</details>

<details>
  <summary>给模块指定别名“import pizza __ p”</summary>
  <div>as</div>
</details>

<details>
  <summary>使用__运算符可让Python导入模块中的所有函数:“from pizza import __”</summary>
  <div>星号(*)</div>
  <div>*</div>
</details>

## 第 9 章 类

<details>
  <summary>根据类来创建对象被称为__。</summary>
  <div>实例化</div>
</details>

<details>
  <summary>根据约定，在Python中，首字母__的名称指的是类。</summary>
  <div>大写</div>
</details>

<details>
  <summary>类中的函数称为__。</summary>
  <div>方法</div>
</details>

<details>
  <summary>每个与类相关联的方法调用都自动传递实参__ ，它是一个指向实例本身的引用。</summary>
  <div>self</div>
</details>

<details>
  <summary>javascript类中的constructor()方法，在Python中是__()。</summary>
  <div>__init__</div>
</details>

<details>
  <summary>与javascript实例化类的方式不同，Python实例化类不需要使用__操作符。</summary>
  <div>new</div>
</details>

<details>
  <summary>如果需要继承父类，则在定义子类时，必须在__内指定父类的名称。</summary>
  <div>括号</div>
</details>

<details>
  <summary>__()是一个特殊函数，帮助Python将父类和子类关联起来。</summary>
  <div>super</div>
</details>

<details>
  <summary>父类也称为__，名称super因此而得名。</summary>
  <div>超类 (superclass)</div>
</details>

<details>
  <summary>Python标准库 是一组__。</summary>
  <div>模块</div>
</details>

<details>
  <summary>类名应采用__命名法，即将类名中的每个单词的首字母都大写，而不使用下划线。实例名和模块名都采用__写格式，并在单词之间加上__。</summary>
  <div>驼峰</div>
  <div>小</div>
  <div>下划线</div>
</details>

## 第 10 章 文件和异常

<details>
  <summary>函数__() 接受第一个参数为:要打开的文件的名称。返回一个表示文件的__。</summary>
  <div>open</div>
  <div>对象</div>
</details>

<details>
  <summary>关键字__: Python自会在合适的时候自动将其关闭。</summary>
  <div>with</div>
</details>

<details>
  <summary>\称为:__杠。</summary>
  <div>反斜</div>
</details>

<details>
  <summary>/称为:__杠。</summary>
  <div>斜</div>
</details>

<details>
  <summary>可以通过__来逐行读取通过函数open()打开的文件对象。</summary>
  <div>for in</div>
</details>

<details>
  <summary>使用关键字with时，open()返回的文件对象只在__代码块内可用。如果要在with代码块外访问文件的内容，可在with代码块内将文件的各行存储在一个列表中。</summary>
  <div>with</div>
</details>

<details>
  <summary>函数open()支持2个实参。第1个是文件的名称，第2个是__。</summary>
  <div>打开模式</div>
</details>

<details>
  <summary>打开模式包括:只读模式(_1_)、写入模式(_2_)、附加模式(_3_)、读写模式(_4_)，默认为_5_模式</summary>
  <div>1:r</div>
  <div>2:w</div>
  <div>3:a</div>
  <div>4:r+</div>
  <div>5:只读</div>
</details>

<details>
  <summary>__模式和__模式下，如果文件不存在则自动创建。</summary>
  <div>写入</div>
  <div>附加</div>
</details>

<details>
  <summary>如果函数open()以写入模式(w)打开文件。如果文件已存在则__。</summary>
  <div>清空文件</div>
</details>

<details>
  <summary>文件对象的write方法会不会自动添加换行？</summary>
  <div>不会</div>
</details>

<details>
  <summary>附加模式只能把文本添加到文件的__。</summary>
  <div>末尾</div>
</details>

### 10.3 异常

<details>
  <summary>Python使用被称为__的特殊对象来管理程序执行期间发生的错误。</summary>
  <div>异常</div>
</details>

<details>
  <summary>遇到异常时，如果你编写了处理该异常的代码，程序将__; 如果你未对异常进行处理，程序将__。</summary>
  <div>继续运行</div>
  <div>停止</div>
</details>

<details>
  <summary>捕获异常的基本写法: "try: __: [__:]"</summary>
  <div>except</div>
  <div>else</div>
</details>

<details>
  <summary>字符串方法__()默认以空格为分隔符将字符串分拆，返回一个列表。</summary>
  <div>split</div>
</details>

<details>
  <summary>Python有一个__语句，可在代码块中使用它来让Python什么都不要做。</summary>
  <div>pass</div>
</details>

### 10.4 存储数据

<details>
  <summary>JSON(__ __ __)格式</summary>
  <div>JavaScript</div>
  <div>Object</div>
  <div>Notation</div>
</details>

<details>
  <summary>使用json.__()把列表和字典储存到文件中。</summary>
  <div>dump</div>
</details>

<details>
  <summary>使用json.__()把文件中的内容转为列表或字典。</summary>
  <div>load</div>
</details>

<details>
  <summary>代码能够正确地运行，但可做进一步的改进——将代码划分为一系列完成具体工作的__。这样的过程被称为__ 。重构让代码更易于__、更容易__。</summary>
  <div>函数</div>
  <div>重构</div>
  <div>理解</div>
  <div>扩展</div>
</details>

## 第 11 章 测试代码

### 11.1 测试函数

<details>
  <summary>单元测试:用于核实__的某个方面没有问题</summary>
  <div>函数</div>
</details>

<details>
  <summary>测试用例:是一组__测试，这些单元测试一起核实函数在各种情形下的 行为都符合要求。</summary>
  <div>单元</div>
</details>

<details>
  <summary>测试用例:一般包含一个类，可以随便取个包含__字样的类名，这个类包含一系列方法(单元测试)，所有以__开头的方法都将自动运行，这个类必须继承__类。</summary>
  <div>Test</div>
  <div>test</div>
  <div>unittest.TestCase</div>
</details>

<details>
  <summary>测试用例的输出中，第1行的句点标明有__个测试通过了。如果全部测试都通过了会返回__。</summary>
  <div>1</div>
  <div>OK</div>
</details>
