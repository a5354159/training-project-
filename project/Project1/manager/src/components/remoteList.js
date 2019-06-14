import React, { Component } from "react";
import "./remoteList.scss";
import Relist from "./Relist";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Spin,
  Tag,
  Select,
  Button,
  List,
  Avatar,
  Skeleton,
  Form,
   Input, 
   Checkbox
} from "antd";
import { connect } from "dva";
const { SubMenu } = Menu;
const { Option } = Select;
const { Header, Content, Sider } = Layout;
const CheckableTag = Tag.CheckableTag;
const tagsFromServer = [
  "所有",
  "javaScipt中下",
  "模块化开发",
  "移动端开发",
  "基础节点",
  "组件开发（VUE）",
  "组件式开发（反应）",
  "项目实战",
  "javaScript的高级",
  "节点高级"
];
let arrs=['周考一','简答题']
class remoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTags: [],
      arrs:['周考一','简答题']
    };
    // console.log(props.loading);
  }
  componentDidMount() {
    this.props.query();
  }
  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    // console.log("You are interested in: ", nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }
  handleChanges(value) {
    if(!value){
      console.log('kong');
    }else{
      // arrs.push(value.key)
      console.log(this.state.arrs)
      var a=this.state.arrs.findIndex(item=>{return item==value.key})
      console.log(a)
      if(a==-1){
        if(value.key=='简答题'){
          this.state.arrs.splice(1,1,value.key)
        }else{
          this.state.arrs.splice(0,1,value.key)
          
        }
        console.log(this.state.arrs)
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        console.log(values)
      }
    });
  };

  render() {
    
    const { getFieldDecorator } = this.props.form;
    const {arr}=this.props
    
    const { selectedTags } = this.state;
    return (
      <>
        <h2 style={{ padding: "20px 0px" }}>查看试题</h2>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin:' 0 0 20px 0',
            height: 240,
            borderRadius:'15px'
          }}
          className='top_main'
        >
          {this.props.loading.global ? (
            <div>
              <Spin />
            </div>
          ) : (
            <div className="contnts">
              <div className="contnts_wrap">
                <h6 style={{ marginRight: 8, display: "inline" }}>课程类型:</h6>
                <div  className="contnts_list">
                  {tagsFromServer.map(tag => (
                  <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => this.handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
                </div>
                
              </div>
              <div>
                <div>
                  <span>考试类型:</span>
                  <Select
                    labelInValue
                    defaultValue={{ key: "周考一" }}
                    style={{ width: 120 }}
                    onChange={(e) => {
                      this.handleChanges(e);
                    }}
                  >
                    <Option value="周考一">周考一</Option>
                    <Option value="周考二">周考二</Option>
                    <Option value="周考三">周考三</Option>
                    <Option value="月考">月考</Option>
                  </Select>
                  ,
                </div>
                <div>
                  <span>考试类型:</span>
                  <Select
                    labelInValue
                    defaultValue={{ key: "手写代码" }}
                    style={{ width: 120 }}
                    onChange={(e) => {
                      this.handleChanges(e);
                    }}
                  >
                    <Option value="简答题">简答题</Option>
                    <Option value="代码阅读题">代码阅读题</Option>
                    <Option value="代码补全">代码补全</Option>
                    <Option value="修改错误">修改错误</Option>
                    <Option value="手写代码">手写代码</Option>
                  </Select>
                  ,
                </div>
                <div>
                  <Button
                    type="primary"
                    icon="search"
                    style={{ color: "#fff" }}
                    onClick={() => {
                      this.handleChanges();
                    }}
                  >
                    Search
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div>

            
          </div>
        </Content>
        <Content
        style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280,
            borderRadius:'15px'
          }}
        >




<Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
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
            />,
          )}
        </Form.Item>
        <Form.Item>

          
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>










        
          <Relist data={this.props.arr}/>
        </Content>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.list,
    loading: state.loading
  };
};

const mapDisaptchToProps = dispatch => {
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
  mapStateToProps,
  mapDisaptchToProps
)(Form.create({})(remoteList));
