import { Container, Form, Button, Alert } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../helper/storage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../App";

const AddCategoriesForm = () => {

  const [cat, setCat] = useState({
    loading: false,
    name: "",
    desc: "",
    id: "",
    resMsg: null,
  });

  const addCategory = (e) => {
    e.preventDefault();

    setCat({ ...cat, loading: true });

    axios
      .post(BASE_URL + "/cat", {
        Name_Category: cat.name,
        id: cat.id,
        description_Category: cat.desc,
      })
      .then((res) => {
        setCat({ ...cat, resMsg: res.data.msg, loading: false });
      });

    setTimeout(() => {
      setCat({
        loading: false,
        name: "",
        desc: "",
        id: "",
        resMsg: null,
      });
      e.target.reset();
    }, 3000);
  };

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      <Link to="/manage-categories">
        <BiArrowBack
          className="text-light bg-warning p-1 rounded-1"
          size="2rem"
        />
      </Link>

      <header className="m-4">
        <h1>Add Category</h1>
      </header>

      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={addCategory}
        style={{ padding: "2rem 10rem" }}
      >
        {cat.resMsg && (
          <Alert variant="success" className="w-100 text-center">
            {cat.resMsg}
          </Alert>
        )}
        <div className="d-flex w-100 justify-content-center">
          <Form.Group className="my-2 w-75 me-2">
            <Form.Label className="text-light">Enter Category Name:</Form.Label>
            <Form.Control
              required
              placeholder="Category Name"
              value={cat.name}
              onChange={(e) => setCat({ ...cat, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="my-2 w-25">
            <Form.Label className="text-light">Enter Category ID:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Category ID"
              value={cat.id}
              onChange={(e) => setCat({ ...cat, id: e.target.value })}
              style={{}}
            />
          </Form.Group>
        </div>
        <Form.Group className=" my-2 w-100">
          <Form.Label className="text-light">
            Enter Category Description:
          </Form.Label>
          <Form.Control
            required
            placeholder="Category Description"
            as="textarea"
            style={{ height: "200px", resize: "none" }}
            value={cat.desc}
            onChange={(e) => setCat({ ...cat, desc: e.target.value })}
          />
        </Form.Group>

        <Button type="submit" className="my-2">
          Add Category
        </Button>
      </Form>
    </Container>
  );
};

export default AddCategoriesForm;
