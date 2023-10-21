import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 50px 30px;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  .active-page {
    border-color: #333232;
  }
`;

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  height: 32px;
  line-height: 30px;
  vertical-align: middle;
  color: #333232;
  padding: 0 12px;
  border: 1px solid rgb(217, 217, 217);
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #333232;
  }
`;

const CustomPagination = ({ perPage, totalRecords }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(totalRecords / perPage);
  const pageNumbers = [];

  // Generate Array for Page Numbers
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pageCount) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageNumberClick = (number) => {
    setCurrentPage(number);
  };

  return (
    <Wrapper>
      <Button
        style={{
          cursor: currentPage === 1 && "not-allowed",
        }}
        onClick={handlePrevClick}
      >
        Prev
      </Button>
      {/* <span className="page-info">{`${currentPage}/${pageCount}`}</span> */}
      {pageNumbers.map((number) => (
        <Button
          className={currentPage === number && "active-page"}
          key={number}
          onClick={() => handlePageNumberClick(number)}
        >
          {number}
        </Button>
      ))}
      <Button
        style={{
          cursor: currentPage === pageCount && "not-allowed",
        }}
        onClick={handleNextClick}
      >
        Next
      </Button>
    </Wrapper>
  );
};

export default CustomPagination;
