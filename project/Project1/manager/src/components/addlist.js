import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Table, Divider, Tag } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class addlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
        age: '简答题',
        address: ""
      },
      {
        key: "2",
        name: "Jim Green",
        age: '代码补全',
        address: ""
      },
      {
        key: "3",
        name: "Joe Black",
        age: '简答题',
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
            <button type="button" className="ant-btn ant-btn-primary ant-btn-lg">
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
              <span style={{ color: "#fff" }}>添加类型</span>
            </button>
          </div>

          <div>
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
        </Content>
      </div>
    );
  }
}

export default addlist;
