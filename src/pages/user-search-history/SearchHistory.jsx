import { Container, Card, Badge, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../App";
import { getAuthUser } from "../../helper/storage";
import axios from "axios";

const SearchHistory = () => {

  const auth = getAuthUser();

  const [history, setHistory] = useState({
    historyData: [],
    err: null,
    loading: true,
  });

  const getSearchHistory = () => {
    axios
      .get(BASE_URL + "/histsearch/" + auth.id_user)
      .then((res) => {
        setHistory({ ...history, historyData: res.data, loading: false });
      })
      .catch((e) => {
        setHistory({ ...history, loading: false, err: e.message });
      });
  };

  useEffect(() => {
    getSearchHistory();
  }, []);


  return (
    <Container className="rounded-4 p-4 bg-dark m-5 d-flex flex-column">
      <header className="m-4">
        <h1>Search History</h1>
      </header>

      <Container>
        <Table className="bg-light" striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Search</th>
              <th>Time of Search</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {history.historyData.map((val) => {
              return (
                <tr className="mb-3" key={val.id_search}>
                  <td>{val.id_search}</td>
                  <td>{val.search}</td>
                  <td>{val.timefsearch}</td>
                  <td>
                    <Badge bg={val.status ? "success" : "danger"}>
                      {val.status ? "FOUND" : "NOT FOUND"}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

export default SearchHistory;
