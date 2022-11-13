import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const SelectItem = ({sortGames}) => {
  const [label, setLabel] = React.useState('');

  const handleChange = (e) => {
    setLabel(e.target.value);
  };

  return (
    <div>
      <FormControl
        size="small"
        sx={{
          minWidth: '200px',
          '@media (max-width: 576px)': {
            minWidth: '320px',
          },
          '@media (max-width: 375px)': {
            minWidth: '295px',
          },
        }}
      >
        <InputLabel id="demo-simple-select-helper-label">сортировка</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={label}
          label="сортировка"
          onChange={handleChange}

          sx={{
            backgroundColor: '#fff',
            borderRadius: 5,
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem
            value={10}
            onClick={()=> {sortGames('title')}}
          >
            название
          </MenuItem>
          <MenuItem
            value={20}
            onClick={()=> {sortGames('price')}}
          >
            цена
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectItem;
