import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import { useContext, useState } from 'react';

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
  width: 300px;
  height: 300px;
  position: absolute;
  background-color: ${(props) =>
    props.$mode === 'dog' ? '#fff5de' : '#a4ced0'};
  top: 30%;
  left: 30%;
  z-index: 10;
`;

function ReplyPopup({ showDiv, setShowDiv }) {
  const { mode } = useContext(SwitchButtonContext);
  // const [showDiv, setShowDiv] = useState(false);
  return (
    <ReplyBackground style={{ display: `${showDiv ? 'block' : 'none'}` }}>
      <Reply $mode={mode} style={{ display: `${showDiv ? 'block' : 'none'}` }}>
        <button
          type="button"
          onClick={() => {
            setShowDiv(!showDiv);
          }}
        >
          X
        </button>
        <div style={{ borderRadius: '50%', width: '200px' }}>
          <img src="" style={{ width: '20%' }} alt="" />
        </div>
      </Reply>
    </ReplyBackground>
  );
}

export default ReplyPopup;
