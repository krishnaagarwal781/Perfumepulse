import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

  &::before {
    content: "* ";
    color: red;
  }
`;

const Preference = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(1px, auto));
  gap: 10px;
`;

const GenderBox = styled.label`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  cursor: pointer;
  padding: 15px 0;
  border-radius: 5px;
  border: 1px solid rgb(217, 217, 217);
  background-color: #fff;
  position: relative;
  transition: background-color 0.3s ease-in-out;

  .image {
    display: flex;
    justify-content: center;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
`;

const ErrorMessage = styled.div`
  font-weight: 600;
  color: red;
  font-size: 1.4rem;
  transition: opacity 0.3s ease-in-out;
`;

const SignUpForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigateTo = useNavigate();

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validations
    if (password.length < 8) {
      swal("Error", "Password length must be at least 8 characters");
      return;
    }

    if (!isChecked) {
      setShowError(true);
    } else {
      try {
        axios
          .post("https://subscriptionback.qualisnutri.co/api/register", {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            preference: gender,
            dob: dob,
          })
          .then((res) => {
            swal("Success", res.data.message, "success");
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("user", JSON.stringify(response.data.token));
            localStorage.setItem("loggedIn", true);
            navigateTo(`/subscribe/checkout?id=${res.data.user.id}`);
          })
          .catch((error) => {
            swal("Error", error.response.data.message, "error");
          });
      } catch (error) {
        swal("Error", "Internal Server Error", "error");
      }
    }
  };

  return (
    <Form onSubmit={handleSignUp} className="form-box">
      <div style={{ fontSize: "2.4rem", padding: "30px", textAlign: "center" }}>
        Create your account
        <br />
        to kickstart your
        <br />
        scent-discovery journey
      </div>
      <FormItem className="form-item">
        <Label htmlFor="firstname">First Name</Label>
        <Input
          type="text"
          id="firstname"
          required={true}
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </FormItem>
      <FormItem className="form-item">
        <Label htmlFor="firstname">Last Name</Label>
        <Input
          type="text"
          id="lastname"
          required={true}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </FormItem>
      <FormItem className="form-item">
        <Label htmlFor="firstname">Date of Birth</Label>
        <Input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </FormItem>
      <FormItem className="form-item">
        <Label htmlFor="firstname">Email</Label>
        <Input
          type="email"
          id="email"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormItem>
      <FormItem className="form-item">
        <Label htmlFor="firstname">Password</Label>
        <Input
          type="password"
          id="password"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormItem>
      <div className="scent-preference" style={{ marginBottom: "24px" }}>
        <div
          className="title"
          style={{ marginBottom: "16px", fontSize: "1.4rem" }}
        >
          My Scent Preference
        </div>
        <Preference>
          <GenderBox
            style={{
              backgroundColor: gender === "male" ? "#ecdfce" : "#fff",
            }}
          >
            <input
              type="radio"
              value="male"
              checked={gender === "male"}
              onChange={handleGenderChange}
            />
            <div className="image">
              <img
                src="https://www.scentsesandco.com.sg/static/media/male_icon.e8dfefee3b22999533b3.webp"
                alt=""
                width={39}
                style={{ marginBottom: "20px", objectFit: "cover" }}
              />
            </div>
            <div style={{ fontSize: "1.4rem", textAlign: "center" }}>
              For Him
            </div>
          </GenderBox>
          <GenderBox
            style={{
              backgroundColor: gender === "female" ? "#ecdfce" : "#fff",
            }}
          >
            <input
              type="radio"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            <div className="image">
              <img
                src="https://www.scentsesandco.com.sg/static/media/female_icon.3b4db73cbe18bc6051f0.webp"
                alt=""
                width={39}
                style={{ marginBottom: "20px" }}
              />
            </div>
            <div style={{ fontSize: "1.4rem", textAlign: "center" }}>
              For Her
            </div>
          </GenderBox>
        </Preference>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          fontSize: "1.4rem",
        }}
      >
        <input
          type="checkbox"
          id="conditions"
          style={{ position: "relative", top: "0.2em" }}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="conditions" style={{ padding: "0 8px" }}>
          I agree to the Terms & Conditions, and that I have read and understand
          the Privacy Policy.
        </label>
      </div>
      <ErrorMessage style={{ opacity: showError ? "1" : "0" }}>
        Please check privacy policy before submit
      </ErrorMessage>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}
      >
        <button
          type="submit"
          style={{
            padding: "8px 18px",
            backgroundColor: "#333232",
            border: "none",
            color: "#fff",
            fontSize: "1.4rem",
          }}
        >
          Create now
        </button>
      </div>
     
    </Form>
  );
};

export default SignUpForm;
