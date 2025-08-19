import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import CartItem from './CartItem';

function OpenedCart({
  open,
  handleToggle,
  order,
  handlePlus,
  handleMinus,
  removeOutOfCart,
}) {
  return (
    <Modal
      open={open}
      onClose={handleToggle}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40vw',
          maxHeight: '70vh',
          overflowY: 'auto',
          bgcolor: 'white',
          borderRadius: 3,
          boxShadow: 24,
          px: 2,
          pt: 2,
          pb: 4,
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ mb: 2 }}
        >
          Cart
        </Typography>
        {order.length === 0 ? (
          <Typography variant="body2">Your cart is empty</Typography>
        ) : (
          order.map((item) => (
            <CartItem
              item={item}
              handlePlus={handlePlus}
              handleMinus={handleMinus}
              removeOutOfCart={removeOutOfCart}
            />
          ))
        )}
      </Box>
    </Modal>
  );
}

export default OpenedCart;
