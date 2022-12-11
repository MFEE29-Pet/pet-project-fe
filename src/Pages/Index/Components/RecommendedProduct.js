import RecommendedCards from './RecommendedCards';
import { useContext } from 'react';
import SwitchButtonContext from '../../../contexts/SwitchButtonContext';

function RecommendedProduct() {
  const { mode } = useContext(SwitchButtonContext);
  return (
    <>
      <div
        className="RecommendedProduct"
        style={{
          width: '100%',
          height: '320px',
          backgroundColor: `${mode === 'dog' ? '#fff5de' : '#a4ced0'}`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="recommendedTitle_wrap"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            height: '15%',
          }}
        >
          <h1 style={{ fontSize: '20px', paddingTop: '10px' }}>- 推薦商品 -</h1>
        </div>
        <div
          className="recommend_list"
          style={{
            overflowX: 'hidden',
            height: '90%',
            display: 'flex',
          }}
        >
          <div className="scroll" style={{ display: 'flex' }}>
            <RecommendedCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendedProduct;
