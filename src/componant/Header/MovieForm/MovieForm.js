import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal, Form, Col, Row } from "react-bootstrap";

function MovieForm(addMovie,  newMovie) {
  const [modalShow, setModalShow] = useState(false);
  const [movies, setMovies] = useState({});
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState("");
  const [trailer, setTrailer] = useState("");
  const [link, setLink] = useState("");
  const [rate, setRate] = useState(0);

  const add = (e) => {
    e.preventDefault();
    newMovie = {
      title,
      image,
      desc,
      year,
      trailer,
      link,
      rate,
    };

    if (
      title === "" ||
      year === "" ||
      image === "" ||
      link === "" ||
      trailer === "" ||
      desc === ""
    )
      addMovie(newMovie);
    setTitle("");
    setDesc("");
    setImage("");
    setTrailer("");
    setRate(0);
    setLink("");
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
                  value={title}
                  placeholder="Enter movie title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  value={year}
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
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Link</Form.Label>
              <Form.Control
                placeholder="Enter movie link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Movie Trailer</Form.Label>
              <Form.Control
                placeholder="Enter movie trailer"
                value={trailer}
                onChange={(e) => setTrailer(e.target.value)}
              />
            </Form.Group>

            <Form.Control
              as="textarea"
              placeholder="Leave a description here"
              style={{ height: "100px" }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Rate movie</Form.Label>
              <Form.Control
                placeholder="Rate movie"
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
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
