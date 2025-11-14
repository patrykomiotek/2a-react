import { CustomerForm } from '../features/hotels/components/CustomerForm';
import type { Customer } from '../features/hotels/contracts/customer.dto';
import { Header } from '../ui/Header';

export const CustomerFormPage = () => {
  const customer = JSON.parse(
    sessionStorage.getItem('customer') || '',
  ) as Customer;

  return (
    <div className="space-y-4">
      <Header variant="h1">Customer Form</Header>
      <CustomerForm defaultValues={customer} />
    </div>
  );
};
