<!-- markdownlint-disable MD033 -->
# linux 知识点 填空

<details>
  <summary>Linux一般将文件可存取的身份分为三个类别，分别是 __/__/__，且三种身份各有 __/__/__ 等权限。</summary>
  <div>owner</div>
  <div>group</div>
  <div>others</div>
  <div>read</div>
  <div>write(不含删除权限)</div>
  <div>execute</div>
</details>

<details>
  <summary>Linux的群组(group)：一个群组可以有__个用户，一个用户可以属于__个群组。一个文件有__个拥有者，一个文件有__个群组。</summary>
  <div>多</div>
  <div>多</div>
  <div>一</div>
  <div>一</div>
</details>

<details>
  <summary>Linux命令ls是list的意思：使用选项_A_将会列出隐藏文件；使用选项_B_将会列出文件的权限和属性；使用选项_C_将会显示文件完整时间；</summary>
  <div>A: a</div>
  <div>B: l</div>
  <div>C: --full-time</div>
</details>

<details>
  <summary>在linux中，如果文件名的第一个字符为“.”，则意味着这个文件为__文件。</summary>
  <div>隐藏</div>
</details>

<details>
  <summary>[drwxr-xr-x(A) 3(B) root(C) root(D) 4096(E) Nov 19 2018(F) buyoovip2(G)] 从左至右依次为：A:__ B:__ C:__ D:__ E:__ F:__ G:__</summary>
  <div>A: 权限</div>
  <div>B: 链接</div>
  <div>C: 拥有者</div>
  <div>D: 群组</div>
  <div>E: 文件大小</div>
  <div>F: 修改日期</div>
  <div>G: 文件名</div>
</details>

<details>
  <summary>文件的权限使用__个字符来表示的，第1位字符表示文件的__。2-4、5-7、8-10，分别表示文件__的权限、加入此群组的__的权限、非__且没有加入__的其他帐号的权限”。</summary>
  <div>10</div>
  <div>类型</div>
  <div>拥有者</div>
  <div>帐号</div>
  <div>本人</div>
  <div>本群组 </div>
</details>

<details>
  <summary>第2位字符表示是否可__，如果拥有该权限则为__，无权限则为-。</summary>
  <div>读</div>
  <div>r(read)</div>
</details>

<details>
  <summary>第3位字符表示是否可__，如果拥有该权限则为__，无权限则为-。</summary>
  <div>写</div>
  <div>w(write)</div>
</details>

<details>
  <summary>第4位字符表示是否可__，如果拥有该权限则为__，无权限则为-。</summary>
  <div>执行</div>
  <div>x(execute)</div>
</details>

<details>
  <summary>linux的文件类型：d(directory)是__，-是__，l(link)是__。</summary>
  <div>目录</div>
  <div>文件</div>
  <div>链接文件</div>
</details>

<details>
  <summary>拥有三个权限(r、w、x)中，__权限才能进入目录。</summary>
  <div>r和x</div>
</details>

<details>
  <summary>系统中的所有账号的密码数据都记录在一个文件里，这个文件的完整地址为__。</summary>
  <div>/etc/shadow</div>
</details>

<details>
  <summary>“__ [-R] dirname/filename”命令可以修改文件的所属群组。</summary>
  <div>chgrp(change group)</div>
</details>

<details>
  <summary>“__ [-R] dirname/filename”命令可以修改文件的拥有者。</summary>
  <div>chown(change own)</div>
  <div>还可以顺便修改群组名称，用户名[:群组名]</div>
  <div>单独修改拥有者，用户名</div>
  <div>单独修改群组，:群组名</div>
</details>

<details>
  <summary>__命令可以修改文件的权限。</summary>
  <div>chmod(change mode)</div>
</details>

<details>
  <summary>文件目录名“etc”全称是__。</summary>
  <div>et cetera(其它的)</div>
</details>

<details>
  <summary>文件目录名“usr”全称是__。</summary>
  <div>unix software resource</div>
