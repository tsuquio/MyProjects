document.addEventListener('DOMContentLoaded', () => {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDataInput = document.getElementById('cart-data');
    const orderTotalInput = document.getElementById('order-total');
    const checkoutForm = document.getElementById('checkout-form');
    const orderItemsList = document.getElementById('order-items');
    const orderTotalDisplay = document.getElementById('order-total-display');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const deliveryFee = 49.00;

    const total = subtotal + deliveryFee;

    cartDataInput.value = JSON.stringify(cart);
    orderTotalInput.value = total.toFixed(2);

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>x${item.quantity}</span>
            <span>${item.name}</span>
            <span>P${(item.price * item.quantity).toFixed(2)}</span>
            <div style="width: 50px; height: 50px; overflow: hidden; margin-left: 10px;"> 
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: auto;">
            </div>
        `;
        orderItemsList.appendChild(li);
    });

    const summaryHtml = `
        <li>Subtotal <span>P${subtotal.toFixed(2)}</span></li>
        <li>Delivery fee <span>P${deliveryFee.toFixed(2)}</span></li>
        <li style="font-weight: bold;">Total <span>P${total.toFixed(2)}</span></li>
    `;
    orderTotalDisplay.innerHTML = summaryHtml;

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const cartData = JSON.parse(cartDataInput.value);
        const orderTotal = orderTotalInput.value;

        const order = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            items: cartData,
            total: orderTotal
        };

        console.log("Order submitted:", order);

    });
});

document.addEventListener("DOMContentLoaded", function () {
    const placeOrderBtn = document.getElementById("place-order-btn");
    const paymentModal = document.getElementById("payment-modal");
    const closeModal = document.getElementById("close-modal");
    const gcashBtn = document.getElementById("gcash-btn");
    const codBtn = document.getElementById("cod-btn");
    const gcashDetails = document.getElementById("gcash-details");

    paymentModal.style.display = "none";
    gcashDetails.style.display = "none";

    placeOrderBtn.addEventListener("click", function () {
        paymentModal.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        paymentModal.style.display = "none";
        gcashDetails.style.display = "none"; 
    });

    gcashBtn.addEventListener("click", function () {
        gcashDetails.style.display = "block";
    });

    codBtn.addEventListener("click", function () {
        alert("You selected Cash on Delivery. Your order has been placed!");
        paymentModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === paymentModal) {
            paymentModal.style.display = "none";
            gcashDetails.style.display = "none";
        }
    });
});