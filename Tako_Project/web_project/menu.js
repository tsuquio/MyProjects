function addToCart(itemName, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: parseFloat(price), image: image, quantity: 1 }); 
    localStorage.setItem('cart', JSON.stringify(cart));

    let notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.innerText = `${itemName} has been added to your cart!`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

function addToCart(itemName, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: parseFloat(price), image: image, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));

    let notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.innerText = `${itemName} has been added to your cart!`;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);

    updateCartDisplay(); 
}

function updateCartDisplay() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = ''; 

    if (cart.length === 0) {
        cartItems.innerHTML = '<li class="empty">Your cart is empty</li>';
    } else {
        cart.forEach(item => {
            let li = document.createElement('li');
            li.innerHTML = `
                <img src="<span class="math-inline">\{item\.image\}" alt\="</span>{item.name}">
                <span><span class="math-inline">\{item\.name\}</span\>
<span\>P</span>{item.price.toFixed(2)}</span>
            `;
            cartItems.appendChild(li);
        });
    }

    calculateTotal();
}

function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.querySelector('.total-price').textContent = `P${total.toFixed(2)}`;
}

document.querySelector('.cart-icon').addEventListener('click', () => {
    document.querySelector('.cart-panel').classList.add('show');
    updateCartDisplay();
});

document.querySelector('.close-cart').addEventListener('click', () => {
    document.querySelector('.cart-panel').classList.remove('show');
});