</details>

<details>
  <summary>系统中的所有群组的数据都记录在一个文件里，这个文件的完整地址为__。</summary>
  <div>/etc/group</div>
</details>

<details>
  <summary>__文件记录着群组管理员的数据。</summary>
  <div>/etc/gshadow</div>
</details>

<details>
  <summary>/etc/gshadow 文件的4个栏目的意义：1.__，2.__，3.__，4.__。</summary>
  <div>1 群组名称</div>
  <div>2 口令栏，同样的，开头为 ! 表示无合法口令，所以无群组管理员</div>
  <div>3 群组管理员的账号</div>
  <div>4 该群组的所属账号</div>
</details>

<details>
  <summary>/etc/group 文件的4个栏目的意义：1.__，2.__，3.__，4.__。</summary>
  <div>1 群组名称</div>
  <div>2 群组密码</div>
  <div>3 GID</div>
  <div>4 此群组支持的帐号名称，例如：tcy,shannon</div>
</details>

<details>
  <summary>系统中的所有账号的详细数据都记录在一个文件里，这个文件的完整地址为__。</summary>
  <div>/etc/passwd</div>
</details>

<details>
  <summary>各权限的分数对照表: r:__; w:__; x:__。</summary>
  <div>4</div>
  <div>2</div>
  <div>1</div>
</details>

<details>
  <summary>一个文件的权限是-rwxr-xr--，则文件的权限数字为__。</summary>
  <div>754</div>
</details>

<details>
  <summary>windows是根据__来判断一个文件是否能被执行。linux是根据__判断一个文件是否能被执行</summary>
  <div>文件后缀</div>
  <div>是否有“x”权限</div>
</details>

<details>
  <summary>r/w/x权限是针对“文件的__”而言的。</summary>
  <div>内容</div>
</details>

<details>
  <summary>如果没有目录的__权限，则不能切换到目录。</summary>
  <div>x</div>
</details>

<details>
  <summary>如果没有目录的__权限，则不能查询此目录下的文件名列表。</summary>
  <div>r</div>
</details>

<details>
  <summary>使用__命令查看当前账号已加入的群组。其中的第一个群组又叫做__群组。</summary>
  <div>groups</div>
  <div>有效</div>
</details>

<details>
  <summary>使用“__ 用户名”命令新增一个用户，默认是还无法登陆的，因为还没有设置__。</summary>
  <div>useradd</div>
  <div>密码</div>
</details>

<details>
  <summary>使用“__ [用户名]”命令设置一个用户的密码。修改当前用户的密码不需要加用户名。</summary>
  <div>passwd(password)</div>
</details>

<details>
  <summary>使用“__ 用户名”命令删除一个用户的密码。如果需要删除用户的主文件夹需要加选项__。</summary>
  <div>userdel</div>
  <div>-r</div>
</details>

<details>
  <summary>使用“__ 群组名称”命令创建一个群组。</summary>
  <div>groupadd</div>
  <div>-r</div>
</details>

<details>
  <summary>使用“__ 群组名称”命令修改一个群组的属性。选项和参数和groupadd命令一致。</summary>
  <div>groupmod</div>
</details>

<details>
  <summary>使用“__ 群组名称”命令删除一个群组。</summary>
  <div>groupdel</div>
</details>

<details>
  <summary>查询某个群组里的用户:__。</summary>
  <div>grep xxx /etc/group /etc/gshadow</div>
</details>

<details>
  <summary>想要让 dmtsai 这个使用者，加入 vbird1, vbird2, vbird3 这三个群组，该如何动作？</summary>
  <div>usermod -G vbird1,vbird2,vbird3 dmtsai</div>
</details>

<details>
  <summary>如果是新加群组并保留原来所在的群组要用选项__。</summary>
  <div>-a</div>
  <div>把用户shannon添加到群组groupA: usermod -a -G groupA shannon</div>
  <div>另一种写法: usermod -aG groupA shannon</div>
</details>
