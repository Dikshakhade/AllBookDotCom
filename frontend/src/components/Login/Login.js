import React, { useEffect, useState } from "react";
import "./Login.css";
import { View } from "../headers/View";
import Error from "../Error/Error";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const loggedIn = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitFunction = () => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      loggedIn("/welcome");
    }
  };

  const Handler = async (ev) => {
    ev.preventDefault();
    setEmail("");
    setPassword("");
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/login",
        {
          Email,
          Password,
        },
        config
      );
      localStorage.setItem("userData", JSON.stringify(data));
      console.log(data);
      submitFunction();
    } catch (error) {
      setError(error);
      console.log(error);
    }
    useEffect(() => {
      submitFunction();
    });
  };
  return (
    <>
      {<View />}
      {error && <Error errorMessage={error} />}
      <div className="Login-div">
        <div className="username-password">
          Log In
          <form onSubmit={Handler}>
            <div className="UserName">
              <label style={{ color: "Black" }}>
                <input
                  type={"email"}
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username/Email"
                />
              </label>
            </div>
            <div className="Password">
              <label style={{ color: "Black" }}>
                <input
                  type={"password"}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </label>
            </div>
            <div className="Submit">
              <label style={{ color: "Black" }}>
                <input
                  type="submit"
                  value={"Log In"}
                  // onClick={setLoginData}
                ></input>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
