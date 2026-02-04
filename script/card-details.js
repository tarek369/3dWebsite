const projectsData = {
  'project-1': {
    id: 'project-1',
    category: 'Work Flow: Open-Plan Office Visualization',
    title: 'Interior Design- 3D Visualization',
    image: 'res/service4.png',
    overview: `
    A daylight-driven office render showcasing balanced artificial and natural light distribution. Visualization developed from basic 2D plans to test how ceiling fixtures and window systems impact working environments.`,
    challenge: `
    <ul class="challenge-list">
      <li>Translating 2D architectural plans into a fully realized 3D environment.</li>
      <li>Achieving balanced lighting conditions that replicate real-world daylight behavior.</li>
      <li>Ensuring visual comfort and realistic material reflections within the office space.</li>
    </ul>`,
    solution: `
    <ul class="solution-list">
      <li>Modeled complete interior layout from 2D CAD references with precision.</li>
      <li>Simulated daylight and artificial light systems to analyze luminance distribution.</li>
      <li>Applied realistic textures and materials to enhance the visual fidelity of surfaces and furniture.</li>
    </ul>`,
    results: `
    Resolution & Impact
    The final renders delivered a professional and accurate visualization of a modern office atmosphere, enabling the client to make informed decisions on lighting and layout design.

    Outcome: Improved lighting plan validation and enhanced interior presentation quality.`,
    technologies: ['3ds Max', 'Corona Renderer', 'Photoshop', 'Interior Lighting Simulation'],
    services: [
      'Interior 3D Visualization',
      'Lighting Simulation',
      'Material Realism Enhancement',
      '2D to 3D Conversion',
      'Design Presentation Rendering'
    ],
    gallery: [
      'res/work45.png',
      'res/work4.png',
      'res/work42.png',
      'res/work43.png'
    ],
    // youtubeVideo: 'https://www.youtube.com/embed/aatmjpEnf2E'
  },
  
  'project-2': {
    id: 'project-2',
    category: 'LUXMOD: A Contemporary Villa Study',
    title: 'Architectural Design & 3D Visualization',
    image: 'res/work2.png',
    overview: `
    A calm residential corner with a nod to Tudor architecture. This 3D visualization emphasizes light, composition, and environment to bring architectural intent to life.`,
    challenge: `
    <ul class="challenge-list">
      <li>Achieving realistic lighting and material reflection to highlight Tudor architectural elements.</li>
      <li>Balancing artistic composition with architectural accuracy.</li>
      <li>Creating a calm yet dynamic environment that conveys a sense of comfort and luxury.</li>
    </ul>`,
    solution: `
    <ul class="solution-list">
      <li>Developed detailed 3D models inspired by Tudor-style design principles.</li>
      <li>Used advanced rendering techniques to emphasize natural lighting and realistic textures.</li>
      <li>Optimized environment setup for depth, balance, and immersive visual storytelling.</li>
    </ul>`,
    results: `
    Resolution & Impact
    The project successfully delivered a highly realistic visualization that communicates both architectural precision and aesthetic elegance.

    Outcome: Enhanced client presentation and improved visualization workflow for residential design projects.`,
    technologies: ['3ds Max', 'Corona Renderer', 'Photoshop', 'Architectural Visualization'],
    services: [
      '3D Exterior Visualization',
      'Architectural Rendering',
      'Lighting Simulation',
      'Material Optimization',
      'Concept Design Presentation'
    ],
    gallery: [
      'res/work2.png',
      'res/work23.png',
      'res/work26.png',
      'res/work25.png'
    ],
    // youtubeVideo: 'https://www.youtube.com/embed/4EXFOUzy1eE'
  },
  
  'project-3': {
    id: 'project-3',
    category: 'Urban-Architecture Design and Visualizing',
    title: ' Verde Haven: A Countryside Escape.',
    image: 'res/service5.png',
    overview: `
    Complete Villa visualization project in a countryside, including modeling, texturing, lighting, and rendering—all executed in multiple urban & 3D applications. Designed to reflect comfort, sophistication, and balance.`,
    challenge: `
    <ul class="challenge-list">
      <li>Coordinating assets and workflows across multiple 3D and urban design applications.</li>
      <li>Modeling and integrating realistic landscape and vegetation around the villa.</li>
      <li>Creating high-quality textures and materials that read well at close and distance views.</li>
      <li>Balancing render quality with reasonable render times for large exterior scenes.</li>
    </ul>`,
    solution: `
    <ul class="solution-list">
      <li>Implemented a multi-application pipeline for modeling, texturing, and scene assembly.</li>
      <li>Used instancing and optimized vegetation workflows to populate the landscape efficiently.</li>
      <li>Applied layered PBR materials and detailed texture work for realism.</li>
      <li>Tuned lighting rigs and render settings to achieve photoreal exterior illumination and manageable render times.</li>
    </ul>`,
    results: `
    Resolution & Impact
    The project delivered a cohesive and highly realistic countryside villa visualization that communicates comfort and sophistication, aiding client decision-making and marketing materials.

    Outcome: Enhanced presentation assets, faster stakeholder approvals, and an optimized exterior visualization workflow.`,
    technologies: ['3ds Max', 'Corona Renderer', 'Substance Painter', 'Photoshop', 'Forest Pack'],
    services: [
      'Villa Exterior Visualization',
      'Landscape & Vegetation Modeling',
      'Material & Texture Creation',
      'Lighting & Exterior Rendering',
      'Post-production & Compositing'
    ],
    gallery: [
      'res/work21.png',
      'res/work22.png',
      'res/work24.png'
    ],
    youtubeVideo: 'https://www.youtube.com/embed/BkeSDTYeY50'
    
  },
  
  'project-4': {
    id: 'project-4',
    category: 'Smart City Solutions',
    title: 'DigitalTwin-Urban-SmartCity-Animation-GIS',
    image: 'res/service6.png',
    overview: `
    Urban visualization turned into a game-style navigation experience. The project utilized various modeling and optimization tools before being deployed in Unreal Engine as an interactive walk/fly-through, for Digitaltwinning purposes.
    An interactive city-scale simulation built in Unreal Engine with real GIS, BIM, and photogrammetry data.

    The urban simulation showcases:
    ✅ First-person & fly-through exploration
    ✅ AI-driven pedestrian crowds
    ✅ Smart traffic logic — cars stop for pedestrians
    ✅ Indoor & outdoor navigation
    ✅ Green spaces, rivers, and infrastructure layers

    This project proves how Digital Twins can support urban planning, mobility studies, climate action, and citizen engagement.`,
    challenge: `
    <ul class="challenge-list">
      <li>Integrating large-scale GIS, BIM, and photogrammetry datasets into a single optimized Unreal Engine environment.</li>
      <li>Creating AI-driven behaviors for pedestrians and vehicles with realistic logic.</li>
      <li>Balancing visual fidelity and performance for smooth real-time navigation.</li>
      <li>Ensuring accuracy of geospatial context while maintaining interactivity.</li>
    </ul>`,
    solution: `
    <ul class="solution-list">
      <li>Streamlined GIS and BIM data pipelines and optimized assets for real-time rendering.</li>
      <li>Developed AI logic for traffic and pedestrian systems to simulate realistic city movement.</li>
      <li>Implemented LOD systems and texture streaming to maintain performance.</li>
      <li>Added interactive layers for smart city features such as mobility, energy, and climate visualization.</li>
    </ul>`,
    results: `
    Resolution & Impact
    The Smart City Simulation demonstrated how immersive, data-driven digital twins can revolutionize urban planning and citizen engagement.

    Outcome: Improved decision-making, enhanced communication with stakeholders, and a scalable framework for smart urban development.`,
    technologies: ['Unreal Engine', 'GIS Integration', 'BIM', 'Photogrammetry', 'AI Simulation', 'Blueprint Scripting'],
    services: [
      'Digital Twin Development',
      'Urban Simulation & Visualization',
      'Real-time GIS Integration',
      'AI-driven Traffic & Crowd Systems',
      'Interactive 3D Navigation',
      'Smart City Data Visualization'
    ],
    gallery: [
      // 'res/work51.png',
      // 'res/work52.png',
      // 'res/work53.png'
    ],
    videos: [
      'https://www.youtube.com/embed/4EXFOUzy1eE',
      'https://www.youtube.com/embed/Ndpj2WaM8TE',
      'https://www.youtube.com/embed/kt0SjnuWCcQ',
      'https://www.youtube.com/embed/WjNHqD8189U'
    ]
    
  },

  // NEW project - shows 3 videos and 1 image when opened
  'project-5': {
    id: 'project-5',
    category: 'Realtime Render, Interactive VR, 3D Visualization',
    title: 'Immersive Motion: Real-Time VR & Simulations',
    image: 'res/work54.png',
    overview: `
    This real-time city environment blends technical accuracy with visual clarity. Optimized assets and performance settings were tuned for an Unreal Engine navigation tool that feels like an open-world game.`,
    challenge: `
    Balancing technical fidelity with runtime performance for VR and cinematic-quality camera shots in an interactive environment.`,
    solution: `
     Delivered a responsive VR-ready city demo with cinematic flythroughs and real-time responsiveness suitable for demos and stakeholder walkthroughs.`,
    results: `
    A compact, media-rich case study ready for embedding in the portfolio.`,
    technologies: ['Unreal Engine', 'Realtime Rendering', 'VR Interaction', 'Cinematic Camera Rigs'],
    services: [
    'Realtime City Visualization',
    'VR Integration & Interaction',
    'Cinematic Camera Design',
    'Performance Optimization'
    ],
    // single image in gallery
    gallery: [
      'res/work54.png'
    ],
    // multiple embedded YouTube videos (use embed URLs)
    videos: [
      'https://www.youtube.com/embed/4EXFOUzy1eE',
      'https://www.youtube.com/embed/aatmjpEnf2E',
      'https://www.youtube.com/embed/aGm-jkzsR4w'
    ]
  },
  'project-6': {
    id: 'project-6',
    category: 'Tranquil Layers: A Contemporary Living-room Escape',
    title: '3D Visualization',
    image: 'res/service2.png',
    overview: `
    Subtle textures, layered lighting, and a calming palette come together in this Ultra Realistic 3D Living-room visualization.`,
    challenge: `
    <ul class="challenge-list">
      <li>Achieving harmony between textures, color palette, and light composition.</li>
      <li>Reproducing realistic materials and reflections within a compact interior space.</li>
      <li>Balancing soft ambient light with focused highlights to maintain depth and realism.</li>
    </ul>`,
    solution: `
    <ul class="solution-list">
      <li>Built a detailed 3D model emphasizing composition and spatial flow.</li>
      <li>Used layered lighting setups to achieve both natural and artificial illumination.</li>
      <li>Applied PBR-based materials and high-quality shaders for fabric, wood, and metal surfaces.</li>
      <li>Final color grading and tone mapping completed in post-production for warmth and depth.</li>
    </ul>`,
    results: `
    Resolution & Impact
    The result is a serene, photorealistic interior visualization that highlights material quality and ambiance, helping clients envision their modern living spaces with clarity.

    Outcome: Improved design presentation quality and a streamlined rendering workflow.`,
    technologies: ['3ds Max', 'Vray', 'Photoshop', 'Lighting & Rendering'],
    services: [
      'Living-room 3D Visualization',
      'Material & Texture Design',
      'Lighting Composition',
      'Post-production & Color Grading',
      'Interior Detailing'
    ],

    gallery: [
      'res/work3.png',
      'res/work33.png',
      'res/work32.png',
      'res/work31.png'
    ],
    // youtubeVideo: 'https://www.youtube.com/embed/aatmjpEnf2E'
  },

};

