import React from 'react';
import './Issuing.css';

function Issuing({ date }) {
  return (
    <>
      <div className="issuing_bar">發表於{date}</div>
    </>
  );
}

export default Issuing;
