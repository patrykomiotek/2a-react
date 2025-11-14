import { CustomerForm } from '../features/hotels/components/CustomerForm';
import type { Customer } from '../features/hotels/contracts/customer.dto';

export const CustomerFormPage = () => {
  const customer = JSON.parse(
    sessionStorage.getItem('customer') || '',
  ) as Customer;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl">Customer Form</h1>
      <CustomerForm defaultValues={customer} />
    </div>
  );
};
