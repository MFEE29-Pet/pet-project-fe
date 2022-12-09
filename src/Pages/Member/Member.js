import './Member.css';
import MemberShipLeft from './MemberShipLeft';
// import MemberLevel from './MemberLevel.js';
// import MemberPetAdd from './MemberPetAdd';
// import MemberArticleCollect from './MemberArticleCollect';
// import MemberAppointment from './MemberAppointment';
// import MemberHistoryProduct from './MemberHistoryProduct';
// import MemberProductCollect from './MemberProductCollect';
// import MemberProfileUp from './MemberProfileUp';
// import MemberForgrtPassword from './MemberForgrtPassword';
// import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
// import MemberHistoryCamera from './MemberHistoryCamera';
// import { useState } from 'react';
import { Outlet } from 'react-router';

import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import BreadcrumbRightArrowIcon from '../../Components/breadcrumb/BreadcrumbRightArrowIcon';
import styled from 'styled-components';

const BreadcrumbBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

const Memberroutes = [
  {
    to: '/',
    label: '首頁',
  },
  {
    to: '/member/memberLogIn',
    label: '會員中心',
  },
];

function Member() {
  // const components = [
  //   MemberLevel,
  //   MemberPetAdd,
  //   MemberArticleCollect,
  //   MemberProductCollect,
  //   MemberAppointment,
  //   MemberHistoryProduct,
  //   MemberHistoryCamera,
  //   MemberProfileUp,
  //   MemberForgrtPassword,
  // ];
  // const [pageIndex, setPageIndex] = useState(0);
  // const Nowcomponents = components[pageIndex];
  return (
    <>
      <div
        className="member"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        <div className="p_space" style={{ height: '100px' }}></div>
        <BreadcrumbBox>
          <Breadcrumb
            routes={Memberroutes}
            separator={<BreadcrumbRightArrowIcon />}
          />
        </BreadcrumbBox>
        <div style={{ display: 'flex' }}>
          <MemberShipLeft
          // totalPage={components}
          // pageIndex={pageIndex}
          // setPageIndex={setPageIndex}
          />
          {/* <Nowcomponents /> */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Member;
