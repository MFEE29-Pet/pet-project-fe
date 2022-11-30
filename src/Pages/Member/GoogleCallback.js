import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

function GoogleCallback() {
  const location = useLocation();

  const code = new URLSearchParams(location.search).get('code')

  console.log(code);
  

  const googleBack = async () => {
    const res = await axios.get(
      `http://localhost:6001/member/callback?code=${code}`
    );
    console.log(res);
  };

  useEffect(() => {
    googleBack();
  }, []);

  //console.log(usp);
  return <div>GoogleCallback</div>;
}

export default GoogleCallback;
