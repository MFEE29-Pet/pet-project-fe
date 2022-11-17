import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import { useContext, useState } from 'react';
import StarRate from './StarRate';

const ReplyBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.152);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
`;

const Reply = styled.div`
  width: 480px;
  height: 450px;
  position: absolute;
  background-color: ${(props) =>
    props.$mode === 'dog' ? '#fff5de' : '#a4ced0'};
  top: 20%;
  left: 30%;
  z-index: 10;
  border-radius: 15px;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.62);
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 10px;
  border: none;
  &:focus {
    outline: 2px solid #f8b62b;
  }
  resize: none;
`;

function ReplyPopup({ showDiv, setShowDiv }) {
  const { mode } = useContext(SwitchButtonContext);
  const [starValue, setStarValue] = useState(0);
  console.log(starValue);
  // const [showDiv, setShowDiv] = useState(false);
  return (
    <ReplyBackground style={{ display: `${showDiv ? 'block' : 'none'}` }}>
      <Reply
        $mode={mode}
        style={{
          display: `${showDiv ? 'flex' : 'none'}`,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <p
          type="button"
          onClick={() => {
            setShowDiv(!showDiv);
          }}
        >
          X
        </p> */}

        <div
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '20px',
          }}
        >
          <img
            src="/images/test/person_5.jpeg"
            style={{
              textAlign: 'center',
              objectFit: 'contain',
              height: '100%',
              position: 'absolute',
              left: '-25px',
            }}
            alt="person_image"
          />
        </div>
        <div
          className="star-wrap"
          style={{ marginBottom: '20px', fontSize: '30px' }}
        >
          <StarRate setStarValue={setStarValue} />
        </div>
        <form
          action=""
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* 接收星星的值 */}
          <input type="number" defaultValue={starValue} hidden />
          <Textarea
            name=""
            id=""
            cols="40"
            rows="10"
            placeholder="留下商品評價"
            onChange={() => {}}
          ></Textarea>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <button
              type="button"
              className="text_main_dark_color2"
              style={{
                borderRadius: '20px',
                border: 'none',
                padding: '10px 40px',
                fontWeight: 'bold',
                textDecoration: 'underline',
                background: 'rgba(0,0,0,0)',
              }}
              onClick={() => {
                setShowDiv(!showDiv);
              }}
            >
              取消
            </button>
            {/* 要改submit */}
            <button
              type="button"
              className="bg_main_light_color1"
              style={{
                borderRadius: '20px',
                border: 'none',
                padding: '10px 40px',
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              確定
            </button>
          </div>
        </form>
      </Reply>
    </ReplyBackground>
  );
}

export default ReplyPopup;
