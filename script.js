const cart = [];

const cartItems = document.querySelector("#cart-items");
const totalDisplay = document.querySelector(".fullprice");

const buttons = document.querySelectorAll(".wkap");



function displayCart() {
    cartItems.innerHTML = "";

    cart.forEach((product) => {
        const li = document.createElement("li");

        const subtotal = product.price * product.quantity;

        li.textContent =
            product.name +
            " - $" + product.price.toFixed(2) +
            " x " + product.quantity +
            " = $" + subtotal.toFixed(2);

        cartItems.appendChild(li);
    });
};



function calculateTotal() {
    let total = 0;

    cart.forEach((product) => {
        total = total + product.price * product.quantity;
    });

    totalDisplay.textContent = "$" + total.toFixed(2);
};


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const productcard = button.closest(".products");
        const name = productcard.querySelector(".name").textContent;
        const pricetext = productcard.querySelector(".Prices span").textContent;
        const price = Number(pricetext.replace("$", ""));

        

       
const existingProduct = cart.find((product) => {
    return product.name === name;
});

if (existingProduct) {
    existingProduct.quantity++;
} else {
    cart.push({
        name: name,
        price: price,
        quantity: 1
    });
}

displayCart();
calculateTotal();
        
       
    });
});
