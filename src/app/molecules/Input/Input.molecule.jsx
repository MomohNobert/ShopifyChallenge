import { InputContainer } from './Input.styles';

const Input = ({ setSearchValue }) => {
    const changeHandler = value => {
        setSearchValue(value)
    }

    return (
        <InputContainer 
            onChange={event => changeHandler(event.target.value)}
        />
    )
}

export default Input;