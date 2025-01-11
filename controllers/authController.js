const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    // Create a new user
    const user = await User.create({ name, email, password });

    // Generate a token
    const token = generateToken(user._id);

    // Set token in an HTTP-only cookie
    res.cookie("token", token, { httpOnly: true });

    // Remove password from response
    const { password: _, ...userData } = user.toObject();

    res.status(201).json({ user: userData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const { token } = req.cookies;

  // Check if the token exists in cookies and matches the one in the database
  if (token) {
    const existingUser = await User.findOne({ token });
    if (existingUser && existingUser.token === token) {
      return res.status(409).json({ message: "User already logged in." });
    }
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const newToken = generateToken(user._id); // Generate new token
    user.token = newToken; // Save the token in the database
    await user.save();

    res.cookie("token", newToken, { httpOnly: true }); // Set the cookie with the token

    // Exclude password and token from the response
    const { password: userPassword, ...userData } = user.toObject(); // Remove password and token
    res.status(200).json({ user: userData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.logout = async (req, res) => {
  const { token } = req.cookies;
  const user = await User.findOne({ token: token });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.token = null;
  await user.save();
  res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "Logged out successfully" });
};
