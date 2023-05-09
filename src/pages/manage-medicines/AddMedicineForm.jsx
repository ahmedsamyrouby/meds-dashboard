import { Container, Form, Dropdown, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import { BASE_URL } from "../../App";
import { useEffect, useState } from "react";
import { getAuthUser } from "../../helper/storage";

const AddMedicineForm = () => {
  const auth = getAuthUser();

  const [cats, setCats] = useState({
    data: [],
  });

  const [currentMed, setCurrentMed] = useState({
    medPrice: "",
    medName: "",
    medDesc: "",
    expDate: "",
    userId: auth.id_user,
    medCat: "",
    token: auth.token,
    medsearch: null,
    resMsg: null,
  });

  const getMedCats = () => {
    axios.get(BASE_URL + "/cat/").then((res) => {
      setCats({ data: res.data });
    });
  };

  useEffect(() => {
    getMedCats();
  }, []);

  const addMedicine = (e) => {
    e.preventDefault();
    axios
      .post(BASE_URL + "/med", {
        price: Number(currentMed.medPrice),
        Name_meds: currentMed.medName,
        description_meds: currentMed.medDesc,
        Expiration_date: currentMed.expDate,
        userfid: currentMed.userId,
        namefcategory: currentMed.medCat,
        token: currentMed.token,
        medsearch: null,
      })
      .then((res) => {
        setCurrentMed({ ...currentMed, resMsg: res.data.msg });
      }).catch(e => {
        console.log(e);
      });
    setTimeout(() => {
      setCurrentMed({
        ...currentMed,
        medPrice: "",
        medName: "",
        medDesc: "",
        expDate: "",
        medCat: "",
        resMsg: null,
      });
      e.target.reset();
    }, 3000);
  };

  return (
    <Container className="rounded-4 p-4 bg-dark m-5 d-flex flex-column">
      <Link to="/manage-medicines">
        <BiArrowBack
          className="text-light bg-warning p-1 rounded-1"
          size="2rem"
        />
      </Link>

      <header className="m-4">
        <h1>Add Medicine</h1>
      </header>

      <Form
        className="d-flex flex-column align-items-center"
        style={{ padding: "2rem 10rem" }}
        onSubmit={addMedicine}
      >
        {currentMed.resMsg && (
          <Alert variant="success" className="w-100 text-center">
            {currentMed.resMsg}
          </Alert>
        )}
        {/* MEDICINE NAME */}
        <Form.Group className="w-100 mb-4">
          <Form.Label className="text-light">Enter Medicine Name:</Form.Label>
          <Form.Control
            required
            placeholder="Medicine Name"
            value={currentMed.medName}
            onChange={(e) =>
              setCurrentMed({ ...currentMed, medName: e.target.value })
            }
          />
        </Form.Group>
        {/* MEDICINE DESCRIPTION */}
        <Form.Group className="w-100 mb-4">
          <Form.Label className="text-light">
            Enter Medicine Description:
          </Form.Label>
          <Form.Control
            required
            as="textarea"
            placeholder="Medicine Description"
            style={{ height: "200px", resize: "none" }}
            value={currentMed.medDesc}
            onChange={(e) =>
              setCurrentMed({ ...currentMed, medDesc: e.target.value })
            }
          />
        </Form.Group>

        <div className=" w-100 d-flex justify-content-between mb-4">
          {/* MEDICINE CATEGORY */}
          <Form.Group className="w-25 mb-4 me-3">
            <Form.Label className="text-light">Category: </Form.Label>
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                drop="down"
                className="w-100"
              >
                {currentMed.medCat ? currentMed.medCat : "Choose Category"}
              </Dropdown.Toggle>

              <Dropdown.Menu className="w-100">
                {cats.data.map((cat) => {
                  return (
                    <Dropdown.Item
                      onClick={() =>
                        setCurrentMed({
                          ...currentMed,
                          medCat: cat.Name_Category,
                        })
                      }
                      key={cat.id}
                    >
                      {cat.Name_Category}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          {/* MEDICINE EXPIRATION DATE */}
          <Form.Group className="w-25 me-3">
            <Form.Label className="text-light">Expiration Date:</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Expiration Date"
              value={currentMed.expDate}
              onChange={(e) =>
                setCurrentMed({ ...currentMed, expDate: e.target.value })
              }
            />
          </Form.Group>
          {/* MEDICINE PRICE */}
          <Form.Group className="w-25  me-3">
            <Form.Label className="text-light">Price:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Medicine Price"
              value={currentMed.medPrice}
              onChange={(e) =>
                setCurrentMed({ ...currentMed, medPrice: e.target.value })
              }
            />
          </Form.Group>
          {/* MEDICINE ID */}
          {/* <Form.Group className="w-25 ">
            <Form.Label className="text-light">ID:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Medicine ID"
              value={currentMed.medId}
              onChange={(e) =>
                setCurrentMed({ ...currentMed, medId: Number(e.target.value) })
              }
            />
          </Form.Group> */}
        </div>
        <Button type="submit">Add Medicine</Button>
      </Form>
    </Container>
  );
};

export default AddMedicineForm;
