import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import CreateNoteModal from "./CreateModal"; // Ensure you have this component
import * as api from "../api"; // Assuming you have an API utility file
import NoteDetail from "./NoteDetail";

const NotesList: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const [filter, setFilter] = useState("");
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<any | null>(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await api.getAllMeetingNotes();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleFilter = async (query: string) => {
    try {
      console.log("Filtering notes with query:", query);
      const filteredData = await api.filterMeetingNotes(query);
      console.log("Filtered data:", filteredData);
      setNotes(filteredData);
    } catch (error) {
      console.error("Error filtering notes:", error);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      await api.deleteMeetingNote(id);
      fetchNotes(); // Refresh notes after deletion
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleSelectNote = (note: any) => {
    setSelectedNote(note);
  };

  const handleSaveNote = async (updatedNote: any) => {
    try {
      await api.updateMeetingNote(updatedNote._id, updatedNote);
      fetchNotes(); // Refresh the list to show the updated note
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" gutterBottom component="div">
        Notes for your daily routine
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <TextField
          label="Search Notes"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setFilter(e.target.value);
            handleFilter(e.target.value);
          }}
          sx={{ flexGrow: 1, marginRight: 2 }}
        />
        <Button
          variant="contained"
          onClick={() => setCreateModalOpen(true)}
          sx={{ flexGrow: 0 }}
        >
          Create New Note
        </Button>
      </Box>
      <Grid container spacing={2}>
        {notes.map((note) => (
          <Grid item xs={12} sm={6} lg={4} key={note._id}>
            <Card sx={{ bgcolor: "#fafca2", mb: 2 }}>
              <CardContent onClick={() => handleSelectNote(note)}>
                <Typography variant="h6">{note.title}</Typography>
                <Typography>{note.content}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedNote && (
        <NoteDetail
          note={selectedNote}
          onClose={() => setSelectedNote(null)}
          onSave={handleSaveNote}
        />
      )}
      <CreateNoteModal
        open={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        fetchNotes={fetchNotes}
      />
    </Container>
  );
};

export default NotesList;
