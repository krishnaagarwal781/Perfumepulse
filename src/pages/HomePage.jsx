import React from "react";
import TopNavbar from "../components/TopNavbar";
import styled from "styled-components";
import OffersSection from "../components/home/OffersSection";
import HowWorkSection from "../components/home/HowWorkSection";
import CorporateSection from "../components/home/CorporateSection";
import FeaturedSection from "../components/home/FeaturedSection";
import EveryScentSection from "../components/home/EveryScentSection";
import Footer from "../components/Footer";
import ScentennialsSays from "../components/home/ScentennialsSays";
import SmellDifferent from "../components/home/SmellDifferent";
import FeaturedOn from "../components/home/FeaturedOn";
import { useNavigate } from "react-router-dom";

const HeroSection = styled.section`
  width: 100%;
  background-image: url("https://i.postimg.cc/43sr4yqx/image.png");
  background-size: cover;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .container {
    width: 55%;
    padding-left: 130px;
  }

  .main-title {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .hero-text {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 820px) {
    padding: 30px 30px;

    .text-container {
      width: 100%;
    }

    .main-title {
      font-size: 2.6rem;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .hero-text {
      font-size: 1.6rem;
      margin-bottom: 20px;
    }

    .stars {
      display: flex;
      align-items: center;
      gap: 2px;

      i {
        font-size: 1.8rem;
        color: #f2a72c;
      }
    }
  }

  .rating {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .stars {
    display: flex;
    align-items: center;
    gap: 2px;

    i {
      font-size: 2.2rem;
      color: #f2a72c;
    }
  }
`;

const StartNowButton = styled.button`
  padding: 21px 57px;
  color: white;
  background-color: #4a4a4a;
  font-size: 1.4rem;
  margin-bottom: 10px;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f5a623;
    color: #383636;
  }

  @media screen and (max-width: 820px) {
    padding: 17px 20px;
  }
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <HeroSection>
        <div className="text-container">
          <div className="rating">
            <div className="stars">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div style={{ fontSize: "2rem", color: "#665743" }}>4.9/5.0</div>
          </div>
          <p style={{ fontSize: "1.5rem" }}>400,000 ml delivered & counting!</p>
          <h2 className="main-title">
            Change New
            <br />
            Designer Authentic
            <br />
            Fragrances Each Month
          </h2>

          <p className="hero-text">
            For Just &#3647; 555, you can switch to a new, great-smelling
            designer fragrance every month.
          </p>
          <StartNowButton onClick={() => navigate("subscribe")}>
            Start Now From &#3647; 555
          </StartNowButton>
          <p style={{ fontSize: "1.4rem" }}>No contract, cancel anytime</p>
        </div>
      </HeroSection>
      <OffersSection />
      <HowWorkSection />
      <FeaturedSection />
      <CorporateSection />
      <EveryScentSection />
      <ScentennialsSays />
      <FeaturedOn />
      <SmellDifferent />
      <Footer />
    </>
  );
};

export default HomePage;
