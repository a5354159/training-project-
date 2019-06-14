import { getQuestion,insertQuestionsType } from "../services";
// import { setToken, getToken } from "../utils/user";
// import { routerRedux } from "dva/router";

export default {
    // 命名空间
    namespace: 'Question',
  
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
    
      *getQuestion({payload}, { call, put }){
        let data = yield call(getQuestion);
        yield put({
            type: "getQuestions",
            payload: data
          });
      },
      *insertQuestionsType({payload},{call,put}){
        let data = yield call(insertQuestionsType,payload);
        console.log(';data...........;',data)
        yield put({
            type: "insertQuestionsType",
            payload: data
          });
      }
    },
  
    // 同步操作
    reducers: {
        getQuestions(state, action) {
        return { ...state, arr:action.payload };
      },
      insertQuestionsType(state, action) {
        return { ...state, arr:action.payload };
      },
    },
  
  };
  