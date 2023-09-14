document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.gallery');
    const locationDropdown = document.getElementById('locationDropdown');
  
    fetch('products1.json')
      .then(response => response.json())
      .then(data => {
          console.log(data)
        
        locationDropdown.addEventListener('change', function () {
          const selectedLocation = locationDropdown.value;
          productCards.forEach((productCard, index) => {
            const productInfo = data[index];
            updateProductCard(productCard, productInfo, selectedLocation);
          });
        });
  
        // Initialize with default location
        const defaultLocation = locationDropdown.value;
        productCards.forEach((productCard, index) => {
          const productInfo = data[index];
          updateProductCard(productCard, productInfo, defaultLocation);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      function updateProductCard(card, productInfo, location) {
        if (!productInfo) {
          console.error('productInfo is undefined');
          return;
        }
      
        const productNameElement = card.querySelector('#productName');
        const productCategoryElement = card.querySelector('#productCategory');
        const productPriceElement = card.querySelector('#productPrice');
        const productImageElement = card.querySelector('#productImage');
      
        productNameElement.textContent = productInfo.name;
        productCategoryElement.textContent = productInfo.category;
      
        const selectedPrice = productInfo.prices[location] || { currency: '', rate: 1 };
        const convertedPrice = productInfo.basePrice * parseFloat(selectedPrice.rate);
      
        // Display both currency symbol and converted price
        productPriceElement.textContent = `${selectedPrice.currency}${convertedPrice.toFixed(2)}`;
      
        productImageElement.src = productInfo.image;
        productImageElement.alt = `${productInfo.name} Image`;
      }
      
      
});
  