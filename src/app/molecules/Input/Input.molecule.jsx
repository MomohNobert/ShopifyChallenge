import { InputContainer } from './Input.styles';

const Input = ({ setSearchValue }) => {
    const changeHandler = value => {
        setSearchValue(value)
        
    }

    return (
        <InputContainer 
            placeholder="What movie are you searching for?"
            onChange={event => {
                changeHandler(event.target.value)
            }}
            id="search"
        />
    )
}

export default Input;