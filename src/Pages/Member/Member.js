import './Member.css';
import MemberShipLeft from './MemberShipLeft';
import MemberLevel from './MemberLevel.js';
import MemberPetAdd from './MemberPetAdd';
import MemberArticleCollect from './MemberArticleCollect';
import MemberAppointment from './MemberAppointment';
import MemberHistoryProduct from './MemberHistoryProduct';
import MemberProductCollect from './MemberProductCollect';
import MemberProfileUp from './MemberProfileUp';
import MemberForgrtPassword from './MemberForgrtPassword';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import MemberHistoryCamera from './MemberHistoryCamera';
import { useState } from 'react';

function Member() {
  const components = [
    MemberLevel,
    MemberPetAdd,
    MemberArticleCollect,
    MemberProductCollect,
    MemberAppointment,
    MemberHistoryProduct,
    MemberHistoryCamera,
    MemberProfileUp,
    MemberForgrtPassword,
  ];
  const [pageIndex, setPageIndex] = useState(0);
  const Nowcomponents = components[pageIndex];
  return (
    <>
      <div className="member">
        <MemberShipLeft
          totalPage={components}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
        <Nowcomponents />
      </div>
    </>
  );
}

export default Member;
