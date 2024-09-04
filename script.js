// Ouvrir le pop-up Historique des commandes
function openOrderHistoryPopup() {
    if (!user) {
        alert('You must be logged in to view order history.');
        return;
    }

    const orderHistoryPopup = document.getElementById('order-history-popup');
    orderHistoryPopup.classList.remove('hidden');
    loadPurchaseHistory();
}

// Fermer le pop-up Historique des commandes
function closeOrderHistoryPopup() {
    const orderHistoryPopup = document.getElementById('order-history-popup');
    orderHistoryPopup.classList.add('hidden');
}

// Charger l'historique des commandes
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

// Mettre à jour l'affichage du bouton d'historique
function updateOrderHistoryIcon() {
    const orderHistoryIcon = document.getElementById('order-history-icon');
    if (user) {
        orderHistoryIcon.classList.remove('hidden');
    } else {
        orderHistoryIcon.classList.add('hidden');
    }
}

// Mise à jour du bouton et de l'historique des commandes lors de la connexion
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username] && users[username] === password) {
        user = username;
        alert('Logged in successfully!');
        closeLoginPopup();
        updateOrderHistoryIcon();
        loadPurchaseHistory();
    } else {
        document.getElementById('login-error').textContent = 'Invalid username or password.';
    }
}

// Déconnexion
function logout() {
    user = null;
    updateOrderHistoryIcon();
    closePurchaseHistoryPopup();
    closeLoginPopup();
    alert('Logged out successfully!');
}
