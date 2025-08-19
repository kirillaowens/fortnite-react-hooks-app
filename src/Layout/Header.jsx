import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography
          variant="h6"
          href="#app"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Fortnite Shop App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
