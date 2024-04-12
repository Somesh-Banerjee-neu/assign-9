import express from "express";
import * as MeetingNotesController from "../controller/meetingNotesController.js";

// Create Express router
const router = express.Router();

// Define routes
router.get("/", MeetingNotesController.getAllMeetingNotes);
router.get("/filter", MeetingNotesController.filterMeetingNotes);
router.post("/", MeetingNotesController.addMeetingNote);
router.patch("/:id", MeetingNotesController.updateMeetingNote);
router.delete("/:id", MeetingNotesController.deleteMeetingNote);

// Export router
export default router;
