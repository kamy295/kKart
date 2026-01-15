import { debounce } from "../utils/debounce.js";

export function setupSearch(getState, updateView) {
  const search = document.querySelector(".search");
  if (!search) return;

  const handleSearch = (e) => {
    getState().searchQuery = e.target.value.toLowerCase().trim();
    updateView();
  };

  search.addEventListener("input", debounce(handleSearch, 300));
}
