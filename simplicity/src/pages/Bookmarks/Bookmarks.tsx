import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Article } from 'utils/types';
import { randomDateAfterDate, slugify } from 'utils/helpers';
import List from 'components/List';
import Intro from 'components/Intro';
import useFetch from 'hooks/useFetch';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import Full from 'templates/Full';
import Info from 'components/Info';

const Bookmarks: FC<{}> = () => {
  const { data, loading, error } = useFetch({
    url: process.env.REACT_APP_ARTICLES_API_URL || '',
  });

  const items = Array.isArray(data) ? data.slice(0, 12) : null;
  const articles: Article[] = [];
  items?.forEach((x) => {
    articles.push({
      id: x.id,
      img: `https://picsum.photos/400/200?random=${x.id}`,
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
        <h1>Your bookmarked articles</h1>
        <p className="lead text-muted">
          So... this is the list with your preferred articles.<br />
          If you want to create a fresh one, you know what to do... hit the button below 😁! 
        </p>
        <p>
          <button type="button" className="btn btn-danger my-2 mr-2">
            Clear the list!
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
              <Info title="Yep... is empty" msg="Go on the homepage, find something interesting for you, and bookmark." />
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

export default Bookmarks;
