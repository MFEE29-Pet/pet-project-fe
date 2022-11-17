import React from 'react';
import './ButtonBar.css';

function ButtonBar() {
  return (
    <>
      <div className="btn_area">
        <button className="btn_total bg_main_light_color1" id="" onClick="">
          綜合
        </button>
        <button className="btn_total bg_main_light_color1" onClick="">
          閒聊
        </button>
        <button className="btn_total bg_main_light_color1" onClick="">
          發問
        </button>
        <button className="btn_total bg_main_light_color1" onClick="">
          活動
        </button>
        <button className="btn_total bg_main_light_color1" onClick="">
          送養
        </button>
        <button className="btn_total bg_main_light_color1" onClick="">
          領養
        </button>
        <button className="btn_total bg_main_light_color1" onClick="">
          其他
        </button>
      </div>
    </>
  );
}

export default ButtonBar;
