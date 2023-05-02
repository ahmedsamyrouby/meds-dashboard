import {
  Container,
  Accordion,
  Button,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useEffect, useState } from "react";

import CategoryCard from "./CategoryCard";
import { BASE_URL } from "../../App";
import axios from "axios";
import { getAuthUser } from "../../helper/storage";
import { Link } from "react-router-dom";

const CategoriesManager = () => {
  const auth = getAuthUser();

  const [medCats, setMedCats] = useState({
    loading: true,
    catData: [],
    err: null,
    reload: 0,
  });

  const getMedCats = () => {
    axios
      .get(BASE_URL + "/cat")
      .then((res) => {
        setMedCats({
          ...medCats,
          loading: false,
          catData: res.data,
          err: null,
        });
      })
      .catch((e) => {
        setMedCats({ ...medCats, loading: false, err: e.message });
      });
  };

  useEffect(() => {
    getMedCats();
  }, [medCats.reload]);

  const handleDelete = (id) => {
    axios
      .delete(BASE_URL + "/cat/delete/" + id, {
        headers: {
          token: auth.token,
        },
      })
      .then((res) => {
        setMedCats({ ...medCats, reload: medCats.reload + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container className="rounded-4 request-manager-container p-4 bg-dark m-5 d-flex flex-column">
      {medCats.loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" variant="light">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <header className="m-4">
        <h1>Manage Categories</h1>
      </header>
      {(!medCats.loading && !medCats.err && (
        <>
          <Button
            className="m-auto btn-lg fw-semibold"
            variant="outline-warning"
          >
            <Link to="add" className="text-light text-decoration-none">
              Add Category
            </Link>
          </Button>

          <Accordion className="p-3">
            {medCats.catData.map((cat) => {
              return (
                <CategoryCard
                  key={cat.id}
                  catName={cat.Name_Category}
                  catDesc={cat.description_Category}
                  catId={cat.id}
                  handleDelete={handleDelete}
                />
              );
            })}
          </Accordion>
        </>
      )) || (
        <Alert className="text-center" variant="danger">
          {medCats.err}
        </Alert>
      )}
    </Container>
  );
};

export default CategoriesManager;
