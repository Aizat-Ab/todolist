import React from 'react';
import TodoForm from './components/TodoForm/todoForm';
import TodoList from './components/TodoList/todoList';
import './index.scss';


const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

function App() {

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos){
      setTodos(storageTodos);
    }
  }, []); 

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);  

 function addTodo(todo) {
  setTodos([todo, ...todos])
 }

 function toggleComplete(id){
  setTodos(
    todos.map(todo=>{
      if(todo.id === id){
        return{
          ...todo,
          comlpeted: !todo.comlpeted
        };
      }
      return todo;
    })
  )
 }

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='App container'>
      <h1 className='title'>To Do List</h1>
     <TodoForm addTodo={addTodo}/>
     <TodoList 
     todos={todos} 
     toggleComplete={toggleComplete}
     removeTodo={removeTodo}/>
    </div>
  );
}

export default App;
