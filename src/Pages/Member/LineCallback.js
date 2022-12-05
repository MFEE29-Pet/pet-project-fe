import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

function LineCallback() {
  const location = useLocation();

  const code = new URLSearchParams(location.search).get('code');

  const lineBack = async () => {
    const { data } = await axios.get(
      `http://localhost:6001/member/linecallback?code=${code}`
    );

    console.log(data);
  };

  useEffect(() => {
    lineBack();
  }, []);

  return <div>LineCallback</div>;
}

export default LineCallback;
