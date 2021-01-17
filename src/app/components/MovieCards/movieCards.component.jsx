import MovieCard from "../../molecules/MovieCard/movieCard.molecule";
import { MCContainer, MCsContainer } from "./movieCards.styles";

const MovieCards = ({ searchValue, movies }) => {
    return (
        <MCContainer>
            <h1>Showing results for "{searchValue}"</h1>
            <MCsContainer>
                {
                    movies.map(movie => (
                        <MovieCard 
                            key={movie.imdbID} 
                            movie={movie} 
                        />
                    ))
                }
            </MCsContainer>
        </MCContainer>
    )
}

export default MovieCards;