import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { dateToStr } from '../../../utils/dateToStr';
const Post = (props)  => {

 return (
  <div className="py-4 col-6 col-md-4 ">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="font-weight-bold">Author: {props.author}</p>
        <p className="text-muted">Published: {dateToStr(props.date)}</p>
        <p className="text-muted">Category: {props.category}</p>
        <p className="card-text">  Short description: {props.description}.</p>
        <Link key={props.id} to={'/post/' + props.id}>
          <Button variant="primary">Read more</Button>
        </Link>
      </div>
    </div>
  </div>
  );
};
export default Post;