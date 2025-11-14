import { useForm, type SubmitHandler } from 'react-hook-form';
import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';
import { customerSchema, type Customer } from '../contracts/customer.dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

type Props = {
  defaultValues?: Partial<Customer>;
};

export const CustomerForm = ({ defaultValues }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Customer>({
    resolver: zodResolver(customerSchema),
    defaultValues,
  });
  const navigate = useNavigate();

  const handleFormSubmit: SubmitHandler<Customer> = (data) => {
    console.log({ data });
    sessionStorage.setItem('customer', JSON.stringify(data));
    navigate('/reservation-summary');
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <div>
          <Input
            label="First Name"
            {...register('firstName')}
            error={errors.firstName}
          />
        </div>
        <div>
          <Input
            label="Last Name"
            {...register('lastName')}
            error={errors.lastName}
          />
        </div>
        <div>
          <Input label="E-mail" {...register('email')} error={errors.email} />
        </div>
        <div>
          <Input
            label="Phone"
            type="number"
            {...register('phone', { valueAsNumber: true })}
            error={errors.phone}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <Button label="Confirm" />
      </div>
    </form>
  );
};
