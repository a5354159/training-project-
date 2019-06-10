import React, { Component } from "react";
import styles from "./login.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.login_wraper}>
          <div className={styles.iptbox}>
            <input
              className={styles.ipt}
              placeholder="请输入用户名"
              onchange="add"
            />
          </div>
          <div className={styles.iptbox}>
            <input className={styles.ipt} placeholder="请输入密码" />
          </div>
          <div className={styles.textArea}>
            <span />
            <span>忘记密码</span>
          </div>
          <button className={styles.loginBtn}>登录</button>
        </div>
      </div>
    );
  }
}

export default Login;
