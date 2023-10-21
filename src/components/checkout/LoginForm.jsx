import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "../../assets/Loader.css";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import swal from "sweetalert";

const Form = styled.form`
  padding: 30px 96px;
  border: 1px solid rgb(217, 217, 217);

  @media screen and (max-width: 820px) {
    padding: 15px;
  }
`;

const FormItem = styled.div`
  font-size: 1.4rem;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.error ? "red" : "rgb(217, 217, 217)")};
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

  &::before {
    content: "* ";
    color: red;
  }
`;

const ForgotPassword = styled(Link)`
  display: block;
  font-size: 1.4rem;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();
  const [queryParameters] = useSearchParams();
  const total_price = queryParameters.get("total_price");
  const { setCurrentUser, currentUser, loginUser } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!e.target.checkValidity()) {
      // If the form is not valid, show an error and return
      setShowError(true);
      return;
    }

    try {
      axios
        .post("https://subscriptionback.qualisnutri.co/api/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          loginUser(res.data.user, res.data.token);
          navigateTo(`/subscribe/checkout?id=${res.data.user.id}`);
        })
        .catch((error) => {
          swal("Error", error.response.data.message, "error");
        });
    } catch (error) {
      swal("Error", "Internal Server Error", "error");
    }
    setIsLoading(false);
  };

  return (
    <Form onSubmit={handleLogin} className="form-box">
      <div style={{ fontSize: "2.4rem", padding: "30px", textAlign: "center" }}>
        Have an account?
        <br />
        Login now!
      </div>
      <FormItem className="form-item">
        <Label htmlFor="firstname">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={showError} // Apply the error styling only when there's an error
        />
      </FormItem>
      <FormItem className="form-item">
        <Label htmlFor="firstname">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={showError} // Apply the error styling only when there's an error
        />
      </FormItem>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <button
          style={{
            padding: "8px 18px",
            backgroundColor: "#333232",
            border: "none",
            color: "#fff",
            fontSize: "1.4rem",
          }}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? <div className="loader" /> : "Login"}
        </button>
      </div>
      <ForgotPassword to="/forgot-password">
        Forgot your password?
      </ForgotPassword>
    </Form>
  );
};

export default LoginForm;
