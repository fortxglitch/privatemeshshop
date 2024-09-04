let user = null;
let cart = [];
let totalPrice = 0;

// Ajouter un compte utilisateur
function addAccount(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
        console.log('User already exists.');
        return;
    }

    users[username] = password;
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Account created successfully:', username);
}

// Exemple d'utilisation pour ajouter un compte
addAccount('admin1', 'teste');

// Se connecter
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || {};

    console.log('Attempting to log in with:', username);

    if (users[username] && users[username] === password) {
        user = username;
        alert('Logged in successfully!');
        closeLoginPopup();
        loadPurchaseHistory();
    } else {
        document.getElementById('login-error').textContent = 'Invalid username or password.';
        console.log('Login failed. Check if the username and password are correct.');
    }
}

// Déconnexion
function logout() {
    user = null;
    alert('Logged out successfully!');
    closePurchaseHistoryPopup();
    closeLoginPopup();
}

// Ajouter au panier
function addToCart(product, price) {
    if (!user) {
        alert('You must be logged in to make a purchase.');
        return;
    }

    cart.push({ product, price });
    updateCartIcon();
    updateCart();
}

// Mettre à jour l'icône du panier
function updateCartIcon() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Ouvrir le panier
function openCart() {
    const cartElement = document.getElementById('cart-popup');
    cartElement.classList.remove('hidden');
    updateCart();
}

// Fermer le panier
function closeCart() {
    const cartElement = document.getElementById('cart-popup');
    cartElement.classList.add('hidden');
}

// Ouvrir le pop-up Premium
function openPremiumPopup() {
    const premiumPopup = document.getElementById('premium-popup');
    premiumPopup.classList.remove('hidden');
}

// Fermer le pop-up Premium
function closePremiumPopup() {
    const premiumPopup = document.getElementById('premium-popup');
    premiumPopup.classList.add('hidden');
}

// Ouvrir le pop-up Connexion
function openLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.classList.remove('hidden');
}

// Fermer le pop-up Connexion
function closeLoginPopup() {
    const loginPopup = document.getElementById('login-popup');
    loginPopup.classList.add('hidden');
}

// Ouvrir le pop-up Historique d'achat
function openPurchaseHistoryPopup() {
    if (!user) {
        alert('You must be logged in to view purchase history.');
        return;
    }

    const purchaseHistoryPopup = document.getElementById('purchase-history-popup');
    purchaseHistoryPopup.classList.remove('hidden');
    loadPurchaseHistory();
}

// Fermer le pop-up Historique d'achat
function closePurchaseHistoryPopup() {
    const purchaseHistoryPopup = document.getElementById('purchase-history-popup');
    purchaseHistoryPopup.classList.add('hidden');
}

// Mettre à jour le panier
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

// Passer à PayPal
function checkout() {
    if (!user) {
        alert('You must be logged in to make a purchase.');
        return;
    }

    const paypalURL = `https://www.paypal.me/FortxGlitchoff/${totalPrice}`;
    alert('Please take a screenshot of your cart summary before proceeding to PayPal.');
    window.location.href = paypalURL;
}

// S'abonner
function subscribe(amount, mesh) {
    const paypalURL = `https://www.paypal.me/FortxGlitchoff/${amount}`;
    alert(`You are subscribing to receive ${mesh} mesh per month for $${amount}.`);
    window.location.href = paypalURL;
}

// Charger l'historique des achats
function loadPurchaseHistory() {
    if (!user) return;

    const purchaseHistory = JSON.parse(localStorage.getItem('purchaseHistory')) || {};
    const historyList = document.getElementById('purchase-history');
    historyList.innerHTML = '';

    (purchaseHistory[user] || []).forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}
