import Layout from '@/layout'

/**
 *  获取后端返回的路由
 * @param {*} data
 * @param {*} arr
 * @returns
 */
export function tree(data, arr) {
  data.forEach((datas, index) => {
    arr.push({
      path: datas.path,
      name: datas.name,
      types: datas.types,
      hidden: datas.hidden === 'true',
      // 当时这块踩坑了
      component:
        datas.component === 'Layout'
          ? Layout
          : (resolve) => require([`@/views/${datas.component}.vue`], resolve),
      meta: {
        title: datas.meta.title,
        icon: datas.meta.icon,
        // 用来存放按钮权限
        button: datas.meta.button
      },
      //  redirect: datas.redirect,
      id: datas.id,
      // 子路由
      children: []
    })

    if (datas.children) {
      const childArr = tree(datas.children, [])
      arr[index].children = childArr
    }
  })
  return arr
}

/**
 * @description: 获取当前登录用户的菜单
 * @returns
 */
export function getMenu() {
  return new Promise(function (resolve, reject) {
    getUserAuthMenu().then((res) => {
      if (res.code === 200) {
        const datas = res.data
        // 调用 tree 来解析后端返回来的树
        resolve(tree(datas, []))
      }
    })
  })
}
