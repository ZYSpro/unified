// eslint-disable-next-line @typescript-eslint/no-var-requires
const rq = require('request-promise')

/**
 * 请求核心层方法
 * @param url 核心层地址
 * @param path 接口地址
 * @param body 参数
 * @param method 方法
 * @returns
 */
export function fetch(url: string, path: string, body = {}, method = 'GET'): Promise<any> {
  const headers = {
    Authorization: 'Bearer ',
    'request-platform': 'MOBILE'
  }
  const data = method === 'GET' ? { qs: body } : { body }
  const params = {
    method,
    uri: url + path,
    headers: headers,
    json: true,
    timeout: 200000,
    ...data
  }
  return new Promise((resolve, reject) => {
    rq(params)
      .then(res => {
        if (res.errCode === 0) {
          resolve(res.data)
        } else {
          reject(res)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
