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
        <div class={styles.login_wraper}>
          <div class="login-content">
            <div class="iptbox user_name">
              <input
                className="ipt"
                placeholder="请输入用户名"
                onchange="add"
              />
            </div>
            <div class="iptbox pwd">
              <input class="ipt" placeholder="请输入密码" />
            </div>
            <div class="text-area">
              <span></span>
              <span>忘记密码</span>
            </div>
            <button className="btns">登录</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
