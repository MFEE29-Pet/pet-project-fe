import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import { useContext, useState, useEffect } from 'react';
import StarRate from './StarRate';
import axios from 'axios';
import { INSERT_REPLY } from '../my-config';
import { useLocation } from 'react-router-dom';

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

function ReplyPopup({ showDiv, setShowDiv, sid }) {
  const { mode } = useContext(SwitchButtonContext);
  const [starValue, setStarValue] = useState(0);
  const [pSid, setPSid] = useState(sid);
  // console.log(pSid);

  let initFields = {
    scores: starValue,
    comment: '',
    p_sid: pSid || 0,
    m_sid: 1,
    // localStorage or session 取得
    o_sid: 1,
    // 考慮刪除
  };
  // 傳送出去的資料
  const [fields, setFields] = useState(initFields);

  // console.log(starValue);
  // console.log(fields);

  // console.log(sid);
  // const inputFields = { ...fields };
  // console.log(inputFields.scores);

  useEffect(() => {
    setFields({ ...fields, p_sid: sid });
  }, [showDiv]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fields.comment) {
      alert('請輸入評價');
      return;
    } else if (fields.scores === 0) {
      alert('請輸入評價');
      return;
    }
    await setFields({ ...fields, p_sid: sid });

    const res = await axios.post(`${INSERT_REPLY}`, fields);
    console.log(res);

    setShowDiv(!showDiv);
    // setFields(initFields);
  };
  // console.log(INSERT_REPLY);
  // const fd = new FormData(form);

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
          <StarRate
            setStarValue={setStarValue}
            setFields={setFields}
            fields={fields}
          />
        </div>
        <form
          id="form"
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <input type="number" name="p_sid" value={sid} readOnly hidden />
          <input type="number" name="m_sid" defaultValue={1} hidden />
          <input type="number" name="o_sid" defaultValue={1} hidden />
          {/* 接收星星的值 */}
          <input
            type="number"
            value={starValue}
            name="scores"
            hidden
            readOnly
          />
          <Textarea
            name="comment"
            id=""
            cols="40"
            rows="10"
            placeholder="留下商品評價"
            onChange={handleChange}
          />
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
              onClick={handleSubmit}
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
