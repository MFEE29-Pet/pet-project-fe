import { useEffect, useState, useRef } from 'react';
import './Member.css';
import axios from 'axios';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {imgUrl} from '../../config'

const MySwal = withReactContent(Swal);
function MemberPetAdd() {
  const [addOpen, setAddOpen] = useState(true);
  const [petData, setPetData] = useState([]);
  //新增欄位狀態
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [pid, setPid] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [control, setControl] = useState('');

  const changeHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      setIsFilePicked(true);
      setSelectedFile(file);
    } else {
      setIsFilePicked(false);
      setSelectedFile(null);
    }
  };
  //圖片上傳
  //選擇檔案
  const [selectedFile, setSelectedFile] = useState(null);
  // console.log(selectedFile);
  //是否有檔案被選到
  const [isFilePicked, setIsFilePicked] = useState(null);
  //預覽圖片
  const [preview, setPreview] = useState('');
  //上傳圖片Button
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  //當選擇檔案更動時建立預覽圖
  useEffect(() => {
    if (!selectedFile) {
      setPreview('');
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);

    console.log(objectUrl);

    setPreview(objectUrl);

    //當元件unmounted時清除記憶體
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  //取出會員ID
  const memberID = JSON.parse(localStorage.getItem('auth'));

  const getPetData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:6001/member/petdata/${memberID.sid}`
      );

      const data = res.data.rows;

      const agedata = data.map((e, i) => {
        const { pet_birthday } = e;
        return {
          ...data[i],
          pet_birthday: Math.ceil(dayjs(pet_birthday).valueOf() / +new Date()),
        };
      });
      // console.log(agedata);

      setPetData(agedata);
    } catch (e) {
      console.log(e.message);
    }
  };

  const sendData = async () => {
    const date = dayjs(birthday).format('YYYY/MM/DD');
    const pic_name = type === '狗' ? 'dog.png' : 'cat.png';

    const fd = new FormData();

    fd.append('name', name);
    fd.append('birthday', date);
    fd.append('pid', pid);
    fd.append('type', type);
    fd.append('gender', gender);
    fd.append('control', control);
    fd.append('memberID', memberID.sid);
    fd.append('pet_photo', selectedFile || pic_name);

    console.log(name, date, pid, type, gender, control, pic_name);

    const { data } = await axios.post(
      'http://localhost:6001/member/addpet',
      fd
    );

    setAddOpen(!addOpen);
    setPreview('');

    console.log(data);
    if (data.success) {
      MySwal.fire({
        title: <strong>新增成功</strong>,
        icon: 'success',
      });
      getPetData();
    }
  };

  const delData = async (sid) => {
    const res = await axios.delete(
      `http://localhost:6001/member/delpet/${sid}`
    );
    MySwal.fire({
        title: <strong>成功刪除</strong>,
        icon: 'success',
      });
    getPetData();
    console.log(res);
  };

  useEffect(() => {
    getPetData();
  }, []);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          height:'800px',
          marginTop: '80px',
          fontSize: '20px',
        }}
      >
        <h2 className="text_main_dark_color2" style={{ marginBottom: '20px' }}>
          我的寵物列表
        </h2>
        {petData.map((e, i) => {
          const {
            sid,
            pet_pid,
            pet_name,
            Kind_of_pet,
            pet_gender,
            pet_birthday,
            birth_control,
            pet_photo,
          } = e;
          return (
            <div className="peat-name" key={i}>
              <div className="peat">
                <div className="peat-photo">
                  <img src={`http://localhost:6001/uploads/imgs/${pet_photo}`} alt="" />
                </div>
                <div className="pet_text text_main_dark_color2">
                  <div
                    style={{
                      width: '10%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {Kind_of_pet}
                  </div>
                  <div
                    style={{
                      width: '20%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {pet_name}
                  </div>
                  <div
                    style={{
                      width: '10%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {pet_birthday}歲
                  </div>
                  <div
                    style={{
                      width: '10%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {pet_gender}性
                  </div>
                  <div
                    style={{
                      width: '20%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {birth_control}
                  </div>
                  <div
                    style={{
                      width: '20%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    PID-{pet_pid}
                  </div>
                </div>
                <div className="pet_icon">
                  <i
                    className="fa-regular fa-pen-to-square"
                    style={{ cursor: 'pointer', color: '#cac9c9' }}
                  ></i>
                  <i
                    className="fa-light light fa-trash-can trash"
                    style={{ cursor: 'pointer', color: '#cac9c9' }}
                    onClick={() => {
                      delData(sid);
                    }}
                  ></i>
                </div>
              </div>
            </div>
          );
        })}

        <div className="peat-ship">
          {addOpen && (
            <div
              className="addPetbutton text_main_dark_color2"
              onClick={() => {
                setAddOpen(!addOpen);
              }}
            >
              {/* 點擊以後Ｔ＝>F !做反向 */}
              新增寵物資料
              <i className="fa-regular fa-plus text_main_dark_color2"></i>
            </div>
          )}
          {addOpen || (
            <div className="peat-add">
              <div className="photo">
                <div className="up-photo" style={{ overflow: 'hidden' }}>
                  {isFilePicked ? (
                    <img src={preview} alt="" style={{ width: '100%' }} />
                  ) : type === '狗' ? (
                    <img
                      src={`${imgUrl}/images/dog_1.png`}
                      alt=""
                      style={{ height: '50%', objectFit: 'cover' }}
                    />
                  ) : (
                    <img
                      src={`${imgUrl}/images/cat_1.png`}
                      alt=""
                      style={{ height: '50%', objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div
                  style={{
                    border: '1px solid #727171',
                    borderRadius: '15px',
                    padding: '5px 10px',
                    color: '#727171',
                    cursor: 'pointer',
                  }}
                  onClick={handleClick}
                >
                  上傳照片
                </div>
                <input
                  type="file"
                  onChange={changeHandler}
                  ref={hiddenFileInput}
                  style={{ display: 'none' }}
                />
              </div>
              <div className="peatAll">
                <div className="peatAddID">
                  <input
                    type="text"
                    id="uname"
                    name="name"
                    value={name}
                    placeholder="名稱"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <input
                    type="date"
                    id="uname"
                    name="name"
                    value={birthday}
                    placeholder="生日"
                    onChange={(e) => {
                      setBirthday(e.target.value);
                    }}
                  />

                  <div className="peatPID">
                    <label htmlFor="uname">PID - </label>
                    <input
                      type="text"
                      id="uname"
                      name="name"
                      value={pid}
                      placeholder="晶片編號"
                      onChange={(e) => {
                        setPid(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="peatChoose">
                  <select
                    name=""
                    id=""
                    style={{
                      width: '20%',
                      height: '30px',
                      borderRadius: '20px',
                      color: '#727171',
                      backgroundColor: '#fff',
                      padding: '5px 10px',
                      outline: 'none',
                    }}
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      寵物類型
                    </option>
                    <option value="狗">狗</option>
                    <option value="貓">貓</option>
                  </select>
                  <select
                    name=""
                    id=""
                    style={{
                      width: '20%',
                      height: '30px',
                      borderRadius: '20px',
                      color: '#727171',
                      backgroundColor: '#fff',
                      padding: '5px 10px',
                      outline: 'none',
                    }}
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      性別
                    </option>
                    <option value="公">公</option>
                    <option value="母">母</option>
                  </select>
                  <select
                    name=""
                    id=""
                    style={{
                      width: '20%',
                      height: '30px',
                      borderRadius: '20px',
                      color: '#727171',
                      backgroundColor: '#fff',
                      padding: '5px 10px',
                      outline: 'none',
                    }}
                    value={control}
                    onChange={(e) => {
                      setControl(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      是否節育
                    </option>
                    <option value="已節育">已節育</option>
                    <option value="未節育">未節育</option>
                  </select>

                  <input
                    type="button"
                    className="bg_main_light_color1"
                    style={{
                      color: '#fff',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '18px',
                      cursor: 'pointer',
                    }}
                    value="新增"
                    onClick={sendData}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MemberPetAdd;
