import styled from 'styled-components';

export const EMContainer = styled.div`
    min-height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
        font-family: 'Merriweather', serif;
        padding: 10px;
        text-decoration: underline;
    }

    img {
        height: 200px;
        padding: 10px
    }

    p {
        width: 75%;
        padding: 10px;
        font-size: 20px;
    }
`