import './Member.css';
import MemberShipLeft from './MemberShipLeft';
import MemberLevel from './MemberLevel.js';
import MemberPetAdd from './MemberPetAdd';
import MemberArticleCollect from './MemberArticleCollect';
import MemberAppointment from './MemberAppointment';
import Breadcrumb from '../../Components/breadcrumb/Breadcrumb';
import { useState } from 'react';

function Member() {
  const components = [
    MemberLevel,
    MemberPetAdd,
    MemberArticleCollect,
    MemberAppointment,
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
