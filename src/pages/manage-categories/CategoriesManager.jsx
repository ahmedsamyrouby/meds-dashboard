import { Container, Accordion, Button, Card } from "react-bootstrap";

import CategoryCard from './CategoryCard';


const CategoriesManager = () => {
  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <header className="p-4">
        <h1>Manage Categories</h1>
      </header>
      
      <Button className="m-auto btn-lg fw-semibold" variant="outline-warning">Add Category</Button>

      <Accordion className="p-3">
        <CategoryCard catId={1}/>
        <CategoryCard catId={2} />

      </Accordion>
    </Container>
  );
};

export default CategoriesManager;
