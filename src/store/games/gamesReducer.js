import { createSlice } from '@reduxjs/toolkit';
import { fetchGameLists } from './gamesAsyncActions';


const Status = {
  LOADING : 'loading',
  SUCCESS : 'completed',
  ERROR : 'error',
}

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    currentGame: [],
    status: Status.LOADING,
    currentPage: 1,
  },
  reducers: {
    setCurrentGame(state, action) {
      state.currentGame = action.payload
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
      state.currentGame = [];
    });

    builder.addCase(fetchGameLists.fulfilled, (state, action) => {
      state.currentGame = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchGameLists.rejected, (state) => {
      state.status = Status.ERROR;
      state.currentGame = [];
    });
  },
});

export const { setCurrentGame, setCurrentPage, setFilters } = gamesSlice.actions;
export default gamesSlice.reducer;