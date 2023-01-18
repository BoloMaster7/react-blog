import React from 'react';
import PostsTable from '../../features/PostsTable/PostsTable';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <main>
       <div className="d-flex justify-content-between">
    <h1>All Posts</h1>
    <Link to="/post/add">
          <Button variant="outline-info">Add post</Button>
        </Link>
        </div>
    <PostsTable/>
  </main>
  );
};

export default Home;