import React, { useState } from "react";
import "./Signup.css";
import { View } from "../headers/View";
import axios from "axios";

const Signup = () => {
  const [Name, setsignupName] = useState("");
  const [Email, setsignupEmail] = useState("");
  const [Password, setsignupPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setsignupName("");
    setsignupEmail("");
    setsignupPassword("");
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/sign-up",
        {
          Name,
          Email,
          Password,
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {<View />}
      <div className="SignUp-div">
        <div className="name-email">
          Sign Up
          <form onSubmit={submitHandler}>
            <div className="signup-name">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                value={Name}
                onChange={(e) => {
                  setsignupName(e.target.value);
                }}
              />
            </div>
            <div className="signup-email">
              <input
                type="email"
                placeholder="E-mail"
                name="Email"
                value={Email}
                onChange={(e) => {
                  setsignupEmail(e.target.value);
                }}
              />
            </div>
            <div className="signup-password">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={Password}
                onChange={(e) => {
                  setsignupPassword(e.target.value);
                }}
              />
            </div>
            <div className="signup-submit">
              <input type="submit" value={"Sign Up"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
