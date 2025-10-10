const data = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
];

export const Characters = () => {
  return (
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
  );
};
