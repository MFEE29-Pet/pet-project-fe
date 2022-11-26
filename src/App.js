import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product/Product';
import Index from './Pages/Index/Index';
import Clinic from './Pages/Clinic/Clinic';
import Forum from './Pages/Forum/Forum';
import Cart from './Pages/Cart/Cart';
import Member from './Pages/Member/Member';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Reserve from './Pages/Clinic/Reserve';
import SwitchButtonContext from './contexts/SwitchButtonContext';
import './style/style.scss';
import './style/reset.css';
import ProductDetail from './Pages/Product/ProductDetail';
import Photographers from './Pages/Product/Photographers';
import PhotographerForm from './Pages/Product/PhotographerForm';
import AllContextProviders from './contexts/AllContextProviders';
import LoginPro from './Pages/Product/Login';
import Login from './Pages/Clinic/Login';
import Check from './Pages/Clinic/Check';
import ReservePage from './Pages/Clinic/ReservePage';
import Pay from './Pages/Clinic/Pay';
import PayResult from './Pages/Clinic/PayResult';
// import gsap from 'gsap';

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
            <Route path="clinic/login" element={<Login />} />
            <Route path="clinic/pay" element={<Pay />} />
            <Route path="clinic/payresult" element={<PayResult />} />
            <Route path="clinic" element={<ReservePage />}>
              <Route path="reserve" element={<Reserve />} />
              <Route path="check" element={<Check />} />
            </Route>

            <Route path="forum" element={<Forum />} />

            <Route path="member" element={<Member />} />
          </Routes>
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
