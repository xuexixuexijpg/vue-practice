// 配置不同开发环境的base
let BASE_URL = 'https://www.wanandroid.com'
const env = process.env.NODE_ENV
if (env === 'development') {
  BASE_URL = 'https://www.wanandroid.com'
} else if (env === 'production') {
  BASE_URL = 'https://www.wanandroid.com'
} else {
  BASE_URL = 'https://www.wanandroid.com'
}
export { BASE_URL }

//创建.env文件，只能注入一些固定的，也可 VUE_APP_XXXX 来注入其他名字
