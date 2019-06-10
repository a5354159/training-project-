import React, { Component } from "react";
import style from "./home_style.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

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
              <span><img src='https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png'></img></span> chenmanjie
            </span>
          </div>
        </div>
        <div className={style.land_bottom}>
          <div className={style.bottom_left}>
            <div style={{ width: 256 }}>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>Option 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="inbox" />
                  <span>Option 3</span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>Navigation One</span>
                    </span>
                  }
                >
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="appstore" />
                      <span>Navigation Two</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </div>
          </div>
          <div className={style.bottom_right} />
        </div>
      </div>
    );
  }
}

export default Homepage;
