module.exports = {
  root: true,
  env: {
    node: true,

    //https://blog.csdn.net/zhanye88/article/details/121644706
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endofline: 'auto'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 'off'
  }
}
