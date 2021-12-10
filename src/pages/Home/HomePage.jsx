import React, {useState, useEffect} from 'react';
import axios from 'axios';

import { GameItem } from '../../components';
import style from './Home.module.css';


const HomePage = () => {
  const [gameLists, setGameLists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3004/gameLists')
      .then(({ data }) => {
        setGameLists(data);
      });
    
  }, []);
  
  return (
    <div className={style.home}>
      {
        gameLists.map((game) =>
          <GameItem
            key={game.id}
            game={game}
            {...game}
          />
          )
      }
    </div>
  );
};

export default HomePage;
