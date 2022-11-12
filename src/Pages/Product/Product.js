import ProductSidebar from './components/ProductSidebar';
import Filter from './components/Filter';
import './style/style.scss';
import ProductCard from './components/ProductCard';

function Product() {
  return (
    <>
      <main>
        <ProductSidebar />
        <section className="right">
          <Filter />

          <div className="product-list">
            <div className="list-row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;
