import { Link } from 'react-router-dom';
import type { CharacterDto } from '../features/characters/contracts/character.dto';
import { Header } from '../../../ui/Header';

type Props = {
  characters: CharacterDto[];
};

export const Characters = ({ characters }: Props) => {
  return (
    <div>
      <div className="space-y-4">
        {characters.map((elem) => (
          <div key={elem.id} className="flex gap-2">
            <img src={elem.image} className="rounded-full h-24" />
            <div>
              <Header variant="h2">
                <Link to={`/characters/${elem.id}`}>{elem.name}</Link>
              </Header>
              <p className="text-slate-500">ID: {elem.id}</p>
              <p className="text-slate-500">{elem.status}</p>
              <p className="text-slate-500">{elem.species}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
