import React from 'react';
import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';

import style from './CartBlock.module.css';


const CartBlock = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = items.reduce((acc, game) => acc += game.price, 0);
  return (
    <div className={style.cartBlock}>
      <BiCartAlt
        color="white"
        size={25}
        className={style.cartIcon}
        
      />
      <span className={style.totalPrice}>{ totalPrice } руб.</span>
    </div>
  );
};

export default CartBlock;
