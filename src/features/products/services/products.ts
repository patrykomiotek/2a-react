import type { CreateProductDto } from '../contracts/createProduct';
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

export const createProduct = async (data: CreateProductDto) => {
  return fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      records: [{ fields: data }],
    }),
  });
};
