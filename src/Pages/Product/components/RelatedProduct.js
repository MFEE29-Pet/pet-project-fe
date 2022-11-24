import { useContext } from 'react';
import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const ROW = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: space-around;
  align-items: center;
  &::before {
    content: '';
    width: 100%;
    display: block;
    position: absolute;
    border-top: 20px solid
      ${(props) => (props.$mode === 'dog' ? '#fff5de' : '#a4ced0')};
    background-color: rgba(0, 0, 0, 0);
    bottom: 32%;
    z-index: 1;
  }
  &::after {
    content: '';
    width: 100%;
    display: block;
    position: absolute;
    border-radius: 50px 50px 0 0;
    background-color: rgba(0, 0, 0, 0);
    bottom: 39%;
    z-index: 0;
    box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.82);
  }

  .bottom-pro-line-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pro-line-ls-img-wrap {
      height: 100%;
      margin-bottom: 10px;

      img {
        height: 90%;
        position: relative;
        z-index: 1;
      }
    }

    .pro-line-ls-name {
      text-align: center;
      position: relative;
      z-index: 1;
    }
  }

  .arrow {
    font-size: $titlesize;
    color: $p_color;
  }
`;

function RelatedProduct({ relatedProducts }) {
  const { mode } = useContext(SwitchButtonContext);

  return (
    <>
      <ROW $mode={mode}>
        <div className="arrow arrow-left">
          <i className="fa-light fa-angle-left"></i>
        </div>
        {relatedProducts.map((e, i) => {
          return (
            <div className="bottom-pro-line-card" key={e.sid}>
              <div className="pro-line-ls-img-wrap">
                <img src={`/images/test/${e.img}`} alt="" />
              </div>
              <div className="pro-line-ls-name">
                <p>{e.name}</p>
              </div>
            </div>
          );
        })}
        <div className="arrow arrow-right">
          <i className="fa-light fa-angle-right"></i>
        </div>
      </ROW>
    </>
  );
}

export default RelatedProduct;
