import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 100px;
  padding: 40px 50px;
  /* border: 1px solid red; */

  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 50px;

  .col {
    /* border: 1px solid green; */
  }

  .img-box {
    width: 100%;
    padding: 30px;
  }

  .img-box img {
    width: 100%;
    height: 350px;
    object-fit: contain;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 0;
    padding: 40px 25px;

    .img-box {
      width: 100%;
      padding: 10px;
      height: 250px;
    }

    .img-box img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;

  i {
    color: #cdc0c0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &.active {
      color: #555555;
    }
  }

  i:hover {
    color: #555555;
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .img-sm {
    width: 70px;
    height: 70px;
    border: 2px solid transparent;
    transition: border 0.3s ease-in-out;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .img-sm.selected {
    border-color: #f5a623;
  }

  .img-sm:hover {
    border-color: #f5a623;
  }

  @media screen and (max-width: 820px) {
    .img-sm {
      width: 50px;
      height: 50px;
    }
  }
`;

const Title = styled.div`
  font-size: 3.2rem;
  margin-bottom: 15px;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    font-size: 2.6rem;
  }
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;

  .price {
    font-size: 2.4rem;
    font-weight: 600;
    margin-right: 6px;
  }

  .btn {
    padding: 9px 20px;
    border-radius: 5px;
    background: #f5f5f5;
    color: rgba(0, 0, 0, 0.251);
    cursor: not-allowed;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 820px) {
    .price {
      font-size: 2rem;
    }
  }
`;

const VariantBox = styled.div`
  margin-block: 20px;

  .variant-btn {
    padding: 6px 10px;
    margin-block: 4px;
    margin-right: 10px;
    display: flex;
    align-items: center;
    background: rgb(255, 255, 255);
    cursor: pointer;
    border: 1px solid rgb(217, 217, 217);
    color: rgb(0, 0, 0);
    border-radius: 5px;
    font-size: 1.4rem;
  }

  .variant-btn.active {
    border: 1px solid rgb(245, 166, 35);
    color: rgb(245, 166, 35);
    font-weight: 700;
  }
`;

const DisclaimerBox = styled.div`
  margin-bottom: 20px;
  padding: 8px 15px;
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
  border-radius: 5px;

  .title {
    font-size: 1.6rem;
    font-weight: bold;
    color: black;
    margin-bottom: 5px;
  }

  .text {
    font-size: 1.6rem;
  }
`;
const PointList = styled.div`
  list-style-type: square;
  font-size: 1.4rem;
`;

const ListItem = styled.div`
  margin-bottom: 20px;

  i {
    font-size: 1rem;
    color: black;
    margin-right: 10px;
  }
`;

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isEngraving, setIsEngraving] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://subscriptionback.qualisnutri.co/api/shop/products/${productId}`
      )
      .then((res) => {
        setProduct(res.data.shop_product);
        setImages(res.data.shop_product.images);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const goToImage = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Wrapper>
      <div className="col">
        <div className="img-box">
          <img src={images[selectedIndex]} alt="Product Image - Travel Case" />
        </div>
        <Dots className="dots">
          {images.map((image, index) => (
            <i
              key={index}
              onClick={() => goToImage(index)}
              className={`fa-solid fa-circle ${
                selectedIndex === index ? "active" : ""
              }`}
            ></i>
          ))}
        </Dots>
        <Images>
          {images?.map((image, index) => (
            <div
              key={index}
              style={{ borderColor: index === selectedIndex && "#f5a623" }}
              onClick={() => setSelectedIndex(index)}
              className="img-sm"
            >
              <img src={image} alt="" />
            </div>
          ))}
        </Images>
      </div>
      <div className="col">
        <Title>{product?.title}</Title>
        <PriceBox>
          <div className="price">
            &#3647;{" "}
            {!isEngraving ? product?.price_travel : product?.price_envgraving}
          </div>
          <button className="btn">Add to Cart</button>
        </PriceBox>
        <VariantBox>
          <div style={{ fontSize: "1.6rem", marginBottom: "5px" }}>
            Variants
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              className={`variant-btn ${!isEngraving && "active"}`}
              onClick={() => setIsEngraving(false)}
            >
              Travel Case — Silver Stellar
            </div>
            <div
              className={`variant-btn ${isEngraving && "active"}`}
              onClick={() => setIsEngraving(true)}
            >
              Engraving
            </div>
          </div>
        </VariantBox>
        <DisclaimerBox>
          <div className="title">Disclaimer</div>
          <div className="text">
            Travel Cases are exclusively available for Subscribers ONLY.
          </div>
        </DisclaimerBox>
        {product?.productDescription.length > 0 && (
          <PointList>
            {product?.productDescription.map((item, index) => (
              <ListItem value={index}>
                <i className="fa-solid fa-square-full"></i>
                {item.text}
              </ListItem>
            ))}
          </PointList>
        )}
      </div>
    </Wrapper>
  );
};

export default ProductDetail;
