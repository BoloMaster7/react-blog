import { Form } from "react-bootstrap";
import { useState } from "react";
import { Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";


  const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = e=> {
  
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <>
        <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" placeholder="Enter title"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
</Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Author" value={author}
        onChange={(e) => setAuthor(e.target.value)}/>
      </Form.Group>
     
      <Form.Group className="mb-3" >
        <Form.Label>Published</Form.Label>
        <DatePicker
      selected={publishedDate}
      onChange={date => setPublishedDate(date)}
      />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Short Description</Form.Label>
        <Form.Control type="text" placeholder="Leave a comment here" value ={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}/>
      </Form.Group>

      
      <ReactQuill value={content} onChange={setContent} />

      <Button variant="primary" onClick={handleSubmit}>
        {actionText}
      </Button>
    </Form>
    </>
   
  );
};

export default PostForm;