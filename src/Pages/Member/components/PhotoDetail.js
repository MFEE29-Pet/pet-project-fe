import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

function PhotoDetail({ detailNum, open, i }) {
  const [data, setData] = useState([]);

  const getPhotoDetailData = async () => {
    const res = await axios.get(
      `http://localhost:6001/member/orderphotodetail/${detailNum}`
    );
    // console.log(res);

    const data = res.data.rows;

    const m_data = data.map((e, i) => {
      const { date } = e;
      return { ...data[i], date: dayjs(date).format('YYYY-MM-DD') };
    });
    setData(m_data);
  };
  console.log(data);

  useEffect(() => {
    getPhotoDetailData();
  }, [open]);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '10px',
        display: open === i ? 'block' : 'none',
      }}
    >
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th style={{ color: '#727171', fontSize: '16px' }}>頭像</th>
            <th style={{ color: '#727171', fontSize: '16px' }}>攝影師</th>
            <th style={{ color: '#727171', fontSize: '16px' }}>預約日期</th>
            <th style={{ color: '#727171', fontSize: '16px' }}>預約時段</th>
            <th style={{ color: '#727171', fontSize: '16px' }}>單價</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            const {
              date,
              day_parts,
              photographer_name,
              photographer_img,
              price,
            } = e;
            return (
              <tr key={i}>
                <td
                  style={{
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    height: '150px',
                  }}
                >
                  <img
                    src={`/images/${photographer_img}`}
                    alt=""
                    style={{ width: '100px', height: '100px' }}
                  />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  {photographer_name}
                </td>
                <td
                  style={{
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#727171',
                  }}
                >
                  {date}
                </td>
                {day_parts ? (
                  <td
                    style={{
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      color: '#727171',
                    }}
                  >
                    早上
                  </td>
                ) : (
                  <td
                    style={{
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      color: '#727171',
                    }}
                  >
                    下午
                  </td>
                )}

                <td
                  style={{
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#f00',
                  }}
                >
                  ${price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PhotoDetail;
