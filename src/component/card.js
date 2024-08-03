import React from 'react'
import { Link } from 'react-router-dom'

function card({post}) {
  return (<div  className="col-3 mb-3">
    <div className="card text-white bg-dark border border-light justified-text card-radious" style={{ width: '100%' }}>
        <img src={`https://picsum.photos/200?random=${post.id}`} className="card-img-top img-radious" alt={`Image for post ${post.id}`} />
        <div className="card-body ">
            <p className="card-text">User ID: {post.userId}</p>
            <p className="card-title">
                Title : {post.title.length > 20 ? `${post.title.substring(0, 20)}...` : post.title}
            </p>
            <p className="card-text">
                Body :{post.body.length > 40 ? `${post.body.substring(0, 40)}` : post.body}
                <Link to={`/post/${post.id}`} className='text-decoration-none'> Read More...</Link>
            </p>
        </div>
    </div>
</div>
)
}

export default card