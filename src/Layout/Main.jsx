import React, { useEffect, useContext } from 'react';
import { Box } from '@mui/material';
import ShopList from '../Components/ShopList';
import CartIcon from '../Components/CartIcon';
import Preloader from '../Components/Preloader';
import OpenedCart from '../Components/CartList';
import Languages from '../Components/Languages';
import { ShopContext } from '../Context';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const { order, loading, language, setGoods, setLoading, handleLanguage } =
    useContext(ShopContext);

  const fetchGoods = (lang) => {
    setLoading(true);

    fetch(`https://fortniteapi.io/v2/shop?lang=${lang}`, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.shop) {
          setGoods(data.shop);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    fetchGoods(language);
  }, [language]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '80vw',
        m: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          px: 10,
          pt: 5,
        }}
      >
        <Languages onChange={handleLanguage} />
        <CartIcon quantity={order.length} />
        <OpenedCart />
      </Box>
      {loading ? <Preloader /> : <ShopList />}
    </Box>
  );
}

export default Main;
