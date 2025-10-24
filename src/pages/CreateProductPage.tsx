// const API_URL = import.meta.env.VITE_API_URL;
// const API_TOKEN = import.meta.env.VITE_API_TOKEN;

import { CreateProductForm } from '../features/products/components/CreateProductForm';

export const CreateProductPage = () => {
  return (
    <div>
      <h1 className="text-3xl">Create product</h1>

      <CreateProductForm />
    </div>
  );
};
