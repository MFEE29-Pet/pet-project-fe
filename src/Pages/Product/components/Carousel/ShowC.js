import './showC.css';
import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import Carousel from './Carousel';
import { useRef, useState } from 'react';

function ShowC({ relatedProducts }) {
  let cards1 = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];
  const [cards2, setCards2] = useState([]);
  const carouselRef = useRef();

  const imgRelated = relatedProducts.map((e, i) => {
    return {
      ...e,
      img: <Card imagen={`/images/test/${e.img}`} />,
      key: uuidv4(),
    };
  });

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];
  for (let i = 0; i < imgRelated.length; i++) {
    cards.push({
      content: imgRelated[i].img,
      key: imgRelated[i].key,
      name: imgRelated[i].name,
    });
  }
  console.log({ imgRelated, cards1, cards });

  // const slide = a.map((e) => {
  //   return { ...e, content: e.props };
  // });
  // // console.log({ slide });

  // const slides = slide.map((slide, index) => {
  //   // console.log(slide.img);
  //   return { ...slide, onClick: () => setGoToSlide(index) };
  // });

  // const onChangeInput = (e) => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0,
  //   });
  // };
  return (
    <div className="" ref={carouselRef}>
      <Carousel
        relatedProducts={relatedProducts}
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default ShowC;
