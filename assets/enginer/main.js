let products = [];
function addProducts() {
    const productInput = document.getElementById(`product`);
    const priceInput = document.getElementById(`price`);

    const product = productInput.value;
    const price = parseFloat(priceInput.value);

    if (product && !isNaN(price)) {
        products.push({ product, price });
        productInput.value = "";
        priceInput.value = "";
    }
    else {
        alert(`Por favor insíra produto e preço válidos`)
    }

};
function calculateTotal(){
    let total = 0;
    products.forEach(item => {
        total +=item.price;
    });
    const totalAmount = document.getElementById(`totalAmount`);
    totalAmount.textContent = `${total.toFixed(2)}`;
};

function reset(){
    products = [];
    const totalAmount = document.getElementById(`totalAmount`);
    totalAmount.textContent = `Valor a Pagar`;
}


