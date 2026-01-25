import { getProducts } from "./api/products.js";
import { setState } from "./store/store.js";
import { connectProducts } from "./store/connectProducts.js";
import { setupSearch } from "./handlers/search.js";
import { setupSort } from "./handlers/sort.js";
import { setupFilter } from "./handlers/filter.js";
import { setupCartNav } from "./ui/cartNav.js";
import { initCart, setupCartHandlers } from "./handlers/cart.js";

async function main() {
  const products = await getProducts();

  setupCartNav();
  initCart(products);
  setupCartHandlers();

  setState({ allProducts: products });

  connectProducts();

  setupSearch();
  setupSort();
  setupFilter();
}

document.addEventListener("DOMContentLoaded", main);
