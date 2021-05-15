import React from 'react';
import uuid from 'react-uuid';
import './index.scss';

const TodoForm = ({addTodo}) => {
const [todo, setTodo] = React.useState({
    id:'',
    task:'',
    completed: false
});

function handleTaskInputChange(e){
    setTodo({...todo, task: e.target.value})
}
function hadleSubmit(e) {
    e.preventDefault();
    if(todo.task.trim()){
        addTodo({...todo, id: uuid() })
        setTodo({...todo, task:''})
    }
}
    return (
        <form onSubmit={hadleSubmit}>
            <input className='form__input'
            name='task'
            type= 'text'
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <button className='form__btn' type='submit'>ADD</button>
        </form>
    )
}

export default TodoForm
