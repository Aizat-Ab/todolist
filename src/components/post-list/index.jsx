import React from 'react';
import PostListItem from '../post-list-item';

const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item)=>{
        return <li key={item.id}> 
            <PostListItem  {...item}
            onDelete={()=>onDelete(item.id)}/>
        </li>
    })
    return (
        <div>
            {elements}
        </div>
    )
}

export default PostList
