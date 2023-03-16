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

//post request
const BusDataAdd = AsyncHandler(async (req, res) => {
  const { name, from, to, departureTime, totalTime, totalPrice } =
    await req.body;
  if (!name || !from || !to || !departureTime || !totalTime || !totalPrice) {
    res.status(400);
    throw new Error("Please fill all the feilds");
  }
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

//put request
const updateBusdata = AsyncHandler(async (req, res) => {
  const { name, from, to, departureTime, totalTime, totalPrice } =
    await req.body;
  const bus = await Bus.findOne({ name });
  if (bus) {
    // Bus.update({name:name},{$set{from:from,to:to,departureTime:departureTime,totalTime:totalTime,totalPrice:totalPrice}})
    await bus.set({
      from: from,
      to: to,
      departureTime: departureTime,
      totalTime: totalTime,
      totalPrice: totalPrice,
    });
    await bus.save();
    res.json(bus);
  } else {
    res.status(404);
    throw new Error("Bus not found");
  }
});
//delete
const deleteBusdata = AsyncHandler(async (req, res) => {
  const bus = await Bus.findById(req.params.id);
  if (bus) {
    await bus.remove();
    res.json({ message: "Bus Removed " });
  }
});
module.exports = { BusDataAdd, getBusdata, updateBusdata, deleteBusdata };
