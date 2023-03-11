const AsyncHandler = require("express-async-handler");
const Bus = require("../models/busModel");
const connect = require("../config/Database");
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
    busId: 4,
    name: "bus3",
    from: "Pune",
    to: "Ratnagiri",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
  {
    busId: 5,
    name: "bus3",
    from: "Pune",
    to: "Ratnagiri",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
];
// const options = { ordered: true };

// const result = AsyncHandler(async (req, res) => {
//   const data = await Bus.insert(BusData, options);
//   res.send(data);
//   // console.log(`${result.insertedCount} documents were inserted`);
// });

// module.export = { result };
