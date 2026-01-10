export function sortProduct(products, sortType) {
  let list = [...products]; // creating shallow copy

  switch (sortType) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);

    case "price-desc":
      return list.sort((a, b) => b.price - a.price);

    case "rating-asc":
      return list.sort((a, b) => a.rating - b.rating);

    case "rating-desc":
      return list.sort((a, b) => b.rating - a.rating);

    default:
      return list;
  }
}
