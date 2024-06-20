import React from 'react';
import styled from 'styled-components';
import corm2 from '/corm2.png';
import Zkg from '/Zkg.png';
import Skg from '/Skg.png';
import dom from '/dom.png';
import car from '/car.png';
import kupi from '/kupi.png';
import edakorm from '/edakorm.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
`;

const Img = styled.div`
  margin-left: 100px;
  margin-top: 100px;
`;

const CarouselContainer = styled.div`
  width: 400px; /* Задайте нужную ширину контейнера */
  height: 100px;
  margin-top: 20px;
`;

const StyledImg = styled.img`
  max-width: 60%; /* Ограничивает ширину изображений */
  height: auto;    /* Сохраняет соотношение сторон */
`;

const Text = styled.div`
  margin-left: 200px;
  margin-top: 120px;
`;

const Brand = styled.div`
  font-size: 16px;
`;

const Name = styled.div`
  font-size: 32px;
  margin-top: 10px;
`;

const Art = styled.div`
  font-size: 12px;
`;

const Otz = styled.div`
  margin-top: 30px;
  font-size: 12px;
`;

const Button = styled.div`
  margin-top: 50px;
  display: flex;
`;

const Button1 = styled.div`
  cursor: pointer;
`;

const Button2 = styled.div`
  margin-left: 25px;
  cursor: pointer;
`;

const Button3 = styled.div`
  margin-left: 715px;
  cursor: pointer;
`;

const Price = styled.div`
  margin-top: 30px;
`;

const Action = styled.div`
  margin-top: 15px;
  font-weight: 700;
`;

const Icons = styled.div`
  margin-top: 80px;
  display: grid;
`;

const TextA = styled.div``;

const TextB = styled.div`
  margin-top: 10px;
`;

const photos = [
  { id: 1, src: corm2 },
  { id: 2, src: corm2 },
  { id: 3, src: corm2 },
  { id: 4, src: corm2 },
  { id: 5, src: corm2 },
  { id: 6, src: corm2 },
];

const BlockCard1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Wrapper>
        <Img>

          <CarouselContainer>
            <Slider {...settings}>
              {photos.map(photo => (
                <div key={photo.id}>
                  <StyledImg src={photo.src} alt={`slide-${photo.id}`} />
                </div>
              ))}
            </Slider>
          </CarouselContainer>
        </Img>
        <Text>
          <Brand>Бренд: Royal Canin</Brand>
          <Name>Royal Canin корм для взрослых крупных собак</Name>
          <Art>Арт. ПП789270912</Art>
          <Otz>Отзывы</Otz>
          <Button>
            <Button1><img src={Zkg} alt="" /></Button1>
            <Button2><img src={Skg} alt="" /></Button2>
            <Button3><img src={kupi} alt="" /></Button3>
          </Button>
          <Price>
            Цена: 4000 ₽
            <Action>Цена по акции: <span style={{ color: "red" }}>3000 ₽ </span></Action>
          </Price>
          <Icons>
            <TextA><img src={dom} alt="" /> В наличии в 50 магазинах</TextA>
            <TextB><img src={car} alt="" /> Быстрая доставка</TextB>
          </Icons>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default BlockCard1;