// Get project ID from URL parameters
function getProjectId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id') || 'project-1';
}

// Load project details
function loadProjectDetails() {
  const projectId = getProjectId();
  const project = projectsData[projectId];
  const lang = localStorage.getItem('lang') || 'en';
  const translations = window.translations;
  
  if (!project) {
    window.location.href = 'index.html';
    return;
  }
  
  // Update page title
  document.title = `${project.title} - 3DXENON`;
  
  // Hero section
  document.getElementById('heroImage').src = project.image;
  
  const categoryEl = document.getElementById('detailCategory');
  const titleEl = document.getElementById('detailTitle');
  
  // Use a normalized key for project translations: 'project-6' -> 'project.6'
  const projKey = project.id.replace('-', '.');

  if (translations && translations[lang]) {
    const translatedCategory = translations[lang][projKey + '.category'];
    const translatedTitle = translations[lang][projKey + '.title'];

    categoryEl.textContent = (categoryEl && translatedCategory) ? translatedCategory : project.category;
    titleEl.textContent = (titleEl && translatedTitle) ? translatedTitle : project.title;
  }
  
  // Main content
  // Attempt to load localized content for the project's sections if available

  const overviewEl = document.getElementById('detailOverview');
  const challengeEl = document.getElementById('detailChallenge');
  const solutionEl = document.getElementById('detailSolution');
  const resultsEl = document.getElementById('detailResults');

  if (translations[lang] && translations[lang][projKey + '.overview']) {
    overviewEl.innerHTML = translations[lang][projKey + '.overview'];
  } else if (overviewEl) {
    overviewEl.textContent = project.overview;
  }

  if (translations[lang] && translations[lang][projKey + '.challenge']) {
    challengeEl.innerHTML = translations[lang][projKey + '.challenge'];
  } else if (challengeEl) {
    challengeEl.innerHTML = project.challenge;
  }

  if (translations[lang] && translations[lang][projKey + '.solution']) {
    solutionEl.innerHTML = translations[lang][projKey + '.solution'];
  } else if (solutionEl) {
    solutionEl.innerHTML = project.solution;
  }

  if (translations[lang] && translations[lang][projKey + '.results']) {
    resultsEl.innerHTML = translations[lang][projKey + '.results'];
  } else if (resultsEl) {
    resultsEl.textContent = project.results;
  }
  
  // Services - with translation support
  const servicesContainer = document.getElementById('detailServices');

  // Try to get translated services, fallback to English
  const translatedServices = project.services.map((service, index) => {
    const serviceKey = `${projKey}.services.${index + 1}`;
    if (translations[lang] && translations[lang][serviceKey]) {
      return translations[lang][serviceKey];
    }
    return service;
  });

  servicesContainer.innerHTML = translatedServices.map(service =>
    `<li>${service}</li>`
  ).join('');
  
  // Gallery with images and YouTube video(s)
  const galleryContainer = document.getElementById('detailGallery');
  
  let galleryHTML = '';

  // Add images from gallery array (if any)
  if (project.gallery && project.gallery.length) {
    galleryHTML += project.gallery.map(img => 
      `<img src="${img}" alt="${project.title}" class="gallery-image" onclick="openLightbox('${img}')">`
    ).join('');
  }

  // If there is a 'videos' array, add each as an iframe
  // NOTE: set inline height (300px) so video boxes match image height and all appear correctly
  if (project.videos && project.videos.length) {
    galleryHTML += project.videos.map(vUrl => `
      <div class="video-container" style="height:300px;">
        <iframe
          src="${vUrl}"
          title="YouTube video player"
          frameborder="0"
          loading="lazy"
          style="width:100%; height:100%; border:0;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    `).join('');
  } else if (project.youtubeVideo) {
    // backward compatibility for single youtubeVideo field
    galleryHTML += `
      <div class="video-container" style="height:300px;">
        <iframe
          src="${project.youtubeVideo}" 
          title="YouTube video player" 
          frameborder="0" 
          loading="lazy"
          style="width:100%; height:100%; border:0;"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
    `;
  }
  
  galleryContainer.innerHTML = galleryHTML;
  
  // Load related projects
  loadRelatedProjects(projectId);
  
  // Create lightbox
  createLightbox();
}

