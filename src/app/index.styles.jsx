import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        border: 0;
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        outline: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        background-color: white;
        font-family: 'Open Sans Condensed', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 7.5px;
    }

    ::-webkit-scrollbar-track {
        background: black;
    }

    ::-webkit-scrollbar-thumb {
        background: white;
        border-radius: 5%;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #8a8aa8;
    }
`

export const ContentContainer = styled.div`
    margin-top: 12.5vh;
    min-height: 87.5vh;
    background-color: rgba(0,0,0,0.05);
`;