import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { GameCover } from '../../components'
import { deleteItemFromCart } from '../../store/cart/cartReducer';

import style from './CartItem.module.css';


const CartItem = ({ title, price, id, image }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(id));
  };
  
  return (
    <div className={style.cartItem}>
      <GameCover image={image}/>
      <span className={style.cartItemTitle}>{title}</span>
      <div className={style.cartItemPrice}>
        <span>{price} руб.</span>
        <AiOutlineCloseCircle
          size={15}
          className={style.cartiItemDelete}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default CartItem;