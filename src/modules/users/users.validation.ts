import { z } from 'zod';

const fullNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(15, { message: 'first name can not be more than 15 characters' }),
  lastName: z
    .string()
    .max(15, { message: 'last name can not be more than 15 characters' }),
});

// Define validation schema for TAddress
const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const orderValidationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userValidationSchema = z.object({
  userId: z.number(),
  username: z
    .string()
    .min(5, { message: 'user name must contain at least 5 characters' })
    .max(15, { message: 'user name can not be more than 15 characters' }),
  password: z.string(),
  fullName: fullNameValidationSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: addressValidationSchema,
  orders: z.array(orderValidationSchema).optional(),
});

export default userValidationSchema;
