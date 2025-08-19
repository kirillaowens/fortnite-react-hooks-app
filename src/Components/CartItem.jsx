import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItem({ item, handlePlus, handleMinus, removeOutOfCart }) {
  return (
    <Box
      key={item.mainId}
      sx={{
        border: '1px solid #ccc',
        borderRadius: 1,
        p: 1,
        mb: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography>{item.displayName}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={() => handleMinus(item)}>-</Button>
        <Typography>{item.quantity}</Typography>
        <Button onClick={() => handlePlus(item)}>+</Button>
      </Box>
      <Typography>{`${item.price.regularPrice * item.quantity} V-bucks`}</Typography>
      <IconButton onClick={() => removeOutOfCart(item)}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
}

export default CartItem;
