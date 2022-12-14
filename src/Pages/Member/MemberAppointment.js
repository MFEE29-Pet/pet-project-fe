import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Member.css';

const MySwal = withReactContent(Swal);
function MemberAppointment() {
  const [clinicData, setClinicData] = useState([]);
  //取出會員ID
  const memberID = JSON.parse(localStorage.getItem('auth'));
  const getClinicData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:6001/member/clinicdata/${memberID.sid}`
      );

      const data = res.data.rows;
      //console.log(data);

      const daydata = data.map((e, i) => {
        const { date } = e;
        return { ...data[i], date: dayjs(date).format('YYYY/MM/DD') };
      });
      console.log(daydata);

      setClinicData(daydata);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getClinicData();
  }, []);

  const delData = async (sid) => {
    const res = await axios.delete(
      `http://localhost:6001/member/delclinic/${sid}`
    );
    if (res.data.success) {
      MySwal.fire({
        title: <strong>成功刪除</strong>,
        icon: 'success',
      });
    }

    getClinicData();
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          height: '800px',
          marginTop: '80px',
          fontSize: '20px',
        }}
      >
        <h2 className="text_main_dark_color2" style={{ marginBottom: '20px' }}>
          掛號預約紀錄
        </h2>
        {clinicData.map((e, i) => {
          const {
            address,
            code,
            mobile,
            clinic_name,
            date,
            reserve_sid,
            time,
          } = e;
          return (
            <div className="Hospital-all" key={i}>
              <div className="Hospital-order">
                {dayjs(date).valueOf() < +new Date() ? (
                  <>
                    <h3>已完成</h3>
                  </>
                ) : (
                  <>
                    <h3>進行中</h3>
                    <h3
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        delData(reserve_sid);
                      }}
                    >
                      取消預約
                    </h3>
                  </>
                )}
              </div>
              <div className="Hospital-info">
                <h2 style={{ fontSize: '20px' }}>診所資訊</h2>
                <div className="Hospital-A">
                  <h5>診所</h5>
                  <span>{clinic_name}</span>
                </div>
                <div className="Hospital-A">
                  <h5>地址</h5>
                  <span>
                    {code}
                    {address}
                  </span>
                </div>
                <div className="Hospital-A">
                  <h5>電話</h5>
                  <span>{mobile}</span>
                </div>
              </div>
              <div className="time">
                <h2 style={{ fontSize: '20px' }}>預約時間</h2>
                <div className="Hospital-A">
                  <h5>日期</h5>
                  <span>{date}</span>
                </div>
                <div className="Hospital-A">
                  <h5>時段</h5>
                  {time === 1 ? <span>早診</span> : <></>}
                  {time === 2 ? <span>午診</span> : <></>}
                  {time === 3 ? <span>晚診</span> : <></>}
                </div>
                <div className="Hospital-A">
                  <h5>序號</h5>
                  <span>06</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MemberAppointment;
