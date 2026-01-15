import { applyFilters } from "../utils/applyFilters.js";

export function setupSort(getState, updateView) {
  const sortSelect = document.querySelector(".sort");
  if (!sortSelect) return;

  sortSelect.addEventListener("change", (e) => {
    getState().sortType = e.target.value;
    updateView();
  });
}
