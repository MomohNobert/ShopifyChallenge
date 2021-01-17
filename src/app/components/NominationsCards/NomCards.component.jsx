import NomCard from "../../molecules/NominationCard/NomCard.component";
import { NCHolder, NCsContainer } from "./NomCards.styles"

const NomCards = ({ currentNominations, currentSize }) => {
    return (
        <NCsContainer>
            <h1>{currentSize === 5 ? "Nominations Complete": "Current Nominations"}</h1>
            <NCHolder>
                {
                    currentNominations.map(nom => (
                        <NomCard nom={nom} key={nom.imdbID} />
                    ))
                }
            </NCHolder>
        </NCsContainer>
    )
}

export default NomCards;