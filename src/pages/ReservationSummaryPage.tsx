import type { Customer } from '../features/hotels/contracts/customer.dto';
import type { HotelDto } from '../features/hotels/contracts/hotel.dto';
import { currencyFormatter } from '../shared/formatters/currencyFormatter';

export const ReservationSummaryPage = () => {
  const hotelItem = sessionStorage.getItem('hotel');
  let hotel: HotelDto | null = null;
  if (hotelItem) {
    hotel = JSON.parse(hotelItem);
  }

  const customerItem = sessionStorage.getItem('customer');
  let customer: Customer | null = null;
  if (customerItem) {
    customer = JSON.parse(customerItem);
  }

  // console.log({ hotel, customer });
  const renderHotel = () => {
    if (hotel) {
      return (
        <div>
          <h2 className="text-2xl">Hotel</h2>
          <h3 className="text-xl">{hotel.fields.name}</h3>
          <p>{currencyFormatter(hotel.fields.price)}</p>
        </div>
      );
    }
    return null;
  };

  const renderCustomer = () => {
    if (customer) {
      return (
        <div>
          <h2 className="text-2xl">Customer</h2>
          <p>
            {customer.firstName} {customer.lastName}
          </p>
          <p>
            {customer.email}, {customer.phone}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="space-y-2">
      <h1 className="text-3xl">Summary</h1>
      {renderHotel()}
      {renderCustomer()}
    </div>
  );
};
