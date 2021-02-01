import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { randomDateAfterDate, slugify } from 'utils/helpers';

export type CardProps = {
  item: any;
  detailsMode?: boolean;
};

const Card: FC<CardProps> = ({ item, detailsMode = false }) => (
  <div className="card mb-4 shadow-sm">
    <img src={`https://picsum.photos/800/400?random=${item.id}`} alt="random" />
    <div className="card-body">
      <h5 className="card-title">{detailsMode ? item.title : `${item.title.slice(0, 25)}...`}</h5>
      <p className="card-text">
        {detailsMode ? item.body : `${item.body.slice(0, 70)}...`}
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          {!detailsMode && (
            <Link
              to={`/${slugify(`${item.title}-${item.id}`)}`}
              className="btn btn-sm btn-outline-info"
            >
              View
            </Link>
          )}
          <button type="button" className="btn btn-sm btn-outline-info">
            Bookmark
          </button>
        </div>
        <small className="text-muted">
          {randomDateAfterDate(new Date(), 100)}
        </small>
      </div>
    </div>
  </div>
);

export default Card;
