// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('cart-button');
    const cartPopup = document.getElementById('cart-popup');
    const continueShoppingButton = document.getElementById('continue-shopping');
    const checkoutButton = document.getElementById('checkout');
    const createAccountForm = document.getElementById('create-account-form');
    const cartItems = document.getElementById('cart-items');
    const paypalLink = document.getElementById('paypal-link');

    cartButton.addEventListener('click', () => {
        cartPopup.classList.toggle('hidden');
    });

    continueShoppingButton.addEventListener('click', () => {
        cartPopup.classList.add('hidden');
    });

    checkoutButton.addEventListener('click', () => {
        alert('Veuillez prendre une capture d\'écran du récapitulatif de la commande avant de passer à l\'achat, car elle sera demandée.');
    });

    createAccountForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const userId = document.getElementById('userId').value;
        const username = document.getElementById('username').value;

        if (userId && username) {
            // Stocker le compte dans le stockage local
            localStorage.setItem('account', JSON.stringify({ userId, username }));
            alert('Compte créé avec succès.');
            createAccountForm.reset();
        }
    });
});

function addToCart(productName, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price}`;
        cartItems.appendChild(listItem);
        total += item.price;
    });

    const totalItem = document.createElement('li');
    totalItem.textContent = `Total: $${total}`;
    cartItems.appendChild(totalItem);

    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=FortxGlitchoff&item_name=Purchase&amount=${total}&currency_code=USD`;
    document.getElementById('paypal-link').href = paypalUrl;
}

function subscribe(amount) {
    // Stocker l'abonnement dans le stockage local
    localStorage.setItem('subscription', JSON.stringify({ amount }));
    alert(`Abonnement de ${amount}$/mois ajouté.`);
}
