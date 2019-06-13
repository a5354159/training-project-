import request from '../utils/request';

// 登陆接口
export function login(params){
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}
export function query() {
  return request({
    url:'/exam/questions/new',
    method:'GET'
  });
}