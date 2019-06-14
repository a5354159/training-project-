// import { selec } from "../services";
// // import { setToken, getToken } from "../utils/user";
// // import { routerRedux } from "dva/router";

// export default {
//     // 命名空间
//     namespace: 'selec',
  
//     // 模块内部的状态
//     state: {
//         arr:[]
//     },
  
//     subscriptions: {
//       setup({ dispatch, history }) {  // eslint-disable-line
//        return 'aa'
//       },
//     },
  
//     // 异步操作
//     effects: {
//     //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
//     //     yield put({ type: 'save' });
//     //   },
//       *selec({payload}, { call, put }){
//         // console.log(payload,'a')
//         let data = yield call(selec);
//     //   console.log("data...", data);
//         yield put({
//             type: "selecs",
//             payload: data
//           });
//       }
//     },
  
//     // 同步操作
//     reducers: {
//       selecs(state, action) {
//         return { ...state, arr:action.payload };
//       },
//     },
  
//   };
  