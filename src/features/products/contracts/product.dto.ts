export interface ProductDto {
  id: string;
  createdTime: string;
  fields: {
    name: string;
    description: string;
    price: number;
    created_at: string;
  };
}
