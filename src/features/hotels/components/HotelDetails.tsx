import { Link } from 'react-router-dom';
import type { HotelDto } from '../contracts/hotel.dto';
import { Button } from '../../../ui/Button';

type Props = {
  hotel: HotelDto;
};

export const HotelDetails = ({ hotel }: Props) => {
  const handleReserve = (hotel: HotelDto) => {
    //
    sessionStorage.setItem('hotel', JSON.stringify(hotel));
    // sessionStorage.getItem('hotel'); // next screen
  };

  return (
    <div className="space-y-2">
      <div>
        <h2>{hotel.fields.name}</h2>
        <p>{hotel.fields.price}</p>
      </div>
      <div>
        <Link to="/hotels" className="text-blue-500">
          Back to hotels
        </Link>
      </div>
      <div>
        <Button label="Reserve" onClick={() => handleReserve(hotel)} />
      </div>
    </div>
  );
};
