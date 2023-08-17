import React, { useState } from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import { Select, MenuItem } from '@mui/material';

export default function Searchbar() {
  const [selectedOption, setSelectedOption] = useState('Tutti');
  const [inputRicerca, setinputRicerca] = useState(''); // Initialize as an empty string

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setinputRicerca(event.target.value); // Update inputRicerca state
  };

  const handleSearch = () => {
    console.log(inputRicerca +" "+ selectedOption);
    // You can add more search-related logic here
  };

  return (
    <div className='container'>
      <div className="partesinistras">
        <div className="centered-content">
          <Select className="custom-select" value={selectedOption} onChange={handleOptionChange}>
            <MenuItem value="Tutti"> Tutti </MenuItem>
            <MenuItem value="Software"> Software</MenuItem>
            <MenuItem value="Elettronica"> Elettronica</MenuItem>
            <MenuItem value="Meccanica"> Meccanica</MenuItem>
          </Select>
        </div>
      </div>
      <div className="partecentrales">
        <input onChange={handleInputChange} className='inputcentrale' type="text" />
      </div>
      <div className="partedestras">
        <button onClick={handleSearch} className='transparent-button'>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
