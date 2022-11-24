import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
  cursor: pointer;
  .title {
    color: $font_color;
    font-size: 20px;
    font-weight: 700;
  }
  .address {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 14px;
    color: $font_color;
    i {
      width: 10%;
      font-size: 20px;
      text-align: center;
      color: $btn1_bg;
    }
    h2 {
      width: 85%;
      font-weight: 500;
    }
  }
  .phone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 14px;
    color: $font_color;
    i {
      width: 10%;
      font-size: 20px;
      text-align: center;
      color: $btn1_bg;
    }
    h2 {
      width: 85%;
      font-weight: 500;
    }
  }
  .reserve {
    background: none;
    border: none;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function ClinicItem({ name, address, mobile,code, sid, lat, lng,setLocation }) {
  

  const navigate = useNavigate();
  return (
    <ResultBox>
      <div className="title text_main_dark_color2">{name}</div>
      <div className="address">
        <i className="fa-sharp fa-solid fa-location-dot text_main_light_color1"></i>
        <h2>{code}{address}</h2>
      </div>
      <div className="phone">
        <i className="fa-sharp fa-solid fa-phone text_main_light_color1"></i>
        <h2>{mobile}</h2>
      </div>
      <Button>
        <button
          className="reserve text_main_light_color1"
          onClick={() => {
            setLocation({lat:lat,lng:lng})

          }}
        >
          尋找
        </button>
        {/* {console.log(location, name)} */}
        <button
          className="reserve text_main_light_color1"
          onClick={() => {
            navigate(`reserve/?sid=${sid}`);
          }}
        >
          預約
        </button>
      </Button>
    </ResultBox>
  );
}

export default ClinicItem;
