import { useParams } from 'react-router-dom';
import type { HotelDto } from '../features/hotels/contracts/hotel.dto';
import { fetchHotel } from '../features/hotels/services/hotels';
import { useApi } from '../hooks/useApi';
import { HotelDetails } from '../features/hotels/components/HotelDetails';
import { Header } from '../ui/Header';

export const HotelDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, data } = useApi<HotelDto>(() => fetchHotel(id));

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
    <div>
      <Header variant="h1">Hotel details</Header>

      <HotelDetails hotel={data} />
    </div>
  );
};
