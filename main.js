// JavaScript for Store Management System

// Sample products data (replace with your actual data)
const products = [ /* your products data here */ 
  { id: 1, name: "Wireless Mouse", price: 29.99, image: "images/wireless_mouse.jpg", description: "High-precision wireless mouse for comfortable use.", category: "Electronics" },
  { id: 2, name: "Bluetooth Headphones", price: 89.99, image: "images/bluetooth_headphones.jpg", description: "High-quality Bluetooth headphones with noise-cancellation.", category: "Electronics" },
  { id: 3, name: "Smartphone Case", price: 19.99, image: "images/smartphone_case.jpg", description: "Durable and stylish case for your smartphone.", category: "Electronics" },
  { id: 4, name: "Power Bank", price: 49.99, image: "images/power_bank.jpg", description: "Portable power bank for charging on the go.", category: "Electronics" },
  { id: 5, name: "Gaming Keyboard", price: 129.99, image: "images/gaming_keyboard.jpg", description: "High-performance gaming keyboard with customizable backlighting.", category: "Electronics" },
  { id: 6, name: "Fashion Watch", price: 99.99, image: "images/fashion_watch.jpg", description: "Stylish and elegant watch for everyday wear.", category: "Fashion" },
  { id: 7, name: "Sneakers", price: 79.99, image: "images/sneakers.jpg", description: "Comfortable and stylish sneakers for casual wear.", category: "Fashion" },
  { id: 8, name: "Handbag", price: 149.99, image: "images/handbag.jpg", description: "High-quality and stylish handbag for everyday use.", category: "Fashion" },
  { id: 9, name: "Gaming Mousepad", price: 29.99, image: "images/gaming_mousepad.jpg", description: "High-quality gaming mousepad for improved accuracy.", category: "Electronics" },
  { id: 10, name: "Wireless Earbuds", price: 69.99, image: "images/wireless_earbuds.jpg", description: "Convenient and high-quality wireless earbuds.", category: "Electronics" },
  { id: 11, name: "Phone Wallet", price: 29.99, image: "images/phone_wallet.jpg", description: "Practical and stylish phone wallet for everyday use.", category: "Fashion" },
  { id: 12, name: "Tablet", price: 299.99, image: "images/tablet.jpg", description: "High-performance tablet for entertainment and productivity.", category: "Electronics" },
  { id: 13, name: "Laptop Bag", price: 49.99, image: "images/laptop_bag.jpg", description: "Durable and stylish laptop bag for everyday use.", category: "Electronics" },
  { id: 14, name: "Gaming Chair", price: 199.99, image: "images/gaming_chair.jpg", description: "High-quality gaming chair for comfort and support.", category: "Electronics" },
  { id: 15, name: "Smart Speaker", price: 99.99, image: "images/smart_speaker.jpg", description: "Convenient and high-quality smart speaker for music and more.", category: "Electronics" },
  { id: 16, name: "Fashion Sunglasses", price: 49.99, image: "images/fashion_sunglasses.jpg", description: "Stylish and elegant sunglasses for everyday wear.", category: "Fashion" },
  { id: 17, name: "Gaming Controller", price: 59.99, image: "images/gaming_controller.jpg", description: "High-quality gaming controller for improved gaming experience.", category: "Electronics" },
  { id: 18, name: "Wireless Charging Pad", price: 29.99, image: "images/wireless_charging_pad.jpg", description: "Convenient and high-quality wireless charging pad.", category: "Electronics" },
  { id: 19, name: "High-End Smartphone", price: 999.99, image: "images/high_end_smartphone.jpg", description: "High-performance and feature-rich smartphone.", category: "Electronics" },
  { id: 20, name: "Fashion Handbag", price: 199.99, image: "images/fashion_handbag.jpg", description: "High-quality and stylish handbag for everyday use.", category: "Fashion" },
  { id: 21, name: "Portable Speaker", price: 79.99, image: "images/portable_speaker.jpg", description: "High-quality portable speaker with Bluetooth connectivity.", category: "Electronics" },
  { id: 22, name: "Gaming Keyboard", price: 99.99, image: "images/gaming_keyboard.jpg", description: "Mechanical gaming keyboard with customizable keys.", category: "Electronics" },
  { id: 23, name: "Laptop Stand", price: 39.99, image: "images/laptop_stand.jpg", description: "Adjustable laptop stand for ergonomic use.", category: "Electronics" },
  { id: 24, name: "Webcam", price: 59.99, image: "images/webcam.jpg", description: "High-definition webcam for clear video calls.", category: "Electronics" },
  { id: 25, name: "USB-C Hub", price: 29.99, image: "images/usb_c_hub.jpg", description: "Multi-port USB-C hub for increased connectivity.", category: "Electronics" },
  { id: 26, name: "External Hard Drive", price: 89.99, image: "images/external_hard_drive.jpg", description: "1TB external hard drive for extra storage.", category: "Electronics" },
  { id: 27, name: "Wireless Charger", price: 49.99, image: "images/wireless_charger.jpg", description: "Fast wireless charger for compatible devices.", category: "Electronics" },
  { id: 28, name: "Noise-Canceling Headphones", price: 129.99, image: "images/noise_canceling_headphones.jpg", description: "Noise-canceling headphones for immersive sound.", category: "Electronics" },
  { id: 29, name: "Smart Light Bulb", price: 19.99, image: "images/smart_light_bulb.jpg", description: "Smart light bulb with adjustable brightness and color.", category: "Electronics" },
  { id: 30, name: "Fitness Tracker", price: 49.99, image: "images/fitness_tracker.jpg", description: "Fitness tracker with heart rate monitoring.", category: "Electronics" },
  { id: 31, name: "Action Camera", price: 199.99, image: "images/action_camera.jpg", description: "Compact action camera for capturing adventures.", category: "Electronics" },
  { id: 32, name: "Drone", price: 299.99, image: "images/drone.jpg", description: "High-performance drone with HD camera.", category: "Electronics" },
  { id: 33, name: "VR Headset", price: 399.99, image: "images/vr_headset.jpg", description: "Immersive VR headset for virtual reality experiences.", category: "Electronics" },
  { id: 34, name: "Smart Thermostat", price: 149.99, image: "images/smart_thermostat.jpg", description: "Smart thermostat for efficient home heating.", category: "Electronics" },
  { id: 35, name: "Robot Vacuum", price: 249.99, image: "images/robot_vacuum.jpg", description: "Automated robot vacuum cleaner for convenient cleaning.", category: "Electronics" },
  { id: 36, name: "Electric Toothbrush", price: 79.99, image: "images/electric_toothbrush.jpg", description: "Electric toothbrush for effective oral hygiene.", category: "Personal Care" },
  { id: 37, name: "Hair Dryer", price: 49.99, image: "images/hair_dryer.jpg", description: "High-power hair dryer with multiple settings.", category: "Personal Care" },
  { id: 38, name: "Shaving Kit", price: 69.99, image: "images/shaving_kit.jpg", description: "Complete shaving kit with trimmer and accessories.", category: "Personal Care" },
  { id: 39, name: "Massage Gun", price: 129.99, image: "images/massage_gun.jpg", description: "Deep tissue massage gun for muscle relief.", category: "Personal Care" },
  { id: 40, name: "Face Mask Pack", price: 19.99, image: "images/face_mask_pack.jpg", description: "Pack of rejuvenating face masks.", category: "Personal Care" },
  { id: 41, name: "Yoga Mat", price: 29.99, image: "images/yoga_mat.jpg", description: "Non-slip yoga mat for comfortable workouts.", category: "Fitness" },
  { id: 42, name: "Dumbbell Set", price: 89.99, image: "images/dumbbell_set.jpg", description: "Adjustable dumbbell set for strength training.", category: "Fitness" },
  { id: 43, name: "Treadmill", price: 599.99, image: "images/treadmill.jpg", description: "Compact treadmill for indoor running.", category: "Fitness" },
  { id: 44, name: "Resistance Bands", price: 19.99, image: "images/resistance_bands.jpg", description: "Set of resistance bands for versatile workouts.", category: "Fitness" },
  { id: 45, name: "Fitness Ball", price: 29.99, image: "images/fitness_ball.jpg", description: "Stability ball for core strengthening exercises.", category: "Fitness" },
  { id: 46, name: "Cookware Set", price: 129.99, image: "images/cookware_set.jpg", description: "Complete cookware set for the kitchen.", category: "Home" },
  { id: 47, name: "Blender", price: 69.99, image: "images/blender.jpg", description: "High-speed blender for smoothies and soups.", category: "Home" },
  { id: 48, name: "Air Fryer", price: 99.99, image: "images/air_fryer.jpg", description: "Air fryer for healthy and quick meals.", category: "Home" },
  { id: 49, name: "Coffee Maker", price: 79.99, image: "images/coffee_maker.jpg", description: "Programmable coffee maker with multiple settings.", category: "Home" },
  { id: 50, name: "Vacuum Cleaner", price: 149.99, image: "images/vacuum_cleaner.jpg", description: "Powerful vacuum cleaner for deep cleaning.", category: "Home" },
  { id: 51, name: "Bed Sheets", price: 49.99, image: "images/bed_sheets.jpg", description: "Soft and durable bed sheets set.", category: "Home" },
  { id: 52, name: "Desk Lamp", price: 39.99, image: "images/desk_lamp.jpg", description: "Adjustable desk lamp with LED light.", category: "Home" },
  { id: 53, name: "Office Chair", price: 199.99, image: "images/office_chair.jpg", description: "Ergonomic office chair for comfortable seating.", category: "Home" },
  { id: 54, name: "Bookshelf", price: 99.99, image: "images/bookshelf.jpg", description: "Sturdy bookshelf for organizing books and decor.", category: "Home" },
  { id: 55, name: "Wall Art", price: 29.99, image: "images/wall_art.jpg", description: "Beautiful wall art to enhance your living space.", category: "Home" },
  { id: 56, name: "Running Shoes", price: 79.99, image: "images/running_shoes.jpg", description: "Comfortable running shoes for daily exercise.", category: "Clothing" },
  { id: 57, name: "Winter Jacket", price: 149.99, image: "images/winter_jacket.jpg", description: "Warm and stylish winter jacket.",category: "Clothing" },    
  { id: 58, name: "Backpack", price: 59.99, image: "images/backpack.jpg", description: "Durable backpack with multiple compartments.", category: "Clothing" },
  { id: 59, name: "Sunglasses", price: 29.99, image: "images/sunglasses.jpg", description: "Stylish sunglasses with UV protection.", category: "Clothing" },
  { id: 60, name: "Leather Wallet", price: 39.99, image: "images/leather_wallet.jpg", description: "Premium leather wallet with multiple slots.", category: "Clothing" },
  { id: 61, name: "Casual T-Shirt", price: 19.99, image: "images/casual_tshirt.jpg", description: "Comfortable and stylish casual T-shirt.", category: "Clothing" },
  { id: 62, name: "Jeans", price: 49.99, image: "images/jeans.jpg", description: "Classic denim jeans with a modern fit.", category: "Clothing" },
  { id: 63, name: "Sneakers", price: 69.99, image: "images/sneakers.jpg", description: "Comfortable sneakers for everyday wear.", category: "Clothing" },
  { id: 64, name: "Watch", price: 99.99, image: "images/watch.jpg", description: "Elegant watch with a leather strap.", category: "Clothing" },
  { id: 65, name: "Jacket", price: 89.99, image: "images/jacket.jpg", description: "Lightweight jacket for outdoor activities.", category: "Clothing" },
  { id: 66, name: "Hat", price: 24.99, image: "images/hat.jpg", description: "Stylish hat to complete your outfit.", category: "Clothing" },
  { id: 67, name: "Gloves", price: 19.99, image: "images/gloves.jpg", description: "Warm gloves for cold weather.", category: "Clothing" },
 
];

