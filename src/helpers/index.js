export function getTotalPrice(cartItems) {
    let totalPrice = 0;

    for (const item of cartItems) {
        const itemPrice = parseFloat(item.price);
        const itemQty = item.qty;
        totalPrice += itemPrice * itemQty;
    }

    return totalPrice.toFixed(2); 
}