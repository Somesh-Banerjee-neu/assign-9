import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

interface ActionItem {
  itemName: string;
  checked: boolean;
}

interface NoteDetailProps {
  note: any; // Use the appropriate type for your note
  onClose: () => void;
  onSave: (updatedNote: any) => void; // Add a type for your note
}

const NoteDetail: React.FC<NoteDetailProps> = ({ note, onClose, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);
  const [editedActionItems, setEditedActionItems] = useState(note.actionItems);

  const handleActionItemChange = (index: number, checked: boolean) => {
    const updatedActionItems = editedActionItems.map(
      (item: ActionItem, i: number) => {
        if (i === index) {
          return { ...item, checked };
        }
        return item;
      }
    );
    setEditedActionItems(updatedActionItems);
  };

  const handleSave = () => {
    const updatedNote = {
      ...note,
      title: editedTitle,
      content: editedContent,
      actionItems: editedActionItems,
    };
    onSave(updatedNote);
    setIsEditing(false); // Stop editing after save
  };

  return (
    <Box
      sx={{
        border: "1px solid #2c3e50",
        borderRadius: "4px",
        padding: 2,
        bgcolor: "#fafca2",
      }}
    >
      <Button onClick={onClose}>Close</Button>
      {isEditing ? (
        <TextField
          fullWidth
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          margin="normal"
        />
      ) : (
        <Typography variant="h5">{note.title}</Typography>
      )}
      {isEditing ? (
        <TextField
          fullWidth
          multiline
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          margin="normal"
        />
      ) : (
        <Typography>{note.content}</Typography>
      )}
      <FormGroup>
        {editedActionItems.map((item: ActionItem, index: number) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={item.checked}
                onChange={(e) =>
                  handleActionItemChange(index, e.target.checked)
                }
                disabled={!isEditing}
              />
            }
            label={item.itemName}
          />
        ))}
      </FormGroup>
      {isEditing ? (
        <Button onClick={handleSave}>Save</Button>
      ) : (
        <Button onClick={() => setIsEditing(true)}>Edit</Button>
      )}
    </Box>
  );
};

export default NoteDetail;
