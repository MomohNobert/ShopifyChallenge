import { createSlice } from '@reduxjs/toolkit';
import { FETCH_URL } from '../../../constants';

export const initialState = {
    loading: false,
    hasErrors: false,
    movies: [],
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMovies: (state) => {
            state.loading = true
        },
        getMoviesSuccess: (state, { payload }) => {
            state.movies = payload?.Search
            state.loading = false
            state.hasErrors = false
        },
        getMoviesFailure: (state) => {
            state.loading = false
            state.hasErrors = true
        },
    }
})

export function fetchMovies(searchTerm) {
    return async dispatch => {
        dispatch(getMovies)
        console.log(searchTerm)

        try {
            const response = await fetch(FETCH_URL + `s=${searchTerm}`)
            const data = await response.json()

            dispatch(getMoviesSuccess(data))
        } catch (error) {
            dispatch(getMoviesFailure())
        }
    }
}

export const { getMovies, getMoviesSuccess, getMoviesFailure } = moviesSlice.actions
export const moviesSelector = state => state.movies
export default moviesSlice.reducer


