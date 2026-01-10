import { debounce } from "../utils/debounce.js";

export function setupSearch(allProducts, renderProducts) {
  const search = document.querySelector(".search");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim();

    const list = query
      ? allProducts.filter((p) => p.title.toLowerCase().includes(query))
      : allProducts;

    renderProducts(list);
  };

  search.addEventListener("input", debounce(handleSearch, 300));
}
