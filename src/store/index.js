import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import moviesReducer from '../app/components/Search/search.slice';
import nominationsReducer from '../app/components/MovieCards/movieCards.slice';

const reducer = combineReducers({
  movies: moviesReducer,
  nominations: nominationsReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});