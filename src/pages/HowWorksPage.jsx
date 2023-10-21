import React from "react";
import TopNavbar from "../components/TopNavbar";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";

const MainTitle = styled.div`
  padding: 0 30px;

  .title {
    font-size: 3.2rem;
    font-weight: 600;
    text-align: center;
  }

  .sub-title {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const Content = styled.div`
  padding: 15px 30px;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 50px;

  .step {
    padding: 10px 0;
    /* border: 2px solid green; */
  }

  .step-title {
    font-size: 1.5rem;
    text-align: center;
    padding-bottom: 5px;
  }

  @media screen and (max-width: 820px) {
    .step-title {
      display: none;
    }
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;

    .text {
      order: 2;
      text-align: center;
    }

    .icon {
      order: 1;
    }
  }
`;

const RowTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 17.5px;
`;

const StepNumber = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  order: 2;
  @media screen and (max-width: 820px) {
    display: none;
  }

  .number {
    font-size: 4.7rem;
    font-weight: bold;
    margin-bottom: 18px;
  }

  .line {
    height: 100%;
    border-left: 3px solid rgb(171, 176, 179);
    font-size: 1.4rem;
  }
`;

const StartNowButton = styled.button`
  border: none;
  padding: 20px 40px;
  font-size: 1.4rem;
  font-weight: 600;
  background: #4a4a4a;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f5a623;
    color: #383636;
  }
`;

const RowImageBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 10px 30px;

  @media screen and (max-width: 820px) {
    justify-content: center;
  }
`;

//--------- Featured On Section
const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  background-color: #fffdf9;
`;
const FeaturedSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 35px 40px;

  .col {
    text-align: center;
    padding: 15px;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
    padding: 35px 0px;
  }
`;

// Review Section
const ReviewsSection = styled.section`
  padding: 40px;

  .title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 30px;
  }

  .write-review {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 18px 24px 24px;
    background-color: rgb(250, 250, 250);
    border-radius: 8px;
    margin-bottom: 15px;

    .upper-text {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .lower-text {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
  }

  .stars {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;

    i {
      font-size: 1.8rem;
      color: #5890ff;
    }
  }
`;

const WriteButton = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: 1.5rem;
  font-weight: 600;
  background: #0076fb;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3490fa;
  }
`;

const RatingSection = styled.section`
  padding: 3.5rem 2.5rem;

  .rating {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    i {
      font-size: 1.8rem;
      color: #ffd046;
    }
  }

  .text {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 15px;
  }

  .buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 820px) {
      flex-direction: column;
    }
  }
`;

const Button = styled.button`
  border: none;
  padding: 14px 20px;
  font-size: 1.3rem;
  font-weight: 600;
  background: #4a4a4a;
  color: #fff;

  &:hover {
    background-color: #f5a623;
    color: #383636;
  }

  i {
    margin-right: 6px;
  }
