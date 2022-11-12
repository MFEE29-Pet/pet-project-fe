export default function Pagination() {
  return (
    <>
      <div class="page">
        <ul>
          <li>
            <a href="">
              <i class="fa-solid fa-angle-left"></i>
            </a>
          </li>
          <li>
            <a href="" class="active">
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
              <i class="fa-solid fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
