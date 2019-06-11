import request from '../utils/request';

// export function query() {
//   return request('/api/users');
// }
export function query(params) {
    return request({
      url:'/homepage',
      method:'POST',
      data:params
    });
  }