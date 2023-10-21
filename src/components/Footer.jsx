import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Wrapper = styled.footer`
  padding: 45px 130px 55px;
  background: rgb(245, 245, 245);
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .col {
    padding: 0 40px;
    display: flex;
    flex-direction: column;
  }

  .title {
    margin-bottom: 25px;
    font-weight: 700;
    font-size: 1.6rem;
  }

  .text {
    font-size: 1.4rem;
    text-align: left;
    margin-bottom: 2rem;
  }

  .address-input {
    padding: 10px 18px;
    border: 1px solid#403c3c;
    transition: all 0.3s ease-in-out;
    outline: none;
    font-size: 1.4rem;
    margin-bottom: 20px;

    &:hover {
      border-color: #403c3c;
    }
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 45px 15px 55px;

    .col {
    }
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: black;
    transition: all 0.3s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubscribeButton = styled.button`
  font-size: 1.5rem;
  width: 100%;
  margin-top: 10px;
  padding: 10px 18px;
  background-color: #333232;
  border: none;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f5a623;
  }
`;

const BottomPart = styled.div`
  display: none;
  padding: 20px 130px;

  .footer-col {
    display: flex;
    gap: 10px;

    i {
      font-size: 2.5rem;
    }
  }

  .copyright-text {
    text-align: end;
    padding: 20px;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 820px) {
    padding: 20px 20px;

    .copyright-text {
      text-align: center;
    }
  }
`;

const Footer = () => {
  const { footerRef1, footerRef2 } = useContext(ProductContext);

  return (
    <>
      <Wrapper ref={footerRef1}>
        <div className="col">
          <div className="title">Scentses + Co</div>
          <div className="text">
            Southeast Asia's Largest Designer Perfume Subscription where you can
            select any designer perfume or cologne to try out for the month
            without breaking your bank.
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ width: "100px", height: "45px" }}>
              <img
                src="https://www.scentsesandco.com.sg/static/media/SSL-Secure-Connection.780c14d2a4267a824b62.webp"
                alt=""
                width={100}
                height={45}
              />
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ width: "70px", height: "80px" }}>
              <img
                src="https://www.scentsesandco.com.sg/static/media/biztrust_secure_seal.0765e8228357905b5667.webp"
                alt=""
                width={70}
                height={80}
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Quick Links</div>
          <MenuList className="menu-list">
            <a href="#">How it Works</a>
            <a href="#">Reviews</a>
            <a href="#">Subscribe Today</a>
          </MenuList>
        </div>
        <div className="col">
          <div className="title">Quick Links</div>
          <MenuList className="menu-list">
            <Link to="/faqs">FAQs</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/term-conditions">Terms & Conditions</Link>
            <a href="#">Refund Policy</a>
            <a href="#">Privacy Policy</a>
          </MenuList>
        </div>
        <div className="col">
          <div className="title">Let's Talk Scents</div>
          <form className="form">
            <input
              className="address-input"
              type="text"
              placeholder="Enter address"
            />
            <SubscribeButton>SUBSCRIBE</SubscribeButton>
          </form>
        </div>
      </Wrapper>
      <BottomPart ref={footerRef2}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="footer-col">
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-visa"></i>
          </div>
          <div className="footer-col">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="copyright-text">
          © 2022 Copyright Reserved by Scentses and Co (KT0464955-K)
        </div>
      </BottomPart>
    </>
  );
};

export default Footer;
