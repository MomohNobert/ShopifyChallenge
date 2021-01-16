import { useState } from 'react';
import Input from '../../molecules/Input/Input.molecule';
import { SearchContainer, SearchIconContainer } from './search.styles';
import { useDispatch } from 'react-redux';
import { fetchMovies } from './search.slice';
import SearchImg from './assets/search.svg';


const Search = () => {
    const [searchValue, setSearchValue] = useState(null);
    console.log(searchValue);

    const dispatch = useDispatch();
    // const { movies, loading, hasErrors } = useSelector(moviesSelector);

    const clickHandler = value => {
        console.log(value);
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
            >
                <img src={SearchImg} alt="search" />
            </SearchIconContainer>
        </SearchContainer>
    )
}

export default Search;