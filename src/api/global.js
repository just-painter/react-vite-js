import request from './index'

export const getAxios = (url) => {
  return request({
    url,
    method: 'get',
  })
}
