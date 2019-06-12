import React, { Component } from "react";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h2 style={{ padding: "20px 0px" }}>添加试题</h2>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280,
            borderRadius: 15
          }}
        >
          <div>
            <h3>题目信息</h3>
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label">
                <label className="" title="题干">
                  题干
                </label>
              </div>
              <div className="ant-form-item-control-wrapper">
                <input
                  className="ant-input ant-input-lg EditQuestions_titleInput__2Pvep"
                  placeholder="请输入题目标题，不超过20个字"
                  type="text"
                  // value=""
                  style={{ width: "400px" }}
                />
              </div>
            </div>

            {/* 题目主题 */}
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label">
                <label className="" title="题目主题">
                  题目主题
                </label>
              </div>
              <div
                className="for-container"
                // style={{height: 600}}
              >
                {/* <pre> </pre> */}
                <textarea
                  placeholder="请输入内容..."
                  style={{ width: "100%", height: "150px" }}
                />
              </div>
            </div>

            {/* 考试类型 */}
            <div>
              

            </div>
          </div>
        </Content>
      </>
    );
  }
}

export default add;
