import { useContext } from 'react';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';
import './Member.css';

function MemberSignsuccess() {
  const { mode } = useContext(SwitchButtonContext);

  return (
    <>
      <div className="fill"></div>
      <div className="success">
        <h1>註冊成功</h1>
      </div>
    </>
  );
}

export default MemberSignsuccess;
