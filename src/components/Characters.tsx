import { useEffect, useState } from "react";

interface CharacterDto {
  id: number;
  image: string;
  name: string;
  status: "Alive" | "Dead";
  species: string;
}

export const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<CharacterDto[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setData(data.results);
      });
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
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
