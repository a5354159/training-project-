import React, { Component } from "react";
import './Relist.scss'
class Relist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { data } = this.props;
    return (
      <>
        <div className="ant-layout-content">
          <div className="ant-list demo-loadmore-list ant-list-split">
            <div className="ant-spin-nested-loading">
              <div className="ant-spin-container">
                {data.code === 1
                  ? data.data.map((item,index )=> {
                      return (
                        <div className="ant-list-item" key={index}>
                          <div className="ant-list-item-content ant-list-item-content-single">
                            <div className="ant-list-item-meta">
                              <div className="ant-list-item-meta-content">
                                <h4 className="ant-list-item-meta-title">
                                  {item.title}
                                </h4>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div className="ant-tag ant-tag-blue">
                                  {item.questions_type_text}
                                </div>
                                <div className="ant-tag ant-tag-geekblue">
                                  javaScript的上
                                </div>
                                <div className="ant-tag ant-tag-orange">
                                  {item.exam_name}
                                </div>
                              </div>
                              <span>{item.user_name} 发布</span>
                            </div>
                          </div>
                          <ul className="ant-list-item-action">
                            <li>
                              <a data-id={item.questions_id}> 编辑</a>
                            </li>
                          </ul>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Relist;
