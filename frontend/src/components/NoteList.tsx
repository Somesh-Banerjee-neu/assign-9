import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function NoteList({ notes, onSelect, onDelete }) {
    return (
        <List>
            {notes.map(note => (
                <ListItem button key={note._id} onClick={() => onSelect(note)}>
                    <ListItemText primary={note.title} secondary={note.content.substring(0, 50) + '...'} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => onDelete(note._id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

export default NoteList;
