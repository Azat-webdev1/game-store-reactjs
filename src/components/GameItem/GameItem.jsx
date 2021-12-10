import React from 'react';

import { GameBuy } from '../../components';

import style from './GameItem.module.css';


const GameItem = ({game, image}) => {

  return (
    <div className={style.gameItem}>
      <img className={style.gameImg} src={image} alt="game" />
      <div className={style.gameItemDetails}>
      <span className={style.gameItemTitle}>{game.title}</span>
        <div className={style.gameItemGenre}>
          {game.genres.map((genre = '') => (
            <span className={style.gameGenre}>{genre}</span> 
          ))}
        </div>
        <div className={style.gameItemBuy}>
          <span className={style.gameBuyPrice}>{game.price} руб.</span>
          <GameBuy game={game}/>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
