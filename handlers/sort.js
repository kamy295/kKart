import { sortProduct } from "../utils/sortProducts.js";

export function setupSort(allProducts, renderProducts) {
  const sortSelect = document.querySelector(".sort");
  if (!sortSelect) return;

  sortSelect.addEventListener("change", (e) => {
    const value = e.target.value;

    const sorted = sortProduct(allProducts, value);

    renderProducts(sorted);
  });
}
