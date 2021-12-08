import React from "react";
import { Link } from "react-router-dom";
import cn from 'classnames';

import style from "./Header.modul.css";


const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        <Link to="/" className={style.headerStoreTitle}>
          Game Store
        </Link>
      </div>
      <div className={cn( style.wrapper, style.headerCartBtnWrapper)}>
      
      </div>
    </div>
  );
};

export default Header;