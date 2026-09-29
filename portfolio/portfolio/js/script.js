const THEME_KEY = "portfolio-theme";
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const navbarNav = document.getElementById("navbarNav");

const applyTheme = (theme) => {
  const isDarkTheme = theme === "dark";
  body.classList.toggle("light-theme", !isDarkTheme);

  if (themeToggle) {
    const icon = themeToggle.querySelector(".theme-icon");
    if (icon) {
      icon.textContent = isDarkTheme ? "🌙" : "☀️";
    }
  }

  localStorage.setItem(THEME_KEY, theme);
};

const getSavedTheme = () => {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }
  return "dark";
};

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLightTheme = body.classList.contains("light-theme");
    applyTheme(isLightTheme ? "dark" : "light");
  });
}

applyTheme(getSavedTheme());

const projectItems = [...document.querySelectorAll(".project-item")];
const filterButtons = [...document.querySelectorAll(".filter-btn")];

const filterProjects = (selectedFilter) => {
  projectItems.forEach((item) => {
    const matches = selectedFilter === "all" || item.dataset.category === selectedFilter;
    item.style.display = matches ? "" : "none";
  });

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === selectedFilter;
    button.classList.toggle("active", isActive);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterProjects(button.dataset.filter);
  });
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

const showFieldError = (field, message) => {
  const feedback = field.parentElement.querySelector(".invalid-feedback");
  field.classList.add("is-invalid");
  field.setAttribute("aria-invalid", "true");

  if (feedback) {
    feedback.textContent = message;
    feedback.style.display = "block";
  }
};

const clearFieldError = (field) => {
  const feedback = field.parentElement.querySelector(".invalid-feedback");
  field.classList.remove("is-invalid");
  field.setAttribute("aria-invalid", "false");

  if (feedback) {
    feedback.style.display = "none";
  }
};

const validateField = (field) => {
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = "";

  if (field.id === "fullName") {
    isValid = value.length >= 2;
    errorMessage = "Please enter your full name.";
  }

  if (field.id === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isValid = emailPattern.test(value);
    errorMessage = "Please enter a valid email address.";
  }

  if (field.id === "subject") {
    isValid = value.length >= 3;
    errorMessage = "Please enter a subject.";
  }

  if (field.id === "message") {
    isValid = value.length >= 20;
    errorMessage = "Message must be at least 20 characters long.";
  }

  if (isValid) {
    clearFieldError(field);
  } else {
    showFieldError(field, errorMessage);
  }

  return isValid;
};

if (contactForm) {
  const inputFields = [...contactForm.querySelectorAll("input, textarea")];

  inputFields.forEach((field) => {
    field.addEventListener("input", () => validateField(field));
    field.addEventListener("blur", () => validateField(field));
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let allValid = true;
    inputFields.forEach((field) => {
      if (!validateField(field)) {
        allValid = false;
      }
    });

    if (allValid) {
      formMessage.textContent = "Thank you! Your message has been sent successfully.";
      formMessage.className = "form-message alert alert-success mt-3";
      contactForm.reset();
      inputFields.forEach((field) => clearFieldError(field));
    } else {
      formMessage.textContent = "Please correct the highlighted fields before submitting.";
      formMessage.className = "form-message alert alert-danger mt-3";
    }
  });

  contactForm.addEventListener("reset", () => {
    setTimeout(() => {
      inputFields.forEach((field) => clearFieldError(field));
      formMessage.textContent = "";
      formMessage.className = "form-message mt-3";
    }, 0);
  });
}

const navLinks = [...document.querySelectorAll(".nav-link")];
const sections = [...document.querySelectorAll("main section[id]")];

const highlightActiveNav = () => {
  let currentSectionId = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href");
    const isActive = targetId === `#${currentSectionId}`;
    link.classList.toggle("active", isActive);
  });
};

window.addEventListener("scroll", highlightActiveNav);
window.addEventListener("load", highlightActiveNav);

const smoothScrollLinks = [...document.querySelectorAll('a[href^="#"]')];

smoothScrollLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

      if (navbarNav && window.innerWidth < 992 && typeof bootstrap !== "undefined") {
        const navbarCollapse = bootstrap.Collapse.getOrCreateInstance(navbarNav);
        navbarCollapse.hide();
      }
    }
  });
});
