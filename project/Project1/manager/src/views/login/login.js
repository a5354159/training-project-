import React, { Component } from "react";
import styles from "./login.css";
import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameVlue: "",
      pwdValue: ""
    };
  }
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.login_wraper}>
          <div className={styles.iptbox}>
            <input
              className={styles.ipt}
              placeholder="请输入用户名"
              value={this.state.nameVlue}
              onChange={e => {
                this.nameVlues(e);
              }}
            />
          </div>
          <div className={styles.iptbox}>
            <input
              className={styles.ipt}
              placeholder="请输入密码"
              value={this.state.pwdValue}
              onChange={e => {
                this.pwdValues(e);
              }}
            />
          </div>
          <div className={styles.textArea}>
            <span />
            <span>忘记密码</span>
          </div>
          <button
            className={styles.loginBtn}
            onClick={() => {
              this.add();
            }}
          >
            登录
          </button>
        </div>
      </div>
    );
  }
  add() {
    let that = this;
    if (this.state.nameVlue !== "" && this.state.pwdValue !== "") {
      try {
        axios
          .post("http://127.0.0.1:7001/user/login", {
            user_name: this.state.nameVlue,
            user_pwd: this.state.pwdValue
          })
          .then(function(res) {
            console.log(res)
            if (res.data.code === 1) {
              console.log(res.data.token)
              localStorage.setItem('uid',res.data.token)
              that.props.history.push('/homepage') 
            }
          })
          .catch(function(error) {
            alert("您的账号或密码有误");
          });
      } catch (e) {
        console.log(e);
      }
    }
  }

  nameVlues(e) {
    this.setState({
      nameVlue: e.target.value
    });
  }
  pwdValues(e) {
    this.setState({
      pwdValue: e.target.value
    });
  }
}

export default Login;
