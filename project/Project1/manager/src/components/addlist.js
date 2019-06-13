import React, { Component,useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Table,
  Divider,
  Modal,
  Input,
  Form,
  Button
} from "antd";
// import { Layout, Menu, Select, Spin ,Input,Form,Button} from "antd";
import { connect } from "dva";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
    // let [showDialog,updateDialog]=useState(false)

class addlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag:false,
      visible: false
    };
    
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
      
  render() {
    const { getQuestion } = this.props;
    const { flag } = this.state
    const { getFieldDecorator } = this.props.form;
    const columns = [
      {
        title: "类型ID",
        dataIndex: "name"
      },
      {
        title: "类型名称",
        dataIndex: "age"
      },
      {
        title: "操作",
        dataIndex: "address"
      }
    ];
    const data = [
      {
        key: "1",
        name: "John Brown",
        age: "简答题",
        address: ""
      },
      {
        key: "2",
        name: "Jim Green",
        age: "代码补全",
        address: ""
      },
      {
        key: "3",
        name: "Joe Black",
        age: "简答题",
        address: ""
      }
    ];
    return (
      <div>
        <h2 style={{ padding: "20px 0px" }}>试题分类</h2>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0,
            minHeight: 280,
            borderRadius: 15
          }}
        >
          <div className="style_buttons__z2xtt">
          Open Modal
            <Button
              type="button"
              className="ant-btn ant-btn-primary ant-btn-lg"
              // onClick={() => {
              //   // this.state.flag=true
              //   this.addList()
              // }}
              onClick={this.showModal}
            >
              <i aria-label="图标: plus" className="anticon anticon-plus">
                <svg
                  viewBox="64 64 896 896"
                  className=""
                  data-icon="plus"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M848 474H550V152h-76v322H176c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h298v322h76V550h298c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                </svg>
              </i>
              <span
                style={{ color: "#fff" }}
                
              >
                添加类型
              </span>
            </Button>
          </div>

          <div>
            <Modal visible={this.state.visible} onOk={this.handleOk}
          onCancel={this.handleCancel}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator("username", {
                    rules: [
                      { required: true, message: "Please input your username!" }
                    ]
                  })(
                    <Input
                      // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="请输入试题类型"
                    />
                  )}
                </Form.Item>
              </Form>
            </Modal>

            <Table columns={columns} dataSource={data} size="middle" />
          </div>
        </Content>
      </div>
    );
  }
  componentDidMount() {
    this.props.getQuestion();
  }
  addList() {
    console.log("a");
    this.setState({
      flag:true
    })
  }
}

const mapStateToProps = state => {
  console.log("state:", state);
  return {
    loading: state.loading.global
  };
};

const mapDisaptchToProps = dispatch => {
  return {
    getQuestion(payload) {
      // console.log(payload)
      dispatch({
        type: "getQuestion/getQuestion",
        payload
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(Form.create()(addlist));
