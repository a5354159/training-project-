import React from 'react';
import { connect } from 'dva';
import  style from './IndexPage.css';
import Homepage from './homepage/Homepage'

//zhenghao
// import Login from "./login/login";

function IndexPage() {
  return (
    <div className={style.normal}>
      <Homepage></Homepage>
    </div>
  );
}
              
IndexPage.propTypes = {
};
export default connect()(IndexPage);
