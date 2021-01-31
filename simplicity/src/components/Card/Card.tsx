import { FC } from "react";
import { randomDateAfterDate } from "utils/helpers";

export type CardProps = {
  index: number;
  title: string;
  description: string;
};

const Card: FC<CardProps> = ({ title, description, index }) => {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={`https://picsum.photos/200/200?random=${index}`} alt="random" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-info">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-info">
              Bookmark
            </button>
          </div>
          <small className="text-muted">{randomDateAfterDate(new Date(), 100)}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
