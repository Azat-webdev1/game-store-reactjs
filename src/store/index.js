import { configureStore } from '@reduxjs/toolkit';

import gamesReducer from './games/gamesReducer';
import cartReducer from './cart/cartReducer';


export const store = configureStore({
  reducer: {
    games: gamesReducer,
    cart: cartReducer
  }
});