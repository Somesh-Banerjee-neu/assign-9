import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesList from "./components/NoteList"; // Adjust the path according to your structure
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  palette: {
    primary: {
      main: "#3498db",
    },
    secondary: {
      main: "#2c3e50",
    },
    background: {
      default: "#ecf0f1",
      paper: "#fafca2",
    },
  },
  transitions: {
    duration: {
      standard: 300, // 0.3s
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1200px", // For large breakpoints
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#fafca2", // Note background color
          transition: "transform 0.3s", // Transition speed
          "&:hover": {
            transform: "scale(1.03)", // Slight scale on hover
          },
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<NotesList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
