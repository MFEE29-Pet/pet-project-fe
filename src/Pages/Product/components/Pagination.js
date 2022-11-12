import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

export default function Pagination({ totalPages, page, usp }) {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <>
      <div className="page">
        <ul>
          <li>
            <Link to={`/product?page=${+usp > 1 ? +usp - 1 : 1}`}>
              <i className="fa-solid fa-angle-left"></i>
            </Link>
          </li>
          {Array(totalPages) &&
            Array(totalPages)
              .fill(1)
              .map((e, i) => {
                // console.log(usp);
                // const p = page + i;
                // console.log(p);
                // console.log(usp);
                // if (p < 1 || p > totalPages) return null;
                return (
                  <li key={i}>
                    <Link
                      to={`/product?page=${i + 1}`}
                      className={+usp === i + 1 ? 'active' : ''}
                    >
                      <i
                        className={`fa-duotone ${
                          mode === 'dog' ? 'fa-bone' : 'fa-fish'
                        } text_main_light_color1`}
                        style={{
                          display: `${+usp === i + 1 ? 'block' : 'none'}`,
                        }}
                      ></i>
                      {i + 1}
                    </Link>
                  </li>
                );
              })}
          <li>
            <Link
              to={`/product?page=${+usp < totalPages ? +usp + 1 : totalPages}`}
            >
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
