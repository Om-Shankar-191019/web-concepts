const fetchUrl = "https://dummyjson.com/products";
const productList = document.getElementById("product-list");
const getProductsData = () => {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products);
      let products = "";
      data.products.map((product) => {
        products += `
         <div class="product-card">
            <div class="product-image">
                <img src="${product?.images[0]}" alt="Product Image">
            </div>
            <div class="product-details">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$ ${product.price}</p>
                <p class="product-stock">In Stock: ${product.stock}</p>
            </div>
        </div>
    `;
      });
      productList.innerHTML = products;
    });
};

getProductsData();
