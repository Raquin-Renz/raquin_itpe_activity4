// --- 1. Data Source ---
let galleryData = [
    {
        id: 1,
        type: "image",
        title: "Mastering React.js for Modern UIs",
        shortDesc: "Learn how to build scalable, component-driven user interfaces using modern React best practices.",
        fullDesc: "React.js continues to dominate the frontend landscape. In this comprehensive guide, we explore the shift towards functional components, advanced hook usage, and state management strategies that keep complex micro-job platforms and enterprise dashboards performing smoothly under heavy loads.",
        category: "Web Development",
        mediaUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
        date: "Sep 2, 2026",
        author: "TechVault Editorial"
    },
    {
        id: 2,
        type: "image",
        title: "Cybersecurity Essentials: Defending Networks",
        shortDesc: "A deep dive into vulnerability assessments, NAT/PAT configurations, and securing digital perimeters.",
        fullDesc: "With cyber threats evolving rapidly, understanding the fundamentals of network security is non-negotiable. This article walks through practical implementations of ethical hacking concepts, securing hardware setups, and applying Cisco Networking Academy principles to real-world infrastructure.",
        category: "Cybersecurity",
        mediaUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
        date: "Aug 28, 2026",
        author: "Security Team"
    },
    {
        id: 3,
        type: "image",
        title: "PHP & MySQL: The Full-Stack Backbone",
        shortDesc: "Why traditional server-side scripting and relational databases still power the modern web.",
        fullDesc: "Despite the rise of NoSQL and edge computing, the combination of PHP and MySQL remains a robust, reliable choice for building functional web applications. We analyze how to structure databases efficiently for document management systems and dynamic marketplaces to ensure rapid querying and high data integrity.",
        category: "Databases",
        mediaUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
        date: "Aug 15, 2026",
        author: "Backend Devs"
    },
    {
        id: 4,
        type: "image",
        title: "Designing Intuitive Dashboards in Figma",
        shortDesc: "Transforming complex administrative tracking requirements into clean, user-friendly prototypes.",
        fullDesc: "UI/UX design is the bridge between raw code and user satisfaction. This case study looks at designing responsive analytics dashboards in Figma. We cover wireframing, establishing a design system, and prototyping real-time status update interfaces before writing a single line of frontend code.",
        category: "UI/UX Design",
        mediaUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        date: "Aug 10, 2026",
        author: "Creative Team"
    },
    {
        id: 5,
        type: "image",
        title: "Securing IoT Devices in the Modern Era",
        shortDesc: "As everyday objects connect to the web, securing the Internet of Things is more critical than ever.",
        fullDesc: "From smart home sensors to enterprise logistics trackers, IoT devices represent a massive expansion of the attack surface. We explore professional protocols for encrypting device traffic, updating firmware over the air securely, and isolating IoT hardware on dedicated subnets.",
        category: "Networking",
        mediaUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&q=80",
        date: "Jul 22, 2026",
        author: "Infrastructure Labs"
    },
    {
        id: 6,
        type: "image",
        title: "The Future of AI Integration in Web Apps",
        shortDesc: "How machine learning models are becoming accessible tools for everyday web developers.",
        fullDesc: "Artificial Intelligence is no longer just for data scientists. Through accessible APIs and edge-compatible models, web developers can now integrate natural language processing, image generation, and predictive analytics directly into standard web platforms. Here is how to get started safely.",
        category: "AI",
        mediaUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
        date: "Jul 05, 2026",
        author: "AI Research"
    },
    // Updated Content Cards (2 Video, 1 Image) using reliable MDN open-source videos
    {
        id: 7,
        type: "video",
        title: "Serverless Architecture at Scale",
        shortDesc: "Deploying microservices and serverless functions for high-availability applications.",
        fullDesc: "Cloud computing continues to evolve beyond virtual machines. Serverless architectures allow developers to build and run applications without managing infrastructure. We explore how to deploy robust AWS Lambda functions and API gateways that automatically scale from zero to thousands of concurrent requests.",
        category: "Cloud Computing",
        mediaUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        date: "Sep 5, 2026",
        author: "Cloud Infrastructure"
    },
    {
        id: 8,
        type: "video",
        title: "Code Compilation Under the Hood",
        shortDesc: "A deep dive into how interpreters and compilers translate human-readable code to machine logic.",
        fullDesc: "Have you ever wondered what happens after you press 'Run'? This technical deep dive visually explores abstract syntax trees, JIT compilation, and how modern engines like V8 rapidly translate your web development scripts into blazing-fast hardware instructions.",
        category: "Web Development",
        mediaUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
        date: "Sep 7, 2026",
        author: "Systems Architecture"
    },
    {
        id: 9,
        type: "image",
        title: "Understanding Graph Databases",
        shortDesc: "Moving beyond rows and columns to traverse complex, highly connected data structures.",
        fullDesc: "Relational databases are great, but when dealing with highly interconnected data—like social networks, fraud detection networks, or recommendation engines—Graph Databases shine. Learn how to map nodes, edges, and properties to uncover hidden relationships efficiently.",
        category: "Databases",
        mediaUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        date: "Sep 9, 2026",
        author: "Data Engineering"
    }
];

