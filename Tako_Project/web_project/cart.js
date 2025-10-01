

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const cartPanel = document.getElementById('cart-panel');

    cartItemsList.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsList.innerHTML = '<li class="empty">Your bag is empty. Add something from the menu.</li>';
        subtotalElement.textContent = 'P 0.00';
        totalElement.textContent = 'P 49.00';
        return;
    }

    let subtotal = 0;
    cartItems.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            <div class="cart-item-details">
                <span class="cart-item-remove" onclick="removeItem(${index})">🗑️</span>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${item.quantity || 1}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <span>${item.name}</span>
            </div>
            <span>P${(item.price * (item.quantity || 1)).toFixed(2)}</span>
        `;
        cartItemsList.appendChild(listItem);
        subtotal += item.price * (item.quantity || 1);
    });

    subtotalElement.textContent = `P ${subtotal.toFixed(2)}`;
    const deliveryFee = 49.00;
    const total = subtotal + deliveryFee;
    totalElement.textContent = `P ${total.toFixed(2)}`;

    cartPanel.classList.add('show');
}

function goBack() {
    window.history.back();
}

function closeCart() {
    const cartPanel = document.getElementById('cart-panel');
    cartPanel.classList.remove('show');
}

function increaseQuantity(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cartItems[index].quantity) {
        cartItems[index].quantity = 1;
    }
    cartItems[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
}

function decreaseQuantity(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        localStorage.setItem('cart', JSON.stringify(cartItems));
        displayCart();
    }
}

function removeItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    displayCart();
}

function proceedToCheckout() {
    alert("Proceeding to checkout!");
}