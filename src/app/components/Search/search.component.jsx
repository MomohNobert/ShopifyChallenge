import { useState } from 'react';
import Input from '../../molecules/Input/Input.molecule';
import { SearchContainer, SearchIconContainer } from './search.styles';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './search.slice';
import SearchImg from './assets/search.svg';


const Search = () => {
    const [searchValue, setSearchValue] = useState(null);
    const dispatch = useDispatch();

    const clickHandler = value => {
        if (value) {
            dispatch(fetchMovies(value))
        }
    }

    return (
        <SearchContainer>
            <Input 
                setSearchValue={setSearchValue}
            />
            <SearchIconContainer
                onClick={() => clickHandler(searchValue)}
                for="search"
            >
                <img src={SearchImg} alt="search" />
            </SearchIconContainer>
        </SearchContainer>
    )
}

export default Search;