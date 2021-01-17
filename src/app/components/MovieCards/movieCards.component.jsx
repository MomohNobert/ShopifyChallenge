import { useDispatch, useSelector } from 'react-redux';
import MovieCard from "../../molecules/MovieCard/movieCard.molecule";
import { nominationsSelector, addNomination } from './movieCards.slice'
import { MCContainer, MCsContainer } from "./movieCards.styles";

const MovieCards = ({ searchValue, movies }) => {
    const dispatch =  useDispatch();
    const { currentNominations, currentSize } = useSelector(nominationsSelector);

    const disabledChecker = value => {
        let result = false
        if (currentSize >= 5) {
            return result = true 
        } 
        currentNominations.map(({ imdbID }) => {
            if (imdbID === value) {
                return result = true
            }
            return result
        })
        return result
    }


    const clickHandler = value => {
        dispatch(addNomination(value))
    }

    return (
        <MCContainer>
            <h1>Showing results for "{searchValue}"</h1>
            <MCsContainer>
                {
                    movies.map(movie => {
                        return (
                        <MovieCard 
                            key={movie.imdbID} 
                            movie={movie} 
                            clickHandler={clickHandler}
                            disabled={disabledChecker(movie.imdbID)}
                        />
                    )})
                }
            </MCsContainer>
        </MCContainer>
    )
}

export default MovieCards;