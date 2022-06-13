import React from 'react';
import Pagination  from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const PaginationGames = ({onChangePage, currentPage}) => {
  return (
    <>
    <Stack spacing={2}>
      <Pagination
        onChange={(e) => onChangePage(e.target.textContent)}
        page={currentPage}
        count={3}
        defaultPage={1}
        color='primary'
        variant="outlined"
          sx={{
          margin: '20px 0 30px 0',
          '@media (max-width: 992px)': {
            marginLeft: '68px'
          },
          '@media (max-width: 768px)': {
            marginLeft: '0px'
          },
          '@media (max-width: 576px)': {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px'
          },
          'svg, button': {
            color: '#fff',
            borderColor: '#fff'
          }
          }}
      />
    </Stack>
    </>
  );
};

export default PaginationGames;