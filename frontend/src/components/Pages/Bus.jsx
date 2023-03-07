import React from "react";
import Book from "../Bookheading/Book";
import ViewNoLog from "../headers/ViewNoLog";
// export const Bus = async () => {
//   try {
//     const config = {
//       headers: {
//         "Content-type": "application/json",
//       },
//     };
//     const data = await axios.get("/bus-info", config);
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
function Bus() {
  return (
    <>
      <ViewNoLog />
      <Book title="Book Bus">
        <div className="bus-list"></div>
      </Book>
    </>
  );
}
export default Bus;
