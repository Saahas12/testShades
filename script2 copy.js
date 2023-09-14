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
        // if (!productInfo) {
        //     console.error('productInfo is undefined');
        //     return;
        //   }
      
      const productPriceElement = card.querySelector('#productPrice');
      
  
      
      const selectedPrice = productInfo.prices[location] || { amount: 0, currency: '', rate: 1 };

      // Convert price to USD using the exchange rate
      const convertedPriceUSD = selectedPrice.amount * parseFloat(selectedPrice.rate);
      productPriceElement.textContent = `${selectedPrice.currency}${convertedPriceUSD.toFixed(2)}`;
    }
  });
  