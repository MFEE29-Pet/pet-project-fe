import React, { Component } from 'react';
import './InputComponent.css';

export default class InputComponent extends Component {
  constructor() {
    super();
    this.state = {
      inputMess: '',
    };
  }
  render() {
    return (
      <div className="sendEvaluate">
        <img
          className="headImg"
          src="https://xhs-rookies.com/img/rookie-icon.png"
          alt=""
        />
        <div className="inputBox">
          <textarea
            className="inputText"
            placeholder="請輸入回覆"
            value={this.state.inputMess}
            onChange={(e) => this.getEvaluate(e)}
          />
          <button
            className="btn_post bg_main_light_color1"
            id="send_reply"
            onClick={() => this.sendSubmit()}
          >
            發文
          </button>
        </div>
      </div>
    );
  }
  // 獲取輸入內容
  getEvaluate(e) {
    this.setState({
      inputMess: e.target.value,
    });
  }
  // 點擊提交
  sendSubmit() {
    this.props.sendSubmit(this.state.inputMess);
    // 清空輸入框內容
    this.setState({
      inputMess: '',
    });
  }
}
