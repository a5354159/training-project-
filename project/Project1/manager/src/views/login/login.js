import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from "dva";
import styles from "./login.scss";

function LoginPage(props) {
  // 获取login
  let { login,history } = props;
  useEffect(() => {
    login({
      user_name: "chenmanjie",
      user_pwd: "Chenmanjie123!"
    });
  }, []);

  // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        // 调登录接口
        login({
          user_name: values.username,
          user_pwd: values.password
        });
        if(values.remember){
          history.push('/homepage')
        }
      }
    });
  };
  // 表单校验
  const { getFieldDecorator } = props.form;
  return (
    <div className="main">
      <div className="login_box">
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              validateTrigger: "onBlur",
              rules: [{ required: true, message: "请输入正确的用户名" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                {
                  pattern: /^(?:(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).*$/,
                  message: "请输入正确的密码"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>记住密码</Checkbox>)}
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            Or <a href="">您还没有账号 请注册</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

// props的类型检查
LoginPage.propTypes = {};
// props的默认值
LoginPage.defaultProps = {};

const mapStateToProps = state => {
  console.log("state...", state);
  return {};
};

const mapDisaptchToProps = dispatch => {
  return {
    login(payload) {
      dispatch({
        type: "user/login",
        payload
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(Form.create()(LoginPage));
