import request from '../utils/request';

// 登陆接口
export function login(params){
  return request({
    url: '/user/login',
    method: 'POST',
    data: params
  })
}

//获取所有的试题
export function query() {
  return request({
    url:'/exam/questions/new',
    method:'GET'
  });
}


// export function addSubject(params){
//   return request({
//     url: '/exam/questions',
//     method: 'POST',
//     data: params
//   })
// }

// export function remoteSubject(params){
//   return request({
//     url: '/exam/questions/update',
//     method: 'PUT',
//     data: params
//   })
// }

//获取考试类型
export function subject(){
  return request({
    url: '/exam/subject',
    method: 'GET',
  })
}

//获取试题类型   add
export function subjectType(){
  return request({
    url: '/exam/examType',
    method: 'GET',
  })
}

//获取考试类型
export function getQuestionsType() {
  return request({
    url: '/exam/getQuestionsType',
    method: 'GET',
  })
}
