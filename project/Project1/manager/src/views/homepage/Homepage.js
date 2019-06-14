import React, { Component } from "react";
import { Route, Switch, NavLink, Redirect } from "dva/router";
import { connect } from "dva";
// import Add from "../../components/add";
// import Wodetongzhuoshizhenghao from "../../components/wodetongzhuishizhenghao";
// src\components\wodetongzhuishizhenghao.js
// import Addlist from "../../components/addlist";
import RemoteList from "../../components/remoteList";

import style from "./home_style.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import { Menu, Icon, Button, Layout } from "antd";

import Add from "@/components/add.js";
import Addlist from "@/components/addlist.js";

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    // console.log(this.props.arr);

    return (
      <Layout className={style.wrap} style={{ flexDirection: "column" }}>
        <Header className={style.land_top} style={{ background: "#fff" }}>
          <div className={style.top_img}>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" />
          </div>
          <div className={style.sing}>
            <span>
              <span>
                <img src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" />
              </span>{" "}
              chenmanjie
            </span>
          </div>
        </Header>
        <div className={style.land_bottom}>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              left: 0
            }}
          >
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["homepage"]}
              mode="inline"
              theme="dark"
              className={style.list_style}
              style={{ width: 200, background: "red" }}
            >
              <SubMenu
                key="homepage"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>试题管理</span>
                  </span>
                }
              >
                <Menu.Item key="5">
                  <NavLink to="/homepage/add">添加试题</NavLink>
                </Menu.Item>
                <Menu.Item key="6">
                  <NavLink to="/homepage/addlist">试题分类</NavLink>
                </Menu.Item>
                <Menu.Item key="7">
                  <NavLink to="/homepage/remote">查看试题</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>用户管理</span>
                  </span>
                }
              >
                <Menu.Item key="9">添加用户</Menu.Item>
                <Menu.Item key="10">用户展示</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>考试管理</span>
                  </span>
                }
              >
                <Menu.Item key="11">添加考试</Menu.Item>
                <Menu.Item key="12">试卷列表</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>班级管理</span>
                  </span>
                }
              >
                <Menu.Item key="13">班级管理</Menu.Item>
                <Menu.Item key="14">教室管理</Menu.Item>
                <Menu.Item key="15">学生管理</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="appstore" />
                    <span>阅卷管理</span>
                  </span>
                }
              >
                <Menu.Item key="16">特批班级</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ overflow: "auto" }}>
            <div style={{ padding: "14px 24px 24px" }}>
              <Switch>
                <Redirect exact from="/" to="/homepage/add" />
                <Route path="/homepage/add" component={Add} />
                <Route path="/homepage/addlist" component={Addlist} />
                <Route path="/homepage/remote" component={RemoteList} />
              </Switch>
            </div>
          </Content>
        </div>
      </Layout>
    );
  }
}

export default Homepage;
