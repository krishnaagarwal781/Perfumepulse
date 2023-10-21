import { useState } from "react";
import styled from "styled-components";
import { faqsData } from "./FaqsData.js";
import FaqItem from "./FaqItem.jsx";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainTitle = styled.div`
  font-size: 3.6rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

const Content = styled.div`
  padding: 50px;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin: 15px 0;
`;
//addded
const Faqs = () => {
  const [openedIndex, setOpenedIndex] = useState(-1);

  const handleOpen = (currentIndex) => {
    if (currentIndex === openedIndex) {
      setOpenedIndex(-1);
    } else {
      setOpenedIndex(currentIndex);
    }
  };

  return (
    <Wrapper>
      <Content>
        <MainTitle>Frequently Asked Questions</MainTitle>
        <section>
          <Title>GENERAL</Title>
          {faqsData.general.map((data, itemIndex) => (
            <FaqItem
              key={itemIndex}
              data={data}
              itemIndex={itemIndex}
              openedIndex={openedIndex}
              handleOpen={handleOpen}
            />
          ))}
        </section>
        <section>
          <Title>SUBSCRIPTION</Title>
          {faqsData.subscription.map((data, itemIndex) => (
            <FaqItem
              key={itemIndex}
              data={data}
              itemIndex={itemIndex + faqsData.general.length}
              openedIndex={openedIndex}
              handleOpen={handleOpen}
            />
          ))}
        </section>
        <section>
          <Title>PRICING</Title>
          {faqsData.pricing.map((data, itemIndex) => (
            <FaqItem
              key={itemIndex}
              data={data}
              itemIndex={itemIndex + faqsData.subscription.length}
              openedIndex={openedIndex}
              handleOpen={handleOpen}
            />
          ))}
        </section>
        <section>
          <Title>REFUNDS AND RETURNS</Title>
          {faqsData.refundsReturns.map((data, itemIndex) => (
            <FaqItem
              key={itemIndex}
              data={data}
              itemIndex={itemIndex + faqsData.pricing.length}
              openedIndex={openedIndex}
              handleOpen={handleOpen}
            />
          ))}
        </section>
      </Content>
    </Wrapper>
  );
};

export default Faqs;
