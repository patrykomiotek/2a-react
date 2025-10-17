import { useEffect, useState } from "react";

interface CharacterDto {
  id: number;
  image: string;
  name: string;
  status: "Alive" | "Dead";
  species: string;
}

type ApiResponse<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T;
};

export const Character = () => {
  const [state, setState] = useState<ApiResponse<CharacterDto | undefined>>({
    isLoading: true,
    isError: false,
    data: undefined,
  });

  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [data, setData] = useState<CharacterDto[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/2")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // setIsError(true);
          setState({
            ...state,
            isError: true,
          });
        }
      })
      .then((data) => {
        // setIsLoading(false);
        // setData(data.results);
        console.log("results: ", data.results);
        console.log("current state: ", state, "new state: ", {
          ...state,
          data: data.results,
        });
        setState({
          ...state,
          data: data, // data.results
          isLoading: false,
        });
      })
      .catch(() => {
        // setIsLoading(false);
        // setIsError(true);
        setState({
          ...state,
          isError: true,
        });
      })
      .finally(() => {
        // setIsLoading(false);
        // setState({
        //   ...state,
        //   isLoading: false,
        // });
      });
  }, []);

  const { isLoading, isError, data } = state;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no! An error has occurred! Please try again...</p>;
  }

  if (!data) {
    return <p>Data invalid</p>;
  }

  return (
    <div>
      <div className="space-y-4">
        <div key={data.id} className="flex gap-2">
          <img src={data.image} className="rounded-full h-24" />
          <div>
            <h2 className="text-2xl">{data.name}</h2>
            <p className="text-slate-500">{data.status}</p>
            <p className="text-slate-500">{data.species}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
