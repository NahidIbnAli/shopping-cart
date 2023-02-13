document.getElementById('btn-case-plus').addEventListener('click', function(){
    const updateQuantity = getUpdateQuantity('case-quantity-field', true);
    const updatePrice = getUpdatePrice(updateQuantity, 59);
    setUpdatePrice('case-price-field', updatePrice);
    const subTotal = getSubTotal('phone-price-field', 'case-price-field');
    setUpdatePrice('subtotal-field', subTotal);
    const taxAmount = getTaxAmount(subTotal);
    setUpdatePrice('tax-field', taxAmount);
    const totalAmount = getTotalAmount(subTotal, taxAmount);
    setUpdatePrice('total-final-field', totalAmount);
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const updateQuantity = getUpdateQuantity('case-quantity-field', false);
    const updatePrice = getUpdatePrice(updateQuantity, 59);
    setUpdatePrice('case-price-field', updatePrice);
    const subTotal = getSubTotal('phone-price-field', 'case-price-field');
    setUpdatePrice('subtotal-field', subTotal);
    const taxAmount = getTaxAmount(subTotal);
    setUpdatePrice('tax-field', taxAmount);
    const totalAmount = getTotalAmount(subTotal, taxAmount);
    setUpdatePrice('total-final-field', totalAmount);
})
document.getElementById('btn-case-close').addEventListener('click', function(){
    closeProduct('close-case');
})







/*
utilities ---> 9
phone ---> 7
case ---> 7
*/