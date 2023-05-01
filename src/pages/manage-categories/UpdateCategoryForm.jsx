import { Container, Form, Button, Alert } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getAuthUser } from "../../helper/storage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../App";

const UpdateCategoryForm = () => {

  const auth = getAuthUser();
  const { id } = useParams();
  const [cat, setCat] = useState({
    loading: false,
    name: "",
    desc: "",
    id: "",
    resMsg: null,
  });

  useEffect(() => {
    axios.get(BASE_URL + "/cat/" + id).then((res) => {
      setCat({
        ...cat,
        name: res.data[0].Name_Category,
        desc: res.data[0].description_Category,
        id: res.data[0].id,
        });
    });
  }, []);

  const updateCategory = (e) => {
    e.preventDefault();
    setCat({ ...cat, loading: true });
    axios
      .put(BASE_URL + "/cat/update/" + id, {
        Name_Category: cat.name,
        id: cat.id,
        description_Category: cat.desc,
      })
      .then((res) => {
        setCat({ ...cat, resMsg: res.data.msg, loading: false });
      });

    setTimeout(() => {
      setCat({
        ...cat,
        resMsg: null,
      });
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
        <h1>Update Category</h1>
      </header>

      <Form
        className="d-flex flex-column align-items-center"
        onSubmit={updateCategory}
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
              placeholder="Category Name"
              value={cat.name}
              onChange={(e) => setCat({ ...cat, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="my-2 w-25">
            <Form.Label className="text-light">Enter Category ID:</Form.Label>
            <Form.Control
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
            placeholder="Category Description"
            as="textarea"
            style={{ height: "200px", resize: "none" }}
            value={cat.desc}
            onChange={(e) => setCat({ ...cat, desc: e.target.value })}
          />
        </Form.Group>

        <Button type="submit" className="my-2">
          Update Category
        </Button>
      </Form>
    </Container>
  );
};

export default UpdateCategoryForm;
