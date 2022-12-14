import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product/Product';
import Index from './Pages/Index/Index';
import Clinic from './Pages/Clinic/Clinic';

import ForumList from './Pages/Forum/ForumList';
import ForumList1Talk from './Pages/Forum/ForumList1Talk';
import ForumList2Question from './Pages/Forum/ForumList2Question';
import ForumList3Activity from './Pages/Forum/ForumList3Activity';
import ForumList4Give from './Pages/Forum/ForumList4Give';
import ForumList5Adoption from './Pages/Forum/ForumList5Adoption';
import ForumList6Other from './Pages/Forum/ForumList6Other';
import ForumDetail from './Pages/Forum/ForumDetail';
import ForumPost from './Pages/Forum/ForumPost';

import Cart from './Pages/Cart/Cart';
import CartP3 from './Pages/Cart/CartP3';
import Member from './Pages/Member/Member';
import MemberSing from './Pages/Member/MemberSing';
import MemberLogIn from './Pages/Member/MemberLogIn';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Reserve from './Pages/Clinic/Reserve';
import SwitchButtonContext from './contexts/SwitchButtonContext';
import './style/style.scss';
import './style/reset.css';
import ProductDetail from './Pages/Product/ProductDetail';
import Photographers from './Pages/Product/Photographers';
import PhotoReservePage from './Pages/Product/PhotoReservePage';
import PhotoReserve from './Pages/Product/PhotoReserve';
import PhotoCheck from './Pages/Product/PhotoCheck';
import AllContextProviders from './contexts/AllContextProviders';
import Check from './Pages/Clinic/Check';
import ReservePage from './Pages/Clinic/ReservePage';
import Pay from './Pages/Clinic/Pay';
import PayResult from './Pages/Clinic/PayResult';
import MemberLevel from './Pages/Member/MemberLevel';
import MemberPetAdd from './Pages/Member/MemberPetAdd';
import MemberArticleCollect from './Pages/Member/MemberArticleCollect';
import MemberAppointment from './Pages/Member/MemberAppointment';
import MemberProductCollect from './Pages/Member/MemberProductCollect';
import MemberHistoryProduct from './Pages/Member/MemberHistoryProduct';
import MemberHistoryCamera from './Pages/Member/MemberHistoryCamera';
import MemberProfileUp from './Pages/Member/MemberProfileUp';
import MemberResavePassword from './Pages/Member/MemberResavePassword';
import MemberForgetPassword from './Pages/Member/MemberForgetPassword';
import GoogleCallback from './Pages/Member/GoogleCallback';
import LineCallback from './Pages/Member/LineCallback';
import LinePay from './Pages/Cart/LinePay';
import StartPage from './Pages/StartPage/StartPage';

// try socket io
import io from 'socket.io-client';
import { SOCKET_HOST } from './Pages/Product/my-config';
import ServiceIndex from './Pages/Product/components/OnlineService/ServiceIndex';
import MemberPostRecord from './Pages/Member/MemberPostRecord';

const socket = io.connect(SOCKET_HOST); // connect socket server

