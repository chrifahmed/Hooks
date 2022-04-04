import React from "react";
import ReactStars from "react-stars";
import { Card, Button } from "react-bootstrap";
import "./movieList.css";

const MovieList = (props, edit) => {
  return (
    <>
      {props.movies.map((movies, index) => (
        <Card
          className="d-flex justify-content-start m-5"
          style={{
            width: "18rem",
          }}
        >
          <Card.Img src={movies.Image} />
          <Card.Body className="">
            <Card.Title>{movies.Title}</Card.Title>
            <ReactStars
              count={5}
              value={movies.Rate}
              edit={edit === true}
              size={25}
              activeColor="#ffd700"
            />
            <Card.Text>{movies.Des}</Card.Text>
            <Button>edit movie</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default MovieList;
