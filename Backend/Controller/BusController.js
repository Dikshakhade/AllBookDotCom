const AsyncHandler = require("express-async-handler");
const bus = require("../models/busModel");
const busInfo = AsyncHandler(async (res, res) => {
  const busData = await bus.find();
});
