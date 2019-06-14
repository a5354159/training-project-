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
export function addSubject(params){
  return request({
    url: '/exam/questions',
    method: 'POST',
    data: params
  })
}
export function remoteSubject(params){
  return request({
    url: '/exam/questions/update',
    method: 'PUT',
    data: params
  })
}
export function subject(){
  return request({
    url: '/exam/subject',
    method: 'GET',
  })
}
export function subjectType(params){
  return request({
    url: '/exam/examType',
    method: 'GET',
  })
}