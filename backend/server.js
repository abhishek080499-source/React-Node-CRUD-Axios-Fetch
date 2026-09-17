import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js"; 
import Details from "./models/details.js";

dotenv.config();

const app = express();

// Connect Database
connectDB();

app.use(cors());
app.use(express.json());

// ✅ GET all users
app.get("/users", async (req, res) => {
  try {
    const users = await Details.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST new user
app.post("/users", async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    const newDetails = new Details({ name, email, mobile });
    await newDetails.save();

    res.status(201).json({
      message: "User created successfully",
      user: newDetails,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ PUT (update user by ID)
app.put("/users/:id", async (req, res) => {
  try {
    const { name, email, mobile } = req.body;

    const updatedUser = await Details.findByIdAndUpdate(
      req.params.id,
      { name, email, mobile },
{ returnDocument: "after" }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ DELETE (remove user by ID)
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await Details.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
