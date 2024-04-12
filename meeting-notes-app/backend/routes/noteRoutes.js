const express = require('express');
const router = express.Router();
const Note = require('../NoteModel');

// Get all notes
router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new note
router.post('/', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content,
        actionItems: req.body.actionItems
    });

    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update an existing note
router.put('/:id', async (req, res) => {
    try {
        const { title, content, actionItems } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { title, content, actionItems },
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found with provided ID" });
        }
        res.json(updatedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



module.exports = router;
