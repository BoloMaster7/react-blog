import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Post from '../Post/Post';


const PostsTable = (props)  => {
  const posts = useSelector(getAllPosts);

  return(
    <div className="row">
    {posts.map(post => 
      <Post key={post.id}
        title={post.title}
        description={post.shortDescription}
        content={post.content}
        date={post.publishedDate}
        author={post.author}
        id={post.id}
        />
      )}
  </div>
  );
};
export default PostsTable;