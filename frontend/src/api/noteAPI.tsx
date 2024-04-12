const baseURL: string = 'http://localhost:5001/api/notes';

interface Note {
  _id?: string;
  title: string;
  content: string;
  actionItems: ActionItem[];
  created: string;
}

interface ActionItem {
  text: string;
  completed: boolean;
}

export const fetchNotes = async (): Promise<Note[]> => {
    const response = await fetch(baseURL);
    if (!response.ok) {
        throw new Error('Failed to fetch notes');
    }
    return response.json();
};

export const saveNote = async (note: Note): Promise<Note> => {
    const method: string = note._id ? 'PUT' : 'POST';
    const url: string = note._id ? `${baseURL}/${note._id}` : baseURL;
    const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note)
    });
    if (!response.ok) {
        throw new Error('Failed to save note');
    }
    return response.json();
};

export const deleteNote = async (noteId: string): Promise<boolean> => {
    const response = await fetch(`${baseURL}/${noteId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Failed to delete note');
    }
    return response.ok;
};
