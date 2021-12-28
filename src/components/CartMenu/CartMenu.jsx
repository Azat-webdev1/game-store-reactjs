import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from '../../components';
import { CartItem } from '../../components';
import { calcTotalPrice } from '../utils';

import style from './CartMenu.module.css';


const CartMenu = ({ onClick }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  
  return (
    <div className={style.cartMenu}>
      <div className="cart-menu__games-list">
        {items.length > 0
          ? items.map((game) => (
              <CartItem
                key={game.image}
                image={game.image}
                price={game.price}
                title={game.title}
                id={game.id}
              />
          
            ))
          : "Корзина пуста"}
          
      </div>
      {items.length > 0 ? (
        <div className={style.cartMenuArrange}>
          <div className={style.cartMenuTotalPrice}>
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} руб.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;