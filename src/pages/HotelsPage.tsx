import { HotelsList } from '../features/hotels/components/HotelsList';
import type { HotelDto } from '../features/hotels/contracts/hotel.dto';
import { fetchHotels } from '../features/hotels/services/hotels';
import { useApi } from '../hooks/useApi';

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
      <h1 className="text-3xl mb-4">Hotels list</h1>

      <HotelsList hotels={data} />
    </div>
  );
};
