import { useParams } from "react-router-dom";
import { Row } from "react-bootstrap";


const CategoryTable = () => {
  const { category } = useParams();




  return (
    <section>
      <Row>
      <h1>Category: {category}</h1>
     
      </Row>
    </section>
  );
};

export default CategoryTable;