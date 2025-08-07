// Sample products data - Full Alibaba Clone
const products = [
    // Electronics
    {
        name: 'Wireless Earbuds',
        desc: 'High quality sound, long battery life.',
        price: '$29.99',
        category: 'Electronics',
        img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Smart Watch',
        desc: 'Track your fitness and notifications.',
        price: '$49.99',
        category: 'Electronics',
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Bluetooth Speaker',
        desc: 'Portable and powerful sound.',
        price: '$19.99',
        category: 'Electronics',
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'VR Headset',
        desc: 'Experience virtual reality at home.',
        price: '$89.99',
        category: 'Electronics',
        img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Fitness Tracker',
        desc: 'Monitor your health and activity.',
        price: '$24.99',
        category: 'Electronics',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Mini Drone',
        desc: 'Fun flying experience for everyone.',
        price: '$39.99',
        category: 'Electronics',
        img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Power Bank',
        desc: '20000mAh portable charger.',
        price: '$15.99',
        category: 'Electronics',
        img: 'https://images.unsplash.com/photo-1609592806598-04d4d2d3b3c1?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'USB-C Cable',
        desc: 'Fast charging cable pack.',
        price: '$8.99',
        category: 'Electronics',
        img: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=80'
    },
    
    // Fashion
    {
        name: 'Denim Jacket',
        desc: 'Classic style, comfortable fit.',
        price: '$45.99',
        category: 'Fashion',
        img: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Running Shoes',
        desc: 'Lightweight and breathable.',
        price: '$79.99',
        category: 'Fashion',
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Leather Bag',
        desc: 'Elegant design, spacious.',
        price: '$65.99',
        category: 'Fashion',
        img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Sunglasses',
        desc: 'UV protection, stylish frames.',
        price: '$25.99',
        category: 'Fashion',
        img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Wristwatch',
        desc: 'Elegant timepiece for any occasion.',
        price: '$95.99',
        category: 'Fashion',
        img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Summer Dress',
        desc: 'Light and comfortable summer wear.',
        price: '$35.99',
        category: 'Fashion',
        img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=400&q=80'
    },
    
    // Home & Garden
    {
        name: 'LED Desk Lamp',
        desc: 'Adjustable brightness, energy efficient.',
        price: '$32.99',
        category: 'Home',
        img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Coffee Maker',
        desc: 'Programmable coffee machine.',
        price: '$89.99',
        category: 'Home',
        img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Garden Tools Set',
        desc: 'Complete gardening toolkit.',
        price: '$55.99',
        category: 'Home',
        img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Throw Pillows',
        desc: 'Soft and decorative cushions.',
        price: '$18.99',
        category: 'Home',
        img: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Kitchen Knife Set',
        desc: 'Professional grade knives.',
        price: '$75.99',
        category: 'Home',
        img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Wall Clock',
        desc: 'Modern design wall clock.',
        price: '$28.99',
        category: 'Home',
        img: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=400&q=80'
    },
    
    // Sports & Outdoor
    {
        name: 'Yoga Mat',
        desc: 'Non-slip exercise mat.',
        price: '$22.99',
        category: 'Sports',
        img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Tennis Racket',
        desc: 'Professional tennis equipment.',
        price: '$85.99',
        category: 'Sports',
        img: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Camping Tent',
        desc: '4-person camping tent.',
        price: '$129.99',
        category: 'Sports',
        img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Bicycle Helmet',
        desc: 'Safety certified cycling helmet.',
        price: '$34.99',
        category: 'Sports',
        img: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Dumbbells Set',
        desc: 'Adjustable weight set.',
        price: '$95.99',
        category: 'Sports',
        img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80'
    },
    
    // Beauty & Health
    {
        name: 'Facial Cleanser',
        desc: 'Gentle daily face wash.',
        price: '$12.99',
        category: 'Beauty',
        img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Hair Dryer',
        desc: 'Professional hair styling tool.',
        price: '$45.99',
        category: 'Beauty',
        img: 'https://images.unsplash.com/photo-1522338146-1111938b1c1a?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Makeup Brush Set',
        desc: 'Complete makeup application kit.',
        price: '$28.99',
        category: 'Beauty',
        img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Essential Oils',
        desc: 'Natural aromatherapy set.',
        price: '$19.99',
        category: 'Beauty',
        img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=400&q=80'
    },
    
    // Toys & Games
    {
        name: 'Board Game',
        desc: 'Family fun strategy game.',
        price: '$32.99',
        category: 'Toys',
        img: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Remote Control Car',
        desc: 'High-speed RC vehicle.',
        price: '$45.99',
        category: 'Toys',
        img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Puzzle Set',
        desc: '1000-piece jigsaw puzzle.',
        price: '$18.99',
        category: 'Toys',
        img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=400&q=80'
    },
    {
        name: 'Building Blocks',
        desc: 'Creative construction set.',
        price: '$25.99',
        category: 'Toys',
        img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80'
    }
];

// Get unique categories
const categories = ['All', ...new Set(products.map(p => p.category))];

function renderProducts(productList) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <div class="price">${product.price}</div>
            <button onclick="addToCart('${product.name}')">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

// Add category filter buttons
function addCategoryFilters() {
    const productsSection = document.querySelector('.products-section');
    const filterDiv = document.createElement('div');
    filterDiv.className = 'category-filters';
    filterDiv.innerHTML = `
        <div class="filter-buttons">
            ${categories.map(cat => 
                `<button class="filter-btn ${cat === 'All' ? 'active' : ''}" onclick="filterByCategory('${cat}')">${cat}</button>`
            ).join('')}
        </div>
    `;
    productsSection.insertBefore(filterDiv, document.querySelector('.products-section h2').nextSibling);
}

// Filter products by category
function filterByCategory(category) {
    const filtered = category === 'All' ? products : products.filter(p => p.category === category);
    renderProducts(filtered);
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Add to cart functionality
function addToCart(productName) {
    alert(`${productName} added to cart!`);
}

// Initial render
renderProducts(products);
addCategoryFilters();

// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.desc.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
    renderProducts(filtered);
});
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Contact form alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
}
