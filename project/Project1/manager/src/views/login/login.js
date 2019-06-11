import React, { Component } from "react";
import styles from "./login.css";
import { connect } from 'dva';
import 'antd/dist/antd.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameVlue: "",
      pwdValue: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.main}>
         <div className={styles.login_wraper}>
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              // value={this.state.nameVlue}
              onChange={e => {
                this.nameVlues(e);
              }}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              // value={this.state.pwdValue}
              onChange={e => {
                this.pwdValues(e);
              }}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => {
              this.add();
            }}>
            Log in
          </Button>
        </Form.Item>
      </Form>
      
        {/*
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
        
         */}
         </div>
      </div>
    );
  }

  componentDidMount(){
    let {login}=this.props;
    login({
      user_name:'chenmanjie',
      user_pwd:'Chenmanjie123!'
    })
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

const mapStateToProps = state=>{
  console.log('state...', state);
  return {}
}
const mapDisaptchToProps = dispatch=>{
  return {
    login(payload){
      dispatch({
        type: '/homepage',
        payload
      })
    }
  }
}                     
  
export default connect(mapStateToProps,mapDisaptchToProps)(Form.create({ name: 'normal_login' })(Login))