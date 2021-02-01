import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import Card from 'components/Card';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import Full from 'templates/Full';

type ArticleProps = {};

const Article: FC<ArticleProps> = () => {
  let { slug } = useParams<{slug: string}>();
  const id = slug?.split('-').slice(-1)[0]

  const { data, loading, error } = useFetch({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });

  return (
    <Full>
      <div className="container py-5">
        {loading && <Spinner />}
        {data && <Card item={data} detailsMode />}
        {error && <Error e={error} />}
      </div>
    </Full>
  );
};

export default Article;
