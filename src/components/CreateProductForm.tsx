import { useForm } from 'react-hook-form';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const CreateProductForm = () => {
  const { register, handleSubmit } = useForm();
  // const [passwordError, setPasswordError] = useState(false);

  const handleCreateProduct = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleCreateProduct)}>
      <div className="space-y-2">
        <Input {...register('name')} label="Name" />

        <Input {...register('description')} label="Description" />
        {/* <p className="text-red-500" ref={passwordErrorFieldRef}></p> */}

        <Input {...register('price')} label="Price" />
      </div>
      <Button type="submit" label="Send" />
    </form>
  );
};
