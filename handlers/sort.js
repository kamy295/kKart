import { setState } from "../store/store.js";

export function setupSort(getState, updateView) {
  const sortSelect = document.querySelector(".sort");
  if (!sortSelect) return;

  sortSelect.addEventListener("change", (e) => {
    // getState().sortType = e.target.value;
    // updateView();
    setState({
      sortType: e.target.value,
    });
  });
}
