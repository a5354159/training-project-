import request from '../utils/request';

// 登陆接口
export function getQuestion(params){
  return request({
    url: '/exam/questions/new',
    method: 'GET',
    // data: params
  })
}


export function insertQuestionsType(params){
  return request({
    url: '/exam/insertQuestionsType',
    method: 'GET',
    data: params
  })
}



