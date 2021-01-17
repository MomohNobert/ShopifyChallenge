import { BannerContainer } from './Banner.styles';
import { useSelector } from 'react-redux';

import BannerImg from './assets/trophy.svg';

const Banner = () => {
    const { currentSize } = useSelector(state => state.nominations);

    return (
        <BannerContainer
            complete={+currentSize === 5 ? 1 : 0}
        >
            <img src={BannerImg} alt="banner" />
            <span>{currentSize}</span>
        </BannerContainer>
    )
}

export default Banner;