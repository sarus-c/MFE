import React, { FC } from "react";
import useFetch from "hooks/useFetch";
import Card from "components/Card";
import Spinner from "components/Spinner";
import Error from "components/Error";

type ListProps = {};

const List: FC<ListProps> = () => {
  const { response, loading, error } = useFetch({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  const items = Array.isArray(response) ? response.slice(0, 12) : null;

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          {loading && (
            <div className="col-12">
              <Spinner />
            </div>
          )}
          {items &&
            items.map((x: any, index: number) => (
              <div className="col-md-4" key={x.id}>
                <Card
                  title={x.title}
                  description={`${x.body.slice(0, 100)}...`}
                  index={index}
                />
              </div>
            ))}
          {error && (
            <div className="col-12">
              <Error e={error} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
