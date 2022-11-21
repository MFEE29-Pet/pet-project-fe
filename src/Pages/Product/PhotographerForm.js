import './style/photo.scss';

function PhotographerForm() {
  return (
    <>
      <main>
        {/* <!-- breadcrumb --> */}
        {/* <nav className="nav-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">購物商城</a>
            </li>
            <li className="breadcrumb-item">其他</li>
            <li className="breadcrumb-item">
              <a href="#">寵物攝影</a>
              <span>{'>'}</span>
            </li>
            <li className="breadcrumb-item">預約表單</li>
          </ol>
        </nav> */}

        <div className="photographer-form">
          <h1>預約寵物攝影</h1>
          <div className="photographer-name">
            <i className="fa-solid fa-camera"></i>
            <p>柏延攝影師</p>
          </div>
          <form id="reservation" name="reservation" action="">
            {/* <!-- 預約時段 --> */}
            <div className="reserve-time">
              <h2>預約時間</h2>
              <label htmlFor="">日期時段</label>
              <input type="date" name="date" id="date" />
              <select name="time" id="time">
                <option value="A">上午</option>
                <option value="B">下午</option>
              </select>
            </div>

            {/* <!-- 會員資料 --> */}
            <div className="member-data">
              <h2>飼主資料</h2>
              <div className="name">
                <label htmlFor="name">姓名</label>
                <input type="text" id="name" value="艾蜜莉" />
              </div>
              <div className="email">
                <label htmlFor="email">信箱</label>
                <input type="email" id="email" />
              </div>
              <div className="mobile">
                <label htmlFor="mobile">手機</label>
                <input type="text" id="mobile" />
              </div>
              <div className="address">
                <label htmlFor="address">地址</label>
                <select type="text" id="address">
                  <option value="taipei">台北市</option>
                </select>
                <select type="text" id="address">
                  <option value="1">大安區</option>
                </select>
                <input type="text" name="road" id="address" />
              </div>
            </div>

            {/* <!-- 寵物資料 --> */}
            <div className="pet-data">
              <h2>飼主資料</h2>
              <div className="pet-variety">
                {/* <!-- 寵物種類 --> */}
                <label htmlFor="variety">種類</label>
                <input type="radio" name="variety" value="1" />
                {'狗'}
                <input type="radio" name="variety" value="2" />
                {'貓'}
                <input type="radio" name="variety" value="3" />
                {'其他'}
              </div>
              {/* <!-- 寵物名稱 --> */}
              <div className="pet-name">
                <label htmlFor="pet-name">名稱</label>
                <input type="tezt" id="pet-name" />
              </div>
              {/* <!-- 寵物年紀 --> */}
              <div className="pet-age">
                <label htmlFor="pet-age">年紀</label>
                <input type="number" id="pet-age" />
              </div>
              {/* <!-- 寵物性別 --> */}
              <div className="pet-gender">
                <label htmlFor="pet-gender">性別</label>
                <input type="radio" name="pet-gender" id="pet-gender" />公
                <input type="radio" name="pet-gender" id="pet-gender" />母
              </div>
              <div className="pet-image">
                <label htmlFor="pet-image">上傳圖片</label>
                <input type="file" name="image" multiple hidden />
                <div
                  className="img-file-wrap"
                  onclick="document.reservation.image.click()"
                >
                  <i className="fa-regular fa-upload"></i>
                  <p>上傳圖片</p>
                </div>
                <div
                  className="img-file-wrap"
                  onclick="document.reservation.image.click()"
                >
                  <i className="fa-regular fa-upload"></i>
                  <p>上傳圖片</p>
                </div>
                <div
                  className="img-file-wrap"
                  onclick="document.reservation.image.click()"
                >
                  <i className="fa-regular fa-upload"></i>
                  <p>上傳圖片</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <div className="go-to-top">
        <svg
          width="333"
          height="460"
          viewBox="0 0 333 460"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 64H300.5C318.2 64 332.5 49.7 332.5 32C332.5 14.3 318.2 0 300.5 0H32C14.3 0 0 14.3 0 32C0 49.7 14.3 64 32 64ZM48.7 212.5C36.2 225 36.2 245.3 48.7 257.8C61.2 270.3 81.5 270.3 94 257.8L135.3 216.4V321.75V427.1C135.3 444.8 149.6 459.1 167.3 459.1C185 459.1 199.3 444.8 199.3 427.1V216.4L240.7 257.8C253.2 270.3 273.5 270.3 286 257.8C298.5 245.3 298.5 225 286 212.5L190 116.5C177.5 104 157.2 104 144.7 116.5L48.7 212.5Z"
            fill="#fff"
          />
        </svg>
      </div>
    </>
  );
}

export default PhotographerForm;
