import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Shop from '../Components/ShopList';
import Cart from '../Components/CartIcon';
import Preloader from '../Components/Preloader';
import OpenedCart from '../Components/CartList';
import Languages from '../Components/Languages';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [order, setOrder] = useState([]);
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleToggle = () => setOpen(!open);

  const handleMinus = (item) => {
    setOrder((prev) =>
      prev
        .map((orderItem) =>
          orderItem.mainId === item.mainId
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem,
        )
        .filter((orderItem) => orderItem.quantity > 0),
    );
  };

  const handlePlus = (item) => {
    setOrder((prev) =>
      prev.map((orderItem) =>
        orderItem.mainId === item.mainId
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem,
      ),
    );
  };

  const removeOutOfCart = (item) => {
    setOrder((prev) =>
      prev.filter((orderItem) => orderItem.mainId !== item.mainId),
    );
  };

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

  const handleLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    fetchGoods(newLanguage);
  };

  const addToCart = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId,
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder((prev) => [...prev, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        }
        return orderItem;
      });
      setOrder(newOrder);
    }
  };

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
        <Cart quantity={order.length} handleToggle={handleToggle} />
        <OpenedCart
          open={open}
          handleToggle={handleToggle}
          order={order}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
          removeOutOfCart={removeOutOfCart}
        />
      </Box>
      {loading ? (
        <Preloader />
      ) : (
        <Shop
          goods={goods}
          addToCart={addToCart}
          order={order}
          handleMinus={handleMinus}
          handlePlus={handlePlus}
        />
      )}
    </Box>
  );
}

export default Main;
