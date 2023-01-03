import React from 'react';
import { useSelector } from 'react-redux';

import { GameBuy } from '../../components';
import { GameCover } from '../../components';
import { GameGenre } from '../../components';

import style from './GamePage.module.css';


const GamePage = () => {
  const game = useSelector(state => state.games.currentGame);

  if (!game) return null;

  return (
    <div className="game-page">
      <h1 className="game-page__title">{ game.title }</h1>
      <div className={style.gamePageContent}>
        <div className={style.gamePageLeft}>
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className={style.gamePageRight}>
          <GameCover image={game.image} alt={game.image}/>
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className={style.gamePageBtn}>
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;