import React, { useContext, useState } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const PROLINE = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 115px;
  display: flex;
  &:hover {
    outline: 1px solid
      ${(props) => (props.$mode === 'dog' ? '#ea5514' : '#00535c')};
  }
`;
const H1 = styled.h1`
  &:hover {
    color: ${(props) => (props.$mode === 'dog' ? '#ea5514' : '#00535c')};
  }
`;
const IMG_WRAP = styled.div`
  overflow: hidden;
  border-radius: 10px;
  height: 100%;
  margin-right: 10px;
`;
const INFO = styled.p`
  width: ${(props) => (props.showInfo === props.sid ? '600px' : '350px')};
  padding: 10px 0;
  overflow: hidden;
  white-space: ${(props) =>
    props.showInfo === props.sid ? 'normal' : 'nowrap'};
  text-overflow: ellipsis;
  font-size: 14px;
  cursor: pointer;
`;
const SHOW = styled.div`
  padding: 5px 10px;
  font-size: 10px;
  font-weight: 700;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  p {
    color: ${(props) => (props.$mode === 'dog' ? '#40220f' : '#00535c')};
    &:hover {
      color: ${(props) => (props.$mode === 'dog' ? '#956134' : '#00a29a')};
    }
  }
`;
const LINK = styled(Link)`
  padding: 5px 10px;
  text-decoration: none;
  color: ${(props) => (props.$mode === 'dog' ? '#40220f' : '#00535c')};
  font-weight: 700;
  &:hover {
    color: ${(props) => (props.$mode === 'dog' ? '#956134' : '#00a29a')};
  }
`;

function ProductLine({ product }) {
  const { mode } = useContext(SwitchButtonContext);
  const [showInfo, setShowInfo] = useState(0);
  const navigate = useNavigate();

  // setProductToLine

  return (
    <>
      {product.map((e, i) => {
        return (
          <PROLINE
            key={e.sid}
            $mode={mode}
            className=""
            style={{
              position: 'relative',
              backgroundColor: 'transparent',
              margin: '10px 0 ',
            }}
          >
            <IMG_WRAP>
              <img
                src={`/images/test/${e.img}`}
                alt=""
                style={{ height: '100%' }}
              />
            </IMG_WRAP>
            <div className="line_title_wrap" style={{ margin: '5px 10px' }}>
              <H1
                $mode={mode}
                style={{ fontSize: '16px', cursor: 'pointer' }}
                onClick={() => navigate(`detail/?sid=${e.sid}`)}
              >
                {e.name}
              </H1>
              <SHOW
                $mode={mode}
                onClick={() => {
                  if (showInfo === e.sid) {
                    setShowInfo(0);
                  } else {
                    setShowInfo(e.sid);
                  }
                }}
              >
                <p>{showInfo === e.sid ? '隱藏' : '顯示更多'}</p>
              </SHOW>
              <INFO
                showInfo={showInfo}
                sid={e.sid}
                onClick={() => {
                  if (showInfo === e.sid) {
                    setShowInfo(0);
                  } else {
                    setShowInfo(e.sid);
                  }
                }}
              >
                {e.info}
              </INFO>
            </div>
            <LINK
              $mode={mode}
              to={`detail/?sid=${e.sid}`}
              style={{ position: 'absolute', bottom: '0', right: '0' }}
            >
              詳細內容
            </LINK>
          </PROLINE>
        );
      })}
    </>
  );
}

export default ProductLine;
