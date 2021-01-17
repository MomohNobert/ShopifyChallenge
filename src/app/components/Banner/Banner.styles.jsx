import styled from 'styled-components';

export const BannerContainer = styled.div`
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.25s ease-in;

    img {
        height: 50%;
        opacity: ${({complete}) => complete ? 1 : 0.5 };
    }

    h3 {
        position: absolute;
        top: 27.5%;
    }
`;