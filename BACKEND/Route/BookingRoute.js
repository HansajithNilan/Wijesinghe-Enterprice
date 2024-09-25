const express = require("express");
const router = express.Router();
const BookingController = require("../Controllers/BookingController")

router.get("/",BookingController.getAllbookings);
router.post("/",BookingController.addbookings);
router.get("/:id",BookingController.getById);
router.put("/:id",BookingController.updateBookings);
router.delete("/:id",BookingController.deleteBooking);

module.exports = router;