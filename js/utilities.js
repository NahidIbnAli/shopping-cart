function getUpdateQuantity(elementId, isIncrease){
    const productQuantityString = document.getElementById(elementId);
    const productQuantity = parseInt(productQuantityString.value);
    let updateQuantity;
    if(isIncrease){
        updateQuantity = productQuantity + 1;
    }
    else{
        updateQuantity = productQuantity - 1;
    }
    productQuantityString.value = updateQuantity;
    return updateQuantity;
}

function getUpdatePrice(quantity, price){
    const updatePrice = quantity * price;
    return updatePrice;
}

function setUpdatePrice(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getSubTotal(elementOne, elementTwo){
    const productOneString = document.getElementById(elementOne);
    const productOne = parseInt(productOneString.innerText);
    const productTwoString = document.getElementById(elementTwo);
    const productTwo = parseInt(productTwoString.innerText);
    const subTotal = productOne + productTwo;
    return subTotal;
}

function getTaxAmount(subTotal){
    const taxAmountString = (subTotal * 0.1).toFixed(2)
    const taxAmount = parseFloat(taxAmountString);
    return taxAmount;
}

function getTotalAmount(subTotal, taxAmount){
    const totalPrice = subTotal + taxAmount;
    return totalPrice;
}

function closeProduct(elementId){
    const element = document.getElementById(elementId);
    element.style.display = 'none';
}