`;

const FacebookReviews = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }

  .col {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

const ReviewCard = styled.div`
  background-color: rgb(250, 250, 250);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;

  .stars {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    margin-bottom: 6px;

    i {
      font-size: 1.6rem;
      color: #5890ff;
    }
  }

  .text {
    font-size: 1.6rem;
    margin-bottom: 12px;
  }

  .card-footer {
    display: flex;
    align-items: center;
    gap: 10px;

    i {
      color: #0076fb;
      font-size: 2.4rem;
    }

    .post-info {
      font-size: 1.2rem;

      div {
        color: grey;
      }

      a {
        text-decoration: none;
        color: #0076fb;
        transition: all 0.3 ease-in-out;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const HowWorksPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopNavbar />
      <div style={{ padding: "30px 0" }}>
        <MainTitle>
          <div className="title">How It Works</div>
          <div className="sub-title">
            Start the self-discovery journey today
          </div>
        </MainTitle>
        <Content>
          <div className="step">
            <div className="step-title">STEP</div>
            <Row>
              <div className="text" style={{ order: "1" }}>
                <RowTitle>START YOUR SUBSCRIPTION</RowTitle>
                <div style={{ fontSize: "1.5rem" }}>
                  You may start building your fragrance collection by selecting
                  your first desired perfumes for just THB 555/month.
                  <br />
                  At any time, pause or cancel.
                  <br />
                  For all of Thailand, shipping is free.
                </div>
              </div>
              <StepNumber style={{ order: "2" }}>
                <div className="number">1</div>
                <div className="line"></div>
              </StepNumber>
              <div className="icon" style={{ order: "3" }}>
                <RowImageBox>
                  <div style={{ width: "290px", height: "255px" }}>
                    <img
                      src="https://i.postimg.cc/XYQTJ4bK/image.png"
                      alt=""
                      width={290}
                      height={255}
                    />
                  </div>
                </RowImageBox>
              </div>
            </Row>
          </div>
          <div className="step">
            <div className="step-title">STEP</div>
            <Row>
              <div className="text" style={{ order: "3" }}>
                <RowTitle>CHOOSE A SCENT</RowTitle>
                <div style={{ fontSize: "1.5rem" }}>
                  From our variety of hundreds of genuine designer scents,
                  choose your very first fragrance preference.
                  <br />
                  Your decision is entirely up to you.
                </div>
              </div>
              <StepNumber style={{ order: "2" }}>
                <div className="number">2</div>
                <div className="line"></div>
              </StepNumber>
              <div className="icon" style={{ order: "1" }}>
                <RowImageBox>
                  <div style={{ width: "230px", height: "200px" }}>
                    <img
                      src="https://i.postimg.cc/cL4bP2nv/image.png"
                      alt=""
                      width={230}
                      height={200}
                    />
                  </div>
                </RowImageBox>
              </div>
            </Row>
          </div>
          <div className="step">
            <div className="step-title">STEP</div>
            <Row>
              <div className="text" style={{ order: "1" }}>
                <RowTitle>GET YOUR MONTHLY SUPPLY</RowTitle>
                <div style={{ fontSize: "1.5rem" }}>
                  Receive the monthly perfume of your choice in an 8mL bottle,
                  which provides around 120–130 sprays (3–4 sprays every day for
                  30 days)! and remain odor-free for the remainder of the month.
                  <br />
                  Additionally, you will get a complimentary travel case and bag
                  for the first month.
                </div>
              </div>
              <StepNumber style={{ order: "2" }}>
                <div className="number">3</div>
                <div className="line"></div>
              </StepNumber>
              <div className="icon" style={{ order: "3" }}>
                <RowImageBox>
                  <div style={{ width: "230px", height: "200px" }}>
                    <img
                      src="https://i.postimg.cc/wMgVLR51/image.png"
                      alt=""
                      width={230}
                      height={200}
                    />
                  </div>
                </RowImageBox>
              </div>
            </Row>
          </div>
          <div className="step">
            <div className="step-title">STEP</div>
            <Row>
              <div className="text" style={{ order: "3" }}>
                <RowTitle>ADJUST YOUR SCENT-DULE</RowTitle>
                <div style={{ fontSize: "1.5rem" }}>
                  Want to change your scent in a month? Or alter the delivery
                  schedule?
                  <br />
                  We have got you covered. On your Manage My Subscription page,
                  you have complete flexibility to change the order and
                  frequency of delivery. Your subsequent order will be processed
                  automatically on the same date next month.
                </div>
              </div>
              <StepNumber style={{ order: "2" }}>
                <div className="number">4</div>
                <div className="line"></div>
              </StepNumber>
              <div className="icon">
                <RowImageBox>
                  <div style={{ width: "230px", height: "200px" }}>
                    <img
                      src="https://i.postimg.cc/G3xzrzrG/image.png"
                      alt=""
                      width={230}
                      height={200}
                    />
                  </div>
                </RowImageBox>
              </div>
            </Row>
          </div>
          <div className="step">
            <div className="step-title">STEP</div>
            <Row>
              <div className="text" style={{ order: "1" }}>
                <RowTitle>MANAGE YOUR SUBSCRIPTION</RowTitle>
                <div style={{ fontSize: "1.5rem" }}>
                  We want you to be completely stress-free while participating
                  in the scent discovery.
                  <br />
                  Control your membership completely with
                  <br />
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    1. The Skip a Month button
                  </span>
                  <br />
                  This button prevents charging for the missed month. If you do
                  not suspend or cancel your membership, it will automatically
                  start again the next month.
                  <br />
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    2. Terminate your subscription
                  </span>
                  <br />
                  Until the subscriber manually "Resumes" the subscription,
                  there will not be any recurring orders or charges while the
                  subscription is "Paused."
                  <br />
                  <br />
                  <span style={{ fontWeight: "bold" }}>
                    3. Delete Your Subscription
                  </span>
                  <br />
                  You can cancel your subscription at any time, no
                  questions asked.
                </div>
              </div>
              <StepNumber style={{ order: "2" }}>
                <div className="number">5</div>
                <div className="line"></div>
              </StepNumber>
              <div className="icon" style={{ order: "3" }}>
                <RowImageBox>
                  <div style={{ width: "230px", height: "200px" }}>
                    <img
                      src="https://i.postimg.cc/wMgVLR51/image.png"
                      alt=""
                      width={230}
                      height={200}
                    />
                  </div>
                </RowImageBox>
              </div>
            </Row>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <StartNowButton onClick={() => navigate("/subscribe")}>
              START NOW FOR JUST &#3647; 555
            </StartNowButton>
          </div>

          {/* Featured On */}
        </Content>
        <FeaturedContainer>
          <div
            style={{
              textAlign: "center",
              padding: "15px",
              marginBlock: "15px",
              fontSize: "2.7rem",
              fontWeight: "600",
            }}
          >
            As Features On
          </div>
          <FeaturedSection>
            <div className="col">
              <div style={{ fontSize: "1.5rem" }}>
                "It's like dating
                <span style={{ fontWeight: "bold" }}>without commitment.</span>"
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "120px", height: "40px" }}>
                  <img
                    src="https://www.scentsesandco.com.sg/static/media/vulcan.7a02cdbd2c0a19a9e2a4.webp"
                    alt=""
                    style={{
                      width: "120px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div style={{ fontSize: "1.5rem" }}>
                "Think of this{" "}
                <span style={{ fontWeight: "bold" }}>like dating</span>, but
                with perfumes!"
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "120px", height: "40px" }}>
                  <img
                    src="https://www.scentsesandco.com.sg/static/media/firstclasse.c71cd335c4aedefff46c.webp"
                    alt=""
                    style={{
                      width: "120px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div style={{ fontSize: "1.5rem" }}>
                "Truly making designer perfume{" "}
                <span style={{ fontWeight: "bold" }}>more accessible</span>."
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "120px", height: "40px" }}>
                  <img
                    src="https://www.scentsesandco.com.sg/static/media/theedgemalaysia.3ce1c7f1e75dd7c79bed.webp"
                    alt=""
                    style={{
                      width: "120px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div style={{ fontSize: "1.5rem" }}>
                A Fulfilling Scent Discovery Journey
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "120px", height: "40px" }}>
                  <img
                    src="https://www.scentsesandco.com.sg/static/media/theasianwoman.7fc23f9c4b157cb9d96b.webp"
                    alt=""
                    style={{
                      width: "120px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </div>
            </div>
          </FeaturedSection>

          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              margin: "24px 0",
            }}
          >
            Don't just hear from us! Hear what Our Subscribers feel about us!
          </div>
        </FeaturedContainer>
        <RatingSection>
          <div className="rating">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="text">
            Our subscribers have rated us 4.9 out of 5.0 on Google
          </div>
          <div className="buttons">
            <Button>
              <i className="fa-brands fa-google"></i>More Google Reviews
            </Button>
            {/* <Button>
              <i className="fa-brands fa-google-f"></i>More Google Reviews
            </Button> */}
          </div>
        </RatingSection>
        <ReviewsSection>
          <div className="title">Google Reviews from Subscribers</div>
          <div className="write-review">
            <div>
              <div className="upper-text">
                <span
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "bold",
                    color: "#0076FB",
                  }}
                >
                  Google
                </span>
                <span style={{ fontSize: "2rem", color: "#000" }}>Rating</span>
              </div>
              <div className="lower-text">
                <span
                  className="rating"
                  style={{
                    fontSize: "2.2rem",
                    fontWeight: "600",
                    color: "#000",
                  }}
                >
                  5.0
                </span>
                <span className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </span>
                <span
                  className="review-count"
                  style={{
                    fontSize: "1.2rem",
                    color: "#858585",
                  }}
                >
                  246 reviews
                </span>
              </div>
            </div>
            <WriteButton>Write a review</WriteButton>
          </div>
          <FacebookReviews>
            <div className="col">
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Wonderful experience with the perfumes and love this
                  subscriptions. The pack size easy to carry around too, however
                  would be better if the delivery can be faster. ❤️
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a href="https://maps.app.goo.gl/CSFnb96tGZ1FwJva7">
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  I ordered 3 perfumes from them at Johor and love their
                  essential oils and perfumes! X07 exceptionally good! Stronger
                  than their resemblances. In future i will get it from them!
                  Highly recommend!
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Have been using their eos and love their new perfume
                  subscriptions with authentics perfume for me to try. package
                  can be better in my opinion. my trusted scent perfume company!
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Love their authentic perfumes and love that i can change it
                  every month. Highly recommend their lemongrass eo but please
                  do not buy it at shopee. Buy from their website instead, they
                  do not sell at shopee and many fake brands use it and sell at
                  shopee. Buy from their site instead!
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Fast delivery and nice scent! love their authentic perfume
                  subscriptions for letting me try out all different perfumes
                  before purchase ❤️ https://subscription.qualisnutri.co/
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Perfumes at very affordable price! love it! scents are good
                  and slightly cheaper than sg ones. very nice and can try it at
                  their shop before purchase.
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
            </div>
            <div className="col">
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Nice grapefruit essential oil. Nice scent and love the
                  products!😘😘
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Very pleased and delighted with all the perfumes! This is my
                  5th purchase and decided to share my experiences with others,
                  very prompt delivery! Love this team and highly support! 🥰
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Very affordable perfume subscriptions that allow you to try
                  out all the authentic. Love it and highly recommend to
                  purchase. 100% authentic. tried and tested! 👍🏻👍🏻👍🏻
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Love their affordable subscriptions to try out all authentic
                  designer perfumes! Love it and highly support this
                  subscriptions. Love their eos too! 😍😍😍
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Rose eo smells nice and one of the best so far i have gotten.
                  love their perfume and recommend to buy too
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Good services and super extreme fast delivery. Can try their
                  perfume at their new shop in Johor! Love it and highly
                  recommend!
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
            </div>
            <div className="col">
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Love their designer perfumes and really recommend to get it
                  from them at JB! You can try them out and smell it before buy.
                  :)
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  i love x 31 and the perfumes are stronger than most other
                  brand. love it and highly recommend!
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  I recently had the pleasure of experiencing the mesmerizing
                  fragrance of Glamour perfume of QUALIS NUTRI and I am
                  absolutely captivated! From the moment I sprayed it on my
                  skin, I was transported into a world of elegance and luxury.
                  The scent of Glamour is truly enchanting. Its exquisite blend
                  of top notes, heart notes, and base notes creates a symphony
                  that is both distinctive and unforgettable. The top notes
                  greet you with a burst of freshness, instantly uplifting your
                  mood. As the fragrance settles, the heart notes reveal
                  themselves, embracing you with their warmth and depth.
                  Finally, the base notes linger delicately, leaving a trail of
                  pure sophistication.
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
            </div>
            <div className="col">
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Not going to lie, their perfumes are really powerful! love the
                  scent and can stay more than 12 hours on my clothes!
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Love their perfume series and most of them are stronger than
                  their resemblances, Highly recommend to test them out in JOHOR
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  Love the subscriptions to let us test out all the authentic
                  perfumes. Cheers to team and love their eos!
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
              <ReviewCard>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div className="text">
                  love the eo ylang ylang and love the scent it bring to my
                  house. very popular at bkk and i got it from there when i went
                  there with my mum and dad. love the eo! and recommend to get
                  perfume also from them
                </div>
                <div className="card-footer">
                  <i className="fa-brands fa-google"></i>
                  <div className="post-info">
                    <div>Posted on</div>
                    <a
                      href="https://g.page/r/CbbjUDFZ0SqtEBM/review"
                      target="_blank"
                    >
                      Google
                    </a>
                  </div>
                </div>
              </ReviewCard>
            </div>
          </FacebookReviews>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px 0 40px",
            }}
          >
            <StartNowButton onClick={() => navigate("/subscribe")}>
              START NOW FOR JUST &#3647; 555
            </StartNowButton>
          </div>
        </ReviewsSection>
      </div>
      <Footer />
    </>
  );
};

export default HowWorksPage;
