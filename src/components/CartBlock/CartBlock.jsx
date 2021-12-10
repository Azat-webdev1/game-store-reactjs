import React from 'react';
import { BiCartAlt } from 'react-icons/bi';

import style from './CartBlock.module.css';


const CartBlock = () => {
  return (
    <div className={style.cartBlock}>
      <BiCartAlt
        color="white"
        size={25}
        className={style.cartIcon}
        
      />
      <span className={style.totalPrice}>2300 руб.</span>
    </div>
  );
};

export default CartBlock;
