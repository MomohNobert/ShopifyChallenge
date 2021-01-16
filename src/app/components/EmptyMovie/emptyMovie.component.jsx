import { EMContainer } from "./emptyMovie.styles";
import HintImg from './assets/lightbulb.svg';

const EmptyMovies = () => {
    return (
        <EMContainer>
            <h1>HINT!</h1>
            <img src={HintImg} alt="hint" />
            <p>Type into the search bar above to find the movies you want to nominate.</p>
        </EMContainer>
    )
}

export default EmptyMovies;