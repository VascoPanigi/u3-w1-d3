import React, { useState } from "react";
import { Container, Row, Form, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const BookListClass = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setBooks] = useState(fantasy);

  const handleSearch = (e) => {
    // e.preventDefault()
    const searchValue = e.target.value.toLowerCase();
    setSearchValue(searchValue);

    const filteredBooks = fantasy.filter((book) => book.title.toLowerCase().includes(searchValue));
    setBooks(filteredBooks);
  };

  return (
    <Container>
      <Form className="mt-5">
        <FormControl
          type="text"
          placeholder="Search a book..."
          onChange={handleSearch}
          onSubmit={(e) => {
            e.preventDefault();
          }}
          value={searchValue}
        />
      </Form>
      <Row className="mt-5">
        {filteredBooks.map((book) => (
          <SingleBook key={book.asin} book={book} />
        ))}
      </Row>
    </Container>
  );
};

export default BookListClass;
