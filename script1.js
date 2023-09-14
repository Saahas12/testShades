document.addEventListener('DOMContentLoaded', function () {
  const jewelryCard = document.getElementById('jewelryCard');
  const locationCard = document.getElementById('locationCard');
  const locationDropdown = document.getElementById('locationDropdown');

  const jewelryData = [
    { name: 'Jewelry 1', category: '1', prices: { usa: 100.00, uk: 80.00, india: 6000.00,image:'https://www.kalyanjewellers.net/images/Jewellery/Gold/images/kajjara-nimah-gold-jhumka.jpg' /* ... */ } },
    { name: 'Jewelry 2', category: '2', prices: { usa: 150.00, uk: 120.00, india: 9000.00,image:'https://www.rubans.in/cdn/shop/products/rubans-22k-gold-plated-temple-jewellery-set-necklace-set-33728563478702.jpg?v=1680850000' /* ... */ } },
    // Add more jewelry data as needed
  ];

  const currencySymbols = {
    usa: '$',
    uk: '£',
    india: '₹',
    dubai: 'AED',
    canada: 'C$',
    australia: 'A$',
    // Add more currency symbols as needed
  };

  locationDropdown.addEventListener('change', function () {
    const selectedLocation = locationDropdown.value;
    const selectedJewelryInfo = getRandomJewelry(jewelryData);
    updateJewelryCard(jewelryCard, selectedJewelryInfo, selectedLocation);
  });

  function getRandomJewelry(data) {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }

  function updateJewelryCard(card, jewelryInfo, location) {
    const jewelryNameElement = card.querySelector('#jewelryName');
    const jewelryCategoryElement = card.querySelector('#jewelryCategory');
    const jewelryPriceElement = card.querySelector('#jewelryPrice');
    const jewelryImageElement = card.querySelector('#jewelryImage');

    jewelryNameElement.textContent = jewelryInfo.name;
    jewelryCategoryElement.textContent = `${jewelryInfo.category}`;

    // Update the price and currency symbol based on the selected location
    const prices = jewelryInfo.prices;
    const selectedPrice = prices[location] || 0.00;
    const currencySymbol = currencySymbols[location] || '$';
    jewelryPriceElement.textContent = `${currencySymbol}${selectedPrice.toFixed(2)}`;

    jewelryImageElement.src = jewelryInfo.image;
    jewelryImageElement.alt = `${jewelryInfo.name} Image`;
  }
});
