import { getProducts } from "./api/products.js";
import { renderProducts } from "./ui/renderProducts.js";
import { setupSearch } from "./handlers/search.js";
import { setupSort } from "./handlers/sort.js";
import { setupCartNav } from "./ui/cartNav.js";
import { initCart, setupCartHandlers } from "./handlers/cart.js";
import { applyFilters } from "./utils/applyFilters.js";

const state = {
  allProducts: [],
  searchQuery: "",
  sortType: "",
};

function getState() {
  return state;
}

function updateView() {
  const { allProducts, searchQuery, sortType } = state;
  const finalList = applyFilters(allProducts, searchQuery, sortType);
  renderProducts(finalList);
}

async function main() {
  state.allProducts = await getProducts();

  setupCartNav();
  initCart(state.allProducts);
  setupCartHandlers();

  updateView(); // initial render

  setupSearch(getState, updateView);
  setupSort(getState, updateView);
}

document.addEventListener("DOMContentLoaded", main);
