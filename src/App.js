import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product/Product';
import Index from './Pages/Index/Index';
import Clinic from './Pages/Clinic/Clinic';
import ForumList from './Pages/Forum/ForumList';
import ForumDetail from './Pages/Forum/ForumDetail';
import Cart from './Pages/Cart/Cart';
import Member from './Pages/Member/Member';
import MemberLogIn from './Pages/Member/MemberLogIn';
import MemberSign from './Pages/Member/MemberSign';
import { MemberContextProvider } from './contexts/MemberContext';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SwitchButtonContext from './contexts/SwitchButtonContext';
import './style/style.scss';
import './style/reset.css';
import ProductDetail from './Pages/Product/ProductDetail';
import Photographers from './Pages/Product/Photographers';
import PhotographerForm from './Pages/Product/PhotographerForm';
import AllContextProviders from './contexts/AllContextProviders';
import Login from './Pages/Product/Login';
import Reserve from './Pages/Clinic/Reserve';
function App() {
  // const [checked, setChecked] = useState(true);
  // const [switchMode, setSwitchMode] = useState('cat');
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
      {/* 測試用，別管他 */}
      {/* <SwitchButton
        setChecked={setChecked}
        checked={checked}
        setSwitchMode={setSwitchMode}
        switchMode={switchMode}
      /> */}

      {/* 以下為路由，如需新增請通知 */}
      <BrowserRouter>
        <AllContextProviders>
          {/* <CartProvider> */}
          <Navbar />
          <i
            className={`fa-light fa-shield-cat text_main_light_color1`}
            style={{ opacity: 0, position: 'absolute' }}
            // onClick={handleClick}
            // id="switch_button"
          ></i>
          <section style={{ height: '100px' }}></section>
          <Routes>
            <Route path="/" element={<Index />} />

            <Route path="product" element={<Product />} />
            <Route path="product/detail/" element={<ProductDetail />} />
            <Route path="product/photographers/" element={<Photographers />} />
            <Route
              path="product/photographers/form"
              element={<PhotographerForm />}
            />
            <Route path="login" element={<Login />} />

            <Route path="cart" element={<Cart />} />

            <Route path="clinic" element={<Clinic />} />
            <Route path="clinic/reserve" element={<Reserve />} />
            <Route path="clinic/login" element={<Login />} />

            <Route path="forum" element={<ForumList />} />
            <Route path="forum/detail" element={<ForumDetail />} />

            <Route path="member" element={<Member />} />
            <Route path="member/memberShipAdd" element={<MemberSign />} />
            <Route path="member/memberLogIn" element={<MemberLogIn />} />
          </Routes>
        </AllContextProviders>
        <Footer />
      </BrowserRouter>
      {/* <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} /> */}
    </div>
  );
}

export default App;
