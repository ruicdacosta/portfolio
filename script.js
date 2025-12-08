// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu when a link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Set current year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Publication filter buttons
const filterButtons = document.querySelectorAll(".chip-filter");
const publications = document.querySelectorAll(".pub-item");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.getAttribute("data-filter");

    // Update active state
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show/hide publications
    publications.forEach((pub) => {
      const matches = type === "all" || pub.getAttribute("data-type") === type;
      pub.style.display = matches ? "list-item" : "none";
    });
  });
});

// Demo contact form handling (no backend)
document.addEventListener("submit", (e) => {
  if (e.target.matches(".contact-form")) {
    e.preventDefault();
    alert(
      "Thanks for your message! (Note: this form is a static demo; connect a backend or service to receive emails.)"
    );
    e.target.reset();
  }
});

// -------------------------
// Linux-terminal theme handling (light / dark)
// -------------------------
const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyMode(mode) {
  const safeMode = mode === "dark" ? "dark" : "light";
  root.setAttribute("data-mode", safeMode);

  if (themeToggle) {
    const isDark = safeMode === "dark";
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  try {
    localStorage.setItem("colorMode", safeMode);
  } catch {
    // localStorage might be blocked, ignore
  }
}

// Initialize theme from storage or defaults
document.addEventListener("DOMContentLoaded", () => {
  let storedMode = "light";

  try {
    storedMode = localStorage.getItem("colorMode") || storedMode;
  } catch {
    // ignore
  }

  applyMode(storedMode);
});

// Toggle dark / light mode
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentMode = root.getAttribute("data-mode") || "light";
    const nextMode = currentMode === "dark" ? "light" : "dark";
    applyMode(nextMode);
  });
}
