import { debounce } from "../utils/debounce.js";
import { setState } from "../store/store.js";

export function setupSearch(getState, updateView) {
  const search = document.querySelector(".search");
  if (!search) return;

  const handleSearch = (e) => {
    // getState().searchQuery = e.target.value.toLowerCase().trim();
    // updateView();
    setState({
      searchQuery: e.target.value.toLowerCase().trim(),
    });
  };

  search.addEventListener("input", debounce(handleSearch, 300));
}
