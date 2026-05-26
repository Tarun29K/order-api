const orderItemSchema = {
    type: 'object',
    required: ['productID', 'quantity', 'price'],
    properties: {
        productID: {
            type: 'string'
        },
        quantity: {
            type: 'number'
        },
        price: {
            type: 'number'
        }
    }
}

export { orderItemSchema };