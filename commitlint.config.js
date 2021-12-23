module.exports = {
  extends: ['@commitlint/config-conventional'],
  roles: {
    // git  i提交的类型
    'type-enum': [
      2, //   错误级别
      'always', // 验证
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'refactor',
        'perf',
        'test',
        'build',
        'chore',
        'revert'
      ]
    ],
    // 大小写不做校验  ，保存 utf-8
    'subject-case': [0]
  }
}
