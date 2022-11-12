import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Pagination() {
  return (
    <>
      <div className="page">
        <ul>
          <li>
            <Link to="/product?page=1">
              <i className="fa-solid fa-angle-left"></i>
            </Link>
          </li>
          <li>
            <a href="" className="active">
              1
            </a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">...</a>
          </li>
          <li>
            <a href="">
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
