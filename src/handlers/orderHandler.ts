import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpErrorHandler from '@middy/http-error-handler';
import validator from '@middy/validator';
import { transpileSchema } from '@middy/validator/transpile'
import { orderSchema } from '../schemas/orderSchema.js';
import type { OrderResponse } from '../types/order.js';

const orderHandler = async (event: { body: any; }) => {
    const order = event.body;
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

const eventSchema = transpileSchema(orderSchema);
const handler = middy(orderHandler).use(httpJsonBodyParser()).use(validator( { eventSchema } )).use(httpErrorHandler());
export { handler };