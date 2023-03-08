import React from "react";
import "./Bus.css";
import ViewNoLog from "../headers/ViewNoLog";
function Bus() {
  const BusData = [
    {
      busId: 1,
      name: "bus1",
      from: "Pune",
      to: "Mumbai",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
    {
      busId: 2,
      name: "bus2",
      from: "Pune",
      to: "Banglore",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
    {
      busId: 3,
      name: "bus3",
      from: "Pune",
      to: "Ratnagiri",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
    {
      busId: 3,
      name: "bus3",
      from: "Pune",
      to: "Ratnagiri",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
    {
      busId: 3,
      name: "bus3",
      from: "Pune",
      to: "Ratnagiri",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
  ];

  return (
    <>
      <ViewNoLog />
      {BusData.map((bus) => {
        return (
          <div className="bus-div" key={bus.busId}>
            <div className="bus-element">
              <div className="bus-name" id="bus-description">
                <div className="bus-p" id="bus-title">
                  {bus.name}
                </div>
                <div className="bus-p" id="from-to">
                  <div>From: {bus.from}</div>
                  <div>To: {bus.to}</div>
                </div>
                <div className="bus-p" id="departure-time">
                  <div className="Bus-time">Bus Time: {bus.totalTime}</div>
                  <div className="dept-div">
                    Departure Time: {bus.departureTime}
                  </div>
                </div>
              </div>
              <div className="bus-name" id="price-seat">
                <div className="price">Price: {bus.price}</div>
                <div className="book-seat">Book Seat </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Bus;