// Load related projects
function loadRelatedProjects(currentProjectId) {
  const relatedContainer = document.getElementById('relatedProjects');
  const lang = localStorage.getItem('lang') || 'en';
  const translations = window.translations;
  const allProjects = Object.values(projectsData);
  const relatedProjects = allProjects.filter(p => p.id !== currentProjectId).slice(0, 5);
  
  relatedContainer.innerHTML = relatedProjects.map(project => {
    const projKey = project.id.replace('-', '.');
    const category = (translations && translations[lang] && translations[lang][projKey + '.category']) ? translations[lang][projKey + '.category'] : project.category;
    const title = (translations && translations[lang] && translations[lang][projKey + '.title']) ? translations[lang][projKey + '.title'] : project.title;
    
    return `
    <a href="card-details.html?id=${project.id}" class="related-card">
      <div class="related-card-image">
        <img src="${project.image}" alt="${title}">
      </div>
      <div class="related-card-content">
        <div class="related-card-category">${category}</div>
        <h3 class="related-card-title">${title}</h3>
      </div>
    </a>
  `}).join('');
}

// Create Lightbox Element
function createLightbox() {
  const lang = localStorage.getItem('lang') || 'en';
  const translations = window.translations;
  
  const lightboxHTML = `
    <div id="imageLightbox" class="lightbox">
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-content" id="lightboxImage">
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', lightboxHTML);
  
  // Close lightbox when clicking X or outside image
  document.getElementById('imageLightbox').addEventListener('click', function(e) {
    if (e.target.classList.contains('lightbox') || e.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });
  
  // Close with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

// Open Lightbox
function openLightbox(imageSrc) {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  lightboxImg.src = imageSrc;
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close Lightbox
function closeLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadProjectDetails);

// Update translations on language change
window.addEventListener('langChanged', (e) => {
  const lang = e.detail.lang;
  const translations = window.translations;

  if (translations && translations[lang]) {
    const backLink = document.querySelector('.back-btn');
    const relatedTitle = document.querySelector('.related-title');

    if (backLink && translations[lang]['details.back']) {
      const span = backLink.querySelector('span');
      if (span) span.textContent = translations[lang]['details.back'];
    }

    if (relatedTitle && translations[lang]['details.related']) {
      relatedTitle.textContent = translations[lang]['details.related'];
    }

    // Reload project details to update all translated content
    loadProjectDetails();
  }
});

// Smooth scroll to top
window.scrollTo(0, 0);
