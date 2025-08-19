import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Preloader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        minHeight: '400px',
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Preloader;
