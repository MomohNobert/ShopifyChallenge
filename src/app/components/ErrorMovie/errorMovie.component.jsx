import { EMContainer } from "./errorMovie.styles";
import ErrorImg from './assets/warning.svg';

const ErrorMovies = () => {
    return (
        <EMContainer>
            <h1>An error occured!</h1>
            <img src={ErrorImg} alt="warning" />
            <p>Sorry, please try again later.</p>
        </EMContainer>
    )
}

export default ErrorMovies;