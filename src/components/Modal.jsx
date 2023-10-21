import React from "react";
import { styled } from "styled-components";

const Backdrop = styled.div`
  background-color: rgba(189, 189, 189, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;

  &.show {
    opacity: 1;
    pointer-events: all;
  }
`;

const ModalBox = styled.div`
  font-size: 1.6rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 60%;
  height: 95%;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  border: 1px solid #d9d9d9;
  z-index: 12;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

const ModalHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 16px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  i {
    font-size: 20px;
    cursor: pointer;
  }
`;

const ModalFooter = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 16px;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #d9d9d9;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  button {
    font-size: 1.6rem;
    padding: 4px 15px;
    background-color: #333232;
    color: white;
    border-radius: 5px;
    outline: none;
    border: none;
    transition: all 0.3s;

    &:hover {
      background-color: #403c3c;
    }
  }
`;

const Content = styled.div`
  font-size: 1.6rem;
  height: 100%;
  overflow: hidden auto;
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 10px;

  .image {
    padding: 1.5rem;
  }

  .product-image {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const ExtraImages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 10px;

  .img-box {
    width: 60px;
    height: 60px;
    border: 2px solid orange;

    .extra-img-item {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const Options = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 1.6rem;

  i {
    font-size: 2rem;
  }
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-decoration: underline;
`;

const Modal = ({ selectedProduct, showModal, setShowModal }) => {
  return (
    <>
      <Backdrop
        className={showModal ? "show" : ""}
        onClick={() => setShowModal(false)}
      ></Backdrop>
      <ModalBox
        style={{
          transform: showModal
            ? "translate(-50%, -50%) scale(1)"
            : "translate(-50%, -50%) scale(0)",
        }}
      >
        <ModalHeader>
          <div className="title">Detail {selectedProduct?.id}</div>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setShowModal(false)}
          ></i>
        </ModalHeader>
        <Content>
          <div className="image">
            <img
              className="product-image"
              src={selectedProduct?.image}
              alt={selectedProduct?.title}
            />
            <ExtraImages>
              <div className="img-box">
                <img
                  className="extra-img-item"
                  src={selectedProduct?.image}
                  alt=""
                />
              </div>
            </ExtraImages>
          </div>
          <div className="detail">
            <Title>{selectedProduct?.title}</Title>
            {selectedProduct?.tagIcons.length > 0 && (
              <>
                <SubTitle>Personality</SubTitle>
                <Options>
                  {selectedProduct?.tagIcons.map((item, index) => (
                    <Option key={index}>
                      <i className={item.icon}></i>
                      <div>{item.tag}</div>
                    </Option>
                  ))}
                </Options>
              </>
            )}
            <SubTitle>Description</SubTitle>
            <p>{selectedProduct?.description}</p>
            {selectedProduct?.notes !== null && (
              <>
                <SubTitle>Notes</SubTitle>
                <div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-right"
                      style={{ marginRight: "5px" }}
                    ></i>
                    <div>
                      <span style={{ fontWeight: "bold", marginRight: "4px" }}>
                        Top Notes:
                      </span>
                      <span>{selectedProduct?.notes.top}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-right"
                      style={{ marginRight: "5px" }}
                    ></i>
                    <div>
                      <span style={{ fontWeight: "bold", marginRight: "4px" }}>
                        Middle Notes:
                      </span>
                      <span>{selectedProduct?.notes.middle}</span>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.4rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <i
                      className="fa-solid fa-circle-right"
                      style={{ marginRight: "5px" }}
                    ></i>
                    <div>
                      <span style={{ fontWeight: "bold", marginRight: "4px" }}>
                        Base Notes:
                      </span>
                      <span>{selectedProduct?.notes.base}</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </Content>
        <ModalFooter>
          <button onClick={() => setShowModal(false)}>Close</button>
        </ModalFooter>
      </ModalBox>
    </>
  );
};

export default Modal;
