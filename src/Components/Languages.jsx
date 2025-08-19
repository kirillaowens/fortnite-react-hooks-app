import React, { useContext } from 'react';
import { Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ShopContext } from '../Context';

function Languages({ value }) {
  const { handleLanguage } = useContext(ShopContext);

  return (
    <Box>
      <FormControl variant="standard" sx={{ minWidth: 100 }}>
        <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Filters"
          value={value}
          onChange={(e) => handleLanguage(e.target.value)}
        >
          <MenuItem value="en">
            <em>English</em>
          </MenuItem>
          <MenuItem value="ru">Русский</MenuItem>
          <MenuItem value="de">Deutsch</MenuItem>
          <MenuItem value="it">Italiano</MenuItem>
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="fr">Français</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Languages;
