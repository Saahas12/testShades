document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.gallery');
  
    fetch('products.json')
      .then(response => response.json())
      
      .then(data => {
        productCards.forEach((productCard, index) => {
          const productInfo = data[index];
          updateProductCard(productCard, productInfo);
        });
  
        // Set up event listener for product card click
        productCards.forEach(productCard => {
          productCard.addEventListener('click', function () {
            const productInfo = getRandomProduct(data);
            updateProductCard(productCard, productInfo);
          });
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  
    function getRandomProduct(data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      return data[randomIndex];
    }
  
    function updateProductCard(card, productInfo) {
      const productNameElement = card.querySelector('b');
      const productCategoryElement = card.querySelector('#productCategory');
      const productPriceElement = card.querySelector('#productPrice');
      const productImageElement = card.querySelector('#productImage');
  
      productNameElement.textContent = productInfo.name;
      productCategoryElement.textContent = `${productInfo.category}`;
      productPriceElement.textContent = `$${productInfo.price.toFixed(2)}`;
      productImageElement.src = productInfo.image;
      productImageElement.alt = `${productInfo.name} Image`;
    }
  });
  