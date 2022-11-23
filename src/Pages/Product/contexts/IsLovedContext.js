import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ADD_LOVED, GET_LOVED, DEL_LOVED } from '../my-config';

const IsLovedContext = createContext([]);

export default IsLovedContext;

export const IsLovedContextProvider = function ({ children }) {
  let initLoved = {
    p_sid: 1,
    m_sid: 0,
  };
  // if (localStorage.getItem('loved')) {
  //   initLoved = JSON.parse(localStorage.getItem('cartItem'));
  // } else {
  //   initLoved = {
  //     p_sid: 1,
  //     m_sid: 0,
  //   };
  // }
  const [lovedList, setLovedList] = useState([initLoved]);
  // 收藏狀態
  const [loved, setLoved] = useState(false);
  const m_sid = JSON.parse(localStorage.getItem('auth')).sid || 0;

  const getLovedList = async () => {
    if (!m_sid) {
      console.log('未登入，無法取得收藏列表');
      return;
    }
    const res = await axios.get(`${GET_LOVED}?m_sid=${m_sid}`);

    const list = res.data.rows;
    const loved = list.map((e, i) => {
      return { p_sid: e.p_sid, m_sid: e.m_sid, isLoved: true };
    });
    // console.log(loved);
    setLovedList(loved);
    localStorage.setItem('loved', JSON.stringify(loved));

    // console.log(list);
  };

  // let initLoved = {
  //   p_sid: 0,
  //   m_sid: JSON.parse(localStorage.getItem('auth')).sid || 0, // 從localStorage中抓取 m_sid
  //   isLoved: false,
  // };

  // 新增收藏
  const addLoved = async (productSid) => {
    // 判斷登入
    if (!m_sid) {
      alert('請先登入會員');
      return;
    }

    const res = await axios.get(
      `${ADD_LOVED}?p_sid=${productSid}&m_sid=${m_sid}`
    );
    // console.log(res.data);
    const newLoved = [
      ...lovedList,
      { p_sid: productSid, m_sid: m_sid, isLoved: true },
    ];
    localStorage.setItem('loved', JSON.stringify(newLoved));
    setLovedList(newLoved);
    setLoved(true);
  };

  // 移除收藏
  const delLoved = async (productSid, index) => {
    // 判斷登入
    if (!m_sid) {
      alert('請先登入會員');
      return;
    }

    const res = await axios.get(
      `${DEL_LOVED}?p_sid=${productSid}&m_sid=${m_sid}`
    );
    const loved1 = JSON.parse(localStorage.getItem('loved')).slice(0, index);
    const loved2 = JSON.parse(localStorage.getItem('loved')).slice(index + 1);
    const newLoved = loved1.concat(loved2);
    localStorage.setItem('loved', JSON.stringify(newLoved));
    setLovedList(newLoved);
    setLoved(false);
    // console.log(res.data);
  };
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const sid = +params.get('sid') || 0;
  // let index = lovedList.findIndex((e) => e.p_sid === sid);

  useEffect(() => {
    getLovedList();
  }, []);
  console.log(...lovedList);

  return (
    <IsLovedContext.Provider
      value={{ lovedList, setLovedList, delLoved, addLoved, loved, setLoved }}
    >
      {children}
    </IsLovedContext.Provider>
  );
};
