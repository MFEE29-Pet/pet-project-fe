import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';
import PageContext from '../contexts/PageContext';

// pagination 如何保留原有的 search or params ??
// 目前解法: 用 URLSearchParams 取得 params 判斷是否有 cate 和 page

export default function Pagination({ totalPages, page, usp }) {
  const { mode } = useContext(SwitchButtonContext);
  // console.log(totalPages);

  const location = useLocation();
  const { cate, nowPage } = useContext(PageContext);

  return totalPages > 1 ? (
    <>
      <div className="page">
        <ul>
          <li>
            <Link
              to={
                nowPage > 1
                  ? `${location.pathname}${
                      cate
                        ? `?cate=${cate}&page=${nowPage <= 1 ? 1 : nowPage - 1}`
                        : `?page=${nowPage <= 1 ? 1 : nowPage - 1}`
                    }`
                  : `${location.pathname}${
                      cate ? `?cate=${cate}&page=${1}` : `?page=${1}`
                    }`
              }
            >
              <i className="fa-solid fa-angle-left"></i>
            </Link>
          </li>
          {Array(totalPages) &&
            Array(totalPages)
              .fill(1)
              .map((e, i) => {
                const p = page - 3 + i;
                if (p < 1 || p > totalPages) return '';
                if (p > nowPage + 2 || p < nowPage - 2) return '...';
                return (
                  <li key={i}>
                    <Link
                      to={`${location.pathname}${
                        cate ? `?cate=${cate}&page=${p}` : `?page=${p}`
                      }`}
                      className={nowPage === p ? 'active' : ''}
                    >
                      <i
                        className={`fa-duotone ${
                          mode === 'dog' ? 'fa-bone' : 'fa-fish'
                        } text_main_light_color1`}
                        style={{
                          display: `${nowPage === p ? 'block' : 'none'}`,
                        }}
                      ></i>
                      {p}
                    </Link>
                  </li>
                );
              })}
          <li>
            <Link
              to={
                nowPage < totalPages
                  ? `${location.pathname}${
                      cate
                        ? `?cate=${cate}&page=${
                            nowPage >= totalPages ? totalPages : nowPage + 1
                          }`
                        : `?page=${
                            nowPage >= totalPages ? totalPages : nowPage + 1
                          }`
                    }`
                  : `${location.pathname}${
                      cate
                        ? `?cate=${cate}&page=${totalPages}`
                        : `?page=${totalPages}`
                    }`
              }
            >
              <i className="fa-solid fa-angle-right"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  ) : (
    <></>
  );
}
