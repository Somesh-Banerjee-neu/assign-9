import React, { useState } from "react";
import {
  Modal,
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as api from "../api";

interface ActionItem {
  itemName: string;
  checked: boolean;
}

interface CreateNoteModalProps {
  open: boolean;
  onClose: () => void;
  fetchNotes: () => void;
}

const CreateNoteModal: React.FC<CreateNoteModalProps> = ({
  open,
  onClose,
  fetchNotes,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [actionItems, setActionItems] = useState<ActionItem[]>([]);

  const handleSave = async () => {
    try {
      const noteData = {
        title,
        content,
        actionItems,
      };
      await api.addMeetingNote(noteData);
      fetchNotes(); // Refresh the notes list after adding
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const addActionItem = () => {
    setActionItems([...actionItems, { itemName: "", checked: false }]);
  };

  const handleActionItemChange = (
    index: number,
    checked?: boolean,
    itemName?: string
  ) => {
    setActionItems(
      actionItems.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            itemName: itemName ?? item.itemName,
            checked: checked ?? item.checked,
          };
        }
        return item;
      })
    );
  };

  const modalStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    pt: 2, // Reduced padding-top for better alignment with the close button
  };

  const closeButtonStyle = {
    position: "absolute" as const,
    right: 8,
    top: 8,
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-note-modal-title"
    >
      <Box sx={modalStyle}>
        <IconButton
          onClick={onClose}
          sx={closeButtonStyle} // Apply the style for close button here
          size="small"
        >
          <CloseIcon />
        </IconButton>
        <Typography id="create-note-modal-title" variant="h6" component="h2">
          Create New Note
        </Typography>

        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="normal"
          multiline
        />
        <FormGroup>
          {actionItems.map((item, index) => (
            <Box key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={item.checked}
                    onChange={(e) =>
                      handleActionItemChange(index, e.target.checked)
                    }
                  />
                }
                label={
                  <TextField
                    fullWidth
                    value={item.itemName}
                    onChange={(e) =>
                      handleActionItemChange(index, undefined, e.target.value)
                    }
                    margin="dense"
                  />
                }
              />
            </Box>
          ))}
        </FormGroup>
        <Button onClick={addActionItem} color="primary">
          Add Action Item
        </Button>
        <Box mt={2}>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save Note
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateNoteModal;
