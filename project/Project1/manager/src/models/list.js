import { query,addSubject,remoteSubject,subject,subjectType } from "../services";
export default {
  // 命名空间
  namespace: "list",

  // 模块内部的状态
  state: {
    arr:[]
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    }
  },

  // 异步操作
  effects: {
    *query({ payload }, { call, put }) {
      // console.log("payload...", payload, query);
      let data = yield call(query);
      // console.log("data......", data);
      yield put({ type: "lists", payload: data });
    },
    *add({payload}, { call, put }){
      yield call(addSubject,payload)
    }
    // *remote({payload},{call,put})
  },

  // 同步操作
  reducers: {
    lists(state, action) {
      // console.log(state, action);
      return { ...state, arr: action.payload };
    }
  }
};
