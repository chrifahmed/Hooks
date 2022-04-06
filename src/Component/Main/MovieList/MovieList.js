import React from "react";
import ReactStars from "react-stars";
import { Card, Button } from "react-bootstrap";
import "./movieList.css";

import { Link } from "react-router-dom";

const MovieList = ({ searchRate, movies, searchTxt }) => {
  return (
    <>
      {movies
        .filter(
          (movie, i) =>
            movie.Title.toLowerCase().includes(searchTxt.toLowerCase()) &&
            movie.Rate >= searchRate
        )
        .map((movie, i) => (
          <Card
            className="d-flex justify-content-start m-5"
            style={{
              width: "18rem",
            }}
          >
            <Card.Img src={movie.Image} />
            <Card.Body className="">
              <Card.Title>{movie.Title}</Card.Title>
              <ReactStars
                count={5}
                value={movie.Rate}
                edit={false}
                size={25}
                activeColor="#ffd700"
              />
              <Card.Text>{movies.Des}</Card.Text>

              <Link to={`/moviedetails/${movie.id}`}>
                <Button>show More</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default MovieList;
