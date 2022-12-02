import React, { Component } from "react";
import "./EvaluateComponent.css";

export class EvaluateComponent extends Component {
  render() {
    return (
      <div className="evaluateBox">
        <div className="titleText">所有回覆</div>
        {/* 接收留言列表, 展開展示 */}
        {this.props.evaluateList.map((item) => {
          return (
            <div className="evaluateItem">
              <img className="headImg" src={item.imgUrl} alt="" />
              <div className="senderProfile">
                <div className="nickNameBox">
                  <div className="nickName">{item.nickName}</div>
                  <div className="sendTime">{item.sendTime}</div>
                </div>
                <div className="evaluate">{item.evaluate}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default EvaluateComponent;
