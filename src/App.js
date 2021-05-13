import React from 'react';
import Header from './components/header';
import Add from './components/post-add-form';
import PostList from './components/post-list';
import Filter from './components/post-status-filter';
import Search from './components/search';
import './index.scss';

function App() {

  const data = [
    {id:'asdas', label: 'Going to learn React', important: true},
    {id:'dfg', label: 'That is so good', important: false},
    {id:'we', label: 'I need a break...', important: false}
  ];

  return (
    <div className='App container'>
      <Header/>
      <div className = 'row'>
      <Search/>
      <Filter/>
      </div>
      <PostList onDelete={id => console.log(id)} posts = {data}/>
      <Add/>
    </div>
  );
}

export default App;
