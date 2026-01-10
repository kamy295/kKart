import { renderCart } from "./ui/renderCart.js";
import { getCart, updateQuantity, removeFromCart } from "./handlers/cart.js";

console.log("cart script");

function initCart() {
  renderCart(getCart());

  document.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);
    const action = e.target.dataset.action;

    if (!id || !action) return;

    if (action === "remove") {
      removeFromCart(id);
    } else {
      updateQuantity(id, action);
    }

    renderCart(getCart());
  });
}
document.addEventListener("DOMContentLoaded", initCart);
