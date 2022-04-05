import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function Filter({ setSearchTxt }) {
  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </>
  );
}

export default Filter;
