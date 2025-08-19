import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, IconButton, Badge } from '@mui/material';
import { ShopContext } from '../Context';

function CartIcon({ quantity = 0 }) {
  const { handleToggle } = useContext(ShopContext);
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

export default CartIcon;
