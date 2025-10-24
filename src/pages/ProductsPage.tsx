import { useEffect, useState } from 'react';
import type { ProductDto } from '../features/products/contracts/product.dto';
import { fetchProducts } from '../features/products/services/products';

export const ProductsPage = () => {
  const [data, setData] = useState<ProductDto[]>([]);

  const loadData = async () => {
    const products = await fetchProducts();
    setData(products);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Products list</h1>

      <div className="space-y-4">
        {data.map((elem) => (
          <div key={elem.id}>
            <h2 className="text-2xl">{elem.fields.name}</h2>
            <p className="text-sm text-slate-600">{elem.fields.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
