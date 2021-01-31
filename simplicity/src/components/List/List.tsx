import React, { FC } from "react";
import Card from "components/Card";
import { CardProps } from "components/Card/Card";

type ListProps = {
  items: CardProps[];
};

const List: FC<ListProps> = ({ items }) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {items.map((x) => (
            <div className="col-md-4" key={x.title}>
              <Card title={x.title} description={x.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
