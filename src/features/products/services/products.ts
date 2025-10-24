import type { ProductDto } from '../contracts/product.dto';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const data = await response.json();

    return data.records as ProductDto[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
