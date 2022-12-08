import Draw from '../Product/components/Draw/Draw';
import GoToTop from '../Product/components/GoToTop';
import ThreeAnimate from '../Product/components/Three/ThreeAnimate';
import About from './About';
import RecommendedProduct from './Components/RecommendedProduct';
import Photo from './Photo';

function Index() {
  return (
    <>
      {/* <Draw /> */}
      <div
        style={{
          height: '900px',
          borderRadius: '15px',
          position: 'relative',
          zIndex: '0',
        }}
      >
      
        <ThreeAnimate />
      </div>
      <About />
      <RecommendedProduct />
      <Photo />
      <GoToTop />
    </>
  );
}

export default Index;
