import React, { useState } from 'react';
import axios from 'axios';

function Pay() {
  const [data, setData] = useState('');

  const getOpay = async () => {
    try {
      const res = await axios.get('http://localhost:6001/clinic/paymentaction');


      setData(res.data);

      console.log(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  function createMarkup() {
    return {__html: data};
  }


  return (
    <>
      <button onClick={getOpay}>結帳</button>
      <div dangerouslySetInnerHTML={createMarkup()}>

      </div>
    </>
  );
}

export default Pay;
