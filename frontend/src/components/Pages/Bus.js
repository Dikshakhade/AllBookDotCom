import axios from "axios";
import React from "react";
import { ViewNoLog } from "../headers/ViewNoLog";
export const Bus = async () => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const data = await axios.get("/bus-info", config);
    console.log(data);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {<ViewNoLog />}
      <div className="bus-list"></div>
    </>
  );
};
