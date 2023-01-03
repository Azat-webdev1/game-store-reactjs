import { configureStore } from '@reduxjs/toolkit';

import gamesReducer from './games/gamesReducer.js';
import cartReducer from './cart/cartReducer.js';


export const store = configureStore({
  reducer: {
    games: gamesReducer,
    cart: cartReducer
  }
});