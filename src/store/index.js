import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../app/components/Search/search.slice';

export default configureStore({
  reducer: {
    movies: moviesReducer
  },
});