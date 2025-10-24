import { useParams } from 'react-router-dom';

import { useApi } from '../hooks/useApi';
import type { CharacterDto } from '../features/characters/contracts/character.dto';
import { CharacterDetails } from '../features/characters/components/CharacterDetails';

export const CharacterDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, data } = useApi<CharacterDto>(
    `https://rickandmortyapi.com/api/character/${id}`,
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

  return <CharacterDetails character={data} />;
};
