// import { useEffect, useState } from "react";
import type { CharacterDto } from '../contracts/character.dto';

// interface CharacterDto {
//   id: number;
//   image: string;
//   name: string;
//   status: "Alive" | "Dead";
//   species: string;
// }

// type ApiResponse<T> = {
//   isLoading: boolean;
//   isError: boolean;
//   data: T;
// };

type Props = {
  character: CharacterDto;
};

export const CharacterDetails = ({ character }: Props) => {
  // const [state, setState] = useState<ApiResponse<CharacterDto | undefined>>({
  //   isLoading: true,
  //   isError: false,
  //   data: undefined,
  // });

  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const [data, setData] = useState<CharacterDto[]>([]);

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character/2")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         // setIsError(true);
  //         setState({
  //           ...state,
  //           isError: true,
  //         });
  //       }
  //     })
  //     .then((data) => {
  //       // setIsLoading(false);
  //       // setData(data.results);
  //       console.log("results: ", data.results);
  //       console.log("current state: ", state, "new state: ", {
  //         ...state,
  //         data: data.results,
  //       });
  //       setState({
  //         ...state,
  //         data: data, // data.results
  //         isLoading: false,
  //       });
  //     })
  //     .catch(() => {
  //       // setIsLoading(false);
  //       // setIsError(true);
  //       setState({
  //         ...state,
  //         isError: true,
  //       });
  //     })
  //     .finally(() => {
  //       // setIsLoading(false);
  //       // setState({
  //       //   ...state,
  //       //   isLoading: false,
  //       // });
  //     });
  // }, []);

  // const { isLoading, isError, data } = state;

  return (
    <div>
      <div className="space-y-4">
        <div key={character.id} className="flex gap-2">
          <img src={character.image} className="rounded-full h-24" />
          <div>
            <h2 className="text-2xl">{character.name}</h2>
            <p className="text-slate-500">{character.status}</p>
            <p className="text-slate-500">{character.species}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
