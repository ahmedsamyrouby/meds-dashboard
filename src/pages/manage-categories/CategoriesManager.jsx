import { Container, Accordion, Button, Form } from "react-bootstrap";

import CategoryCard from "./CategoryCard";

const CategoriesManager = () => {
  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <header className="m-4">
        <h1>Manage Categories</h1>
      </header>

      {/* <Button className="m-auto btn-lg fw-semibold" variant="outline-warning">Add Category</Button>

      <Accordion className="p-3">
        <CategoryCard catId={1}/>
        <CategoryCard catId={2} />

      </Accordion> */}

      <header className="m-4">
        <h2 className="text-warning ">Add Categories</h2>
      </header>
      <Form className="d-flex flex-column align-items-center">
        <Form.Group className="my-2 w-75">
          <Form.Label className="text-light">Category Name:</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className=" my-2 w-75">
          <Form.Label className="text-light">Category Description:</Form.Label>
          <Form.Control as="textarea" style={{height: "200px", resize: "none"}}/>
        </Form.Group>

        <Button className="my-2">Add Category</Button>
      </Form>
    </Container>
  );
};

export default CategoriesManager;
