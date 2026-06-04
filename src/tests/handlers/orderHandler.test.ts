import { orderHandler } from '../../handlers/orderHandler.js';

const validOrder = {
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
        const response = await orderHandler({ body: validOrder });
        const body = JSON.parse(response.body);
        
        expect(response.statusCode).toBe(200);
        expect(body.totalCost).toBe(110);
    });

    test('priority shipping', async () => {
        const response = await orderHandler({ body: validOrder });
        const body = JSON.parse(response.body);

        expect(body.isPriorityShipping).toBe(true);
    });

    test('not priority shipping', async () => {
        const response = await orderHandler({ 
            body: {
                ...validOrder,
                items: [
                    {
                    productID: 'P01',
                    quantity: 1,
                    price: 70
                    }
                ]
            }
         });
        const body = JSON.parse(response.body);
        expect(body.isPriorityShipping).toBeUndefined();
    });

});

describe('Data Validation', () => {
    const invalidEmails = ['mail', 'mail@', '@mail', 'mail.', '.mail', 'sample@mail', 'sample.com'];
    const invalidOrderId = ['123', '12a3-e123-123-123-123', '123', '550e8400-g29b-41x4-a716-446655440000'];


    invalidEmails.forEach(email => {
        test('invalid email', async () => {
            await expect(
                orderHandler({ 
                    body: {
                    ...validOrder,
                    customerEmail: email
                    } 
                })
            ).rejects.toThrow();
        })
    });

    invalidOrderId.forEach(orderId => {
        test('invalid order id', async () => {
            await expect(
                orderHandler({ 
                    body: {
                    ...validOrder,
                    orderID: orderId
                    } 
                })
            ).rejects.toThrow();
        })
    });
    
});