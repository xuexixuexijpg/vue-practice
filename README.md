# vue3-ts-cms

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 文件配置

```

.editorconfig 代码缩进相关,vscode还得安装插件

1.prettier 统一代码风格 vscode可用插件,项目中安装也可
npm i prettier -D 安装之后.bin目录下多出个 prettier命令
目录建 .prettierrc文件进行配置

2.配置.prettierrc文件：
* useTabs：使用tab缩进还是空格缩进，选择false；
* tabWidth：tab是空格的情况下，是几个空格，选择2个；
* printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；
* singleQuote：使用单引号还是双引号，选择true，使用单引号；
* trailingComma：在多行输入的尾逗号是否添加，设置为 `none`；
* semi：语句末尾是否要加分号，默认值true，选择false表示不加；

3.创建.prettierignore忽略文件

4.在package.json中配置一个scripts

5.代码提交统一风格检查 npx husky-init && npm install
```
