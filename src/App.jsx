import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Main from './Layout/Main';
import Context from './Context';

function App() {
  return (
    <Context>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </Box>
    </Context>
  );
}

export default App;
