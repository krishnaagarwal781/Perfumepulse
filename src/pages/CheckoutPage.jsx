import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ProductContext } from "../context/ProductContext";
import CustomDropdown from "../components/CustomDropdown";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import PhonePrefixDropdown from "../components/checkout/PhonePrefixDropdown";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  background-color: #fcf6ec;

  .left-box {
    flex: 3;
    padding: 30px 45px 50px;
    border-right: 2px solid rgb(217, 217, 217);
  }

  .right-box {
    flex: 2.5;
    padding: 30px 45px 50px;
  }

  .logo {
    font-size: 2.4rem;
    font-weight: bold;
    cursor: pointer;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;

    .left-box {
      flex: 1;
      padding: 30px 20px;
    }

    .right-box {
      flex: 1;
      padding: 30px 20px;
    }
  }
`;

const Form = styled.form`
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;

  .title {
    padding: 0px 0px 15px;
    font-size: 2rem;
    font-weight: bold;
  }

  .user-info {
    font-size: 1.4rem;
    margin-bottom: 16px;
  }
`;

const InputBox = styled.div`
  position: relative;
  margin-bottom: 20px;

  label {
    position: absolute;
    top: 0px;
    left: 15px;
    font-size: 1.2rem;
  }

  input {
    padding: 22px 15px 5px;
    font-size: 1.5rem;
    width: 100%;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 5px;
    transition: border-color 0.3s ease-in-out;

    &:hover {
      border-color: #403c3c;
    }
  }
`;

const Inline2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Inline3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Inline12 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  border-radius: 5px;
  margin-block: 16px;
  padding: 16px 25px;
  font-weight: 500;
  border: none;
  outline: none;
  font-size: 1.4rem;
  color: white;
  background-color: #f5a623;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #4a4a4a;
  }
`;

