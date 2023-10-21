import React from "react";
import TopNavbar from "../components/TopNavbar";
import styled from "styled-components";
import Footer from "../components/Footer";

const HeroSection = styled.section`
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbf6f3;

  .title {
    font-weight: bold;
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

const ReviewsPage = () => {
  return (
    <>
      <TopNavbar />
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <HeroSection>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              className="title"
              style={{ fontSize: "3.2rem", textAlign: "center" }}
            >
              Reviews
            </h3>
            <p
              style={{
                fontSize: "1.7rem",
                width: "45%",
                textAlign: "center",
              }}
            >
              Shared by good-smelling customers who have tried and tested the
              joy in discovering new fragrances monthly
            </p>
          </div>
        </HeroSection>
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
            <StartNowButton>START NOW FOR JUST &#3647; 555</StartNowButton>
          </div>
        </ReviewsSection>
      </div>
      <Footer />
    </>
  );
};

export default ReviewsPage;
