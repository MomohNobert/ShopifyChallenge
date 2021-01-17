import NomCard from "../../molecules/NominationCard/NomCard.component";
import { NCHolder, NCsContainer } from "./NomCards.styles"

const NomCards = ({ currentNominations}) => {
    return (
        <NCsContainer>
            <h1>Current Nominations</h1>
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