import React, { useContext } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ShopContext } from '../Context';

function ShopItem({ item }) {
  const { addToCart, order, handleMinus, handlePlus } = useContext(ShopContext);
  const imageUrl =
    item.displayAssets[0].background ||
    'https://dummyimage.com/200x200/ffffff/000000.png&text=No+Image';

  const cartItem = order.find((orderItem) => orderItem.mainId === item.mainId);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}
    >
      <CardMedia
        component="img"
        image={imageUrl}
        alt={item.name}
        sx={{ height: 200, objectFit: 'contain' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ pb: 1 }}>
          {item.displayName}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">{item.displayType}</Typography>
          <Typography variant="body2">{`${item.price.regularPrice} V-Bucks`}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        {!cartItem ? (
          <Button
            size="small"
            variant="contained"
            onClick={() => addToCart(item)}
            sx={{ bgcolor: '#3ca63c' }}
          >
            Add to cart
          </Button>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              disableRipple
              size="small"
              sx={{ color: '#3ca63c' }}
              onClick={() => handleMinus(item)}
            >
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ mx: 1 }}>{quantity}</Typography>
            <IconButton
              disableRipple
              size="small"
              sx={{ color: '#3ca63c' }}
              onClick={() => handlePlus(item)}
            >
              <AddIcon />
            </IconButton>
          </Box>
        )}
      </CardActions>
    </Card>
  );
}

export default ShopItem;
