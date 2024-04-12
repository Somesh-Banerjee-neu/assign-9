import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      <TextField
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search notes"
        onKeyPress={handleSearch}
      />
      <IconButton onClick={() => onSearch(searchTerm)}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
