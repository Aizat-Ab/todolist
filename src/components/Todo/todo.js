import React from 'react';
import './index.scss';

const Todo = ({todo, toggleComplete, removeTodo}) => {
    
    function handleCheckboxClick(){
        toggleComplete(todo.id);
    }

    function handRemoveClick(){
        removeTodo(todo.id)
    }

    return (
        <div className='todo'>
            <label className='todo__label'>
            <input className='todo__input' onClick={handleCheckboxClick} type='checkbox'/>
            <li>{todo.task}</li>
            </label>
            <button className='todo__btn'
            onClick={handRemoveClick}><svg width="17" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L4.4545 25.114C4.63345 26.2079 5.11194 27.2309 5.83689 28.0695C6.56184 28.908 7.50492 29.5293 8.5615 29.8645L9.0535 30.0205C12.5974 31.1455 16.4026 31.1455 19.9465 30.0205L20.4385 29.8645C21.4949 29.5294 22.4378 28.9083 23.1628 28.0701C23.8877 27.2318 24.3663 26.2092 24.5455 25.1155L28 4" stroke="#F041B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.5 7C21.9558 7 28 5.65685 28 4C28 2.34315 21.9558 1 14.5 1C7.04416 1 1 2.34315 1 4C1 5.65685 7.04416 7 14.5 7Z" stroke="#F041B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
        </div>
    )
}

export default Todo
