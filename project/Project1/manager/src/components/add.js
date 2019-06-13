import React, { Component } from "react";
import { connect } from "dva";
import { Layout, Menu, Breadcrumb, Icon, Select } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Option } = Select;
class add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
   
  }

  handleChange(value) {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  }
  
  render() {
    return (
      <div>
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
              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="">请选择考试类型</label>
                </div>
                <div className="ant-form-item-control-wrapper">
                  <div className="ant-form-item-control">
                    <span className="ant-form-item-children">
                      <Select
                        labelInValue
                        defaultValue={{ key: "周考1" }}
                        style={{ width: 120 }}
                        onChange={() => {
                          this.handleChange();
                        }}
                      >
                        <Option value="zk1">周考1</Option>
                        <Option value="zk2">周考2</Option>
                        <Option value="zk3">周考3</Option>
                        <Option value="yk">月考</Option>
                      </Select>
                    </span>
                  </div>
                </div>
              </div>

              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="">请选择课程类型</label>
                </div>
                <div className="ant-form-item-control-wrapper">
                  <div className="ant-form-item-control">
                    <span className="ant-form-item-children">
                      <Select
                        labelInValue
                        defaultValue={{ key: "lucy" }}
                        style={{ width: 120 }}
                        onChange={() => {
                          this.handleChange();
                        }}
                      >
                        <Option value="jack">JavaScript上</Option>
                        <Option value="lucy">JavaScript下</Option>
                      </Select>
                    </span>
                  </div>
                </div>
              </div>

              <div className="ant-row ant-form-item">
                <div className="ant-form-item-label">
                  <label className="">请选择题目类型</label>
                </div>
                <div className="ant-form-item-control-wrapper">
                  <div className="ant-form-item-control">
                    <span className="ant-form-item-children">
                      <Select
                        labelInValue
                        defaultValue={{ key: "lucy" }}
                        style={{ width: 120 }}
                        onChange={() => {
                          this.handleChange();
                        }}
                      >
                        <Option value="jack">J简答题</Option>
                        <Option value="lucy">代码补全</Option>
                      </Select>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 答案信息 */}
            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label">
                <label className="" title="题目主题">
                  答案信息
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

            <div className="EditQuestions_footBtn__3cky1">
              <button
                type="button"
                className="ant-btn ant-btn-primary ant-btn-lg"
                style={{
                  background:
                    "linear-gradient(-90deg,#4e75ff,#0139fd)!important"
                }}
              >
                <span style={{ color: "#fff" }}>提 交</span>
              </button>
            </div>
          </div>
        </Content>
      </div>
    );
  }
}
let mapStateToProp = state => {

  return { ...state.list };
};
let mapDispatchToProp = dispatch => {
  return {
    query(payload) {
      dispatch({
        type: "list/query",
        payload
      });
    }
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProp
)(add);
