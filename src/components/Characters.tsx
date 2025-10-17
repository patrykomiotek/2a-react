import type { CharacterDto } from "../contracts/character.dto";
import { useApi } from "../hooks/useApi";

type ApiResults = {
  results: CharacterDto[];
};

export const Characters = () => {
  const { isLoading, isError, data } = useApi<ApiResults>(
    "https://rickandmortyapi.com/api/character"
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no! An error has occurred! Please try again...</p>;
  }

  if (!data) {
    return <p>Data invalid</p>;
  }

  const characters = data.results;

  return (
    <div>
      <div className="space-y-4">
        {characters.map((elem) => (
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
