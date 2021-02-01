import { useState, useEffect } from 'react';

type FetchProp = {
  url: string;
  options?: RequestInit | undefined;
};

type FetchResult = {
  data: any;
  error: Error | null;
  loading: boolean;
};

const useFetch = ({ url, options }: FetchProp): FetchResult => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

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

    doFetch();

    return () => {
      abortController.abort();
    };
  }, [options, url]);

  return { data, error, loading };
};

export default useFetch;
