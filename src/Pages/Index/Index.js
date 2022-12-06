import Draw from '../Product/components/Draw/Draw';
import ThreeAnimate from '../Product/components/Three/ThreeAnimate';
import About from './About';
import RecommendedProduct from './Components/RecommendedProduct';
import Photo from './Photo';

function Index() {
  return (
    <>
      {/* <Draw /> */}
      <div style={{ height: '800px' }}>
        <ThreeAnimate />
      </div>
      <About />
      <RecommendedProduct />
      <Photo />
    </>
  );
}

export default Index;
