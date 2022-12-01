import React from 'react';
import { useContext } from 'react';
import SwitchButtonContext from '../../contexts/SwitchButtonContext';
function ForgrtPasswordsuccess() {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <>
      <div className="passWordfill"></div>
      <div className="passWordsuccess">
        <h1>修改成功</h1>
      </div>
    </>
  );
}

export default ForgrtPasswordsuccess;
