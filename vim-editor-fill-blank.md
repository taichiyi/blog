<!-- markdownlint-disable MD033 -->
# vim-editor-fill-blank

<details>
  <summary>Vim('Vi IMproved'的缩写)是基本兼容__的编辑器，__年发布的文本编辑器。</summary>
  <div>Vi 1991</div>
</details>

<details>
  <summary>下文中的N默认为__</summary>
  <div>1</div>
</details>

<details>
  <summary>使用Vim打开文件时，默认是在__模式下。</summary>
  <div>普通</div>
</details>

<details>
  <summary>怎么永久显示行号?</summary>
  <div>在当前用户的根目录下的.vimrc文件里添加"set nu"</div>
</details>

## 普通模式

<details>
  <summary>__(光标移动到当前行行头)</summary>
  <div>0</div>
</details>

<details>
  <summary>__(光标移动到当前行行尾)</summary>
  <div>$</div>
</details>

<details>
  <summary>__Pattern(可以进行光标移动，Pattern为正则表达式，输入__开始匹配移动光标；如果有多个匹配的话，输入`__`跳到下一个,输入`shift+__`跳到上一个)</summary>
  <div>/ 回车 n n</div>
</details>

<details>
  <summary>__[标记](从光标处(含光标)删除当前行内容，直到遇到[标记]，不删除[标记])</summary>
  <div>dt</div>
</details>

<details>
  <summary>[N]__(从当前行开始删除N行)</summary>
  <div>dd</div>
</details>

<details>
  <summary>__(删除当前光标所在的一个字符)</summary>
  <div>x</div>
</details>

<details>
  <summary>__[标记](删除标记之间的内容)</summary>
  <div>di</div>
</details>

<details>
  <summary>__(撤销改变(后退))</summary>
  <div>u</div>
</details>

<details>
  <summary>__(撤销改变(前进))</summary>
  <div>ctrl-r</div>
</details>

<details>
  <summary>[N]__(光标移动到第N个单词的结束处)</summary>
  <div>e</div>
</details>

<details>
  <summary>[N]__(复制N行)</summary>
  <div>yy</div>
</details>

<details>
  <summary>[N]__(粘贴N次)</summary>
  <div>p</div>
</details>

<details>
  <summary>__(替换一个字母，按 __ 松开，然后再按新字母)</summary>
  <div>r</div>
</details>

<details>
  <summary>__(进入插入模式，当前光标处插入)</summary>
  <div>i</div>
</details>

<details>
  <summary>__(进入插入模式，当前光标后插入)</summary>
  <div>a</div>
</details>

<details>
  <summary>__(进入插入模式，光标移动到行尾)</summary>
  <div>A</div>
</details>

<details>
  <summary>__(进入插入模式，当前行下面插入新行)</summary>
  <div>o</div>
</details>

<details>
  <summary>__(进入插入模式，当前行上面插入新行)</summary>
  <div>O</div>
</details>

<details>
  <summary>__(保存并退出(相当于:wq加回车))</summary>
  <div>ZZ</div>
</details>

<details>
  <summary>__(向下翻页)</summary>
  <div>ctrl+f</div>
</details>

<details>
  <summary>__(向上翻页)</summary>
  <div>ctrl+b</div>
</details>

<details>
  <summary>[N]__(到第N行)</summary>
  <div>G</div>
</details>

<details>
  <summary>__(到最后行)</summary>
  <div>G</div>
</details>

<details>
  <summary>__块操作</summary>
  <div>C-v</div>
</details>

<details>
  <summary>按__键可以删除块操作选中的内容</summary>
  <div>d</div>
</details>

<details>
  <summary>块操作步骤:</summary>
  <div>(1)0(光标移动到行头))</div>
  <div>(2)Ctrl-v(开始块操作,当前光标行为开始行)</div>
  <div>(3)上下移动光标(当前光标行为结束行)</div>
  <div>(4)I键(大写I，进入插入模式)</div>
  <div>(5)输入每行行头需要批量插入的内容</div>
  <div>(6)ESC键(退出块操作)</div>
</details>

## 命令行模式

<details>
  <summary>在普通模式下输入__进入命令行模式</summary>
  <div>:</div>
</details>

<details>
  <summary>怎么临时显示行号?</summary>
  <div>:set number</div>
</details>

<details>
  <summary>怎么临时隐藏行号?</summary>
  <div>:set nonumber</div>
</details>

<details>
  <summary>在命令行模式下，输入完命令后，输入__执行命令。</summary>
  <div>回车</div>
</details>

<details>
  <summary>保存</summary>
  <div>:w</div>
</details>

<details>
  <summary>另存为</summary>
  <div>:w 文件完全路径</div>
</details>

<details>
  <summary>退出</summary>
  <div>:q</div>
</details>

<details>
  <summary>不保存强制退出</summary>
  <div>:q!</div>
</details>

<details>
  <summary>保存并退出</summary>
  <div>:wq</div>
</details>

<details>
  <summary>刷新内容</summary>
  <div>:e</div>
</details>

<details>
  <summary>撤销更改，返回到上一次保存的状态</summary>
  <div>:e!</div>
</details>
