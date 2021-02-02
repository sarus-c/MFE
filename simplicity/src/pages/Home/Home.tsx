import React, { FC } from 'react';
import List from 'components/List';
import Intro from 'components/Intro';
import useFetch from 'hooks/useFetch';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import Full from 'templates/Full';
import Info from 'components/Info';

const Home: FC<{}> = () => {
  const { data, loading, error } = useFetch({
    url: process.env.REACT_APP_ARTICLES_API_URL || '',
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

          {items && items.length > 0 && <List items={items} />}
          {!loading && !error && (!items || items.length < 1) && <div className="col-12"><Info /></div>}

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