function App() {
  const { mode } = useContext(SwitchButtonContext);
  // console.log(mode);
  // const Circle = forwardRef(({ size, delay }, ref) => {
  //   const el = useRef();

  //   useImperativeHandle(
  //     ref,
  //     () => {
  //       // return our API
  //       return {
  //         moveTo(x, y) {
  //           gsap.to(el.current, { x, y, delay });
  //         },
  //       };
  //     },
  //     [delay]
  //   );

  //   return <i className={`circle ${size} fa-solid fa-paw-simple`} ref={el}></i>;
  // });

  // const circleRefs = useRef([]);

  // // reset on re-renders
  // circleRefs.current = [];

  // useEffect(() => {
  //   const onMove = ({ clientX, clientY }) => {
  //     circleRefs.current.forEach((ref) => ref.moveTo(clientX+50, clientY+50));
  //     //    circleRefs.current.forEach((ref) =>
  //     //    ref.moveTo(innerWidth / 2, innerHeight / 2)
  //     // );
  //   };

  //   window.addEventListener('pointermove', onMove);

  //   return () => window.removeEventListener('pointermove', onMove);
  // }, []);

  // const addCircleRef = (ref) => {
  //   if (ref) {
  //     circleRefs.current.push(ref);
  //   }
  // };

  return (
    <div id={mode} className="bg_bright_color" style={{ width: '100%' }}>
      {/* 以下為路由，如需新增請通知 */}
      <BrowserRouter>
        <AllContextProviders>
          {/* Navbar */}
          <StartPage/>
          <Navbar />
          
          <i
            className={`fa-light fa-shield-cat text_main_light_color1`}
            style={{ opacity: 0, position: 'absolute' }}
            // onClick={handleClick}
            // id="switch_button"
          ></i>
          {/* <section style={{ height: '100px' }}></section> */}

          {/* Routes */}
          <Routes>
            {/* index */}
            <Route path="/" element={<Index />} />
            {/* Product */}
            <Route path="product" element={<Product />} />
            <Route path="product/detail/" element={<ProductDetail />} />
            <Route path="product/photographers/" element={<Photographers />} />
            {/* <Route path="product/game/" element={<Game />} /> */}
            <Route path="product/photographers/" element={<PhotoReservePage />}>
              <Route path="reserve" element={<PhotoReserve />} />
              <Route path="check" element={<PhotoCheck />} />
            </Route>
            {/* online service */}
            <Route path="service" element={<ServiceIndex socket={socket} />} />

            {/* Cart */}
            <Route path="cart" element={<Cart />} />
            <Route path="cart/cartp3" element={<CartP3 />} />
            <Route path="cart/pay-confirm" element={<LinePay />} />

            {/* Clinic */}
            <Route path="clinic" element={<Clinic />} />
            <Route path="clinic/pay" element={<Pay />} />
            <Route path="clinic/payresult" element={<PayResult />} />
            <Route path="clinic" element={<ReservePage />}>
              <Route path="reserve" element={<Reserve />} />
              <Route path="check" element={<Check />} />
            </Route>

            {/* Forum */}
            <Route path="forum" element={<ForumList />} />
            <Route path="forum/talk" element={<ForumList1Talk />} />
            <Route path="forum/question" element={<ForumList2Question />} />
            <Route path="forum/activity" element={<ForumList3Activity />} />
            <Route path="forum/give" element={<ForumList4Give />} />
            <Route path="forum/adoption" element={<ForumList5Adoption />} />
            <Route path="forum/other" element={<ForumList6Other />} />

            <Route path="forum/detail" element={<ForumDetail />} />

            <Route path="forum/post" element={<ForumPost />} />

            {/* Member */}
            <Route path="member" element={<Member />}>
              <Route path="memberCenter" element={<MemberLevel />} />
              <Route path="memberPet" element={<MemberPetAdd />} />
              <Route path="memberArticle" element={<MemberArticleCollect />} />
              <Route
                path="memberProductCollect"
                element={<MemberProductCollect />}
              />
              <Route path="memberClinic" element={<MemberAppointment />} />
              <Route path="memberPost" element={<MemberPostRecord />} />
              <Route
                path="memberProductHistory"
                element={<MemberHistoryProduct />}
              />
              <Route
                path="memberPhotoHistory"
                element={<MemberHistoryCamera />}
              />
              <Route path="memberDataRevise" element={<MemberProfileUp />} />
              <Route
                path="memberPasswordRevise"
                element={<MemberResavePassword />}
              />
            </Route>
            <Route path="member/memberShipAdd" element={<MemberSing />} />
            <Route path="member/memberLogIn" element={<MemberLogIn />} />
            <Route
              path="member/memberForgetPassword"
              element={<MemberForgetPassword />}
            />
            <Route path="member/callback" element={<GoogleCallback />} />
            <Route path="member/lineCallback" element={<LineCallback />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </AllContextProviders>
      </BrowserRouter>
      {/* <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} /> */}
    </div>
  );
}

export default App;
