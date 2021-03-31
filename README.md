# Cirrus

如果需要使用的话，有以下几个步骤：

1. 移除[配置文件](config/_default/config.toml)里的 [module] 字段的所有内容；
2. 根目录新建 content 文件夹，再创建 page（自定义页面） 和 posts（博客正文）子文件夹；
3. 参照 [deploy.yml](.github/workflows/deploy.yml) 的步骤安装依赖后即可运行。

可能有一些硬编码的字段，我会尽可能将他们移到配置文件里。
