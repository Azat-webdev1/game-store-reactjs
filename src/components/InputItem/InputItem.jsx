import React from 'react';
import TextField from '@mui/material/TextField';


const InputItem = ({searchValue, onChangeSearchInput}) => {
  
  return (
    <div>
      <TextField
        size="small"
        onChange={onChangeSearchInput}
        value={searchValue}
        label="Фильтр"
        sx={{
          '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '60px',
          }, 
          backgroundColor: '#fff',
          borderRadius: '60px',
          minWidth: '200px',

          '@media (max-width: 576px)': {
            minWidth: '320px',
          },
          '@media (max-width: 375px)': {
            minWidth: '295px',
          },
        }}
        />
    </div>
  );
};

export default InputItem;
