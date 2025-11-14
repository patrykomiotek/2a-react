import { useState } from 'react';

import type { Customer } from '../features/hotels/contracts/customer.dto';
import type { HotelDto } from '../features/hotels/contracts/hotel.dto';
import { currencyFormatter } from '../shared/formatters/currencyFormatter';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ReservationSummaryPage = () => {
  const [isCancelled, setIsCancelled] = useState(false);

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
        <div className="rounded-md border-2 border-slate-400 p-4 space-y-2">
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
        <div className="rounded-md border-2 border-slate-400 p-4 space-y-2">
          <h2 className="text-2xl">Customer</h2>
          <p>
            {customer.firstName} {customer.lastName}
          </p>
          <p>
            {customer.email}, {customer.phone}
          </p>
          <Link to="/customer-form" className="text-blue-600">
            Edit
          </Link>
        </div>
      );
    }
  };

  const handleCancel = () => {
    if (confirm('Are you sure?')) {
      if (hotel && customer) {
        sessionStorage.removeItem('hotel');
        sessionStorage.removeItem('customer');
        setIsCancelled(true);
        toast.success('Reservation cancelled');
      }
    }
  };

  return (
    <div className="space-y-2">
      <h1 className="text-3xl">Summary</h1>
      {isCancelled && <h2>Reservation cancelled</h2>}
      {renderHotel()}
      {renderCustomer()}
      {hotel && customer && (
        <div>
          <Button
            label="Cancel reservation"
            bgColor="carrot"
            onClick={handleCancel}
          />
        </div>
      )}
      {!hotel && !customer && (
        <p>
          Select{' '}
          <Link to="/hotels" className="text-blue-600">
            hotel
          </Link>{' '}
          and fill customer data
        </p>
      )}
    </div>
  );
};
