import { useState } from 'react';
import './Member.css';
function MemberPetAdd() {
  const [addOpen, setAddOpen] = useState(true);
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          marginTop: '80px',
          fontSize: '20px',
        }}
      >
        <h2 className="text_main_dark_color2" style={{ marginBottom: '20px' }}>
          我的寵物列表
        </h2>
        <div class="peat-ship">
          <div class="peat-name">
            <div class="peat">
              <div class="peat-photo">
                <img src="../image/pet_dog_1.jpg" alt="" />
              </div>
              <div class="pet_text text_main_dark_color2">
                <div
                  style={{
                    width: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  狗勾
                </div>
                <div
                  style={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  阿柴醬
                </div>
                <div
                  style={{
                    width: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  2歲
                </div>
                <div
                  style={{
                    width: '10%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  公性
                </div>
                <div
                  style={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  已節育
                </div>
                <div
                  style={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  PID-2960824
                </div>
              </div>
              <div class="pet_icon">
                <i class="fa-regular fa-pen-to-square text_main_dark_color2" style={{cursor:'pointer'}}></i>
                <i class="fa-light light fa-trash-can trash text_main_dark_color2" style={{cursor:'pointer'}}></i>
              </div>
            </div>
          </div>

          {addOpen && (
            <div
              class="addPetbutton text_main_dark_color2"
              onClick={() => {
                setAddOpen(!addOpen);
              }}
            >
              {/* 點擊以後Ｔ＝>F !做反向 */}
              新增寵物資料
              <i class="fa-regular fa-plus text_main_dark_color2"></i>
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
                  <input
                    type="text"
                    id="uname"
                    name="name"
                    placeholder="名稱"
                  />
                  <input
                    type="text"
                    id="uname"
                    name="name"
                    placeholder="生日"
                  />

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
                    onClick={() => {
                      setAddOpen(!addOpen);
                    }}
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
