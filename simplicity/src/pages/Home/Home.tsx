import React, { FC } from 'react';
import List from 'components/List';
import Intro from 'components/Intro';
import useFetch from 'hooks/useFetch';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import Full from 'templates/Full';

const Home: FC<{}> = () => {
  const { data, loading, error } = useFetch({
    url: 'https://jsonplaceholder.typicode.com/posts',
  });

  const items = Array.isArray(data) ? data.slice(0, 12) : null;

  return (
    <Full>
      <Intro />
      <div className="container py-5 bg-light">
        <div className="row">
          {loading && (
            <div className="col-12">
              <Spinner />
            </div>
          )}

          <List items={items} />

          {error && (
            <div className="col-12">
              <Error e={error} />
            </div>
          )}
        </div>
      </div>
    </Full>
  );
};

export default Home;
