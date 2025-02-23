// Sample product data (Replace with your API data or fetch)
const products = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 100,  description: 'This is a description of Product 1.' },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 150, description: 'This is a description of Product 2.' },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 200,  description: 'This is a description of Product 3.' },
    { id: 4, name: 'Product 4', category: 'Category 4', price: 250,  description: 'This is a description of Product 4.' },
  ];
  
  // Function to create product cards dynamically
  function createProductCards(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p class="price">${product.price} BDT</p>
      `;
      productCard.addEventListener('click', () => showProductDetail(product));
      productGrid.appendChild(productCard);
    });
  }
  
  // Function to show product details in a modal
  function showProductDetail(product) {
    const modal = document.getElementById('product-detail-modal');
    const productDetail = document.getElementById('product-detail');
    productDetail.innerHTML = `
      <h2>${product.name}</h2>
      <img src="${product.image}" alt="${product.name}">
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Description:</strong> ${product.description}</p>
      <p><strong>Price:</strong> ${product.price} BDT</p>
    `;
    modal.classList.add('show');
  }
  
  // Close modal when clicking the close button
  document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('product-detail-modal').classList.remove('show');
  });
  
  // Initialize the product grid on page load
  window.onload = function() {
    createProductCards(products);
  };
  
