import './Member.css'
import MemberShipLeft from './MemberShipLeft'
// import MemberLevel from './MemberLevel.js'
// import Breadcrumb from '../Components/breadcrumb/Breadcrumb'
import MemberPetAdd from './MemberPetAdd'
//MembePetAdd

function MemberHome() {
  return (
    <>
      <div className="member">
        <MemberShipLeft />
        {/* <MemberLevel /> */}
        {/* <Breadcrumb /> */}
        <MemberPetAdd />
      </div>
    </>
  )
}

export default MemberHome
