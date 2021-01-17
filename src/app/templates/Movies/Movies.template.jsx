import { MoviesContainer } from "./Movies.styles";
import { useSelector } from 'react-redux';
import { moviesSelector } from "../../components/Search/search.slice";

import EmptyMovies from "../../components/EmptyMovie/emptyMovie.component";
import Loader from '../../components/Loader/loader.component';
import MovieCards from "../../components/MovieCards/movieCards.component";
import NoMovie from "../../components/NoMovie/noMovie.component";
import ErrorMovie from "../../components/ErrorMovie/errorMovie.component";


const Movies = () => {
    const { loading, hasErrors, movies, searchValue } = useSelector(moviesSelector);

    const currentComponent = () => {
        if (!searchValue) {
            return <EmptyMovies />
        } else if (loading) {
            return <Loader />
        } else if (typeof movies === "undefined") {
            return <NoMovie searchValue={searchValue} />
        } else if (movies.length > 0) {
            return <MovieCards searchValue={searchValue} movies={movies} />
        } else if (hasErrors) {
            return <ErrorMovie />
        }
    }

    return (
        <MoviesContainer>
            {currentComponent()}
        </MoviesContainer>
    )
}

export default Movies;