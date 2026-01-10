export function setupCartNav() {
  const ul = document.querySelector(".nav ul");

  // prevent duplicates
  if (!ul || ul.querySelector(".cart")) return;

  const cartNav = document.createElement("li");
  cartNav.classList.add("cart");
  cartNav.innerHTML = `
    <a href="./cart.html">
      Cart (<span class="cart-count">0</span>)
    </a>
  `;

  ul.appendChild(cartNav);
}
