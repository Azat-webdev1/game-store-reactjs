/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameLists } from '../../store/games/gamesAsyncActions';
import { setCurrentGame, setCurrentPage } from '../../store/games/gamesReducer';

import {
  GameItem,
  InputItem,
  PaginationGames,
  SelectItem
} from '../../components';

import style from './Home.module.css';


const HomePage = () => {
  const dispatch = useDispatch();
  const games = useSelector(state => state.games.currentGame);
  const status = useSelector(state => state.games.status);
  const currentPage = useSelector(state => state.games.currentPage);

  const [searchValue, setSearchValue] = useState('');
  const [directionSort, setdirectionSort] = useState(true);

  const getGames = async () => {
    dispatch(
      fetchGameLists({
        currentPage: currentPage,
      })
    );
  };

  useEffect(() => {
    getGames();
  }, [currentPage]);

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };
  
  const sortGames = (field) => { 
    const copy = games.concat();
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
    dispatch(setCurrentGame(copySort));
    setdirectionSort(!directionSort);
  };
  
  const handlerChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const gamesLists = games.filter((item) => item.title.toLowerCase()
      .includes(searchValue.toLowerCase()))
    .map((game) =>
      <GameItem
        key={game.id}
        game={game}
        title={game.title}
        genres={game.genres}
        {...game} 
      />);
  const skeletons = 'Пусто';

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
        {status === 'error' ? (
          <div className="error-info">
            <h2>Произошла ошибка 😕</h2>
            <p>К сожалению, не удалось получить игры.
              Попробуйте повторить попытку позже.
            </p>
          </div>
          ) : ( status === 'loading' ? skeletons : gamesLists )
        }
      </div>
      <PaginationGames
        currentPage={currentPage}
        onChangePage={handlerChange}
      />
    </>
  );
};

export default HomePage;
