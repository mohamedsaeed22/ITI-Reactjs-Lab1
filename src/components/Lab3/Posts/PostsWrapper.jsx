import React from 'react'
import GetPosts from './GetPosts'
import SendPost from './SendPost'
import './posts.css'

function PostsWrapper() {
  return (
    <div className='postsWrapper'>

    <div className='container'>
    <GetPosts/>
    <SendPost/>
    </div>
    </div>
  )
}

export default PostsWrapper