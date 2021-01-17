import { NCContainer, NCContent, NCImg } from "./NomCard.styles";
import DeleteImg from './assets/delete.svg';
import { useDispatch } from "react-redux";
import { removeNomination } from '../../components/MovieCards/movieCards.slice';

const NomCard = (props) => {
    const dispatch = useDispatch()

    const { Title, Year } = props.nom
    return (
        <NCContainer>
            <NCContent>
                <h3>{Title}</h3>
                <p>{Year}</p>
            </NCContent>
            <NCImg
                onClick={() => {
                    dispatch(removeNomination(props.nom))
                }}
            >
                <img src={DeleteImg} alt="delete" />
            </NCImg>
        </NCContainer>
    )
}

export default NomCard;