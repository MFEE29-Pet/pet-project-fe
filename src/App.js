import { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product/Product';
import Index from './Pages/Index/Index';
import Clinic from './Pages/Clinic/Clinic';
import Forum from './Pages/Forum/Forum';
import Cart from './Pages/Cart/Cart';
import Member from './Pages/Member/Member';
import SwitchButton from './Components/SwitchButton/SwitchButton';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import SwitchButtonContext from './contexts/SwitchButtonContext';
import './style/style.scss';
import './style/reset.css';

function App() {
  const [checked, setChecked] = useState(true);
  const [switchMode, setSwitchMode] = useState('dog');
  const { name } = useContext(SwitchButtonContext);
  // console.log(initMode);
  console.log(name);

  return (
    <div
      id={switchMode}
      className="bg_bright_color"
      style={{ width: '100%', height: '2000px' }}
    >
      {/* 測試用，別管他 */}
      <SwitchButton
        setChecked={setChecked}
        checked={checked}
        setSwitchMode={setSwitchMode}
        switchMode={switchMode}
      />

      {/* 以下為路由，如需新增請通知 */}
      <BrowserRouter>
        <Navbar />
        <section style={{ height: '1500px' }}></section>
        <Routes>
          <Route path="/" element={<Index />} />

          <Route path="product" element={<Product />} />
          <Route path="product/:sid" />

          <Route path="cart" element={<Cart />} />

          <Route path="clinic" element={<Clinic />} />

          <Route path="forum" element={<Forum />} />

          <Route path="member" element={<Member />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
