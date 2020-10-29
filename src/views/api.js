
import request from '@/utils/request'

// 信令服务
export function signallingSelectList(data) {
    return request({
      url: '/api/uke-monitoring/common/signallingSelectList',
      method: 'GET',
      json: true,
      data,
    })
  }
  