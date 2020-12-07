import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "components/Product";
import products from "products";

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(({ _id, image, name, rating, numReviews, price }) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product
                _id={_id}
                image={image}
                name={name}
                rating={rating}
                numReviews={numReviews}
                price={price}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
