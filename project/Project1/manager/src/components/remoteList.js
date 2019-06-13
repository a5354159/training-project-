import React, { Component } from 'react';
import { Layout ,Checkbox, Button} from 'antd';
import { connect } from "dva";
import { get } from 'http';

// const { SubMenu } = Menu;
const { Content } = Layout;

class remoteList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          checked: true
          // disabled: false,
        };
        
      }
      
      toggleChecked = () => {
        this.setState({ checked: !this.state.checked });
      };
    
      // toggleDisable = () => {
      //   this.setState({ disabled: !this.state.disabled });
      // };
    
      onChange = e => {
        console.log('checked = ', e.target.checked);
        this.setState({
          checked: e.target.checked,
        });
      };

    render() {
      console.log(this.props.arr)
      const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${
        this.state.disabled ? 'Disabled' : 'Enabled'
      }`;
        return (
            <>
                 <h2 style={{padding: "20px 0px"}}>查看试题</h2>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
            borderRadius: 15
          }}
          >
          <div>

          <div>
        <p style={{ marginBottom: '20px' }}>
          <Checkbox
            checked={this.state.checked}
            disabled={this.state.disabled}
            onChange={this.onChange}
          >
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small" onClick={this.toggleChecked}>
            {/* {!this.state.checked ? 'Check' : 'Uncheck'} */}
          </Button>
        </p>
      </div>
          </div>
          <div>

            bot
          </div>
        </Content>
            </>
        );
    }
    componentDidMount(){
      
      this.props.selec({})
        // console.log(this.props)

    }
}

// export default remoteList;

const mapStateToProps = state => {
  return {
    ...state.selec
  };
};

const mapDisaptchToProps = dispatch => {
  return {
    selec(payload) {
      // console.log(payload)
      dispatch({
        type: "selec/selec",
        payload
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDisaptchToProps
)(remoteList)
