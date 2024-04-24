import React from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";

const BookList = () => {
  return (
    <Container>
      <Row className="mt-5">
        {fantasy.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
