import React from 'react';
import './index.scss';

const Search = () => {
    return (
        <div className='search'>
            <input className='search__input' type="text" placeholder='Поиск по записям' />
        </div>
    )
}

export default Search
