import Taro from '@tarojs/taro'

interface Response {
  code: number,
  msg?: string
}

export interface HttpResponse extends Response {
  data?: object | string
}

const Request = (
  method:
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'CONNECT'
    | 'HEAD'
    | 'OPTIONS'
    | 'TRACE',
  url: string,
  data?: string | object,
  header?: { 'Content-Type': 'application/x-www-form-urlencoded' }
): Promise<HttpResponse> => {
  return new Promise((resolve, reject) => {
    Taro.request({
      method,
      url,
      data,
      header,
      success: (res: Taro.request.SuccessCallbackResult) => {
        resolve(res.data as HttpResponse)
      },
      fail: (err: Taro.General.CallbackResult) => {
        const resp: HttpResponse = { code: -1, msg: err.errMsg }
        reject(resp)
      },
    })
  })
}

const Get = (url: string, data?: string | object) => Request('GET', url, data)

export { Get }
