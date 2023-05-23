import request from './axios'
interface TypeRes {
  code: number,
  result: object
  [name: string]: any
}
export interface TypeParams {
  [name: string]: any
}
export function getRequest(url: string, params?: TypeParams) {
  return request({
    method: 'get',
    url,
    params
  })
}
export function postRequest(url: string, data?: TypeParams) {
  return request({
    method: 'post',
    url,
    data
  })
}