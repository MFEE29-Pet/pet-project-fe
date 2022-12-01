import React from 'react';
import { useContext } from 'react' ;
import SwitchButtonContext from '../../contexts/SwitchButtonContext'
function ForgrtPasswordsuccess() {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <>
      <div className="fill"></div>
      <div className="success">
        <h1>修改成功</h1>
      </div>
    </>
  );
}

export default ForgrtPasswordsuccess;
