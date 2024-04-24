import React from "react";
import { Col, Card, Badge } from "react-bootstrap";

const SingleBook = (props) => {
  const { asin, img, title, category, price } = props.book;

  return (
    // <div className="single-book">
    <Col xs={6} sm={4} md={3} lg={2}>
      <Card key={asin} className="b-0">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="mb-2">{title}</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text className="m-0">{category}</Card.Text>
            <Badge bg="dark" pill>
              {price} $
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </Col>
    // </div>
  );
};

export default SingleBook;
