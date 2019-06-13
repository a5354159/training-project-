import React, { Component,useEffect ,useState} from "react";

import { Layout, Menu, Select, Spin ,Input,Form,Button} from "antd";
import { connect } from "dva";
import style from './style.css'
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const { Option } = Select;


class add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // useEffect(()=>{
    //   props.getQuestion()
    // },[props.getQuestion])
    // let [showDialog,updateDialog]=useState(false)
  }
  
  handleChange(value) {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  }
  
  render() {
    // console.log(this.props)
    // const {getQuestion}=this.props
    // console.log(getQuestion)
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
        
          {this.props.loading?<div className={style.loading}><Spin /></div>:null}
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
                  style={{ width: "400px" }}
                />
              </div>
            </div>

            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label">
                <label className="" title="题目主题">
                  题目主题
                </label>
              </div>
              <div
                className="for-container"
              >
                <textarea
                  placeholder="请输入内容..."
                  style={{ width: "100%", height: "150px" }}
                />
              </div>
            </div>

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

            <div className="ant-row ant-form-item">
              <div className="ant-form-item-label">
                <label className="" title="题目主题">
                  答案信息
                </label>
              </div>
              <div
                className="for-container"
              >
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
  componentDidMount(){
    this.props.getQuestion()

  }
}

const mapStateToProps = state => {
  console.log("state:", state);
  return {
    loading:state.loading.global
  };
};

const mapDisaptchToProps = dispatch => {
  return {
    getQuestion(payload) {
      console.log(payload)
      // dispatch({
      //   type: "getQuestion/getQuestion",
      //   payload
      // });
    }
  };
};

export default connect(mapStateToProps,mapDisaptchToProps)(add);
