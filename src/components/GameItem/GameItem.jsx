import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GameBuy } from '../../components';
import { GameGenre } from '../../components';
import { setCurrentGame } from "../../store/games/gamesReducer";
import { GameCover } from '../../components';

import style from './GameItem.module.css';


const GameItem = ({game, title}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };
  
  return (
    <div className={style.gameItem} onClick={handleClick}>
      <GameCover image={game.image}/>
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
