import ProductSidebar from './components/ProductSidebar';
import Filter from './components/Filter';
import './style/style.scss';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import Pagination from './components/Pagination';

function Product() {
  const [getTotalPages, setGetTotalPages] = useState(0);

  return (
    <>
      <main>
        <ProductSidebar />
        <section className="right">
          <Filter />

          <div className="product-list">
            <ProductCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;
