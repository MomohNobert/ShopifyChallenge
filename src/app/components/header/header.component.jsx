import Logo from "../../molecules/Logo/Logo.molecule";
import Search from "../../molecules/Search/search.molecule";
import { HeaderContainer } from "./header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Search />
        </HeaderContainer>
    )
}

export default Header;