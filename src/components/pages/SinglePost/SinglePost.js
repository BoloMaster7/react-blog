import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../redux/postsRedux';

const SinglePost = ()  => {
  const { id } = useParams();
  const postsData = useSelector(state => getPostById(state, id))

  const dispatch = useDispatch();

  const deletePost = (e) => {
    e.preventDefault();
    dispatch(removePost(id));
  };


  return (
    <div className='col-md-'>
     <header className='d-flex justify-content-between mt-2 mb-2 p-2' >    
        <h2 >
          {postsData.title}
          </h2>
          <div>
          <Button variant="btn btn-outline-primary m-1" a href='/post/edit/id' >Edit</Button>
          <Button variant="btn btn-outline-danger m-1">Delete</Button>
          </div >
          </header>
          <p>Author: {postsData.author}</p>
          <p>Published: {postsData.publishedDate}</p>
          <p >{postsData.shortDescription}</p> 
    </div>
  );
};
export default SinglePost;