// Variables
const productCardsContainer = document.querySelector('.product-list');
const cartModal = document.getElementById('cartModal');
const closeCartModal = document.getElementById('closeCartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const viewCartBtn = document.getElementById('viewCartBtn');
const productDetailsModal = document.getElementById('productDetailsModal');
const closeProductDetailsModal = document.getElementById('closeProductDetailsModal');
const productTitle = document.getElementById('productTitle');
const productMainImage = document.getElementById('productMainImage');
const productDescription = document.getElementById('productDescription');
const productPrice = document.getElementById('productPrice');
const btnAddToCartDetails = document.querySelector('.btn-add-to-cart-details');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const sortOptions = document.getElementById('sortOptions');
const cart = [];
let total = 0;

// Load cart from local storage on page load
loadCartFromLocalStorage();

// Event Listeners
viewCartBtn.addEventListener('click', () => {
  animateCartModal(true);
});

closeCartModal.addEventListener('click', () => {
  animateCartModal(false);
});

checkoutBtn.addEventListener('click', () => {
  alert('Checkout functionality is not implemented yet.');
});

closeProductDetailsModal.addEventListener('click', () => {
  productDetailsModal.style.display = 'none';
});

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm));
  displayProducts(filteredProducts);
});

categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);
sortOptions.addEventListener('change', sortProducts);

