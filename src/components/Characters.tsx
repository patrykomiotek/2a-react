import { useEffect, useState } from "react";

interface CharacterDto {
  id: number;
  image: string;
  name: string;
  status: "Alive" | "Dead";
  species: string;
}

type ApiResponse = {
  isLoading: boolean;
  isError: boolean;
  data: CharacterDto[];
};

export const Characters = () => {
  const [state, setState] = useState<ApiResponse>({
    isLoading: true,
    isError: false,
    data: [],
  });

  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [data, setData] = useState<CharacterDto[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
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
          data: data.results,
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

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Oh no! An error has occurred! Please try again...</p>}
      <div className="space-y-4">
        {data.map((elem) => (
          <div key={elem.id} className="flex gap-2">
            <img src={elem.image} className="rounded-full h-24" />
            <div>
              <h2 className="text-2xl">{elem.name}</h2>
              <p className="text-slate-500">{elem.status}</p>
              <p className="text-slate-500">{elem.species}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
