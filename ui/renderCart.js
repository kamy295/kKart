export function renderCart(cart) {
  const container = document.querySelector(".cart-container");
  const totalEl = document.querySelector(".cart-total");

  container.innerHTML = "";

  if (!cart.length) {
    container.innerHTML = "<p> Your cart is Empty </p>";
    totalEl.textContent = "0";
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    total += item.price + item.quantity;

    const row = document.createElement("div");

    row.className = "cart-item";

    row.innerHTML = `
    <div>
        <h2>${item.title}</h2>
        <p>₹${item.price}</p>
      </div>

      <div class="cart-actions">
        <button data-action="dec" data-id="${item.id}">−</button>
        <span>${item.quantity}</span>
        <button data-action="inc" data-id="${item.id}">+</button>
        <button data-action="remove" data-id="${item.id}">Remove</button>
      </div>`;

    container.appendChild(row);
  });

  totalEl.textContent = total.toLocaleString();
}
