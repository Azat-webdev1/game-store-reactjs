import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import style from './Header.module.css';
import CartBlock from '../CartBlock/CartBlock';


const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <Link to="/" className={style.headerStoreTitle}>
          Game Store
        </Link>
      </div>
      <div className={cn( style.wrapper, style.headerCartBtnWrapper)}>
        <CartBlock/>
      </div>
    </div>
  );
};

export default Header;