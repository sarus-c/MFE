import { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router';

type FetchProp = {
  url: string;
  options?: RequestInit | undefined;
  redirect?: string;
};

type FetchResult = {
  data: any;
  error: Error | null;
  loading: boolean;
};

const useFetch = ({ url, options, redirect }: FetchProp): FetchResult => {
  const history = useHistory();

  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const redirectTo = useCallback(
    (url: string = '/not-found') => {
      history.push({ pathname: url });
    },
    [history]
  );

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const doFetch = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, options);

        if (res.status === 200) {
          const json = await res.json();
          if (!signal.aborted) {
            setData(json);
          }
        } else if (res.status === 404) {
          redirectTo();
        } else {
          if (!signal.aborted) {
            setError(
              new Error(`Something went wrong.Status code: ${res.status}`)
            );
          }
        }
      } catch (e) {
        if (!signal.aborted) {
          setError(e);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    if (url.trim().length > 0) {
      doFetch();
    } else {
      if (redirect?.trim()) {
        redirectTo(redirect?.trim());
      } else {
        setData([]);
      }
    }

    return () => abortController.abort();
  }, [history, options, redirect, redirectTo, url]);

  return { data, error, loading };
};

export default useFetch;
