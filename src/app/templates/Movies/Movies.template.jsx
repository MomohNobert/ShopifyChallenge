import { MoviesContainer } from "./Movies.styles";
import { useSelector } from 'react-redux';
import EmptyMovies from "../../components/EmptyMovie/emptyMovie.component";

const Movies = () => {
    const { loading, hasErrors, movies, searchValue } = useSelector(state => state.movies);
    console.log(loading, hasErrors, movies, searchValue);

    const currentComponent = () => {
        if (!searchValue) {
            return <EmptyMovies />
        } else {
            return null
        }
    }

    return (
        <MoviesContainer>
            {currentComponent()}
        </MoviesContainer>
    )
}

export default Movies;