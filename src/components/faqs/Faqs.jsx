import { useState } from "react";
import styled from "styled-components";
import FaqItem from "./FaqItem.jsx";
import { FaqsDataMain } from "./FaqsDataMain.js";

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
          {FaqsDataMain.general.map((data, itemIndex) => (
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
          {FaqsDataMain.subscription.map((data, itemIndex) => (
            <FaqItem
              key={itemIndex}
              data={data}
              itemIndex={itemIndex + FaqsDataMain.general.length}
              openedIndex={openedIndex}
              handleOpen={handleOpen}
            />
          ))}
        </section>
        <section>
          <Title>PRICING</Title>
          {FaqsDataMain.pricing.map((data, itemIndex) => (
            <FaqItem
              key={itemIndex}
              data={data}
              itemIndex={itemIndex + FaqsDataMain.subscription.length}
              openedIndex={openedIndex}
              handleOpen={handleOpen}
            />
          ))}
        </section>
        <section>
          <Title>REFUNDS AND RETURNS</Title>
          {FaqsDataMain.refundsReturns.map((data, itemIndex) => (
            <FaqItem
              key={itemIndex}
              data={data}
              itemIndex={itemIndex + FaqsDataMain.pricing.length}
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
