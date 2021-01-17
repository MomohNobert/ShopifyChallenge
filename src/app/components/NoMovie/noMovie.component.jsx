import { NMContainer } from "./noMovie.styles";
import EmptyImg from './assets/box.svg';

const NoMovie = ({ searchValue }) => {
    return (
        <NMContainer>
            <h1>Sorry, No results found for "{searchValue}"!</h1>
            <img src={EmptyImg} alt="empty" />
        </NMContainer>
    )
}

export default NoMovie;