import React from 'react';
import { useSelector} from 'react-redux';

import { OrderItem } from '../../components';
import { calcTotalPrice, enumerate } from '../../components/utils';

import style from './OrderPage.module.css';


const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Ваша корзина пуста!</h1>
  }

  return (
    <div className={style.orderPage}>
      <div className={style.orderPageLeft}>
        {items.map(game => <OrderItem game={game} key={game.id} />)}
      </div>
      <div className={style.orderPageRight}>
        <div className="order-page__total-price">
          <span>{items.length}
            {enumerate(items.length,  [' товар', ' товара', ' товаров'])}<br/>
            на сумму {calcTotalPrice(items)} руб.
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
