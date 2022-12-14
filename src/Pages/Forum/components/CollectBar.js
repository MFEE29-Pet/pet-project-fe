import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './CollectBar.css';
import axios from 'axios';
import { GET_COLL, ADD_COLL, DEL_COLL } from '../my-config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CollectButton = ({ a_sid }) => {
  const [isLike, setIsCollect] = useState(false);
  const [collection, setCollection] = useState([]);
  const [indexNum, setIndexNum] = useState(-1);
  const [collectionNum, setCollectionNum] = useState([]);
  const onCollectButtonClick = () => {
    if (isLike !== true) {
      setIsCollect(true);
    } else {
      setIsCollect(false);
    }
  };
  const navigate = useNavigate();
  const m_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).sid
    : '未登入';
  // AJAX 抓文章收藏列表
  const getCollection = async () => {
    if (m_sid === '未登入') {
      // console.log('未登入，無法取得收藏列表');
      return;
    }
    const res = await axios.get(
      `http://localhost:6001/forum/collection?m_sid=${m_sid}`
    );
    console.log(res);
    const list = res.data.rows;

    setCollection(list);
    const numbers = collection.map((e, i) => e.a_sid);
    setCollectionNum(numbers);
    // console.log(collectionNum);
  };

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const sid = +params.get('sid') || 0;
  // console.log(a_sid);
  // console.log(collection.findIndex((e) => e.a_sid === a_sid));

  // let indexNum = [];
  // for (let i = 0; i < collectionList.length; i++) {
  //   indexNum.push(collectionList[i].p_sid);
  // }

  // 新增收藏
  const addCollect = async (forumSid) => {
    // 判斷登入
    if (m_sid === '未登入') {
      Swal.fire({
        title: '<strong>請先登入會員</strong>',
        icon: 'info',
      });
      navigate('/member/memberLogIn');
      return;
    }

    const res = await axios.get(`${ADD_COLL}?a_sid=${sid}&m_sid=${m_sid}`);

    const newCollection = [...collection, { a_sid: sid, m_sid: m_sid }];
    // localStorage.setItem('loved', JSON.stringify(newLoved));
    setCollection(newCollection);

    const index = newCollection.findIndex((e) => e.a_sid === forumSid);
    // 更改收藏狀態
    setIndexNum(index);
  };

  // 移除收藏
  const delCollection = async (forumSid, index) => {
    // 判斷登入
    if (m_sid === '未登入') {
      alert('請先登入會員');
      return;
    }

    const res = await axios.get(`${DEL_COLL}?a_sid=${sid}&m_sid=${m_sid}`);
    const loved1 = collection.slice(0, index);
    const loved2 = collection.slice(index + 1);
    const newLoved = loved1.concat(loved2);

    setCollection(newLoved);
    // 更改收藏狀態
    setIndexNum(-1);
  };

  // console.log(indexNum);

  useEffect(() => {
    getCollection();
  }, []);
  useEffect(() => {
    const index = collection
      ? collection.findIndex((e) => e.a_sid === sid)
      : -1;
    setIndexNum(index);
  }, []);
  useEffect(() => {
    const index = collection
      ? collection.findIndex((e) => e.a_sid === sid)
      : -1;
    setIndexNum(index);
  }, [collection, location]);
  return (
    <>
      <button
        className={
          indexNum === -1 ? 'forum_unCollect_button' : 'forum_Collect_button'
        }
        onClick={() => {
          if (indexNum === -1) {
            addCollect(sid);
          } else {
            delCollection(sid, indexNum);
          }
          // console.log(a_sid);
        }}
      >
        收藏
        <i
          className={`${
            collection.findIndex((v) => v.a_sid === sid) === -1
              ? 'fa-regular fa-bookmark'
              : 'fa-solid fa-bookmark'
          }`}
          id="forum_Collect"
        ></i>
      </button>
    </>
  );
};

export default function CollectBar({ a_sid }) {
  // console.log(a_sid);
  return <CollectButton a_sid={a_sid} />;
}
