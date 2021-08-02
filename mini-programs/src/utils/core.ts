
export function ajax(url, method = 'GET') {
  return new Promise((resolve, reject) => {
    let header = {
      'content-type': 'application/json',
      Authorization: 'Bearer ',
      'request-platform': 'LEADLEO_MP'
    }
    wx.request({
      url,
      method,
      header,
      complete: (res) => {
        resolve(res.data)
      },
    })
  })
}
