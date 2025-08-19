import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import ShopItem from './ShopItem';
import { ShopContext } from '../Context';

function ShopList() {
  const { goods } = useContext(ShopContext);
  return (
    <Grid
      container
      spacing={3}
      sx={{ flex: 1, px: 10, py: 5, justifyContent: 'center' }}
      alignItems="stretch"
    >
      {goods.map((item) => (
        <Grid size={{ xs: 10, sm: 8, md: 3 }} key={item.mainId}>
          <ShopItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ShopList;
