import React from "react";
import ViewNoLog from "../../headers/ViewNoLog";
import "./BusBook.css";
import { seatSelectionReducer } from "../../../features/seatSelection/seatSlice";
import { useDispatch, useSelector } from "react-redux";
const BusBook = () => {
  const dispatch = useDispatch();
  const stateOfChecked = useSelector((state) => state.seatSelection.isChecked);
  // console.log(dispatch, stateOfChecked);
  const busSeatData = [
    {
      name: "1",
    },
    {
      name: "2",
    },
    {
      name: "3",
    },
    {
      name: "4",
    },
    {
      name: "5",
    },
    {
      name: "6",
    },
    {
      name: "7",
    },
    {
      name: "8",
    },
    {
      name: "9",
    },
    {
      name: "10",
    },
    {
      name: "11",
    },
    {
      name: "12",
    },
    {
      name: "13",
    },
    {
      name: "14",
    },
    {
      name: "15",
    },
  ];
  const toggle = (prop) => {
    // console.log(stateOfChecked);
    dispatch(seatSelectionReducer(stateOfChecked));
  };
  return (
    <>
      <ViewNoLog />
      <div className="whole-bus-div">
        <div className="bus-seat">
          {busSeatData.map((bus) => {
            return (
              <div
                className="bus-seats-divs"
                key={bus.name}
                id={`seat-no-${bus.name}`}
                onClick={toggle}
              ></div>
            );
          })}
        </div>
        <div className="bus-cart"></div>
      </div>
    </>
  );
};

export default BusBook;
