import React, { useState } from 'react';
import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';



const Categories = () => {
  const categoriesList = useSelector(getAllCategories);
  // const categoriesList = useState(getAllCategories)
  return (
      <section>
        <h1 className="mb-5 justify-content-center d-flex">Categories</h1>
        {/* <Card>
        {categoriesList.map(category => 
    
        <li>Category: {category}</li>
        
        )}
        </Card> */}


      </section>
  );
};

export default Categories;