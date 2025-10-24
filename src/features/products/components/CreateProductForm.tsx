import { useForm, type SubmitHandler } from 'react-hook-form';

import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';

interface CreateProductDto {
  name: string;
  description: string;
  price: number;
}

export const CreateProductForm = () => {
  const { register, handleSubmit } = useForm<CreateProductDto>();
  // const [passwordError, setPasswordError] = useState(false);

  const handleCreateProduct: SubmitHandler<CreateProductDto> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreateProduct)}>
      <div className="space-y-2">
        <Input {...register('name')} label="Name" />

        <Input {...register('description')} label="Description" />
        {/* <p className="text-red-500" ref={passwordErrorFieldRef}></p> */}

        <Input {...register('price', { valueAsNumber: true })} label="Price" />
      </div>
      <div>
        <Button type="submit" label="Send" />
      </div>
    </form>
  );
};
