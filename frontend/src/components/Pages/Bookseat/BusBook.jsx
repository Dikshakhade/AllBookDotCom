import React, { useRef } from "react";
import ViewNoLog from "../../headers/ViewNoLog";
import "./BusBook.css";
import { useDispatch, useSelector } from "react-redux";
const BusBook = () => {
  const dispatch = useDispatch();
  useSelector((state) => {
    const stateOfChecked = state.seatSelection.isChecked;
  });
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
  const selectionBox = useRef(null);
  const toggle = () => {};
  return (
    <>
      <ViewNoLog />
      <div className="whole-bus-div">
        <div className="bus-seat">
          {busSeatData.map((bus) => {
            return (
              <div
                className="bus-seats-divs"
                id={`seat-no-${bus.name}`}
                onClick={dispatch(toggle)}
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
