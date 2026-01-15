import { filterProducts } from "./filterProducts.js";
import { sortProduct } from "./sortProducts.js";

export function applyFilters(products, searchQuery, sortType, filterType) {
  let result = [...products];

  // Search
  if (searchQuery) {
    result = result.filter((p) => p.title.toLowerCase().includes(searchQuery));
  }

  // Sort
  if (sortType) {
    result = sortProduct(result, sortType);
  }

  // Filter
  if (filterType) {
    result = filterProducts(result, filterType);
  }

  return result;
}
