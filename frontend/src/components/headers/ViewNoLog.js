import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const ViewNoLog = () => {
  const userName = localStorage.getItem("userData");
  const jsonUserData = JSON.parse(userName);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">BOOKING.COM</Link>
      </div>
      <div className="offers">
        <Link to="/offers">OFFERS</Link>
      </div>
      {/* <div className="search-bar"></div> */}
      <div className="log-in">
        <Link to="/login">
          Hello
          <br />
          {jsonUserData.Name}
        </Link>
      </div>
    </div>
  );
};
