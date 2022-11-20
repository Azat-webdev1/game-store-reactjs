import { createSlice } from '@reduxjs/toolkit';
import { fetchGameLists } from './gamesAsyncActions';


const Status = {
  LOADING: 'loading',
  SUCCESS: 'completed',
  ERROR: 'error'
}

const initialState = {
  games: [],
  status: Status.LOADING, // loading | success | error
  currentPage: 1
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setCurrentGame(state, action) {
      state.games = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
      } else {
        state.currentPage = 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGameLists.pending, (state) => {
      state.status = Status.LOADING;
      state.games = [];
    });

    builder.addCase(fetchGameLists.fulfilled, (state, action) => {
      state.games = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchGameLists.rejected, (state) => {
      state.status = Status.ERROR;
      state.games = [];
    });
  },
});

export const { setCurrentGame, setCurrentPage, setFilters } = gamesSlice.actions;
export default gamesSlice.reducer;