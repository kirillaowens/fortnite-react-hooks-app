import React from 'react';
import { Grid } from '@mui/material';
import ShopItem from './ShopItem';

function Shop({ goods, addToCart, order, handlePlus, handleMinus }) {
  return (
    <Grid
      container
      spacing={3}
      sx={{ flex: 1, px: 10, py: 5, justifyContent: 'center' }}
      alignItems="stretch"
    >
      {goods.map((item) => (
        <Grid size={{ xs: 10, sm: 8, md: 3 }} key={item.mainId}>
          <ShopItem
            item={item}
            addToCart={addToCart}
            order={order}
            handlePlus={handlePlus}
            handleMinus={handleMinus}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Shop;
