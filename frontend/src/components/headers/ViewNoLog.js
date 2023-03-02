import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

export const ViewNoLog = () => {
  const logOut = useNavigate();
  const userName = localStorage.getItem("userData");
  const jsonUserData = JSON.parse(userName);
  const logOutHandler = () => {
    localStorage.removeItem("userData");
    logOut("/login");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">BOOKING.COM</Link>
      </div>
      <div className="offers">
        <Link to="/offers">OFFERS</Link>
      </div>
      {/* <div className="search-bar"></div> */}
      <div className="log-in" style={{ top: "80%" }}>
        Hello ,
        <br />
        {jsonUserData.Name}
      </div>
      <div className="log-out">
        <Link onClick={logOutHandler}>Log Out</Link>
      </div>
    </div>
  );
};
