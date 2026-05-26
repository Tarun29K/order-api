interface OrderItem {
    productID: string,
    quantity: number,
    price: number
}

interface Order {
    orderID: string,
    customerEmail: string,
    items: OrderItem[],
    discountCode?: string
}

interface OrderResponse {
    success: number,
    message: string,
    totalCost: number,
    isPriorityShipping?: boolean
}

export type { Order, OrderItem, OrderResponse };