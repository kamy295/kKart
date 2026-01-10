import { sortProduct } from "./sortProducts.js";

export function applyFilters(products, searchQuery, sortType) {
  let result = [...products];

  // Search
  if (searchQuery) {
    result = result.filter((p) => p.title.toLowerCase(), includes(searchQuery));
  }

  // Soty
  if (sortType) {
    result = sortProduct(result, sortType);
  }

  return result;
}
