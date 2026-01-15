export function filterProducts(products, filterType) {
  if (!filterType || filterType === "all") {
    return products;
  }

  return products.filter((item) => item.category === filterType);
}
