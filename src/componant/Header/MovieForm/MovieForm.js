import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal, Form, Col, Row } from "react-bootstrap";

function MovieForm({ addMovie }) {
  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState({});
  const [Title, setTitle] = useState("");
  const [Image, setImage] = useState("");
  const [Des, setDes] = useState("");
  const [Year, setYear] = useState("");
  const [Rate, setRate] = useState(0);

  const add = (e) => {
    e.preventDefault();
    let newMovie = {
      Title,
      Image,
      Des,
      Year,
      Rate,
    };

    if (Title === "" || Year === "" || Image === "" || Des === "")
      return alert("Missing some fields");

    if (Rate <= 0) return alert("Rate must be above of zero");

    // addMovie({ newMovie });
    addMovie(newMovie);
    setTitle("");
    setDes("");
    setImage("");
    setRate(0);
    setYear("");
    setModalShow(false);
  };

  return (
    <div>
      <Button onClick={() => setModalShow(true)} size="lg">
        Add Movie
      </Button>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={() => setModalShow(false)}>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="test"
                  value={Title}
                  placeholder="Enter movie title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  value={Year}
                  placeholder="Enter movie year"
                  onChange={(e) => setYear(e.target.value)}
                />
              </Form.Group>
            </Row>

            {/* <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" placeholder="Enter movie rate" />
          </Form.Group> */}

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Image</Form.Label>
              <Form.Control
                placeholder="Enter movie image"
                value={Image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <Form.Control
              as="textarea"
              placeholder="Leave a description here"
              style={{ height: "100px" }}
              value={Des}
              onChange={(e) => setDes(e.target.value)}
            />

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Rate movie</Form.Label>
              <Form.Control
                placeholder="Rate movie"
                type="number"
                value={Rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>

            <Button
              type="submit"
              onClick={(e) => {
                add(e);
              }}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MovieForm;
