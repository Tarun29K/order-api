import { orderHandler } from '../../handlers/orderHandler.js';

const order = {
    orderID: '550e8400-e29b-41d4-a716-446655440000',
    customerEmail: 'sample@gmail.com',
    items: [
        {
        productID: 'P01',
        quantity: 1,
        price: 70
        },
        {
        productID: 'P02',
        quantity: 2,
        price: 20
        }
    ]
};

describe('Order Handler', () => {
    test('total cost calculation', async () => {
        const response = await orderHandler({ body: order });
        const body = JSON.parse(response.body);
        
        expect(response.statusCode).toBe(200);
        expect(body.totalCost).toBe(110);
    });

    test('priority shipping', async () => {
        const response = await orderHandler({ body: order });
        const body = JSON.parse(response.body);

        expect(body.isPriorityShipping).toBe(true);
    });


})