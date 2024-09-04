let cart = [];
let totalPrice = 0;

// Fonction pour ajouter un produit au panier
function addToCart(product, price) {
    cart.push({ product, price });
    updateCartIcon();
    updateCart();
}

// Fonction pour mettre à jour le nombre d'articles dans l'icône du panier
function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Fonction pour ouvrir le pop-up du panier
function openCart() {
    const cartElement = document.getElementById('cart-popup');
    cartElement.classList.remove('hidden');
    updateCart();
}

// Fonction pour fermer le pop-up du panier
function closeCart() {
    const cartElement = document.getElementById('cart-popup');
    cartElement.classList.add('hidden');
}

// Fonction pour ouvrir le pop-up Premium
function openPremiumPopup() {
    const premiumPopup = document.getElementById('premium-popup');
    premiumPopup.classList.remove('hidden');
}

// Fonction pour fermer le pop-up Premium
function closePremiumPopup() {
    const premiumPopup = document.getElementById('premium-popup');
    premiumPopup.classList.add('hidden');
}

// Fonction pour mettre à jour le contenu du panier
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

// Fonction pour procéder au paiement via PayPal
function checkout() {
    const paypalURL = `https://www.paypal.me/FortxGlitchoff/${totalPrice}`;
    alert('Please take a screenshot of your cart summary before proceeding to PayPal.');
    window.location.href = paypalURL;
}

// Fonction pour s'abonner
function subscribe(amount, mesh) {
    const paypalURL = `https://www.paypal.me/FortxGlitchoff/${amount}`;
    alert(`You are subscribing to receive ${mesh} mesh per month for $${amount}.`);
    window.location.href = paypalURL;
}
