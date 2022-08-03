<!--
 * @Author: wxfeiang
 * @Description: 动态路由说明
 * @Date: 2022-07-07 23:04:50
 * @LastEditTime: 2022-07-14 16:15:12
 * @FilePath: /Imooc-admin/doc/router.md
-->
## 前端路由划分
| 字段 | 案例值| 说明 |
| :-----| :----: | :----|
| id | 1/’‘| Id |
| pid |  上级ID | 上级ID |
| menuType |  一级菜单 | 菜单类型 |
| path | '/user '| 访问地址 |
|name | 'manger' | luyou 名称|
|component| layout,  |  前端组件 
|redirect|'/user/manage',   | 重定向
|title| '用户管理',   | 名称
|icon| 'icon-yonghu1'  , | 图标
|show| true , | 是否显示 |
|status| true , | 状态
|siderShow| true , | 是否侧边显示|
|role| ['admin', "manger"]  | 角色组|
|sort| 0  | Number  |
|cache|true  | 是否缓存|
|routeMenu| true | 是否路由菜单|
|breadcrumb|false|如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)|
|affix|true| 如果设置为true，它则会固定在tags-view中(默认 false)|
|openingMode|  link /center  | 外部 内部|
|creationTime| 2022-12-02-20 10:20:20 | 创建时间 |


## 组装成树结构
```
 {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: '用户管理',
      icon: 'icon-yonghu1'
    },
    children: [
      {
        path: '/user/manage',
        name: 'manger',
        component: () => import('@/views/user-manage/index'),
        meta: {
          title: 'userManger',
          icon: 'el-icon-user'
        }
      },
    ]
  }

  ......
```

