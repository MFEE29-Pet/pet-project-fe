import ProductSidebar from './components/ProductSidebar';
import Filter from './components/Filter';
import './style/style.scss';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import Popup from './components/Popup';


function Product() {
  const [trigger, setTrigger] = useState(false);
  return (
    <>
        <main>
          <ProductSidebar />
          <section className="right">
            <Filter setTrigger={setTrigger} trigger={trigger} />

            <div className="product-list">
              <ProductCard />
            </div>
          </section>
        </main>
        <Popup trigger={trigger} setTrigger={setTrigger} />
    </>
  );
}

export default Product;
