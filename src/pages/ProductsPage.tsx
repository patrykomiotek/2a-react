import type { ProductDto } from '../features/products/contracts/product.dto';
import { fetchProducts } from '../features/products/services/products';
import { useApi } from '../hooks/useApi';
import { Header } from '../ui/Header';

export const ProductsPage = () => {
  const { isLoading, isError, data } = useApi<ProductDto[]>(fetchProducts);
  // const [data, setData] = useState<ProductDto[]>([]);

  // const loadData = async () => {
  //   const products = await fetchProducts();
  //   setData(products);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Oh no! An error has occurred! Please try again...</p>;
  }

  if (!data) {
    return <p>Data invalid</p>;
  }

  return (
    <div>
      <Header variant="h1">Products list</Header>

      <div className="space-y-4">
        {data.map((elem) => (
          <div key={elem.id}>
            <Header variant="h2">{elem.fields.name}</Header>
            <p className="text-sm text-slate-600">{elem.fields.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
