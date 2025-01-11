const Attendee = require("../models/Attendee");

const addAttendee = async (req, res) => {
  try {
    const { name, email, assignedEvent } = req.body;

    // Check if the event exists
    const event = await Event.findById(assignedEvent);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Create a new attendee and associate them with the event
    const attendee = new Attendee({ name, email, event: assignedEvent });
    await attendee.save();

    // Add the attendee to the event's attendees array
    event.attendees.push(attendee._id);
    await event.save();

    res.status(201).json({ message: "Attendee added successfully", attendee });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find().populate("assignedEvent");
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteAttendee = async (req, res) => {
  try {
    const { id } = req.params;
    await Attendee.findByIdAndDelete(id);
    res.status(200).json({ message: "Attendee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addAttendee, getAllAttendees, deleteAttendee };
