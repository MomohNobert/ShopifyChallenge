import LogoImg from './assets/popcorn.svg'
import { LogoContainer } from './Logo.styles';

const Logo = () => {
    return (
        <LogoContainer>
            <img src={LogoImg} alt="logo" />
            <h1>The Shoppies</h1>
        </LogoContainer>
    )
}

export default Logo;