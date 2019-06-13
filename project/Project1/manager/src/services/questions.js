import request from '../utils/request';

// 登陆接口
export function getQuestion(params){
  return request({
    url: '/exam/questions/new',
    method: 'GET',
    // data: params
  })
}