import styled from  './Member.module.scss';
function MemberChevron() {
  return (
    <>
      <div class={styled.aaTital}>
        <div class={styled.aa}>
          <input type="text" name="" id="" />
          <div class={styled.orange}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div class={styled.aaPage}>
          <span>5</span>
          <span>/10</span>
        </div>
        <div class={styled.chevron}>
          <div class={styled.chevronA} onclick="">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div class={styled.chevronB} onclick="">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberChevron;
