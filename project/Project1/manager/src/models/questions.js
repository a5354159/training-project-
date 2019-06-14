import { login, 
  query, 
  subject, 
  subjectType,  // 试题类型
  getQuestionsType,getQuestion,insertQuestionsType 
} from "../services";
export default {
  // 命名空间
  namespace: "Question",

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
    },
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
    // getFieldDecorator
    query(state, action) {
      return { ...state, query: action.payload };
    },
    subject(state, action) {
      return { ...state, subject: action.payload };
    },
    remote_subjectType(state, action) {
      return { ...state, remote_subjectType: action.payload };
    },
    getQuestions(state, action) {
      return { ...state, arr:action.payload };
    },
    insertQuestionsType(state, action) {
      return { ...state, arr:action.payload };
    },
    getQuestionsType_data(state, action) {
      return { ...state, getQuestionsType_data: action.payload };
    }
  }
};
