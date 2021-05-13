import React from 'react';
import '../header/index.scss';

const Header = () => {
    return (
        <div className='header'>
            <h2 className='header__title'>Task list</h2>
            <p className='header__text1'>1 note</p>
            <p className='header__text'>1 like</p>
        </div>
    )
}

export default Header
