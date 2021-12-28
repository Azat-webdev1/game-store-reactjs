import React from 'react';

import style from './GameGenre.module.css';


const GameGenre = ({ genre = '' }) => {
  return <span className={style.gameGenre}>{genre}</span>
};

export default GameGenre;