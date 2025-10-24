import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';
import {
  createProductSchema,
  type CreateProductDto,
} from '../contracts/createProduct';

export const CreateProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductDto>({
    resolver: zodResolver(createProductSchema),
  });
  // const [passwordError, setPasswordError] = useState(false);

  const handleCreateProduct: SubmitHandler<CreateProductDto> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreateProduct)}>
      <div className="space-y-2">
        <Input {...register('name')} label="Name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <Input {...register('description')} label="Description" />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <Input {...register('price', { valueAsNumber: true })} label="Price" />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>
      <div>
        <Button type="submit" label="Send" />
      </div>
    </form>
  );
};
