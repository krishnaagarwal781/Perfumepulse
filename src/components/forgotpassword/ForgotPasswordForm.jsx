import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import swal from "sweetalert";

const Wrapper = styled.div`
  max-width: 630px;
  margin: 50px auto;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
  text-align: center;
  letter-spacing: 2px;
`;

const Input = styled.input`
  font-size: 1.4rem;
  height: 40px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(217, 217, 217);
  outline: none;

  &:hover {
    border-color: #403c3c;
  }

  &:focus {
    border-color: #403c3c;
    box-shadow: 0 0 0 2px rgba(51, 50, 50, 0.2);
    outline: 0;
  }
`;

const Label = styled.label`
  padding: 0 0 8px;
  font-size: 1.4rem;

  &::before {
    content: "* ";
    color: red;
  }
`;

const FormBox = styled.div`
  padding: 15px 0 5px;
`;

const SubmitButton = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  padding: 10px 20px;
  background-color: #403c3c;
  text-transform: uppercase;
  border: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5a5858;
  }
`;

const CancelButton = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.4rem;
`;

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      axios
        .post(
          "https://subscriptionback.qualisnutri.co/api/password/forgot-password",
          {
            email,
          }
        )
        .then((res) => {
          console.log(res.data);
          swal(
            "Email Sent",
            "We've sent you an email with a link to update your password.",
            "success"
          );
          navigate("/login");
        })
        .catch((error) => {
          swal("Error", error.response.data.message, "error");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      swal("Error", "Internal Server Error", "error");
    }
  };

  return (
    <Wrapper>
      <Title>Reset Your Password</Title>
      <div style={{ textAlign: "center", fontSize: "1.4rem" }}>
        We will send you an email to reset your password.
      </div>
      <FormBox>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "48px",
              marginBottom: "20px",
            }}
          >
            <SubmitButton type="submit">
              {loading ? <div className="loader"></div> : "Submit"}
            </SubmitButton>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CancelButton to="/login">Cancel</CancelButton>
        </div>
      </FormBox>
    </Wrapper>
  );
};

export default ForgotPasswordForm;
