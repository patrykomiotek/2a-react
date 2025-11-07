import { z } from 'zod';

export const customerSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email(),
  phone: z.number(),
});

export type Customer = z.infer<typeof customerSchema>;
