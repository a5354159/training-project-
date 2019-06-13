import request from '../utils/request';

// 登陆接口
export function login(params){
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}
export function query(params) {
  return request({
    url:'/user/homepage',
    method:'POST',
    data:params
  });
}

// export function selec(params) {
//   return request({
//     url:'/exam/subject',
//     method:'GET'
//   });
// }


export function selec(params) {
  return request({
    url:'/exam/questions/new',
    method:'GET'
  });
}