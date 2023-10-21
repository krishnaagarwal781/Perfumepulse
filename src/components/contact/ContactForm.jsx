import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";

const Wrapper = styled.div`
  text-align: center;
  padding: 30px 0;

  .icon {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 820px) {
    padding: 10px 0;
  }
`;

const FormItem = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  font-size: 1.4rem;
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

const TextArea = styled.textarea`
  font-size: 1.4rem;
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
  font-size: 1.4rem;
`;

const SubmitButton = styled.button`
  font-size: 1.4rem;
  padding: 8px 25px;
  border-radius: 5px;
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

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validations
    if (formData.firstname === "") {
      swal("Error", "First Name is required", "error");
      setLoading(false);
      return;
    }

    if (formData.lastname === "") {
      swal("Error", "Last Name is required", "error");
      setLoading(false);
      return;
    }

    if (formData.email === "") {
      swal("Error", "Email is required", "error");
      setLoading(false);
      return;
    }

    if (formData.message === "") {
      swal("Error", "Message is required", "error");
      setLoading(false);
      return;
    }

    // API Call for Contact Form
    try {
      axios
        .post("https://subscriptionback.qualisnutri.co/api/contactus", formData)
        .then((res) => {
          swal("Success", res.data.message, "success");
          setLoading(false);
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          swal("Error", error.response.data.message, "error");
          setLoading(false);
        });
    } catch (error) {
      swal("Error", "Internal Server Error", "error");
      setLoading(false);
    }
  };
  return (
    <Wrapper>
      <div className="icon">
        <i class="fa-solid fa-address-book"></i>
      </div>
      <div
        style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "5px" }}
      >
        Have more enquiries?
      </div>
      <div style={{ fontSize: "1.4rem", marginBottom: "20px" }}>
        For corporate events, partnerships, press & careers
      </div>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Label style={{ display: "flex" }} htmlFor="firstname">
            First Name
            <span
              style={{ fontSize: "1.8rem", color: "red", marginLeft: "5px" }}
            >
              *
            </span>
          </Label>
          <Input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </FormItem>
        <FormItem>
          <Label style={{ display: "flex" }} htmlFor="lastname">
            Last Name
            <span
              style={{ fontSize: "1.8rem", color: "red", marginLeft: "5px" }}
            >
              *
            </span>
          </Label>
          <Input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </FormItem>
        <FormItem>
          <Label style={{ display: "flex" }} htmlFor="email">
            Email
            <span
              style={{ fontSize: "1.8rem", color: "red", marginLeft: "5px" }}
            >
              *
            </span>
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </FormItem>
        <FormItem>
          <Label style={{ display: "flex" }} htmlFor="email">
            Message
            <span
              style={{ fontSize: "1.8rem", color: "red", marginLeft: "5px" }}
            >
              *
            </span>
          </Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your message"
          />
        </FormItem>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <SubmitButton type="submit">
            {loading ? <div className="loader"></div> : "Submit"}
          </SubmitButton>
        </div>
      </form>
    </Wrapper>
  );
};

export default ContactForm;
