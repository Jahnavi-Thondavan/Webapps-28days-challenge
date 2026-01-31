const productContainer = document.getElementById("products");

// Backend API URL
const API_URL = "https://fakestoreapi.com/products";

// Fetch products from backend
async function getProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();

    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Display products on frontend
function displayProducts(products) {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" />
      <h3>${product.title}</h3>
      <p class="price">₹ ${product.price}</p>
    `;

    productContainer.appendChild(card);
  });
}

getProducts();
