import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostForm from '../PostForm/PostForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { editPost, getPostById } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPostForm=() => {

  const { id } = useParams();
  const editPostsData = useSelector(state => getPostById(state, id))

  const dispatch = useDispatch(); 
  const navigate = useNavigate();


const handleSubmit = post => {
  dispatch(editPost({ ...post, id }));
  navigate('/')
};

if(!editPostsData) return <Navigate to="/" />
else 
return (
<PostForm action={handleSubmit} actionText={"Edit post"}
  author= {editPostsData.author}
  publishedDate={editPostsData.publishedDate}
  category = {editPostsData.category}
  shortDescription={editPostsData.shortDescription}
  title={editPostsData.title}
  content={editPostsData.content}
 />
);
}
export default EditPostForm;