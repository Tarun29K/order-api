const orderSchema = {
    type: 'object',
    required: ['body'],
    properties: {
        body: {
            type: 'object',
            required: ['orderID', 'customerEmail', 'items'],
            properties: {
                orderID: {
                    type: 'string',
                    format: 'uuid'
                },
                customerEmail: {
                    type: 'string',
                    format: 'email'
                },
                items: {
                    type: 'array',
                },
                discountCode: {
                    type: 'string'
                }
            }
        }
    }
}

export { orderSchema };