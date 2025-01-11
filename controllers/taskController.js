const Task = require("../models/Tasks");

const createTask = async (req, res) => {
  try {
    const { name, deadline, status, assignedAttendee } = req.body;

    const task = new Task({ name, deadline, status, assignedAttendee });
    await task.save();

    res.status(201).json({ message: "Task created successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getTasksForEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const tasks = await Task.find({ assignedEvent: eventId }).populate(
      "assignedAttendee"
    );
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({ message: "Task status updated successfully", task });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createTask, getTasksForEvent, updateTaskStatus };
