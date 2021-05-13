import React from 'react';
import './index.scss';

const Add = () => {
    return (
        <form className='add__form'>
            <input className='add__input' type="text" placeholder='О чем вы думаете сейчас думаете?'/>
        <button className='add__form__btn'>Добавить</button>
        </form >
    )
}

export default Add;
