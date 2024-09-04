let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    updateCartIcon();
    updateCart();
}

function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function openCart() {
    const cartElement = document.getElementById('cart-popup');
    cartElement.classList.remove('hidden');
    updateCart();
}

function closeCart() {
    const cartElement = document.getElementById('cart-popup');
    cartElement.classList.add('hidden');
}

function openPremiumPopup() {
    const premiumPopup = document.getElementById('premium-popup');
    premiumPopup.classList.remove('hidden');
}

function closePremiumPopup() {
    const premiumPopup = document.getElementById('premium-popup');
    premiumPopup.classList.add('hidden');
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = totalPrice;
}

function checkout() {
    const paypalURL = `https://www.paypal.me/FortxGlitchoff/${totalPrice}`;
    alert('Please take a screenshot of your cart summary before proceeding to PayPal.');
    window.location.href = paypalURL;
}

function subscribe(amount, mesh) {
    const paypalURL = `https://www.paypal.me/FortxGlitchoff/${amount}`;
    alert(`Please take a screenshot when making your purchase and open a ticket on the Discord server`);
    window.location.href = paypalURL;
}
