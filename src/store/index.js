import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './Cart/CartReducer';


export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});