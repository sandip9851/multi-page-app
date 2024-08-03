// src/components/DetailPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailPage = () =>{
  const { id } = useParams();
const post = useSelector((state) =>
  state.posts.posts.find((post) => post.id === parseInt(id))
);

if (!post) {
  return <div>Post not found</div>;
}

 return (
  <div className='bg-dark'>
      <p className="fs-4 p-2 border-bottom border-danger text-white">Social Media App</p>
      <p className='fs-4 p-2 text-white'>Details Page For Post With ID {post.id}</p>
      <div className="container-fluid d-flex justify-content-start">
      <div className="card text-white bg-transparent border border-0 fs-4 justified-text" style={{ width: '50%' }}>
          <img src={`https://picsum.photos/200?random=${post.id}`} className="img-thumbnail" alt={`Image for post ${post.id}`}  height={300} width={300}/>
          <div className="card-body">
              <p className=''>User ID : {post.id}</p>
              <p className="card-title">Title : {post.title}</p>
              <p className="card-text">Body : {post.body}</p>
          </div>
      </div>
  </div>
  </div>
);
}
export default DetailPage;
