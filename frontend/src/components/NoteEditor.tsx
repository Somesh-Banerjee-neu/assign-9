import React, { useState, useEffect, ChangeEvent } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Box } from '@mui/material';

// Define the types for action items
interface ActionItem {
  text: string;
  completed: boolean;
}

// Define the shape of a note
interface Note {
  _id?: string; // Optional because a new note won't have an ID until it's saved
  title: string;
  content: string;
  actionItems: ActionItem[];
  created: string;
}

// Props interface for NoteEditor
interface NoteEditorProps {
  note: Note;
  onSave: (note: Note) => void;
  onCancel: () => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ note, onSave, onCancel }) => {
    const [title, setTitle] = useState<string>(note.title);
    const [content, setContent] = useState<string>(note.content);
    const [actionItems, setActionItems] = useState<ActionItem[]>(note.actionItems);

    useEffect(() => {
        // Anytime the note prop changes, update the local state
        setTitle(note.title);
        setContent(note.content);
        setActionItems(note.actionItems);
    }, [note]);

    const handleSave = () => {
        // Create a note object with the updated state and call onSave
        const updatedNote: Note = {
            ...note,
            title,
            content,
            actionItems,
            created: note.created || new Date().toISOString() // Use existing created date or generate a new one
        };
        onSave(updatedNote);
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleActionChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newActionItems = actionItems.map((item, i) => {
            if (i === index) {
                return { ...item, completed: event.target.checked };
            }
            return item;
        });
        setActionItems(newActionItems);
    };

    return (
        <Box>
            <TextField
                label="Title"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Content"
                value={content}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                fullWidth
                multiline
                rows={4}
                margin="normal"
            />
            {actionItems.map((item, index) => (
                <FormControlLabel
                    key={index}
                    control={
                        <Checkbox
                            checked={item.completed}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleActionChange(index, e)}
                        />
                    }
                    label={item.text}
                />
            ))}
            <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
            <Button onClick={handleCancel} variant="contained" color="secondary">Cancel</Button>
        </Box>
    );
};

export default NoteEditor;
