import React from "react";
import "./Train.css";
import ViewNoLog from "../headers/ViewNoLog";
const Train = () => {
  const TrainData = [
    {
      busId: 1,
      name: "train1",
      from: "Pune",
      to: "Mumbai",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
    {
      trainId: 2,
      name: "train2",
      from: "Pune",
      to: "Banglore",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
    {
      trainId: 3,
      name: "train3",
      from: "Pune",
      to: "Ratnagiri",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
    {
      trainId: 3,
      name: "train3",
      from: "Pune",
      to: "Ratnagiri",
      departureTime: "2.00pm",
      totalTime: "4 hours",
      price: "1000/-",
    },
    {
      trainId: 3,
      name: "train3",
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
      {TrainData.map((Train) => {
        return (
          <div className="Train-div" key={Train.TrainId}>
            <div className="Train-element">
              <div className="Train-name" id="Train-description">
                <div className="Train-p" id="Train-title">
                  {Train.name}
                </div>
                <div className="Train-p" id="from-to-train">
                  <div>From: {Train.from}</div>
                  <div>To: {Train.to}</div>
                </div>
                <div className="Train-p" id="departure-time-train">
                  <div className="Train-time">
                    Train Time: {Train.totalTime}
                  </div>
                  <div className="dept-div-train">
                    Departure Time: {Train.departureTime}
                  </div>
                </div>
              </div>
              <div className="Train-name" id="price-seat-train">
                <div className="price-train">Price: {Train.price}</div>
                <div className="book-seat-train">Book Seat </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Train;
