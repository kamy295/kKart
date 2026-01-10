let allProducts = [];

export function initCart(products) {
  allProducts = products;
  updateCartCount();
}

export function setupCartHandlers() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("addToCartButton")) {
      const productID = Number(e.target.dataset.id);
      addToCart(productID);
    }
  });
}

export function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productID) {
  const cart = getCart();
  const product = allProducts.find((p) => p.id === productID);

  if (!product) return;

  const existing = cart.find((item) => item.id === productID);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  }

  saveCart(cart);
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartCount = document.querySelector(".cart-count");

  if (cartCount) {
    cartCount.textContent = count;
  }
}

export function updateQuantity(productId, action) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);

  if (!item) return;

  if (action === "inc") item.quantity += 1;
  if (action === "dec") item.quantity -= 1;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart(cart);
}

export function removeFromCart(productId) {
  const updated = getCart().filter((i) => i.id !== productId);
  saveCart(updated);
}
