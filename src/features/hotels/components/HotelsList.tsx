import { Link } from 'react-router-dom';
import type { HotelDto } from '../contracts/hotel.dto';
import { currencyFormatter } from '../../../shared/formatters/currencyFormatter';

type Props = {
  hotels: HotelDto[];
};

export const HotelsList = ({ hotels }: Props) => {
  return (
    <div className="space-y-2">
      {hotels.map((elem) => (
        <div key={elem.id}>
          <h2>
            <Link to={`/hotels/${elem.id}`} className="text-blue-600">
              {elem.fields.name}
            </Link>
          </h2>
          <p>{currencyFormatter(elem.fields.price)}</p>
        </div>
      ))}
    </div>
  );
};
