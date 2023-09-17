export function getTotalPrice(cartItems) {
    let totalPrice = 0;

    for (const item of cartItems) {
        const itemPrice = parseFloat(item.price);
        const itemQty = item.qty;
        totalPrice += itemPrice * itemQty;
    }

    return totalPrice.toFixed(2); 
};

export const __address = {
    firstName: "", lastName: "", address: "",
    apartment: "", phone: "", city: "", country: "", state: "", zipCode: ""
};

export const address = {
   ...__address,
   email: ""
};

export const isFormComplete = (data) => {
    for (const key in data) {
        console.log(data[key], data[key].length);
      if (data[key].length===0) {
        return false;
      }
    }
    return true;
};