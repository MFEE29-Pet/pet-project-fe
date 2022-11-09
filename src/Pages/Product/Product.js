import ProductSidebar from './components/ProductSidebar';
import Filter from './components/Filter';
import './style/style.scss';

function Product() {
  return (
    <>
      <main>
        <ProductSidebar />
        <section className="right">
          <Filter />
        </section>
      </main>
    </>
  );
}

export default Product;
