// const express = require("express");
const AsyncHandler = require("express-async-handler");
const Bus = require("../models/busModel");

//get request
const getBusdata = AsyncHandler(async (req, res) => {
  Bus.find()
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
const BusDataAdd = AsyncHandler(async (req, res) => {
  const { name, from, to, departureTime, totalTime, totalPrice } =
    await req.body;

  const busExist = await Bus.findOne({ name });
  if (busExist) {
    res.status(400);
    throw new Error("Bus Already Exist");
  }
  const bus = await Bus.create({
    name,
    from,
    to,
    departureTime,
    totalTime,
    totalPrice,
  });
  if (bus) {
    res.status(201).json({
      _id: bus._id,
      name: bus.name,
      from: bus.from,
      to: bus.to,
      departureTime: bus.departureTime,
      totalTime: bus.totalTime,
      totalPrice: bus.totalPrice,
    });
  } else {
    res.status(500);
    throw new Error("Error Occured");
  }
});
module.exports = { BusDataAdd, getBusdata };
