import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 800px;
  margin: 30px auto;
  overflow: hidden;
  position: relative;
  border: 2px solid blue;

  @media screen and (max-width: 820px) {
    width: 100px;
    margin: 10px auto;
  }
`;

const Slide = styled.div`
  width: ${(props) => props.width * props.images.length}px;
  height: 600px;
  display: flex;
  /* border: 2px solid green; */
  transition: transform 1s ease-in-out;
  transform: translateX(-${(props) => props.index * props.width}px);
`;

const SlideImage = styled.img`
  width: 100%;
  object-fit: contain;
  /* border: 1px solid red; */
`;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageWidth = 600; // Width of each image
  const images = [
    "https://www.scentsesandco.com.sg/static/media/montblanclegendeaudetoilette.b3b1c8126f604297e5f9.webp",
    "https://www.scentsesandco.com.sg/static/media/FSAUVAGE.d268bd6e01e68bc18110.webp",
    "https://www.scentsesandco.com.sg/static/media/FULTRAMALE.07163e1932ce74f50875.webp",
    "https://www.scentsesandco.com.sg/static/media/FSAUVAGE.d268bd6e01e68bc18110.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1800);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <SliderContainer>
      <Slide index={currentIndex} images={images} width={imageWidth}>
        {images.map((image, index) => (
          <SlideImage key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Slide>
    </SliderContainer>
  );
};

export default ImageSlider;
