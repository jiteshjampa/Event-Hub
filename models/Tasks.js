const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  deadline: { type: Date, required: true },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
  attendee: { type: mongoose.Schema.Types.ObjectId, ref: "Attendee" },
});

module.exports = mongoose.model("Task", taskSchema);
