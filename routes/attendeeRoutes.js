const express = require("express");
const {
  addAttendee,
  getAllAttendees,
  deleteAttendee,
} = require("../controllers/attendeeController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticate, addAttendee);
router.get("/", authenticate, getAllAttendees);
router.delete("/:id", authenticate, deleteAttendee);

module.exports = router;
