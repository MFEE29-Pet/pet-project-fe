import { useState } from 'react';
import styled from  './Member.module.scss';
function MemberPetAdd() {
  const [photos, setPhotos] = useState('');
  const [addOpen, setAddOpen] = useState(true);
  const [user, setUser] = useState({
    pet_pid: '',
    pet_name: '',
    Kind_of_pet: '',
  });

  // const addUser = async () => {
  //   const fd = new FormData();
  //   fd.append('avatar', userPhoto);
  // }

  return (
    <>
      <div className={styled.peatShip}>
        <div className={styled.peatName}>
          <div className={styled.peat}>
            <div className={styled.peatPhoto}>
              <img src="../image/pet_dog_1.jpg" alt="" />
            </div>
            <div className={styled.text}>
              <span>狗勾</span>
              <span>阿柴醬</span>
              <span>2歲</span>
              <span>公性</span>
              <span>已節育</span>
              <span>PID-2960824</span>
            </div>
            <div className={styled.peticon}>
              <i className="fa-regular regular fa-pen-to-square"></i>

              <i className="fa-light fa-trash-can"></i>
            </div>
          </div>
        </div>
          <div className={styled.peatName}>
          <div className={styled.peat}>
            <div className={styled.peatPhoto}>
              <img src="../image/pet_cat_2.jpg" alt="" />
            </div>
            <div className={styled.text}>
              <span>貓咪</span>
              <span>老爺子</span>
              <span>5歲</span>
              <span>母性</span>
              <span>已節育</span>
              <span>PID-1244908</span>
            </div>
            <div className={styled.peticon}>
              <i className="fa-regular regular fa-pen-to-square"></i>

              <i className="fa-light fa-trash-can"></i>
            </div>
          </div>
        </div>
        <div className={styled.peatName}>
          <div className={styled.peat}>
            <div className={styled.peatPhoto}>
              <img src="../image/pet_dog_2.jpeg" alt="" />
            </div>
            <div className={styled.text}>
              <span>狗勾</span>
              <span>kuro</span>
              <span>7歲</span>
              <span>母性</span>
              <span>未節育</span>
              <span>PID-5621920</span>
            </div>
            <div className={styled.peticon}>
              <i className="fa-regular regular fa-pen-to-square"></i>
              <i className="fa-light fa-trash-can"></i>
            </div>
          </div>
        </div>

        {addOpen && (
          <div
            className={styled.addPetbutton}
            onClick={() => {
              setAddOpen(!addOpen);
            }}
          >
            {/* 點擊以後Ｔ＝>F ! */}
            新增寵物資料
            <i className="fa-solid fa-plus-large"></i>
          </div>
        )}
        {addOpen || (
          <div className={styled.peatAdd}>
            <div className={styled.upPhoto}>
              {photos === '' ? (
                <i className="fa-regular regular fa-upload"></i>
              ) : (
                <img src={photos} alt="" />
              )}
              上傳圖片
            </div>
            <div className={styled.peatAll}>
              <div className={styled.peatAddID}>
                <input type="text" id="uname" name="name" placeholder="名稱" />
                <input type="text" id="uname" name="name" placeholder="生日" />
                <div style={{width:'40px',height:'30px'}}></div>
                <div className={styled.peatPID}>
                  <label for="uname">PID - </label>
                  <input
                    type="text"
                    id="uname"
                    name="name"
                    placeholder="晶片編號"
                  />
                </div>
              </div>
              <div className={styled.peatChoose}>
                <select name="" id="">
                  <option value="">寵物類型</option>
                  <option value="">拉布拉多</option>
                  <option value="">邊境牧羊犬</option>
                  <option value="">泰迪</option>
                </select>
                <select name="" id="">
                  <option value="">性別</option>
                  <option value="">小男森</option>
                  <option value="">小女森</option>
                </select>
                <select name="" id="">
                  <option value="">是否節育</option>
                  <option value="">已節育</option>
                  <option value="">未節育</option>
                </select>

                <input type="button" className={styled.buttonAdd} value="新增" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MemberPetAdd;
