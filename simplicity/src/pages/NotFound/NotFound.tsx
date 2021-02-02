import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Full from 'templates/Full';

const NotFound: FC<{}> = () => (
  <Full>
    <div className="container py-5">
      <div className="jumbotron">
        <h1 className="display-4">404</h1>
        <p className="lead">PAGE NOT FOUND</p>
        <hr className="my-4" />
        <p>
          We're sorry, the page you requested could not be found. Please go back
          to the homepage or contact us at contact@siplicity.com.
        </p>
        <Link className="btn btn-primary btn-lg" to="/" role="button">
          Home
        </Link>
      </div>
    </div>
  </Full>
);

export default NotFound;
