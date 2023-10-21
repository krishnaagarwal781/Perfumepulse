import { useContext, useRef, useState } from "react";
import PasswordField from "./PasswordField";
import { UserContext } from "../../context/UserContext";
import styled from "styled-components";
import axios from "axios";
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

const InputWrapper = styled.div`
  position: relative;

  i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 8px;
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

const ChangePassword = () => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const { currentUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleChangePassword = (e) => {
    e.preventDefault();

    setLoading(true);

    // API Call for Password Change
    if (newPass !== confPass) {
      swal("Error!", "New and Confirm Password not matched", "error");
      setLoading(false);
      return;
    }

    const data = {
      oldPassword: oldPass,
      newPassword: newPass,
      userId: JSON.parse(localStorage.getItem("user")).id,
    };

    try {
      axios
        .post(
          "https://subscriptionback.qualisnutri.co/api/change-password",
          data,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          swal("Success", res.data.message, "success");
        })
        .catch((error) => {
          swal("Error", error.response.data.message, "error");
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log("Error:", error.response.data);
      setLoading(false);
    }
  };

  return (
    <div>
      <Title>Change Password</Title>
      <form onSubmit={handleChangePassword}>
        <div style={{ marginBottom: "15px" }}>
          <Label htmlFor="firstname">
            <span style={{ color: "red" }}>*</span> Old Password
          </Label>
          <PasswordField value={oldPass} setValue={setOldPass} />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <Label htmlFor="firstname">
            <span style={{ color: "red" }}>*</span> New Password
          </Label>
          <PasswordField value={newPass} setValue={setNewPass} />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <Label htmlFor="firstname">
            <span style={{ color: "red" }}>*</span> Confirm Password
          </Label>
          <PasswordField value={confPass} setValue={setConfPass} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <SaveButton type="submit">
            {loading ? <div className="loader"></div> : "Save"}
          </SaveButton>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
