interface OrderResponse {
    success: number,
    message: string,
    totalCost: number,
    isPriorityShipping?: boolean
}

export type { OrderResponse };