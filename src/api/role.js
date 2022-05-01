import request from '@/server'
// get请求示例
export function getRole(params) {
  return request({
    url: '',
    methods: 'get',
    params
  })
}

// post请求示例
export function getUserInfo(data) {
  return request({
    url: '',
    methods: 'post',
    data
    // set headers
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // }
  })
}
