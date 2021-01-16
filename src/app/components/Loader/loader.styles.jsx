import styled from 'styled-components';

export const LoaderOverlay = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
`;

export const LoaderContainer = styled.div`
    width: 30px;
    height: 30px;
    border: 3px solid rgba(0, 128, 0, 0.2);
    border-radius: 50%;
    border-top-color: rgb(0, 128, 0);
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to {
        -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
        -webkit-transform: rotate(360deg);
        }
    }
`;