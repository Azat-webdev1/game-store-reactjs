import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';


export const fetchGameLists = createAsyncThunk(
  'game/fetchGameListsStatus',
  async (params) => {
    const { currentPage } = params;
    const { data } = await axios.get(`${process.env.PUBLIC_URL}/gameLists`, {
      params: pickBy(
        {
          page: currentPage,
          limit: 6,
        },
        identity,
      ),
    });
    return data;
  },
);