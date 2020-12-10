import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Props } from './types';
import Rating from 'components/Rating';
import css from './styles.module.css';

const Product: React.FC<Props> = ({
  _id,
  image,
  name,
  rating,
  numReviews,
  price,
}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div">
            <strong>{name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={rating} text={`${numReviews} reviews`} />
        </Card.Text>

        <Card.Text className={css.price} as="h3">
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
