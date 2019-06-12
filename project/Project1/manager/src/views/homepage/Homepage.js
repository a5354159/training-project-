import React, { Component } from "react";
import { Router, Route, Switch, NavLink } from "dva/router";

import Add from "../../components/add";
import Addlist from "../../components/addlist";
import RemoteList from "../../components/remoteList";

import style from "./home_style.css";

import { Menu, Icon, Button } from "antd";

const { SubMenu } = Menu;

class Homepage extends Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div className={style.wrap}>
        <div className={style.land_top}>
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
        </div>
        <div className={style.land_bottom}>
          <div className={style.bottom_left}>
            <div className={style.actives}>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                className={style.list_style}
                style={{ width: 200, background: "red" }}
              >
                <SubMenu
                  key="sub1"
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
            </div>
          </div>
          <div className={style.bottom_right}>
            <Switch>
              {/* 试题管理 */}
              <Route path="/homepage/add" component={Add} />
              <Route path="/homepage/addlist" component={Addlist} />
              <Route path="/homepage/remote" component={RemoteList} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
