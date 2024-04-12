import cors from "cors";
import express from "express";
import connectDB from "./connection/db.js";
import meetingNotesRouter from "./app/routes/meetingNotesRouter.js";

import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
// Connect to MongoDB
await connectDB();

// Use meeting notes router
app.use("/meetingNotes", meetingNotesRouter);

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
