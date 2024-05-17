const productsData = {
    "Android": {
      "Samsung": [
        {
          "name": "Galaxy S21 Ultra",
          "colors": ["Phantom Black", "Phantom Silver", "Phantom Navy"],
          "variants": [
            { "type": "8GB RAM + 128GB", "price": 1199 },
            { "type": "12GB RAM + 256GB", "price": 1299 }
          ],
          "images": [
            { "color": "Phantom Black", "url": "path_to_phantom_black_image.jpg" },
            { "color": "Phantom Silver", "url": "path_to_phantom_silver_image.jpg" },
            { "color": "Phantom Navy", "url": "path_to_phantom_navy_image.jpg" }
          ],
          "review": "This phone has an amazing camera and a beautiful display. However, the battery life could be better.",
          "rating": 4.5
        },
        // Add other Samsung products here
      ],
      // Add other Android brands here
    },
    "iOS": {
      "Apple": [
        {
          "name": "iPhone 13 Pro",
          "colors": ["Graphite", "Silver", "Gold"],
          "variants": [
            { "type": "128GB", "price": 999 },
            { "type": "256GB", "price": 1099 },
            { "type": "512GB", "price": 1299 }
          ],
          "images": [
            { "color": "Graphite", "url": "path_to_graphite_image.jpg" },
            { "color": "Silver", "url": "path_to_silver_image.jpg" },
            { "color": "Gold", "url": "path_to_gold_image.jpg" }
          ],
          "review": "The iPhone 13 Pro offers outstanding performance, camera quality, and build design. It's worth the premium price.",
          "rating": 4.9
        },
        // Add other Apple products here
      ]
    }
  };
  
  export default productsData;
  