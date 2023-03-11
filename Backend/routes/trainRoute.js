const express = require("express");
const router = express.Router();

const TrainData = [
  {
    trainId: 1,
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
    trainId: 4,
    name: "train3",
    from: "Pune",
    to: "Ratnagiri",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
  {
    trainId: 5,
    name: "train3",
    from: "Pune",
    to: "Ratnagiri",
    departureTime: "2.00pm",
    totalTime: "4 hours",
    price: "1000/-",
  },
];

router.route("/train").get((req, res) => {
  res.send(TrainData);
});
module.exports = router;
