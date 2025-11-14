import { HotelsList } from '../features/hotels/components/HotelsList';
import type { HotelDto } from '../features/hotels/contracts/hotel.dto';
import { fetchHotels } from '../features/hotels/services/hotels';
import { useApi } from '../hooks/useApi';
import { Header } from '../ui/Header';

export const HotelsPage = () => {
  const { isLoading, isError, data } = useApi<HotelDto[]>(fetchHotels);

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
    <div className="mx-auto max-w-md">
      <Header variant="h1">Hotels list</Header>

      <HotelsList hotels={data} />
    </div>
  );
};
