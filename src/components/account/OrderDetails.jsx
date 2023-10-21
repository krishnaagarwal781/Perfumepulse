import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";
import Loader from "../Loader";

const Wrapper = styled.div`
  margin: 0 80px;
  padding: 40px 50px;

  @media screen and (max-width: 820px) {
    margin: 0;
    padding: 10px 20px;
  }
`;

const Title = styled.div`
  font-size: 3.2rem;
  margin-bottom: 24px;
  font-weight: 600;
  text-align: center;

  /* @media screen and (max-width: 820px) {
    font-size: 2.8rem;
  } */
`;

const RowText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const OrderItemsBox = styled.div`
  margin: 20px 0 0;
  border: 1px solid rgb(217, 217, 217);
`;
const OrderItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid rgb(217, 217, 217);
  display: flex;
  gap: 20px;

  &:last-child {
    border: none;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .text {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 820px) {
    img {
      width: 70px;
      height: 70px;
    }
  }
`;

const OrderText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(
        `https://subscriptionback.qualisnutri.co/api/orders/${orderId}`,
        {
          userId: JSON.parse(localStorage.getItem("user")).id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setOrder(res.data.order);
      })
      .catch((error) => {
        swal("Error", error.response.data.message, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <Title>Order Details</Title>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "1.4rem",
            }}
          >
            <div style={{ fontSize: "1.4rem" }}>
              Order:{" "}
              <span style={{ fontWeight: "bold" }}>{`#${order?.id}`}</span>
            </div>
            <div style={{ fontSize: "1.4rem" }}>
              Total:{" "}
              <span style={{ fontWeight: "bold" }}>
                &#3647; {order?.totalPrice}
              </span>
            </div>
          </div>
          <hr style={{ margin: "16px 0" }} />
          <RowText>
            <div style={{ fontSize: "1.4rem" }}>
              Order: <span style={{ fontWeight: "bold" }}>{order?.id}</span>
            </div>
            <div style={{ fontSize: "1.4rem" }}>
              Total:{" "}
              <span style={{ fontWeight: "bold" }}>
                &#3647; {order?.totalPrice}
              </span>
            </div>
          </RowText>
          <RowText>
            <div style={{ fontSize: "1.4rem" }}>
              Date:{" "}
              <span
                style={{ fontWeight: "bold" }}
              >{`${order?.date}, ${order?.time}`}</span>
            </div>
            <div style={{ fontSize: "1.4rem" }}>
              Total Items:{" "}
              <span style={{ fontWeight: "bold" }}>{order?.totalItems}</span>
            </div>
          </RowText>
          <OrderItemsBox>
            {order?.products.map((item, index) => (
              <OrderItem key={index}>
                <img src={item.image} alt={item.title} />
                <div className="text">
                  <div>{item.title}</div>
                  <div>&#3647; {item.extra_price}</div>
                </div>
              </OrderItem>
            ))}
          </OrderItemsBox>
          <div
            style={{
              padding: "20px 15px",
              borderBottom: "1px solid rgb(217, 217, 217)",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Shipping Address
            </div>
            <div style={{ fontSize: "1.4rem" }}>
              <div>{`${order?.shippingAddress.firstname} ${order?.shippingAddress.lastname}`}</div>
              <div>{`${order?.shippingAddress.phonePrefix} ${order?.shippingAddress.phoneNumber}`}</div>
              <div>{order?.shippingAddress.address}</div>
              <div>{`${order?.shippingAddress.postcode} ${order?.shippingAddress.city}`}</div>
              <div>{order?.shippingAddress.state}</div>
              <div>{order?.shippingAddress.city}</div>
            </div>
          </div>
          <div
            style={{
              padding: "20px 15px",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
              Order Details
            </div>
            <div style={{ fontSize: "1.4rem" }}>
              <OrderText>
                <div>Subtotal</div>
                <div>&#3647; {order?.orderDetails.subtotal}</div>
              </OrderText>
              <OrderText>
                <div>Order Type</div>
                <div>{order?.orderDetails.orderType}</div>
              </OrderText>
              <OrderText>
                <div>Payment Type</div>
                <div>{order?.orderDetails.paymentType}</div>
              </OrderText>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default OrderDetails;
