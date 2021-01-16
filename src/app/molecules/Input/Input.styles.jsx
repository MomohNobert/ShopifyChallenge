import styled from 'styled-components'

export const InputContainer = styled.input`
    width: 75%;
    border-radius: 30px;
    height: 60%;
    border: 2px solid rgba(0,0,0,0.2);
    padding-left: 20px;
    font-size: 25px;
    transition: all 0.25s ease-out;

    &:focus {
        border: 2px solid lightblue;
    }
`;