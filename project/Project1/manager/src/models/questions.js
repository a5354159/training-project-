import { login, 
  query, 
  subject, 
  subjectType,  // 试题类型
  getQuestionsType
} from "../services";
export default {
  // 命名空间
  namespace: "questions",

  // 模块内部的状态
  state: {
    add: []
  },

  subscriptions: {
    setup({ dispatch, history }) {

    }
  },

  // 异步操作
  effects: {
    *question({ payload }, { call, put }) {
      let querys = yield call(query);
      let subjects = yield call(subject);
      let subjectTypes = yield call(subjectType);//试题类型
      let getQuestionsTypes = yield call(getQuestionsType);
      yield put({
        type: "query",
        payload: querys.data
      })
      yield put({
        type: "subject",
        payload: subjects.data
      })
      yield put({
        type: "remote_subjectType",
        payload: subjectTypes.data
      })
      // console.log(subjectTypes)
      yield put({
        type: "getQuestionsType_data",
        payload: getQuestionsTypes.data
      })
    }
  },

  // 同步操作
  reducers: {
    
    query(state, action) {
      return { ...state, query: action.payload };
    },
    subject(state, action) {
      return { ...state, subject: action.payload };
    },
    remote_subjectType(state, action) {
      return { ...state, remote_subjectType: action.payload };
    },
    getQuestionsType_data(state, action) {
      return { ...state, getQuestionsType_data: action.payload };
    }
  }
};
