import React from 'react';

import style from './GameCover.module.css';

const GameCover = ({image = ''}) => {
  return (
    <div
      className={style.gameCover}
      style={{ backgroundImage: `url(${image})` }}
    >
    </div>
  );
};

export default GameCover;
