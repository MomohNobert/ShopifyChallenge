import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../app/components/Search/search.slice';
import nominationsReducer from '../app/components/MovieCards/movieCards.slice';

export default configureStore({
  reducer: {
    movies: moviesReducer,
    nominations: nominationsReducer
  },
});