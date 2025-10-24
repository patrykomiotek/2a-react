import { z } from 'zod';

// 1️⃣ Create Validator
export const createProductSchema = z.object({
  name: z.string().min(3, { error: 'Product name is too short' }),
  description: z.string().min(3, { error: 'Product description is too short' }),
  price: z.number().min(0, { error: 'Price must be greater or equal 0' }),
});

// 2️⃣ Create type or interface
// interface CreateProductDto {
//   name: string;
//   description: string;
//   price: number;
// }
export type CreateProductDto = z.infer<typeof createProductSchema>;
