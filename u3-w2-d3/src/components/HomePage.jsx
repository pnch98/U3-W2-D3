import { useState } from "react";
import { Alert, Container, Dropdown } from "react-bootstrap";
import Gallery from "./Gallery";

const HomePage = () => {
  const [ok, setOk] = useState(true);
  const [status, setStatus] = useState("");

  const message = {
    401: "Unauthorized!",
    400: "Bad request!",
  };

  return (
    <main className="text-white">
      <Container fluid className="px-4">
        {ok ? (
          <>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <h1 className="h2 me-4">Home</h1>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    className="btn btn-outline-light bg-netflix rounded-0 fs-7 px-2 py-1"
                  >
                    Genres
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="mx-3">
                <i class="bi bi-grid fs-5 me-5"></i>
                <i class="bi bi-grid-3x3 fs-5"></i>
              </div>
            </div>
            <Gallery saga="american pie" title="Trending Now" setOk={setOk} setStatus={setStatus} />
            <Gallery saga="superman" title="Watch it Again" setOk={setOk} setStatus={setStatus} />
            <Gallery saga="harry potter" title="New Releases" setOk={setOk} setStatus={setStatus} />
          </>
        ) : (
          <div className="text-center">
            <Alert variant="danger">
              Error! Status: {status} - {message[status]}
            </Alert>
          </div>
        )}
      </Container>
    </main>
  );
};

export default HomePage;
