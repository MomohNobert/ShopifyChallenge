import styled from 'styled-components';

export const MCContainer = styled.div`
    height: 100px;
    width: calc(100% - 10px);
    margin-bottom: 10px;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 5px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 0.25s linear;

    &:hover {
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 1px 3px 5px rgba(0,0,0,0.2);   
    }
`

export const MCImg = styled.div`
    height: 90%;

    img {
        height: 100%;
    }
`

export const MCContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

export const MCButton = styled.button`
    align-self: flex-end;
    height: 40px;
    width: 100px;
    position: absolute;
    top: calc(50% - 20px);
    right: 30px;
    border-radius: 5px;
    font-size: 15px;
    cursor: ${({disabled}) => disabled  ? "no-drop" : "pointer"};
    border: ${({disabled}) => disabled  ? "1px solid grey" : "1px solid black"};
    color: ${({disabled}) => disabled  ? "white" : "black"};
    background-color: ${({disabled}) => disabled  ? "grey" : "white"};
    transition: all 0.25s linear;

    &:hover {
        border: ${({disabled}) => disabled  ? "1px solid grey" : "1px solid white"};
    color: white;
    background-color: ${({disabled}) => disabled  ? "grey" : "black"};   
    }
`