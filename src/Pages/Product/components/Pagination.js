import { useEffect, useContext, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

// TODO : pagination 如何保留原有的 search or params ??

export default function Pagination({ totalPages, page, usp }) {
  const { mode } = useContext(SwitchButtonContext);
  const [currentPage, setCurrentPage] = useState(0);
  const handleClick = (i) => {
    setCurrentPage(i);
  };
  const location = useLocation();
  // console.log(location.search.split(''));
  const p = location.search.split('');
  const pageNum = +p[p.length - 1];
  console.log(location.pathname);
  // console.log(pageNum);
  console.log(location.search.split('=')[0]);

  return (
    <>
      <div className="page">
        <ul>
          <li>
            <Link
              to={
                pageNum > 1
                  ? `${location.pathname}${location.search.split('=')[0]}=${
                      pageNum - 1
                    }`
                  : `${location.pathname}${location.search.split('=')[0]}=1`
              }
            >
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
                      to={`${location.pathname}${
                        location.search.split('=')[0]
                          ? `${location.search.split('=')[0]}=`
                          : '?page='
                      }${i + 1}`}
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
              to={
                pageNum < totalPages
                  ? `${location.pathname}${
                      location.search.split('=')[0]
                        ? `${location.search.split('=')[0]}=`
                        : '/'
                    }${pageNum + 1}`
                  : `${location.pathname}${`${
                      location.search.split('=')[0]
                    }=`}${totalPages}`
              }
            >
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
