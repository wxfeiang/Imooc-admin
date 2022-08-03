/*
 * @Author: wxfeiang
 * @Description:
 * @Date: 2022-01-02 22:07:30
 * @LastEditTime: 2022-06-28 23:49:57
 * @FilePath: /Imooc-admin/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 0, // 变量未使用
    eqeqeq: 0, //三等号
    'prefer-const': 0, //
    'no-callback-literal': 0
  }
}
