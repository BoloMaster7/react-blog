import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Post from '../Post/Post';


const PostsTable = ()  => {
  const posts = useSelector(getAllPosts);

  return(
    <div className="row">
    {posts.map(post => 
      <Post key={post.id}
        title={post.title}
        description={post.shortDescription}
        content={post.content}
        date={post.publishedDate}
        category={post.category}
        author={post.author}
        id={post.id}
        />
      )}
  </div>
  );
};
export default PostsTable;