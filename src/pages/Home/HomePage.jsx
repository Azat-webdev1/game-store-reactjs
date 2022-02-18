import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
  GameItem,
  InputItem,
  SelectItem
} from '../../components';

import style from './Home.module.css';


const HomePage = () => {
  const [gameLists, setGameLists] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [directionSort, setdirectionSort] = useState(true);
  
  useEffect(() => {
    const fetchGameLists = async () => {
      const res = await axios.get(`http://localhost:3004/gameLists`, {
        params: {
          _limit: 6,
          _page: 1
        }
      });
      setGameLists(res.data);
      
    };
    fetchGameLists();
  }, []);
  
  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  
  const sortGames = (field) => { 
    const copy = gameLists.concat();
    let copySort;
    if (directionSort) {
      copySort = copy.sort(
        (a, b) => { return a[field] > b[field] ? 1 : -1 }
      );
    } else {
      copySort = copy.sort(
        (a, b) => { return a[field] < b[field] ? 1 : -1 }
      );
    }
    setGameLists(copySort);
    setdirectionSort(!directionSort);
  };

  return (
    <>
      <div className={style.filterSort}>
        <InputItem
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
        />
        <SelectItem
          sortGames={sortGames}
        />
      </div>
      <div className={style.home}>
        {
          gameLists
            .filter((item) => item.title.toLowerCase()
            .includes(searchValue.toLowerCase()))
            .map((game) =>
            <GameItem
              key={game.id}
              game={game}
              title={game.title}
              genres={game.genres}
              {...game}
            />
          )
        }
      </div>
    </>
  );
};

export default HomePage;
