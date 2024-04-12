[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/g07vwLwr)

### Notes Application

This Markdown document provides a guide for setting up a basic Notes application using React with Vite as the build tool and Material-UI (Mui) as the component library.

1. **Install Vite**: Ensure you have Node.js installed, then install Vite globally using npm or yarn.

```bash
npm install -g vite
```

2. **Create react project**:

```bash
npm create vite@latest
```

#### Components

1. **Create Modal**: This component is responsible for creating a new note. It typically includes a form where users can input the details of the note they want to create.

2. **NoteList**: The NoteList component displays all the notes available. It lists down the titles of the notes along with a summary or preview of each note's content.

3. **SearchBar**: SearchBar allows users to filter notes based on specific keywords or phrases. It provides a text input field where users can type their search queries.

4. **NoteDetail**: NoteDetail provides a detailed view of a selected note. It displays the complete content of the note along with any additional details such as creation date, author, etc.

#### Starting the Application

1. **Start the Server**:

- Navigate to the server code directory.
- Install dependencies.

  ```bash
  npm install
  ```

- Start the server.
  ```bash
  npm start
  ```

2. **Start the Client**:

- Navigate to the client code directory.
- Install dependencies.
  ```bash
  npm install
  ```
- Start the development server.
  ```bash
  npm run dev
  ```

With these components and setup instructions, your Notes application will be ready to use.