function showProductDetails(product) {
  productTitle.textContent = product.name;
  productMainImage.src = product.image;
  productMainImage.alt = product.name;
  productDescription.textContent = product.description;
  productPrice.textContent = `$${product.price.toFixed(2)}`;
  productDetailsModal.setAttribute('data-id', product.id);
  productDetailsModal.style.display = 'flex';
}

function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  total += product.price;
  updateCart();
  saveCartToLocalStorage();
  toastr.success(`${product.name} added to cart!`);  // Toast notification for adding items
}

function updateCart() {
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name} (${item.quantity})</span>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
      <button class="remove-btn" data-id="${item.id}">Remove</button>
    `;
    cartItems.appendChild(cartItem);
  });

  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      removeFromCart(Number(e.target.getAttribute('data-id')));
    });
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
  document.getElementById('cartItemCount').textContent = cart.reduce((count, item) => count + item.quantity, 0);
}

function removeFromCart(id) {
  const itemIndex = cart.findIndex(item => item.id === id);
  if (itemIndex > -1) {
    total -= cart[itemIndex].price * cart[itemIndex].quantity;
    const removedItem = cart.splice(itemIndex, 1)[0]; // Remove and get the item
    updateCart();
    saveCartToLocalStorage();
    toastr.warning(`${removedItem.name} removed from cart.`);  // Toast notification for removing items
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('total', total.toFixed(2));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('cart');
  const savedTotal = localStorage.getItem('total');
  if (savedCart) {
    cart.push(...JSON.parse(savedCart));
  }
  if (savedTotal) {
    total = parseFloat(savedTotal);
  }
  updateCart();
}

function displayProducts(products) {
  productCardsContainer.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('data-id', product.id);
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="btn-view-details">View Details</button>
        <button class="btn-add-to-cart">Add to Cart</button>
      </div>
    `;
    productCardsContainer.appendChild(productCard);

    productCard.querySelector('.btn-view-details').addEventListener('click', () => showProductDetails(product));
    productCard.querySelector('.btn-add-to-cart').addEventListener('click', () => addToCart(product));
  });
}

function filterProducts() {
  const selectedCategory = categoryFilter.value;
  const selectedPriceRange = priceFilter.value.split('-');
  const minPrice = selectedPriceRange[0] ? parseFloat(selectedPriceRange[0]) : 0;
  const maxPrice = selectedPriceRange[1] ? parseFloat(selectedPriceRange[1]) : Infinity;

  const filteredProducts = products.filter(product => {
    return (selectedCategory === '' || product.category === selectedCategory) &&
           (product.price >= minPrice && product.price <= maxPrice);
  });

  displayProducts(filteredProducts);
}

function sortProducts() {
  const sortValue = sortOptions.value;
  let sortedProducts = [...products];

  if (sortValue === 'price-asc') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === 'price-desc') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortValue === 'name-asc') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === 'name-desc') {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  displayProducts(sortedProducts);
}

// Initial display of products
displayProducts(products);

function animateCartModal(open) {
  if (open) {
    cartModal.style.display = 'flex';
    requestAnimationFrame(() => {
      cartModal.classList.add('open');
    });
  } else {
    cartModal.classList.remove('open');
    cartModal.addEventListener('transitionend', () => {
      cartModal.style.display = 'none';
    }, { once: true });
  }
}
