import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 0;
  /* border: 2px solid green; */
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  padding-bottom: 20px;
`;

const OrderItem = styled.div`
  padding: 15px;
  border-radius: 8px;
  border: 1px solid black;
  margin-bottom: 15px;
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

const Item = styled.div`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  display: flex;
  gap: 20px;
  margin-bottom: 15px;

  &:first-child {
    margin-top: 15px;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

  .text {
    font-size: 1.4rem;
  }
`;

const PaymentButton = styled.button`
  padding: 7px 16px;
  font-size: 1.4rem;
  border: none;
  outline: none;
  color: white;
  background-color: #d0271e;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #a41710;
  }
`;

const DetailButton = styled(Link)`
  text-decoration: none;
  padding: 7px 16px;
  font-size: 1.4rem;
  border: none;
  outline: none;
  color: white;
  background-color: #4a4a4a;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f5a623;
    color: #383636;
  }
`;

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(
        "https://subscriptionback.qualisnutri.co/api/orders",
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
        setOrders(res.data.orders);
      })
      .catch((error) => {
        swal("Error", error.response.data.message, "error");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Wrapper>
      <Title>Profile Details</Title>
      {loading ? (
        <div className="loader"></div>
      ) : (
        orders?.map((order, index) => (
          <OrderItem key={index}>
            <RowText key={index}>
              <div style={{ fontSize: "1.4rem" }}>
                Order:{" "}
                <span style={{ fontWeight: "bold" }}>{`#${order.id}`}</span>
              </div>
              <div style={{ fontSize: "1.4rem" }}>
                Total:{" "}
                <span style={{ fontWeight: "bold" }}>
                  &#3647; {order.totalPrice}
                </span>
              </div>
            </RowText>
            <hr />
            <RowText>
              <div style={{ fontSize: "1.4rem" }}>
                Date:{" "}
                <span
                  style={{ fontWeight: "bold" }}
                >{`${order.date}, ${order.time}`}</span>
              </div>
              <div style={{ fontSize: "1.4rem" }}>
                Total Items:{" "}
                <span style={{ fontWeight: "bold" }}>{order.totalItems}</span>
              </div>
            </RowText>
            <RowText>
              <div style={{ fontSize: "1.4rem" }}>
                Fulfillment Status:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {order.fulfillmentStatus}
                </span>
              </div>
              <div style={{ fontSize: "1.4rem" }}>
                Payment Status:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {order.paymentStatus}
                </span>
              </div>
            </RowText>
            <div>
              <Item>
                <img src={order.image} alt="" />
                <div className="text">
                  <div>Fragrance Subscription / 1 Perfume</div>
                  <div>&#3647; {order.totalPrice}</div>
                </div>
              </Item>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <PaymentButton>Make Payment</PaymentButton>
              <DetailButton to={`/account/orders/${order.id}`}>
                View Detail
              </DetailButton>
            </div>
          </OrderItem>
        ))
      )}
    </Wrapper>
  );
};

export default MyOrders;
