import GoToTop from '../Product/components/GoToTop';
import ThreeAnimate from '../Product/components/Three/ThreeAnimate';
import Game from '../Product/components/ThreeGame/Game';
// import Games from '../Product/components/ThreeGame';
import About from './About';
import RecommendedProduct from './Components/RecommendedProduct';
import Photo from './Photo';

function Index() {
  return (
    <>
      {/* <Games /> */}
      <div
        style={{
          height: '900px',
        }}
      >
        <ThreeAnimate />
      </div>
      <About />
      <RecommendedProduct />
      <Photo />
      <div
        style={{
          height: '300px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '15px 0',
        }}
        className="catch_game"
      >
        <Game />
      </div>
      <GoToTop />
    </>
  );
}

export default Index;
