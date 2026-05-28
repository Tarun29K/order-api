import { z } from "zod";
import { OrderItemSchema } from "./orderItemSchema.js";

const OrderSchema = z.object({
    orderID: z.uuid(),
    customerEmail: z.email(),
    items: z.array(OrderItemSchema),
    discountCode: z.string().optional()
});

type Order = z.infer<typeof OrderSchema>;

export type { Order };
export { OrderSchema }; 
