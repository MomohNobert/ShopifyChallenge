import styled from 'styled-components'

export const SearchContainer = styled.div`
    height: 100%;
    width: 65%;
    border-right: 1px solid rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
`

export const SearchIconContainer = styled.label`
    height: 40px;
    width: 40px;
    position: absolute;
    border: 1px solid rgba(0,0,0,0.1);
    box-shadow: 0px 1px 3px rgba(0,0,0,0.1);
    border-radius: 50%;
    display: grid;
    place-items: center;
    left: 10%;
    cursor: pointer;
    transition: all 0.25s ease-out;

    img {
        height: 20px;
        width: 20px;
        opacity: 0.2;
        transition: all 0.5s ease-out;
    }

    &:hover {
        border: 1px solid lightblue;
        box-shadow: 0px 2px 5px lightblue;

        img {
            opacity: 0.6;
        }
    }
`