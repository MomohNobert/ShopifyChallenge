import { useSelector } from "react-redux";
import EmptyNom from "../../components/EmptyNominations/emptyNom.component";
import NomCards from "../../components/NominationsCards/NomCards.component";
import { NomContainer } from "./Nominations.styles"

const Nominations = () => {
    const { currentNominations, currentSize } = useSelector(state => state.nominations);

    const currentComponent = () => {
        if (currentSize <= 0) {
            return <EmptyNom />
        } else {
            return <NomCards currentNominations={currentNominations} currentSize={currentSize} />
        }
    }

    return (
        <NomContainer>
            {currentComponent()}
        </NomContainer>
    )
}

export default Nominations;