export function filterOrders(arrays) {
    const result = arrays.filter(order => order.total >= 100 && order.delivered);
    return result;
}  