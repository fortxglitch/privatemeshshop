let cart = [];
let totalPrice = 0;
let user = null; // Current logged-in user

// Fonction pour ajouter un produit au panier
function addToCart(product, price) {
    if (!user) {
        alert('You must be logged in to add items to the cart.');
        return;
    }
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

// Fonction pour ouvrir le pop-up de connexion
function openLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.classList.remove('hidden');
}

// Fonction pour fermer le pop-up de connexion
function closeLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.classList.add('hidden');
}

// Fonction pour ouvrir le pop-up de l'historique des commandes
function openOrderHistoryPopup() {
    if (!user) {
        alert('You must be logged in to view order history.');
        return;
    }
    const orderHistoryPopup = document.getElementById('order-history-popup');
    orderHistoryPopup.classList.remove('hidden');
    updateOrderHistory();
}

// Fonction pour fermer le pop-up de l'historique des commandes
function closeOrderHistoryPopup() {
    const orderHistoryPopup = document.getElementById('order-history-popup');
    orderHistoryPopup.classList.add('hidden');
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
    if (!user) {
        alert('You must be logged in to proceed with the purchase.');
        return;
    }
    const paypalURL = `https://www.paypal.me/FortxGlitchoff/${totalPrice}`;
    alert('Please take a screenshot of your cart summary before proceeding to PayPal.');
    window.location.href = paypalURL;
}

// Fonction pour s'abonner
function subscribe(amount, mesh) {
    if (!user) {
        alert('You must be logged in to subscribe.');
        return;
    }
    const paypalURL = `https://www.paypal.me/FortxGlitchoff/${amount}`;
    alert(`You are subscribing to receive ${mesh} mesh per month for $${amount}.`);
    window.location.href = paypalURL;
}

// Liste des comptes d'utilisateurs
const accounts = [
    { username: 'admin1', password: 'teste', orders: [] }
];

// Fonction pour se connecter
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');

    const account = accounts.find(acc => acc.username === username && acc.password === password);

    if (account) {
        user = account;
        document.getElementById('order-history-icon').classList.remove('hidden');
        closeLoginPopup();
    } else {
        errorElement.textContent = 'Invalid username or password.';
    }
}

// Fonction pour ajouter un compte manuellement
function addAccount(username, password) {
    accounts.push({ username, password, orders: [] });
}

// Fonction pour mettre à jour l'historique des commandes
function updateOrderHistory() {
    const purchaseHistoryElement = document.getElementById('purchase-history');
    purchaseHistoryElement.innerHTML = '';

    const orders = user ? user.orders : [];
    orders.forEach(order => {
        const li = document.createElement('li');
        li.textContent = `${order.product} - $${order.price}`;
        purchaseHistoryElement.appendChild(li);
    });
}