//--------- Right Side Styling
const Card = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: #fff;

  .title {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const SubscriptionInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  font-size: 1.4rem;
  margin-bottom: 20px;

  .col2 {
    text-align: end;
  }
`;

const CartProduct = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid rgb(217, 217, 217);
  outline: none;
  border-radius: 5px;
  width: 100%;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #403c3c;
  }
`;

const ApplyButton = styled.button`
  border-radius: 5px;
  padding: 9px 15px;
  outline: none;
  background-color: #fff;
  border: 1px solid rgb(217, 217, 217);
  transition: border-color 0.3 ease-in-out;

  &:hover {
    border-color: #403c3c;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;

    i {
      font-size: 3.2rem;
    }
  }
`;

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartProducts, calculateTotalPrice, totalPrice, subscriptionMonth } =
    useContext(ProductContext);
  const [phonePrefixes, setPhonePrefixes] = useState([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address: "",
    apartment: "",
    postcode: "",
    city: "",
    state: "Central Singapore",
    phonePrefix: "+65",
    phoneNumber: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (cartProducts.length === 0) {
      navigate("/subscribe");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropdownChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckoutClick = (e) => {
    e.preventDefault();

    if (formData.firstname === "") {
      swal("Error", "Your Firstname is required", "error");
      return;
    }

    if (formData.lastname === "") {
      swal("Error", "Your Lastname is required", "error");
      return;
    }

    if (formData.address === "") {
      swal("Error", "Your Address is required", "error");
      return;
    }

    if (formData.postcode === "") {
      swal("Error", "Postcode is required", "error");
      return;
    }

    if (formData.city === "") {
      swal("Error", "City is required", "error");
      return;
    }

    if (formData.phoneNumber === "") {
      swal("Error", "Phone Number is required", "error");
      return;
    }

    const userId = JSON.parse(localStorage.getItem("user")).id;
    const data = {
      userId,
      ...formData,
      totalPrice: calculateTotalPrice(),
      cartProducts,
    };

    try {
      axios
        .post("https://subscriptionback.qualisnutri.co/api/checkout", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          window.location.href = res.data.redirectURL;
        })
        .catch((error) => {
          swal("Error", error.response.data.message, "error");
        });
    } catch (error) {
      swal("Error", "Internal Server Error", "error");
    }
  };

  return (
    <Wrapper>
      <div className="left-box">
        <div className="logo">
          <img
            src="https://qualisnutri.co/wp-content/uploads/2021/04/qualisnutri-logo.png"
            width="250px"
            heigh="150px"
          />
        </div>
        <hr style={{ margin: "16px 0" }} />
        <Form onSubmit={handleCheckoutClick}>
          <div className="title">Contact Information</div>
          <div className="user-info">{`${
            JSON.parse(localStorage.getItem("user"))?.first_name
          } ${JSON.parse(localStorage.getItem("user"))?.last_name} (${
            JSON.parse(localStorage.getItem("user"))?.email
          })`}</div>
          <div className="title">Shipping Address</div>
          {/* <CustomDropdown
            options={["Use a new address"]}
            label={"Saved Addresses"}
            required={false}
          /> */}
          <Inline2>
            <InputBox>
              <label>
                First name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="firstname"
                onChange={handleChange}
                placeholder="First name"
              />
            </InputBox>
            <InputBox>
              <label>
                Last name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                placeholder="Last name"
              />
            </InputBox>
          </Inline2>
          <InputBox>
            <label>
              Address <span style={{ color: "red" }}>*</span>
            </label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              placeholder="Address"
            />
          </InputBox>
          <InputBox>
            <label>Apartment, suit, etc. (optional)</label>
            <input
              type="text"
              name="apartment"
              onChange={handleChange}
              placeholder="Apartment, suit, etc. (optional)"
            />
          </InputBox>
          <Inline3>
            <InputBox>
              <label>
                Postcode <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="postcode"
                onChange={handleChange}
                placeholder="Postcode"
              />
            </InputBox>
            <InputBox>
              <label>
                City <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                placeholder="City"
              />
            </InputBox>
            <CustomDropdown
              options={[
                "Central Singapore",
                "North East",
                "North West",
                "South East",
                "South West",
              ]}
              label={"State"}
              onChange={(value) => handleDropdownChange("state", value)}
              name="state"
            />
          </Inline3>
          <Inline12>
            <PhonePrefixDropdown
              label={"Phone prefix"}
              name="phonePrefix"
              onChange={(value) => handleDropdownChange("phonePrefix", value)}
            />
            <InputBox>
              <label>
                Phone <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </InputBox>
          </Inline12>
          <div style={{ fontSize: "1.4rem", fontWeight: "700" }}>
            Secure card payment | SSL-encrypted
            <br />
            All data is encrypted. Your card details is never stored on Scentses
            + Co server.
          </div>
          <div style={{ width: "120px", height: "60px" }}>
            <img
              src="https://www.scentsesandco.com.sg/static/media/powered_stripe.3eb27395f8b8551bfb44.webp"
              alt="Payment Method Icon"
              style={{ width: "120px", height: "60px", objectFit: "contain" }}
            />
          </div>
          <Button type="submit">Continue to checkout</Button>
          <div style={{ fontSize: "1.4rem" }}>
            *By clicking "Continue to checkout", you agree to our Term &
            Conditions, Privacy Policy and Refund Policy.
          </div>
        </Form>
      </div>
      <div className="right-box">
        <Card>
          <div className="title">Your Order</div>
          <div className="title">YOU'LL BE GETTING...</div>
          <SubscriptionInfo>
            <div className="col1">
              <div>A monthly perfume subscription.</div>
              <div>Choose your choice of perfume every month, anytime.</div>
              <div>
                Renews automatically monthly and ships from our warehouse within
                3-5 working days.
              </div>
            </div>
            <div className="col2">{`S$ ${totalPrice[
              subscriptionMonth - 1
            ].toFixed(2)}`}</div>
          </SubscriptionInfo>
          <div className="title">SHIP WITHIN 3-5 WORKING DAYS</div>
          {cartProducts.map((p, index) => (
            <CartProduct key={index}>
              <div style={{ display: "flex", flex: "3" }}>
                <img
                  src={p.image}
                  width={60}
                  height={60}
                  style={{ objectFit: "contain" }}
                  alt={p.title}
                />
                <div style={{ fontSize: "1.4rem", width: "calc(100% - 70px)" }}>
                  <div style={{ paddingLeft: "10px", fontWeight: "600" }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: "1.2rem", paddingLeft: "10px" }}>
                    This perfume will be delivered in 8mL atomiser.
                  </div>
                </div>
              </div>
              <div style={{ fontSize: "1.4rem", flex: "1", textAlign: "end" }}>
                {`S$ ${p.extra_price}.00`}
              </div>
            </CartProduct>
          ))}

          {/* Payment Overview */}
          <div className="title">PAYMENT OVERVIEW</div>
          <div style={{ display: "flex", gap: "20px", fontSize: "1.4rem" }}>
            <Input type="text" placeholder="Discount code" />
            <ApplyButton>Apply</ApplyButton>
          </div>
          <hr style={{ margin: "16px 0" }} />
          <div
            style={{
              padding: "0 0 5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "1.8rem" }}>Subtotal</div>
            <div
              style={{ fontSize: "1.8rem" }}
            >{`S$ ${calculateTotalPrice()}`}</div>
          </div>
          <div
            style={{
              padding: "0 0 5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "1.8rem" }}>Shipping</div>
            <div style={{ fontSize: "1.8rem" }}>Free</div>
          </div>
          <hr
            style={{
              margin: "16px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          />
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              padding: "0 0 5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>Total</div>
            <div>{`S$ ${calculateTotalPrice()}`}</div>
          </div>
        </Card>

        {/* Card Two */}
        <Card style={{ marginTop: "30px" }}>
          <Row>
            <div className="icon">
              <i className="fa-solid fa-lock"></i>
            </div>
            <div className="text">
              <div style={{ fontSize: "1.8rem", fontWeight: "700" }}>
                100% AUTHENTIC GUARANTEED
              </div>
              <div style={{ fontSize: "1.2rem" }}>
                All perfumes are authentic guaranteed. The perfume is repackaged
                and rebottled by us independently under strict conditions to
                ensure you get the same exact content as the original perfumes.
              </div>
            </div>
          </Row>
          <Row style={{ marginTop: "30px" }}>
            <div className="icon">
              <i className="fa-solid fa-ban"></i>
            </div>
            <div className="text">
              <div style={{ fontSize: "1.8rem", fontWeight: "700" }}>
                NO CONTRACT, CANCEL ANYTIME
              </div>
              <div style={{ fontSize: "1.2rem" }}>
                We practice a strict zero-commitment policy, which means you can
                pause, skip, cancel anytime through your own Manage My
                Subscription page. No cancellation fee, as simple as that.
              </div>
            </div>
          </Row>
        </Card>
      </div>
    </Wrapper>
  );
};

export default CheckoutPage;
