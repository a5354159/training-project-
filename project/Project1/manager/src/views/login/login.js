import React, { useEffect } from "react";
import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import { connect } from "dva";
import "./login.scss";

function Login(props) {
  console.log(props)
  // 判断是否登陆
  useEffect(() => {
    if (props.islogin === 1) {
      // 1.提示登陆成功
      message.success("登陆成功");
      // 2.存储cookie
      // 3.跳转主页面
      console.log("props.history", props.history);
      let pathName = decodeURIComponent(
        props.history.location.search.split("=")[1]
      );
      props.history.replace(pathName);
    } else if (props.islogin === -1) {
      // 登陆失败
      message.error("用户名或密码错误");
    }
  }, [props.islogin]);

  // 处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // 调登录接口
        props.login({
          user_name: values.username,
          user_pwd: values.password
        });
      // props.history.push('/homepage')
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
            请先 <a href="">注册</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

// props的类型检查
Login.propTypes = {};
// props的默认值
Login.defaultProps = {};

const mapStateToProps = state => {
  return {
    ...state.user
  };
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
)(Form.create()(Login));
