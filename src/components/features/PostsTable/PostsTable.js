import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Posts from '../Posts/Posts';


const PostsTable = (props)  => {
  const posts = useSelector(getAllPosts);

  return(
     <div className="">
    {posts.map(post => 
    <Posts key={post.id}
    title={post.title}
    description={post.shortDescription}
    content={post.content}
    date={post.publishedDate}
    author={post.author}
    />)}
    </div>
  );
};
export default PostsTable;