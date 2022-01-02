import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from "react-icons/ai";

import { GameCover } from '../../components';
import { deleteItemFromCart } from '../../store/cart/cartReducer';

import style from './OrderItem.module.css';


const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  
  const handleDeleteClick = () => {
    dispatch(deleteItemFromCart(game.id))
  }
    
  return (
    <div className={style.orderItem}>
      <div className={style.orderCover}>
        <GameCover image={game.image} alt={game.image}/>
      </div>
      <div className={style.orderTitle}>
        <span> {game.title} </span>
      </div>
      <div className={style.orderPrice}>
        <span>{game.price} руб.</span>
        <AiOutlineCloseCircle
          size={25}
          className="cart-item__delete-icon"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default OrderItem;
