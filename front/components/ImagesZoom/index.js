import React, { useState } from "react";
import Slick from "react-slick";
import {
  Global,
  Overlay,
  Header,
  CloseBtn,
  SlickWrapper,
  ImgWrapper,
  Indicator,
} from "./styles";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      <Global />
      <Overlay>
        <Header>
          <h1>상세 이미지</h1>
          <CloseBtn onClick={onClose}>X</CloseBtn>
        </Header>
        <SlickWrapper>
          <Slick
            initialSlide={0}
            beforeChange={(slide) => setCurrentSlide(slide)}
            arrows={false}
            infinite
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((image) => (
              <ImgWrapper key={image.src}>
                <img src={image.src} alt={image.src} />
              </ImgWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </Indicator>
        </SlickWrapper>
      </Overlay>
    </>
  );
};

export default ImagesZoom;
