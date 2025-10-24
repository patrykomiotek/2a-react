import { useEffect, useState } from 'react';

interface ProductDto {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    price: number;
    created_at: string;
  };
}

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const ProductsPage = () => {
  const [data, setData] = useState<ProductDto[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/products`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.records);
      });
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Products list</h1>
      {data.map((elem) => (
        <div key={elem.id}>
          <h2>{elem.fields.name}</h2>
          <p>{elem.fields.description}</p>
        </div>
      ))}
    </div>
  );
};
