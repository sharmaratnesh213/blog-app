import React from 'react'
import "./posts.css"
import Post from '../post/Post'

export default function Posts({ posts }) {
    return (
        <div className='posts'>
            {posts.length == 0 ? <> </> : posts.map(p => (
                <Post key={p._id} post={p} />
            ))}
        </div>
    )
}
