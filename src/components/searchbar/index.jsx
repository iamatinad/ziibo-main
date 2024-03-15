import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from 'react';
import SearchResults from "../../pages/searchpage";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const API_KEY = 'ce84f9a1e267020ce2e0b6973f4fcbbc';
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const handleSearch = async () => {
    try {
      const response = await fetch(API_URL + query);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className='search'>
      <TextField
        type="text"
        placeholder="Search for a movie..."
        value={query}
        
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleSearch} style={{ cursor: 'pointer' }}>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      {searchResults && <SearchResults searchResults={searchResults} />}
    </div>
  );
};

export default Search;
