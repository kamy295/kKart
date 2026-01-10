const renderProducts = (products) => {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.innerHTML = "";

  // const ul = document.querySelector(".nav ul");

  // if (ul) {
  //   const cartNav = document.createElement("li");
  //   cartNav.classList.add("cart");
  //   cartNav.innerHTML = `Cart <span class="cart-count">0</span>`;

  //   ul.appendChild(cartNav);
  // }

  if (products.length > 0) {
    products.map((item) => {
      const card = document.createElement("div");

      card.className = "single-card-container";

      card.innerHTML = `<img
          src=${item.thumbnail}
          alt=${item.title}
        />
        <h3>${item.title}</h3>
        <p class="rating">Rating: ${item.rating} ⭐️ </p>
        <p class="price">Price: $${item.price}</p>
       <button class="addToCartButton" data-id="${item.id}">
        Add to Cart
      </button>
        `;

      cardContainer.appendChild(card);
    });
  } else {
    const noProducts = document.createElement("div");
    noProducts.className = "no-products";
    noProducts.innerHTML = `<h1><----- No Products Found -----></h1>`;
    cardContainer.appendChild(noProducts);
  }
};

export { renderProducts };
