import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Filter from "./Filter/Filter";
import MovieForm from "./MovieForm/MovieForm";
import Stars from "./Stars/Stars";
import "./header.css";

function Header(addMovie) {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className="main_nav">
          <Navbar.Brand href="#row">Streaming Complet</Navbar.Brand>
          <Stars />
          <MovieForm addMovie={addMovie} />
          <Filter />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
