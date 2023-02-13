document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const updateQuantity = getUpdateQuantity('phone-quantity-field', true);
    const updatePrice = getUpdatePrice(updateQuantity, 1219);
    setUpdatePrice('phone-price-field', updatePrice);
    const subTotal = getSubTotal('phone-price-field', 'case-price-field');
    setUpdatePrice('subtotal-field', subTotal);
    const taxAmount = getTaxAmount(subTotal);
    setUpdatePrice('tax-field', taxAmount);
    const totalAmount = getTotalAmount(subTotal, taxAmount);
    setUpdatePrice('total-final-field', totalAmount);
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const updateQuantity = getUpdateQuantity('phone-quantity-field', false)
    const updatePrice = getUpdatePrice(updateQuantity, 1219);
    setUpdatePrice('phone-price-field', updatePrice);
    const subTotal = getSubTotal('phone-price-field', 'case-price-field');
    setUpdatePrice('subtotal-field', subTotal);
    const taxAmount = getTaxAmount(subTotal);
    setUpdatePrice('tax-field', taxAmount);
    const totalAmount = getTotalAmount(subTotal, taxAmount);
    setUpdatePrice('total-final-field', totalAmount);
})
document.getElementById('btn-phone-close').addEventListener('click', function(){
    closeProduct('close-phone');
})
