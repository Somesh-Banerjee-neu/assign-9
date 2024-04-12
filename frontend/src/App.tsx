import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import { Container, Button } from '@mui/material';
import { fetchNotes, saveNote, deleteNote } from './api/noteAPI';

interface ActionItem {
  text: string;
  completed: boolean;
}

// Make sure this interface is the same across different components and files.
interface Note {
  _id?: string;
  title: string;
  content: string;
  actionItems: ActionItem[];
  created: string; // created should always be a string to match NoteEditorProps expectations.
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const data = await fetchNotes();
    setNotes(data);
  };

  const handleNoteAdd = () => {
    setCurrentNote({
      title: '',
      content: '',
      actionItems: [],
      created: new Date().toISOString(),
    });
  };

  const handleNoteSave = async (note: Note) => {
    await saveNote(note);
    loadNotes();
    setCurrentNote(null);
  };

  const handleNoteSelect = (note: Note) => {
    setCurrentNote(note);
  };

  const handleNoteDelete = async (noteId: string) => {
    await deleteNote(noteId);
    loadNotes();
  };

  const handleNoteCancel = () => {
    setCurrentNote(null);
  };

  return (
    <Container>
      <Button onClick={handleNoteAdd} variant="contained" color="primary">
        Add Note
      </Button>
      <NoteList notes={notes} onSelect={handleNoteSelect} onDelete={handleNoteDelete} />
      {currentNote && (
        <NoteEditor
          note={currentNote}
          onSave={handleNoteSave}
          onCancel={handleNoteCancel}
        />
      )}
    </Container>
  );
};

export default App;
