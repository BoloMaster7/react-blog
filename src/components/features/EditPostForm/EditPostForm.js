import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostEdit from '../../pages/PostEdit/PostEdit';
import PostForm from '../PostForm/PostForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';

const EditPostForm=() => {

  const { id } = useParams();
  const editPostsData = useSelector(state => getPostById(state, id))

  const dispatch = useDispatch(); 
  const navigate = useNavigate();


const handleSubmit = post => {
  dispatch(PostEdit({ ...post, id }));
  navigate('/')
};


return (
<PostForm action={handleSubmit} actionText={"Edit post"}
  author= {editPostsData.author}
  published={editPostsData.published}
  shortDescription={editPostsData.shortDescription}

  
 />
);
}
export default EditPostForm;