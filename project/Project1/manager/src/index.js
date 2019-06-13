import '@babel/polyfill';
import dva from 'dva';
// 引入全局样式
import './index.css';
// 引入antd样式
import 'antd/dist/antd.css';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model
app.model(require('./models/user').default);

app.model(require('./models/list').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');