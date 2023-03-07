import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset, logout } from "../../features/auth/authSlice";
import "./navbar.css";

function ViewNoLog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  // const logoutHandler = () => {
  //   dispatch(logout());
  //   dispatch(reset());
  //   navigate("/");
  // };
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
        Hi,
        <br />
      </div>
      <div className="log-out">
        <button
          onClick={() => {
            dispatch(logout());
            dispatch(reset());
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default ViewNoLog;
