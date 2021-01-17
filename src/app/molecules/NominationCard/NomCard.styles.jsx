import styled from 'styled-components'

export const NCContainer = styled.div`
    height: 50px;
    width: 100%;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 5px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    padding: 10px;
    margin-bottom: 10px;
    transition: all 0.25s linear;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 1px 3px 5px rgba(0,0,0,0.2);  
    }
`

export const NCContent = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const NCImg = styled.div`
    height: 80%;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.25s linear;

    img {
        height: 15px;
        width: 15px;
        opacity: 0.75;
        transition: all 0.25s linear;
    }

    &:hover {
        img {
            opacity: 1;
        }
    }
`