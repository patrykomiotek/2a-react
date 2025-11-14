import { Link, useNavigate } from 'react-router-dom';
import type { HotelDto } from '../contracts/hotel.dto';
import { Button } from '../../../ui/Button';
import { currencyFormatter } from '../../../shared/formatters/currencyFormatter';
import { Header } from '../../../ui/Header';

type Props = {
  hotel: HotelDto;
};

export const HotelDetails = ({ hotel }: Props) => {
  const naviagate = useNavigate();

  const handleReserve = (hotel: HotelDto) => {
    //
    sessionStorage.setItem('hotel', JSON.stringify(hotel));
    // sessionStorage.getItem('hotel'); // next screen
    naviagate('/customer-form');
  };

  return (
    <div className="space-y-2">
      <div>
        <Header variant="h2">{hotel.fields.name}</Header>
        <p className="text-slate-600">
          {currencyFormatter(hotel.fields.price)}
        </p>
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
