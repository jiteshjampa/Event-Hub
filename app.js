const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const attendeeRoutes = require("./routes/attendeeRoutes");
const eventRoutes = require("./routes/eventRoutes");
const taskRoutes = require("./routes/taskRoutes");
const app = express();

dotenv.config();
connectDB()
  .then(() => {
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({ origin: true, credentials: true }));

    app.use("/api/auth", authRoutes);
    app.use("/api/attendees", attendeeRoutes);
    app.use("/api/events", eventRoutes);
    app.use("/api/tasks", taskRoutes);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
