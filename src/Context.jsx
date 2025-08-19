import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

export const ShopContext = createContext(null);

export const initialState = {
  order: [],
  goods: [],
  loading: true,
  open: false,
  language: 'en',
};

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    ...state,
    handleToggle: () => dispatch({ type: 'TOGGLE' }),
    handleMinus: (item) => dispatch({ type: 'MINUS', payload: item }),
    handlePlus: (item) => dispatch({ type: 'PLUS', payload: item }),
    addToCart: (item) => dispatch({ type: 'ADD', payload: item }),
    removeOutOfCart: (item) => dispatch({ type: 'REMOVE', payload: item }),
    handleLanguage: (lang) => dispatch({ type: 'LANGUAGE', payload: lang }),
    setGoods: (goods) => dispatch({ type: 'SET_GOODS', payload: goods }),
    setLoading: (loading) =>
      dispatch({ type: 'SET_LOADING', payload: loading }),
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export default Context;
