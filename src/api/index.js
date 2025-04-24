//导入axios  以及所需类型
import axios from 'axios'

//请求配置
const instance = axios.create({
  baseURL: '',
  timeout: 5000,
})

//添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (err) {
    return Promise.reject(err)
  }
)

//添加回复拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data
  },

  function (error) {
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          // window.location.href = "/NotFound"
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        error.message = '服务器响应超时，请刷新当前页'
      } else {
        error.message = '连接服务器失败'
      }
    }
    //提示
    return Promise.reject(error)
  }
)

const request = (options) => {
  return new Promise((resolve, reject) => {
    instance(options)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default request
