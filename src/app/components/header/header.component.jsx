import Logo from "../../molecules/Logo/Logo.molecule";
import Banner from "../Banner/Banner.component";
import Search from "../Search/search.component";
import { HeaderContainer } from "./header.styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <Search />
            <Banner />
        </HeaderContainer>
    )
}

export default Header;