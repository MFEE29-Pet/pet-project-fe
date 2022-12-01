import { useState } from 'react';
import './Member.css';
function MemberPetAdd() {
  const [addOpen, setAddOpen] = useState(true);
  
  return (
    <>
      <div class="peat-ship">
        <div class="peat-name">
          <div class="peat">
            <div class="peat-photo">
              <img src="../image/pet_dog_1.jpg" alt="" />
            </div>
            <div class="text">
              <span>狗勾</span>
              <span>阿柴醬</span>
              <span>2歲</span>
              <span>公性</span>
              <span>已節育</span>
              <span>PID-2960824</span>
            </div>
            <div class="icon">
              <i class="fa-regular fa-pen-to-square"></i>

              <i class="fa-light fa-trash-can"></i>
            </div>
          </div>
        </div>
        <div class="peat-name">
          <div class="peat">
            <div class="peat-photo">
              <img src="../image/pet_cat_2.jpg" alt="" />
            </div>
            <div class="text">
              <span>貓咪</span>
              <span>老爺子</span>
              <span>5歲</span>
              <span>母性</span>
              <span>已節育</span>
              <span>PID-1244908</span>
            </div>
            <div class="icon">
              <i class="fa-regular fa-pen-to-square"></i>

              <i class="fa-light fa-trash-can"></i>
            </div>
          </div>
        </div>
        <div class="peat-name">
          <div class="peat">
            <div class="peat-photo">
              <img src="../image/pet_dog_2.jpeg" alt="" />
            </div>
            <div class="text">
              <span>狗勾</span>
              <span>kuro</span>
              <span>7歲</span>
              <span>母性</span>
              <span>未節育</span>
              <span>PID-5621920</span>
            </div>
            <div class="icon">
              <i class="fa-regular fa-pen-to-square"></i>
              <i class="fa-light fa-trash-can"></i>
            </div>
          </div>
        </div>

        {addOpen && (
          <div class="addPetbutton" onClick={()=>{
            setAddOpen(!addOpen)
          }}>
          {/* 點擊以後Ｔ＝>F ! */}
            新增寵物資料
            <i class="fa-solid fa-plus-large"></i>
          </div>
        )}
        {addOpen || (
          <div class="peat-add">
            <div class="up-photo">
              <i class="fa-regular fa-upload"></i>
              上傳圖片
            </div>
            <div class="peatAll">
              <div class="peatAddID">
                <input type="text" id="uname" name="name" placeholder="名稱" />
                <input type="text" id="uname" name="name" placeholder="生日" />

                <div class="peatPID">
                  <label for="uname">PID - </label>
                  <input
                    type="text"
                    id="uname"
                    name="name"
                    placeholder="晶片編號"
                  />
                </div>
              </div>
              <div class="peatChoose">
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

                <input
                  type="button"
                  className="buttonAdd"
                  value="新增"
                  
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MemberPetAdd;
