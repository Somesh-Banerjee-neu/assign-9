import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import * as api from "../api"; // Import the delete function

interface NoteCardProps {
  note: any; // Define a more specific type for your note
  fetchNotes: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, fetchNotes }) => {
  const handleDelete = async (id: string) => {
    try {
      await api.deleteMeetingNote(id);
      fetchNotes(); // Refresh the notes list after deleting
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {note.title}
        </Typography>
        <Typography color="textSecondary">{note.content}</Typography>
        {/* Action items would be rendered here */}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => handleDelete(note._id)}
        >
          Delete
        </Button>
        {/* Add Edit functionality */}
      </CardActions>
    </Card>
  );
};

export default NoteCard;
