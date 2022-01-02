import React, { useState, useCallback }  from 'react';
import { useSelector } from 'react-redux';
import { BiCartAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { calcTotalPrice } from '../utils';
import { CartMenu } from '../../components';

import style from './CartBlock.module.css';


const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  
  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate]);
  
  return (
    <div className={style.cartBlock}>
      {
        items.length > 0 ? (
          <div className={style.itemsInCart}>
            { items.length }
          </div>
        ) : null
      }
      <BiCartAlt
        color="white"
        size={25}
        className={style.cartIcon}
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className={style.totalPrice}>{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu onClick={handleGoToOrderClick}/>}
    </div>
  );
};

export default CartBlock;
