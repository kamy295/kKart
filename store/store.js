import { applyFilters } from "../utils/applyFilters.js";
import { renderProducts } from "../ui/renderProducts.js";

const state = {
  allProducts: [],
  searchQuery: "",
  sortType: "",
  filterType: "",
};

const listeners = [];

/* ------------------ CORE STORE API ------------------ */
export function getState() {
  return { ...state };
}

export function setState(partialState) {
  Object.assign(state, partialState);
  notify();
}

export function subscribe(listener) {
  listeners.push(listener);

  // unsubscribe
  return () => {
    const index = listener.indexOf(listener);
    if (index > -1) listener.splice(index, 1);
  };
}

/* ------------------ INTERNAL ------------------ */

function notify() {
  listeners.forEach((listener) => listener());
}

/* ------------------ DERIVED STATE ------------------ */

export function getVisibleProducts() {
  return applyFilters(
    state.allProducts,
    state.searchQuery,
    state.sortType,
    state.filterType,
  );
}
