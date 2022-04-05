import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Filter from "./Filter/Filter";
import MovieForm from "./MovieForm/MovieForm";
import Stars from "./Stars/Stars";
import "./header.css";

function Header({ addMovie, newMovie, setSearchRate, searchRate,setSearchTxt }) {
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className="main_nav">
          <Navbar.Brand href="#row">Streaming Complet</Navbar.Brand>
          <Stars setSearchRate={setSearchRate} searchRate={searchRate} />
          <MovieForm addMovie={addMovie} newMovie={newMovie} />
          <Filter setSearchTxt={setSearchTxt} />
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
