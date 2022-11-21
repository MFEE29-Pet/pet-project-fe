import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import styled from 'styled-components';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

const LIST = styled.div`
  &::before {
    background-color: ${(props) =>
      props.$mode === 'dog' ? '#fff5de' : '#a4ced0'};
    border: 1px solid
      ${(props) => (props.$mode === 'dog' ? '#fff5de' : '#a4ced0')};
  }
`;

function ProductCard({ rowProducts, page, totalPages, usp }) {
  const { mode } = useContext(SwitchButtonContext);
  const navigate = useNavigate();

  function formatPrice(price) {
    let parts = price.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  return (
    <>
      {rowProducts.map((e, i) => {
        return (
          <LIST $mode={mode} className="list-row" key={i}>
            {e.map((e2, i2) => {
              return (
                <div
                  className="pro-card"
                  key={e2.sid}
                  onClick={() => {
                    // console.log(e2.sid);
                    navigate(`detail/?sid=${e2.sid}`);
                  }}
                >
                  <Link to="">
                    <div className="img-wrap bg_bright_color">
                      <img src={`/images/test/${e2.img}`} alt="" />
                    </div>
                    <div className="pro-title">
                      <p>{e2.name}</p>
                      <p>
                        <s>${formatPrice(e2.price)}</s>{' '}
                        <span>${formatPrice(e2.member_price)}</span>
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </LIST>
        );
      })}
      <Pagination totalPages={totalPages} page={page} usp={usp} />
    </>
  );
}

export default ProductCard;
