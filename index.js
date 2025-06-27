// Data for dynamic content
const portfolioData = {
    skills: [
        {
            name: "JavaScript",
            level: "Advanced",
            logo: "JS",
            class: "javascript"
        },
        {
            name: "React",
            level: "Intermediate",
            logo: "⚛️",
            class: "react"
        },
        {
            name: "HTML/CSS",
            level: "Advanced",
            logo: "HTML",
            class: "html"
        },
        {
            name: "Git",
            level: "Advanced",
            logo: "GIT",
            class: "git"
        },
        {
            name: "JSON",
            level: "Intermediate",
            logo: "JSON",
            class: "json"
        },
        {
            name: "Bootstrap",
            level: "Advanced",
            logo: "BS",
            class: "bootstrap"
        },
        {
            name: "Tailwind CSS",
            level: "Intermediate",
            logo: "TW",
            class: "tailwind"
        }
    ],
    tools: [
        {
            name: "Adobe Experience Manager",
            level: "Advanced",
            logo: "AEM",
            class: "aem"
        },
        {
            name: "WordPress",
            level: "Advanced",
            logo: "WP",
            class: "wordpress"
        },
        {
            name: "Drupal",
            level: "Intermediate",
            logo: "DR",
            class: "drupal"
        },
        {
            name: "VS Code",
            level: "Advanced",
            logo: "VS",
            class: "vscode"
        },
        {
            name: "Figma",
            level: "Intermediate",
            logo: "FG",
            class: "figma"
        },
        {
            name: "Photoshop",
            level: "Intermediate",
            logo: "PS",
            class: "photoshop"
        }
    ],
    projects: [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with modern web technologies for optimal performance.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            liveLink: "#",
            githubLink: "https://github.com/MadhanRajC/"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather application that provides current conditions and forecasts with beautiful visualizations and location-based services.",
            tech: ["JavaScript", "API Integration", "Chart.js", "CSS3"],
            liveLink: "#",
            githubLink: "https://github.com/MadhanRajC/"
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            liveLink: "https://jazzy-kitsune-d4a2bf.netlify.app/",
            githubLink: "https://github.com/MadhanRajC/"
        }
    ]
};

// DOM Elements
const skillsContainer = document.getElementById('skills-container');
const toolsContainer = document.getElementById('tools-container');
const projectsContainer = document.getElementById('projects-container');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const themeToggle = document.getElementById('theme-toggle');

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    loadSkills();
    loadTools();
    loadProjects();
    setupNavigation();
    setupContactForm();
    setupSmoothScrolling();
    setupThemeToggle();
    loadTheme();
});

// Theme Toggle Functionality
function setupThemeToggle() {
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a subtle animation
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Load skills dynamically
function loadSkills() {
    skillsContainer.innerHTML = '';
    
    portfolioData.skills.forEach(skill => {
        const skillCard = createSkillCard(skill);
        skillsContainer.appendChild(skillCard);
    });
}

// Create skill card element
function createSkillCard(skill) {
    const card = document.createElement('div');
    card.className = 'skill-card';
    
    card.innerHTML = `
        <div class="skill-icon ${skill.class}">${skill.logo}</div>
        <h3 class="skill-name">${skill.name}</h3>
        <p class="skill-level">${skill.level}</p>
    `;
    
    return card;
}

// Load tools dynamically
function loadTools() {
    toolsContainer.innerHTML = '';
    
    portfolioData.tools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsContainer.appendChild(toolCard);
    });
}

// Create tool card element
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    
    card.innerHTML = `
        <div class="tool-icon ${tool.class}">${tool.logo}</div>
        <h3 class="tool-name">${tool.name}</h3>
        <p class="tool-level">${tool.level}</p>
    `;
    
    return card;
}

// Load projects dynamically
function loadProjects() {
    projectsContainer.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    const techTags = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    const links = [];
    if (project.liveLink) {
        links.push(`<a href="${project.liveLink}" class="project-link" target="_blank">Live Demo</a>`);
    }
    if (project.githubLink) {
        links.push(`<a href="${project.githubLink}" class="project-link" target="_blank">GitHub</a>`);
    }
    
    card.innerHTML = `
        <div class="project-image">
            <span>Project Preview</span>
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techTags}
            </div>
            <div class="project-links">
                ${links.join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Setup navigation functionality
function setupNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 20px var(--shadow-medium)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

// Setup contact form
function setupContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon.`);
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.skill-card, .tool-card, .project-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations after content is loaded
setTimeout(addScrollAnimations, 100);

// Utility function to update portfolio data
function updatePortfolioData(newData) {
    if (newData.skills) {
        portfolioData.skills = newData.skills;
        loadSkills();
    }
    
    if (newData.tools) {
        portfolioData.tools = newData.tools;
        loadTools();
    }
    
    if (newData.projects) {
        portfolioData.projects = newData.projects;
        loadProjects();
    }
}

// Export for potential future use
window.portfolioData = portfolioData;
window.updatePortfolioData = updatePortfolioData;