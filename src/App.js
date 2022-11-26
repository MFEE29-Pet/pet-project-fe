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
import SwitchButtonContext from './contexts/SwitchButtonContext';
import './style/style.scss';
import './style/reset.css';
import ProductDetail from './Pages/Product/ProductDetail';
import Photographers from './Pages/Product/Photographers';
import PhotographerForm from './Pages/Product/PhotographerForm';
import AllContextProviders from './contexts/AllContextProviders';
import Login from './Pages/Product/Login';
// import { CartProvider } from './Pages/Product/contexts/CartProvider';

function App() {
  // const [checked, setChecked] = useState(true);
  // const [switchMode, setSwitchMode] = useState('cat');
  const { mode } = useContext(SwitchButtonContext);
  // console.log(mode);

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

            <Route path="forum" element={<Forum />} />

            <Route path="member" element={<Member />} />
          </Routes>
          {/* </CartProvider> */}
        </AllContextProviders>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
