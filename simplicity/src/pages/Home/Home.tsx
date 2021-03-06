import React, { FC } from 'react';
import List from 'components/List';
import Intro from 'components/Intro';
import useFetch from 'hooks/useFetch';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import Full from 'templates/Full';
import Info from 'components/Info';
import { Link } from 'react-router-dom';
import { randomDateAfterDate, slugify } from 'utils/helpers';
import { Article } from 'utils/types';

const Home: FC<{}> = () => {
  const { data, loading, error } = useFetch({
    url: process.env.REACT_APP_ARTICLES_API_URL || '',
  });

  const items = Array.isArray(data) ? data.slice(0, 12) : null;
  const articles: Article[] = [];
  items?.forEach((x) => {
    articles.push({
      id: x.id,
      img: `https://picsum.photos/400/250?random=${x.id}`,
      title: `${x.title.slice(0, 25)}...`,
      body: `${x.body.slice(0, 70)}...`,
      action: (
        <div className="btn-group">
          <Link
            to={`/article/${slugify(`${x.title}-${x.id}`)}`}
            className="btn btn-sm btn-outline-info"
          >
            View
          </Link>

          <button type="button" className="btn btn-sm btn-outline-info">
            Bookmark
          </button>
        </div>
      ),
      date: randomDateAfterDate(new Date(), 100),
    });
  });

  return (
    <Full>
      <Intro>
        <h1>Random articles</h1>
        <p className="lead text-muted">
          Want to read something and you don't know what? Click "Show me the
          article!" and I will try to find you one.
          You didn't find something interesting on this list? Click "Shuffle"
          and I will bring you new ones.
        </p>
        <p>
          <button type="button" className="btn btn-primary my-2 mr-2">
            Show me the article!
          </button>
          <button type="button" className="btn btn-secondary my-2 mr-2">
            Shuffle
          </button>
        </p>
      </Intro>

      <div className="container py-5 bg-light">
        <div className="row">
          {loading && (
            <div className="col-12">
              <Spinner />
            </div>
          )}

          {articles.length > 0 && <List items={articles} />}
          {!loading && !error && (articles.length < 1) && (
            <div className="col-12">
              <Info />
            </div>
          )}

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
