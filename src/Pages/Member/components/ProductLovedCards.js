import styled from 'styled-components';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const LIST = styled.div`
  &::before {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#fff5de' : '#a4ced0'};
    border: 1px solid
      ${(props) => (props.$mode === 'dog' ? '#fff5de' : '#a4ced0')};
  }
`;

function ProductLovedCards({ deleteList, setDeleteList, loveList }) {
  const navigate = useNavigate();

  const { mode } = useContext(SwitchButtonContext);

  function formatPrice(price) {
    let parts = price.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  const handleChange = (e) => {
    //toggle(切換)
    // 如果目前這個值在陣列中 -> 移出陣列
    if (deleteList.includes(+e.target.value)) {
      // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
      // 2. 在拷貝出的新陣列(物件)上運算或處理
      const newDeleteList = deleteList.filter((v, i) => {
        return v !== +e.target.value;
      });
      // 3. 設定回原本的狀態
      setDeleteList(newDeleteList);
    } else {
      // 反之如果目前這個值"沒在"陣列中 -> 加入陣列
      // 1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
      // 2. 在拷貝出的新陣列(物件)上運算或處理
      const newDeleteList = [...deleteList, +e.target.value];

      // 3. 設定回原本的狀態
      setDeleteList(newDeleteList);
    }
  };

  return (
    <LIST
      $mode={mode}
      className="list-row"
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      {loveList.map((e, i) => {
        return (
          <div
            className="pro-card"
            key={e.p_sid}
            style={{ padding: '20px 0', width: '25%' }}
          >
            <div
              style={{
                height: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                className="img-wrap"
                style={{ height: '200px', cursor: 'pointer' }}
                onClick={() => {
                  // console.log(e2.sid);
                  navigate(`/product/detail/?sid=${e.p_sid}`);
                }}
              >
                <img
                  src={`/images/test/${e.img}`}
                  alt=""
                  style={{ height: '100%' }}
                />
              </div>
              <div
                className="pro-title"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <input
                    type="checkbox"
                    value={e.p_sid}
                    checked={deleteList.includes(e.p_sid)}
                    onChange={handleChange}
                  />
                  <p style={{ fontSize: '18px' }}>{e.name}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <s
                    style={{
                      color: '#c9caca',
                      fontSize: '14px',
                      marginRight: '10px',
                    }}
                  >
                    ${formatPrice(e.price)}
                  </s>
                  <span
                    style={{
                      color: '#f00',
                      fontSize: '18px',
                      fontWeight: '700',
                    }}
                  >
                    ${formatPrice(e.member_price)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </LIST>
  );
}

export default ProductLovedCards;
