import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'hooks/useFetch';
import Card from 'components/Card';
import Spinner from 'components/Spinner';
import Error from 'components/Error';
import Full from 'templates/Full';
import Info from 'components/Info';


const Article: FC<{}> = () => {
  let { slug } = useParams<{slug: string}>();
  const id = slug?.split('-').slice(-1)[0];

  const { data, loading, error } = useFetch({
    url: parseInt(id) > 0 ? `${process.env.REACT_APP_ARTICLES_API_URL}/${id}` : '',
    options: undefined,
    redirect: '/not-found'
  });

  return (
    <Full>
      <div className="container py-5">
        {loading && <Spinner />}
        {data && <Card item={data} detailsMode />}
        {!loading && !error && !data && <Info />}
        {error && <Error e={error} />}
      </div>
    </Full>
  );
};

export default Article;
