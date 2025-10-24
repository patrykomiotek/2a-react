import { Characters } from '../features/characters/components/Characters';
import type { CharacterDto } from '../features/characters/contracts/character.dto';
import { useApi } from '../hooks/useApi';

type ApiResults = {
  results: CharacterDto[];
};

export const CharactersPage = () => {
  const { isLoading, isError, data } = useApi<ApiResults>(
    'https://rickandmortyapi.com/api/character',
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

  return <Characters characters={characters} />;
};
