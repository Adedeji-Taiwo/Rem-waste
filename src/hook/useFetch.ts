import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";
import FetchState from "../types/fetch";



const useFetch = (url: string, method: Method, options?: AxiosRequestConfig) => {
  const [state, setState] = useState<FetchState>({ data: null, loading: true, error: null});

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });
      try {
        const response = await axios({
          url,
          method,
          ...options,
        });
        if (isMounted) {
          setState({ data: response.data, loading: false, error: null });
        }
      } catch (error) {
        if (isMounted) {
          setState({ data: null, loading: false, error: (error as Error).message });
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, method, options]);

  return state;
}

export default useFetch;
