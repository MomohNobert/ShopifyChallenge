import { MoviesContainer } from "./Movies.styles";
import { useSelector } from 'react-redux';

const Movies = () => {
    const { loading, hasErrors, movies, searchValue } = useSelector(state => state.movies);
    console.log(loading, hasErrors, movies, searchValue);

    return (
        <MoviesContainer>
            Movies
        </MoviesContainer>
    )
}

export default Movies;