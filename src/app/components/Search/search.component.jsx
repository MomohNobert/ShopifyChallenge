import { useState } from 'react';
import Input from '../../molecules/Input/Input.molecule';
import { SearchContainer } from './search.styles';


const Search = () => {
    const [searchValue, setSearchValue] = useState(null);
    console.log(searchValue)

    return (
        <SearchContainer>
            <Input setSearchValue={setSearchValue} />
        </SearchContainer>
    )
}

export default Search;