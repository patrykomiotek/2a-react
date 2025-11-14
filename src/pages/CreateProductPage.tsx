// const API_URL = import.meta.env.VITE_API_URL;
// const API_TOKEN = import.meta.env.VITE_API_TOKEN;

import { CreateProductForm } from '../features/products/components/CreateProductForm';
import { Header } from '../ui/Header';

export const CreateProductPage = () => {
  return (
    <div>
      <Header variant="h1">Create product</Header>

      <CreateProductForm />
    </div>
  );
};
