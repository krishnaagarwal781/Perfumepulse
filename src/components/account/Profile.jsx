import React, { useContext, useState } from "react";
import styled from "styled-components";
import CustomDropdown2 from "./CustomDropdown2";
import PhoneCodeDropdown from "./PhoneCodeDropdown";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import swal from "sweetalert";

const Wrapper = styled.div`
  padding: 10px 0;
  /* border: 2px solid green; */
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  padding-bottom: 20px;
`;

const InlineInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  .contact-num {
    margin-top: 29px;
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    margin-bottom: 10px;

    .contact-num {
      margin-top: 0px;
    }
  }
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(217, 217, 217);
  outline: none;
  font-size: 1.4rem;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};

  &:hover {
    border-color: ${(props) => (props.disabled ? "none" : "#403c3c")};
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

const BlockInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 20px;
`;

const SaveButton = styled.button`
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

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const [gender, setGender] = useState(userData?.gender);
  const [firstname, setFirstname] = useState(userData?.first_name);
  const [lastname, setLastname] = useState(userData?.last_name);
  const [dob, setDob] = useState(userData?.dob);
  const [email, setEmail] = useState(userData?.email);
  const [phoneNumber, setPhoneNumber] = useState(userData?.phone_no);
  const { setCurrentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const toCapitalize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  const handleUpdateData = async (e) => {
    e.preventDefault();

    setLoading(true);

    const updatedData = {
      firstname: firstname,
      lastname: lastname,
      dob: dob,
      gender: gender,
      phoneNumber: phoneNumber,
      countryCode: "+65",
      email,
    };

    try {
      axios
        .post(
          "https://subscriptionback.qualisnutri.co/api/update-info",
          updatedData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          setCurrentUser(res.data.user);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          swal("Success", res.data.message, "success");
        })
        .catch((error) => {
          swal(
            "Error",
            "Internal server error. Please try again later",
            "error"
          );
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleUpdateData}>
        <Title>Profile Details</Title>
        <InlineInput>
          <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </InlineInput>
        <InlineInput>
          <div>
            <Label htmlFor="birthdate">Birth Date</Label>
            <Input
              type="date"
              name="birthdate"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <CustomDropdown2 gender={gender} setGender={setGender} />
          </div>
        </InlineInput>
        <BlockInput>
          <Label htmlFor="firstname">Email</Label>
          <Input
            type="text"
            name="email"
            disabled={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </BlockInput>
        <InlineInput>
          <div>
            <Label htmlFor="contact">Contact No</Label>
            <PhoneCodeDropdown />
          </div>
          <div>
            {/* <Label style={{ visibility: "hidden" }} htmlFor="lastname">
              Number
            </Label> */}
            <Input
              className="contact-num"
              type="text"
              name="lastname"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </InlineInput>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <SaveButton type="submit">
            {loading ? <div className="loader"></div> : "Save"}
          </SaveButton>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
