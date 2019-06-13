/**
 * 辅助方法
 */

export default {
  // 获取地址栏参数
  getQuery (url, key) {
    let params = url.split('?')
    if (params.length > 1) {
      let arrPara = params[1].split('&')
      let arr
      for (let i = 0; i < arrPara.length; i++) {
        arr = arrPara[i].split('=')
        if (arr != null && arr[0] === key) {
          return decodeURI(arr[1])
        }
      }
      return ''
    } else {
      return ''
    }
  },

  // 分页
  pagination (index, size, datas) {
    let pagedata = []
    let start = (size * index) - size
    let end = size * index
    end = end > datas.length ? datas.length : end
    for (let i = start; i < end; i++) {
      pagedata.push(datas[i])
    }
    return pagedata
  }
}