const categories = ["All", "Web Development", "Cybersecurity", "Databases", "UI/UX Design", "Networking", "AI", "Cloud Computing"];

// --- 2. DOM Elements ---
const filterContainer = document.getElementById('filter-container');
const cardGrid = document.getElementById('card-grid');

// Nav & Theme Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const hamburgerBtn = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Modal Elements
const modal = document.getElementById('item-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const closeModalBtn = document.getElementById('close-modal');
const modalImage = document.getElementById('modal-image');
const modalVideo = document.getElementById('modal-video');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalDesc = document.getElementById('modal-desc');

// --- 3. Initialization ---
function init() {
    shuffleArray(galleryData); // Randomize layout on page load
    renderFilters();
    renderCards('All');
    setupUIListeners();
}

// Utility: Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- 4. UI & Layout Logic ---
function setupUIListeners() {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    });

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// --- 5. Content Rendering ---
function renderFilters() {
    categories.forEach(category => {
        const button = document.createElement('button');
        button.classList.add('filter-chip');
        if (category === 'All') button.classList.add('active');
        button.textContent = category;
        
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderCards(category);
        });
        
        filterContainer.appendChild(button);
    });
}

function renderCards(filterCategory) {
    cardGrid.innerHTML = '';
    
    const filteredData = filterCategory === 'All' 
        ? galleryData 
        : galleryData.filter(item => item.category === filterCategory);
        
    filteredData.forEach(item => {
        const card = document.createElement('article');
        card.classList.add('card');
        
        // Generate media HTML based on type (video or image)
        const mediaHTML = item.type === 'video'
            ? `<video src="${item.mediaUrl}" class="card-video" muted loop playsinline></video>`
            : `<img src="${item.mediaUrl}" alt="${item.title}" class="card-img" loading="lazy">`;

        card.innerHTML = `
            <div class="card-img-wrapper">
                ${mediaHTML}
            </div>
            <div class="card-content">
                <span class="category-tag">${item.category}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.shortDesc}</p>
                <div class="meta-info">${item.date} &bull; ${item.author}</div>
            </div>
        `;
        
        // Video Autoplay Hover Interactions
        if (item.type === 'video') {
            const videoEl = card.querySelector('video');
            card.addEventListener('mouseenter', () => {
                videoEl.play().catch(err => console.log("Video autoplay prevented by browser"));
            });
            card.addEventListener('mouseleave', () => {
                videoEl.pause();
            });
        }

        // Open modal on click
        card.addEventListener('click', () => openModal(item));
        cardGrid.appendChild(card);
    });
}

// --- 6. Modal Logic ---
function openModal(itemData) {
    // Populate text data
    modalCategory.textContent = itemData.category;
    modalTitle.textContent = itemData.title;
    modalMeta.innerHTML = `${itemData.date} &bull; ${itemData.author}`;
    modalDesc.textContent = itemData.fullDesc;
    
    // Toggle between image and video for the modal view
    if (itemData.type === 'video') {
        modalImage.style.display = 'none';
        modalVideo.style.display = 'block';
        modalVideo.src = itemData.mediaUrl;
        modalVideo.play().catch(e => console.log("Autoplay blocked"));
    } else {
        modalVideo.style.display = 'none';
        modalVideo.pause(); // Reset video state
        modalImage.style.display = 'block';
        modalImage.src = itemData.mediaUrl;
        modalImage.alt = itemData.title;
    }
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; 
    
    // Stop video playback when closing
    modalVideo.pause();
    modalVideo.src = ""; // Clear src to stop downloading in background
}

// Boot up the application
document.addEventListener('DOMContentLoaded', init);