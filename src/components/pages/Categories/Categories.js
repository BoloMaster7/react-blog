import React from 'react';
import { getAllCategories } from '../../../redux/postsRedux';
import { useSelector } from 'react-redux';



const Categories = () => {
  const categories = useSelector(getAllCategories);
  return (
      <section>
        <h1 className="mb-5 justify-content-center d-flex">Categories</h1>
       
      </section>
  );
};

export default Categories;