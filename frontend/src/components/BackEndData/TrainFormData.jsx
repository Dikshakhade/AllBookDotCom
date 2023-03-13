import React, { useState } from "react";
import "./BackEndFormData.css";
export const TrainFormData = () => {
  const [trainID, setTrainID] = useState("");
  const [name, setTrainName] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [totalTime, setTotalTime] = useState("");
  const [totalPrice, setPrice] = useState("");

  return (
    <>
      <form className="train-form">
        Add New Train
        <input
          type="text"
          placeholder="Train ID"
          name="trainID"
          value={trainID}
          onChange={(e) => {
            setTrainID(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="name"
          name="Name"
          value={name}
          onChange={(e) => {
            setTrainName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="from"
          name="from"
          value={from}
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="to"
          name="to"
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="departure time"
          name="departureTime"
          value={departureTime}
          onChange={(e) => {
            setDepartureTime(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="total time"
          name="totalTime"
          value={totalTime}
          onChange={(e) => {
            setTotalTime(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="total Price"
          name="totalPrice"
          value={totalPrice}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input type="submit" value="Add Bus" />
      </form>
    </>
  );
};
