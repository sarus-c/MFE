import React, { FC } from 'react';
import Card from 'components/Card';

type ListProps = {
  items: any[];
};

const List: FC<ListProps> = ({ items }) => (
  <>
    {items.map((item: any) => (
        <div className="col col-sm-12 col-md-6 col-lg-4" key={item.id}>
          <Card item={item} />
        </div>
      ))}
  </>
);

export default List;
