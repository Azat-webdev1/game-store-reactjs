import React from 'react';

import { GameBuy } from '../../components';
import { GameGenre } from '../../components';

import style from './GameItem.module.css';


const GameItem = ({game, image, title}) => {
  
  return (
    <div className={style.gameItem}>
      <img className={style.gameImg} src={image} alt="game" />
      <div className={style.gameItemDetails}>
      <span className={style.gameItemTitle}>{title}</span>
        <div className={style.gameItemGenre}>
          {game.genres.map((genre, index) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className={style.gameItemBuy}>
          <GameBuy
            game={game} 
          />
        </div>
      </div>
    </div>
  );
};

export default GameItem;
