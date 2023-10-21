import React, { useState } from "react";
import styled from "styled-components";
import PasswordField from "../account/PasswordField";
import { useLocation } from "react-router-dom";

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
  font-size: 1.4rem;
  margin-bottom: 8px;
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

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Match Passwords
    if (newPassword !== confPassword) {
      swal("Error", "Passwords don't match", "error");
      setLoading(false);
      return;
    }

    swal(
      "Success",
      "Your password has been successfully reset. You can now log in to your account using your new credentials.",
      "success"
    );

    try {
      axios
        .post(
          "https://subscriptionback.qualisnutri.co/api/password/reset-password",
          {
            newPassword,
            token,
          }
        )
        .then((res) => {
          swal(
            "Success",
            "Your password has been successfully reset. You can now log in to your account using your new credentials.",
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
      <Title>Reset account password</Title>
      <div style={{ textAlign: "center", fontSize: "1.4rem" }}>
        Enter a new password for your account.
      </div>
      <FormBox>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <Label htmlFor="newPassword">
              <span style={{ color: "red" }}>*</span> New Password
            </Label>
            <PasswordField value={newPassword} setValue={setNewPassword} />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <Label htmlFor="confPassword">
              <span style={{ color: "red" }}>*</span> Confirm Password
            </Label>
            <PasswordField value={confPassword} setValue={setConfPassword} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "48px",
              marginBottom: "20px",
            }}
          >
            <SubmitButton type="submit">
              {loading ? <div className="loader"></div> : "Reset Password"}
            </SubmitButton>
          </div>
        </form>
      </FormBox>
    </Wrapper>
  );
};

export default ResetPasswordForm;
