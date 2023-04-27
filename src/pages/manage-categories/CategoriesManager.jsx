import { Container, Accordion, Button, Card } from "react-bootstrap";

import CategoryCard from './CategoryCard';


const CategoriesManager = () => {
  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5">
      <header className="p-4">
        <h1>Manage Categories</h1>
      </header>

      <Accordion className="p-3">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />

      </Accordion>
    </Container>
  );
};

export default CategoriesManager;
