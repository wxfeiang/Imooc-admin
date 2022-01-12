# imooc-admin

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

### 项目说明
```
因为使用 @vue/cli-v4.5.13 版本创建的项目中，vue 的版本为 v 3.0.0 。
但是我们的项目需要使用最新的 script setup 语法，该语法在 v 3.0.0 版本中是不支持的，需要升级 vue 版本。
执行：
npm i vue@3.2.8 vue-router@4.0.11 vuex@4.0.2
升级之后，查看 package.json 得到的版本应为：    
```
### 项目标准化
```
项目初始化使用了 Eslint 标准
处理 eslint 与 其他格式化工具的冲突

代码提交规范化 git cz

npm install --save-dev commitizen
npm install -g cz-customizable


在package.json
{
  "scripts": {
    "commit": "git-cz",
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-conventional-changelog" //  替换成自定义的写法  cz-customizable


    }

  }
}

npm run commit   用于规范化提交

githooks   
pre-commit  提交之前跳用
commit-msg  可用于消息规范化提交  拒绝提交

npm install --save-dev @commitlint/config-conventional @commitlint/cli
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

规范提交代码参考网址： https://juejin.cn/post/6951649464637636622#heading-13

npm install husky --save-dev

```

## 项目初始化配置
```
npm install --save rest-css  重置样式表

使用了在线 图标库  （后期维护需要不断的使用更新链接）
配置了环境变量 
webpack  devserver
https://webpack.docschina.org/configuration/dev-server/



```
## 登陆鉴权
```
token   
路由守卫

```
## 登陆鉴权
```
layuot
   components
    Sidebar
      index.vue
    Navbar.vue
    AppMain.vue 

```