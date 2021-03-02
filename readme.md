## 项目描述
使用vite2做脚手架进行搭建，在dev环境使用vite做开发服务器进行预构建（内部基于ESmodule,支持HMR热重载），prod环境使用rollup做打包
> vite 和 rollup均原生支持ESmodule，所以对浏览器的支持度有要求，需浏览器支持原生的ES模块动态导入
## 项目各类规范

### 代码规范 eslint

> 借助eslint,可以将静态代码分析和问题代码修复集成到编码,提交,打包的过程中

* eslint 代码规范校验插件
* eslint-plugin-vue 基于eslint的vue代码校验插件,依赖eslint和vue
* babel-eslint 用于eslint的语法分析器,其支持使用eslint分析被babel转译后的兼容代码

```bash
npm i eslint eslint-plugin-vue babel-eslint -D
```

### 代码格式化 prettier

* prettier 代码格式化插件
* eslint-plugin-prettier 基于eslint的prettier格式化插件,依赖eslint和prettier
* @vue/eslint-config-prettier 更适应vue的eslint代码规范风格文件

```bash
npm i prettier eslint-plugin-prettier @vue/eslint-config-prettier -D
```

### 代码测试 jest

* @babel/preset-env 支持你使用最新的javascript代码,使你无需在意不同环境下的语法转换问题
* jest 功能全面的测试运行器,所需配置较少,内置jsdom,断言,且对命令行支持度较好
* vue-jest@next 预处理器 用于处理vue的单文件组件
* @vue/test-utils@next Vue.js 官方的单元测试实用工具库 依赖浏览器环境
* babel-jest 用于通知jest,校验被babel转译过语法的js文件
* @testing-library/jest-dom 用于模拟浏览器环境中对dom进行操作的集合

如果你需要使用typescript,需要安装ts-jest
* ts-jest 预处理器 支持校验ts文件
* @types/jest

```bash
npm i jest@25.5.4 vue-jest babel-jest @babel/preset-env @vue/test-utils @testing-library/jest-dom -D
npm i ts-jest@25.3.1 @types/jest -D
```

如果你需要一个可视化的代码覆盖率及错误信息展示页面
* jest-vue-report 可视化的代码覆盖率及错误信息展示页面

```bash
npm i jest-vue-report -D
```

### 样式预处理 postcss less

```bash
npm i postcss less autoprefixer -D
```

### 代码提交校验 husky

* @commitlint/cli 对即将提交的代码做校验的插件
* @commitlint/config-conventional 代码提交校验的配置文件

```bash
npm i @commitlint/cli @commitlint/config-conventional -D
```

### 打包部署 github-actions 腾讯云服务

```bash
name: 打包应用并上传腾讯云

on:
  push:
    branches:
      - master

jobs:
  build:
    # runs-on 指定job任务运行所需要的虚拟机环境(必填字段)
    runs-on: ubuntu-latest
    steps:
      # 获取源码
      - name: 获取源码
        # 使用action库  actions/checkout获取源码
        uses: actions/checkout@master
      # 安装Node10
      
      - name: 安装node.js
        # 使用action库  actions/setup-node安装node
        uses: actions/setup-node@v1
        with:
          node-version: 14.0.0

      # 安装依赖
      - name: 安装依赖
        run: npm install

      # 打包
      - name: 打包
        run: npm run build

      # 上传腾讯云
      - name: 发布到腾讯云
        uses: HenryWong-fe/ssh-deploy@master
        env:
          # 私钥
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          # scp参数
          ARGS: "-avzr --delete"
          # 源目录
          SOURCE: "dist"
          # 服务器ip
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          # 登录服务器的用户
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          # 目标目录
          TARGET: ${{ secrets.REMOTE_TARGET }}
          # 发布key_name
          DEPLOY_KEY_NAME: "id_rsa"    
```

***

## 项目开发阶段

### 路由 vue-router

* vue-router 一款用于管理spa项目中页面理由相关的插件

```bash
npm i vue-router
```

### 数据管控 vuex

* vuex 一款用于管理spa项目中数据的插件

```bash
npm i vuex@next
```

### 数据请求 axios

* axios 数据请求插件

```bash
npm i axios 
```

### 数据mock mockjs

* mockjs 数据模拟插件
* vite-plugin-mock 
* cross-env 环境切换插件

```bash
npm i mockjs vite-plugin-mock cross-env -D
```

### UI库 ant-design-vue@2.x

```bash
npm i ant-design-vue
```

### 项目文档 vitepress

> vitepress 文档地址: https://vitepress.vuejs.org/

> 使用vitepress的原因
> * 更快的编译速度
> * 真正的按需编译

安装使用
```bash
npm i vitepress -D
```