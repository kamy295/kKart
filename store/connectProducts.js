import { subscribe, getVisibleProducts } from "./store.js";
import { renderProducts } from "../ui/renderProducts.js";

export function connectProducts() {
  const render = () => {
    const products = getVisibleProducts();
    renderProducts(products);
  };

  render();
  subscribe(render);
}
