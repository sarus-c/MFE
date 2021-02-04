import { FC } from 'react';
import { Article } from 'utils/types';

export type CardProps = {
  item: Article;
};

const Card: FC<CardProps> = ({ item }) => (
  <div className="card mb-4 shadow-sm">
    <img
      src={item.img}
      alt="random"
      className="card-img-top"
    />
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <div className="card-text mb-3">{item.body}</div>
      <div className="d-flex justify-content-between align-items-center">
        {item.action}
        <small className="text-muted">{item.date}</small>
      </div>
    </div>
  </div>
);

export default Card;
