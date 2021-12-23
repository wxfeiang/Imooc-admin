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

npm run commit 


```