import { z } from "zod";

const OrderItemSchema = z.object({
    productID: z.string(),
    quantity: z.number(),
    price: z.number()
});

type OrderItem = z.infer<typeof OrderItemSchema>;

export  { OrderItemSchema } ;
export type { OrderItem };