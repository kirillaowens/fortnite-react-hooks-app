import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, IconButton, Badge } from '@mui/material';

function Cart({ quantity = 0, handleToggle }) {
  return (
    <Box>
      <IconButton disableRipple onClick={handleToggle}>
        <Badge badgeContent={quantity} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Box>
  );
}

export default Cart;
