import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Article as ArticleType } from 'utils/types';
import useFetch from 'hooks/useFetch';
import Card from 'components/Card';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import Full from 'templates/Full';
import Info from 'components/Info';
import { randomDateAfterDate } from 'utils/helpers';


const Article: FC<{}> = () => {
  let { slug } = useParams<{slug: string}>();
  const id = slug?.split('-').slice(-1)[0];

  const { data, loading, error } = useFetch({
    url: parseInt(id) > 0 ? `${process.env.REACT_APP_ARTICLES_API_URL}/${id}` : '',
    options: undefined,
    redirect: '/not-found'
  });

  let article: ArticleType | null = null;
  if (data) {
    article = {
      id: data.id,
      img: `https://picsum.photos/800/400?random=${id}`,
      title: data.title,
      body: data.body,
      action: (
        <div className="btn-group">
          <button type="button" className="btn btn-sm btn-outline-info">
            Bookmark
          </button>
        </div>
      ),
      date: randomDateAfterDate(new Date(), 100),
    }
  }

  return (
    <Full>
      <div className="container py-5">
        {loading && <Spinner />}
        {article && <Card item={article} />}
        {!loading && !error && !article && <Info />}
        {error && <Error e={error} />}
      </div>
    </Full>
  );
};

export default Article;
