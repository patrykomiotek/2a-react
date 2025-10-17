import { useEffect, useState } from 'react';

type ApiResponse<D> = {
  isLoading: boolean;
  isError: boolean;
  data: D | undefined;
};

// const { isLoading, isError, data } = useApi<CharacterDto>('http://example.com');
export const useApi = <T>(url: string) => {
  // fetcher: string | Function
  const [state, setState] = useState<ApiResponse<T>>({
    isLoading: true,
    isError: false,
    data: undefined,
  });

  useEffect(() => {
    fetch(url) // fetcher()
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setState({
            ...state,
            isError: true,
          });
        }
      })
      .then((data) => {
        setState({
          ...state,
          data: data, // data.results
          isLoading: false,
        });
      })
      .catch(() => {
        setState({
          ...state,
          isError: true,
        });
      });
  }, []);

  return state;
};
