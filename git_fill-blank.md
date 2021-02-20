<!-- markdownlint-disable MD033 MD037 -->
# git-commands_fill-blank

<details>
  <summary>回退到某个版本：git __ --__ 版本hash。</summary>
  <div>reset</div>
  <div>hard</div>
  <div>例子: git reset --hard 8ab3475</div>
</details>

<details>
  <summary>查看git的操作记录(相当于bash的history)：git __。</summary>
  <div>reflog</div>
</details>

<details>
  <summary>查看全部tag：git __。</summary>
  <div>tag</div>
</details>

<details>
  <summary>添加一个简单的tag：git __ tag名称。</summary>
  <div>tag</div>
  <div>例子：git tag v1.4</div>
</details>

<details>
  <summary>将tag“v1.4”推送到远程主机“origin”：git __ origin __。</summary>
  <div>push</div>
  <div>v1.4</div>
</details>

<details>
  <summary>将Index中的内容追加到最后的commit上，git add 后，git __ __。</summary>
  <div>commit</div>
  <div>--amend</div>
</details>

<details>
  <summary>查看所有配置信息，git config __。</summary>
  <div>--list</div>
</details>

<details>
  <summary>编辑全局级配置，git config --__ --__。</summary>
  <div>global</div>
  <div>edit</div>
</details>

<details>
  <summary>拉指定的 tag 到本地, 假设 tag 为“v17.0.1”</summary>
  <div>git fetch -unf origin v17.0.1:refs/tags/v17.0.1</div>
</details>
