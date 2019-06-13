import { getQuestion } from "../services";
// import { setToken, getToken } from "../utils/user";
// import { routerRedux } from "dva/router";

export default {
    // 命名空间
    namespace: 'getQuestion',
  
    // 模块内部的状态
    state: {
        arr:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
       return 'aa'
      },
    },
  
    // 异步操作
    effects: {
    //   *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //     yield put({ type: 'save' });
    //   },
      *getQuestion({payload}, { call, put }){
        // console.log(payload,'a')
        let data = yield call(getQuestion);
    //   console.log("data...", data);
        yield put({
            type: "getQuestions",
            payload: data
          });
      }
    },
  
    // 同步操作
    reducers: {
        getQuestions(state, action) {
        return { ...state, arr:action.payload };
      },
    },
  
  };
  