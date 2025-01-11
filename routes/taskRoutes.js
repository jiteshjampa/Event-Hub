const express = require("express");
const {
  createTask,
  getTasksForEvent,
  updateTaskStatus,
} = require("../controllers/taskController");
const { authenticate } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createTask);
router.get("/:eventId", authenticate, getTasksForEvent);
router.patch("/:id/status", authenticate, updateTaskStatus);

module.exports = router;
