// src/components/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Action/PostAction';
import { Link } from 'react-router-dom';
import Card from './card';

const HomePage = () => { const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-dark">
      <p className="fs-4 p-2 border-bottom border-danger text-white">
        Social Media App
      </p>
      <div className="App container-fluid ">
        <div className="row p-3 border-bottom border-danger">
          {posts.map((post) => (
            <Card key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default HomePage;
