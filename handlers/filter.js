import { setState } from "../store/store.js";

export function setupFilter(getState, updateView) {
  const filterSelect = document.querySelector(".filter");

  if (!filterSelect) return;

  filterSelect.addEventListener("change", (e) => {
    // getState().filterType = e.target.value;
    // updateView();
    setState({
      filterType: e.target.value,
    });
  });
}
