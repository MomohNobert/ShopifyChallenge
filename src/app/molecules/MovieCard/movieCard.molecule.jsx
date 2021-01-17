import { MCButton, MCContainer, MCContent, MCImg } from "./movieCard.styles";

const MovieCard = ({ movie }) => {
    const { Title, Poster, Year } = movie
    return (
        <MCContainer>
            <MCImg>
                <img src={Poster} alt={Title} />
            </MCImg>
            <MCContent>
                <h2>{Title}</h2>
                <p>Year of Release: {Year}</p>
            </MCContent>
            <MCButton>
                Nominate
            </MCButton>
        </MCContainer>
    )
}

export default MovieCard;