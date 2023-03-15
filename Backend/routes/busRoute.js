const express = require("express");
const router = express.Router();
const { BusDataAdd, getBusdata } = require("../Controller/BusController");

router.route("/bus").post(BusDataAdd);
router.route("/bus").get(getBusdata);
module.exports = router;
