

const PROJECTS = [
  {
    title: "V A HERO",
    tag: "Capstone Project",
    desc: "A game-based adaptive learning system designed to assess students’ first aid knowledge through interactive scenarios and real-time evaluation. V a HERO provides a web-based dashboard that tracks student performance, identifies knowledge gaps, and enables the Red Cross Valenzuela Chapter to make data-driven decisions for improving first aid training and emergency preparedness in schools.",
    images: ["assets/pic3.jpg", "assets/pic5.png", "assets/pic6.png","assets/game1.png", "assets/game2.png", "assets/game3.png"],
    liveDemo: "https://vahero.org/",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Role", value: "Documentation Lead & Programmer" },
      { label: "Team Size", value: "4 members" },
      { label: "Duration", value: "1 year" },
      { label: "Status", value: "Completed" },
      { label: "Type", value: "Academic" },
    ],
    tech: ["HTML/CSS", "JavaScript", "Firebase", "Unity"],
  },
  {
    title: "Game Dev Project",
    tag: "Group Project",
    desc: "Lasam’s Diner Website is an online platform designed to showcase the restaurant’s menu, services, and ordering process in a simple and user-friendly way. It allows customers to easily browse food categories, view detailed menu items, and place orders conveniently while providing essential information such as location, contact details, and dining background. The website enhances the customer experience by offering a modern, accessible, and organized way to explore and order meals from the diner.",
    images: ["assets/web2.png", "assets/web3.png", "assets/web4.png"],
    liveDemo: "",
    meta: [
      { label: "Year", value: "2024" },
      { label: "Role", value: "Programmer" },
      { label: "Team Size", value: "4 members" },
      { label: "Language", value: "HTML" },
      { label: "Status", value: "Completed" },
      { label: "Platform", value: "Web" },
    ],
    tech: ["HTML", "CSS", "JavaScript",],
  },
  {
    title: "DJMTech Shop - User Account Module",
    tag: "Group Project",
    desc: "DJMTech E-Commerce Site is an online platform designed to sell tech products efficiently, providing customers with a seamless shopping experience while helping the business manage products, orders, and inventory digitally. It modernizes traditional sales methods by offering a convenient and secure way to browse, order, and purchase tech items online.",
    images: ["assets/webs2.png", "assets/webs3.png", "assets/webs4.png"],
    liveDemo: "",
    meta: [
      { label: "Year", value: "2025" },
      { label: "Role", value: "Quality Assurance Tester" },
      { label: "Team Size", value: "6 members" },
      { label: "Language", value: "Php" },
      { label: "Status", value: "Completed" },
      { label: "Platform", value: "Web" },
    ],
    tech: ["HTML", "CSS", "JavaScript", "Php", "MySQL"],
  },
];

// ─── DOM Ready ────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  generateStars();
  initNavbar();
  initScrollReveal();
  initCounters();
  initModal();
  initScrollTop();
  initContactForm();
  initActiveNav();
});

// ─── Stars ────────────────────────────────────────────────────
function generateStars() {
  const container = document.getElementById("stars");
  if (!container) return;
  const count = 90;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const s = document.createElement("div");
    s.className = "star";
    const size = Math.random() * 2.5 + 0.5;
    s.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;top:${Math.random() * 100}%;
      --dur:${Math.random() * 4 + 2}s;
      --del:${Math.random() * 4}s;
    `;
    frag.appendChild(s);
  }
  container.appendChild(frag);
}

// ─── Navbar ────────────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 30);
  }, { passive: true });

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });
}

// ─── Active Nav Highlight ─────────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-links a");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => observer.observe(s));
}

// ─── Scroll Reveal ────────────────────────────────────────────
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });

  elements.forEach(el => observer.observe(el));
}



// ─── Counter Animation ────────────────────────────────────────
function initCounters() {
  const nums = document.querySelectorAll(".stat-num");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  nums.forEach(n => observer.observe(n));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();

  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }
  requestAnimationFrame(step);
}

// ─── Modal ────────────────────────────────────────────────────
function initModal() {
  const modal = document.getElementById("projectModal");
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");

  document.addEventListener("click", function(e) {
    const btn = e.target.closest(".btn-view");
    if (btn) {
      const idx = parseInt(btn.dataset.project, 10);
      openModal(PROJECTS[idx]);
    }
  });

  function openModal(project) {
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDesc").textContent = project.desc;
    modal.querySelector(".modal-tag").textContent = project.tag;

    // Meta
    document.getElementById("modalMeta").innerHTML = project.meta.map(m => `
      <div class="modal-meta-item">
        <div class="modal-meta-label">${m.label}</div>
        <div class="modal-meta-val">${m.value}</div>
      </div>
    `).join("");

    // Tech
    document.getElementById("modalTech").innerHTML = project.tech.map(t =>
      `<span class="tech-badge">${t}</span>`
    ).join("");

    // Live Demo button
    const actions = modal.querySelector(".modal-actions");
    actions.innerHTML = project.liveDemo
      ? `<a href="${project.liveDemo}" class="btn-primary" target="_blank">Live Demo</a>`
      : `<span style="color:var(--text-dim);font-size:0.85rem;">No live demo available</span>`;

    // Build thumbnails and main photo dynamically
    const photoWrap = modal.querySelector(".modal-photo-wrap");
    const images = project.images || [];

    photoWrap.innerHTML = `
      <div class="modal-photo">
        ${images[0] ? `<img src="${images[0]}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius);">` : `<span>photo</span>`}
      </div>
      ${images.map((src, i) => `
        <div class="modal-photo-thumb ${i === 0 ? 'active' : ''}" data-src="${src}">
          <img src="${src}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-sm);">
        </div>
      `).join("")}
    `;

    // Thumb click → update main photo
    photoWrap.querySelectorAll(".modal-photo-thumb").forEach(thumb => {
      thumb.addEventListener("click", () => {
        photoWrap.querySelectorAll(".modal-photo-thumb").forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        const mainPhoto = photoWrap.querySelector(".modal-photo");
        mainPhoto.innerHTML = `<img src="${thumb.dataset.src}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius);">`;
      });
    });

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => closeBtn.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}

// ─── Scroll to Top ────────────────────────────────────────────
function initScrollTop() {
  const btn = document.getElementById("scrollTop");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ─── Contact Form ─────────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const btn = form.querySelector("button[type=submit]");
    const original = btn.textContent;

    btn.textContent = "Sending...";
    btn.style.opacity = "0.7";
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = "Sent! ✓";
      btn.style.opacity = "1";
      btn.style.background = "#22c55e";
      form.reset();

      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = "";
        btn.disabled = false;
      }, 2800);
    }, 1200);
  });
}

// ─── Smooth hover tilt on work photos ────────────────────────
document.addEventListener("mousemove", e => {
  document.querySelectorAll(".work-photo").forEach(card => {
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    card.style.transform = `perspective(600px) rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg) scale(1.02)`;
  });
});

document.querySelectorAll(".work-photo").forEach(card => {
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});