let cart = [];
let total = 0;

function addToCart(productName, price, event) {
    const selectedSize = event.target.closest('.card-body').querySelector('.select').value;
    if (!selectedSize || selectedSize === "Es. 39") {
        alert('Per favore, seleziona una taglia!');
        return;
    }
    cart.push({name: productName, price, size: selectedSize});
    total += price;
    alert(`${productName} (Taglia: ${selectedSize}) è stato aggiunto al carrello!`);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');

    cartCount.textContent = cart.length;
    totalPrice.textContent = `Totale: €${total.toFixed(2)}`;

    cartItems.innerHTML = cart.map((item, index) => `
            <div class="flex justify-between">
                <span>${item.name} - €${item.price.toFixed(2)} (Taglia: ${item.size})</span>
                <button class="btn btn-xs btn-error" onclick="removeFromCart(${index})">Rimuovi</button>
            </div>
        `).join('');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Il tuo carrello è vuoto.</p>';
    }
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCartUI();
}

function validateForm() {
    const cardNumber = document.getElementById('credit-card-input').value.replace(/\s/g, '');
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv-input').value;

    if (!cardNumber || !expiryDate || !cvv) {
        alert("Per favore, compila tutti i campi.");
        return;
    }

    if (cvv.length < 3 || cvv.length > 4) {
        alert("Il CVV deve avere 3 o 4 cifre.");
        return;
    }

    alert("Pagamento elaborato con successo!");
}