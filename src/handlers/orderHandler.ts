import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import { OrderSchema, type Order } from '../schemas/orderSchema.js';
import type { OrderResponse } from '../types/order.js';

const orderHandler = async (event: { body: unknown }) => {
    const order = OrderSchema.parse(event.body);
    console.log(order);
    const items = order.items;
    let orderTotal = 0;
    
    for(const item of items){
        orderTotal += item.quantity * item.price;
    }

    const responseBody: OrderResponse = {
        success: 200,
        message: "Order Processed",
        totalCost: orderTotal
    }

    if(orderTotal > 100) responseBody.isPriorityShipping = true;
    
    return {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    }
}

const handler = middy(orderHandler).use(httpJsonBodyParser()).use(httpErrorHandler());
export { handler, orderHandler };